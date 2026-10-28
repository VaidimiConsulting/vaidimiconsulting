// ISOCertification.tsx – Quirky, bold, NO cards, NO form, NO green bg, English only
import { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck, Leaf, HardHat, Lock, UtensilsCrossed,
  ArrowRight, Building2, Factory, Cpu, Briefcase,
  TrendingUp, Rocket, Award, CheckCircle2, Star,
  Zap, Globe, BadgeCheck, Search, FileText, FileCheck2,
} from 'lucide-react';

/* ─── DATA ──────────────────────────────────────────────── */

const ISO_STANDARDS = [
  {
    id: 'iso-9001', code: 'ISO 9001', title: 'Quality Management',
    blurb: 'Build rock-solid processes. Delight customers. Win tenders.',
    icon: ShieldCheck, color: 'text-emerald-600', pill: 'bg-emerald-100 text-emerald-700',
    bar: 'bg-emerald-500',
  },
  {
    id: 'iso-14001', code: 'ISO 14001', title: 'Environmental Management',
    blurb: 'Go green on paper — and in practice. Show the world you care.',
    icon: Leaf, color: 'text-teal-600', pill: 'bg-teal-100 text-teal-700',
    bar: 'bg-teal-500',
  },
  {
    id: 'iso-45001', code: 'ISO 45001', title: 'Health & Safety',
    blurb: 'Keep your team safe. Reduce incidents. Stay compliant.',
    icon: HardHat, color: 'text-amber-600', pill: 'bg-amber-100 text-amber-700',
    bar: 'bg-amber-500',
  },
  {
    id: 'iso-27001', code: 'ISO/IEC 27001', title: 'Information Security',
    blurb: 'Lock it down. Protect data. Build digital trust.',
    icon: Lock, color: 'text-sky-600', pill: 'bg-sky-100 text-sky-700',
    bar: 'bg-sky-500',
  },
  {
    id: 'iso-22000', code: 'ISO 22000', title: 'Food Safety',
    blurb: 'From farm to fork — verifiably safe, consistently excellent.',
    icon: UtensilsCrossed, color: 'text-indigo-600', pill: 'bg-indigo-100 text-indigo-700',
    bar: 'bg-indigo-500',
  },
];

const PROCESS = [
  { num: '01', title: 'Understand', sub: 'Your Needs', desc: 'We deep-dive into your business activities, goals, and the scope of the standard.', icon: Search, accent: '#1A4D3E' },
  { num: '02', title: 'Spot', sub: 'the Gaps', desc: 'Gap analysis — we pinpoint exactly what needs to change before your audit.', icon: FileText, accent: '#D97706' },
  { num: '03', title: 'Build', sub: 'the System', desc: 'Documentation, processes, records — everything your certifier needs to see.', icon: FileCheck2, accent: '#0369A1' },
  { num: '04', title: 'Get', sub: 'Certified', desc: 'We coordinate with the independent certification body for a smooth assessment.', icon: BadgeCheck, accent: '#7C3AED' },
];

const WHY_POINTS = [
  { label: 'Win More Contracts', sub: 'Procurement teams filter for ISO — be on the right side of that filter.', icon: Award, color: 'text-emerald-600' },
  { label: 'Sharper Processes', sub: 'ISO forces clarity. Waste drops. Teams align. Things actually get done.', icon: Zap, color: 'text-amber-500' },
  { label: 'Risk Visibility', sub: 'See operational risks before they blow up into expensive problems.', icon: ShieldCheck, color: 'text-sky-600' },
  { label: 'Global Credibility', sub: 'One standard. Recognised in 170+ countries. That is leverage.', icon: Globe, color: 'text-indigo-600' },
  { label: 'Better Culture', sub: 'When quality is a system, not a slogan — teams take ownership.', icon: TrendingUp, color: 'text-teal-600' },
  { label: 'Investor Confidence', sub: 'Due diligence ticks go fast when you carry ISO certification.', icon: Star, color: 'text-rose-500' },
];

const WHO_FOR = [
  { name: 'Startups & MSMEs', icon: Rocket, color: 'bg-emerald-500' },
  { name: 'Manufacturers', icon: Factory, color: 'bg-amber-500' },
  { name: 'IT & Tech Companies', icon: Cpu, color: 'bg-sky-500' },
  { name: 'Service Businesses', icon: Briefcase, color: 'bg-indigo-500' },
  { name: 'Food & Beverage', icon: UtensilsCrossed, color: 'bg-orange-500' },
  { name: 'Large Enterprises', icon: Building2, color: 'bg-teal-500' },
];

/* ─── COMPONENT ─────────────────────────────────────────── */

export default function ISOCertification() {
  useEffect(() => {
    document.title = 'ISO Certification Guidance & Support | Vaidimi Consulting';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Expert ISO certification guidance — ISO 9001, 14001, 45001, 27001, 22000. Gap analysis, documentation, certification coordination.');
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Inter', 'Outfit', sans-serif" }}>

      {/* ═══════════════════════════════════════════════════
          HERO — vibrant, wide, scattered quirky stickers, rich layout
          ═══════════════════════════════════════════════════ */}
      <section className="relative pt-16 pb-12 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden bg-white">
        {/* Subtle decorative background shapes */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full bg-emerald-50/70 opacity-70 blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-amber-50/60 opacity-60 blur-2xl -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-4 right-1/4 w-72 h-72 rounded-full bg-sky-50/50 opacity-60 blur-2xl pointer-events-none" />

        {/* Scattered doodle stars in background */}
        <span className="absolute top-10 left-6 text-xl select-none opacity-40 font-bold" style={{ color: '#E06B6B' }}>✦</span>
        <span className="absolute top-28 right-12 text-2xl select-none opacity-40 font-bold" style={{ color: '#7FC4D9' }}>★</span>
        <span className="absolute bottom-24 left-1/3 text-lg select-none opacity-30 font-bold" style={{ color: '#E8A93A' }}>✳</span>
        <span className="absolute top-1/3 right-1/3 text-base select-none opacity-25 font-bold" style={{ color: '#8FBF6B' }}>✦</span>

        <div className="relative max-w-7xl mx-auto w-full">
          {/* Top Eyebrow + Scattered Highlight Pill */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="h-0.5 w-8 rounded-full" style={{ background: '#7FC4D9' }} />
              <span className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: '#7FC4D9' }}>
                Internationally Recognised Standards
              </span>
              <span className="h-0.5 w-8 rounded-full" style={{ background: '#7FC4D9' }} />
            </motion.div>

            {/* Scattered quirky badge on top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black rotate-[-2deg] shadow-sm"
              style={{ backgroundColor: '#FEF3C7', color: '#92400E', border: '1.5px dashed #E8A93A' }}
            >
              <span>⚡ Fast-track Documentation</span>
              <span className="text-amber-500">✦</span>
            </motion.div>
          </div>

          {/* MAIN HERO GRID: Wide 2-column with scattered elements */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* LEFT / CENTER-LEFT CONTENT (7 cols) */}
            <motion.div
              className="lg:col-span-7 flex flex-col items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Massive Colorful Headline with quirky side badge */}
              <div className="relative">
                <h1 className="leading-none tracking-tight">
                  <div className="flex items-baseline flex-wrap gap-x-4">
                    <span className="text-7xl sm:text-8xl md:text-9xl font-black" style={{ letterSpacing: '-0.04em', color: '#E06B6B' }}>
                      ISO
                    </span>
                    <span className="font-sketch text-2xl sm:text-3xl text-emerald-600 rotate-[-4deg] font-bold select-none border-b-2 border-dashed border-emerald-400 pb-0.5">
                      ~ Without the chaos! ~
                    </span>
                  </div>
                  <span className="block text-5xl sm:text-6xl md:text-7xl font-extrabold italic mt-1" style={{ fontStyle: 'italic', color: '#1A4D3E' }}>
                    Certification.
                  </span>
                  <span className="block text-3xl sm:text-4xl md:text-5xl font-black mt-2" style={{ color: '#E8A93A' }}>
                    Without the headache.
                  </span>
                </h1>
              </div>

              {/* Main Explanatory Paragraph */}
              <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed font-medium">
                From understanding requirements to preparing documentation and coordinating with certification bodies, we guide you through every step of your ISO certification journey.
              </p>

              {/* SCATTERED ISO STANDARDS PILLS — Playful, colorful, tilted badges across the area */}
              <div className="mt-7 w-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-black uppercase tracking-widest text-gray-400">Popular Standards We Assist With:</span>
                  <span className="font-sketch text-sm text-gray-400">// click to jump</span>
                </div>
                <div className="flex flex-wrap gap-2.5 sm:gap-3 items-center">
                  <a
                    href="#iso-standards"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all hover:scale-105 shadow-sm rotate-[-1.5deg]"
                    style={{ backgroundColor: '#ECFDF5', color: '#065F46', border: '1.5px dashed #10B981' }}
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>ISO 9001 <span className="font-semibold text-emerald-700">· Quality</span></span>
                  </a>

                  <a
                    href="#iso-standards"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all hover:scale-105 shadow-sm rotate-[2deg]"
                    style={{ backgroundColor: '#F0FDFA', color: '#115E59', border: '1.5px dashed #14B8A6' }}
                  >
                    <Leaf className="w-3.5 h-3.5 text-teal-600" />
                    <span>ISO 14001 <span className="font-semibold text-teal-700">· Environment</span></span>
                  </a>

                  <a
                    href="#iso-standards"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all hover:scale-105 shadow-sm rotate-[-2.5deg]"
                    style={{ backgroundColor: '#FFFBEB', color: '#92400E', border: '1.5px dashed #F59E0B' }}
                  >
                    <HardHat className="w-3.5 h-3.5 text-amber-600" />
                    <span>ISO 45001 <span className="font-semibold text-amber-700">· Health & Safety</span></span>
                  </a>

                  <a
                    href="#iso-standards"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all hover:scale-105 shadow-sm rotate-[1.5deg]"
                    style={{ backgroundColor: '#F0F9FF', color: '#075985', border: '1.5px dashed #0EA5E9' }}
                  >
                    <Lock className="w-3.5 h-3.5 text-sky-600" />
                    <span>ISO/IEC 27001 <span className="font-semibold text-sky-700">· InfoSec</span></span>
                  </a>

                  <a
                    href="#iso-standards"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all hover:scale-105 shadow-sm rotate-[-1deg]"
                    style={{ backgroundColor: '#EEF2FF', color: '#3730A3', border: '1.5px dashed #6366F1' }}
                  >
                    <UtensilsCrossed className="w-3.5 h-3.5 text-indigo-600" />
                    <span>ISO 22000 <span className="font-semibold text-indigo-700">· Food Safety</span></span>
                  </a>
                </div>
              </div>

              {/* Extra scattered guarantee chips */}
              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-gray-600 font-bold">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 100% Transparent
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" /> End-to-End Coordination
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" /> Audit Preparedness
                </span>
              </div>
            </motion.div>

            {/* RIGHT IMAGE AREA with Scattered Floating Stickers (5 cols) */}
            <motion.div
              className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="relative p-3">
                {/* Layered sketchy borders with rotations */}
                <div
                  className="absolute inset-0 rounded-3xl rotate-3 pointer-events-none"
                  style={{ background: 'rgba(126,196,217,0.14)', border: '2.5px dashed #7FC4D9' }}
                />
                <div
                  className="absolute inset-0 rounded-3xl -rotate-2 pointer-events-none"
                  style={{ background: 'rgba(232,169,58,0.10)', border: '2px dashed #E8A93A' }}
                />

                {/* The main ISO image */}
                <img
                  src="/images/iso2.avif"
                  alt="ISO Certification Illustration"
                  className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain rounded-3xl drop-shadow-xl z-10"
                />

                {/* SCATTERED STICKER 1: Top-Right "Globally Trusted" */}
                <div
                  className="absolute -top-3 -right-3 sm:-right-5 z-20 text-white text-xs font-black px-4 py-2 rounded-2xl shadow-lg rotate-[5deg] flex items-center gap-1.5 border-2 border-white select-none"
                  style={{ background: '#E8A93A' }}
                >
                  <span>✦</span>
                  <span>Globally Trusted</span>
                </div>

                {/* SCATTERED STICKER 2: Bottom-Left "Audit Ready" */}
                <div
                  className="absolute -bottom-4 -left-3 sm:-left-6 z-20 text-white text-xs font-black px-4 py-2 rounded-2xl shadow-lg rotate-[-4deg] flex items-center gap-1.5 border-2 border-white select-none"
                  style={{ background: '#1A4D3E' }}
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  <span>100% Audit Ready</span>
                </div>

                {/* SCATTERED STICKER 3: Top-Left "Tender Advantage" */}
                <div
                  className="absolute top-1/4 -left-6 sm:-left-8 z-20 hidden sm:flex items-center gap-1 text-[11px] font-black px-3 py-1.5 rounded-xl shadow-md rotate-[-8deg] bg-white text-gray-800 border-2 select-none"
                  style={{ borderColor: '#E06B6B' }}
                >
                  <span style={{ color: '#E06B6B' }}>★</span>
                  <span>Tender Advantage</span>
                </div>

                {/* SCATTERED STICKER 4: Bottom-Right Quirky cursive tag */}
                <div
                  className="absolute -bottom-5 right-2 z-20 font-sketch text-base font-bold px-3 py-1 rounded-lg bg-amber-100/90 text-amber-900 border border-amber-300 shadow-sm rotate-[3deg] select-none"
                >
                  Zero stress! 🎯
                </div>

                {/* Sketchy stars */}
                <div className="absolute -top-7 -right-2 text-2xl select-none rotate-12" style={{ color: '#E06B6B' }}>✦</div>
                <div className="absolute -bottom-8 left-1/2 text-xl select-none" style={{ color: '#7FC4D9' }}>✳</div>
              </div>
            </motion.div>
          </div>

          {/* Quick stats strip — Full-width, colorful accent borders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-gray-200 rounded-3xl overflow-hidden bg-white shadow-sm"
          >
            {[
              { val: '5+', label: 'ISO Standards Supported', accent: '#E06B6B', note: 'Quality, Eco, Safety & more' },
              { val: '100%', label: 'Transparent Guidance', accent: '#1A4D3E', note: 'No surprise costs' },
              { val: 'End-to-End', label: 'Documentation & Prep', accent: '#E8A93A', note: 'Gap analysis to audit' },
              { val: 'PAN India', label: 'Client Reach & Advisory', accent: '#7FC4D9', note: 'Prompt virtual & on-site support' },
            ].map((s, i) => (
              <div
                key={i}
                className={`p-6 text-center ${i < 3 ? 'border-r-2 border-gray-200' : ''} hover:bg-gray-50/80 transition-colors relative`}
              >
                <div className="h-1.5 w-12 rounded-full mx-auto mb-3" style={{ backgroundColor: s.accent }} />
                <div className="text-3xl font-black text-gray-900" style={{ letterSpacing: '-0.02em' }}>{s.val}</div>
                <div className="text-xs font-black text-gray-800 mt-1 uppercase tracking-wider">{s.label}</div>
                <div className="text-[11px] font-medium text-gray-500 mt-0.5">{s.note}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ISO STANDARDS — horizontal strips, no cards
          ═══════════════════════════════════════════════════ */}
      <section id="iso-standards" className="relative py-20 px-6 lg:px-20 bg-gray-50 overflow-hidden">
        {/* sketchy zigzag background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs><pattern id="zigzag" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse"><polyline points="0,20 20,0 40,20" fill="none" stroke="#1A4D3E" strokeWidth="2" strokeLinecap="round"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#zigzag)" />
        </svg>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Standards</span>
            <h2 className="text-5xl font-black text-gray-900 mt-2 leading-none" style={{ letterSpacing: '-0.03em' }}>
              <span style={{ color: '#E06B6B' }}>Pick Your</span><br /><span className="font-sketch" style={{ color: '#E06B6B', fontSize: '1.1em', fontStyle: 'normal' }}>Standard.</span>
            </h2>
          </div>

          <div className="space-y-0 divide-y divide-gray-200 border border-gray-200 rounded-3xl overflow-hidden bg-white">
            {ISO_STANDARDS.map((std, i) => (
              <motion.div
                key={std.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group flex items-center gap-6 px-8 py-7 hover:bg-gray-50 transition-colors cursor-default"
              >
                {/* number */}
                <span className="text-4xl font-black text-gray-100 w-10 flex-shrink-0 select-none">{String(i + 1).padStart(2, '0')}</span>

                {/* color bar */}
                <div className={`w-1 h-12 rounded-full ${std.bar} flex-shrink-0`} />

                {/* icon */}
                <div className="flex-shrink-0">
                  <std.icon className={`w-7 h-7 ${std.color}`} />
                </div>

                {/* content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${std.pill}`}>{std.code}</span>
                    <h3 className="text-lg font-extrabold text-gray-900">{std.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-1.5 max-w-md">{std.blurb}</p>
                </div>

                {/* arrow */}
                <ArrowRight className={`w-5 h-5 ${std.color} opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROCESS — large numbered editorial layout
          ═══════════════════════════════════════════════════ */}
      <section className="relative py-20 px-6 lg:px-20 bg-white overflow-hidden">
        {/* sketchy cross/dot bg */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="crosshatch" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="30" y2="30" stroke="#E06B6B" strokeWidth="1.5" strokeLinecap="round"/><line x1="30" y1="0" x2="0" y2="30" stroke="#E06B6B" strokeWidth="1.5" strokeLinecap="round"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#crosshatch)" />
        </svg>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">How It Works</span>
              <h2 className="text-5xl font-black text-gray-900 mt-2 leading-none" style={{ letterSpacing: '-0.03em' }}>
                <span style={{ color: '#1A4D3E' }}>Four Steps.</span><br /><span className="font-sketch" style={{ color: '#E8A93A', fontSize: '1.1em' }}>Zero Confusion.</span>
              </h2>
            </div>
            <p className="text-gray-500 max-w-xs text-sm leading-relaxed">A repeatable system — not a guessing game. Here is exactly what happens.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`p-10 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b' : ''} border-gray-200 bg-white hover:bg-gray-50 transition-colors`}
              >
                <div className="flex items-start gap-5">
                  <span className="text-6xl font-black leading-none select-none" style={{ color: step.accent, opacity: 0.15 }}>{step.num}</span>
                  <div>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: step.accent + '18' }}>
                      <step.icon className="w-5 h-5" style={{ color: step.accent }} />
                    </div>
                    <div className="text-xl font-extrabold text-gray-900">
                      {step.title} <span className="italic font-black">{step.sub}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHY ISO — bold left-text + icon list, no cards
          ═══════════════════════════════════════════════════ */}
      <section id="why-iso" className="relative py-20 px-6 lg:px-20 bg-gray-50 overflow-hidden">
        {/* sketchy wavy lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="waves" x="0" y="0" width="80" height="24" patternUnits="userSpaceOnUse"><path d="M0 12 Q20 0 40 12 Q60 24 80 12" fill="none" stroke="#E8A93A" strokeWidth="2" strokeLinecap="round"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left — sticky headline */}
            <div className="lg:w-1/3">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Why Bother?</span>
              <h2 className="text-5xl font-black mt-2 leading-none" style={{ letterSpacing: '-0.03em' }}>
                <span style={{ color: '#7FC4D9' }}>Six Damn</span><br /><span style={{ color: '#7FC4D9' }}>Good</span><br /><span className="font-sketch" style={{ color: '#7FC4D9', fontSize: '1.15em' }}>Reasons.</span>
              </h2>
              <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                ISO is not bureaucracy. Done right, it is competitive advantage — wrapped in a certificate.
              </p>
            </div>

            {/* Right — list */}
            <div className="lg:w-2/3 space-y-0 divide-y divide-gray-200">
              {WHY_POINTS.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="flex items-start gap-5 py-6"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <p.icon className={`w-4.5 h-4.5 ${p.color}`} />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-gray-900">{p.label}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{p.sub}</div>
                  </div>
                  <span className="ml-auto text-gray-200 font-black text-4xl select-none leading-none">{String(i + 1).padStart(2, '0')}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHO IS IT FOR — bold coloured blocks, no cards
          ═══════════════════════════════════════════════════ */}
      <section className="relative py-20 px-6 lg:px-20 bg-white overflow-hidden">
        {/* sketchy dot grid */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="#7FC4D9"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">For Whom?</span>
            <h2 className="text-5xl font-black text-gray-900 mt-2 leading-none" style={{ letterSpacing: '-0.03em' }}>
              <span style={{ color: '#8FBF6B' }}>Built For</span><br /><span className="font-sketch" style={{ color: '#8FBF6B', fontSize: '1.1em' }}>Every Business.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {WHO_FOR.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 hover:border-gray-300 transition-all hover:-translate-y-0.5"
              >
                <div className={`w-9 h-9 rounded-xl ${cat.color} flex items-center justify-center flex-shrink-0`}>
                  <cat.icon className="w-4.5 h-4.5 text-white" />
                </div>
                <span className="font-extrabold text-gray-900 text-sm">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA STRIP — bold, colorful, no form
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 px-6 lg:px-20 bg-[#1A4D3E]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">Ready to Get Certified?</span>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-none" style={{ letterSpacing: '-0.03em' }}>
              Stop Losing<br /><span className="italic text-amber-300">Opportunities.</span>
            </h2>
            <p className="mt-6 text-emerald-100 text-lg max-w-xl mx-auto leading-relaxed">
              Your competitors are already certified. Clients are already checking. Let us get you there — fast, clean, properly.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="/enquiry" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 text-gray-900 font-extrabold rounded-full hover:bg-amber-300 transition-all shadow-xl text-sm">
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-bold rounded-full hover:bg-white/10 transition-all text-sm">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}