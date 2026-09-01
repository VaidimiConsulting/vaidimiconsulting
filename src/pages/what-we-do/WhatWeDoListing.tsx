import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Compass, Cloud, Landmark, Factory, Layers, Globe2, ArrowUpRight } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';

const CATEGORIES = [
  { slug: 'strategy-growth', title: 'Strategy & Growth', desc: 'Market entry, strategic planning, M&A advisory, competitive analysis.', icon: Compass },
  { slug: 'digital-transformation', title: 'Digital Transformation', desc: 'Cloud solutions, data & AI, cybersecurity.', icon: Cloud },
  { slug: 'business-units', title: 'Business Units', desc: 'Financial Services, Healthcare, Loan Management, Tailored Consulting.', icon: Landmark },
  { slug: 'industry-solutions', title: 'Industry Solutions', desc: 'Manufacturing, Consumer, Tech, Industry 4.0, and more.', icon: Factory },
  { slug: 'consulting-practices', title: 'Consulting Practices', desc: 'The three core disciplines behind every engagement.', icon: Layers },
  { slug: 'global-presence', title: 'Global Presence', desc: 'Americas, Europe, Asia.', icon: Globe2 },
];

export default function WhatWeDoListing() {
  return (
    <>
      <PageBanner
        eyebrow="What We Do"
        title="How Vaidimi Consulting is organized"
        description="Six areas that together cover strategy, technology, operations, and global reach."
        accent="accent-green"
        crumbs={[{ label: 'What We Do' }]}
      />
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((c, i) => (
            <motion.div key={c.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}>
              <Link to={`/what-we-do/${c.slug}`} className="group block h-full bg-card border border-border rounded-2xl p-7 hover:border-border-strong hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-accent-green/15 flex items-center justify-center mb-5">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-medium text-text-primary text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{c.desc}</p>
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
