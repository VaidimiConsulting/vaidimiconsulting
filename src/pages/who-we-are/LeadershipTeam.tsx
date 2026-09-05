import { motion } from 'motion/react';
import PageBanner from '@/components/ui/PageBanner';

// Edit the LEADERS array with real names, titles, and bios.
const LEADERS = [
  { name: 'A. Sharma', title: 'Managing Partner', bio: 'Leads firm strategy and the Financial Consulting practice. 18 years in corporate finance and M&A.' },
  { name: 'P. Nair', title: 'Partner, Marketing & IT', bio: 'Heads Marketing Consulting and IT Consulting. Former operations lead at a national retail chain.' },
  { name: 'R. Verma', title: 'Partner, Promotion & Events', bio: 'Runs the Promotion & Advertisement and Event Management practices. Specializes in field execution and sales impact.' },
  { name: 'S. Iyer', title: 'Partner, HR Consulting', bio: 'Leads recruitment, training, and leadership development engagements across sectors.' },
];

export default function LeadershipTeam() {
  return (
    <>
      <PageBanner
        eyebrow="Who We Are / Leadership Team"
        title="The people setting the standard"
        description="A small partner group, deliberately kept close to client work rather than distant from it."
        accent="accent-sage"
        crumbs={[{ label: 'Who We Are', to: '/who-we-are' }, { label: 'Leadership Team' }]}
      />
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          {LEADERS.map((l, i) => (
            <motion.div key={l.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-card border border-border rounded-2xl p-7 flex gap-5">
              <div className="w-16 h-16 rounded-full bg-accent-sage/20 flex items-center justify-center flex-shrink-0 font-display text-xl text-primary">
                {l.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-medium text-text-primary text-lg">{l.name}</h3>
                <p className="text-xs text-accent-dark font-medium uppercase tracking-wider mt-0.5 mb-2">{l.title}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{l.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
