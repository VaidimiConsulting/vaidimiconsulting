import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import { Button } from '@/components/ui/Button';
import { getServiceBySlug, getSubServiceBySlug } from '@/data/services';
import NotFound from '@/pages/NotFound';

export default function SubServiceDetail() {
  const { serviceSlug, subServiceSlug } = useParams();
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const subService = serviceSlug && subServiceSlug ? getSubServiceBySlug(serviceSlug, subServiceSlug) : undefined;

  if (!service || !subService) {
    return <NotFound />;
  }

  return (
    <>
      <PageBanner
        eyebrow={`Services / ${service.title}`}
        title={subService.title}
        description={subService.shortDescription}
        accent={service.accent}
        crumbs={[
          { label: 'Services', to: '/services' },
          { label: service.title, to: `/services/${service.slug}` },
          { label: subService.title },
        ]}
      />

      <section className="px-6 lg:px-10 -mt-6 lg:-mt-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-card border border-border bg-surface-alt"
        >
          <img src={subService.image} alt={`${subService.title} service banner`} className="w-full h-auto block" />
        </motion.div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to {service.title}
          </Link>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-text-secondary text-base md:text-lg leading-relaxed"
          >
            {subService.overview}
          </motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface-alt">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl text-text-primary mb-10">What this includes</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {subService.includes.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4 bg-card border border-border rounded-xl px-6 py-5"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-text-secondary leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="border-l-4 border-accent pl-6">
            <h2 className="font-display text-3xl text-text-primary mb-4">Why choose us for this</h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">{subService.whyUs}</p>
          </div>
        </div>
      </section>

      {subService.children && subService.children.length > 0 && (
        <section className="py-20 lg:py-28 bg-surface-alt">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <h2 className="font-display text-3xl text-text-primary mb-10">Connected focus areas</h2>
            <div className="space-y-4">
              {subService.children.map((child) => (
                <div key={child.title} className="bg-card border border-border rounded-xl px-6 py-5">
                  <div className="flex items-center gap-3 mb-2">
                    <child.icon className="w-4 h-4 text-primary" />
                    <h3 className="font-medium text-text-primary">{child.title}</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{child.overview}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center bg-primary rounded-3xl py-16 px-8 relative overflow-hidden">
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-accent-sage/15 rounded-full blur-3xl" />
          <CheckCircle2 className="w-8 h-8 text-accent-gold mx-auto mb-4 relative" />
          <h2 className="font-display text-3xl text-white mb-3 relative">{service.cta}</h2>
          <p className="text-white/70 text-sm mb-7 max-w-md mx-auto relative">Talk to our experts and shape a practical next step for your business.</p>
          <div className="relative">
            <Button to="/contact" className="bg-white text-primary hover:bg-white/90">
              Talk to our experts <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
