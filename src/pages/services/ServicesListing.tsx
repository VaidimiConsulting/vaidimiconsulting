import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';

export default function ServicesListing() {
  return (
    <>
      <PageBanner
        eyebrow="Services"
        title="Consulting services built for practical growth"
        description="Six focused practices across marketing, technology, promotion, people, finance, and events."
        accent="accent"
        crumbs={[{ label: 'Services' }]}
      />
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}>
              <Link to={`/services/${s.slug}`} className="group block h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-border-strong hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <img src={s.image} alt={`${s.title} preview`} className="w-full aspect-[16/9] object-cover" />
                <div className="p-7">
                  <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                    <s.icon className="w-5 h-5 text-accent-dark" />
                  </div>
                  <h3 className="font-medium text-text-primary text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">{s.shortDescription}</p>
                  <Button to={`/services/${s.slug}`} className="px-5 py-2 text-xs">
                    Learn More <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
