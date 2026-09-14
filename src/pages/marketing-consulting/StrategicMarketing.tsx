import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import CompactServiceBanner from '@/components/marketing-consulting/CompactServiceBanner';
import ServiceFooterCTA from '@/components/marketing-consulting/ServiceFooterCTA';
import ServiceNavFooter from '@/components/marketing-consulting/ServiceNavFooter';

export default function StrategicMarketing() {
  return (
    <div className="bg-white min-h-screen">
      <CompactServiceBanner
        label="Marketing Consulting"
        title="Strategic Marketing"
        headline="Marketing needs a direction."
        description="Build a focused marketing strategy around your business goals, customers and market opportunities."
        bannerImage="/images/strategic-marketing-banner.jpg"
        accent="navy-green"
      />

      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]"
          >
            Think first.{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Market with purpose.
            </span>
          </motion.h2>
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="mt-8 space-y-4 text-slate-700 text-lg leading-relaxed font-medium"
          >
            <p>Doing more marketing does not always mean getting better results.</p>
            <p>We help businesses understand where to focus, what to communicate and how different marketing activities should work together.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: STRATEGIC FRAMEWORK */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-16 text-center tracking-tight">
            Strategic Framework
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
             <div className="flex flex-wrap justify-center gap-6">
                {[
                  { n: '01', title: 'Business Goals' },
                  { n: '02', title: 'Market' },
                  { n: '03', title: 'Audience' },
                  { n: '04', title: 'Positioning' },
                  { n: '05', title: 'Channels' },
                  { n: '06', title: 'Content' },
                  { n: '07', title: 'Campaigns' },
                  { n: '08', title: 'Measurement' }
                ].map((item, idx) => (
                  <motion.div
                    key={item.n}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm border border-slate-200"
                  >
                    <span className="text-[#16a34a] font-black">{item.n}</span>
                    <span className="font-bold text-slate-800">{item.title}</span>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: STRATEGIC SUPPORT */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-16 text-center tracking-tight">
            Strategic Support
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
             {[
               "Marketing Audit", "Market Research", "Competitor Analysis",
               "Customer Segmentation", "Positioning Strategy", "Marketing Roadmap",
               "Campaign Planning", "Channel Strategy", "Content Direction", "Performance Review"
             ].map((item, idx) => (
               <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-slate-50 border border-slate-200 p-5 rounded-xl font-medium text-slate-800 text-center hover:bg-[#123B61] hover:text-white transition-colors"
               >
                 {item}
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUTCOME */}
      <section className="py-20 lg:py-28 bg-[#16a34a] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
           <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-10">
              Less marketing noise. More business direction.
           </h2>
           <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#16a34a] hover:bg-slate-100 font-bold px-9 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Create Your Marketing Strategy</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
        </div>
      </section>

      <ServiceFooterCTA />
      <ServiceNavFooter currentSlug="strategic-marketing" />
    </div>
  );
}
