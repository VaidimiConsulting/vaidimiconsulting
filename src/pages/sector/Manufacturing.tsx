import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Factory,
  Cpu,
  Scissors,
  ShoppingBag,
  Car,
  Wheat,
  HardHat,
  Boxes,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  ChevronRight,
  Award,
  Sparkles,
  TrendingUp,
  BarChart3,
  ShieldCheck,
  ChevronLeft
} from 'lucide-react';

export default function Manufacturing() {
  const [activeTab, setActiveTab] = useState(0);

  const subSectors = [
    {
      id: 'plants-machinery',
      index: '01',
      title: 'Heavy Machinery & Plant Engineering',
      tagline: 'OEE optimization, machine uptime & capex governance.',
      icon: Cpu,
      badge: 'Heavy Engineering',
      desc: 'We assist machinery manufacturers in maximizing overall equipment effectiveness (OEE), eliminating unscheduled line stoppages, and structuring lender-grade capital financing for plant upgrades.',
      kpiValue: '32%',
      kpiLabel: 'Reduction in Unscheduled Downtime',
      highlights: [
        'Real-time OEE tracking frameworks & shop-floor bottleneck audits',
        'Predictive maintenance workflows & critical spare parts rationalization',
        'Lender-grade capex feasibility modeling for multi-crore plant expansions'
      ],
      image: '/images/machine.jpg'
    },
    {
      id: 'textiles-garments',
      index: '02',
      title: 'Textile Mills & Apparel Production',
      tagline: 'Cut-to-ship velocity, fabric yield & global compliance.',
      icon: Scissors,
      badge: 'Textiles & Apparel',
      desc: 'Transforming spinning mills, weaving clusters, and apparel exporters with automated cut-order planning, raw material price hedging, and global EU/US buyer compliance frameworks.',
      kpiValue: '18%',
      kpiLabel: 'Higher Cut-to-Ship Ratio',
      highlights: [
        'Automated cut-order planning algorithms maximizing raw fabric yield',
        'Global export-grade quality control systems compliant with EU/US norms',
        'Raw material procurement risk mitigation & yarn price hedging advisory'
      ],
      image: '/images/textile.jpg'
    },
    {
      id: 'consumer-retail-goods',
      index: '03',
      title: 'Consumer Goods & FMCG Manufacturing',
      tagline: 'High-speed packaging lines & distributor fill rates.',
      icon: ShoppingBag,
      badge: 'FMCG Manufacturing',
      desc: 'Synchronizing high-speed packaging, bottling, and food processing lines with real-time distributor demand to eliminate stockouts while reducing central inventory holding costs.',
      kpiValue: '96.5%',
      kpiLabel: 'On-Time In-Full (OTIF) Fill Rate',
      highlights: [
        'Demand-driven batch scheduling tied to regional distributor replenishment',
        'High-speed packaging line acceleration & vendor quality scorecards',
        'Real-time secondary sales tracking & strict distributor fill-rate SLAs'
      ],
      image: '/images/fmcg.avif'
    },
    {
      id: 'automobiles-components',
      index: '04',
      title: 'Precision Automotive & Component Machining',
      tagline: 'Zero-defect Tier-1 machining & EV platform transition.',
      icon: Car,
      badge: 'Automotive & Precision',
      desc: 'Guiding precision auto component manufacturers through lean cellular layouts, Tier-1 OEM audit readiness, and technical vendor qualification for electric vehicle (EV) supply chains.',
      kpiValue: '< 40 PPM',
      kpiLabel: 'Defect Rate Benchmark Achieved',
      highlights: [
        'Six Sigma defect control routines reducing line scrap below 40 PPM',
        'Single-Minute Exchange of Die (SMED) workshops cutting setup times by 40%',
        'EV component diversification roadmaps & Tier-1 OEM vendor qualification'
      ],
      image: '/images/aotomobile.avif'
    },
    {
      id: 'agri-production',
      index: '05',
      title: 'Agro-Processing & Cold Chain Networks',
      tagline: 'Post-harvest shrinkage reduction & direct farmer aggregation.',
      icon: Wheat,
      badge: 'Agro-Processing',
      desc: 'Engineering scalable agro-processing infrastructure, grain milling operations, and cold chain networks connecting Farmer Producer Organizations (FPOs) with commercial food brands.',
      kpiValue: '26%',
      kpiLabel: 'Less Post-Harvest Transit Loss',
      highlights: [
        'Temperature-controlled cold chain logistics & automated post-harvest grading',
        'Direct FPO contract sourcing frameworks with transparent quality indexing',
        'HACCP, BRC, and organic food export compliance certification support'
      ],
      image: '/images/chain.jpg'
    },
    {
      id: 'building-construction',
      index: '06',
      title: 'Construction Materials & Modular Fabrication',
      tagline: 'Outbound freight rationalization & dealer network scale.',
      icon: HardHat,
      badge: 'Construction Materials',
      desc: 'Empowering cement, structural steel, tile, and pre-cast concrete plants to compress outbound linehaul logistics costs, accelerate contractor credit, and establish high-loyalty dealer channels.',
      kpiValue: '14%',
      kpiLabel: 'Reduction in Outbound Freight Cost',
      highlights: [
        'Multi-modal linehaul freight route engineering & carrier SLA renegotiation',
        'Channel financing facilities backed by trade credit insurance structures',
        'Distributor margin tiering models & influencer contractor loyalty incentives'
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
    },
    {
      id: 'infrastructure-companies',
      index: '07',
      title: 'Heavy Infrastructure & EPC Execution',
      tagline: 'Milestone billing speed, escalation & working capital control.',
      icon: Boxes,
      badge: 'Infrastructure & EPC',
      desc: 'Advisory for infrastructure contractors, heavy fabricators, and road/bridge EPC players to expedite milestone billing cycles, enforce price escalation clauses, and unlock trapped retention funds.',
      kpiValue: '₹65Cr+',
      kpiLabel: 'Trapped Retention Monies Unlocked',
      highlights: [
        'Milestone-linked inspection management & retention release routines',
        'Price escalation tracking clauses & back-to-back vendor subcontracts',
        'Centralized heavy fleet scheduling & site productivity operational audits'
      ],
      image: 'https://images.unsplash.com/photo-1541888081604-09ee8646b5ce?w=800&q=80'
    }
  ];

  const current = subSectors[activeTab];

  return (
    <div className="bg-white min-h-screen">
      
      {/* HERO SECTION - Clean, Open & Modern */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 px-6 lg:px-10 overflow-hidden bg-white border-b border-slate-100">
        <div className="pointer-events-none absolute left-[-80px] top-[10%] h-[450px] w-[450px] rounded-full bg-indigo-50/70 blur-[130px]" />
        <div className="pointer-events-none absolute right-[-80px] top-[15%] h-[450px] w-[450px] rounded-full bg-emerald-50/70 blur-[130px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-500">
            <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/sector" className="hover:text-indigo-600 transition-colors">Sectors</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Manufacturing</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-100 bg-indigo-50/90 text-indigo-700 font-bold text-xs uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600" />
                </span>
                Sector / Manufacturing Practice
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-[-0.03em] leading-[1.12]">
                Smarter Manufacturing.{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent block mt-1">
                  Stronger Operations.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                We work directly with Indian industrial leaders to streamline shop-floor throughput, eliminate downtime, optimize procurement margins, and secure lender-grade expansion financing.
              </p>

              {/* Minimalist Stat Counters (Borderless) */}
              <div className="pt-2 grid grid-cols-3 gap-6 border-t border-slate-100">
                <div>
                  <p className="text-2xl sm:text-3xl font-black font-display text-indigo-600">₹500Cr+</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Operations Optimized</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black font-display text-emerald-600">28%</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Scrap & Waste Cut</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black font-display text-purple-600">100+</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Factory Audits Run</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 hover:opacity-95 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-indigo-200 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Request Manufacturing Advisory</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:8869990973"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-slate-300 text-slate-800 font-bold hover:bg-slate-50 transition-colors text-sm sm:text-base"
                >
                  <PhoneCall className="w-4 h-4 text-indigo-600" />
                  <span>+91 8869990973</span>
                </a>
              </div>
            </motion.div>

            {/* Right Hero Image (Clean & Borderless) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src="/images/advantage2.jpg"
                    alt="Modern Manufacturing Plant Advisory by Vaidimi"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 shadow-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0">
                      <Factory className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Industrial Practice</p>
                      <p className="text-sm font-extrabold text-slate-900">7 Core Manufacturing Verticals</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE PRACTICE SHOWCASE (Zero-Box, Editorial Consulting Experience) */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
              Interactive Practice Showcase
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 mt-4 tracking-tight">
              Explore Our{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Specialized Sub-Sectors
              </span>
            </h2>
            <p className="text-slate-600 text-base mt-2 font-medium">
              Select any domain below to review operational bottlenecks, tailored advisory frameworks, and measured client outcomes.
            </p>
          </div>

          {/* Sleek Horizontal Navigator (Interactive Tabs - No Ugly Boxes) */}
          <div className="mb-14 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-4 min-w-max">
              {subSectors.map((sub, idx) => {
                const isActive = activeTab === idx;
                const IconComponent = sub.icon;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setActiveTab(idx)}
                    className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-slate-950 text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                    <span>{sub.badge}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                      {sub.index}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Sector Showcase (Pure Open Editorial Layout - ZERO CARDS / ZERO BOXES) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              
              {/* Left Side: Large Immersive Photograph (Clean with Zero Overlay Text) */}
              <div className="lg:col-span-6 relative">
                <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3] sm:aspect-[16/11] bg-slate-50 flex items-center justify-center">
                  <img
                    src={current.image}
                    alt={current.title}
                    className={`w-full h-full ${
                      current.id === 'automobiles-components'
                        ? 'object-contain p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100'
                        : 'object-cover object-center'
                    }`}
                  />
                </div>
              </div>

              {/* Right Side: Open Editorial Content (Pure Typography - NO CARD, NO BOX BORDER) */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Domain Header Tag & Key Outcome */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                      VERTICAL {current.index} / 07
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {current.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200/90 px-3 py-1 rounded-full text-emerald-800">
                    <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="text-xs font-black text-emerald-950">{current.kpiValue}</span>
                    <span className="text-[11px] font-semibold text-emerald-700 hidden sm:inline">• {current.kpiLabel}</span>
                  </div>
                </div>

                {/* Heading & Tagline */}
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                    {current.title}
                  </h3>
                  <p className="font-display text-base sm:text-lg font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mt-1.5">
                    {current.tagline}
                  </p>
                </div>

                {/* Strategic Narrative */}
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  {current.desc}
                </p>

                {/* Key Operational Pillars (Open, Clean, Minimal) */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Core Operational Interventions
                  </p>
                  {current.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-sm text-slate-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Action Row */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 bg-slate-950 hover:bg-indigo-600 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-colors shadow-sm"
                  >
                    <span>Consult Practice Lead</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* Quick Previous / Next Navigation */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTab((prev) => (prev > 0 ? prev - 1 : subSectors.length - 1))}
                      className="w-10 h-10 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
                      title="Previous Vertical"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-bold text-slate-400 px-1 font-mono">
                      {activeTab + 1} of {subSectors.length}
                    </span>
                    <button
                      onClick={() => setActiveTab((prev) => (prev < subSectors.length - 1 ? prev + 1 : 0))}
                      className="w-10 h-10 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
                      title="Next Vertical"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ALL SECTORS DIRECTORY STRIP (Clean List View - Zero Clunky Boxes) */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Complete Directory</p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 font-display">All 7 Manufacturing Verticals at a Glance</h3>
            </div>
            <p className="text-xs text-slate-500 font-medium">Click any vertical to view full operational frameworks above.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {subSectors.map((sub, idx) => {
              const isActive = activeTab === idx;
              const IconComp = sub.icon;
              return (
                <button
                  key={sub.id}
                  onClick={() => {
                    setActiveTab(idx);
                    window.scrollTo({ top: 650, behavior: 'smooth' });
                  }}
                  className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white border-indigo-500 shadow-md ring-1 ring-indigo-500'
                      : 'bg-white/70 hover:bg-white border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-slate-400">{sub.index}</span>
                    <IconComp className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 leading-snug">{sub.title}</h4>
                  <p className="text-xs font-bold text-emerald-600 mt-2">{sub.kpiValue} {sub.kpiLabel}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4"
          >
            Ready to scale your{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              manufacturing operations?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-600 font-medium mb-8 max-w-xl mx-auto"
          >
            Schedule a plant-floor diagnostic discussion with our senior industrial advisory partners.
          </motion.p>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 hover:opacity-95 text-white font-extrabold text-base px-8 py-4 rounded-full shadow-lg shadow-indigo-200 transition-all transform hover:-translate-y-0.5"
            >
              <span>Book Plant Advisory Diagnostic</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="tel:8869990973"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border-2 border-slate-300 text-slate-900 font-bold hover:bg-slate-50 transition-colors text-sm sm:text-base"
            >
              <PhoneCall className="w-4 h-4 text-indigo-600" />
              <span>+91 8869990973</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
