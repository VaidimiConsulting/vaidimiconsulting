import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Heart, Target, Users, ArrowUpRight } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import { Button } from '@/components/ui/Button';

// This is the /who-we-are index page (also linked as "Our Story" in the menu).
export default function OurStory() {
  return (
    <>
      <PageBanner
        eyebrow="Who We Are / Our Story"
        title="Guidance, growth, success — the story behind the name"
        description="Vaidimi Consulting was built on a simple belief: good strategy should be judged by what changes, not what's written."
        accent="accent-sage"
        crumbs={[{ label: 'Who We Are' }]}
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-5">
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-text-secondary text-base md:text-lg leading-relaxed">
            {/* Edit this section with your real founding story */}
            We started Vaidimi Consulting because too many strategy engagements ended with a
            polished deck and no real change in the business. Our founders came from operating
            roles, not just advisory ones — and built the firm around a simple standard: we stay
            until the plan actually shows up in the numbers.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.06 }} className="text-text-secondary text-base md:text-lg leading-relaxed">
            Today, we work across five practices and six sectors, guided by the same principle
            our name reflects — guidance, growth, and success, built together with the businesses
            we serve.
          </motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl text-text-primary mb-12">What we stand for</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: 'Outcomes over decks', desc: 'We measure success by what changed in the business, not what was presented.' },
              { icon: Heart, title: 'Honesty, even when inconvenient', desc: 'We tell clients what they need to hear, not just what they want to hear.' },
              { icon: Users, title: 'Embedded, not distant', desc: 'We work alongside your team, not from behind a slide deck.' },
            ].map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-card border border-border rounded-2xl p-7">
                <div className="w-11 h-11 rounded-xl bg-accent-sage/15 flex items-center justify-center mb-5">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-medium text-text-primary text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-2xl text-text-primary mb-8">More about us</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { label: 'Leadership Team', to: '/who-we-are/leadership-team' },
              { label: 'Mission & Values', to: '/who-we-are/mission-values' },
              { label: 'Newsroom', to: '/who-we-are/newsroom' },
              { label: 'Corporate Responsibility', to: '/who-we-are/corporate-responsibility' },
            ].map((r) => (
              <Link key={r.label} to={r.to} className="group flex items-center justify-between border border-border rounded-xl px-6 py-5 hover:border-border-strong transition-colors">
                <span className="text-sm font-medium text-text-primary">{r.label}</span>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center bg-surface-alt rounded-3xl py-16 px-8">
          <h2 className="font-display text-3xl text-text-primary mb-3">Want to work with us?</h2>
          <p className="text-text-secondary text-sm mb-7 max-w-md mx-auto">We're always happy to have a first conversation, no obligation attached.</p>
          <Button to="/contact">Get in touch</Button>
        </div>
      </section>
    </>
  );
}
