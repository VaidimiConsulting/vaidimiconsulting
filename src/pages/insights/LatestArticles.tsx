import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Calendar,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  TrendingUp,
  Search,
  CalendarCheck,
  ShieldCheck,
} from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
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

export default function LatestArticles() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const flagshipArticle = ARTICLES[0]; // Business growth roadmap

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
      <PageBanner
        eyebrow="Insights · Latest Articles"
        title="Perspectives on Strategy, Technology & Enterprise Growth"
        description="Actionable intelligence, advisory research, and field-tested frameworks from Vaidimi Consulting's senior practitioners."
        accent="accent"
        crumbs={[{ label: 'Insights', to: '/insights' }, { label: 'Latest Articles' }]}
      />

      <section className="py-14 lg:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pb-10 border-b border-slate-200">
            {/* Category Pills */}
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

            {/* Search Input */}
            <div className="relative w-full md:w-80 flex-shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by topic..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-full focus:outline-none focus:border-emerald-600 transition-all text-slate-900 placeholder:text-slate-400 shadow-sm"
              />
            </div>
          </div>

          {/* Featured Flagship Article Card */}
          {activeCategory === 'All' && !searchQuery && (
            <div className="mt-10 mb-14">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-emerald-800">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Featured Strategic Publication</span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-card hover:shadow-xl transition-all group"
              >
                <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                  {/* Clickable Image */}
                  <div className="lg:col-span-7 overflow-hidden relative min-h-[300px] lg:min-h-[420px] bg-slate-100">
                    <Link
                      to={flagshipArticle.url}
                      className="block w-full h-full"
                      aria-label={flagshipArticle.title}
                    >
                      <img
                        src={flagshipArticle.image}
                        alt={flagshipArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:hidden" />
                    </Link>
                  </div>

                  {/* Content Block */}
                  <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100/80 text-emerald-800">
                          {flagshipArticle.category}
                        </span>
                        <span className="text-xs text-slate-400">·</span>
                        <span className="text-xs font-semibold text-slate-500">{flagshipArticle.readTime}</span>
                      </div>

                      {/* Clickable Title */}
                      <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug mb-4">
                        <Link
                          to={flagshipArticle.url}
                          className="hover:text-emerald-700 transition-colors"
                        >
                          {flagshipArticle.title}
                        </Link>
                      </h2>

                      {/* Short Excerpt */}
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                        {flagshipArticle.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-xs text-slate-500">
                        <span className="font-semibold text-slate-800 block">{flagshipArticle.author}</span>
                        <span>{flagshipArticle.date}</span>
                      </div>

                      {/* Clickable Read Article Link */}
                      <Link
                        to={flagshipArticle.url}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 group-hover:translate-x-1 transition-all"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Section Heading for All / Filtered Articles */}
          <div className="flex items-center justify-between mb-8 mt-6">
            <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900">
              {activeCategory === 'All' && !searchQuery
                ? 'Recent Executive Articles'
                : `Articles: ${activeCategory} (${filteredArticles.length})`}
            </h3>
            <span className="text-xs font-semibold text-slate-500">
              {filteredArticles.length} {filteredArticles.length === 1 ? 'Article' : 'Articles'} available
            </span>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-card hover:border-slate-300 transition-all flex flex-col group"
              >
                {/* Clickable Cover Image */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <Link
                    to={article.url}
                    className="block w-full h-full"
                    aria-label={`Read article: ${article.title}`}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </Link>
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#0B1528]/85 text-white backdrop-blur-sm shadow-sm">
                    {article.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {article.date}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {article.readTime}
                      </span>
                    </div>

                    {/* Clickable Title */}
                    <h4 className="font-display text-lg font-bold text-slate-900 leading-snug mb-3 line-clamp-2">
                      <Link
                        to={article.url}
                        className="hover:text-emerald-700 transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h4>

                    {/* Short Excerpt */}
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-5">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Card Footer with Clickable Read Article Link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500 truncate max-w-[140px]">
                      {article.author}
                    </span>
                    <Link
                      to={article.url}
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Empty Search State */}
          {filteredArticles.length === 0 && (
            <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 mt-6 p-8">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-slate-800 mb-2">No articles found</h3>
              <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
                No publications match your search query &quot;{searchQuery}&quot;. Try adjusting your keywords or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="px-5 py-2.5 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Bottom Consultation Banner */}
          <div className="mt-20 bg-[#0B1528] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-4">
                <CalendarCheck className="w-3.5 h-3.5" /> Executive Advisory
              </span>
              <h3 className="font-display text-2xl lg:text-3xl font-extrabold mb-3">
                Translate Strategic Frameworks into Measurable Results
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                Connect with our senior partners for a confidential diagnostic session on business growth, capital allocation, and operational scale.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  to="/contact"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Book an Appointment</span>
                </Button>
                <Link
                  to="/insights/business-idea-to-sustainable-growth"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white px-4 py-3"
                >
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
