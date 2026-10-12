import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen,
  Search,
  CalendarCheck,
  Pen,
  BarChart2,
  ChevronRight,
  Layers,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ArticleItem {
  id: string;
  url: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const ARTICLES: ArticleItem[] = [
  {
    id: 'business-idea-to-sustainable-growth',
    url: '/insights/business-idea-to-sustainable-growth',
    title: 'From Business Idea to Sustainable Growth: A Practical Roadmap',
    excerpt:
      'A battle-tested strategic framework for founders and executive leaders transitioning from early validation to scalable, compounding enterprise growth.',
    category: 'Strategy & Growth',
    author: 'Vaidimi Advisory Practice',
    date: 'October 2026',
    readTime: '7 min read',
    featured: true,
    image: '/images/business-growth-roadmap.jpg',
  },
  {
    id: 'enterprise-playbook-2026',
    url: '/blog/enterprise-playbook-2026',
    title: 'The 2026 Enterprise Playbook: Scaling Operational Efficiency with Pragmatic AI',
    excerpt:
      'How mid-market enterprises skip bloated multi-year software transformations to deploy targeted, outcome-driven automated workflows that generate tangible ROI.',
    category: 'Digital & AI',
    author: 'Aalok Sharma',
    date: 'February 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'msme-cash-flow-resilience',
    url: '/blog/msme-cash-flow-resilience',
    title: 'Mastering Working Capital & Cash-Flow Predictability in Volatile Markets',
    excerpt:
      'A CFO-grade guide for MSME & SME leadership: managing debtor days, supplier leverage, and operational buffer to prevent liquidity traps during rapid expansion.',
    category: 'Finance & Strategy',
    author: 'Sunil Rao',
    date: 'January 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'supply-chain-decoupling',
    url: '/blog/supply-chain-decoupling',
    title: 'Resilient Supply Chains: Decoupling Risk in Indian Manufacturing & Logistics',
    excerpt:
      'Moving from single-source vulnerability to multi-tier vendor networks, real-time inventory buffers, and localized fulfilment hubs.',
    category: 'Operations',
    author: 'Priya Nambiar',
    date: 'December 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'talent-architecture-scaleups',
    url: '/blog/talent-architecture-scaleups',
    title: 'Talent Architecture for Scaleups: Building High-Performance Middle Management',
    excerpt:
      'Why early-stage hiring playbooks collapse at 100+ headcount, and how to build structured delegation ladders that empower frontline initiative.',
    category: 'HR & Talent',
    author: 'Ritu Varma',
    date: 'November 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'omnichannel-retail-transformation',
    url: '/blog/omnichannel-retail-transformation',
    title: 'Unified Commerce: Blending Brick-and-Mortar Footprints with Digital Journeys',
    excerpt:
      'Strategic playbooks for modern retailers to synchronize in-store inventory, rapid fulfillment, and hyper-personalized customer engagement.',
    category: 'Retail & Strategy',
    author: 'Vikram Seth',
    date: 'October 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
  },
];

const CATEGORIES = ['All', 'Strategy & Growth', 'Digital & AI', 'Finance & Strategy', 'Operations', 'HR & Talent'];

const TOPIC_PILLS = [
  { label: 'Strategy', icon: BarChart2 },
  { label: 'Growth', icon: Sparkles },
  { label: 'Operations', icon: Layers },
  { label: 'Finance', icon: FileText },
  { label: 'Leadership', icon: Pen },
];

export default function LatestArticles() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const flagshipArticle = ARTICLES[0];

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* ============================================================
          HERO — Clean White with SVG Chart Graphic
      ============================================================ */}
      <section className="relative overflow-hidden bg-white pt-32 pb-0 lg:pt-40">
        {/* Subtle top border accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />

        {/* Light grid lines background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            opacity: 0.7,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-10">
            <Link to="/" className="hover:text-slate-700 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/insights" className="hover:text-slate-700 transition-colors">Insights</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-600 font-medium">Latest Articles</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-end pb-0">
            {/* LEFT — Text content */}
            <div className="pb-16 lg:pb-20">
              {/* Eyebrow tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-200 mb-7"
              >
                <Pen className="w-3 h-3" />
                Insights · Latest Articles
              </motion.div>

              {/* Main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-extrabold text-slate-900 leading-[1.1] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}
              >
                Ideas That Shape
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  Industries & Leaders
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="text-slate-500 text-base md:text-lg leading-relaxed max-w-lg mb-8"
              >
                Field-tested frameworks, sector deep-dives, and sharp advisory perspectives from Vaidimi Consulting's senior practitioners.
              </motion.p>

              {/* Hero Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="relative max-w-md mb-8"
              >
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, topics, sectors..."
                  className="w-full pl-12 pr-5 py-3.5 text-sm bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-all text-slate-900 placeholder:text-slate-400 shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs font-semibold px-2 py-1 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    Clear
                  </button>
              )}
            </motion.div>

              {/* Topic quick-filter pills */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.32 }}
                className="flex flex-wrap gap-2"
              >
                {TOPIC_PILLS.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    onClick={() => setSearchQuery(label)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 border border-slate-200 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all"
                  >
                    <Icon className="w-3 h-3" />
                    {label}
                  </button>
                ))}
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.42 }}
                className="flex flex-wrap items-center gap-8 mt-10 pt-8 border-t border-slate-100"
              >
                {[
                  { val: '6+', label: 'Expert Articles' },
                  { val: '5', label: 'Practice Areas' },
                  { val: '7 min', label: 'Avg. Read Time' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl font-bold text-slate-900">{stat.val}</p>
                    <p className="text-xs text-slate-400 mt-0.5 font-medium">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Animated SVG Chart Graphic */}
            <div className="hidden lg:flex items-end justify-center relative">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative w-full max-w-[520px]"
              >
                {/* Floating insight cards */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-6 right-6 bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-lg text-xs font-semibold text-slate-700 flex items-center gap-2 z-10"
                >
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  Featured Article Published
                </motion.div>

                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute top-24 -left-8 bg-emerald-600 text-white rounded-2xl px-4 py-3 shadow-lg text-xs font-bold flex items-center gap-2 z-10"
                >
                  <BarChart2 className="w-4 h-4" />
                  Strategy & Growth
                </motion.div>

                {/* Main SVG Graph Illustration */}
                <svg
                  viewBox="0 0 520 420"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto drop-shadow-xl"
                >
                  {/* Card background */}
                  <rect x="10" y="10" width="500" height="400" rx="24" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />

                  {/* Card header */}
                  <rect x="10" y="10" width="500" height="60" rx="24" fill="#f8fafc" />
                  <rect x="10" y="46" width="500" height="24" fill="#f8fafc" />
                  <circle cx="44" cy="40" r="14" fill="#ecfdf5" />
                  <rect x="66" y="28" width="120" height="8" rx="4" fill="#94a3b8" />
                  <rect x="66" y="42" width="80" height="6" rx="3" fill="#cbd5e1" />
                  <rect x="400" y="30" width="80" height="22" rx="11" fill="#059669" />
                  <rect x="412" y="37" width="56" height="8" rx="4" fill="white" />

                  {/* Y-axis grid lines */}
                  {[90, 140, 190, 240, 290, 340].map((y, i) => (
                    <line key={i} x1="60" y1={y} x2="490" y2={y} stroke="#f1f5f9" strokeWidth="1.5" />
                  ))}

                  {/* Y-axis labels */}
                  {['100', '80', '60', '40', '20', '0'].map((label, i) => (
                    <text key={i} x="48" y={96 + i * 50} textAnchor="end" fontSize="10" fill="#94a3b8" fontFamily="Inter, sans-serif">{label}</text>
                  ))}

                  {/* X-axis labels */}
                  {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Oct'].map((label, i) => (
                    <text key={i} x={90 + i * 72} y="372" textAnchor="middle" fontSize="10" fill="#94a3b8" fontFamily="Inter, sans-serif">{label}</text>
                  ))}

                  {/* Bar chart — Strategy articles performance */}
                  <rect x="72" y="220" width="36" height="130" rx="6" fill="#dcfce7" />
                  <rect x="72" y="220" width="36" height="130" rx="6" fill="url(#barGrad1)" />

                  <rect x="144" y="180" width="36" height="170" rx="6" fill="url(#barGrad1)" />
                  <rect x="216" y="150" width="36" height="200" rx="6" fill="url(#barGrad1)" />
                  <rect x="288" y="130" width="36" height="220" rx="6" fill="url(#barGrad2)" />
                  <rect x="360" y="100" width="36" height="250" rx="6" fill="url(#barGrad2)" />
                  <rect x="432" y="80" width="36" height="270" rx="6" fill="url(#barGrad3)" />

                  {/* Growth line on top */}
                  <polyline
                    points="90,220 162,180 234,150 306,130 378,100 450,80"
                    stroke="#059669"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="4 2"
                  />

                  {/* Trend line dots */}
                  {[[90,220],[162,180],[234,150],[306,130],[378,100],[450,80]].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r={i === 5 ? 6 : 4} fill={i === 5 ? '#059669' : 'white'} stroke="#059669" strokeWidth="2" />
                  ))}

                  {/* Peak annotation */}
                  <rect x="380" y="64" width="90" height="24" rx="8" fill="#059669" />
                  <text x="425" y="80" textAnchor="middle" fontSize="10" fill="white" fontWeight="700" fontFamily="Inter, sans-serif">↑ 48% Growth</text>

                  {/* Gradient defs */}
                  <defs>
                    <linearGradient id="barGrad1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#a7f3d0" />
                      <stop offset="100%" stopColor="#d1fae5" />
                    </linearGradient>
                    <linearGradient id="barGrad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6ee7b7" />
                      <stop offset="100%" stopColor="#a7f3d0" />
                    </linearGradient>
                    <linearGradient id="barGrad3" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                  </defs>

                  {/* Bottom tags */}
                  <rect x="30" y="380" width="70" height="18" rx="9" fill="#f0fdf4" />
                  <text x="65" y="392" textAnchor="middle" fontSize="9" fill="#059669" fontWeight="600" fontFamily="Inter, sans-serif">Strategy</text>
                  <rect x="110" y="380" width="60" height="18" rx="9" fill="#eff6ff" />
                  <text x="140" y="392" textAnchor="middle" fontSize="9" fill="#2563eb" fontWeight="600" fontFamily="Inter, sans-serif">Finance</text>
                  <rect x="180" y="380" width="68" height="18" rx="9" fill="#fff7ed" />
                  <text x="214" y="392" textAnchor="middle" fontSize="9" fill="#ea580c" fontWeight="600" fontFamily="Inter, sans-serif">Operations</text>
                  <rect x="258" y="380" width="56" height="18" rx="9" fill="#fdf4ff" />
                  <text x="286" y="392" textAnchor="middle" fontSize="9" fill="#9333ea" fontWeight="600" fontFamily="Inter, sans-serif">HR & Talent</text>
                </svg>

                {/* Article count badge */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-8 right-4 bg-[#0B1528] text-white rounded-2xl px-4 py-3 shadow-xl text-xs font-bold flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                  6 Articles Published
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ARTICLES BODY
      ============================================================ */}
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Category filter bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-8 mb-10 border-b border-slate-200">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-[#0B1528] text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <span className="text-xs font-semibold text-slate-400 self-center">
              {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
            </span>
          </div>

          {/* Featured flagship article */}
          {activeCategory === 'All' && !searchQuery && (
            <div className="mb-14">
              <div className="flex items-center gap-2 mb-5 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Featured Strategic Publication</span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-card hover:shadow-xl transition-all group"
              >
                <div className="grid lg:grid-cols-12 items-stretch">
                  {/* Clickable Image */}
                  <div className="lg:col-span-7 overflow-hidden relative min-h-[300px] lg:min-h-[440px] bg-slate-100">
                    <Link to={flagshipArticle.url} className="block w-full h-full" aria-label={flagshipArticle.title}>
                      <img
                        src={flagshipArticle.image}
                        alt={flagshipArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/5" />
                    </Link>
                    <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md">
                      {flagshipArticle.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" /> {flagshipArticle.date}
                        </span>
                        <span className="text-slate-300">·</span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                          <Clock className="w-3.5 h-3.5 text-slate-400" /> {flagshipArticle.readTime}
                        </span>
                      </div>

                      <h2 className="font-display text-2xl lg:text-[1.85rem] font-extrabold text-slate-900 leading-[1.22] mb-4">
                        <Link to={flagshipArticle.url} className="hover:text-emerald-700 transition-colors">
                          {flagshipArticle.title}
                        </Link>
                      </h2>

                      <p className="text-slate-600 text-sm md:text-[0.96rem] leading-relaxed mb-8">
                        {flagshipArticle.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-slate-900 text-sm block">{flagshipArticle.author}</span>
                        <span className="text-xs text-slate-400">Vaidimi Consulting</span>
                      </div>
                      <Link
                        to={flagshipArticle.url}
                        className="inline-flex items-center gap-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all group-hover:translate-x-0.5"
                      >
                        Read Article <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Section heading */}
          <div className="mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
              {activeCategory === 'All' && !searchQuery
                ? 'More Executive Articles'
                : searchQuery
                ? `Search: "${searchQuery}"`
                : `${activeCategory}`}
            </h2>
            {!(activeCategory === 'All' && !searchQuery) && (
              <p className="text-slate-500 text-sm mt-1">{filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found</p>
            )}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredArticles.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Clickable Cover Image */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <Link to={article.url} className="block w-full h-full" aria-label={`Read article: ${article.title}`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#0B1528]/85 text-white backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                      <Calendar className="w-3.5 h-3.5" /> {article.date}
                      <span>·</span>
                      <Clock className="w-3.5 h-3.5" /> {article.readTime}
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 leading-snug mb-3 line-clamp-2">
                      <Link to={article.url} className="hover:text-emerald-700 transition-colors">
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-5">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500 truncate max-w-[140px]">{article.author}</span>
                    <Link
                      to={article.url}
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 group-hover:translate-x-0.5 transition-all"
                    >
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Empty state */}
          {filteredArticles.length === 0 && (
            <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 mt-4 p-8">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-slate-800 mb-2">No articles found</h3>
              <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
                No publications match &ldquo;{searchQuery}&rdquo;. Try different keywords or clear the filter.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="px-5 py-2.5 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Bottom CTA Banner */}
          <div className="mt-20 bg-[#070E1C] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute left-0 top-0 w-60 h-60 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-4">
                <CalendarCheck className="w-3.5 h-3.5" /> Executive Advisory
              </span>
              <h3 className="font-display text-2xl lg:text-3xl font-extrabold mb-3">
                Turn Strategic Insights into Measurable Results
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                Connect with our senior partners for a confidential diagnostic on business growth, capital allocation, and operational scaling.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button to="/contact" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2">
                  <CalendarCheck className="w-4 h-4" />
                  <span>Book an Appointment</span>
                </Button>
                <Link to="/insights/business-idea-to-sustainable-growth" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white px-4 py-3">
                  <span>Read our Growth Roadmap</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
