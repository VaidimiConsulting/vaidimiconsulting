import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  Compass,
  Star,
  Users
} from 'lucide-react';

/* ============================================================
   STYLIZED EXECUTIVE PROFILE AVATAR SVGS
============================================================ */

// 1. Gargi Singh — Creative Head & Director Avatar
function CreativeAvatarSVG() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      <circle cx="60" cy="60" r="56" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" strokeDasharray="5 4" />
      <circle cx="60" cy="60" r="48" fill="url(#avatar-creative-grad)" />
      
      {/* Head Silhouette */}
      <circle cx="60" cy="46" r="20" fill="#FFFFFF" />
      <path d="M 40 46 C 40 28, 80 28, 80 46 C 80 50, 77 56, 73 54 C 70 42, 50 42, 47 54 C 43 56, 40 50, 40 46 Z" fill="#047857" />
      {/* Designer Glasses */}
      <rect x="47" y="42" width="11" height="8" rx="2" stroke="#065F46" strokeWidth="2" fill="none" />
      <rect x="62" y="42" width="11" height="8" rx="2" stroke="#065F46" strokeWidth="2" fill="none" />
      <line x1="58" y1="46" x2="62" y2="46" stroke="#065F46" strokeWidth="2" />
      
      {/* Shoulders */}
      <path d="M 32 94 C 32 74, 46 68, 60 68 C 74 68, 88 74, 88 94 Z" fill="#FFFFFF" />
      <path d="M 44 94 L 56 72 L 64 72 L 76 94 Z" fill="#10B981" />
      {/* Creative Palette Pin */}
      <circle cx="86" cy="84" r="14" fill="#047857" stroke="#FFFFFF" strokeWidth="2.5" />
      <path d="M 81 84 A 5 5 0 1 1 91 84 A 5 5 0 1 1 81 84" fill="#F59E0B" />
      <circle cx="84" cy="81" r="2" fill="#E11D48" />
      <circle cx="88" cy="85" r="2" fill="#38BDF8" />

      <defs>
        <linearGradient id="avatar-creative-grad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop stopColor="#047857" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 2. Mayank Pandey — Marketing Head Avatar
function MarketingAvatarSVG() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      <circle cx="60" cy="60" r="56" fill="#F0F9FF" stroke="#0284C7" strokeWidth="2" strokeDasharray="5 4" />
      <circle cx="60" cy="60" r="48" fill="url(#avatar-marketing-grad)" />

      {/* Head Silhouette */}
      <circle cx="60" cy="46" r="20" fill="#FFFFFF" />
      <path d="M 41 42 C 41 26, 79 26, 79 42 C 77 34, 43 34, 41 42 Z" fill="#0C4A6E" />
      <path d="M 54 53 Q 60 58 66 53" stroke="#0369A1" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Shoulders & Tie */}
      <path d="M 32 94 C 32 74, 46 68, 60 68 C 74 68, 88 74, 88 94 Z" fill="#FFFFFF" />
      <path d="M 46 94 L 54 68 L 60 84 L 66 68 L 74 94 Z" fill="#0284C7" />
      <polygon points="58,74 62,74 63,88 60,94 57,88" fill="#F59E0B" />

      {/* Growth Badge Pin */}
      <circle cx="86" cy="84" r="14" fill="#0284C7" stroke="#FFFFFF" strokeWidth="2.5" />
      <path d="M 79 90 L 85 84 L 88 87 L 93 78" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="93,78 94,83 89,80" fill="#FFFFFF" />

      <defs>
        <linearGradient id="avatar-marketing-grad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284C7" />
          <stop stopColor="#0369A1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 3. Madhu Prajapati — Tech Lead & Software Consultant Avatar
function SoftwareAvatarSVG() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      <circle cx="60" cy="60" r="56" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="2" strokeDasharray="5 4" />
      <circle cx="60" cy="60" r="48" fill="url(#avatar-tech-grad)" />

      {/* Head Silhouette */}
      <circle cx="60" cy="46" r="20" fill="#FFFFFF" />
      <path d="M 42 45 C 42 27, 78 27, 78 45 C 75 36, 45 36, 42 45 Z" fill="#4C1D95" />
      
      {/* Tech Glasses */}
      <rect x="47" y="43" width="11" height="8" rx="2" stroke="#5B21B6" strokeWidth="2" fill="none" />
      <rect x="62" y="43" width="11" height="8" rx="2" stroke="#5B21B6" strokeWidth="2" fill="none" />
      <line x1="58" y1="47" x2="62" y2="47" stroke="#5B21B6" strokeWidth="2" />

      {/* Shoulders */}
      <path d="M 32 94 C 32 74, 46 68, 60 68 C 74 68, 88 74, 88 94 Z" fill="#FFFFFF" />
      <path d="M 48 94 L 56 70 L 64 70 L 72 94 Z" fill="#7C3AED" />

      {/* Code Bracket < / > Pin */}
      <circle cx="86" cy="84" r="14" fill="#6D28D9" stroke="#FFFFFF" strokeWidth="2.5" />
      <text x="76" y="88" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>

      <defs>
        <linearGradient id="avatar-tech-grad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C3AED" />
          <stop stopColor="#5B21B6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 4. Varsha Srivastava — Developer & Design Consultant Avatar
function DesignDevAvatarSVG() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      <circle cx="60" cy="60" r="56" fill="#FFF1F2" stroke="#E11D48" strokeWidth="2" strokeDasharray="5 4" />
      <circle cx="60" cy="60" r="48" fill="url(#avatar-design-grad)" />

      {/* Head Silhouette */}
      <circle cx="60" cy="46" r="20" fill="#FFFFFF" />
      <path d="M 38 46 C 38 25, 82 25, 82 46 C 84 62, 78 72, 76 76 C 72 58, 48 58, 44 76 C 42 72, 36 62, 38 46 Z" fill="#9F1239" />
      <circle cx="53" cy="47" r="2" fill="#881337" />
      <circle cx="67" cy="47" r="2" fill="#881337" />
      <path d="M 56 54 Q 60 58 64 54" stroke="#881337" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Shoulders */}
      <path d="M 32 94 C 32 74, 46 68, 60 68 C 74 68, 88 74, 88 94 Z" fill="#FFFFFF" />
      <path d="M 44 94 L 56 70 L 64 70 L 76 94 Z" fill="#E11D48" />

      {/* Sparkles Pin */}
      <circle cx="86" cy="84" r="14" fill="#E11D48" stroke="#FFFFFF" strokeWidth="2.5" />
      <path d="M 86 76 L 87.5 82 L 93 83.5 L 87.5 85 L 86 91 L 84.5 85 L 79 83.5 L 84.5 82 Z" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1" />

      <defs>
        <linearGradient id="avatar-design-grad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E11D48" />
          <stop stopColor="#BE123C" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 5. Vipin Kumar — IT Networking & Infrastructure Avatar
function NetworkAvatarSVG() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      <circle cx="60" cy="60" r="56" fill="#FFFBEB" stroke="#D97706" strokeWidth="2" strokeDasharray="5 4" />
      <circle cx="60" cy="60" r="48" fill="url(#avatar-network-grad)" />

      {/* Head Silhouette */}
      <circle cx="60" cy="46" r="20" fill="#FFFFFF" />
      <path d="M 41 42 C 41 28, 79 28, 79 42 C 77 34, 43 34, 41 42 Z" fill="#78350F" />
      <path d="M 54 53 Q 60 57 66 53" stroke="#B45309" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Shoulders */}
      <path d="M 32 94 C 32 74, 46 68, 60 68 C 74 68, 88 74, 88 94 Z" fill="#FFFFFF" />
      <path d="M 44 94 L 54 68 L 66 68 L 76 94 Z" fill="#D97706" />

      {/* Shield Pin */}
      <circle cx="86" cy="84" r="14" fill="#D97706" stroke="#FFFFFF" strokeWidth="2.5" />
      <path d="M 86 76 L 92 79 L 92 85 C 92 89, 86 92, 86 92 C 86 92, 80 89, 80 85 L 80 79 Z" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />

      <defs>
        <linearGradient id="avatar-network-grad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop stopColor="#B45309" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ============================================================
   LEADERSHIP TEAM DATA — CONCISE, PUNCHY & PROFESSIONAL
============================================================ */
const LEADERS = [
  {
    name: 'Gargi Singh',
    title: 'Director · Creative Head',
    focus: 'Directs overall creative strategy, brand governance, and high-impact visual positioning for growing enterprises.',
    specialties: ['Brand Identity', 'Creative Direction', 'Executive Aesthetics'],
    avatar: CreativeAvatarSVG,
    number: '01',
    themeColor: '#059669',
    accentBadge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    accentDot: 'bg-emerald-500'
  },
  {
    name: 'Mayank Pandey',
    title: 'Marketing Head · Lead Consultant',
    focus: 'Engineers commercial growth architectures, systematic customer acquisition, and high-converting demand funnels.',
    specialties: ['Growth Architecture', 'Demand Gen', 'Market Expansion'],
    avatar: MarketingAvatarSVG,
    number: '02',
    themeColor: '#0284C7',
    accentBadge: 'bg-sky-50 text-sky-800 border-sky-200',
    accentDot: 'bg-sky-500'
  },
  {
    name: 'Madhu Prajapati',
    title: 'Team Lead · Software Consultant',
    focus: 'Architects scalable cloud architectures, custom business software platforms, and agile tech delivery pipelines.',
    specialties: ['System Architecture', 'Enterprise Software', 'Cloud Engineering'],
    avatar: SoftwareAvatarSVG,
    number: '03',
    themeColor: '#7C3AED',
    accentBadge: 'bg-violet-50 text-violet-800 border-violet-200',
    accentDot: 'bg-violet-500'
  },
  {
    name: 'Varsha Srivastava',
    title: 'Developer · Design Consultant',
    focus: 'Crafts high-performance interactive web products, accessible design systems, and seamless user experiences.',
    specialties: ['Product UI/UX', 'Frontend Web Tech', 'Component Ergonomics'],
    avatar: DesignDevAvatarSVG,
    number: '04',
    themeColor: '#E11D48',
    accentBadge: 'bg-rose-50 text-rose-800 border-rose-200',
    accentDot: 'bg-rose-500'
  },
  {
    name: 'Vipin Kumar',
    title: 'IT Networking Consultant · Technical Head',
    focus: 'Builds fault-tolerant IT networks, enterprise server topologies, and resilient zero-compromise cyber infrastructure.',
    specialties: ['Network Topologies', 'Cloud Resilience', 'Cybersecurity'],
    avatar: NetworkAvatarSVG,
    number: '05',
    themeColor: '#D97706',
    accentBadge: 'bg-amber-50 text-amber-800 border-amber-200',
    accentDot: 'bg-amber-500'
  },
];

export default function LeadershipTeam() {
  return (
    <div className="bg-white text-slate-900">
      
      {/* =========================================================
          SECTION 1: HERO BANNER (Only section with Dark/Executive Background)
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-16 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-800">
        
        {/* Subtle Blueprint Mesh Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.14]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-blueprint" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 50 M 0 0 L 50 50" fill="none" stroke="#38BDF8" strokeWidth="0.8" />
                <circle cx="25" cy="25" r="1.5" fill="#10B981" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-blueprint)" />
          </svg>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {/* Breadcrumb / Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/90 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Who We Are · Leadership Team</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Architects of Business{' '}
              <span className="relative inline-block bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                Transformation.
                {/* Hand-drawn sketchy underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-400 overflow-visible" viewBox="0 0 200 10" fill="none">
                  <path d="M 2 7 Q 50 1 100 6 T 198 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Concise Supporting Message */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2 max-w-2xl mx-auto font-normal">
              Meet the domain specialists steering strategy, creative brand direction, digital technology, and high-performance execution at Vaidimi Consulting.
            </p>

            {/* Updated note (Removing partner-engagement per instructions) */}
            <div className="pt-2">
              <span className="font-sketch text-2xl lg:text-3xl text-amber-300 inline-block transform -rotate-1">
                "Dedicated domain specialists on every engagement."
              </span>
            </div>
          </motion.div>
        </div>
      </section>


      {/* =========================================================
          SECTION 2: CLEAN WHITE BACKGROUND — CONTENT-FIRST PROFILE ROWS
          (No boxed cards, pure clean white background matching rest of site)
      ========================================================= */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          
          {/* Clean Sub-header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 inline-block">
              Core Practice Specialists
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
              Five Disciplines · One Unified Direction
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every engagement is led directly by a dedicated functional head specialized in your industry sector.
            </p>
          </div>

          {/* Clean, Open, Unboxed Profile Rows */}
          <div className="divide-y divide-slate-100">
            {LEADERS.map((leader, i) => {
              const Avatar = leader.avatar;

              return (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="py-12 first:pt-0 last:pb-0 flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-12 group"
                >
                  
                  {/* Left: Distinctive Profile Avatar SVG */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-slate-50 border-2 border-slate-200/90 shadow-sm group-hover:scale-105 group-hover:border-slate-300 transition-all duration-300 flex items-center justify-center">
                      <Avatar />
                    </div>
                  </div>

                  {/* Right: Clean, High-Impact Content */}
                  <div className="flex-1 space-y-3">
                    
                    {/* Top Meta Line: Number + Pill Tag */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-slate-400">
                        #{leader.number}
                      </span>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold border ${leader.accentBadge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${leader.accentDot}`} />
                        <span>Practice Specialist</span>
                      </span>
                    </div>

                    {/* Leader Name & Title */}
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                        {leader.name}
                      </h3>
                      <p 
                        className="text-xs sm:text-sm font-bold uppercase tracking-wider mt-0.5"
                        style={{ color: leader.themeColor }}
                      >
                        {leader.title}
                      </p>
                    </div>

                    {/* Concise Focus Statement */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                      {leader.focus}
                    </p>

                    {/* Competency Badges */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {leader.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{spec}</span>
                        </span>
                      ))}
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 3: WORK WITH US (Standard Brand Frame #16241D)
      ========================================================= */}
      <section className="py-20 bg-[#16241D] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Specialist Counsel</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to work alongside this team?
          </h2>

          <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed">
            Connect directly with our domain practice heads to discuss your organization's growth, technology, or operational transformation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm shadow-lg shadow-emerald-950/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/careers"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 text-white text-sm font-semibold transition-all duration-300"
            >
              <span>View Open Roles</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
