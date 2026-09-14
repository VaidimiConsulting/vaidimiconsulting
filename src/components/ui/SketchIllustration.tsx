import { useEffect, useRef, useState, type ReactNode } from 'react';

interface SketchIllustrationProps {
  /** The SVG content to render — should include paths with stroke-based drawing */
  children: ReactNode;
  /** Hand-written caption (rendered in Caveat font) */
  caption?: string;
  /** Additional className for positioning */
  className?: string;
  /** Width of the SVG container */
  width?: number;
  /** Height of the SVG container */
  height?: number;
}

/**
 * SketchIllustration — wraps inline SVG sketches with scroll-triggered
 * stroke-dashoffset "draw-on" animation. Uses IntersectionObserver to
 * trigger the animation when the sketch enters the viewport.
 *
 * The SVG children should use the `sketch-draw` CSS class, and each
 * path should have `--path-length` CSS variable set for proper animation.
 */
export default function SketchIllustration({
  children,
  caption,
  className = '',
  width,
  height,
}: SketchIllustrationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative inline-flex flex-col items-center ${className}`}
      style={{ width: width ? `${width}px` : undefined, height: height ? `${height}px` : undefined }}
    >
      <div className={`sketch-draw ${isVisible ? 'is-visible' : ''}`}>
        {children}
      </div>
      {caption && (
        <span className="font-sketch text-lg text-text-muted mt-3 italic select-none">
          {caption}
        </span>
      )}
    </div>
  );
}
