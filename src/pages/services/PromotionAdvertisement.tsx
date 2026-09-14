import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  SearchCheck, 
  Building2, 
  Palette, 
  CheckCircle2, 
  PhoneCall,
  ChevronRight,
  Sparkles,
  Zap,
  Target,
  ShieldCheck,
  BarChart3
} from 'lucide-react';

export default function PromotionAdvertisement() {
  const promoServices = [
    {
      id: 'ground-promotion',
      stepNumber: '01',
      title: 'Ground Promotion',
      badge: 'Field & Event Activations',
      tagline: 'Direct on-ground engagement, product sampling & spot sales conversions.',
      desc: 'Ground promotion brings your brand directly to customers through high-energy field campaigns, mall activations, market canopies, and sampling drives where personal interaction builds immediate trust.',
      image: '/images/ground-promo-banner.jpg',
      icon: Users,
      accentBorder: 'border-emerald-200',
      badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'bg-emerald-600 text-white shadow-emerald-200',
      capabilities: [
        'Turnkey mall activations, high-street booths & market canopy setups',
        'Product sampling, live customer demos & trial drives',
        'Promoter recruitment, professional briefing & on-ground grooming',
        'Real-time mobile lead capture & spot order booking management',
        'Rural van roadshows & regional dealer conclaves'
      ],
      highlights: [
        { label: 'Deployment Speed', value: '48 Hours' },
        { label: 'Coverage', value: 'Pan-India Footprint' },
        { label: 'Reporting', value: 'Live Geo-tagged Logs' }
      ]
    },
    {
      id: 'digital-promotion',
      stepNumber: '02',
      title: 'Digital Promotion',
      badge: 'Targeted Performance & Social Blitz',
      tagline: 'Hyper-targeted online campaigns that drive qualified inquiries & immediate action.',
      desc: 'We plan and run high-converting digital promotion blitzes across social platforms, search networks, and messaging channels to capture demand, generate inbound inquiries, and boost seasonal offers.',
      image: '/images/digital-marketing-banner.jpg',
      icon: SearchCheck,
      accentBorder: 'border-purple-200',
      badgeStyle: 'bg-purple-50 text-purple-700 border-purple-200',
      iconBg: 'bg-purple-600 text-white shadow-purple-200',
      capabilities: [
        'Hyper-local radius-targeted ad campaigns on Meta (Instagram & Facebook)',
        'High-intent Google Search, Display & Maps location promotion',
        'Instant WhatsApp lead generation funnels with automated responses',
        'Seasonal discount pushes, festival offers & flash promotion bursts',
        'Continuous A/B ad creative testing, landing page tuning & CAC reduction'
      ],
      highlights: [
        { label: 'Targeting', value: 'Hyper-Local Pin codes' },
        { label: 'Routing', value: 'Instant Lead Handover' },
        { label: 'Optimization', value: 'Daily ROAS Tracking' }
      ]
    },
    {
      id: 'outdoor-indoor-advertisement',
      stepNumber: '03',
      title: 'Outdoor & Indoor Advertisement',
      badge: 'High-Visibility OOH & POSM',
      tagline: 'High-visibility physical media placements across prime urban corridors.',
      desc: 'Position your brand in high-traffic physical touchpoints where scale and daily recall matter—from arterial highway hoardings and digital LED displays to in-store retail merchandising.',
      image: '/images/outdoor-ad-banner.jpg',
      icon: Building2,
      accentBorder: 'border-indigo-200',
      badgeStyle: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      iconBg: 'bg-indigo-600 text-white shadow-indigo-200',
      capabilities: [
        'Strategic hoarding & digital LED billboard media buying at institutional rates',
        'Transit media advertising (metro wraps, city buses & airport displays)',
        'Retail in-store POSM, branded display canopies, shelf talkers & standees',
        'Municipal permission clearances, structural safety & illumination checks',
        'Traffic count and pedestrian density site selection'
      ],
      highlights: [
        { label: 'Prime Sites', value: 'High-Density Corridors' },
        { label: 'Safety & Light', value: 'Regular Site Audits' },
        { label: 'Rates', value: 'Negotiated Volume Pricing' }
      ]
    },
    {
      id: 'print-digital-media-promotion',
      stepNumber: '04',
      title: 'Print & Digital Media Promotion',
      badge: 'Press, Publications & PR',
      tagline: 'Credible reach through regional/national newspapers, magazines & digital PR.',
      desc: 'Build wide authority and customer trust through well-timed newspaper features, targeted postal-code inserts, industry trade publication spreads, and syndicated digital PR releases.',
      image: '/images/marketing-communication-banner.jpg',
      icon: Palette,
      accentBorder: 'border-amber-200',
      badgeStyle: 'bg-amber-50 text-amber-700 border-amber-200',
      iconBg: 'bg-amber-600 text-white shadow-amber-200',
      capabilities: [
        'Mainline and regional newspaper display ads, quarter & half-page spreads',
        'Targeted door-to-door newspaper insert distribution in selected residential clusters',
        'Industry trade journal features, advertorials & product spotlights',
        'Digital PR releases across major Indian business news syndicates',
        'Launch messaging, corporate announcements & brand story amplification'
      ],
      highlights: [
        { label: 'Reach', value: 'Vernacular & Mainline' },
        { label: 'Credibility', value: 'Editorial Placements' },
        { label: 'Precision', value: 'Postal Code Targeting' }
      ]
    }
  ];

  const workflow = [
    {
      num: '01',
      title: 'Territory & Channel Mapping',
      desc: 'We identify target audiences, customer footfall zones, and the ideal promotional channel mix.'
    },
    {
      num: '02',
      title: 'Creative & Offer Design',
      desc: 'We develop compelling hooks, promotional assets, and production-ready creatives.'
    },
    {
      num: '03',
      title: 'Synchronized Execution',
      desc: 'Simultaneous deployment of on-ground teams, media inventory, and digital ad funnels.'
    },
    {
      num: '04',
      title: 'Lead Delivery & Review',
      desc: 'Immediate routing of captured leads, verification audits, and post-campaign performance summary.'
    }
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 px-6 lg:px-10 overflow-hidden bg-white border-b border-slate-100">
        {/* Soft Ambient Glows */}
        <div className="pointer-events-none absolute left-[-80px] top-[10%] h-[500px] w-[500px] rounded-full bg-indigo-50/70 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-80px] top-[15%] h-[500px] w-[500px] rounded-full bg-emerald-50/70 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[10%] left-[35%] h-[400px] w-[400px] rounded-full bg-purple-50/50 blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-500">
            <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services" className="hover:text-indigo-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Promotion & Advertisement</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-100 bg-indigo-50/90 text-indigo-700 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-600" />
              </span>
              Promotion & Advertisement
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-[-0.03em] leading-[1.12]"
            >
              Connect with your market through{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent block mt-2">
                four focused promotional channels.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
            >
              We plan and execute integrated promotional campaigns spanning on-ground activations, performance digital ads, outdoor visibility, and print media PR.
            </motion.p>

            {/* 4 Quick Anchor Jump Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-4 flex flex-wrap items-center justify-center gap-3"
            >
              {promoServices.map((service, idx) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm font-bold text-slate-800 hover:bg-slate-100 hover:border-indigo-300 transition-all hover:-translate-y-0.5"
                >
                  <span className="text-indigo-600 font-extrabold">0{idx + 1}.</span>
                  <span>{service.title}</span>
                </a>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* THE 4 PROMOTION SERVICES (Distinctive Structured Layout) */}
      <section className="py-16 lg:py-24 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-20 lg:space-y-28">
          
          {promoServices.map((service, index) => {
            const isEven = index % 2 === 0;
            const Icon = service.icon;

            return (
              <div 
                key={service.id} 
                id={service.id}
                className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                  
                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? '' : 'lg:col-start-6'}`}>
                    
                    {/* Header Tags */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-sm font-black font-display text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-100">
                        {service.stepNumber}
                      </span>
                      <span className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border ${service.badgeStyle}`}>
                        {service.badge}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                        {service.title}
                      </h2>
                      <p className="font-display text-lg font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mt-1">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                      {service.desc}
                    </p>

                    {/* Capabilities Checklist */}
                    <div className="space-y-2.5 pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                        Key Deliverables & Scope:
                      </h3>
                      {service.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-slate-700 font-medium">
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Highlight Metric Cards */}
                    <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-100">
                      {service.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                          <p className="text-[11px] text-slate-500 font-semibold uppercase">{hl.label}</p>
                          <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">{hl.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Action Link */}
                    <div className="pt-2">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-indigo-700 font-bold hover:text-indigo-900 transition-colors text-base group"
                      >
                        <span>Plan your {service.title}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>

                  </div>

                  {/* Photo Column */}
                  <div className={`lg:col-span-5 ${isEven ? '' : 'lg:col-start-1'}`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 via-purple-100 to-emerald-100 rounded-3xl transform rotate-2 -z-10 group-hover:rotate-3 transition-transform duration-500 shadow-md" />
                      
                      <div className="overflow-hidden rounded-3xl border-4 border-white bg-white shadow-xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-[320px] sm:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      {/* Floating Service Icon Pill */}
                      <div className={`absolute -bottom-4 -right-4 p-3.5 rounded-2xl ${service.iconBg} shadow-lg flex items-center gap-2`}>
                        <Icon className="w-6 h-6" />
                        <span className="font-bold text-sm">0{index + 1}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 4-STEP CAMPAIGN WORKFLOW */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
              Execution Flow
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 mt-4 tracking-tight">
              How We Execute Your{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Campaign in 4 Steps
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {workflow.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50/90 p-7 rounded-2xl border border-slate-200/80 hover:shadow-lg hover:border-indigo-200 transition-all hover:-translate-y-1"
              >
                <span className="text-3xl font-black font-display bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-4 block">
                  {item.num}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* BOTTOM CTA SECTION */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight mb-6"
          >
            Ready to launch your{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              promotional campaign?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-slate-600 font-medium mb-10 max-w-2xl mx-auto"
          >
            Let's discuss your target audience, key cities, and optimal promotional mix to deliver maximum market impact.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 hover:opacity-95 text-white font-extrabold text-lg px-10 py-5 rounded-full shadow-xl shadow-indigo-200 transition-all transform hover:-translate-y-1"
            >
              <span>Book Campaign Consultation</span>
              <ArrowRight className="w-6 h-6" />
            </Link>

            <a
              href="tel:8869990973"
              className="inline-flex items-center gap-2 px-8 py-5 rounded-full border-2 border-slate-300 text-slate-900 font-bold hover:bg-slate-50 transition-colors text-base"
            >
              <PhoneCall className="w-5 h-5 text-indigo-600" />
              <span>+91 8869990973</span>
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
