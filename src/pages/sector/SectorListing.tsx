import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Building2, Store, Tractor, Truck, Landmark, ShoppingBag, ArrowUpRight } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';

const SECTORS = [
  { slug: 'msme', title: 'MSME', desc: 'Structured growth support for micro, small and medium enterprises.', icon: Building2 },
  { slug: 'sme', title: 'SME', desc: 'Scaling playbooks for businesses moving past their founding stage.', icon: Store },
  { slug: 'agribusiness', title: 'Agribusiness', desc: 'Supply chain and market access strategy for agri-value chains.', icon: Tractor },
  { slug: 'logistics', title: 'Logistics', desc: 'Network design and cost efficiency for logistics operators.', icon: Truck },
  { slug: 'financial-services', title: 'Financial Services', desc: 'Risk, compliance and growth strategy for financial institutions.', icon: Landmark },
  { slug: 'retail', title: 'Retail', desc: 'Omnichannel strategy and store economics for retail brands.', icon: ShoppingBag },
];

export default function SectorListing() {
  return (
    <>
      <PageBanner
        eyebrow="Sector"
        title="Deep experience across six core sectors"
        description="We don't generalize. Every sector practice is led by consultants who've worked inside it."
        accent="accent-blue"
        crumbs={[{ label: 'Sector' }]}
      />
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS.map((s, i) => (
            <motion.div key={s.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}>
              <Link to={`/sector/${s.slug}`} className="group block h-full bg-card border border-border rounded-2xl p-7 hover:border-border-strong hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-accent-blue/15 flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-primary" />
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
