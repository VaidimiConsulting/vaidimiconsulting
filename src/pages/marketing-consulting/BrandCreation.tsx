import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Compass, Palette, Type, Layers, FileCheck2, ShieldCheck, Target } from 'lucide-react';
import CompactServiceBanner from '@/components/marketing-consulting/CompactServiceBanner';
import ServiceFooterCTA from '@/components/marketing-consulting/ServiceFooterCTA';
import ServiceNavFooter from '@/components/marketing-consulting/ServiceNavFooter';

export default function BrandCreation() {
  return (
    <div className="bg-white min-h-screen">
      {/* Compact Banner */}
      <CompactServiceBanner
        label="Marketing Consulting"
        title="Brand Creation"
        headline="Build a brand people remember."
        description="Create a clear and distinctive identity that gives your business a strong foundation for growth."
        bannerImage="/images/brand-creation-banner.jpg"
        accent="rose-navy"
      />

      {/* SECTION 1: Your brand starts before your logo */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Large Typography Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
                Core Philosophy
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 mt-4 tracking-tight leading-[1.15]">
                Your brand starts{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  before your logo.
                </span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-full mt-6" />
            </motion.div>

            {/* Right: Content + Small Branding Illustration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200/80 relative overflow-hidden"
            >
              <div className="relative z-10 space-y-6 text-slate-700 text-lg leading-relaxed font-medium">
                <p>
                  Brand creation is about defining who your business is, what it stands for and why people should choose it.
                </p>
                <p className="text-slate-600 font-normal">
                  We help turn your business idea into a clear and distinctive brand that can grow with you. A great brand connects strategy with creative expression so every touchpoint inspires customer trust.
                </p>
              </div>

              {/* Small SVG Sketch Illustration Overlay */}
              <div className="mt-8 pt-6 border-t border-slate-200/90 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-[#D95C5C] flex items-center justify-center font-bold">
                    ✦
                  </div>
                  <span className="text-sm font-bold text-slate-900">Distinctive & Scalable Brand DNA</span>
                </div>

                <svg width="90" height="40" viewBox="0 0 90 40" fill="none" className="opacity-40 hidden sm:block">
                  <path d="M5 30C25 10 45 35 85 10" stroke="#D95C5C" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="85" cy="10" r="4" fill="#D95C5C" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR BRAND CREATION PROCESS */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#123B61] bg-slate-200/80 px-3.5 py-1.5 rounded-full">
              Execution Methodology
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Our Brand Creation Process
            </h2>
            <p className="text-slate-600 text-base mt-2">
              A structured 5-step journey from initial discovery to complete brand guidelines.
            </p>
          </div>

          {/* Editorial Horizontal Timeline */}
          <div className="grid md:grid-cols-5 gap-6 relative">
            {[
              { num: '01', title: 'DISCOVER', desc: 'Understand the business, market, customers and competitive landscape.' },
              { num: '02', title: 'POSITION', desc: "Define the brand's place in the market and what makes it different." },
              { num: '03', title: 'DEFINE', desc: 'Develop the brand personality, voice and communication direction.' },
              { num: '04', title: 'CREATE', desc: 'Develop the visual identity and supporting brand elements.' },
              { num: '05', title: 'GUIDE', desc: 'Create clear guidelines so the brand stays consistent.' },
            ].map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-display text-3xl font-extrabold text-[#D95C5C] block mb-3">
                    {step.num}
                  </span>
                  <h3 className="font-display text-base font-bold text-slate-900 tracking-wider uppercase mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-semibold">
                  <span>Phase {idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D95C5C]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE HELP CREATE (Staggered Creative Layout) */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D95C5C] bg-rose-50 px-3.5 py-1.5 rounded-full">
              Deliverables & Assets
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              What We Help Create
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Every critical component required for a distinctive, launch-ready brand system.
            </p>
          </div>

          {/* Staggered Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Brand Positioning', icon: Target, desc: 'Strategic market placement that highlights your unique competitive advantage.', span: 'lg:col-span-2' },
              { title: 'Brand Personality', icon: Compass, desc: 'Human traits and tone attributes that make your business relatable and authentic.', span: 'lg:col-span-2' },
              { title: 'Brand Voice', icon: Sparkles, desc: 'Messaging principles, taglines, and tone rules for clear communication across channels.', span: 'lg:col-span-1' },
              { title: 'Logo Direction', icon: Palette, desc: 'Distinctive visual mark, primary logotype, and adaptive emblem variations.', span: 'lg:col-span-1' },
              { title: 'Colour System', icon: Layers, desc: 'Curated color palette with primary, supporting, and digital accessible tokens.', span: 'lg:col-span-1' },
              { title: 'Typography', icon: Type, desc: 'Primary display, editorial, and body font pairing definitions.', span: 'lg:col-span-1' },
              { title: 'Visual Identity', icon: FileCheck2, desc: 'Iconography, photography direction, layout grids, and graphic accents.', span: 'lg:col-span-2' },
              { title: 'Brand Guidelines', icon: ShieldCheck, desc: 'Comprehensive brand bible ensuring seamless execution across your entire team.', span: 'lg:col-span-2' },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className={`bg-slate-50 p-8 rounded-3xl border border-slate-200/80 hover:border-rose-200 hover:bg-white hover:shadow-card transition-all ${item.span}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-rose-100 text-[#D95C5C] flex items-center justify-center mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUTCOME */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D95C5C] bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
              Commercial Value
            </span>

            {/* Large Statement */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              A brand with clarity, character and consistency.
            </h2>

            {/* Supporting Points */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 text-left">
              {[
                { title: 'Clear Identity', desc: 'Instant clarity on who you are and why you matter.' },
                { title: 'Stronger Positioning', desc: 'Stand out confidently in competitive markets.' },
                { title: 'Consistent Communication', desc: 'Unify print, digital, and sales collateral.' },
                { title: 'Foundation for Growth', desc: 'Scalable assets ready for high-impact campaigns.' },
              ].map((pt) => (
                <div key={pt.title} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#D95C5C] mb-3" />
                  <h3 className="font-bold text-white text-lg mb-1">{pt.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#D95C5C] hover:bg-[#b84848] text-white font-bold px-9 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Build Your Brand</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Footer CTA & Nav */}
      <ServiceFooterCTA />
      <ServiceNavFooter currentSlug="brand-creation" />
    </div>
  );
}
