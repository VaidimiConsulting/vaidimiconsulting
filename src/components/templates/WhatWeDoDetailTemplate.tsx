import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import { Button } from '@/components/ui/Button';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';
import whatWeDoBanner from '@/assets/illustrations/whatwedo-banner.svg';

// What We Do pages use a "network / capability map" pattern — sub-items shown
// as chips, a central node illustration, and a connected-practices strip —
// deliberately different from Services, Sector, and Insights patterns.
export default function WhatWeDoDetailTemplate({ data }: { data: DetailPageData }) {
  const { eyebrow, title, description, accent, crumbLabel, crumbTo, overview, highlights, highlightsTitle, related, ctaTitle, ctaDesc } = data;

  return (
    <>
      <PageBanner eyebrow={eyebrow} title={title} description={description} accent={accent} crumbs={[{ label: crumbLabel, to: crumbTo }, { label: title }]} />

      {/* Network illustration + overview side by side */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5 order-2 md:order-1">
            {overview.map((p, i) => (
              <p key={i} className="text-text-secondary text-base leading-relaxed">{p}</p>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl overflow-hidden shadow-card border border-border order-1 md:order-2">
            <img src={whatWeDoBanner} alt={`${title} capability map`} className="w-full h-auto block" />
          </motion.div>
        </div>
      </section>

      {/* Sub-capabilities as chips/tags */}
      {highlights.length > 0 && (
        <section className="py-20 lg:py-28 bg-surface-alt">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <h2 className="font-display text-3xl text-text-primary mb-4">{highlightsTitle || 'What this includes'}</h2>
            <p className="text-text-secondary text-sm mb-10 max-w-lg">Each area below connects back to our core consulting practices.</p>
            <div className="flex flex-wrap gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-3 bg-card border border-border rounded-2xl px-5 py-4 max-w-xs hover:border-border-strong hover:shadow-soft transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent-green/15 flex items-center justify-center flex-shrink-0">
                    <h.icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">{h.title}</p>
                    <p className="text-xs text-text-secondary leading-relaxed mt-1">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Connected practices strip */}
      {related.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2 className="font-display text-2xl text-text-primary mb-8">Connects to</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((r, i) => (
                <motion.div key={r.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
                  <Link to={r.to} className="group flex items-center justify-between bg-primary/5 border border-primary/10 rounded-xl px-6 py-5 hover:bg-primary/10 transition-colors">
                    <span className="text-sm font-medium text-text-primary">{r.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center bg-primary rounded-3xl py-16 px-8 relative overflow-hidden">
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-accent-green/20 blur-3xl" />
          <CheckCircle2 className="w-8 h-8 text-accent-sage mx-auto mb-4 relative" />
          <h2 className="font-display text-3xl text-white mb-3 relative">{ctaTitle}</h2>
          <p className="text-white/70 text-sm mb-7 max-w-md mx-auto relative">{ctaDesc}</p>
          <div className="relative"><Button to="/contact" className="bg-white text-primary hover:bg-white/90">Book a consultation</Button></div>
        </div>
      </section>
    </>
  );
}
