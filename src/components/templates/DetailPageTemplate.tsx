import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import serviceBanner from '@/assets/illustrations/service-banner.svg';
import { ArrowUpRight, CheckCircle2, type LucideIcon } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import { Button } from '@/components/ui/Button';

export interface Highlight {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface RelatedLink {
  label: string;
  to: string;
}

export interface DetailPageData {
  eyebrow: string;
  title: string;
  description: string;
  accent: 'accent' | 'accent-blue' | 'accent-gold' | 'accent-sage' | 'accent-green';
  crumbLabel: string;
  crumbTo: string;
  overview: string[];
  highlights: Highlight[];
  highlightsTitle?: string;
  stats?: Stat[];
  statsTitle?: string;
  statsDesc?: string;
  quote?: { text: string; author: string };
  related: RelatedLink[];
  ctaTitle: string;
  ctaDesc: string;
}

const ACCENT_ICON_BG: Record<string, string> = {
  accent: 'bg-accent/15',
  'accent-blue': 'bg-accent-blue/15',
  'accent-gold': 'bg-accent-gold/15',
  'accent-sage': 'bg-accent-sage/15',
  'accent-green': 'bg-accent-green/15',
};

const ACCENT_ICON_TEXT: Record<string, string> = {
  accent: 'text-accent-dark',
  'accent-blue': 'text-primary',
  'accent-gold': 'text-primary',
  'accent-sage': 'text-primary',
  'accent-green': 'text-primary',
};

export default function DetailPageTemplate({ data }: { data: DetailPageData }) {
  const { eyebrow, title, description, accent, crumbLabel, crumbTo, overview, highlights, highlightsTitle, stats, statsTitle, statsDesc, quote, related, ctaTitle, ctaDesc } = data;

  return (
    <>
      <PageBanner
        eyebrow={eyebrow}
        title={title}
        description={description}
        accent={accent}
        crumbs={[{ label: crumbLabel, to: crumbTo }, { label: title }]}
      />

      {/* Overview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-5">
          {overview.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="text-text-secondary text-base md:text-lg leading-relaxed"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Visual / illustration band */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-surface-alt border border-border"
          >
            <div className={`absolute -top-20 -right-20 w-72 h-72 rounded-full ${ACCENT_ICON_BG[accent]} blur-3xl`} />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative grid md:grid-cols-2 gap-10 items-center px-8 py-12 md:px-14 md:py-16">
              <div>
                <span className={`inline-block text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-full ${ACCENT_ICON_BG[accent]} ${ACCENT_ICON_TEXT[accent]} mb-5`}>
                  Inside an engagement
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-text-primary mb-4 leading-snug">
                  What working with us actually looks like
                </h3>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
                  Every engagement starts with a working session, not a proposal. We map the
                  problem together, agree on what success looks like in numbers, and only then
                  scope the plan — so the work stays grounded in your reality from day one.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Kickoff', sub: 'Week 1' },
                    { label: 'First milestone', sub: 'Week 3–4' },
                    { label: 'Mid-point review', sub: 'Week 8' },
                    { label: 'Handover', sub: 'Week 12+' },
                  ].map((m) => (
                    <div key={m.label} className="border-l-2 border-border-strong pl-3">
                      <p className="text-sm font-medium text-text-primary">{m.label}</p>
                      <p className="text-xs text-text-muted mt-0.5">{m.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Illustration image */}
              <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden border border-border">
                <img src={serviceBanner} alt={`${title} illustration`} className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      {highlights.length > 0 && (
        <section className="py-20 lg:py-28 bg-surface-alt">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl text-text-primary mb-12"
            >
              {highlightsTitle || 'What this covers'}
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-card border border-border rounded-2xl p-7"
                >
                  <div className={`w-11 h-11 rounded-xl ${ACCENT_ICON_BG[accent]} flex items-center justify-center mb-5`}>
                    <h.icon className={`w-5 h-5 ${ACCENT_ICON_TEXT[accent]}`} />
                  </div>
                  <h3 className="font-medium text-text-primary text-lg mb-2">{h.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats */}
      {stats && stats.length > 0 && (
        <section className="py-20 lg:py-28 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className={`text-xs font-medium uppercase tracking-wider text-accent-gold`}>By the numbers</span>
              <h2 className="font-display text-3xl mt-3 mb-4">{statsTitle || 'Results that speak for themselves'}</h2>
              <p className="text-white/70 text-sm leading-relaxed">{statsDesc}</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/10 rounded-xl p-5">
                  <p className="font-display text-2xl">{s.value}</p>
                  <p className="text-xs text-white/60 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote */}
      {quote && (
        <section className="py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="font-display text-2xl md:text-3xl text-text-primary leading-snug">"{quote.text}"</p>
              <p className="text-sm text-text-secondary mt-6">{quote.author}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 lg:py-28 bg-surface-alt">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="font-display text-2xl text-text-primary mb-8">You might also look at</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link key={r.label} to={r.to} className="group flex items-center justify-between bg-card border border-border rounded-xl px-6 py-5 hover:border-border-strong transition-colors">
                  <span className="text-sm font-medium text-text-primary">{r.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center bg-primary rounded-3xl py-16 px-8 relative overflow-hidden">
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-accent-sage/15 blur-3xl" />
          <CheckCircle2 className="w-8 h-8 text-accent-gold mx-auto mb-4 relative" />
          <h2 className="font-display text-3xl text-white mb-3 relative">{ctaTitle}</h2>
          <p className="text-white/70 text-sm mb-7 max-w-md mx-auto relative">{ctaDesc}</p>
          <div className="relative">
            <Button to="/contact" className="bg-white text-primary hover:bg-white/90">Book a consultation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
