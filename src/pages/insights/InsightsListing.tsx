import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Newspaper, FileText, BookOpen, ScrollText, Video, Mic, ArrowUpRight } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';

const INSIGHTS = [
  { slug: 'latest-articles', title: 'Latest Articles', desc: 'Short, opinionated reads on strategy and growth.', icon: Newspaper },
  { slug: 'research-reports', title: 'Research Reports', desc: 'Deep-dive sector research from our advisory team.', icon: FileText },
  { slug: 'whitepapers', title: 'Whitepapers', desc: 'Frameworks and methodology behind our engagements.', icon: BookOpen },
  { slug: 'case-studies', title: 'Case Studies', desc: 'Real engagements, real numbers, client-approved.', icon: ScrollText },
  { slug: 'webinars-events', title: 'Webinars & Events', desc: 'Live sessions with our partners and guest leaders.', icon: Video },
  { slug: 'podcasts', title: 'Podcasts', desc: 'Conversations with founders and operators we admire.', icon: Mic },
];

export default function InsightsListing() {
  return (
    <>
      <PageBanner
        eyebrow="Insights"
        title="Ideas, research, and real conversations"
        description="Everything we publish comes out of real client work \u2014 not a content calendar."
        accent="accent-gold"
        crumbs={[{ label: 'Insights' }]}
      />
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSIGHTS.map((s, i) => (
            <motion.div key={s.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}>
              <Link to={`/insights/${s.slug}`} className="group block h-full bg-card border border-border rounded-2xl p-7 hover:border-border-strong hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-accent-gold/15 flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-medium text-text-primary text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
