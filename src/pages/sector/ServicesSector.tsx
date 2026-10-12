import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Store,
  Landmark,
  Hotel,
  Compass,
  Truck,
  Coffee,
  GraduationCap,
  HeartPulse,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  PhoneCall,
  ArrowRight,
  ChevronRight,
  BarChart3,
  Sparkles
} from 'lucide-react';

export default function ServicesSector() {
  const [activeTab, setActiveTab] = useState(0);

  const subSectors = [
    {
      id: 'retail-services',
      title: 'Retail Services',
      tagline: 'Store-level unit economics, inventory turn & customer experience.',
      icon: Store,
      badge: 'Retail & Multi-Outlet',
      desc: 'We help retail chains and multi-outlet service brands build store-level profitability, eliminate unprofitable footprint leases, and synchronize physical POS with digital commerce.',
      challenges: [
        'Store footprint expansion masking localized unit-level losses',
        'High retail staff turnover leading to inconsistent customer service scores',
        'Inventory shrinkage and disconnected point-of-sale (POS) systems'
      ],
      solutions: [
        'Four-wall store profitability audit and lease renegotiation playbooks',
        'Store manager incentive structures tied directly to same-store sales growth (SSSG)',
        'Unified omnichannel inventory visibility reducing stockout loss'
      ],
      metric: '22% Average Revenue Lift Across Stores',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80'
    },
    {
      id: 'fintech-financial',
      title: 'Fintech and Financial Companies',
      tagline: 'Underwriting velocity, regulatory compliance & NPA portfolio health.',
      icon: Landmark,
      badge: 'FinTech & NBFCs',
      desc: 'Advising non-banking financial companies (NBFCs), digital lenders, and wealth platforms on regulatory compliance, risk scorecards, and customer acquisition cost (CAC) reduction.',
      challenges: [
        'Rising digital customer acquisition costs eroding loan origination margins',
        'Early delinquency spikes in unsecured retail and MSME lending books',
        'Complex RBI compliance and account aggregator integration hurdles'
      ],
      solutions: [
        'Alternative data underwriting scorecards and instant digital KYC pipelines',
        'Automated debt collection cadence with early warning delinquency triggers',
        'Lender compliance audits and co-lending partner syndicate structuring'
      ],
      metric: '99.4% Regulatory Audit Compliance Score',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      id: 'hotels-resorts',
      title: 'Hotels',
      tagline: 'RevPAR optimization, direct booking funnels & banquet monetization.',
      icon: Hotel,
      badge: 'Hotels & Leisure',
      desc: 'Maximizing revenue per available room (RevPAR), reducing OTA commission dependency, and turning underutilized banquet and F&B spaces into high-margin profit centers.',
      challenges: [
        'High OTA platform commission fees (18-25%) eating up room profits',
        'Seasonal occupancy dips during mid-week and off-peak travel periods',
        'Unmonitored energy consumption and linen/laundry overheads'
      ],
      solutions: [
        'Direct digital booking engines with guest loyalty rewards programs',
        'Dynamic yield pricing algorithms based on local event and competitor demand',
        'Corporate banquet package structuring for predictable weekday revenue'
      ],
      metric: '28% Growth in Direct Commission-Free Bookings',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80'
    },
    {
      id: 'tourism-travel',
      title: 'Tourism',
      tagline: 'B2B distribution, itinerary packaging & group travel monetization.',
      icon: Compass,
      badge: 'Travel & Tourism',
      desc: 'Enabling destination management companies (DMCs) and tour operators to scale high-margin experiential itineraries, corporate offsite retreats, and international supplier contracts.',
      challenges: [
        'Price wars on generic flight/hotel bookings with thin sub-5% margins',
        'Working capital lockup in upfront hotel and flight seat blockings',
        'Fragmented vendor management across localized transport and guides'
      ],
      solutions: [
        'High-margin curated experiential itinerary design and MICE packaging',
        'B2B agent distributor portals with automated pricing and commission settlements',
        'Direct destination vendor contracts with guaranteed SLA protections'
      ],
      metric: '35% Margin Expansion via Curated MICE Packages',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80'
    },
    {
      id: 'transport-logistics',
      title: 'Transport',
      tagline: 'Route network optimization, return-load minimization & telematics.',
      icon: Truck,
      badge: 'Transport & 3PL',
      desc: 'Optimizing transport operators, freight forwarders, and 3PL warehousing companies with algorithmic route dispatch, fuel cost controls, and linehaul fleet utilization.',
      challenges: [
        'High return-load empty run rates (up to 30% of total travel mileage)',
        'Fuel cost inflation and driver retention challenges',
        'Lack of real-time consignment visibility for corporate shippers'
      ],
      solutions: [
        'Hub-and-spoke linehaul scheduling reducing deadhead empty runs',
        'GPS telematics integration for driver fuel performance scorecards',
        'Multi-modal transport agreements (Rail + Road) for long-haul routes'
      ],
      metric: '22% Average Linehaul Cost Reduction',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8ed745d433?w=800&q=80'
    },
    {
      id: 'hospitality-services',
      title: 'Hospitality',
      tagline: 'SOP governance, food cost benchmarking & guest loyalty index.',
      icon: Coffee,
      badge: 'Hospitality & Dining',
      desc: 'Structuring cloud kitchen networks, fine dining restaurants, and corporate cafeteria services for culinary consistency, raw food cost control, and staff training.',
      challenges: [
        'Food raw material wastage and portion inconsistency across kitchen outlets',
        'High kitchen staff attrition disrupting daily service quality standards',
        'Aggregator delivery platform commission pressure on standalone units'
      ],
      solutions: [
        'Recipe standardization and centralized prep kitchen (commissary) planning',
        'Cookbook SOPs and structured frontline hospitality grooming routines',
        'Direct-to-consumer delivery channels and corporate catering contracts'
      ],
      metric: '8.5% Direct Food Cost Savings',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80'
    },
    {
      id: 'education-edtech',
      title: 'Education',
      tagline: 'Student admissions funnels, hybrid delivery & fee governance.',
      icon: GraduationCap,
      badge: 'Education & Institutions',
      desc: 'Supporting K-12 school groups, higher education universities, and EdTech ventures in scaling student enrollments, institutional accreditation, and financial sustainability.',
      challenges: [
        'Rising student acquisition costs in competitive regional catchment areas',
        'Delayed term fee collections and manual student record administration',
        'Faculty attrition and evolving regulatory compliance requirements'
      ],
      solutions: [
        'Catchment-area hyper-local digital and on-ground school admission drives',
        'Integrated campus ERP with automated fee collection gateways',
        'Accreditation readiness workflows for NAAC, NIRF, and CBSE audits'
      ],
      metric: '40% Surge in Qualified Admission Inquiries',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80'
    },
    {
      id: 'healthcare-sciences',
      title: 'Healthcare',
      tagline: 'Bed occupancy optimization, clinical supply chain & patient trust.',
      icon: HeartPulse,
      badge: 'Healthcare & Clinics',
      desc: 'Optimizing private hospitals, diagnostic chains, and specialty clinics for bed turnover, pharmacy inventory supply chains, and superior patient satisfaction.',
      challenges: [
        'Sub-optimal operating theatre (OT) and in-patient bed utilization rates',
        'High inventory holding costs for expensive surgical implants and consumables',
        'Patient leakage from OPD consultations to rival diagnostic facilities'
      ],
      solutions: [
        'Elective surgery scheduling workflows and OT turnaround acceleration',
        'Consignment-based surgical inventory agreements with medical device OEMs',
        'Patient loyalty and chronic disease follow-up management systems'
      ],
      metric: '19% Increase in Average Bed Occupancy',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80'
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
            <span className="text-slate-900 font-bold">Services</span>
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
                Sector / Services Practice
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-[-0.03em] leading-[1.12]">
                Scaling Service Quality &{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent block mt-2">
                  Customer Lifetime Value.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
                We partner with modern service enterprises across retail, fintech, hospitality, logistics, education, and healthcare to optimize unit economics, improve customer retention, and scale operations.
              </p>

              {/* Stats Highlights */}
              <div className="pt-2 grid grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <p className="text-2xl font-black font-display text-indigo-600">₹350Cr+</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Transaction Volume Advisory</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <p className="text-2xl font-black font-display text-emerald-600">45%</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Avg. Customer Retention Lift</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <p className="text-2xl font-black font-display text-purple-600">8 Core</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Service Domains Covered</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 hover:opacity-95 text-white font-extrabold text-base px-8 py-4 rounded-full shadow-lg shadow-indigo-200 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Request Services Advisory</span>
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
                    src="/images/advantage3.jpg"
                    alt="Modern Enterprise Services Advisory by Vaidimi"
                    className="w-full h-[360px] sm:h-[420px] object-cover"
                  />
                  <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">Services Sector Focus</p>
                      <p className="text-sm font-bold text-slate-900">8 Specialized Service Verticals</p>
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
              Specialized Service Domains
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 mt-4 tracking-tight">
              Explore Our{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Services Sub-Sectors
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium">
              Select any sub-sector below to view domain-specific operational bottlenecks, tailored advisory frameworks, and measured customer retention results.
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
            Ready to enhance your{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              service enterprise?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-slate-600 font-medium mb-10 max-w-2xl mx-auto"
          >
            Schedule a confidential consultation with our service operations partners.
          </motion.p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 hover:opacity-95 text-white font-extrabold text-lg px-10 py-5 rounded-full shadow-xl shadow-indigo-200 transition-all transform hover:-translate-y-1"
            >
              <span>Book Service Advisory Consultation</span>
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
