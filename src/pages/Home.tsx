import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Building2,
  Tractor,
  Truck,
  Store,
  Landmark,
  TrendingUp,
  ShieldCheck,
  Zap,
  Target,
  Users2,
  PhoneCall,
  BarChart3,
  Globe2,
  Lightbulb,
  Layers3,
  CircleDot,
  MoveUpRight,
  Box,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  MapPin,
  Factory,
  ShoppingCart,
} from 'lucide-react';

import { Button } from '@/components/ui/Button';
import HomeHighlightModal from '@/components/ui/HomeHighlightModal';
import { services } from '@/data/services';

/* =========================================================
   ANIMATION PRESETS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  show: {
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
    x: 35,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

/* =========================================================
   STATS
========================================================= */

const STATS = [
  {
    value: '120+',
    label: 'Enterprises Guided',
    description: 'Across North & Central India',
  },
  {
    value: '15+',
    label: 'Years of Experience',
    description: 'Senior advisory leadership',
  },
  {
    value: '98%',
    label: 'Client Retention',
    description: 'Long-term relationships',
  },
  {
    value: '₹500Cr+',
    label: 'Value Unlocked',
    description: 'Operational & market growth',
  },
];

/* =========================================================
   PROCESS STEPS
========================================================= */

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    description:
      'Understand the business, identify constraints and uncover the highest-value opportunities.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Build a focused roadmap connecting strategy, technology, operations and commercial priorities.',
  },
  {
    step: '03',
    title: 'Execute',
    description:
      'Work alongside your team to implement systems, improve processes and accelerate execution.',
  },
  {
    step: '04',
    title: 'Scale',
    description:
      'Create repeatable systems, dashboards and capabilities that support sustainable growth.',
  },
];

/* =========================================================
   GROWTH PILLARS
========================================================= */

const GROWTH_PILLARS = [
  {
    icon: Lightbulb,
    title: 'Strategy',
    description:
      'Sharper decisions, stronger positioning and a clear growth roadmap.',
  },
  {
    icon: Layers3,
    title: 'Technology',
    description:
      'Digital systems that simplify operations and enable scale.',
  },
  {
    icon: BarChart3,
    title: 'Performance',
    description:
      'Metrics, processes and commercial levers that improve results.',
  },
];

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className={
        align === 'center'
          ? 'mx-auto max-w-3xl text-center'
          : 'max-w-3xl'
      }
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-700">
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
        {eyebrow}
      </span>

      <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-4xl lg:text-[3.15rem]">
        {title}
      </h2>

      <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    </motion.div>
  );
}

/* =========================================================
   COLORFUL SVG SERVICE ILLUSTRATIONS FOR WHAT WE DO
========================================================= */

function MarketingIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="h-full w-full">
      <circle cx="140" cy="80" r="60" fill="#FFE4E6" opacity="0.6" />
      <circle cx="210" cy="40" r="25" fill="#FECDD3" opacity="0.5" />
      <circle cx="70" cy="90" r="35" stroke="#F43F5E" strokeWidth="3" strokeDasharray="6 4" fill="#FFF1F2" />
      <circle cx="70" cy="90" r="22" fill="#F43F5E" />
      <circle cx="70" cy="90" r="10" fill="#FFFFFF" />
      <circle cx="70" cy="90" r="4" fill="#F43F5E" />
      <path d="M 120 70 L 160 50 L 160 110 L 120 90 Z" fill="#FB7185" stroke="#E11D48" strokeWidth="2" />
      <rect x="105" y="70" width="15" height="20" rx="3" fill="#E11D48" />
      <path d="M 125 90 L 120 115 L 132 115 L 135 90 Z" fill="#9F1239" />
      <path d="M 175 60 C 190 65, 190 95, 175 100" stroke="#F43F5E" strokeWidth="3" strokeLinecap="round" />
      <path d="M 190 50 C 215 60, 215 100, 190 110" stroke="#FB7185" strokeWidth="3" strokeLinecap="round" />
      <path d="M 230 75 L 245 45 L 235 60 Z" fill="#F43F5E" />
      <circle cx="225" cy="110" r="5" fill="#E11D48" />
    </svg>
  );
}

function ITIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="h-full w-full">
      <circle cx="140" cy="80" r="65" fill="#DBEAFE" opacity="0.6" />
      <rect x="50" y="40" width="140" height="95" rx="10" fill="#1E293B" stroke="#3B82F6" strokeWidth="2" />
      <circle cx="65" cy="52" r="3.5" fill="#EF4444" />
      <circle cx="76" cy="52" r="3.5" fill="#F59E0B" />
      <circle cx="87" cy="52" r="3.5" fill="#10B981" />
      <rect x="65" y="68" width="40" height="5" rx="2" fill="#60A5FA" />
      <rect x="110" y="68" width="55" height="5" rx="2" fill="#34D399" />
      <rect x="75" y="82" width="70" height="5" rx="2" fill="#F472B6" />
      <rect x="75" y="96" width="45" height="5" rx="2" fill="#FBBF24" />
      <rect x="65" y="110" width="50" height="5" rx="2" fill="#60A5FA" />
      <g transform="translate(160, 30)">
        <path d="M 20 40 A 20 20 0 0 1 55 30 A 25 25 0 0 1 95 40 A 15 15 0 0 1 90 70 L 20 70 A 15 15 0 0 1 20 40 Z" fill="#3B82F6" />
        <path d="M 45 48 L 55 38 L 65 48 M 55 38 L 55 58" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function PromotionIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="h-full w-full">
      <circle cx="140" cy="80" r="60" fill="#FEF3C7" opacity="0.6" />
      <rect x="60" y="30" width="130" height="85" rx="8" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="3" />
      <rect x="68" y="38" width="114" height="69" rx="4" fill="#FFFBEB" />
      <path d="M 80 85 L 105 60 L 130 75 L 160 45" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="160" cy="45" r="5" fill="#D97706" />
      <rect x="80" y="48" width="35" height="6" rx="3" fill="#FBBF24" />
      <path d="M 95 115 L 90 145 M 155 115 L 160 145" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
      <circle cx="215" cy="70" r="18" stroke="#F59E0B" strokeWidth="2.5" strokeDasharray="4 4" />
      <circle cx="215" cy="70" r="30" stroke="#FBBF24" strokeWidth="2" strokeDasharray="5 5" />
    </svg>
  );
}

function HRIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="h-full w-full">
      <circle cx="140" cy="80" r="60" fill="#D1FAE5" opacity="0.6" />
      <circle cx="140" cy="70" r="28" fill="#10B981" />
      <path d="M 128 65 L 136 73 L 153 56" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="70" cy="95" r="18" fill="#059669" />
      <circle cx="70" cy="90" r="7" fill="#FFFFFF" />
      <path d="M 57 107 C 57 100, 63 97, 70 97 C 77 97, 83 100, 83 107 Z" fill="#FFFFFF" />
      <circle cx="210" cy="95" r="18" fill="#34D399" />
      <circle cx="210" cy="90" r="7" fill="#FFFFFF" />
      <path d="M 197 107 C 197 100, 203 97, 210 97 C 217 97, 223 100, 223 107 Z" fill="#FFFFFF" />
      <path d="M 88 95 L 112 78 M 168 78 L 192 95" stroke="#10B981" strokeWidth="2.5" strokeDasharray="3 3" />
    </svg>
  );
}

function FinanceIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="h-full w-full">
      <circle cx="140" cy="80" r="60" fill="#CCFBF1" opacity="0.6" />
      <rect x="65" y="90" width="20" height="40" rx="4" fill="#14B8A6" />
      <rect x="95" y="70" width="20" height="60" rx="4" fill="#0D9488" />
      <rect x="125" y="45" width="20" height="85" rx="4" fill="#0F766E" />
      <path d="M 60 85 L 90 65 L 120 40 L 170 20" stroke="#0D9488" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 155 20 L 170 20 L 170 35" stroke="#0D9488" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="205" cy="85" r="22" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
      <circle cx="205" cy="85" r="16" stroke="#FBBF24" strokeWidth="2" fill="none" />
      <text x="200" y="91" fill="#FFFFFF" fontWeight="900" fontSize="16">₹</text>
    </svg>
  );
}

function EventIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="h-full w-full">
      <circle cx="140" cy="80" r="60" fill="#F3E8FF" opacity="0.6" />
      <path d="M 70 20 L 110 130 L 170 130 L 210 20 Z" fill="#C084FC" opacity="0.2" />
      <circle cx="140" cy="75" r="32" fill="#8B5CF6" />
      <path d="M 125 75 L 135 85 L 155 65" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="60" y="15" width="30" height="8" rx="3" fill="#6B21A8" />
      <rect x="190" y="15" width="30" height="8" rx="3" fill="#6B21A8" />
      <path d="M 75 23 L 110 80 M 205 23 L 170 80" stroke="#A855F7" strokeWidth="2" strokeDasharray="3 3" />
    </svg>
  );
}

/* =========================================================
   QUIRKY SVG ILLUSTRATIONS FOR ZIG ZAG ADVANTAGE SECTION
========================================================= */

function QuirkyThinkIllustration() {
  return (
    <svg viewBox="0 0 320 220" fill="none" className="h-full w-full">
      <circle cx="160" cy="110" r="85" fill="#EEF2FF" />
      <circle cx="250" cy="50" r="30" fill="#FEF3C7" opacity="0.8" />
      
      {/* Lightbulb Rocket */}
      <g transform="translate(110, 35)">
        <path d="M 50 15 C 25 15, 10 40, 10 65 C 10 85, 25 100, 35 110 L 35 125 L 65 125 L 65 110 C 75 100, 90 85, 90 65 C 90 40, 75 15, 50 15 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="3" />
        <rect x="35" y="125" width="30" height="8" rx="2" fill="#64748B" />
        <rect x="38" y="133" width="24" height="6" rx="2" fill="#475569" />
        <path d="M 50 40 L 53 53 L 65 55 L 55 63 L 58 75 L 50 67 L 42 75 L 45 63 L 35 55 L 47 53 Z" fill="#FFFFFF" />
      </g>

      {/* Orbiting Gears & Doodles */}
      <circle cx="65" cy="70" r="18" fill="#818CF8" stroke="#4F46E5" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="65" cy="70" r="8" fill="#FFFFFF" />

      <circle cx="255" cy="140" r="22" fill="#F472B6" stroke="#E11D48" strokeWidth="2" strokeDasharray="5 5" />
      <circle cx="255" cy="140" r="10" fill="#FFFFFF" />

      <path d="M 60 140 C 90 170, 220 170, 250 110" stroke="#6366F1" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
      <path d="M 242 108 L 250 110 L 248 120" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function QuirkyBuildIllustration() {
  return (
    <svg viewBox="0 0 320 220" fill="none" className="h-full w-full">
      <circle cx="160" cy="110" r="85" fill="#D1FAE5" opacity="0.7" />
      
      <rect x="50" y="45" width="160" height="110" rx="14" fill="#0F172A" stroke="#10B981" strokeWidth="3" />
      <circle cx="68" cy="60" r="4" fill="#EF4444" />
      <circle cx="80" cy="60" r="4" fill="#F59E0B" />
      <circle cx="92" cy="60" r="4" fill="#10B981" />
      
      <rect x="68" y="78" width="45" height="6" rx="3" fill="#34D399" />
      <rect x="120" y="78" width="65" height="6" rx="3" fill="#60A5FA" />
      <rect x="78" y="94" width="85" height="6" rx="3" fill="#F472B6" />
      <rect x="78" y="110" width="50" height="6" rx="3" fill="#FBBF24" />

      <g transform="translate(195, 30)">
        <path d="M 30 10 C 50 10, 60 40, 60 70 L 0 70 C 0 40, 10 10, 30 10 Z" fill="#10B981" />
        <circle cx="30" cy="40" r="10" fill="#FFFFFF" stroke="#047857" strokeWidth="2" />
        <path d="M 0 70 L -15 90 L 0 85 Z" fill="#047857" />
        <path d="M 60 70 L 75 90 L 60 85 Z" fill="#047857" />
        <path d="M 20 70 L 30 95 L 40 70 Z" fill="#F59E0B" />
      </g>

      <circle cx="45" cy="170" r="5" fill="#10B981" />
      <circle cx="270" cy="160" r="7" fill="#34D399" />
    </svg>
  );
}

function QuirkyGrowIllustration() {
  return (
    <svg viewBox="0 0 320 220" fill="none" className="h-full w-full">
      <circle cx="160" cy="110" r="85" fill="#FFE4E6" opacity="0.7" />

      <rect x="65" y="120" width="28" height="60" rx="6" fill="#F43F5E" />
      <rect x="105" y="90" width="28" height="90" rx="6" fill="#FB7185" />
      <rect x="145" y="60" width="28" height="120" rx="6" fill="#E11D48" />

      <g transform="translate(180, 25)">
        <line x1="20" y1="20" x2="20" y2="120" stroke="#9F1239" strokeWidth="4" strokeLinecap="round" />
        <path d="M 20 20 L 75 40 L 20 60 Z" fill="#F43F5E" />
        <circle cx="20" cy="15" r="6" fill="#FBBF24" />
      </g>

      <path d="M 255 60 L 260 75 L 275 80 L 260 85 L 255 100 L 250 85 L 235 80 L 250 75 Z" fill="#FBBF24" />
      <path d="M 45 60 L 48 70 L 58 73 L 48 76 L 45 86 L 42 76 L 32 73 L 42 70 Z" fill="#F43F5E" />
    </svg>
  );
}

/* =========================================================
   ZIG ZAG VAIDIMI ADVANTAGE SECTION
========================================================= */

function VaidimiAdvantageZigZag() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32 border-t border-slate-100">
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-indigo-50/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-rose-50/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="THE VAIDIMI ADVANTAGE"
          title="A Different Kind of Growth Relationship."
          description="Where strategy becomes active partnership, and partnership becomes measurable momentum."
          align="center"
        />

        <div className="mt-20 space-y-24">
          {/* STEP 1: THINK WITH YOU (Text Left, Quirky SVG Right) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-12 lg:grid-cols-12"
          >
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-1.5 text-xs font-bold text-indigo-700">
                01 / INSIGHT & STRATEGY
              </span>

              <h3 className="mt-4 font-display text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Think With You.
                <span className="block text-indigo-600">Senior perspective, zero jargon.</span>
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                We dive deep into your real business context to eliminate bottlenecks, sharpen positioning, and pinpoint your highest-leverage growth opportunities before spending a rupee on execution.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-slate-700">
                <span className="rounded-full bg-slate-100 px-3 py-1.5 border border-slate-200">✔ Executive Alignment</span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 border border-slate-200">✔ Bottleneck Analysis</span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 border border-slate-200">✔ Commercial Roadmap</span>
              </div>
            </div>

            <div className="relative lg:col-span-6">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-[32px] border border-indigo-100 bg-gradient-to-br from-indigo-50/80 via-white to-amber-50/50 p-8 shadow-[0_20px_60px_rgba(79,70,229,0.08)]"
              >
                <div className="h-[260px] w-full overflow-hidden rounded-2xl">
                  <img
                    src="/images/adantage1.webp"
                    alt="Think With You - Senior Advisory"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-extrabold text-indigo-900 shadow-sm border border-slate-100">
                  💡 Strategy Orbit
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* STEP 2: BUILD WITH YOU (Quirky SVG Left, Text Right) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-12 lg:grid-cols-12"
          >
            <div className="order-2 relative lg:order-1 lg:col-span-6">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-[32px] border border-emerald-100 bg-gradient-to-br from-emerald-50/80 via-white to-sky-50/50 p-8 shadow-[0_20px_60px_rgba(16,185,129,0.08)]"
              >
                <div className="h-[260px] w-full overflow-hidden rounded-2xl">
                  <img
                    src="/images/advantage2.jpg"
                    alt="Tech & Implementation - Build With You"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-extrabold text-emerald-900 shadow-sm border border-slate-100">
                  💻 Real Code & Systems
                </div>
              </motion.div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-emerald-700">
                02 / TECH & IMPLEMENTATION
              </span>

              <h3 className="mt-4 font-display text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Build With You.
                <span className="block text-emerald-600">Strategy connected to real software.</span>
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                We don't leave you with a passive PDF presentation. We build your custom web applications, cloud architecture, inventory portals, and marketing funnels so strategy works every day.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-slate-700">
                <span className="rounded-full bg-slate-100 px-3 py-1.5 border border-slate-200">✔ Custom Software & Web</span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 border border-slate-200">✔ Cloud Infrastructure</span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 border border-slate-200">✔ Funnel Automation</span>
              </div>
            </div>
          </motion.div>

          {/* STEP 3: GROW WITH YOU (Text Left, Quirky SVG Right) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-12 lg:grid-cols-12"
          >
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-rose-50 px-3.5 py-1.5 text-xs font-bold text-rose-700">
                03 / SUSTAINED MOMENTUM
              </span>

              <h3 className="mt-4 font-display text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Grow With You.
                <span className="block text-rose-600">Repeatable capabilities that scale.</span>
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                We engineer operational routines, real-time executive KPI dashboards, and salesforce training scorecards so your business continues to hit revenue benchmarks long after launch.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-slate-700">
                <span className="rounded-full bg-slate-100 px-3 py-1.5 border border-slate-200">✔ Executive KPI Dashboards</span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 border border-slate-200">✔ Salesforce Routines</span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 border border-slate-200">✔ Repeatable Growth</span>
              </div>
            </div>

            <div className="relative lg:col-span-6">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-[32px] border border-rose-100 bg-gradient-to-br from-rose-50/80 via-white to-purple-50/50 p-8 shadow-[0_20px_60px_rgba(244,63,94,0.08)]"
              >
                <div className="h-[260px] w-full overflow-hidden rounded-2xl">
                  <img
                    src="/images/advantage3.jpg"
                    alt="Sustained Momentum - Grow With You"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-extrabold text-rose-900 shadow-sm border border-slate-100">
                  🚀 Growth Launchpad
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   HERO RIGHT VISUAL (LARGE REAL LADY ON LAPTOP + RICH SKETCH NETWORK)
========================================================= */

function HeroSketchVisual() {
  const callouts = [
    {
      title: 'Web Design & UI/UX',
      sub: 'High converting brand sites',
      color: 'text-[#E11D48]',
      lineColor: '#FB7185',
      badgeBg: 'bg-rose-50 border-rose-100',
      pos: 'left-[-15px] top-[15px]',
      line: 'M 160 90 C 200 70, 230 100, 260 130',
      arrow: 'M 252 123 L 260 130 L 250 135',
      rotate: '-rotate-3',
    },
    {
      title: 'Custom SaaS & Web Apps',
      sub: 'Products built to scale without limits',
      color: 'text-[#059669]',
      lineColor: '#34D399',
      badgeBg: 'bg-emerald-50 border-emerald-100',
      pos: 'right-[-15px] top-[10px]',
      line: 'M 440 90 C 400 70, 370 100, 340 130',
      arrow: 'M 348 123 L 340 130 L 350 135',
      rotate: 'rotate-3',
    },
    {
      title: 'Digital Marketing & SEO',
      sub: 'Targeted lead gen & campaigns',
      color: 'text-[#2563EB]',
      lineColor: '#60A5FA',
      badgeBg: 'bg-blue-50 border-blue-100',
      pos: 'right-[-25px] top-[175px]',
      line: 'M 450 210 C 405 210, 385 220, 355 210',
      arrow: 'M 363 205 L 355 210 L 365 217',
      rotate: 'rotate-2',
    },
    {
      title: 'IT & Growth Strategy',
      sub: 'Clarity before complexity',
      color: 'text-[#D97706]',
      lineColor: '#FBBF24',
      badgeBg: 'bg-amber-50 border-amber-100',
      pos: 'left-[-20px] top-[180px]',
      line: 'M 160 210 C 205 210, 225 220, 255 210',
      arrow: 'M 247 205 L 255 210 L 245 217',
      rotate: '-rotate-2',
    },
    {
      title: 'Mobile Apps (iOS & Android)',
      sub: 'Native cross-platform engines',
      color: 'text-[#9333EA]',
      lineColor: '#C084FC',
      badgeBg: 'bg-purple-50 border-purple-100',
      pos: 'left-[-10px] bottom-[110px]',
      line: 'M 170 380 C 210 380, 230 340, 260 300',
      arrow: 'M 252 305 L 260 300 L 258 310',
      rotate: 'rotate-3',
    },
    {
      title: 'Cloud & Cyber Security',
      sub: 'AWS / Azure resilient setup',
      color: 'text-[#0284C7]',
      lineColor: '#38BDF8',
      badgeBg: 'bg-sky-50 border-sky-100',
      pos: 'right-[-10px] bottom-[100px]',
      line: 'M 430 380 C 390 380, 370 340, 340 300',
      arrow: 'M 334 306 L 340 300 L 344 309',
      rotate: '-rotate-2',
    },
    {
      title: 'AI Models & Automation',
      sub: 'Smart automated workflows',
      color: 'text-[#0D9488]',
      lineColor: '#2DD4BF',
      badgeBg: 'bg-teal-50 border-teal-100',
      pos: 'left-[45px] bottom-[10px]',
      line: 'M 210 470 C 230 430, 240 400, 270 340',
      arrow: 'M 262 346 L 270 340 L 272 350',
      rotate: '-rotate-1',
    },
    {
      title: 'E-Commerce Systems',
      sub: 'Omnichannel growth & POS',
      color: 'text-[#EA580C]',
      lineColor: '#FB923C',
      badgeBg: 'bg-orange-50 border-orange-100',
      pos: 'right-[45px] bottom-[10px]',
      line: 'M 390 470 C 370 430, 360 400, 330 340',
      arrow: 'M 326 348 L 330 340 L 338 344',
      rotate: 'rotate-1',
    },
  ];

  return (
    <div className="relative mx-auto h-[600px] w-full max-w-[670px] select-none">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-rose-100/50 via-indigo-100/50 to-emerald-100/50 blur-3xl" />

      <svg
        viewBox="0 0 600 600"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        fill="none"
      >
        {callouts.map((item, index) => (
          <g key={item.title}>
            <motion.path
              d={item.line}
              stroke={item.lineColor}
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.95 }}
              transition={{
                duration: 1.4,
                delay: 0.3 + index * 0.1,
                ease: 'easeInOut',
              }}
            />
            <motion.path
              d={item.arrow}
              stroke={item.lineColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.95 }}
              transition={{
                duration: 0.4,
                delay: 1.4 + index * 0.1,
              }}
            />
          </g>
        ))}
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 0.8, delay: 0.2 },
          scale: { duration: 0.8, delay: 0.2 },
        }}
        className="absolute left-1/2 top-1/2 z-20 flex h-[350px] w-[350px] sm:h-[380px] sm:w-[380px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[36px] border-4 border-white bg-white p-2 shadow-[0_35px_100px_rgba(79,70,229,0.2)]"
      >
        <div className="relative h-full w-full overflow-hidden rounded-[28px]">
          <img
            src="/images/hero_indian_woman.jpg"
            alt="Indian female entrepreneur working on laptop"
            className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
          />
        </div>
      </motion.div>

      {callouts.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 15, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4 + index * 0.08, duration: 0.6 }}
          whileHover={{ scale: 1.06, y: -4 }}
          className={`absolute z-30 ${item.pos} ${item.rotate}`}
        >
          <div className={`max-w-[200px] rounded-2xl border p-3 shadow-lg backdrop-blur-md bg-white/95 ${item.badgeBg}`}>
            <div className={`font-[cursive] text-[16.5px] font-bold italic leading-tight ${item.color}`}>
              {item.title}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
              className="mt-1 text-[10px] font-medium leading-3.5 text-slate-600"
            >
              {item.sub}
            </motion.p>
          </div>
        </motion.div>
      ))}

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[42%] top-0 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-[9.5px] font-bold uppercase tracking-widest text-slate-600 shadow-md"
      >
        ✨ Strategy First
      </motion.div>
    </div>
  );
}

/* =========================================================
   REDESIGNED INDUSTRY PERSPECTIVE (SECTOR SHOWCASE)
========================================================= */

const SECTOR_DATA = [
  {
    slug: 'msme',
    title: 'MSME Modernization',
    badge: 'Manufacturing & Industry',
    metric: '+45% Operational Speed',
    description: 'Transforming legacy operations, inventory workflows, and compliance with modern software and digital strategy.',
    to: '/sector/msme',
    theme: 'border-emerald-200 bg-emerald-50/40 text-emerald-700',
    iconBg: 'bg-emerald-600 text-white',
    icon: Factory,
  },
  {
    slug: 'sme',
    title: 'SME Scale & Growth',
    badge: 'Commercial Enterprise',
    metric: '3.2x Pipeline Growth',
    description: 'Enabling fast-growing mid-market companies to expand market share, optimize distribution, and scale teams.',
    to: '/sector/sme',
    theme: 'border-indigo-200 bg-indigo-50/40 text-indigo-700',
    iconBg: 'bg-indigo-600 text-white',
    icon: Building2,
  },
  {
    slug: 'agribusiness',
    title: 'Agribusiness Tech',
    badge: 'Agriculture & Supply Chain',
    metric: '100% Traceability',
    description: 'Connecting farmers, processors, and distributor networks with real-time tracking, ERP tools, and field apps.',
    to: '/sector/agribusiness',
    theme: 'border-amber-200 bg-amber-50/40 text-amber-700',
    iconBg: 'bg-amber-500 text-white',
    icon: Tractor,
  },
  {
    slug: 'logistics',
    title: 'Logistics & Fleet Ops',
    badge: 'Depot & Freight Tech',
    metric: '68% Manual Time Saved',
    description: 'Custom dispatch portals, vehicle tracking, route optimization, and automated billing for transport operators.',
    to: '/sector/logistics',
    theme: 'border-blue-200 bg-blue-50/40 text-blue-700',
    iconBg: 'bg-blue-600 text-white',
    icon: Truck,
  },
  {
    slug: 'financial-services',
    title: 'Financial Services',
    badge: 'Banking & Advisory',
    metric: '₹28Cr Working Capital Unlocked',
    description: 'Capital structure optimization, risk due diligence, compliance software, and executive balance sheet guidance.',
    to: '/sector/financial-services',
    theme: 'border-teal-200 bg-teal-50/40 text-teal-700',
    iconBg: 'bg-teal-600 text-white',
    icon: Landmark,
  },
  {
    slug: 'retail',
    title: 'Retail & Consumer',
    badge: 'Omnichannel & D2C',
    metric: '+50% Store Footfall',
    description: 'Integrating POS systems, customer loyalty, ground activations, and high-converting e-commerce web applications.',
    to: '/sector/retail',
    theme: 'border-rose-200 bg-rose-50/40 text-rose-700',
    iconBg: 'bg-rose-500 text-white',
    icon: ShoppingCart,
  },
];

function IndustryPerspectiveSection() {
  return (
    <section className="bg-white py-24 lg:py-32 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Sector Depth & Industry Perspective"
          title="Context matters. Tailored solutions for real Indian markets."
          description="We combine sector-specific operational understanding with modern digital tools to solve the exact growth friction in your industry."
          align="center"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTOR_DATA.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <motion.div
                key={sector.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to={sector.to}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-slate-100 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-[0_25px_60px_rgba(79,70,229,0.14)]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${sector.theme}`}>
                        {sector.badge}
                      </span>
                      <span className="text-[11px] font-extrabold text-slate-400 group-hover:text-indigo-600 transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6 flex items-center gap-3.5">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-md ${sector.iconBg}`}>
                        <Icon className="h-6 w-6 stroke-[2.2]" />
                      </div>
                      <h3 className="font-display text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {sector.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {sector.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-extrabold text-indigo-700 border border-slate-100">
                      ⚡ {sector.metric}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-700 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   AUTOMATIC AUTO-ROTATING INDIAN TESTIMONIALS CAROUSEL
========================================================= */

const INDIAN_TESTIMONIALS = [
  {
    quote: "Vaidimi didn't just give us a pitch deck; they built our core dispatch web app and digital marketing funnel. Our monthly fleet orders surged by 42% across NCR within 5 months.",
    name: "Rajesh Sharma",
    role: "Founder & Managing Director",
    company: "Apex Logistics India",
    city: "Gurugram, Haryana",
    impact: "+42% Order Volume",
    stars: 5,
    avatarBg: "bg-indigo-600",
  },
  {
    quote: "Their strategic IT consulting and branding created immense trust among our distributor networks. Vaidimi helped us expand our organic product distribution across 4 Northern states seamlessly.",
    name: "Ananya Deshmukh",
    role: "Chief Executive Officer",
    company: "Deshmukh Organics & Agribusiness",
    city: "Pune, Maharashtra",
    impact: "4 State Expansion",
    stars: 5,
    avatarBg: "bg-emerald-600",
  },
  {
    quote: "From building our custom e-commerce web platform to managing targeted search campaigns, Vaidimi transformed our retail brand. Our customer footfall and online revenue doubled.",
    name: "Vikramaditya Singhania",
    role: "Director of Operations",
    company: "Singhania Retail & Textiles",
    city: "Jaipur, Rajasthan",
    impact: "2x Online Revenue",
    stars: 5,
    avatarBg: "bg-rose-600",
  },
  {
    quote: "The financial advisory and automated ERP workflows provided by Vaidimi brought complete working capital clarity to our executive board. They unlocked ₹28Cr in trapped operational liquidity.",
    name: "Pooja Agarwal",
    role: "Chief Financial Officer",
    company: "Heritage Financial Services",
    city: "Mumbai, Maharashtra",
    impact: "₹28Cr Unlocked",
    stars: 5,
    avatarBg: "bg-teal-600",
  },
  {
    quote: "Their ground promotion team and dealer conclave event brought 100% distributor turnout and ₹14Cr in spot booking orders in just 2 days. Simply the best growth partner in India.",
    name: "Sanjay Verma",
    role: "Head of Commercial Sales",
    company: "North India Durables Corp",
    city: "Lucknow, Uttar Pradesh",
    impact: "₹14Cr Spot Orders",
    stars: 5,
    avatarBg: "bg-amber-600",
  },
  {
    quote: "Vaidimi's HR consulting and structured role scorecards completely resolved our senior hiring bottlenecks. We scaled our core tech team from 15 to 60 without losing quality.",
    name: "Kavita Reddy",
    role: "Co-Founder & HR Director",
    company: "TechEdge Software Solutions",
    city: "Bengaluru, Karnataka",
    impact: "4x Team Scaling",
    stars: 5,
    avatarBg: "bg-purple-600",
  },
  {
    quote: "Strategy paired directly with custom software execution. Vaidimi is our single trusted partner for all our web applications, inventory management, and digital marketing.",
    name: "Rohan Mehta",
    role: "Managing Director",
    company: "Mehta Industrial Equipment",
    city: "Ahmedabad, Gujarat",
    impact: "68% Time Saved",
    stars: 5,
    avatarBg: "bg-blue-600",
  },
  {
    quote: "Their regional market understanding and web design completely revitalized our consumer brand positioning in Tier-2 Indian cities. Inbound enquiries tripled in record time.",
    name: "Amitabh Srivastava",
    role: "Founder & Chairman",
    company: "Kashi Consumer Goods",
    city: "Varanasi, Uttar Pradesh",
    impact: "3.2x Qualified Leads",
    stars: 5,
    avatarBg: "bg-indigo-600",
  },
];

function IndianTestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % INDIAN_TESTIMONIALS.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % INDIAN_TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + INDIAN_TESTIMONIALS.length) % INDIAN_TESTIMONIALS.length);
  };

  const current = INDIAN_TESTIMONIALS[currentIndex];

  return (
    <section className="relative bg-white py-24 lg:py-32 border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="CLIENT SUCCESS & TESTIMONIALS"
          title="Trusted by Leaders Across India."
          description="Hear from Indian founders, CFOs, and enterprise directors who scaled their business operations with Vaidimi."
          align="center"
        />

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative mt-16 mx-auto max-w-4xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="relative rounded-[32px] border border-slate-100 bg-white p-8 sm:p-12 shadow-[0_20px_70px_rgba(79,70,229,0.08)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Quote className="h-6 w-6" />
                </div>

                <span className="rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-extrabold text-emerald-700 border border-emerald-100">
                  🏆 {current.impact}
                </span>
              </div>

              <div className="mt-6 flex items-center gap-1">
                {[...Array(current.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="mt-6 font-display text-xl font-bold leading-relaxed text-slate-900 sm:text-2xl lg:text-[1.65rem]">
                "{current.quote}"
              </blockquote>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-extrabold text-white shadow-md ${current.avatarBg}`}>
                    {current.name.split(' ').map((n) => n[0]).join('')}
                  </div>

                  <div>
                    <h4 className="font-display text-base font-bold text-slate-950">
                      {current.name}
                    </h4>
                    <p className="text-xs font-semibold text-slate-600">
                      {current.role} · <span className="text-indigo-700">{current.company}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <MapPin className="h-3.5 w-3.5 text-rose-500" />
                  {current.city}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              {INDIAN_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-indigo-600' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all hover:border-indigo-600 hover:bg-indigo-600 hover:text-white shadow-sm"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={handleNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all hover:border-indigo-600 hover:bg-indigo-600 hover:text-white shadow-sm"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   HOME PAGE
========================================================= */

export default function Home() {
  return (
    <>
      <HomeHighlightModal />

      {/* ===================================================
          HERO — ADVANCED ALL-IN-ONE PLATFORM & CONSULTING
      =================================================== */}

      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-24">
        <div className="pointer-events-none absolute left-[-100px] top-[10%] h-[500px] w-[500px] rounded-full bg-indigo-50/50 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-100px] top-[20%] h-[500px] w-[500px] rounded-full bg-emerald-50/50 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">

          {/* LEFT — MESSAGE & FEATURE GRID */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              show: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="relative z-10 lg:col-span-6"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/90 px-4 py-2 text-xs font-bold text-indigo-700 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-600" />
                </span>
                All-in-one Platform for MSMEs & Growth Enterprises
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-[650px] font-display text-[2.85rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-[3.75rem] lg:text-[4.15rem] xl:text-[4.5rem]"
            >
              Simplify Your{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Business Operations
              </span>{' '}
              in One Place
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[580px] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
            >
              Manage sales, inventory, finance, custom software, digital marketing and strategy — with powerful tools designed for growing MSMEs and ambitious businesses.
            </motion.p>

            {/* 4 Feature Boxes Grid */}
            <motion.div variants={fadeUp} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-emerald-200 hover:-translate-y-0.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-200">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Sales & CRM</h4>
                  <p className="text-xs text-slate-500">Grow your customer base</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-200 hover:-translate-y-0.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200">
                  <Box className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Inventory & Tech</h4>
                  <p className="text-xs text-slate-500">Track stock & custom software</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-amber-200 hover:-translate-y-0.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md shadow-amber-200">
                  <Landmark className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Finance & Advisory</h4>
                  <p className="text-xs text-slate-500">Keep cash flow healthy</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-sky-200 hover:-translate-y-0.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500 text-white shadow-md shadow-sky-200">
                  <Users2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">HR & Marketing</h4>
                  <p className="text-xs text-slate-500">Build a stronger team</p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button
                to="/contact"
                className="group flex items-center gap-3 rounded-2xl bg-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-[0_14px_35px_rgba(79,70,229,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 sm:text-base"
              >
                Get Started Free
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Button>

              <Button
                to="/services"
                variant="outline"
                className="flex items-center gap-2 rounded-2xl border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-600 hover:text-indigo-600 sm:text-base"
              >
                Explore Services
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT — LADY WITH LAPTOP & COLORFUL SKETCH ANNOTATIONS */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeRight}
            className="relative z-10 lg:col-span-6"
          >
            <HeroSketchVisual />
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity }}
          className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 lg:flex"
        >
          <CircleDot className="h-3 w-3 text-indigo-500" />
          Scroll to explore
        </motion.div>
      </section>

      {/* ===================================================
          IMPACT STRIP (STATS) — PURE WHITE BACKGROUND
      =================================================== */}

      <section className="relative border-y border-slate-100 bg-white py-4">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4 lg:px-10">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="
                group
                border-b
                border-slate-100
                px-5
                py-8
                transition-all
                duration-300
                hover:bg-slate-50/60
                rounded-2xl
                lg:border-b-0
                lg:border-r
                lg:border-slate-100
                lg:px-7
                lg:py-9
                last:border-r-0
              "
            >
              <p className="font-display text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-1 text-sm font-bold text-slate-800">
                {stat.label}
              </p>

              <p className="mt-1 text-[11px] leading-5 text-slate-500">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================================================
          INTRO / GROWTH PHILOSOPHY — PURE WHITE BACKGROUND
      =================================================== */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-indigo-50/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeLeft}
            className="lg:col-span-5"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-700">
              Beyond Traditional Consulting
            </span>

            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-slate-950 sm:text-5xl">
              From complex challenges
              <span className="block text-indigo-700">
                to clear momentum.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeRight}
            className="lg:col-span-7"
          >
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              Businesses rarely need another presentation.
              They need clarity, better systems, sharper decisions
              and the capability to execute. Vaidimi brings
              strategy, technology and commercial thinking together
              to turn business ambition into measurable progress.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {GROWTH_PILLARS.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <motion.div
                    key={pillar.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    className="
                      rounded-2xl
                      border
                      border-slate-100
                      bg-white
                      p-5
                      shadow-[0_10px_35px_rgba(15,45,75,0.04)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-indigo-200
                      hover:shadow-[0_18px_45px_rgba(79,70,229,0.08)]
                    "
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
                      <Icon className="h-5 w-5 text-indigo-700" />
                    </div>

                    <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================================
          WHAT WE DO — REDESIGNED POP-UP EXPERTISE SHOWCASE
      =================================================== */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32 border-t border-slate-100">
        <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-indigo-50/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-rose-50/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="What We Do & How We Scale"
            title="Expertise designed around your next stage of growth."
            description="Our multidisciplinary practices combine strategic advisory, custom technology, digital marketing, and execution to power your business."
            align="center"
          />

          {/* 6 POP-UP SERVICE CARDS GRID */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              const themes = [
                {
                  badgeBg: 'bg-rose-50 text-rose-600 border-rose-100',
                  hoverBorder: 'hover:border-rose-300 hover:shadow-[0_25px_60px_rgba(244,63,94,0.15)]',
                  iconBg: 'bg-rose-500 text-white',
                  gradHeader: 'from-rose-500/10 via-pink-500/5 to-transparent',
                  accentText: 'text-rose-600',
                  btnBg: 'group-hover:bg-rose-600',
                  Illustration: MarketingIllustration,
                  tag: 'BRAND & MARKETING',
                },
                {
                  badgeBg: 'bg-blue-50 text-blue-600 border-blue-100',
                  hoverBorder: 'hover:border-blue-300 hover:shadow-[0_25px_60px_rgba(59,130,246,0.15)]',
                  iconBg: 'bg-blue-600 text-white',
                  gradHeader: 'from-blue-500/10 via-indigo-500/5 to-transparent',
                  accentText: 'text-blue-600',
                  btnBg: 'group-hover:bg-blue-600',
                  Illustration: ITIllustration,
                  tag: 'IT & SOFTWARE',
                },
                {
                  badgeBg: 'bg-amber-50 text-amber-600 border-amber-100',
                  hoverBorder: 'hover:border-amber-300 hover:shadow-[0_25px_60px_rgba(245,158,11,0.15)]',
                  iconBg: 'bg-amber-500 text-white',
                  gradHeader: 'from-amber-500/10 via-orange-500/5 to-transparent',
                  accentText: 'text-amber-600',
                  btnBg: 'group-hover:bg-amber-600',
                  Illustration: PromotionIllustration,
                  tag: 'CAMPAIGNS & PROMO',
                },
                {
                  badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
                  hoverBorder: 'hover:border-emerald-300 hover:shadow-[0_25px_60px_rgba(16,185,129,0.15)]',
                  iconBg: 'bg-emerald-500 text-white',
                  gradHeader: 'from-emerald-500/10 via-teal-500/5 to-transparent',
                  accentText: 'text-emerald-600',
                  btnBg: 'group-hover:bg-emerald-600',
                  Illustration: HRIllustration,
                  tag: 'PEOPLE & HRMS',
                },
                {
                  badgeBg: 'bg-teal-50 text-teal-600 border-teal-100',
                  hoverBorder: 'hover:border-teal-300 hover:shadow-[0_25px_60px_rgba(20,184,166,0.15)]',
                  iconBg: 'bg-teal-600 text-white',
                  gradHeader: 'from-teal-500/10 via-emerald-500/5 to-transparent',
                  accentText: 'text-teal-600',
                  btnBg: 'group-hover:bg-teal-600',
                  Illustration: FinanceIllustration,
                  tag: 'CAPITAL & FINANCE',
                },
                {
                  badgeBg: 'bg-purple-50 text-purple-600 border-purple-100',
                  hoverBorder: 'hover:border-purple-300 hover:shadow-[0_25px_60px_rgba(168,85,247,0.15)]',
                  iconBg: 'bg-purple-600 text-white',
                  gradHeader: 'from-purple-500/10 via-pink-500/5 to-transparent',
                  accentText: 'text-purple-600',
                  btnBg: 'group-hover:bg-purple-600',
                  Illustration: EventIllustration,
                  tag: 'EVENTS & CONVENTIONS',
                },
              ];

              const theme = themes[index % themes.length];
              const ServiceSVG = theme.Illustration;

              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-2.5 ${theme.hoverBorder}`}
                  >
                    <div className={`relative h-[190px] w-full overflow-hidden bg-gradient-to-br ${theme.gradHeader} p-4 flex items-center justify-center`}>
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${theme.badgeBg}`}>
                          {theme.tag}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 z-10 font-display text-xs font-black tracking-widest text-slate-300 group-hover:text-slate-500 transition-colors">
                        0{index + 1}
                      </div>

                      <div className="relative z-0 h-full w-full transform transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                        <ServiceSVG />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-md ${theme.iconBg}`}>
                          <Icon className="h-5 w-5 stroke-[2.2]" />
                        </div>
                        <h3 className={`font-display text-xl font-extrabold text-slate-900 transition-colors ${theme.accentText}`}>
                          {service.title}
                        </h3>
                      </div>

                      <p className="mt-3.5 text-sm leading-6 text-slate-600">
                        {service.shortDescription}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {service.subServices.slice(0, 3).map((sub) => (
                          <span
                            key={sub.title}
                            className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-500"
                          >
                            {sub.title}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 mt-6">
                        <span className={`text-xs font-bold uppercase tracking-wider ${theme.accentText}`}>
                          Explore Practice
                        </span>
                        <span className={`flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-700 transition-all duration-300 group-hover:text-white ${theme.btnBg}`}>
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          REDESIGNED INDUSTRY PERSPECTIVE (SECTOR SHOWCASE)
      =================================================== */}

      <IndustryPerspectiveSection />

      {/* ===================================================
          ZIG ZAG VAIDIMI ADVANTAGE SECTION (QUIRKY & NO PHOTO IMAGE)
      =================================================== */}

      <VaidimiAdvantageZigZag />

      {/* ===================================================
          METHODOLOGY — PURE WHITE BACKGROUND
      =================================================== */}

      <section className="bg-white py-24 lg:py-32 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="How We Work"
            title="A clear path from challenge to growth."
            description="Our structured approach creates alignment first, then turns insight into implementation and lasting capability."
          />

          <div className="relative mt-16">
            <div className="
              absolute
              left-[8%]
              right-[8%]
              top-7
              hidden
              h-px
              bg-gradient-to-r
              from-transparent
              via-indigo-200
              to-transparent
              lg:block
            " />

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative"
                >
                  <div className="
                    relative
                    z-10
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-indigo-200
                    bg-white
                    font-display
                    text-sm
                    font-extrabold
                    text-indigo-700
                    shadow-[0_5px_20px_rgba(79,70,229,0.12)]
                  ">
                    {step.step}
                  </div>

                  <h3 className="
                    mt-7
                    font-display
                    text-xl
                    font-bold
                    text-slate-950
                  ">
                    {step.title}
                  </h3>

                  <p className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-600
                  ">
                    {step.description}
                  </p>

                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-slate-300
                    ">
                      Next phase
                      <ArrowRight className="h-3 w-3 text-indigo-500" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          DARK IMPACT SECTION (GROWTH INTELLIGENCE)
      =================================================== */}

      <section className="relative overflow-hidden bg-[#0D1D32] py-24 text-white lg:py-32">
        <div className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[-150px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-indigo-900/40
          blur-3xl
        " />

        <div className="
          pointer-events-none
          absolute
          bottom-[-200px]
          right-[-100px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-emerald-900/30
          blur-3xl
        " />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            variants={fadeLeft}
            className="lg:col-span-5"
          >
            <span className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-indigo-300
            ">
              <Sparkles className="h-3 w-3" />
              Growth Intelligence
            </span>

            <h2 className="
              mt-6
              font-display
              text-4xl
              font-extrabold
              leading-[1.08]
              tracking-[-0.03em]
              sm:text-5xl
            ">
              Better decisions.
              <span className="block text-indigo-300">
                Better systems.
              </span>
              <span className="block text-white/60">
                Better outcomes.
              </span>
            </h2>

            <p className="
              mt-6
              max-w-lg
              text-base
              leading-7
              text-slate-300
            ">
              Growth is not a single initiative. It is the
              compound effect of sharper strategy, stronger
              execution and systems that keep improving.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            variants={fadeRight}
            className="lg:col-span-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: '01',
                  title: 'Clarity',
                  text: 'Understand where value is created, lost and waiting to be unlocked.',
                },
                {
                  number: '02',
                  title: 'Alignment',
                  text: 'Connect leadership priorities with teams, technology and execution.',
                },
                {
                  number: '03',
                  title: 'Momentum',
                  text: 'Translate plans into initiatives that produce visible business movement.',
                },
                {
                  number: '04',
                  title: 'Scale',
                  text: 'Build repeatable operating capabilities that continue beyond the engagement.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="
                    rounded-[22px]
                    border
                    border-white/10
                    bg-white/[0.045]
                    p-6
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-indigo-400/30
                    hover:bg-white/[0.07]
                  "
                >
                  <div className="
                    flex
                    items-center
                    justify-between
                  ">
                    <span className="
                      text-[10px]
                      font-bold
                      tracking-[0.2em]
                      text-indigo-400
                    ">
                      {item.number}
                    </span>

                    <MoveUpRight className="h-4 w-4 text-white/30" />
                  </div>

                  <h3 className="
                    mt-7
                    font-display
                    text-2xl
                    font-bold
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-400
                  ">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================================
          AUTO-ROTATING INDIAN TESTIMONIALS CAROUSEL
      =================================================== */}

      <IndianTestimonialsCarousel />

      {/* ===================================================
          FINAL CTA — PURE WHITE CONTAINER
      =================================================== */}

      <section className="bg-white px-6 py-20 lg:px-10 lg:py-28">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[32px]
            bg-indigo-600
            px-7
            py-16
            text-center
            shadow-[0_30px_80px_rgba(79,70,229,0.25)]
            sm:px-12
            lg:px-20
            lg:py-20
          "
        >
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              pointer-events-none
              absolute
              -left-28
              -top-28
              h-72
              w-72
              rounded-full
              border
              border-white/10
            "
          />

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              pointer-events-none
              absolute
              -bottom-32
              -right-24
              h-80
              w-80
              rounded-full
              border
              border-white/10
            "
          />

          <div className="relative mx-auto max-w-3xl">
            <span className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/10
              px-4
              py-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-indigo-100
            ">
              <Globe2 className="h-3 w-3" />
              Let's Build What Comes Next
            </span>

            <h2 className="
              mt-7
              font-display
              text-4xl
              font-extrabold
              leading-[1.08]
              tracking-[-0.03em]
              text-white
              sm:text-5xl
              lg:text-[4rem]
            ">
              Ready to turn ambition
              <span className="block text-indigo-200">
                into measurable growth?
              </span>
            </h2>

            <p className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-white/80
              sm:text-lg
            ">
              Start with a focused conversation about your
              business, your challenges and the opportunities
              ahead.
            </p>

            <div className="
              mt-9
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
            ">
              <Button
                to="/contact"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-white
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-indigo-700
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-slate-50
                  sm:text-base
                "
              >
                Book a Consultation

                <span className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-indigo-700/10
                  transition-transform
                  group-hover:translate-x-1
                ">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Button>

              <a
                href="tel:8869990973"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-white/20
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/40
                  hover:bg-white/5
                  sm:text-base
                "
              >
                <PhoneCall className="h-4 w-4 text-indigo-200" />
                +91 8869990973
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}