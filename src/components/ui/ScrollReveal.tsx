import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in seconds */
  delay?: number;
  /** Animation variant */
  variant?: 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight';
  /** Whether to animate only once */
  once?: boolean;
  /** Custom tag — defaults to div */
  as?: 'div' | 'section' | 'article' | 'li';
}

const VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0 },
  },
};

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  variant = 'fadeUp',
  once = true,
}: ScrollRevealProps) {
  const v = VARIANTS[variant];

  return (
    <motion.div
      initial={v.hidden}
      whileInView={v.show}
      viewport={{ once, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
