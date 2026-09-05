import { motion } from 'motion/react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import { Button } from '@/components/ui/Button';
import type { Service } from '@/data/services';

const ACCENT_ICON_BG: Record<Service['accent'], string> = {
  accent: 'bg-accent/15',
  'accent-blue': 'bg-accent-blue/15',
  'accent-gold': 'bg-accent-gold/15',
  'accent-sage': 'bg-accent-sage/15',
  'accent-green': 'bg-accent-green/15',
};

const ACCENT_ICON_TEXT: Record<Service['accent'], string> = {
  accent: 'text-accent-dark',
  'accent-blue': 'text-primary',
  'accent-gold': 'text-primary',
  'accent-sage': 'text-primary',
  'accent-green': 'text-primary',
};

export default function ServicePageLayout({ service }: { service: Service }) {
  return (
    <>
      <PageBanner
        eyebrow={`Services / ${service.title}`}
        title={service.title}
        description={service.heroTagline}
        accent={service.accent}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
      />

      <section className="px-6 lg:px-10 -mt-6 lg:-mt-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-card border border-border bg-surface-alt"
        >
          <img src={service.image} alt={`${service.title} service banner`} className="w-full h-auto block" />
        </motion.div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-5">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-text-secondary text-base md:text-lg leading-relaxed"
          >
            {service.intro}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-text-secondary text-base md:text-lg leading-relaxed"
          >
            {service.longDescription}
          </motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl text-text-primary mb-12"
          >
            What this covers
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-7"
              >
                <div className={`w-11 h-11 rounded-xl ${ACCENT_ICON_BG[service.accent]} flex items-center justify-center mb-5`}>
                  <item.icon className={`w-5 h-5 ${ACCENT_ICON_TEXT[service.accent]}`} />
                </div>
                <h3 className="font-medium text-text-primary text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.shortDescription}</p>
                {item.children && item.children.length > 0 && (
                  <div className="mt-5 space-y-3 border-t border-border pt-5">
                    {item.children.map((child) => (
                      <div key={child.title} className="flex gap-3">
                        <ArrowUpRight className="w-4 h-4 text-text-muted mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-text-primary">{child.title}</p>
                          <p className="text-xs text-text-secondary leading-relaxed mt-1">{child.shortDescription}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <Button to={`/services/${service.slug}/${item.slug}`} className="px-5 py-2 text-xs mt-6">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center bg-primary rounded-3xl py-16 px-8 relative overflow-hidden">
          <div className={`absolute -top-16 -left-16 w-64 h-64 ${ACCENT_ICON_BG[service.accent]} rounded-full blur-3xl`} />
          <CheckCircle2 className="w-8 h-8 text-accent-gold mx-auto mb-4 relative" />
          <h2 className="font-display text-3xl text-white mb-3 relative">{service.cta}</h2>
          <p className="text-white/70 text-sm mb-7 max-w-md mx-auto relative">Talk to our experts and shape a practical next step for your business.</p>
          <div className="relative">
            <Button to="/contact" className="bg-white text-primary hover:bg-white/90">Talk to our experts</Button>
          </div>
        </div>
      </section>
    </>
  );
}
