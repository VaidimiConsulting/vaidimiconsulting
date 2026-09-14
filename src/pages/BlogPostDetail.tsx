import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowUpRight,
  Share2,
  CheckCircle2,
  Linkedin,
  Twitter,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import { Button } from '@/components/ui/Button';
import { getBlogPostById, BLOG_POSTS } from '@/data/blogPosts';

export default function BlogPostDetail() {
  const { id } = useParams<{ id: string }>();
  const post = getBlogPostById(id || '');

  if (!post) {
    return (
      <div className="py-32 text-center bg-white min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="font-display text-3xl font-bold text-slate-900 mb-3">Article Not Found</h2>
        <p className="text-slate-600 mb-6">The article you are looking for does not exist or has been relocated.</p>
        <Button to="/blog" className="rounded-full">
          &larr; Return to Blog
        </Button>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <>
      <PageBanner
        eyebrow={post.tagline || `Insights / ${post.category}`}
        title={post.title}
        description={post.excerpt}
        accent="accent"
        crumbs={[{ label: 'Blog & Articles', to: '/blog' }, { label: post.title }]}
      />

      <article className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          {/* Metadata & Author Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-slate-200/80">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-primary border border-emerald-200/60 flex items-center justify-center font-bold text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-display font-bold text-slate-900 text-base leading-none">{post.author}</p>
                <p className="text-xs text-slate-500 mt-1">{post.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" /> {post.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" /> {post.readTime}
              </span>
              <span>·</span>
              <button
                onClick={handleShare}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" /> Share
              </button>
            </div>
          </div>

          {/* Hero Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-card border border-slate-200/90 mb-14"
          >
            <img src={post.image} alt={post.title} className="w-full max-h-[480px] object-cover" />
          </motion.div>

          {/* Key Takeaways Callout Box */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-14 p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-soft"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-accent" />
                <h3 className="font-display font-bold text-slate-900 text-lg uppercase tracking-wider">
                  Executive Takeaways & Strategic Summary
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                {post.keyTakeaways.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                    <p className="text-sm font-medium text-slate-700 leading-snug">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Body Content Sections */}
          <div className="space-y-12 text-slate-700 text-base sm:text-lg leading-relaxed">
            {post.sections.map((sec, idx) => (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  {sec.heading}
                </h3>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed text-slate-600">
                    {p}
                  </p>
                ))}

                {sec.bullets && sec.bullets.length > 0 && (
                  <ul className="space-y-2.5 pt-2 pl-2">
                    {sec.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base font-medium text-slate-800">
                        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.image && (
                  <div className="my-6 rounded-2xl overflow-hidden border border-slate-200/80 shadow-soft">
                    <img src={sec.image} alt={sec.heading} className="w-full h-auto object-cover" />
                    {sec.imageCaption && (
                      <p className="text-xs text-slate-500 italic p-3 bg-slate-50 border-t border-slate-100 text-center">
                        {sec.imageCaption}
                      </p>
                    )}
                  </div>
                )}
              </motion.section>
            ))}

            {/* Conclusion */}
            {post.conclusion && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-3xl bg-emerald-50/70 border border-emerald-200/60 mt-12"
              >
                <h4 className="font-display font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" /> The Bottom Line
                </h4>
                <p className="text-slate-700 text-base leading-relaxed italic">
                  "{post.conclusion}"
                </p>
              </motion.div>
            )}
          </div>

          {/* Author Bio Card */}
          <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-soft flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center font-display font-bold text-2xl flex-shrink-0">
              {post.author.charAt(0)}
            </div>
            <div className="space-y-1 text-center sm:text-left flex-1">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Authored By</p>
              <h4 className="font-display font-bold text-slate-900 text-xl">{post.author}</h4>
              <p className="text-xs text-slate-500">{post.authorRole}</p>
              <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                Advising growing mid-market enterprises across strategy, digital infrastructure, and commercial execution.
              </p>
            </div>
            <Button to="/contact" className="rounded-full text-xs font-semibold px-5 py-2.5 flex-shrink-0">
              Consult with Author
            </Button>
          </div>

          {/* Back to blog link */}
          <div className="pt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-semibold text-sm text-primary hover:text-primary-light transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to all articles
            </Link>
          </div>
        </div>
      </article>

      {/* Related Insights */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-primary bg-emerald-50 px-3 py-1 rounded-full">
                Related Reading
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Continue Exploring Executive Insights
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/blog/${rel.id}`}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-2">
                      {rel.category}
                    </span>
                    <h4 className="font-display font-bold text-slate-900 text-base group-hover:text-primary transition-colors leading-snug mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-primary">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
