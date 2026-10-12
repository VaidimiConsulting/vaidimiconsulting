import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PageBanner from '@/components/ui/PageBanner';
import {
  Paintbrush,
  Megaphone,
  Code2,
  Network,
  Sparkles,
  ArrowRight,
  Compass,
  Check,
  Shield,
  Layers,
  Cpu,
  Palette
} from 'lucide-react';

/* ============================================================
   CUSTOM SKETCHY SVG PROFILE ILLUSTRATIONS
   Each leader gets a vibrant, handcrafted domain artwork
   with sketchy outlines, hand-drawn marks, and rich colors
============================================================ */

function CreativeSketchIllustration() {
  return (
    <div className="relative w-full aspect-[4/3] max-w-[340px] mx-auto flex items-center justify-center p-4">
      {/* Hand-drawn sketch backdrop frame */}
      <svg className="absolute inset-0 w-full h-full text-emerald-100" viewBox="0 0 340 250" fill="none">
        <rect x="12" y="14" width="316" height="222" rx="18" fill="#ECFDF5" opacity="0.75" />
        <rect x="10" y="10" width="320" height="228" rx="20" stroke="#10B981" strokeWidth="2" strokeDasharray="8 6" strokeLinecap="round" />
        {/* Corner draft ticks */}
        <path d="M 6 24 L 28 24 M 20 6 L 20 28" stroke="#059669" strokeWidth="1.5" />
        <path d="M 314 24 L 334 24 M 320 6 L 320 28" stroke="#059669" strokeWidth="1.5" />
      </svg>

      {/* Main Creative Sketch Composition */}
      <svg className="relative z-10 w-full h-full max-h-[220px]" viewBox="0 0 280 200" fill="none">
        {/* Soft atmospheric gradient blob */}
        <circle cx="140" cy="100" r="70" fill="url(#creative-glow)" opacity="0.85" />
        
        {/* Artist Palette / Design Canvas */}
        <path 
          d="M 60 125 C 50 80, 100 45, 150 45 C 205 45, 235 80, 225 125 C 220 150, 195 165, 170 160 C 150 155, 140 140, 125 140 C 110 140, 100 155, 80 155 C 65 155, 62 140, 60 125 Z" 
          fill="#FFFFFF" 
          stroke="#0F766E" 
          strokeWidth="3.5" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Palette thumb hole */}
        <ellipse cx="90" cy="130" rx="9" ry="12" fill="#E6FFFA" stroke="#0F766E" strokeWidth="2.5" />

        {/* Vibrant Color Swatches */}
        <circle cx="100" cy="72" r="11" fill="#10B981" stroke="#065F46" strokeWidth="2" />
        <circle cx="138" cy="62" r="11" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
        <circle cx="178" cy="72" r="11" fill="#E11D48" stroke="#9F1239" strokeWidth="2" />
        <circle cx="198" cy="105" r="11" fill="#0EA5E9" stroke="#0369A1" strokeWidth="2" />
        <circle cx="178" cy="136" r="10" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="2" />

        {/* Sketch Paintbrush with golden ferrule and bristles */}
        <g transform="rotate(-36 140 100)">
          <path d="M 134 40 L 146 40 L 144 140 L 136 140 Z" fill="#78350F" stroke="#451A03" strokeWidth="2" />
          <rect x="133" y="140" width="14" height="22" rx="2" fill="#D97706" stroke="#92400E" strokeWidth="2" />
          <path d="M 133 162 C 133 175, 140 185, 140 185 C 140 185, 147 175, 147 162 Z" fill="#10B981" stroke="#047857" strokeWidth="2" />
          {/* Fresh color drip */}
          <circle cx="140" cy="192" r="3.5" fill="#10B981" />
        </g>

        {/* Hand-drawn Golden Ratio Spiral doodle */}
        <path 
          d="M 40 55 Q 55 35 80 40 T 95 65" 
          stroke="#10B981" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeDasharray="4 3" 
        />
        
        {/* Hand-drawn sparkle stars */}
        <path d="M 235 45 L 238 55 L 248 58 L 238 61 L 235 71 L 232 61 L 222 58 L 232 55 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
        <path d="M 45 160 L 47 167 L 54 169 L 47 171 L 45 178 L 43 171 L 36 169 L 43 167 Z" fill="#34D399" />

        {/* Gradients */}
        <defs>
          <radialGradient id="creative-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ECFDF5" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function MarketingSketchIllustration() {
  return (
    <div className="relative w-full aspect-[4/3] max-w-[340px] mx-auto flex items-center justify-center p-4">
      {/* Hand-drawn sketch backdrop frame */}
      <svg className="absolute inset-0 w-full h-full text-sky-100" viewBox="0 0 340 250" fill="none">
        <rect x="12" y="14" width="316" height="222" rx="18" fill="#F0F9FF" opacity="0.75" />
        <rect x="10" y="10" width="320" height="228" rx="20" stroke="#0284C7" strokeWidth="2" strokeDasharray="8 6" strokeLinecap="round" />
        <path d="M 6 24 L 28 24 M 20 6 L 20 28" stroke="#0284C7" strokeWidth="1.5" />
        <path d="M 314 24 L 334 24 M 320 6 L 320 28" stroke="#0284C7" strokeWidth="1.5" />
      </svg>

      <svg className="relative z-10 w-full h-full max-h-[220px]" viewBox="0 0 280 200" fill="none">
        {/* Megaphone Body */}
        <g transform="translate(10, 10)">
          {/* Sound waves emitted */}
          <path d="M 185 85 C 205 70, 205 110, 185 95" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
          <path d="M 205 75 C 230 55, 230 125, 205 105" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
          <path d="M 225 65 C 255 40, 255 140, 225 115" stroke="#0369A1" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 4" />

          {/* Megaphone cone */}
          <path d="M 90 80 L 165 45 L 175 135 L 90 100 Z" fill="#0284C7" stroke="#0369A1" strokeWidth="3.5" strokeLinejoin="round" />
          
          {/* Bell rim */}
          <ellipse cx="172" cy="90" rx="9" ry="45" fill="#38BDF8" stroke="#0369A1" strokeWidth="3.5" />
          
          {/* Back housing */}
          <rect x="60" y="78" width="32" height="24" rx="6" fill="#F59E0B" stroke="#B45309" strokeWidth="3" />
          
          {/* Handle */}
          <path d="M 75 102 L 72 142 L 86 142 L 87 102" fill="#E2E8F0" stroke="#475569" strokeWidth="3" strokeLinejoin="round" />

          {/* Upward Growth Trend Chart line coming out */}
          <path d="M 40 160 L 95 135 L 140 145 L 210 70" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <polygon points="210,65 215,80 200,75" fill="#10B981" />

          {/* Growth Data Points */}
          <circle cx="95" cy="135" r="5" fill="#FFFFFF" stroke="#10B981" strokeWidth="3" />
          <circle cx="140" cy="145" r="5" fill="#FFFFFF" stroke="#10B981" strokeWidth="3" />
          <circle cx="210" cy="70" r="6" fill="#10B981" stroke="#065F46" strokeWidth="2" />
        </g>

        {/* Hand-sketched target / bullseye doodle */}
        <circle cx="50" cy="45" r="22" stroke="#F43F5E" strokeWidth="2" strokeDasharray="4 3" fill="#FFE4E6" opacity="0.6" />
        <circle cx="50" cy="45" r="14" stroke="#F43F5E" strokeWidth="2" fill="#FECDD3" />
        <circle cx="50" cy="45" r="6" fill="#E11D48" />

        {/* Hand-drawn curly arrow */}
        <path d="M 50 165 Q 90 185 135 175" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
      </svg>
    </div>
  );
}

function SoftwareSketchIllustration() {
  return (
    <div className="relative w-full aspect-[4/3] max-w-[340px] mx-auto flex items-center justify-center p-4">
      {/* Hand-drawn sketch backdrop frame */}
      <svg className="absolute inset-0 w-full h-full text-violet-100" viewBox="0 0 340 250" fill="none">
        <rect x="12" y="14" width="316" height="222" rx="18" fill="#F5F3FF" opacity="0.75" />
        <rect x="10" y="10" width="320" height="228" rx="20" stroke="#7C3AED" strokeWidth="2" strokeDasharray="8 6" strokeLinecap="round" />
        <path d="M 6 24 L 28 24 M 20 6 L 20 28" stroke="#7C3AED" strokeWidth="1.5" />
        <path d="M 314 24 L 334 24 M 320 6 L 320 28" stroke="#7C3AED" strokeWidth="1.5" />
      </svg>

      <svg className="relative z-10 w-full h-full max-h-[220px]" viewBox="0 0 280 200" fill="none">
        {/* Code Terminal Window */}
        <rect x="40" y="35" width="200" height="130" rx="14" fill="#1E1B4B" stroke="#4338CA" strokeWidth="3" />
        
        {/* Terminal Title Bar */}
        <path d="M 40 57 L 240 57" stroke="#312E81" strokeWidth="2" />
        <circle cx="56" cy="46" r="4.5" fill="#EF4444" />
        <circle cx="70" cy="46" r="4.5" fill="#F59E0B" />
        <circle cx="84" cy="46" r="4.5" fill="#10B981" />
        
        {/* Terminal title sketch */}
        <text x="110" y="50" fill="#A5B4FC" fontSize="9" fontFamily="monospace" fontWeight="bold">architecture.ts</text>

        {/* Code Line Sketches */}
        <path d="M 58 75 L 85 75" stroke="#C084FC" strokeWidth="4" strokeLinecap="round" />
        <path d="M 95 75 L 140 75" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
        
        <path d="M 70 92 L 120 92" stroke="#34D399" strokeWidth="4" strokeLinecap="round" />
        <path d="M 130 92 L 175 92" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />

        <path d="M 70 109 L 105 109" stroke="#F472B6" strokeWidth="4" strokeLinecap="round" />
        <path d="M 115 109 L 185 109" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />

        <path d="M 58 126 L 100 126" stroke="#C084FC" strokeWidth="4" strokeLinecap="round" />
        {/* Terminal Cursor blinking sketch */}
        <rect x="106" y="121" width="7" height="11" fill="#38BDF8" />

        {/* Large Playful Overlaid < / > Curly Code Badge */}
        <g transform="translate(180, 105)">
          <circle cx="35" cy="35" r="32" fill="#7C3AED" stroke="#4C1D95" strokeWidth="3" />
          <path d="M 23 35 L 29 27 M 23 35 L 29 43" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 47 35 L 41 27 M 47 35 L 41 43" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 37 25 L 33 45" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Modular System Interlocking blocks doodle */}
        <rect x="22" y="125" width="28" height="28" rx="6" fill="#F59E0B" stroke="#92400E" strokeWidth="2.5" />
        <path d="M 36 125 L 36 120 M 50 139 L 55 139" stroke="#92400E" strokeWidth="2.5" />

        {/* Binary sparks doodle */}
        <text x="25" y="85" fill="#818CF8" fontSize="12" fontFamily="monospace">01</text>
        <text x="225" y="40" fill="#34D399" fontSize="12" fontFamily="monospace">10</text>
      </svg>
    </div>
  );
}

function DesignDevSketchIllustration() {
  return (
    <div className="relative w-full aspect-[4/3] max-w-[340px] mx-auto flex items-center justify-center p-4">
      {/* Hand-drawn sketch backdrop frame */}
      <svg className="absolute inset-0 w-full h-full text-rose-100" viewBox="0 0 340 250" fill="none">
        <rect x="12" y="14" width="316" height="222" rx="18" fill="#FFF1F2" opacity="0.75" />
        <rect x="10" y="10" width="320" height="228" rx="20" stroke="#E11D48" strokeWidth="2" strokeDasharray="8 6" strokeLinecap="round" />
        <path d="M 6 24 L 28 24 M 20 6 L 20 28" stroke="#E11D48" strokeWidth="1.5" />
        <path d="M 314 24 L 334 24 M 320 6 L 320 28" stroke="#E11D48" strokeWidth="1.5" />
      </svg>

      <svg className="relative z-10 w-full h-full max-h-[220px]" viewBox="0 0 280 200" fill="none">
        {/* Layered UI Browser Wireframe Canvas */}
        <g transform="translate(15, 15)">
          <rect x="35" y="25" width="165" height="115" rx="12" fill="#FFFFFF" stroke="#E11D48" strokeWidth="3" />
          
          {/* Top header bar */}
          <path d="M 35 48 L 200 48" stroke="#F43F5E" strokeWidth="2" strokeDasharray="4 2" />
          <rect x="45" y="34" width="25" height="7" rx="3" fill="#E11D48" />
          <circle cx="185" cy="37" r="3.5" fill="#FB7185" />
          <circle cx="175" cy="37" r="3.5" fill="#FB7185" />

          {/* Left sidebar & hero card */}
          <rect x="45" y="58" width="30" height="68" rx="5" fill="#FFE4E6" stroke="#FDA4AF" strokeWidth="1.5" />
          <rect x="85" y="58" width="105" height="38" rx="6" fill="#F43F5E" />
          {/* Card button sketch */}
          <rect x="95" y="77" width="28" height="10" rx="3" fill="#FFFFFF" />

          {/* Two small metric cards */}
          <rect x="85" y="104" width="48" height="22" rx="5" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.5" />
          <rect x="142" y="104" width="48" height="22" rx="5" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5" />
        </g>

        {/* Mobile Device Overlay sketch */}
        <g transform="translate(185, 80)">
          <rect x="10" y="10" width="55" height="95" rx="10" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <rect x="15" y="20" width="45" height="72" rx="4" fill="#FFFFFF" />
          <circle cx="37" cy="15" r="2" fill="#94A3B8" />
          <rect x="20" y="26" width="35" height="18" rx="3" fill="#F43F5E" />
          <rect x="20" y="48" width="35" height="6" rx="2" fill="#CBD5E1" />
          <rect x="20" y="58" width="25" height="6" rx="2" fill="#CBD5E1" />
        </g>

        {/* Vector Bezier Pen Node / Handle Sketch */}
        <g transform="translate(35, 130)">
          <circle cx="20" cy="20" r="6" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" />
          <line x1="5" y1="20" x2="35" y2="20" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3 3" />
          <rect x="2" y="17" width="6" height="6" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.5" />
          <rect x="32" y="17" width="6" height="6" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.5" />
        </g>

        {/* Sparkles doodle */}
        <path d="M 60 25 L 63 33 L 71 36 L 63 39 L 60 47 L 57 39 L 49 36 L 57 33 Z" fill="#F59E0B" />
        <path d="M 230 45 L 232 50 L 237 52 L 232 54 L 230 59 L 228 54 L 223 52 L 228 50 Z" fill="#E11D48" />
      </svg>
    </div>
  );
}

function NetworkingSketchIllustration() {
  return (
    <div className="relative w-full aspect-[4/3] max-w-[340px] mx-auto flex items-center justify-center p-4">
      {/* Hand-drawn sketch backdrop frame */}
      <svg className="absolute inset-0 w-full h-full text-amber-100" viewBox="0 0 340 250" fill="none">
        <rect x="12" y="14" width="316" height="222" rx="18" fill="#FFFBEB" opacity="0.75" />
        <rect x="10" y="10" width="320" height="228" rx="20" stroke="#D97706" strokeWidth="2" strokeDasharray="8 6" strokeLinecap="round" />
        <path d="M 6 24 L 28 24 M 20 6 L 20 28" stroke="#D97706" strokeWidth="1.5" />
        <path d="M 314 24 L 334 24 M 320 6 L 320 28" stroke="#D97706" strokeWidth="1.5" />
      </svg>

      <svg className="relative z-10 w-full h-full max-h-[220px]" viewBox="0 0 280 200" fill="none">
        {/* Central Server Rack Tower */}
        <g transform="translate(100, 45)">
          <rect x="15" y="10" width="55" height="105" rx="8" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          
          {/* Server Unit 1 */}
          <rect x="22" y="18" width="41" height="22" rx="4" fill="#334155" stroke="#475569" strokeWidth="1.5" />
          <circle cx="28" cy="29" r="2.5" fill="#10B981" />
          <circle cx="36" cy="29" r="2.5" fill="#10B981" />
          <line x1="45" y1="29" x2="57" y2="29" stroke="#0EA5E9" strokeWidth="2" />

          {/* Server Unit 2 */}
          <rect x="22" y="47" width="41" height="22" rx="4" fill="#334155" stroke="#475569" strokeWidth="1.5" />
          <circle cx="28" cy="58" r="2.5" fill="#10B981" />
          <circle cx="36" cy="58" r="2.5" fill="#F59E0B" />
          <line x1="45" y1="58" x2="57" y2="58" stroke="#0EA5E9" strokeWidth="2" />

          {/* Server Unit 3 */}
          <rect x="22" y="76" width="41" height="22" rx="4" fill="#334155" stroke="#475569" strokeWidth="1.5" />
          <circle cx="28" cy="87" r="2.5" fill="#10B981" />
          <circle cx="36" cy="87" r="2.5" fill="#10B981" />
          <line x1="45" y1="87" x2="57" y2="87" stroke="#10B981" strokeWidth="2" />
        </g>

        {/* Global Network Nodes & Fiber Connection lines */}
        {/* Node 1 Left */}
        <circle cx="45" cy="70" r="16" fill="#FEF3C7" stroke="#D97706" strokeWidth="3" />
        <path d="M 45 62 L 45 78 M 37 70 L 53 70" stroke="#B45309" strokeWidth="2" />
        <path d="M 61 70 L 115 65" stroke="#D97706" strokeWidth="3" strokeDasharray="4 3" />

        {/* Node 2 Bottom Left */}
        <circle cx="55" cy="145" r="14" fill="#E0F2FE" stroke="#0284C7" strokeWidth="3" />
        <circle cx="55" cy="145" r="5" fill="#0284C7" />
        <path d="M 69 140 L 115 125" stroke="#0284C7" strokeWidth="3" />

        {/* Node 3 Right Top */}
        <circle cx="230" cy="65" r="18" fill="#ECFDF5" stroke="#059669" strokeWidth="3" />
        <path d="M 224 65 L 228 69 L 237 60" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 170 65 L 212 65" stroke="#059669" strokeWidth="3" strokeDasharray="4 3" />

        {/* Node 4 Right Bottom - Cloud Hub */}
        <circle cx="225" cy="140" r="15" fill="#F1F5F9" stroke="#475569" strokeWidth="3" />
        <path d="M 170 115 L 210 135" stroke="#475569" strokeWidth="3" />

        {/* Security Shield Badge */}
        <g transform="translate(130, 142)">
          <path d="M 15 5 L 30 11 L 30 24 C 30 33, 15 40, 15 40 C 15 40, 0 33, 0 24 L 0 11 Z" fill="#F59E0B" stroke="#92400E" strokeWidth="2" />
          <path d="M 8 20 L 13 25 L 22 15" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

// ============================================================
// LEADERS DATA WITH PROFILE-SPECIFIC ILLUSTRATIONS & SKETCHES
// ============================================================
const LEADERS = [
  {
    name: 'Gargi Singh',
    title: 'Director · Creative Head',
    bio: 'Leads the firm with a creative vision that bridges brand identity and business strategy. Brings a sharp design sensibility, executive leadership, and deep aesthetic governance to every client engagement.',
    quote: 'Brand is not merely what you say — it is the emotional anchor of enterprise valuation.',
    specialties: ['Brand Identity', 'Creative Direction', 'Strategic Aesthetics', 'Executive Governance'],
    icon: Paintbrush,
    illustration: CreativeSketchIllustration,
    accent: '#10B981',
    accentBorder: 'border-emerald-300',
    accentLight: 'bg-emerald-500/10',
    accentBadge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    tag: 'Creative Leadership',
    number: '01',
    sketchArrowColor: '#10B981',
    tapeColor: 'bg-emerald-200/90'
  },
  {
    name: 'Mayank Pandey',
    title: 'Marketing Head · Lead Consultant',
    bio: 'Drives end-to-end commercial growth systems and strategic marketing consulting across industries. Specialises in building compounding acquisition engines that link brand positioning with high-conversion revenue funnels.',
    quote: 'Rigorous systems turn sporadic advertising campaigns into predictable revenue engines.',
    specialties: ['Growth Architecture', 'Demand Generation', 'Market Penetration', 'Conversion Analytics'],
    icon: Megaphone,
    illustration: MarketingSketchIllustration,
    accent: '#0284C7',
    accentBorder: 'border-sky-300',
    accentLight: 'bg-sky-500/10',
    accentBadge: 'bg-sky-100 text-sky-800 border-sky-300',
    tag: 'Commercial Growth',
    number: '02',
    sketchArrowColor: '#0284C7',
    tapeColor: 'bg-sky-200/90'
  },
  {
    name: 'Madhu Prajapati',
    title: 'Team Lead · Software Consultant',
    bio: 'Heads software engineering, technology consulting, and enterprise digital solutions. Specialises in translating intricate business requirements into resilient, high-speed architectures that scale effortlessly.',
    quote: 'Disciplined software architecture today eliminates hundreds of operational bottlenecks tomorrow.',
    specialties: ['Enterprise Architecture', 'Full-Stack Systems', 'Cloud Solutions', 'Delivery Leadership'],
    icon: Code2,
    illustration: SoftwareSketchIllustration,
    accent: '#7C3AED',
    accentBorder: 'border-violet-300',
    accentLight: 'bg-violet-500/10',
    accentBadge: 'bg-violet-100 text-violet-800 border-violet-300',
    tag: 'Technology & Systems',
    number: '03',
    sketchArrowColor: '#7C3AED',
    tapeColor: 'bg-violet-200/90'
  },
  {
    name: 'Varsha Srivastava',
    title: 'Developer · Design Consultant',
    bio: "Builds and crafts interactive web products with a designer's empathy and an engineer's meticulous precision. Specialises in delivering digital experiences that balance visual sophistication with peak performance.",
    quote: 'Where thoughtful UI ergonomics meets pixel-perfect, lightning-fast web engineering.',
    specialties: ['Product UI/UX', 'Component Systems', 'Frontend Engineering', 'Interaction Craft'],
    icon: Sparkles,
    illustration: DesignDevSketchIllustration,
    accent: '#E11D48',
    accentBorder: 'border-rose-300',
    accentLight: 'bg-rose-500/10',
    accentBadge: 'bg-rose-100 text-rose-800 border-rose-300',
    tag: 'Design & Engineering',
    number: '04',
    sketchArrowColor: '#E11D48',
    tapeColor: 'bg-rose-200/90'
  },
  {
    name: 'Vipin Kumar',
    title: 'IT Networking Consultant · Technical Head',
    bio: 'Oversees foundational IT networking, enterprise cybersecurity, server topologies, and mission-critical cloud infrastructure. Ensures modern enterprises operate on secure, scalable, and zero-compromise foundations.',
    quote: 'Resilient infrastructure should be invisible until it matters most. 99.99% reliability is our baseline.',
    specialties: ['Network Security', 'Server Topologies', 'Cloud Resilience', 'Infrastructure Operations'],
    icon: Network,
    illustration: NetworkingSketchIllustration,
    accent: '#D97706',
    accentBorder: 'border-amber-300',
    accentLight: 'bg-amber-500/10',
    accentBadge: 'bg-amber-100 text-amber-800 border-amber-300',
    tag: 'Core Infrastructure',
    number: '05',
    sketchArrowColor: '#D97706',
    tapeColor: 'bg-amber-200/90'
  },
];

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function LeadershipTeam() {
  return (
    <div className="relative bg-[#FAFAFA] overflow-hidden min-h-screen">
      
      {/* =========================================================
          BACKGROUND SKETCH & BLUEPRINT PATTERN
          Architectural grid, drafting lines & subtle pencil texture
      ========================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle Graph Paper Grid Pattern */}
        <svg className="w-full h-full opacity-[0.4]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#CBD5E1" strokeWidth="0.75" strokeDasharray="3 3" />
            </pattern>
            <pattern id="blueprint-dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.75" fill="#94A3B8" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
          <rect width="100%" height="100%" fill="url(#blueprint-dots)" />
        </svg>

        {/* Ambient Watercolor Glowing Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-20 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl" />
      </div>

      {/* Top Banner */}
      <PageBanner
        eyebrow="Who We Are / Leadership Team"
        title="The people setting the standard"
        description="A multidisciplinary team of domain specialists — fusing creative vision, digital systems, growth marketing, and robust infrastructure."
        accent="accent-sage"
        crumbs={[{ label: 'Who We Are', to: '/who-we-are' }, { label: 'Leadership Team' }]}
      />

      {/* ── Intro Strip with Sketchy Accents ── */}
      <section className="relative py-14 lg:py-20 border-b border-slate-200/80 bg-white/70 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Sketch Pill Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border-2 border-emerald-400 text-[#1A4D3E] text-xs font-bold uppercase tracking-wider shadow-sm mb-6">
              <Compass className="w-4 h-4 text-emerald-600 animate-spin-slow" />
              <span>Executive Practice Directors</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Five Specialists.{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#173F69] via-[#1A4D3E] to-[#10B981]">
                One Unified Direction.
                {/* Hand-drawn sketchy underline */}
                <svg className="absolute -bottom-3 left-0 w-full h-4 text-emerald-500 overflow-visible" viewBox="0 0 200 12" fill="none">
                  <path d="M 2 8 Q 50 1 100 7 T 198 4" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="mt-6 text-slate-600 text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
              Vaidimi's leadership represents a deliberate synthesis of creative direction, commercial growth, digital engineering, and enterprise infrastructure — purposefully structured to guide modern enterprises through high-stakes growth.
            </p>

            {/* Hand-written marginal note in Caveat font */}
            <div className="mt-5 inline-flex items-center gap-3">
              <span className="font-sketch text-2xl lg:text-3xl text-emerald-800 -rotate-2 block">
                "Direct partner-led counsel on every engagement."
              </span>
              <svg className="w-8 h-8 text-amber-500 -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" fill="#FEF3C7" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEADER PROFILES — SKETCHY DOSSIER CARDS ── */}
      <section className="relative py-16 lg:py-24 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16 lg:space-y-24">
          {LEADERS.map((leader, i) => {
            const Icon = leader.icon;
            const Illustration = leader.illustration;
            const isEven = i % 2 === 1;

            return (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.05 }}
                className="relative group"
              >
                {/* ===================================================
                    SKETCHY DOSSIER CARD CONTAINER
                =================================================== */}
                <div className="relative rounded-[2rem] bg-white border-2 border-slate-300/90 shadow-[0_15px_45px_rgba(15,23,42,0.08)] p-7 sm:p-10 lg:p-14 overflow-hidden transition-all duration-300 hover:shadow-[0_25px_60px_rgba(15,23,42,0.14)] hover:border-slate-400">
                  
                  {/* Washi-Tape / Sticky Tab Effect at Top Center */}
                  <div className={`absolute -top-3.5 left-12 sm:left-16 w-32 h-8 ${leader.tapeColor} border border-slate-400/40 rounded-sm transform -rotate-2 shadow-sm pointer-events-none opacity-90 z-20`} />

                  {/* Faint Background Watermark Number */}
                  <div className="absolute right-4 bottom-2 font-display text-[9rem] sm:text-[12rem] font-black text-slate-100/70 select-none pointer-events-none -z-0 leading-none">
                    {leader.number}
                  </div>

                  <div className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10 ${
                    isEven ? 'lg:grid-flow-dense' : ''
                  }`}>
                    
                    {/* Illustration Column */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:col-start-8' : ''}`}>
                      <div className="relative">
                        {/* Domain Colorful Illustration */}
                        <Illustration />
                        
                        {/* Hand-drawn caption under artwork */}
                        <div className="text-center mt-3">
                          <span className="font-sketch text-lg text-slate-500 tracking-wide">
                            Figure {leader.number} · {leader.tag}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:col-start-1' : ''}`}>
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${leader.accentBadge} shadow-xs`}>
                          <Icon className="w-3.5 h-3.5" />
                          <span>{leader.tag}</span>
                        </span>
                        
                        <span className="text-xs font-semibold text-slate-400 bg-slate-100/80 px-3 py-1 rounded-full border border-slate-200">
                          Practice Specialist #{leader.number}
                        </span>
                      </div>

                      {/* Leader Name & Title */}
                      <div>
                        <h3 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-slate-900 tracking-tight leading-tight">
                          {leader.name}
                        </h3>

                        <div className="mt-2 inline-flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: leader.accent }} />
                          <p 
                            className="text-sm sm:text-base font-bold uppercase tracking-wider"
                            style={{ color: leader.accent }}
                          >
                            {leader.title}
                          </p>
                        </div>
                      </div>

                      {/* Professional Bio */}
                      <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                        {leader.bio}
                      </p>

                      {/* Handwritten Quotation Banner with Hand-Drawn Bubble */}
                      <div className="relative p-5 sm:p-6 rounded-2xl bg-slate-50/90 border-2 border-dashed border-slate-300">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl font-serif text-slate-400 leading-none select-none">“</span>
                          <p className="font-sketch text-xl sm:text-2xl text-slate-800 leading-snug">
                            {leader.quote}
                          </p>
                        </div>
                        {/* Little corner tape mark */}
                        <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-wider rounded border border-amber-300 -rotate-3">
                          Field Principle
                        </span>
                      </div>

                      {/* Profile Specialty Pills */}
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                          Core Advisory Competencies:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {leader.specialties.map((item) => (
                            <span 
                              key={item}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs hover:border-slate-400 transition-colors"
                            >
                              <Check className="w-3.5 h-3.5" style={{ color: leader.accent }} />
                              <span>{item}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── BOTTOM CTA SECTION WITH HAND-DRAWN SKETCH HIGHLIGHT ── */}
      <section className="relative py-20 lg:py-28 bg-[#16241D] text-white overflow-hidden z-10">
        {/* Sketch Watermark */}
        <div className="sketch-watermark" />

        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Engagement with Practice Directors</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to work alongside this team?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              We welcome exploratory conversations with growing enterprises ready to execute their next strategic leap.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-900/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Initiate Executive Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                to="/careers"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/20 hover:border-white/40 text-white font-semibold text-sm sm:text-base hover:bg-white/5 transition-all duration-300"
              >
                <span>Explore Careers at Vaidimi</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
