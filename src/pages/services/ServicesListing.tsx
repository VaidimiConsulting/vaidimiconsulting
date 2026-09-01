import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, ShieldCheck, Landmark, Users, ArrowUpRight } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';

// Edit this list to add/remove/reorder service cards shown on /services
const SERVICES = [
  { slug: 'strategy-consulting', title: 'Strategy Consulting', desc: 'Market entry, strategic planning and competitive positioning.', icon: TrendingUp },
  { slug: 'digital-technology', title: 'Digital & Technology', desc: 'Cloud, data, AI and cybersecurity for a resilient business.', icon: BarChart3 },
  { slug: 'operations-consulting', title: 'Operations Consulting', desc: 'Process redesign and cost optimization that sticks.', icon: ShieldCheck },
  { slug: 'financial-advisory', title: 'Financial Advisory', desc: 'M&A, capital structuring and financial due diligence.', icon: Landmark },
  { slug: 'talent-organization', title: 'Talent & Organization', desc: 'Org design, leadership development and culture change.', icon: Users },
];

export default function ServicesListing() {
  return (
    <>
      <PageBanner
        eyebrow="Services"
        title="Consulting built around your growth stage"
        description="Five practices, one goal: turning your hardest business decisions into clear, executable plans."
        accent="accent"
        crumbs={[{ label: 'Services' }]}
      />
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div key={s.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}>
              <Link to={`/services/${s.slug}`} className="group block h-full bg-card border border-border rounded-2xl p-7 hover:border-border-strong hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-accent-dark" />
                </div>
                <h3 className="font-medium text-text-primary text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
