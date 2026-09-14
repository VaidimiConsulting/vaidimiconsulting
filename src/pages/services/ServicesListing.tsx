import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import { services } from '@/data/services';

export default function ServicesListing() {
  return (
    <>
      <PageBanner
        eyebrow="Consulting Practices"
        title="Tailored Solutions Built for Enterprise Growth"
        description="Six focused practices spanning brand strategy, cloud & AI systems, field promotions, human capital, financial advisory, and event management."
        accent="accent"
        crumbs={[{ label: 'Services' }]}
      />
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/services/${s.slug}`}
                className="group flex flex-col h-full bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  <img
                    src={s.image}
                    alt={`${s.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm shadow-sm flex items-center justify-center text-primary">
                      <s.icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-xl mb-2 group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {s.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {s.subServices.map((sub) => (
                        <span
                          key={sub.title}
                          className="text-[11.5px] font-medium bg-slate-50 text-slate-600 px-2.5 py-0.5 rounded-md border border-slate-100"
                        >
                          {sub.title}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-primary">
                    <span>View Service Roadmap</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
