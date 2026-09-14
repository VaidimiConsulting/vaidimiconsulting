import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, User, Calendar, Search, Sparkles } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import { Button } from '@/components/ui/Button';
import { BLOG_POSTS } from '@/data/blogPosts';

const CATEGORIES = ['All', 'Strategy & Growth', 'Digital & AI', 'HR & Talent', 'Finance', 'Operations'] as const;

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  const regularPosts = filteredPosts.filter((p) => p.id !== (activeCategory === 'All' && !searchQuery ? featuredPost.id : ''));

  return (
    <>
      <PageBanner
        eyebrow="Insights Worth Reading · Ideas That Shape Industries"
        title="Perspectives on Strategy, Technology & Enterprise Growth"
        description="Actionable intelligence, advisory research, and field-tested frameworks from Vaidimi Consulting's senior practitioners."
        accent="accent"
        crumbs={[{ label: 'Blog & Articles' }]}
      />

      <div className="bg-surface py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Section Sub-Tagline & Filters */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pb-12 border-b border-border">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-surface-alt text-text-secondary hover:bg-surface-muted hover:text-text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 flex-shrink-0">
              <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search research & articles..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-surface-alt border border-border rounded-full focus:outline-none focus:border-primary focus:bg-white transition-all text-text-primary placeholder:text-text-muted"
              />
            </div>
          </div>

          {/* Featured Post Card (only shown when viewing All and no search) */}
          {activeCategory === 'All' && !searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all group"
            >
              <Link to={`/blog/${featuredPost.id}`} className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 h-72 lg:h-[420px] overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-accent/15 text-accent-dark">
                      <Sparkles className="w-3 h-3" /> Featured Insight
                    </span>
                    <span className="text-xs text-text-muted font-medium">{featuredPost.category}</span>
                  </div>
                  <h2 className="font-display text-2xl lg:text-3xl text-slate-900 font-extrabold leading-snug mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 font-bold text-slate-800">
                      <User className="w-3.5 h-3.5 text-accent-sage" /> {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Regular Posts Grid */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                <Link to={`/blog/${post.id}`} className="aspect-[16/10] overflow-hidden bg-slate-100 relative block">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-md bg-white/95 text-primary shadow-sm backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </Link>

                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {post.date}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug mb-3">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">{post.author}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1 text-primary font-bold group-hover:translate-x-0.5 transition-transform"
                    >
                      Read Full Article <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg font-bold text-slate-800">No articles found matching your criteria</p>
              <p className="text-sm text-slate-500 mt-2">Try searching for a different keyword or category.</p>
            </div>
          )}

          {/* Newsletter Subscription Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-gradient-to-br from-primary via-[#164235] to-primary-dark rounded-3xl p-8 lg:p-14 text-white text-center relative overflow-hidden shadow-lift"
          >
            <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-accent-blue/20 blur-3xl" />
            <div className="relative max-w-2xl mx-auto space-y-4">
              <span className="inline-block text-xs uppercase tracking-widest font-bold text-accent-gold bg-white/10 px-3 py-1 rounded-full">
                Executive Newsletter
              </span>
              <h3 className="font-display text-2xl lg:text-4xl font-extrabold tracking-tight">
                Get Practical Consulting Insights Delivered Monthly
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                Join over 2,500 business founders, CFOs, and operators receiving curated frameworks on scale, technology, and governance.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 justify-center pt-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your corporate email"
                  className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:bg-white/15 flex-1"
                />
                <Button className="bg-accent hover:bg-accent-dark text-white rounded-xl px-6 py-3 shadow-md font-semibold">
                  Subscribe
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
