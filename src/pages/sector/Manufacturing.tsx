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
  TrendingUp,
  ShieldCheck,
  Zap,
  PhoneCall,
  ArrowRight,
  ChevronRight,
  BarChart3,
  Layers,
  Sparkles
} from 'lucide-react';

export default function Manufacturing() {
  const [activeTab, setActiveTab] = useState(0);

  const subSectors = [
    {
      id: 'plants-machinery',
      title: 'Plants & Machinery',
      tagline: 'OEE optimization, machine uptime & capex lifecycle governance.',
      icon: Cpu,
      badge: 'Heavy Engineering',
      desc: 'We assist machinery and industrial equipment manufacturers in maximizing overall equipment effectiveness (OEE), eliminating unscheduled line downtime, and structuring lender-grade capital expenditure for plant upgrades.',
      challenges: [
        'High machine idle times and lack of real-time line throughput visibility',
        'Working capital locked in slow-moving spare parts inventory',
        'Disorganized preventive maintenance schedules causing unexpected plant shutdowns'
      ],
      solutions: [
        'OEE tracking frameworks and bottleneck elimination on machine shop floors',
        'Predictive maintenance workflows and critical parts inventory rationalization',
        'Capex feasibility analysis and asset-backed debt structuring for expansion'
      ],
      metric: '32% Reduction in Unscheduled Downtime',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&q=80'
    },
    {
      id: 'textiles-garments',
      title: 'Textiles',
      tagline: 'Yarn-to-garment supply predictability, export compliance & yield.',
      icon: Scissors,
      badge: 'Textiles & Apparel',
      desc: 'Transforming textile mills, weaving clusters, and apparel exporters with disciplined cut-to-ship ratios, sustainable cost optimization, and buyer compliance frameworks.',
      challenges: [
        'High fabric cutting wastage and quality rejection rates on export orders',
        'Long order-to-shipment lead times leading to penalty discounts',
        'Volatile yarn price fluctuations impacting overall gross margins'
      ],
      solutions: [
        'Cut-order planning automation and fabric yield optimization protocols',
        'Export quality management systems compliant with EU/US buyer standards',
        'Raw material procurement hedging and hedging advisory frameworks'
      ],
      metric: '18% Improvement in Cut-to-Ship Ratio',
      image: 'https://images.unsplash.com/photo-1605289355680-75fb41239154?w=800&q=80'
    },
    {
      id: 'consumer-retail-goods',
      title: 'Consumer Retail',
      tagline: 'High-velocity FMCG line efficiency, packaging & distributor fill rates.',
      icon: ShoppingBag,
      badge: 'FMCG Manufacturing',
      desc: 'From contract packaging to high-speed bottling and food processing, we help consumer goods manufacturers synchronize production with real market distributor demand.',
      challenges: [
        'Channel stockouts coexisting with excessive central warehouse stock',
        'High packaging material shrinkage and transit damage rates',
        'Sub-optimal production batching causing frequent line changeover delays'
      ],
      solutions: [
        'Demand-driven batch scheduling synchronized with regional distributor replenishment',
        'Packaging line throughput acceleration and vendor quality scorecards',
        'Distributor fill-rate SLAs and secondary sales tracking systems'
      ],
      metric: '96.5% On-Time In-Full (OTIF) Fill Rate',
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80'
    },
    {
      id: 'automobiles-components',
      title: 'Automobiles',
      tagline: 'Zero-defect Tier-1/2 machining, lean cellular assembly & EV readiness.',
      icon: Car,
      badge: 'Automotive & Precision',
      desc: 'Guiding precision auto component manufacturers through lean cellular layouts, Tier-1 OEM audit readiness, and transition roadmaps into electric vehicle (EV) supply chains.',
      challenges: [
        'Stringent OEM ppm defect penalties and rising raw material indexation costs',
        'Slow changeover times on forging, stamping, and CNC machining lines',
        'Capital constraints in re-tooling lines for EV component specifications'
      ],
      solutions: [
        'Six Sigma quality control routines reducing defect rates below 50 PPM',
        'Single-Minute Exchange of Die (SMED) workshops reducing setup times by 40%',
        'EV diversification roadmaps and OEM vendor qualification advisory'
      ],
      metric: '< 40 PPM Defect Rate Achieved',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80'
    },
    {
      id: 'agri-production',
      title: 'Agri Production',
      tagline: 'Cold chain integration, FPO aggregation & food safety standards.',
      icon: Wheat,
      badge: 'Agro-Processing',
      desc: 'Engineering scalable agro-processing operations, grain milling, and cold storage networks connecting direct farmer producer organizations (FPOs) with commercial food brands.',
      challenges: [
        'Heavy post-harvest shrinkage (15-25%) across farmgate to mill routes',
        'Seasonal raw material price surges disrupting year-round processing',
        'Stringent FSSAI, BRC, and organic food export compliance barriers'
      ],
      solutions: [
        'Temperature-controlled cold chain logistics and post-harvest grading setups',
        'Direct FPO contract sourcing models with transparent quality testing',
        'HACCP & international food safety audit certification support'
      ],
      metric: '26% Post-Harvest Shrinkage Reduction',
      image: 'https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=800&q=80'
    },
    {
      id: 'building-construction',
      title: 'Building & Construction',
      tagline: 'Cement, steel, tiles & modular fabrication supply chain scale.',
      icon: HardHat,
      badge: 'Construction Materials',
      desc: 'Empowering building material plants—from pre-cast concrete and structural steel to tiles and sanitaryware—with optimized distribution dealer networks and efficient freight dispatch.',
      challenges: [
        'Heavy outbound logistics freight eating up 20-30% of product realization',
        'Long credit cycles and delayed contractor payments stalling production',
        'Inconsistent dealer network loyalty and brand substitution in retail hardware'
      ],
      solutions: [
        'Multi-modal freight route engineering and linehaul fleet contracts',
        'Channel financing and credit-insurance-backed dealer agreements',
        'Influencer contractor loyalty schemes and distributor margin structures'
      ],
      metric: '14% Reduction in Outbound Logistics Cost',
      image: 'https://images.unsplash.com/photo-1541888081604-09ee8646b5ce?w=800&q=80'
    },
    {
      id: 'infrastructure-companies',
      title: 'Infrastructure Companies',
      tagline: 'EPC project milestones, heavy fabrication & working capital control.',
      icon: Boxes,
      badge: 'Infrastructure & EPC',
      desc: 'Advisory for infrastructure contractors, heavy steel fabricators, and road/bridge EPC players to ensure on-time milestone billings, cash flow liquidity, and bid qualification.',
      challenges: [
        'Working capital traps caused by delayed milestone inspections and withheld retention money',
        'Cost overruns from unmonitored raw material escalation on multi-year contracts',
        'Subcontractor productivity slippages and heavy equipment under-utilization'
      ],
      solutions: [
        'Milestone-linked billing management and retention money release routines',
        'Price escalation tracking clauses and back-to-back vendor subcontracts',
        'Centralized heavy equipment scheduling and site productivity audits'
      ],
      metric: '₹65Cr+ Released in Trapped Retention Monies',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
    }
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 px-6 lg:px-10 overflow-hidden bg-white border-b border-slate-100">
        {/* Soft Ambient Glows */}
        <div className="pointer-events-none absolute left-[-80px] top-[10%] h-[500px] w-[500px] rounded-full bg-indigo-50/70 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-80px] top-[15%] h-[500px] w-[500px] rounded-full bg-emerald-50/70 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[10%] left-[35%] h-[400px] w-[400px] rounded-full bg-purple-50/50 blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-500">
            <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/sector" className="hover:text-indigo-600 transition-colors">Sectors</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Manufacturing</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-100 bg-indigo-50/90 text-indigo-700 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-600" />
                </span>
                Sector / Manufacturing Practice
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-[-0.03em] leading-[1.12]">
                Engineering Operational Scale &{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent block mt-2">
                  Plant Excellence.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
                We work directly with Indian manufacturing leaders to streamline plant floor throughput, eliminate unbudgeted downtime, optimize supply chain procurement, and structure expansion financing.
              </p>

              {/* Stats Highlights */}
              <div className="pt-2 grid grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <p className="text-2xl font-black font-display text-indigo-600">₹500Cr+</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Plant Operations Optimized</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <p className="text-2xl font-black font-display text-emerald-600">28%</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Avg. Scrap & Waste Reduction</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <p className="text-2xl font-black font-display text-purple-600">100+</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Factory Audits Executed</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 hover:opacity-95 text-white font-extrabold text-base px-8 py-4 rounded-full shadow-lg shadow-indigo-200 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Request Manufacturing Advisory</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href="tel:8869990973"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-slate-300 text-slate-800 font-bold hover:bg-slate-50 transition-colors text-base"
                >
                  <PhoneCall className="w-4 h-4 text-indigo-600" />
                  <span>+91 8869990973</span>
                </a>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 via-purple-100 to-emerald-100 rounded-3xl transform rotate-2 -z-10 shadow-lg" />
                <div className="overflow-hidden rounded-3xl border-4 border-white bg-white shadow-2xl">
                  <img
                    src="/images/advantage2.jpg"
                    alt="Modern Manufacturing Plant Advisory by Vaidimi"
                    className="w-full h-[360px] sm:h-[420px] object-cover"
                  />
                  <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                      <Factory className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">Manufacturing Focus</p>
                      <p className="text-sm font-bold text-slate-900">7 Core Industrial Sub-Sectors</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SUB-SECTOR SHOWCASE (Interactive Tabs Inside The Page) */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
              Specialized Industry Domains
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 mt-4 tracking-tight">
              Explore Our{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Manufacturing Sub-Sectors
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium">
              Select any sub-sector below to view domain-specific challenges, tailored advisory frameworks, and measured operational outcomes.
            </p>
          </div>

          {/* All Sub-Sectors Listed */}
          <div className="space-y-16">
            {subSectors.map((sub, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={sub.id} className={`flex flex-col lg:flex-row gap-10 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Image Side */}
                  <div className="w-full lg:w-5/12">
                    <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
                      <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors z-10" />
                      <img src={sub.image} alt={sub.title} className="w-full h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-7/12 bg-white rounded-3xl border border-slate-200/90 shadow-lg p-8 sm:p-10">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700">
                          {sub.badge}
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-3">
                          {sub.title}
                        </h3>
                        <p className="font-display text-base font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mt-1">
                          {sub.tagline}
                        </p>
                      </div>
                      <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-xl text-emerald-800 text-center">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Key Impact</p>
                        <p className="text-sm sm:text-base font-black">{sub.metric}</p>
                      </div>
                    </div>

                    <p className="text-slate-600 text-base leading-relaxed font-medium mb-6">
                      {sub.desc}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="bg-rose-50/50 p-5 rounded-2xl border border-rose-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#D95C5C] flex items-center gap-2 mb-3">
                          <span className="text-[#D95C5C] text-lg leading-none">&#10022;</span> Bottlenecks
                        </h4>
                        <ul className="space-y-2">
                          {sub.challenges.map((ch, cIdx) => (
                            <li key={cIdx} className="text-sm text-slate-700 font-medium flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D95C5C] mt-2 shrink-0" />
                              <span>{ch}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-2 mb-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Solutions
                        </h4>
                        <ul className="space-y-2">
                          {sub.solutions.map((sol, sIdx) => (
                            <li key={sIdx} className="text-sm text-slate-700 font-medium flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                              <span>{sol}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </section>

      {/* BOTTOM CTA */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight mb-6"
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
            className="text-lg sm:text-xl text-slate-600 font-medium mb-10 max-w-2xl mx-auto"
          >
            Schedule a plant-floor diagnostic discussion with our senior industrial advisory partners.
          </motion.p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 hover:opacity-95 text-white font-extrabold text-lg px-10 py-5 rounded-full shadow-xl shadow-indigo-200 transition-all transform hover:-translate-y-1"
            >
              <span>Book Plant Advisory Diagnostic</span>
              <ArrowRight className="w-6 h-6" />
            </Link>

            <a
              href="tel:8869990973"
              className="inline-flex items-center gap-2 px-8 py-5 rounded-full border-2 border-slate-300 text-slate-900 font-bold hover:bg-slate-50 transition-colors text-base"
            >
              <PhoneCall className="w-5 h-5 text-indigo-600" />
              <span>+91 8869990973</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
