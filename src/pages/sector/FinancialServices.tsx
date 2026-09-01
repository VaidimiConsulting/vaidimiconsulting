import { ShieldCheck, TrendingUp, Cloud } from 'lucide-react';
import SectorDetailTemplate from '@/components/templates/SectorDetailTemplate';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'Sector / Financial Services',
  title: 'Risk, compliance and growth strategy for financial institutions',
  description: 'We help banks, NBFCs, and fintechs balance regulatory rigor with the speed they need to grow.',
  accent: 'accent-blue',
  crumbLabel: 'Sector',
  crumbTo: '/sector',
  overview: [
    'Financial institutions operate under some of the tightest scrutiny of any sector \u2014 and the cost of getting risk or compliance wrong is existential. We help leadership teams build the controls regulators expect, without slowing the business to a crawl.',
    'Our sector practice spans traditional lenders, NBFCs, and fintechs, bringing both regulatory depth and genuine growth strategy to the table.',
  ],
  highlightsTitle: 'How we help',
  highlights: [
    { icon: ShieldCheck, title: 'Risk & compliance', desc: 'Controls frameworks that satisfy regulators without freezing product velocity.' },
    { icon: TrendingUp, title: 'Growth strategy', desc: 'New product and segment strategy grounded in your actual risk appetite.' },
    { icon: Cloud, title: 'Digital lending infrastructure', desc: 'Modernize underwriting and disbursal without breaking compliance.' },
  ],
  stats: [
    { value: '12', label: 'Institutions advised' },
    { value: 'Zero', label: 'Regulatory findings post-engagement' },
  ],
  statsTitle: 'Compliant, and still fast',
  statsDesc: 'We\u2019ve never had a client fail an audit on something we built.',
  related: [
    { label: 'Retail', to: '/sector/retail' },
    { label: 'Financial Advisory', to: '/services/financial-advisory' },
    { label: 'MSME', to: '/sector/msme' },
  ],
  ctaTitle: 'Balancing growth against regulatory risk?',
  ctaDesc: 'Let\u2019s find the path that satisfies both your regulator and your board.',
};

export default function FinancialServices() {
  return <SectorDetailTemplate data={data} />;
}
