import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, TrendingUp, Target, Users2, ArrowUpRight } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import { Button } from '@/components/ui/Button';

const OFFERINGS = [
  { icon: Target, title: 'Market entry', desc: 'Go-to-market plans backed by real demand signals, not guesswork.' },
  { icon: TrendingUp, title: 'Strategic planning', desc: 'A 3-year roadmap your leadership team will actually use.' },
  { icon: Users2, title: 'Competitive analysis', desc: 'Know exactly where you win and where you are exposed.' },
];

const PROCESS = [
  { n: '01', t: 'Discovery workshops', d: 'Two weeks with your leadership team to surface the real constraints.' },
  { n: '02', t: 'Market & data analysis', d: 'We validate assumptions against market data, not opinions.' },
  { n: '03', t: 'Roadmap design', d: 'A phased plan with owners, milestones and success metrics.' },
  { n: '04', t: 'Embedded execution', d: 'We stay through the first 90 days of rollout.' },
];

export default function StrategyConsulting() {
  return (
    <>
      <PageBanner
        eyebrow="Services / Strategy Consulting"
        title="Strategy that survives contact with reality"
        description="We help leadership teams make the handful of decisions that actually move the business — market entry, growth bets, and where to say no."
        accent="accent"
        crumbs={[{ label: 'Services', to: '/services' }, { label: 'Strategy Consulting' }]}
      />

      {/* Overview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              Most strategy work fails not because the thinking is wrong, but because it never
              leaves the deck. Our strategy consulting practice is built to close that gap — we
              combine rigorous market analysis with hands-on planning, so the roadmap your team
              walks away with is one they can actually execute against.
            </p>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mt-5">
              Whether you're entering a new market, defending share against a fast-moving
              competitor, or resetting a three-year plan, we bring the same discipline: validate
              before you commit, sequence before you sprint, and measure before you scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-20 lg:py-28 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl text-text-primary mb-12"
          >
            What we deliver
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {OFFERINGS.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-7"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                  <o.icon className="w-5 h-5 text-accent-dark" />
                </div>
                <h3 className="font-medium text-text-primary text-lg mb-2">{o.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl text-text-primary mb-12"
          >
            Our approach
          </motion.h2>
          <div className="space-y-6">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-6 items-start border-b border-border pb-6 last:border-0"
              >
                <span className="font-display text-2xl text-accent/50 w-12 flex-shrink-0">{step.n}</span>
                <div>
                  <h3 className="font-medium text-text-primary mb-1">{step.t}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats + case highlight */}
      <section className="py-20 lg:py-28 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-accent-gold">Case highlight</span>
            <h2 className="font-display text-3xl mt-3 mb-4">A regional retailer's market entry, from plan to first stores in 9 months</h2>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              We ran the market sizing, built the entry roadmap, and stayed embedded through the
              first two store launches — de-risking a decision that would have otherwise taken
              eighteen months of internal debate.
            </p>
            <Link to="/insights/case-studies" className="inline-flex items-center gap-1 text-sm font-medium text-accent-gold">
              Read the case study <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { v: '9 mo', l: 'Plan to launch' },
              { v: '3', l: 'New store formats validated' },
              { v: '22%', l: 'Above forecast revenue' },
              { v: '4', l: 'Markets assessed' },
            ].map((s) => (
              <div key={s.l} className="bg-white/10 rounded-xl p-5">
                <p className="font-display text-2xl">{s.v}</p>
                <p className="text-xs text-white/60 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-2xl text-text-primary mb-8">Related services</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { t: 'Digital & Technology', to: '/services/digital-technology' },
              { t: 'Operations Consulting', to: '/services/operations-consulting' },
              { t: 'Financial Advisory', to: '/services/financial-advisory' },
            ].map((r) => (
              <Link key={r.t} to={r.to} className="group flex items-center justify-between border border-border rounded-xl px-6 py-5 hover:border-border-strong transition-colors">
                <span className="text-sm font-medium text-text-primary">{r.t}</span>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center bg-surface-alt rounded-3xl py-16 px-8">
          <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-4" />
          <h2 className="font-display text-3xl text-text-primary mb-3">Let's pressure-test your next big bet</h2>
          <p className="text-text-secondary text-sm mb-7 max-w-md mx-auto">30 minutes with a strategy partner, no slide deck required.</p>
          <Button to="/contact">Book a consultation</Button>
        </div>
      </section>
    </>
  );
}
