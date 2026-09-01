import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  to?: string;
}

interface PageBannerProps {
  eyebrow: string;
  title: string;
  description: string;
  accent?: 'accent' | 'accent-blue' | 'accent-gold' | 'accent-sage' | 'accent-green';
  crumbs?: Crumb[];
}

const ACCENT_BG: Record<string, string> = {
  accent: 'bg-accent/10',
  'accent-blue': 'bg-accent-blue/10',
  'accent-gold': 'bg-accent-gold/10',
  'accent-sage': 'bg-accent-sage/10',
  'accent-green': 'bg-accent-green/10',
};

const ACCENT_TEXT: Record<string, string> = {
  accent: 'text-accent-dark',
  'accent-blue': 'text-primary',
  'accent-gold': 'text-primary',
  'accent-sage': 'text-primary',
  'accent-green': 'text-primary',
};

const ACCENT_SOLID: Record<string, string> = {
  accent: 'bg-accent',
  'accent-blue': 'bg-accent-blue',
  'accent-gold': 'bg-accent-gold',
  'accent-sage': 'bg-accent-sage',
  'accent-green': 'bg-accent-green',
};

export default function PageBanner({ eyebrow, title, description, accent = 'accent', crumbs = [] }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-surface-alt pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Ambient shapes */}
      <div className={`absolute -top-24 -right-24 w-96 h-96 rounded-full ${ACCENT_BG[accent]} blur-3xl`} />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />

      {/* Floating accent dots */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className={`hidden md:block absolute top-28 right-[14%] w-4 h-4 rounded-full ${ACCENT_SOLID[accent]}`}
      />
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="hidden md:block absolute bottom-16 right-[24%] w-3 h-3 rounded-full bg-primary/30"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {crumbs.length > 0 && (
          <div className="flex items-center gap-1.5 text-xs text-text-muted mb-6">
            <Link to="/" className="hover:text-text-primary transition-colors">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-text-primary transition-colors">{c.label}</Link>
                ) : (
                  <span className="text-text-secondary">{c.label}</span>
                )}
              </span>
            ))}
          </div>
        )}

        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`inline-block text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-full ${ACCENT_BG[accent]} ${ACCENT_TEXT[accent]} mb-5`}
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary max-w-3xl leading-[1.1]"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="text-text-secondary text-base md:text-lg mt-6 max-w-xl leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
