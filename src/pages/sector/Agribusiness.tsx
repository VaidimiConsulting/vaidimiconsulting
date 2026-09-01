import { Truck, TrendingUp, ShieldCheck } from 'lucide-react';
import SectorDetailTemplate from '@/components/templates/SectorDetailTemplate';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'Sector / Agribusiness',
  title: 'Market access and supply chain strategy for agri-value chains',
  description: 'From farm-gate to retail shelf, we help agribusinesses build supply chains that hold up under volatility.',
  accent: 'accent-blue',
  crumbLabel: 'Sector',
  crumbTo: '/sector',
  overview: [
    'Agribusiness margins live and die on supply chain efficiency and market access. We work with producers, processors, and distributors to reduce spoilage, shorten cycle times, and open new market channels.',
    'Our approach combines on-ground supply chain diagnostics with the market and financial strategy needed to act on what we find.',
  ],
  highlightsTitle: 'How we help',
  highlights: [
    { icon: Truck, title: 'Supply chain redesign', desc: 'Reduce spoilage and cycle time from farm to final buyer.' },
    { icon: TrendingUp, title: 'Market access strategy', desc: 'Identify and enter new buyer channels, domestic and export.' },
    { icon: ShieldCheck, title: 'Quality & compliance', desc: 'Meet certification and export standards without slowing operations.' },
  ],
  stats: [
    { value: '22%', label: 'Avg. spoilage reduction' },
    { value: '18', label: 'New market channels opened' },
  ],
  statsTitle: 'Efficiency where it matters most',
  statsDesc: 'In agribusiness, margin is won or lost in the supply chain \u2014 that\u2019s where we focus.',
  related: [
    { label: 'Logistics', to: '/sector/logistics' },
    { label: 'MSME', to: '/sector/msme' },
    { label: 'Operations Consulting', to: '/services/operations-consulting' },
  ],
  ctaTitle: 'Losing margin to spoilage or delays?',
  ctaDesc: 'A supply chain audit usually surfaces the fix within weeks.',
};

export default function Agribusiness() {
  return <SectorDetailTemplate data={data} />;
}
