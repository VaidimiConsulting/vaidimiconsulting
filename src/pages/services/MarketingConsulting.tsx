import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Target, Zap, Megaphone, MonitorSmartphone } from 'lucide-react';

export default function MarketingConsulting() {
  const services = [
    {
      id: 'brand-creation',
      title: 'Brand Creation',
      desc: 'Build a new brand with a clear identity, voice, and position from the ground up.',
      icon: Sparkles,
      color: 'bg-rose-50 text-[#D95C5C] border-rose-100',
      btnHover: 'hover:bg-[#D95C5C]',
      link: '/marketing-consulting/brand-creation',
      img: '/images/brand-creation-banner.jpg'
    },
    {
      id: 'brand-development',
      title: 'Brand Development',
      desc: 'Strengthen your existing brand and create a consistent experience across touchpoints.',
      icon: Zap,
      color: 'bg-emerald-50 text-[#16a34a] border-emerald-100',
      btnHover: 'hover:bg-[#16a34a]',
      link: '/marketing-consulting/brand-development',
      img: '/images/brand-development-banner.jpg'
    },
    {
      id: 'marketing-communication',
      title: 'Marketing Communication',
      desc: 'Turn your strategy into communication that looks clear, feels consistent and connects.',
      icon: Megaphone,
      color: 'bg-sky-50 text-[#168FC5] border-sky-100',
      btnHover: 'hover:bg-[#168FC5]',
      link: '/marketing-consulting/marketing-communication',
      img: '/images/marketing-communication-banner.jpg'
    },
    {
      id: 'strategic-marketing',
      title: 'Strategic Marketing',
      desc: 'Build a focused marketing strategy around business goals, customers and market opportunities.',
      icon: Target,
      color: 'bg-slate-100 text-[#123B61] border-slate-200',
      btnHover: 'hover:bg-[#123B61]',
      link: '/marketing-consulting/strategic-marketing',
      img: '/images/strategic-marketing-banner.jpg'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      desc: 'Build a digital presence that increases visibility, attracts your audience and creates opportunities.',
      icon: MonitorSmartphone,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      btnHover: 'hover:bg-indigo-600',
      link: '/marketing-consulting/digital-marketing',
      img: '/images/digital-marketing-banner.jpg'
    }
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden">

      {/* HERO SECTION - Light, Quirky & Animated with Home.tsx Exact Color Scheme */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 px-6 lg:px-10 overflow-hidden bg-white">
        {/* Rich Ambient Glow Effects (Matching Home.tsx) */}
        <div className="pointer-events-none absolute left-[-100px] top-[10%] h-[500px] w-[500px] rounded-full bg-indigo-50/70 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-100px] top-[20%] h-[500px] w-[500px] rounded-full bg-emerald-50/70 blur-[120px]" />
        <div className="pointer-events-none absolute top-[50%] left-[30%] h-[400px] w-[400px] rounded-full bg-purple-50/50 blur-[120px]" />

        {/* Floating Quirky SVGs */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 left-10 lg:left-32 opacity-70 hidden md:block"
        >
           <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
             <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
           </svg>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 lg:right-32 opacity-70 hidden md:block"
        >
           <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
             <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
           </svg>
        </motion.div>

        <motion.div 
          animate={{ x: [0, 15, 0], y: [0, 15, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 lg:right-40 opacity-70 hidden lg:block"
        >
           <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
             <circle cx="12" cy="12" r="10"/>
             <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
             <line x1="9" y1="9" x2="9.01" y2="9"/>
             <line x1="15" y1="9" x2="15.01" y2="9"/>
           </svg>
        </motion.div>

        {/* Floating Cards */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="absolute top-1/3 left-[4%] bg-white/80 backdrop-blur-md border border-slate-200/80 p-4 rounded-2xl hidden xl:flex items-center gap-4 shadow-xl"
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center shadow-md shadow-emerald-200">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-slate-900 font-bold text-sm">Strategy Aligned</p>
            <p className="text-emerald-600 font-semibold text-xs">+45% Growth</p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.7 }}
           className="absolute bottom-1/4 right-[4%] bg-white/80 backdrop-blur-md border border-slate-200/80 p-4 rounded-2xl hidden xl:flex items-center gap-4 shadow-xl"
        >
          <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shadow-md shadow-indigo-200">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-slate-900 font-bold text-sm">Brand Elevated</p>
            <p className="text-indigo-600 font-semibold text-xs">Premium Positioning</p>
          </div>
        </motion.div>

        <div className="text-center relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-100 bg-indigo-50/90 text-indigo-700 font-bold text-xs sm:text-sm uppercase tracking-wider mb-8 shadow-xs"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-600" />
            </span>
            Marketing Consulting
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-[-0.03em] leading-[1.12]"
          >
            Connect with your audience.{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent block mt-2 relative">
              Grow your business.
              {/* Hand-drawn underline SVG */}
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-emerald-500 opacity-80" viewBox="0 0 200 20" preserveAspectRatio="none">
                 <path d="M0,10 Q50,20 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            We don't just create campaigns; we build comprehensive marketing engines that drive real results and elevate your brand.
          </motion.p>
        </div>
      </section>

      {/* THE 5 PILLARS - Zig Zag Layout */}
      <section className="py-20 bg-slate-50/70 relative">
        {/* Hand-drawn dashed connector */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-slate-300 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
              Our Five{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Marketing Pillars
              </span>
            </h2>
          </div>

          <div className="space-y-24 lg:space-y-32 relative z-10">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              const Icon = service.icon;

              return (
                <div key={service.id} className={`flex flex-col gap-10 lg:gap-16 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Image Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50, rotate: isEven ? -2 : 2 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, type: 'spring' }}
                    className="w-full lg:w-1/2 relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-emerald-100 transform rotate-3 rounded-3xl -z-10 group-hover:rotate-6 transition-transform duration-500" />
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-[300px] sm:h-[400px] object-cover rounded-3xl shadow-xl border-4 border-white"
                    />
                    
                    {/* Floating Badge */}
                    <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} p-4 rounded-2xl ${service.color} border-2 shadow-lg hidden sm:flex items-center gap-3 animate-bounce-slow`}>
                      <Icon className="w-8 h-8" />
                      <span className="font-bold text-lg">0{index + 1}</span>
                    </div>
                  </motion.div>

                  {/* Content Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="w-full lg:w-1/2 flex flex-col justify-center"
                  >
                     <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color} border mb-6 lg:hidden`}>
                       <Icon className="w-8 h-8" />
                     </div>
                     <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 mb-6 tracking-tight">
                        {service.title}
                     </h3>
                     <p className="text-lg text-slate-600 font-medium mb-8 leading-relaxed">
                        {service.desc}
                     </p>
                     
                     <Link
                        to={service.link}
                        className={`inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-slate-900 text-slate-950 font-bold shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all ${service.btnHover} hover:text-white hover:border-transparent`}
                     >
                       <span>Explore {service.title}</span>
                       <ArrowRight className="w-5 h-5" />
                     </Link>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Hand drawn quirky style with Home.tsx colors */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
           <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight mb-8"
           >
             Ready to make{' '}
             <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
               some noise?
             </span>
           </motion.h2>
           <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 font-medium mb-12"
           >
             Let's craft a strategy that stands out and delivers.
           </motion.p>
           
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, type: 'spring' }}
           >
             <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 hover:opacity-95 text-white font-extrabold text-lg px-10 py-5 rounded-full shadow-xl shadow-indigo-200 transition-all transform hover:-translate-y-1"
             >
               <span>Start Your Marketing Journey</span>
               <ArrowRight className="w-6 h-6" />
             </Link>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
