import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight, BarChart3, Lightbulb, Globe2, Users, ShieldCheck,
  TrendingUp, Building2, Tractor, Truck, Store, Landmark,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const SERVICES = [
  { icon: TrendingUp, title: 'Strategy Consulting', desc: 'Market entry, strategic planning and competitive positioning.', to: '/services/strategy-consulting', accent: 'accent' },
  { icon: BarChart3, title: 'Digital & Technology', desc: 'Cloud, data, AI and cybersecurity for a resilient business.', to: '/services/digital-technology', accent: 'accent-blue' },
  { icon: ShieldCheck, title: 'Operations Consulting', desc: 'Process redesign and cost optimization that sticks.', to: '/services/operations-consulting', accent: 'accent-green' },
  { icon: Landmark, title: 'Financial Advisory', desc: 'M&A, capital structuring and financial due diligence.', to: '/services/financial-advisory', accent: 'accent-gold' },
  { icon: Users, title: 'Talent & Organization', desc: 'Org design, leadership development and culture change.', to: '/services/talent-organization', accent: 'accent-sage' },
];

const SECTORS = [
  { icon: Building2, label: 'MSME', to: '/sector/msme' },
  { icon: Store, label: 'SME', to: '/sector/sme' },
  { icon: Tractor, label: 'Agribusiness', to: '/sector/agribusiness' },
  { icon: Truck, label: 'Logistics', to: '/sector/logistics' },
  { icon: Landmark, label: 'Financial Services', to: '/sector/financial-services' },
  { icon: Store, label: 'Retail', to: '/sector/retail' },
];

const STATS = [
  { value: '120+', label: 'Clients guided' },
  { value: '15', label: 'Years of experience' },
  { value: '6', label: 'Sectors served' },
  { value: '98%', label: 'Client retention' },
];

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24 bg-[#EAF3E4]">
        <div className="absolute -top-16 -left-12 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-20 right-[5%] w-80 h-80 rounded-full bg-accent-blue/15 blur-3xl" />
        {/* dotted texture, top right */}
        <svg className="absolute top-0 right-0 w-72 h-72 opacity-30 pointer-events-none" viewBox="0 0 200 200">
          <defs>
            <pattern id="heroDots" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#2D4A3E" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#heroDots)" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-[#D3E6C9] px-3.5 py-1.5 rounded-full shadow-soft mb-6">
              <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center font-display text-[11px] text-white">V</span>
              <span className="text-[11.5px] font-medium text-[#3F5B4C]">Strategy · Digital · Operations</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.14] text-[#213B2E]">
              Guidance, growth<br />and success —{' '}
              <span className="relative inline-block text-[#C9524F]">
                built together
                <svg className="absolute left-0 -bottom-1.5 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none">
                  <path d="M0,7 Q50,0 100,6 T200,4" stroke="#E8A93A" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-[#4C5F52] text-base md:text-lg mt-6 max-w-md leading-relaxed">
              We partner with ambitious businesses to turn strategy into measurable growth — from
              market entry to digital transformation and everything in between.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-9">
              <Button to="/contact" className="shadow-lift">Book a consultation</Button>
              <Button to="/what-we-do" variant="outline" className="bg-white/60 border-[#B8CFAE]">See our work</Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex mt-12 pt-5 border-t border-[#D3E6C9] max-w-md">
              {[
                { v: '120+', l: 'Clients guided', c: 'text-primary' },
                { v: '15 yrs', l: 'Experience', c: 'text-accent-blue' },
                { v: '98%', l: 'Retention', c: 'text-[#C9524F]' },
              ].map((s, i) => (
                <div key={s.l} className={`flex-1 ${i > 0 ? 'border-l border-[#D3E6C9] pl-4' : ''} ${i < 2 ? 'pr-4' : ''}`}>
                  <p className={`font-display text-2xl ${s.c}`}>{s.v}</p>
                  <p className="text-[10.5px] text-[#6B7D70] mt-1">{s.l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: layered colorful composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[340px]"
          >
            {/* main tilted card */}
            <motion.div
              animate={{ rotate: [-3, -1.5, -3], y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-5 left-5 w-64 bg-white rounded-2xl shadow-lift overflow-hidden"
            >
              <div className="h-28 bg-gradient-to-br from-accent to-accent-gold flex items-center justify-center">
                <svg width="70" height="46" viewBox="0 0 70 46">
                  <polyline points="0,40 15,30 28,34 42,14 56,18 70,4" fill="none" stroke="#FDFBF7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="p-4">
                <p className="text-[11px] text-text-muted mb-0.5">Portfolio growth</p>
                <p className="font-display text-xl text-text-primary">+38.4%</p>
              </div>
            </motion.div>

            {/* rating badge */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 right-0 bg-white border border-[#D3E6C9] rounded-xl px-4 py-3 shadow-soft flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center text-sm">★</div>
              <div>
                <p className="text-sm font-semibold text-[#213B2E] leading-none">4.9/5</p>
                <p className="text-[9.5px] text-[#6B7D70] mt-1">Client rating</p>
              </div>
            </motion.div>

            {/* sectors badge */}
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-8 right-2 bg-primary text-white rounded-xl px-4.5 py-3.5 shadow-lift w-[170px]"
            >
              <p className="text-[10px] opacity-75 mb-1.5 font-medium">Sectors served</p>
              <div className="flex">
                {['bg-accent', 'bg-accent-gold', 'bg-accent-blue'].map((c, i) => (
                  <span key={i} className={`w-6 h-6 rounded-full ${c} border-2 border-primary -mr-2`} />
                ))}
                <span className="w-6 h-6 rounded-full bg-primary-dark border-2 border-primary flex items-center justify-center text-[9px] -mr-2">+2</span>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-0 left-12 w-3 h-3 rounded-full bg-accent-gold" />
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-40 left-0 w-2.5 h-2.5 rounded-full bg-accent" />
          </motion.div>
        </div>
      </section>


      {/* ================= LOGO / TRUST STRIP ================= */}
      <section className="border-y border-border bg-surface-alt py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-6">
          <p className="text-xs text-text-muted uppercase tracking-wider">Trusted across sectors</p>
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-text-secondary font-medium">
            {SECTORS.map((s) => (
              <span key={s.label} className="flex items-center gap-2">
                <s.icon className="w-4 h-4 text-text-muted" /> {s.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-xl mb-14">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">What we offer</span>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary mt-3">Services built around your growth stage</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link
                  to={s.to}
                  className="group block h-full bg-card border border-border rounded-2xl p-7 hover:border-border-strong hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-11 h-11 rounded-xl bg-${s.accent}/15 flex items-center justify-center mb-5`}>
                    <s.icon className={`w-5 h-5 text-${s.accent === 'accent' ? 'accent-dark' : 'primary'}`} />
                  </div>
                  <h3 className="font-medium text-text-primary text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}

            {/* Closing CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-primary rounded-2xl p-7 flex flex-col justify-between text-white"
            >
              <div>
                <Lightbulb className="w-6 h-6 text-accent-gold mb-4" />
                <h3 className="font-medium text-lg mb-2">Not sure where to start?</h3>
                <p className="text-sm text-white/70 leading-relaxed">Tell us where you're stuck — we'll map the right practice to your problem.</p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-medium text-accent-gold mt-6">
                Talk to a consultant <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 lg:py-32 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-xl mb-16">
            <span className="text-xs font-medium uppercase tracking-wider text-accent-blue">How we work</span>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary mt-3">A process shaped by outcomes, not templates</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-px bg-border-strong" />
            {[
              { n: '01', t: 'Diagnose', d: 'We audit the real bottleneck, not the assumed one.' },
              { n: '02', t: 'Design', d: 'A roadmap tailored to your team and timeline.' },
              { n: '03', t: 'Deliver', d: 'Hands-on execution alongside your people.' },
              { n: '04', t: 'Sustain', d: 'Systems and metrics that outlast the engagement.' },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-display text-sm relative z-10 mb-5">
                  {step.n}
                </div>
                <h3 className="font-medium text-text-primary mb-2">{step.t}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS BAND ================= */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-3xl md:text-4xl text-white">{s.value}</p>
              <p className="text-xs text-white/60 mt-2 uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center">
                <Globe2 className="w-5 h-5 text-primary" />
              </div>
            </div>
            <p className="font-display text-2xl md:text-3xl text-text-primary leading-snug">
              "Vaidimi didn't just hand us a deck — they stayed until the numbers moved.
              Sharp strategy, real results within two quarters."
            </p>
            <p className="text-sm text-text-secondary mt-6">Riya Mehta, CFO — Retail sector client</p>
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-primary rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center overflow-hidden"
          >
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-accent-sage/20 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-accent-gold/10 blur-3xl" />
            <h2 className="relative font-display text-3xl md:text-4xl text-white max-w-xl mx-auto">
              Ready to turn strategy into your next growth quarter?
            </h2>
            <p className="relative text-white/70 text-sm md:text-base mt-4 max-w-md mx-auto">
              Book a free 30-minute consultation — no obligation, just a clear next step.
            </p>
            <div className="relative mt-8">
              <Button to="/contact" className="bg-white text-primary hover:bg-white/90">
                Book a consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
