import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Compass,
  Award,
  Layers,
  Zap,
  TrendingUp,
  Cpu
} from 'lucide-react';

/* ============================================================
   STYLIZED EXECUTIVE PROFILE AVATAR SVGS
   Vibrant, colorful, profile-character icons for each domain
============================================================ */

// 1. Gargi Singh — Creative Head & Director Avatar
function CreativeAvatarSVG() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* Outer Glow Ring */}
      <circle cx="60" cy="60" r="56" fill="#ECFDF5" stroke="#10B981" strokeWidth="2.5" strokeDasharray="6 4" />
      <circle cx="60" cy="60" r="48" fill="url(#avatar-creative-grad)" />
      
      {/* Head Silhouette */}
      <circle cx="60" cy="46" r="20" fill="#FFFFFF" />
      {/* Stylish Hair / Creative Outline */}
      <path d="M 40 46 C 40 28, 80 28, 80 46 C 80 50, 77 56, 73 54 C 70 42, 50 42, 47 54 C 43 56, 40 50, 40 46 Z" fill="#047857" />
      {/* Designer Glasses Sketch */}
      <rect x="47" y="42" width="11" height="8" rx="2" stroke="#065F46" strokeWidth="2" fill="none" />
      <rect x="62" y="42" width="11" height="8" rx="2" stroke="#065F46" strokeWidth="2" fill="none" />
      <line x1="58" y1="46" x2="62" y2="46" stroke="#065F46" strokeWidth="2" />
      
      {/* Shoulders / Executive Torso */}
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
      {/* Outer Glow Ring */}
      <circle cx="60" cy="60" r="56" fill="#F0F9FF" stroke="#0284C7" strokeWidth="2.5" strokeDasharray="6 4" />
      <circle cx="60" cy="60" r="48" fill="url(#avatar-marketing-grad)" />

      {/* Head Silhouette */}
      <circle cx="60" cy="46" r="20" fill="#FFFFFF" />
      {/* Professional Short Haircut */}
      <path d="M 41 42 C 41 26, 79 26, 79 42 C 77 34, 43 34, 41 42 Z" fill="#0C4A6E" />
      {/* Confident Smile Sketch */}
      <path d="M 54 53 Q 60 58 66 53" stroke="#0369A1" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Shoulders / Suit Lapel */}
      <path d="M 32 94 C 32 74, 46 68, 60 68 C 74 68, 88 74, 88 94 Z" fill="#FFFFFF" />
      <path d="M 46 94 L 54 68 L 60 84 L 66 68 L 74 94 Z" fill="#0284C7" />
      {/* Tie */}
      <polygon points="58,74 62,74 63,88 60,94 57,88" fill="#F59E0B" />

      {/* Dynamic Growth Badge Pin */}
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
      {/* Outer Glow Ring */}
      <circle cx="60" cy="60" r="56" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="2.5" strokeDasharray="6 4" />
      <circle cx="60" cy="60" r="48" fill="url(#avatar-tech-grad)" />

      {/* Head Silhouette */}
      <circle cx="60" cy="46" r="20" fill="#FFFFFF" />
      {/* Modern Hair */}
      <path d="M 42 45 C 42 27, 78 27, 78 45 C 75 36, 45 36, 42 45 Z" fill="#4C1D95" />
      
      {/* Tech Glasses */}
      <rect x="47" y="43" width="11" height="8" rx="2" stroke="#5B21B6" strokeWidth="2" fill="none" />
      <rect x="62" y="43" width="11" height="8" rx="2" stroke="#5B21B6" strokeWidth="2" fill="none" />
      <line x1="58" y1="47" x2="62" y2="47" stroke="#5B21B6" strokeWidth="2" />

      {/* Shoulders / Torso */}
      <path d="M 32 94 C 32 74, 46 68, 60 68 C 74 68, 88 74, 88 94 Z" fill="#FFFFFF" />
      <path d="M 48 94 L 56 70 L 64 70 L 72 94 Z" fill="#7C3AED" />

      {/* Code Bracket < / > Badge Pin */}
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
      {/* Outer Glow Ring */}
      <circle cx="60" cy="60" r="56" fill="#FFF1F2" stroke="#E11D48" strokeWidth="2.5" strokeDasharray="6 4" />
      <circle cx="60" cy="60" r="48" fill="url(#avatar-design-grad)" />

      {/* Head Silhouette */}
      <circle cx="60" cy="46" r="20" fill="#FFFFFF" />
      {/* Long/Flowing Hair Sketch */}
      <path d="M 38 46 C 38 25, 82 25, 82 46 C 84 62, 78 72, 76 76 C 72 58, 48 58, 44 76 C 42 72, 36 62, 38 46 Z" fill="#9F1239" />
      {/* Eyes Sketch */}
      <circle cx="53" cy="47" r="2" fill="#881337" />
      <circle cx="67" cy="47" r="2" fill="#881337" />
      <path d="M 56 54 Q 60 58 64 54" stroke="#881337" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Shoulders / Torso */}
      <path d="M 32 94 C 32 74, 46 68, 60 68 C 74 68, 88 74, 88 94 Z" fill="#FFFFFF" />
      <path d="M 44 94 L 56 70 L 64 70 L 76 94 Z" fill="#E11D48" />

      {/* Sparkles / Magic Wand Badge Pin */}
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
      {/* Outer Glow Ring */}
      <circle cx="60" cy="60" r="56" fill="#FFFBEB" stroke="#D97706" strokeWidth="2.5" strokeDasharray="6 4" />
      <circle cx="60" cy="60" r="48" fill="url(#avatar-network-grad)" />

      {/* Head Silhouette */}
      <circle cx="60" cy="46" r="20" fill="#FFFFFF" />
      {/* Short Trimmed Hair */}
      <path d="M 41 42 C 41 28, 79 28, 79 42 C 77 34, 43 34, 41 42 Z" fill="#78350F" />
      {/* Confident Smile Sketch */}
      <path d="M 54 53 Q 60 57 66 53" stroke="#B45309" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Shoulders / Torso */}
      <path d="M 32 94 C 32 74, 46 68, 60 68 C 74 68, 88 74, 88 94 Z" fill="#FFFFFF" />
      <path d="M 44 94 L 54 68 L 66 68 L 76 94 Z" fill="#D97706" />

      {/* Server & Shield Badge Pin */}
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
   LEADERSHIP TEAM DATA — SHORT, PUNCHY & HIGH-IMPACT
============================================================ */
const LEADERS = [
  {
    name: 'Gargi Singh',
    title: 'Director · Creative Head',
    focus: 'Directs overall creative strategy, brand governance, and high-impact visual positioning for growing enterprises.',
    specialties: ['Brand Identity', 'Creative Direction', 'Executive Aesthetics'],
    avatar: CreativeAvatarSVG,
    number: '01',
    themeColor: '#10B981',
    accentBadge: 'bg-emerald-50 text-emerald-800 border-emerald-300',
    topStripe: 'from-emerald-400 via-teal-500 to-[#173F69]',
    shadowColor: 'hover:shadow-emerald-500/20',
    borderColor: 'hover:border-emerald-400'
  },
  {
    name: 'Mayank Pandey',
    title: 'Marketing Head · Lead Consultant',
    focus: 'Engineers commercial growth architectures, systematic customer acquisition, and high-converting demand funnels.',
    specialties: ['Growth Architecture', 'Demand Gen', 'Market Expansion'],
    avatar: MarketingAvatarSVG,
    number: '02',
    themeColor: '#0284C7',
    accentBadge: 'bg-sky-50 text-sky-800 border-sky-300',
    topStripe: 'from-sky-400 via-blue-500 to-[#173F69]',
    shadowColor: 'hover:shadow-sky-500/20',
    borderColor: 'hover:border-sky-400'
  },
  {
    name: 'Madhu Prajapati',
    title: 'Team Lead · Software Consultant',
    focus: 'Architects scalable cloud architectures, custom business software platforms, and agile tech delivery pipelines.',
    specialties: ['System Architecture', 'Enterprise Software', 'Cloud Engineering'],
    avatar: SoftwareAvatarSVG,
    number: '03',
    themeColor: '#7C3AED',
    accentBadge: 'bg-violet-50 text-violet-800 border-violet-300',
    topStripe: 'from-violet-400 via-purple-600 to-[#173F69]',
    shadowColor: 'hover:shadow-violet-500/20',
    borderColor: 'hover:border-violet-400'
  },
  {
    name: 'Varsha Srivastava',
    title: 'Developer · Design Consultant',
    focus: 'Crafts high-performance interactive web products, accessible design systems, and seamless user experiences.',
    specialties: ['Product UI/UX', 'Frontend Web Tech', 'Component Ergonomics'],
    avatar: DesignDevAvatarSVG,
    number: '04',
    themeColor: '#E11D48',
    accentBadge: 'bg-rose-50 text-rose-800 border-rose-300',
    topStripe: 'from-rose-400 via-pink-500 to-[#173F69]',
    shadowColor: 'hover:shadow-rose-500/20',
    borderColor: 'hover:border-rose-400'
  },
  {
    name: 'Vipin Kumar',
    title: 'IT Networking Consultant · Technical Head',
    focus: 'Builds fault-tolerant IT networks, enterprise server topologies, and resilient zero-compromise cyber infrastructure.',
    specialties: ['Network Topologies', 'Cloud Resilience', 'Cybersecurity'],
    avatar: NetworkAvatarSVG,
    number: '05',
    themeColor: '#D97706',
    accentBadge: 'bg-amber-50 text-amber-800 border-amber-300',
    topStripe: 'from-amber-400 via-yellow-500 to-[#173F69]',
    shadowColor: 'hover:shadow-amber-500/20',
    borderColor: 'hover:border-amber-400'
  },
];

export default function LeadershipTeam() {
  return (
    <div className="relative min-h-screen bg-slate-900 text-slate-100 overflow-hidden">
      
      {/* =========================================================
          DYNAMIC EXECUTIVE PATTERNED BACKGROUND
          Deep navy-slate background with vibrant geometric mesh,
          sketchy isometric blueprint grid & subtle glowing halos
      ========================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* Modern Geometric Isometric Blueprint Pattern */}
        <svg className="w-full h-full opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="iso-blueprint-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 60 M 0 0 L 60 60" fill="none" stroke="#38BDF8" strokeWidth="0.8" />
              <rect x="29" y="29" width="2" height="2" fill="#10B981" />
              <circle cx="60" cy="0" r="1.5" fill="#38BDF8" />
              <circle cx="0" cy="60" r="1.5" fill="#38BDF8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#iso-blueprint-grid)" />
        </svg>

        {/* Diagonal Sketch Hatch Lines */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #FFFFFF 0, #FFFFFF 1px, transparent 0, transparent 40px)'
          }}
        />

        {/* Ambient Vibrant Glowing Light Cones */}
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/25 to-teal-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-gradient-to-bl from-sky-500/25 to-indigo-600/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-gradient-to-tr from-violet-600/20 to-purple-800/15 rounded-full blur-[140px]" />
      </div>

      {/* =========================================================
          HERO BANNER — BOLD EXECUTIVE REDESIGN
      ========================================================= */}
      <section className="relative z-10 pt-16 pb-16 lg:pt-24 lg:pb-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-5"
          >
            {/* Pill Eyebrow with Sketchy Accent */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-widest shadow-lg shadow-emerald-950/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Who We Are · Executive Governance</span>
            </div>

            {/* Bold Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Architects of Business{' '}
              <span className="relative inline-block bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                Transformation.
                {/* Sketchy Hand-drawn underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-400 overflow-visible" viewBox="0 0 200 10" fill="none">
                  <path d="M 2 7 Q 50 1 100 6 T 198 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Concise Supporting Message */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal pt-2">
              Meet the five domain specialists steering strategy, creative brand direction, digital technology, and high-performance execution at Vaidimi Consulting.
            </p>

            {/* Hand-written Sketch Tag in Caveat */}
            <div className="pt-2">
              <span className="font-sketch text-2xl lg:text-3xl text-amber-300 inline-block transform -rotate-1">
                "Direct partner-level engagement on every project."
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          LEADERSHIP TEAM CARDS — BOLD, POPPING, COMPACT UI
      ========================================================= */}
      <section className="relative z-10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Section Subheader */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 block mb-1">
                Core Practice Directors
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                5 Specialists · One Mission
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-700/80 self-start md:self-auto">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Senior Partner Accountability</span>
            </div>
          </div>

          {/* ── BENTO-STYLE EXECUTIVE GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEADERS.map((leader, i) => {
              const Avatar = leader.avatar;
              // Make 4th and 5th cards center on large screens if desired
              const isCenteredBottom = i >= 3 ? 'lg:col-span-1' : '';

              return (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative group rounded-3xl bg-slate-800/90 border border-slate-700/90 shadow-xl transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl ${leader.shadowColor} ${leader.borderColor} flex flex-col overflow-hidden backdrop-blur-md ${isCenteredBottom}`}
                >
                  {/* Top Colorful Brand Stripe */}
                  <div className={`h-2 w-full bg-gradient-to-r ${leader.topStripe}`} />

                  {/* Card Body */}
                  <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    
                    {/* Top Row: Avatar & Dossier Number Badge */}
                    <div className="flex items-start justify-between">
                      {/* Stylized Profile Avatar in Glowing Circle */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-1 bg-slate-900/80 border border-slate-700 shadow-inner group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                        <Avatar />
                      </div>

                      {/* Dossier Stamp Badge */}
                      <div className="text-right">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block">
                          SPEC NO.
                        </span>
                        <span className="font-display text-3xl font-black text-slate-600 group-hover:text-slate-400 transition-colors">
                          {leader.number}
                        </span>
                      </div>
                    </div>

                    {/* Leader Identity */}
                    <div className="space-y-1.5">
                      <div className="inline-block">
                        <span 
                          className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border"
                          style={{
                            borderColor: `${leader.themeColor}55`,
                            color: leader.themeColor,
                            backgroundColor: `${leader.themeColor}15`
                          }}
                        >
                          Practice Head
                        </span>
                      </div>

                      <h3 className="font-display text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {leader.name}
                      </h3>

                      <p 
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: leader.themeColor }}
                      >
                        {leader.title}
                      </p>
                    </div>

                    {/* Short Concise Focus Statement */}
                    <p className="text-slate-300 text-sm leading-relaxed font-light">
                      {leader.focus}
                    </p>

                    {/* Skill Tags */}
                    <div className="pt-2 border-t border-slate-700/60">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Core Competencies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {leader.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/70 border border-slate-700/80 text-[11px] font-medium text-slate-200"
                          >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: leader.themeColor }} />
                            <span>{spec}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Card Bottom Accent Strip with Hand-Drawn Annotation */}
                  <div className="px-7 py-3 bg-slate-900/90 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-sketch text-sm text-slate-300">
                      Partner Oversight ✓
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                      Direct Advisory
                    </span>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          BOTTOM CALL-TO-ACTION SECTION
      ========================================================= */}
      <section className="relative z-10 py-16 lg:py-24 border-t border-slate-800 bg-slate-950/80">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ready for High-Impact Strategic Advisory?</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Engage Directly With Our Leadership Team
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Skip the generic account managers. Discuss your business transformation goals directly with our domain practice heads.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Schedule Executive Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/who-we-are"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-900/60 text-slate-300 hover:text-white text-sm font-semibold transition-all duration-300"
            >
              <span>Back to Who We Are</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
