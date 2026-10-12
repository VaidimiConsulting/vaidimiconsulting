import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';
import insightBanner from '@/assets/illustrations/insight-banner.svg';

// Insights pages use an editorial / magazine pattern — large featured image,
// numbered article list instead of cards, and a pulled-quote block —
// deliberately different from Services and Sector page patterns.
export default function InsightDetailTemplate({ data }: { data: DetailPageData }) {
  const { eyebrow, title, description, accent, crumbLabel, crumbTo, overview, highlights, highlightsTitle, related, quote, ctaTitle, ctaDesc } = data;

  return (
    <>
      <section className="relative w-full overflow-hidden">
  <img src={insightBanner} alt={`${title} illustration`} className="w-full h-[480px] object-cover" />
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent flex flex-col justify-end p-6 md:p-12">
    <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-md">{title}</h1>
    <p className="mt-2 text-sm md:text-base text-white/90">{description}</p>
  </div>
</section>

      {/* Featured magazine image */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 grid md:grid-cols-[1.1fr,1fr] gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl overflow-hidden shadow-card border border-border">
            <img src={insightBanner} alt={`${title} illustration`} className="w-full h-auto block" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-5">
            {overview.slice(0, 2).map((p, i) => (
              <p key={i} className="text-text-secondary text-base leading-relaxed">{p}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Editorial numbered list instead of cards */}
      {highlights.length > 0 && (
        <section className="py-20 lg:py-28 bg-surface-alt">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <h2 className="font-display text-3xl text-text-primary mb-10">{highlightsTitle || 'Featured'}</h2>
            <div className="space-y-8">
              {highlights.map((h, i) => (
                <motion.div key={h.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex gap-6 items-start pb-8 border-b border-border last:border-0">
                  <span className="font-display text-3xl text-accent-gold/50 w-10 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h.icon className="w-4 h-4 text-accent-gold" />
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

      {/* Pull quote block */}
      {quote && (
        <section className="py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative bg-card border border-border rounded-2xl p-10 md:p-12">
              <Quote className="w-10 h-10 text-accent-gold/40 mb-4" />
              <p className="font-display text-2xl text-text-primary leading-snug mb-4">"{quote.text}"</p>
              <p className="text-sm text-text-secondary">{quote.author}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related reads, horizontal strip */}
      {related.length > 0 && (
        <section className="py-20 lg:py-28 bg-surface-alt">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <h2 className="font-display text-2xl text-text-primary mb-8">Keep reading</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link key={r.label} to={r.to} className="group bg-card border border-border rounded-xl p-5 hover:border-border-strong transition-colors">
                  <span className="text-sm font-medium text-text-primary block mb-2">{r.label}</span>
                  <span className="inline-flex items-center gap-1 text-xs text-accent-gold font-medium">
                    Read <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter-style CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center bg-surface-alt border border-border rounded-3xl py-14 px-8">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-3">{ctaTitle}</h2>
          <p className="text-text-secondary text-sm mb-7 max-w-md mx-auto">{ctaDesc}</p>
          <Button to="/contact">Get in touch</Button>
        </div>
      </section>
    </>
  );
}
