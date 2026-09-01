import { motion } from 'motion/react';
import PageBanner from '@/components/ui/PageBanner';

// Edit the NEWS array with your real press mentions and announcements.
const NEWS = [
  { date: 'Jul 2026', title: 'Vaidimi Consulting opens new advisory desk for MSME credit access' },
  { date: 'May 2026', title: 'Partner R. Verma named to Top 40 Operations Consultants list' },
  { date: 'Feb 2026', title: 'Vaidimi crosses 200 MSME clients supported milestone' },
  { date: 'Nov 2025', title: 'New Financial Advisory practice launched, led by A. Sharma' },
];

export default function Newsroom() {
  return (
    <>
      <PageBanner
        eyebrow="Who We Are / Newsroom"
        title="What's new at Vaidimi"
        description="Announcements, press mentions, and firm milestones."
        accent="accent-sage"
        crumbs={[{ label: 'Who We Are', to: '/who-we-are' }, { label: 'Newsroom' }]}
      />
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-1">
          {NEWS.map((n, i) => (
            <motion.div key={n.title} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="flex gap-6 items-start border-b border-border py-6">
              <span className="text-xs text-text-muted w-16 flex-shrink-0 pt-1">{n.date}</span>
              <p className="text-text-primary font-medium">{n.title}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
