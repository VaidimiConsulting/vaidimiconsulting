import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import CompactServiceBanner from '@/components/marketing-consulting/CompactServiceBanner';
import ServiceFooterCTA from '@/components/marketing-consulting/ServiceFooterCTA';
import ServiceNavFooter from '@/components/marketing-consulting/ServiceNavFooter';

export default function DigitalMarketing() {
  return (
    <div className="bg-white min-h-screen">
      <CompactServiceBanner
        label="Marketing Consulting"
        title="Digital Marketing"
        headline="Be visible where your customers are."
        description="Build a digital presence that increases visibility, attracts the right audience and creates measurable opportunities."
        bannerImage="/images/digital-marketing-banner.jpg"
        accent="green-blue"
      />

      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]"
          >
            Digital marketing should{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              work as one system.
            </span>
          </motion.h2>
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="mt-8 space-y-4 text-slate-700 text-lg leading-relaxed font-medium"
          >
            <p>Your website, search presence, social media, advertising and content should not work in isolation.</p>
            <p>We connect digital activities around clear business goals so every channel contributes to growth.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: DIGITAL MARKETING SERVICES */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-16 text-center tracking-tight">
            Digital Marketing Services
          </h2>
          <div className="space-y-6">
            {[
              { num: '01', title: 'SEO', desc: 'Improve organic visibility and help customers discover your business.' },
              { num: '02', title: 'SOCIAL MEDIA MARKETING', desc: 'Build visibility, engagement and stronger audience relationships.' },
              { num: '03', title: 'CONTENT MARKETING', desc: 'Create useful content that builds awareness and trust.' },
              { num: '04', title: 'GOOGLE ADS / PAID SEARCH', desc: 'Reach people actively searching for relevant products and services.' },
              { num: '05', title: 'SOCIAL MEDIA ADVERTISING', desc: 'Reach relevant audiences through targeted campaigns.' },
              { num: '06', title: 'WEBSITE & LANDING PAGES', desc: 'Create digital experiences designed for clarity and conversion.' },
              { num: '07', title: 'ANALYTICS & PERFORMANCE', desc: 'Understand important signals and improve marketing decisions.' }
            ].map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-[#168FC5] transition-colors"
              >
                <div className="text-3xl font-black text-[#16a34a]">{item.num}</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg tracking-wide uppercase mb-1">{item.title}</h3>
                  <p className="text-slate-600 font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: DIGITAL GROWTH FLOW */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
           <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-16 tracking-tight">
            Digital Growth Flow
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl sm:text-2xl font-black text-slate-800">
             {["DISCOVER", "ATTRACT", "ENGAGE", "CONVERT", "RETAIN", "GROW"].map((step, idx, arr) => (
               <React.Fragment key={step}>
                 <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="hover:text-[#16a34a] transition-colors"
                 >
                   {step}
                 </motion.span>
                 {idx < arr.length - 1 && (
                   <ArrowDown className="text-[#16a34a] md:-rotate-90 block md:inline" />
                 )}
               </React.Fragment>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUTCOME */}
      <section className="py-20 lg:py-28 bg-slate-900 text-center">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight mb-16">
            Visibility is only the beginning.
          </h2>
          <div className="flex flex-wrap justify-center gap-12 sm:gap-20 mb-16">
            {["Reach", "Engagement", "Leads", "Growth"].map((word, idx) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-2xl sm:text-3xl font-bold text-slate-400"
              >
                {word}
              </motion.div>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#168FC5] hover:bg-[#0284c7] text-white font-bold px-9 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <span>Grow Your Digital Presence</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <ServiceFooterCTA />
      <ServiceNavFooter currentSlug="digital-marketing" />
    </div>
  );
}
