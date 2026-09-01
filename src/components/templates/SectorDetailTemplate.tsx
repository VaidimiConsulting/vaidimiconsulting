import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, CheckCircle2 } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import { Button } from '@/components/ui/Button';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';
import sectorBanner from '@/assets/illustrations/sector-banner.svg';

// Sector pages use a "map & location" pattern — full-width banner image,
// alternating image/text rows, and a horizontal stat strip — deliberately
// different from the card-grid pattern used on Services pages.
export default function SectorDetailTemplate({ data }: { data: DetailPageData }) {
  const { eyebrow, title, description, accent, crumbLabel, crumbTo, overview, highlights, highlightsTitle, stats, statsTitle, statsDesc, quote, related, ctaTitle, ctaDesc } = data;

  return (
    <>
      <PageBanner eyebrow={eyebrow} title={title} description={description} accent={accent} crumbs={[{ label: crumbLabel, to: crumbTo }, { label: title }]} />

      {/* Banner image */}
      <section className="px-6 lg:px-10 -mt-6 lg:-mt-10 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-card border border-border">
          <img src={sectorBanner} alt={`${title} — sector overview illustration`} className="w-full h-auto block" />
        </motion.div>
      </section>

      {/* Overview, image-style two column */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-5">
          {overview.map((p, i) => (
            <motion.p key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-text-secondary text-base md:text-lg leading-relaxed border-l-4 border-accent-blue/40 pl-6">
              {p}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Highlights as horizontal alternating rows (not cards) */}
      {highlights.length > 0 && (
        <section className="py-20 lg:py-28 bg-surface-alt">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <h2 className="font-display text-3xl text-text-primary mb-12">{highlightsTitle || 'How we help'}</h2>
            <div className="space-y-0">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`flex items-center gap-8 py-8 border-b border-border ${i % 2 === 1 ? 'flex-row-reverse text-right' : ''}`}
                >
                  <div className="w-16 h-16 rounded-full bg-accent-blue/15 flex items-center justify-center flex-shrink-0">
                    <h.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className={`flex items-center gap-2 mb-1 ${i % 2 === 1 ? 'justify-end' : ''}`}>
                      <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                      <h3 className="font-medium text-text-primary text-lg">{h.title}</h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats strip */}
      {stats && stats.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
            <span className="text-xs font-medium uppercase tracking-wider text-accent-blue">{statsTitle || 'By the numbers'}</span>
            <p className="text-text-secondary text-sm max-w-md mx-auto mt-3 mb-12">{statsDesc}</p>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
              {stats.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <p className="font-display text-4xl text-primary">{s.value}</p>
                  <p className="text-xs text-text-muted mt-2 uppercase tracking-wider">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {quote && (
        <section className="py-20 bg-primary text-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <p className="font-display text-2xl md:text-3xl leading-snug">"{quote.text}"</p>
            <p className="text-sm text-white/70 mt-6">{quote.author}</p>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-20 lg:py-28 bg-surface-alt">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2 className="font-display text-2xl text-text-primary mb-8">Related sectors & services</h2>
            <div className="flex flex-wrap gap-4">
              {related.map((r) => (
                <Link key={r.label} to={r.to} className="group flex items-center gap-2 bg-card border border-border rounded-full px-5 py-3 hover:border-border-strong transition-colors">
                  <span className="text-sm font-medium text-text-primary">{r.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent-blue transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center bg-primary rounded-3xl py-16 px-8 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-accent-blue/20 blur-3xl" />
          <CheckCircle2 className="w-8 h-8 text-accent-blue mx-auto mb-4 relative" />
          <h2 className="font-display text-3xl text-white mb-3 relative">{ctaTitle}</h2>
          <p className="text-white/70 text-sm mb-7 max-w-md mx-auto relative">{ctaDesc}</p>
          <div className="relative"><Button to="/contact" className="bg-white text-primary hover:bg-white/90">Book a consultation</Button></div>
        </div>
      </section>
    </>
  );
}
