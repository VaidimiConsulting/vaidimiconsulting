import { motion } from 'motion/react';
import { CheckCircle2, ArrowUpRight, Target, ShieldCheck, Sparkles, TrendingUp, Users } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import { Button } from '@/components/ui/Button';
import type { Service } from '@/data/services';

const ACCENT_ICON_BG: Record<Service['accent'], string> = {
  accent: 'bg-rose-50 text-accent',
  'accent-blue': 'bg-sky-50 text-primary',
  'accent-gold': 'bg-amber-50 text-accent-gold',
  'accent-sage': 'bg-emerald-50 text-primary',
  'accent-green': 'bg-emerald-50 text-primary',
};

const DELIVERY_PHASES = [
  { n: '01', title: 'Audit & Diagnostic', desc: 'Detailed assessment of current operating realities, operational leaks, and commercial friction points.' },
  { n: '02', title: 'Execution Blueprint', desc: 'Custom strategic roadmap with prioritized sprint milestones, accountability owners, and quantitative KPIs.' },
  { n: '03', title: 'Embedded Delivery', desc: 'Hands-on execution sprint alongside internal managers, ensuring real workflow and behavior adoption.' },
  { n: '04', title: 'Governance & Scaling', desc: 'Standard operating procedures (SOPs), dashboards, and management rhythms to lock in permanent gains.' },
];

export default function ServicePageLayout({ service }: { service: Service }) {
  return (
    <>
      <PageBanner
        eyebrow={`Consulting Practice / ${service.title}`}
        title={service.title}
        description={service.heroTagline}
        accent={service.accent}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
      />

      {/* Hero Featured Media */}
      <section className="px-6 lg:px-10 -mt-8 lg:-mt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-card border border-slate-200/90 bg-white"
        >
          <img src={service.image} alt={`${service.title} service banner`} className="w-full max-h-[500px] object-cover block" />
        </motion.div>
      </section>

      {/* Practice Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-emerald-50 px-3 py-1 rounded-full">
              Turning Strategy Into Commercial Value
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Where High-Level Vision Meets Operating Discipline
            </h2>
          </div>

          <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200/80">
            <p className="font-medium text-slate-800">{service.intro}</p>
            <p>{service.longDescription}</p>
          </div>

          {/* Who This Practice Is For */}
          {service.whoItsFor && (
            <div className="mt-14 pt-10 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" /> Target Enterprise Profiles
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {service.whoItsFor.map((target, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-soft flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-slate-700 leading-snug">{target}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Core Measurable Benefits */}
      {service.keyBenefits && (
        <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-blue bg-sky-50 px-3 py-1 rounded-full">
                Quantifiable Outcomes
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Key Strategic Benefits We Deliver
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.keyBenefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-primary flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sub-Services Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-emerald-50 px-3 py-1 rounded-full">
              Practice Architecture
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Specialized Sub-Practices & Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white border border-slate-200/90 rounded-2xl p-7 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl ${ACCENT_ICON_BG[service.accent]} flex items-center justify-center mb-5`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-xl mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.shortDescription}</p>

                  {item.children && item.children.length > 0 && (
                    <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                      {item.children.map((child) => (
                        <div key={child.title} className="flex gap-2.5 items-start">
                          <ArrowUpRight className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-bold text-slate-800">{child.title}</p>
                            <p className="text-[11.5px] text-slate-500 leading-snug">{child.shortDescription}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-6">
                  <Button to={`/services/${service.slug}/${item.slug}`} className="w-full justify-center text-xs py-2.5 font-semibold">
                    Explore Deep Dive &rarr;
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Phase Delivery Framework */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Execution Methodology
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Our 4-Phase Delivery Framework
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {DELIVERY_PHASES.map((phase) => (
              <div key={phase.n} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft">
                <span className="w-9 h-9 rounded-xl bg-primary text-white font-display font-bold text-sm flex items-center justify-center mb-4">
                  {phase.n}
                </span>
                <h3 className="font-display font-bold text-slate-900 text-lg mb-2">{phase.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Impact Snapshot */}
      {service.impactSnapshot && (
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-lift relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-gold mb-2 block">
                    Verified Engagement Impact
                  </span>
                  <p className="font-display text-4xl sm:text-5xl font-extrabold text-emerald-400">
                    {service.impactSnapshot.metric}
                  </p>
                  <p className="text-sm font-semibold text-slate-300 mt-1">
                    {service.impactSnapshot.metricLabel}
                  </p>
                </div>
                <div className="md:max-w-md border-t md:border-t-0 md:border-l border-white/15 pt-6 md:pt-0 md:pl-8">
                  <p className="text-base text-slate-200 leading-relaxed italic">
                    "{service.impactSnapshot.caseSnippet}"
                  </p>
                  <p className="text-xs font-semibold text-slate-400 mt-3 uppercase tracking-wider">
                    — {service.impactSnapshot.clientType}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final Consultation CTA */}
      <section className="pb-24 lg:pb-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center bg-gradient-to-br from-primary to-primary-dark rounded-3xl py-16 px-8 relative overflow-hidden shadow-lift">
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <CheckCircle2 className="w-9 h-9 text-accent-gold mx-auto mb-4 relative" />
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3 relative tracking-tight">{service.cta}</h2>
          <p className="text-white/80 text-base mb-8 max-w-md mx-auto relative">
            Connect directly with a senior practice partner to map out practical next steps for your enterprise.
          </p>
          <div className="relative">
            <Button to="/contact" className="bg-white text-primary hover:bg-slate-100 font-bold px-8 py-3 rounded-full shadow-lg">
              Book Strategic Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
