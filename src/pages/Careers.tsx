import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Heart, ArrowUpRight } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import { Button } from '@/components/ui/Button';

// Edit the OPENINGS array with your real job listings.
const OPENINGS = [
  { title: 'Senior Consultant, Marketing Consulting', location: 'Lucknow · Full-time' },
  { title: 'Consultant, IT Consulting', location: 'Lucknow · Full-time' },
  { title: 'Analyst, Financial Consulting', location: 'Lucknow · Full-time' },
  { title: 'Associate, HR Consulting', location: 'Remote · Full-time' },
];

export default function Careers() {
  return (
    <>
      <PageBanner
        eyebrow="Who We Are / Careers"
        title="Build your career on real client outcome"
        description="We hire people who'd rather be measured by what changed in a client's business than by hours billed."
        accent="accent-sage"
        crumbs={[{ label: 'Who We Are', to: '/who-we-are' }, { label: 'Careers' }]}
      />

      <section className="py-20 lg:py-28 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-6">
          {[
            { icon: Briefcase, title: 'Real ownership', desc: 'Consultants lead workstreams directly with clients from month one, not year three.' },
            { icon: GraduationCap, title: 'Structured mentorship', desc: 'Every consultant is paired with a partner for the length of their first year.' },
            { icon: Heart, title: 'Sustainable pace', desc: 'We staff engagements to avoid the all-nighter culture common in the industry.' },
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
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl text-text-primary mb-10">Current openings</h2>
          <div className="space-y-3">
            {OPENINGS.map((o, i) => (
              <motion.div key={o.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group flex items-center justify-between border border-border rounded-xl px-6 py-5 hover:border-border-strong transition-colors">
                <div>
                  <p className="font-medium text-text-primary">{o.title}</p>
                  <p className="text-xs text-text-muted mt-1">{o.location}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center bg-primary rounded-3xl py-16 px-8">
          <h2 className="font-display text-3xl text-white mb-3">Don't see the right role?</h2>
          <p className="text-white/70 text-sm mb-7 max-w-md mx-auto">We're always open to hearing from strong candidates, even without a matching opening.</p>
          <Button to="/contact" className="bg-white text-primary hover:bg-white/90">Send us your profile</Button>
        </div>
      </section>
    </>
  );
}
