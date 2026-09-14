import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import CompactServiceBanner from '@/components/marketing-consulting/CompactServiceBanner';
import ServiceFooterCTA from '@/components/marketing-consulting/ServiceFooterCTA';
import ServiceNavFooter from '@/components/marketing-consulting/ServiceNavFooter';

export default function BrandDevelopment() {
  return (
    <div className="bg-white min-h-screen">
      <CompactServiceBanner
        label="Marketing Consulting"
        title="Brand Development"
        headline="Make your existing brand ready for what's next."
        description="Strengthen your brand, refine its positioning and create a more consistent experience across every touchpoint."
        bannerImage="/images/brand-development-banner.jpg"
        accent="green-navy"
      />

      {/* SECTION 1: When a good brand needs to evolve */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              When a good brand{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                needs to evolve.
              </span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Your business has grown.",
              "Your audience has changed.",
              "Your communication feels inconsistent.",
              "Your competitors are becoming stronger.",
              "Your existing identity no longer reflects your business."
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200"
              >
                <CheckCircle2 className="w-6 h-6 text-[#16a34a] flex-shrink-0" />
                <p className="text-lg font-medium text-slate-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE DEVELOP */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
           <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#16a34a] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
              Core Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              What We Develop
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Brand Audit",
              "Brand Refresh",
              "Brand Repositioning",
              "Visual Identity",
              "Brand Messaging",
              "Digital Brand Presence",
              "Customer Touchpoints",
              "Brand Guidelines"
            ].map((item, idx) => (
               <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft flex items-center justify-center text-center hover:border-emerald-200 hover:shadow-card transition-all"
              >
                <span className="font-bold text-slate-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: DEVELOPMENT PROCESS */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
         <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Development Process
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { num: '01', title: 'Audit', desc: 'Understand where the brand stands today.' },
              { num: '02', title: 'Identify', desc: 'Find gaps, opportunities and areas for improvement.' },
              { num: '03', title: 'Refine', desc: 'Strengthen positioning, identity and communication.' },
              { num: '04', title: 'Align', desc: 'Bring website, social media and marketing materials together.' },
              { num: '05', title: 'Evolve', desc: 'Create a brand system that can support future growth.' },
            ].map((step, idx) => (
               <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-soft flex flex-col h-full"
              >
                 <span className="font-display text-3xl font-extrabold text-[#16a34a] block mb-3">
                    {step.num}
                  </span>
                  <h3 className="font-display text-base font-bold text-slate-900 tracking-wider uppercase mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
              </motion.div>
            ))}
          </div>
         </div>
      </section>

      {/* SECTION 4: OUTCOME */}
      <section className="py-20 lg:py-28 bg-[#123B61] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
           <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-10">
              Don't change everything. Change what matters.
           </h2>
           <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold px-9 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Develop Your Brand</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
        </div>
      </section>

      <ServiceFooterCTA />
      <ServiceNavFooter currentSlug="brand-development" />
    </div>
  );
}
