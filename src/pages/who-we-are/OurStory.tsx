import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Database,
  Layers3,
  Lightbulb,
  Megaphone,
  MonitorSmartphone,
  MoveRight,
  Paintbrush,
  Settings2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';

import { Button } from '@/components/ui/Button';


// ============================================================
// IMAGE PATHS
// Replace these filenames with your actual images.
// Keep the /images/ path if images are inside public/images/
// ============================================================

const IMAGE_PATHS = {
  hero: '/images/our-story-banner.jpg',
  story: '/images/our-story.jpg',
  challenge: '/images/unorganized.jpg',
  software: '/images/websoftware.jpg', 
  graphicDesign: '/images/graphic-design.jpg',
  marketing: '/images/marketing-solutions.jpg',
  approach: '/images/our-approach.jpg',
  vision: '/images/vision.jpg',
};


// ============================================================
// DATA
// ============================================================

const services = [
  {
    number: '01',
    icon: MonitorSmartphone,
    title: 'Web & Software Solutions',
    shortTitle: 'Digital Systems',
    description:
      'Web and software solutions designed around the way your business actually works — not around unnecessary complexity.',
    points: [
      'Business websites and digital platforms',
      'Custom business software',
      'Customer and enquiry management',
      'Process automation',
    ],
    accent: 'from-blue-500 to-cyan-400',
  },
  {
    number: '02',
    icon: Paintbrush,
    title: 'Graphic Designing',
    shortTitle: 'Creative Design',
    description:
      'Transforming your brand vision into impactful visual designs that resonate with your target audience and stand out in the market.',
    points: [
      'Brand Identity & Logos',
      'Marketing Materials',
      'UI/UX Prototyping',
      'Social Media Creatives',
    ],
    accent: 'from-amber-500 to-orange-400',
  },
  {
    number: '03',
    icon: Megaphone,
    title: 'Promotions & Advertising',
    shortTitle: 'Business Growth',
    description:
      'Marketing and advertising strategies focused on generating genuine enquiries and orders — not vanity metrics.',
    points: [
      'Digital promotion strategies',
      'Google and Meta advertising',
      'Lead generation',
      'Performance-focused campaigns',
    ],
    accent: 'from-violet-500 to-fuchsia-400',
  },
];

const approachSteps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We first understand your existing processes, challenges, team and business goals.',
    icon: Users,
  },
  {
    number: '02',
    title: 'Structure',
    description:
      'We identify where fragmented processes can be organised into clear and manageable systems.',
    icon: Layers3,
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We implement practical technology and business solutions that fit your actual working environment.',
    icon: Settings2,
  },
  {
    number: '04',
    title: 'Measure',
    description:
      'We focus on measurable outcomes such as time saved, errors reduced and revenue opportunities created.',
    icon: BarChart3,
  },
  {
    number: '05',
    title: 'Grow',
    description:
      'As your business grows, your systems can evolve with it instead of becoming another bottleneck.',
    icon: TrendingUp,
  },
];

const exploreLinks = [
  {
    title: 'Mission & Values',
    description:
      'Understand the principles and direction that shape Vaidimi Consulting.',
    to: '/who-we-are/mission-values',
  },
  {
    title: 'Leadership Team',
    description:
      'Meet the people responsible for building and guiding our consulting practice.',
    to: '/who-we-are/leadership-team',
  },
  {
    title: 'Our Services',
    description:
      'Explore the business, technology and growth solutions we offer.',
    to: '/services',
  },
];


// ============================================================
// ANIMATION VARIANTS
// ============================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};


// ============================================================
// COMPONENT
// ============================================================

export default function OurStory() {
  return (
    <main className="bg-white text-slate-900 overflow-hidden">

      {/* =====================================================
          HERO — Editorial inner-page banner style
      ====================================================== */}

      <section className="relative bg-slate-50 overflow-hidden border-b border-slate-200">
        
        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83v58.34h-58.34l-.83-.83v-58.34h58.34zm-2.07 2.07h-54.2v54.2h54.2v-54.2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />

        {/* Hand drawn sketch blob/lines in background */}
        <svg className="absolute top-0 right-0 text-emerald-600/10 w-full h-full pointer-events-none sketch-draw is-visible" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M-100 200 C 300 0, 700 400, 1100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="15 15" />
          <path d="M-100 800 C 400 900, 600 500, 1100 700" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
          <circle cx="80%" cy="30%" r="200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        </svg>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-32 lg:py-48 text-center">
          
          {/* Breadcrumb - Clean and minimal */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-12"
          >
            <span>Who We Are</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-emerald-700">Our Story</span>
          </motion.div>

          <motion.div
             variants={fadeUp}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
          >
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[80px] leading-[1.05] font-bold tracking-tight mb-8 relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-sky-500 to-indigo-600">
                Organising India's
              </span>
              <br />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-600">
                Unorganised MSMEs.
                {/* Sketchy underline */}
                <svg className="absolute w-[110%] h-5 -bottom-2 -left-[5%] text-emerald-500 sketch-draw is-visible" viewBox="0 0 200 20" preserveAspectRatio="none">
                  <path d="M5 15 Q 50 5 100 15 T 195 10" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <div className="mt-14 max-w-3xl mx-auto">
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light mb-8">
                Vaidimi Consulting exists to help India's small and growing businesses move from fragmented operations to structured, data-driven systems.
              </p>

              <div className="inline-block relative">
                <p className="text-3xl lg:text-4xl text-emerald-700 font-sketch transform -rotate-1 mt-4">
                  "Where business meets technology."
                </p>
                <svg className="absolute -top-4 -right-10 w-8 h-8 text-amber-400 sketch-draw is-visible" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15 10L22 12L15 14L12 22L9 14L2 12L9 10L12 2Z" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* =====================================================
          SKETCHY STORY SECTION (No Image)
      ====================================================== */}

      <section className="relative py-24 lg:py-36 bg-white overflow-hidden">
        {/* Decorative corner sketch */}
        <svg className="absolute top-10 left-10 w-32 h-32 text-slate-100 sketch-draw is-visible -rotate-12" viewBox="0 0 100 100">
          <path d="M10,50 Q40,10 90,50 T10,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>

        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="inline-flex flex-col items-center justify-center mb-10">
              <span className="text-emerald-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Core Philosophy</span>
              {/* Hand-drawn separator */}
              <svg className="w-24 h-4 text-slate-300" viewBox="0 0 100 20">
                <path d="M0 10 Q 25 0 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-slate-900 mb-12">
              From <span className="font-sketch text-5xl md:text-6xl text-slate-400 mx-2 underline decoration-wavy decoration-slate-200">chaos</span> to <span className="font-sketch text-5xl md:text-6xl text-emerald-600 mx-2">clarity.</span>
            </h2>

            <div className="space-y-8 text-slate-600 leading-relaxed text-lg md:text-xl font-light text-left md:text-center">
              <p>
                The story of Vaidimi started with a simple observation: <strong className="font-semibold text-slate-900">Most small businesses in India are running on pure willpower.</strong>
              </p>
              
              <p>
                They run on memory, handwritten registers, and endless WhatsApp messages. That works perfectly in the beginning. But as competition grows and customer expectations rise, this everyday chaos becomes an expensive bottleneck. Scale becomes impossible when information lives everywhere.
              </p>

              <div className="py-8 relative">
                {/* Sketch highlight box */}
                <svg className="absolute inset-0 w-full h-full text-amber-100 sketch-draw is-visible scale-110" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <rect x="5" y="5" width="90" height="90" fill="currentColor" stroke="none" rx="2" transform="rotate(-1 50 50)" />
                  <rect x="5" y="5" width="90" height="90" fill="none" stroke="#FBBF24" strokeWidth="0.5" rx="2" transform="rotate(1 50 50)" strokeDasharray="4 4" />
                </svg>
                
                <p className="relative z-10 text-2xl md:text-3xl font-serif font-bold text-slate-900 leading-snug px-6">
                  "Every small business deserves the exact same operational clarity as a large corporation — <span className="text-emerald-600 italic">without</span> the large-corporation complexity."
                </p>
              </div>

              <p>
                We built Vaidimi to be the bridge. We don't just hand over expensive software; we combine deep business consulting, tailored technology, and practical growth strategies to create systems that businesses <em className="text-slate-900 font-medium">can actually use every single day.</em>
              </p>
            </div>
            
            {/* Hand-drawn signature/ending */}
            <div className="mt-16 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4 border border-emerald-100">
                <Target className="w-7 h-7" />
              </div>
              <p className="font-sketch text-3xl text-slate-400">That is our promise.</p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* =====================================================
          THE PROBLEM
      ====================================================== */}

      <section className="py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              The Problem We Saw
            </span>

            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-5 leading-tight">
              Growth becomes difficult when information lives
              <span className="text-red-600"> everywhere.</span>
            </h2>

            <p className="mt-5 text-slate-600 text-base lg:text-lg leading-relaxed max-w-2xl">
              A business may have customers, employees, products and sales —
              but without connected systems, every new level of growth creates
              more complexity.
            </p>
          </motion.div>


          {/* Flow */}
          <div className="mt-16 relative">
            <img
              src={IMAGE_PATHS.challenge}
              alt="Unorganised MSME business operations"
              className="w-full h-[420px] object-cover rounded-3xl mb-12"
            />

            <div className="hidden lg:block absolute top-[78px] left-[10%] right-[10%] h-px bg-gradient-to-r from-red-200 via-orange-200 to-emerald-200" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">

              {[
                {
                  icon: Lightbulb,
                  title: 'Memory',
                  text: 'Important business information depends on individuals remembering what happened.',
                  color: 'text-amber-600',
                  bg: 'bg-amber-50',
                },
                {
                  icon: Database,
                  title: 'Registers',
                  text: 'Records stay scattered across notebooks, spreadsheets and disconnected files.',
                  color: 'text-orange-600',
                  bg: 'bg-orange-50',
                },
                {
                  icon: Workflow,
                  title: 'WhatsApp',
                  text: 'Orders, customer conversations and decisions disappear inside chats.',
                  color: 'text-green-600',
                  bg: 'bg-green-50',
                },
                {
                  icon: BarChart3,
                  title: 'Fragmented Data',
                  text: 'Owners struggle to see the complete picture and make decisions quickly.',
                  color: 'text-red-600',
                  bg: 'bg-red-50',
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <span className="text-xs font-bold text-slate-300">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}

            </div>
          </div>


          {/* Transition statement */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8 p-6 lg:p-8 rounded-2xl border border-emerald-200 bg-emerald-50/40"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <MoveRight className="w-5 h-5" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.15em] font-bold text-emerald-700">
                What Vaidimi changes
              </p>

              <p className="mt-1 text-lg lg:text-xl font-semibold text-slate-900">
                We connect people, processes, information and technology into
                a system your business can actually run on.
              </p>
            </div>
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          WHAT WE DO
      ====================================================== */}

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-xs uppercase tracking-[0.16em] font-bold text-blue-700">
                What We Do
              </span>

              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Three areas.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-emerald-600">
                  One connected approach.
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-md text-slate-500 leading-relaxed"
            >
              We do not treat technology, operations and marketing as
              separate problems. They work best when they work together.
            </motion.p>
          </div>


          <div className="space-y-7">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.number}
                  initial={{
                    opacity: 0,
                    x: isEven ? -35 : 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden border border-slate-200 rounded-[28px] bg-white hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500"
                >
                  <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

                    {/* Visual block */}
                    <div
                      className={`relative min-h-[280px] lg:min-h-[350px] overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'
                        }`}
                    >
                      <img
                        src={
                          index === 0
                            ? IMAGE_PATHS.software
                            : index === 1
                              ? IMAGE_PATHS.graphicDesign
                              : IMAGE_PATHS.marketing
                        }
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />

                      <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/20 transition-colors" />

                      <div className="absolute top-6 left-6">
                        <span className="inline-flex px-3 py-1.5 rounded-full bg-white/95 backdrop-blur text-xs font-bold text-slate-800">
                          {service.shortTitle}
                        </span>
                      </div>

                      <div className="absolute bottom-6 left-6 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-xl text-slate-900">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>


                    {/* Content */}
                    <div
                      className={`p-7 md:p-10 lg:p-12 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-black text-slate-300">
                          {service.number}
                        </span>

                        <div
                          className={`h-1 w-16 rounded-full bg-gradient-to-r ${service.accent}`}
                        />
                      </div>

                      <h3 className="mt-5 font-serif text-2xl md:text-3xl font-bold text-slate-950">
                        {service.title}
                      </h3>

                      <p className="mt-4 text-slate-600 leading-relaxed max-w-xl">
                        {service.description}
                      </p>

                      <div className="mt-7 grid sm:grid-cols-2 gap-x-5 gap-y-3">
                        {service.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-2.5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                            <span className="text-sm text-slate-600">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to="/services"
                        className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-700 group/link"
                      >
                        Explore this capability
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =====================================================
          OUR APPROACH
      ====================================================== */}

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-[0.15em]">
              <Workflow className="w-4 h-4" />
              Our Approach
            </span>

            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-5 leading-tight">
              Start where you are.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-600">
                Build from there.
              </span>
            </h2>

            <p className="mt-5 text-slate-600 leading-relaxed">
              We believe transformation should be practical. Use tools you
              can afford, introduce change at the right pace and continuously
              measure whether the system is making the business better.
            </p>
          </motion.div>


          {/* Process */}
          <div className="mt-20 relative">

            {/* Desktop connector */}
            <div className="hidden lg:block absolute top-[38px] left-[9%] right-[9%] h-px bg-gradient-to-r from-blue-200 via-indigo-200 to-emerald-200" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5">
              {approachSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.1,
                    }}
                    className="relative text-center lg:text-left"
                  >
                    <div className="relative z-10 w-[76px] h-[76px] mx-auto lg:mx-0 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-slate-950 text-white flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="mt-6">
                      <span className="text-[11px] font-black tracking-[0.18em] text-blue-600">
                        STEP {step.number}
                      </span>

                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>


          {/* Image + statement */}
          <div className="mt-24 grid lg:grid-cols-[1fr_0.9fr] gap-10 items-center">

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[28px] overflow-hidden border border-slate-200"
            >
              <img
                src={IMAGE_PATHS.approach}
                alt="Vaidimi approach"
                className="w-full h-[360px] lg:h-[440px] object-cover"
              />
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-3xl md:text-4xl font-bold mt-6 leading-tight">
                We measure progress in business outcomes.
              </h3>

              <p className="mt-5 text-slate-600 leading-relaxed">
                Our approach is simple: start where you are, use tools you can
                afford, and measure results in time saved, errors reduced and
                revenue grown.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  'Time saved',
                  'Errors reduced',
                  'Processes organised',
                  'Revenue opportunities created',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>

                    <span className="font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          OUR BELIEF
      ====================================================== */}

      <section className="relative py-28 lg:py-36 bg-white overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-blue-100 pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-emerald-100 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center relative z-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 text-white flex items-center justify-center shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              What We Believe
            </p>

            <blockquote className="mt-6 font-serif text-3xl md:text-5xl lg:text-[56px] leading-[1.12] font-bold text-slate-950">
              “Every small business deserves the same operational clarity as
              a large company —
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-emerald-600">
                {' '}without the large-company complexity.
              </span>
              ”
            </blockquote>

            <p className="mt-8 max-w-2xl mx-auto text-slate-500 text-base lg:text-lg leading-relaxed">
              Technology should simplify the way a business works, not create
              another layer of work for the people running it.
            </p>
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          VISION
      ====================================================== */}

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-24 items-center">

            {/* Content */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                <span className="w-8 h-px bg-emerald-600" />
                Where We're Going
              </span>

              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-5 leading-tight">
                Building the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-700">
                  digital backbone
                </span>
                of India's MSMEs.
              </h2>

              <p className="mt-6 text-slate-600 text-base lg:text-lg leading-relaxed">
                Our goal is to be the trusted digital backbone for thousands
                of MSMEs, helping them move from daily firefighting to
                confident, profitable growth.
              </p>

              <p className="mt-5 text-slate-600 leading-relaxed">
                We want business owners to spend less time searching for
                information, fixing avoidable errors and managing disconnected
                processes — and more time building their businesses.
              </p>

              <div className="mt-9 grid sm:grid-cols-2 gap-4">

                <div className="p-5 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Database className="w-5 h-5" />
                  </div>

                  <h3 className="mt-4 font-bold text-slate-900">
                    Better information
                  </h3>

                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    Make important business information accessible and
                    organised.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>

                  <h3 className="mt-4 font-bold text-slate-900">
                    Confident growth
                  </h3>

                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    Build systems that support growth instead of slowing it
                    down.
                  </p>
                </div>

              </div>
            </motion.div>


            {/* Image */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[32px] overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src={IMAGE_PATHS.vision}
                  alt="Vaidimi vision"
                  className="w-full h-[440px] lg:h-[570px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white border border-slate-200 shadow-xl rounded-2xl p-5 max-w-[270px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider font-bold text-slate-400">
                      Our long-term goal
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-900 leading-snug">
                      From daily firefighting to confident growth.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          EXPLORE FURTHER
      ====================================================== */}

      <section className="py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                Continue Exploring
              </span>

              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3">
                Get to know Vaidimi better.
              </h2>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-emerald-600 transition-colors"
            >
              Talk to our team
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>


          <div className="grid md:grid-cols-3 gap-5">

            {exploreLinks.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <Link
                  to={item.to}
                  className="group block h-full rounded-2xl border border-slate-200 p-6 lg:p-7 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-300">
                      0{index + 1}
                    </span>

                    <div className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-bold text-blue-700">
                    Explore
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="pb-24 lg:pb-32 pt-4 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl shadow-slate-200/60"
          >
            {/* Decorative gradients */}
            <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-blue-100/70 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-emerald-100/70 blur-3xl" />

            <div className="relative z-10 px-7 py-14 md:px-12 lg:px-20 lg:py-20 text-center">

              <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 text-white flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6" />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                Let's Build Better
              </p>

              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 leading-tight max-w-3xl mx-auto">
                Your business does not need more complexity.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-600">
                  It needs better systems.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl mx-auto text-slate-600 leading-relaxed">
                If you are ready to organise your operations, strengthen your
                digital presence or build systems for sustainable growth,
                Vaidimi is ready to help.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button to="/contact">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <Button
                  to="/services"
                  variant="outline"
                >
                  Explore Services
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}