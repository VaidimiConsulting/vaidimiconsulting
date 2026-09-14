import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Sparkles } from 'lucide-react';

interface CompactServiceBannerProps {
  label?: string;
  title: string;
  headline: string;
  description: string;
  bannerImage: string;
  accent: 'rose-navy' | 'green-navy' | 'rose-blue' | 'navy-green' | 'green-blue';
}

const ACCENT_STYLES = {
  'rose-navy': {
    badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    titleGradient: 'from-indigo-600 via-purple-600 to-emerald-600',
    arrowColor: '#4F46E5',
    glow: 'from-indigo-500/10 to-emerald-500/0',
  },
  'green-navy': {
    badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    titleGradient: 'from-indigo-600 via-purple-600 to-emerald-600',
    arrowColor: '#10B981',
    glow: 'from-emerald-500/10 to-indigo-500/0',
  },
  'rose-blue': {
    badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    titleGradient: 'from-indigo-600 via-purple-600 to-emerald-600',
    arrowColor: '#6366F1',
    glow: 'from-purple-500/10 to-indigo-500/0',
  },
  'navy-green': {
    badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    titleGradient: 'from-indigo-600 via-purple-600 to-emerald-600',
    arrowColor: '#4F46E5',
    glow: 'from-indigo-500/10 to-emerald-500/0',
  },
  'green-blue': {
    badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    titleGradient: 'from-indigo-600 via-purple-600 to-emerald-600',
    arrowColor: '#10B981',
    glow: 'from-emerald-500/10 to-indigo-500/0',
  },
};

export default function CompactServiceBanner({
  label = 'Marketing Consulting',
  title,
  headline,
  description,
  bannerImage,
  accent,
}: CompactServiceBannerProps) {
  const style = ACCENT_STYLES[accent];

  return (
    <section className="relative w-full bg-white pt-24 pb-8 md:pt-28 md:pb-12 border-b border-slate-100 overflow-hidden">
      {/* Decorative subtle background elements */}
      <div className={`pointer-events-none absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${style.glow} blur-3xl opacity-70`} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-500">
          <Link to="/services/marketing-consulting" className="hover:text-[#123B61] transition-colors">
            Marketing Consulting
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">{title}</span>
        </nav>

        {/* Banner Content Grid (30-40vh compact frame) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & Headers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border shadow-xs transition-transform hover:scale-105"
                 aria-label={label}>
              <span className={style.badgeBg}>
                <Sparkles className="w-3.5 h-3.5 inline mr-1" />
                {label}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {title}
            </h1>

            <p className={`font-display text-xl sm:text-2xl font-bold bg-gradient-to-r ${style.titleGradient} bg-clip-text text-transparent`}>
              {headline}
            </p>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              {description}
            </p>

            {/* Decorative Curved SVG Arrow */}
            <div className="pt-2 flex items-center gap-3">
              <svg width="120" height="24" viewBox="0 0 120 24" fill="none" className="opacity-80">
                <path
                  d="M4 18C28 6 52 20 84 10C96 6 106 10 114 14M114 14L104 10M114 14L108 20"
                  stroke={style.arrowColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Tailored Advisory Practice</span>
            </div>
          </motion.div>

          {/* Right Column: Premium Banner Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-slate-200/90 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] group">
              <img
                src={bannerImage}
                alt={`${title} banner`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
