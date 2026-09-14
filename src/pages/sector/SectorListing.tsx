import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Store,
  Tractor,
  Truck,
  Landmark,
  ShoppingBag,
  ArrowUpRight,
  ArrowRight,
  BarChart3,
  TrendingUp,
  PieChart,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';

interface SectorItem {
  slug: string;
  title: string;
  tagline: string;
  desc: string;
  icon: typeof Building2;
  image: string;
  trend: string;
  challenge: string;
  advisoryAngle: string;
  metric: string;
  metricLabel: string;
}

const SECTORS: SectorItem[] = [
  {
    slug: 'msme',
    title: 'MSME',
    tagline: 'MSME: Engineering Institutional Scale & Credit Readiness',
    desc: 'Structured growth support and governance for micro, small, and medium enterprises.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    trend: 'Accelerated formalization driven by digital GST trails, e-way bills, and UPI adoption.',
    challenge: 'Delayed debtor collections and limited access to structured bank working capital.',
    advisoryAngle: 'Cash-flow formalization, balance sheet restructuring, and lender-grade credit packaging.',
    metric: '₹40Cr+',
    metricLabel: 'Working Capital Facilitated',
  },
  {
    slug: 'sme',
    title: 'SME',
    tagline: 'SME: Scaling Playbooks Past the Founder Bottleneck',
    desc: 'Operational playbooks and organizational design for businesses outgrowing founder-led management.',
    icon: Store,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
    trend: 'Mid-sized businesses upgrading to cloud ERPs and professional CXO leadership tiers.',
    challenge: 'Founder bandwidth trap: operational dependency that caps revenue growth around ₹20-50Cr.',
    advisoryAngle: 'Operating cadences, leadership delegation frameworks, and scalable sales engines.',
    metric: '65%',
    metricLabel: 'Reported Margin Growth Within 12 Mos',
  },
  {
    slug: 'agribusiness',
    title: 'Agribusiness',
    tagline: 'Agribusiness: Transforming Rural Value Chains into Modern Markets',
    desc: 'Supply chain optimization, post-harvest logistics, and market access strategy.',
    icon: Tractor,
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop',
    trend: 'Rapid adoption of contract farming, direct FPO sourcing, and cold storage logistics.',
    challenge: 'High post-harvest shrinkage, regional pricing volatility, and fragmented farmgate procurement.',
    advisoryAngle: 'Direct processor-to-farmgate networks, quality grading workflows, and export readiness.',
    metric: '30%+',
    metricLabel: 'Waste Reduction & Route Optimization',
  },
  {
    slug: 'logistics',
    title: 'Logistics & Supply Chain',
    tagline: 'Logistics: Engineering Predictable, Cost-Optimized Freight Networks',
    desc: 'Route network optimization, multi-modal transport integration, and warehouse tech.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    trend: 'Express linehaul automation, GPS tracking integration, and decentralized hub-and-spoke warehousing.',
    challenge: 'Fuel cost inflation, return-load empty run rates, and vehicle asset under-utilization.',
    advisoryAngle: 'Linehaul scheduling algorithms, hub consolidation, and 3PL vendor contract renegotiation.',
    metric: '22%',
    metricLabel: 'Average Linehaul Cost Reduction',
  },
  {
    slug: 'financial-services',
    title: 'Financial Services & FinTech',
    tagline: 'FinTech & Banking: Trust, Compliance & Digital Transaction Velocity',
    desc: 'Risk management, credit underwriting intelligence, and regulatory compliance advisory.',
    icon: Landmark,
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop',
    trend: 'Account aggregator rollout, digital KYC instant lending, and co-lending partnerships.',
    challenge: 'Rising customer acquisition cost (CAC), NPA portfolio stress in unsecured consumer loans.',
    advisoryAngle: 'Alternative underwriting scorecards, automated compliance monitoring, and collection routines.',
    metric: '99.4%',
    metricLabel: 'Regulatory Audit Compliance Score',
  },
  {
    slug: 'retail',
    title: 'Retail & Consumer Goods',
    tagline: 'Retail: Driving Omnichannel Margins & Store Unit Economics',
    desc: 'Retail footprint expansion, distributor network governance, and SKU-level margin management.',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    trend: 'Quick-commerce pressure, D2C brand retail expansion, and private-label margin focus.',
    challenge: 'Dead stock accumulation, erratic store footfalls, and fierce regional discounting wars.',
    advisoryAngle: 'SKU rationalization, regional distributor incentive design, and store-level P&L tracking.',
    metric: '+35%',
    metricLabel: 'YoY Store Sales Velocity',
  },
];

export default function SectorListing() {
  const [activeChartTab, setActiveChartTab] = useState<'growth' | 'adoption' | 'efficiency'>('growth');

  return (
    <>
      <PageBanner
        eyebrow="Industry Practices & Intelligence"
        title="Deep Sector Mastery & Industry-Specific Growth Models"
        description="We don't generalize. Every sector practice is led by senior practitioners with verified operational and P&L experience inside that domain."
        accent="accent-blue"
        crumbs={[{ label: 'Sector Practices' }]}
      />

      {/* ================= SECTOR INTELLIGENCE DASHBOARD ================= */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary bg-emerald-50 px-3 py-1 rounded-full">
                Market Intelligence Data
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Sector Performance & Growth Trends
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Comparative benchmarks across our regional and national client cohorts (2024–2026).
              </p>
            </div>

            {/* Chart switcher tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 self-start md:self-auto">
              <button
                onClick={() => setActiveChartTab('growth')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeChartTab === 'growth'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BarChart3 className="w-4 h-4" /> Growth Velocity
              </button>
              <button
                onClick={() => setActiveChartTab('adoption')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeChartTab === 'adoption'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <TrendingUp className="w-4 h-4" /> Tech Adoption
              </button>
              <button
                onClick={() => setActiveChartTab('efficiency')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeChartTab === 'efficiency'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <PieChart className="w-4 h-4" /> Capital Efficiency
              </button>
            </div>
          </div>

          {/* Interactive Chart Canvas Container */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-soft">
            {activeChartTab === 'growth' && (
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/60">
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-lg">
                      Average YoY Revenue Expansion Post-Advisory
                    </h3>
                    <p className="text-xs text-slate-500">Based on audited client financial outcomes across 12-month engagements.</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    Vaidimi Benchmark
                  </span>
                </div>

                {/* SVG Bar Chart */}
                <div className="space-y-4 pt-2">
                  {[
                    { label: 'MSME & Light Manufacturing', val: 78, num: '+38.4%' },
                    { label: 'Agribusiness & Food Processing', val: 65, num: '+31.2%' },
                    { label: 'Logistics & 3PL Freight', val: 72, num: '+34.8%' },
                    { label: 'Retail & Multi-Store Consumer', val: 84, num: '+42.0%' },
                    { label: 'FinTech & NBFC Financials', val: 92, num: '+46.5%' },
                  ].map((bar, i) => (
                    <div key={bar.label} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-bold text-slate-700">
                        <span>{bar.label}</span>
                        <span className="text-primary font-extrabold">{bar.num}</span>
                      </div>
                      <div className="w-full h-3.5 bg-slate-200/70 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${bar.val}%` }}
                          transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-primary to-emerald-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeChartTab === 'adoption' && (
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/60">
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-lg">
                      Digital Infrastructure & AI Implementation Curve
                    </h3>
                    <p className="text-xs text-slate-500">Percentage of enterprises operating on modern cloud ERP and AI workflows.</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-100 text-sky-800">
                    Industry Velocity
                  </span>
                </div>

                {/* SVG Trend Graph */}
                <div className="h-64 w-full flex items-end justify-between gap-4 pt-8 pb-4">
                  {[
                    { year: '2022', pct: 28, text: 'Legacy Systems' },
                    { year: '2023', pct: 44, text: 'Cloud Migration' },
                    { year: '2024', pct: 62, text: 'ERP Integration' },
                    { year: '2025', pct: 81, text: 'Workflow AI' },
                    { year: '2026 (Est.)', pct: 95, text: 'Autonomous Operations' },
                  ].map((pt, i) => (
                    <div key={pt.year} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                      <span className="text-xs font-bold text-slate-900">{pt.pct}%</span>
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${pt.pct}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                        className="w-full max-w-[50px] bg-gradient-to-t from-primary via-accent-blue to-sky-400 rounded-t-xl"
                      />
                      <span className="text-[11px] font-bold text-slate-700 mt-2">{pt.year}</span>
                      <span className="text-[10px] text-slate-400 text-center hidden sm:block">{pt.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeChartTab === 'efficiency' && (
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/60">
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-lg">
                      Working Capital Reallocation Profile
                    </h3>
                    <p className="text-xs text-slate-500">Average liquidity shift after optimizing receivables and inventory turns.</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800">
                    Liquidity Profile
                  </span>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 pt-4">
                  {[
                    { share: '45%', title: 'Debtor Cycle Acceleration', desc: 'Unlocking overdue collections through tighter credit terms.' },
                    { share: '30%', title: 'Inventory Lean Turnaround', desc: 'Eliminating dead stock and slow-moving SKUs from capital lockup.' },
                    { share: '25%', title: 'Vendor Creditor Restructuring', desc: 'Aligning payables with actual operational cash inflow cycles.' },
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft text-center">
                      <span className="font-display text-4xl font-extrabold text-primary block mb-2">{item.share}</span>
                      <h4 className="font-display font-bold text-slate-900 text-base mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= PRIMARY TWO PILLARS ================= */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
              Two Primary Practice Pillars
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3 tracking-tight">
              Manufacturing & Services{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Advisory
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/sector/manufacturing"
              className="group block p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 hover:bg-white hover:border-indigo-300 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
                  Industrial Practice
                </span>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  7 Sub-Sectors Inside →
                </span>
              </div>
              <h3 className="font-display text-2xl font-extrabold text-slate-950 group-hover:text-indigo-700 transition-colors">
                Manufacturing Sector
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                Plants & Machinery, Textiles, Consumer Goods, Automobiles, Agri Production, Construction & Heavy Engineering.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-indigo-600 group-hover:text-indigo-800">
                <span>Explore Manufacturing Playbooks & Submenus</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              to="/sector/services"
              className="group block p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 hover:bg-white hover:border-indigo-300 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-100">
                  Services Practice
                </span>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  8 Sub-Sectors Inside →
                </span>
              </div>
              <h3 className="font-display text-2xl font-extrabold text-slate-950 group-hover:text-purple-700 transition-colors">
                Services Sector
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                Retail Networks, FinTech & Banking, Hotels, Tourism, Transport & Fleet, Hospitality, Education & Healthcare.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-purple-600 group-hover:text-purple-800">
                <span>Explore Services Playbooks & Submenus</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SECTOR CARDS GRID ================= */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-emerald-50 px-3 py-1 rounded-full">
              Industry Practice Directory
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Specialized Solutions for Every Industry Domain
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECTORS.map((s, i) => (
              <motion.article
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                {/* Sector Image */}
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm shadow-sm flex items-center justify-center text-primary">
                      <s.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-900/90 text-white backdrop-blur-sm">
                      {s.metric} {s.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Sector Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Catchy Tagline */}
                    <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">
                      {s.tagline}
                    </span>
                    <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {s.desc}
                    </p>

                    {/* Trend & Challenge Details */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs">
                      <div>
                        <span className="font-bold text-slate-800">Macro Trend: </span>
                        <span className="text-slate-600">{s.trend}</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-800">Core Bottleneck: </span>
                        <span className="text-slate-600">{s.challenge}</span>
                      </div>
                      <div>
                        <span className="font-bold text-primary">Vaidimi Angle: </span>
                        <span className="text-slate-700">{s.advisoryAngle}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-primary">
                    <Link
                      to={`/sector/${s.slug}`}
                      className="inline-flex items-center gap-1 text-primary hover:text-primary-light transition-colors font-bold"
                    >
                      Explore Sector Playbook <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
