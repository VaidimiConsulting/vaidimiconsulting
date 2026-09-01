import { Handshake, PiggyBank, ShieldCheck } from 'lucide-react';
import DetailPageTemplate, { type DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'Services / Financial Advisory',
  title: 'Financial clarity for high-stakes decisions',
  description: 'M&A, capital structuring and due diligence support for the moments where getting it wrong is expensive.',
  accent: 'accent-gold',
  crumbLabel: 'Services',
  crumbTo: '/services',
  overview: [
    'Whether you\u2019re raising capital, acquiring a competitor, or restructuring your balance sheet, the quality of your financial advisory partner determines how much risk you\u2019re carrying without knowing it.',
    'We bring the same rigor institutional investors expect \u2014 clean models, defensible assumptions, and a clear-eyed view of downside scenarios \u2014 directly to your leadership team.',
  ],
  highlightsTitle: 'What we deliver',
  highlights: [
    { icon: Handshake, title: 'M&A advisory', desc: 'Deal sourcing, valuation, and negotiation support from term sheet to close.' },
    { icon: PiggyBank, title: 'Capital structuring', desc: 'Debt and equity mix recommendations aligned to your growth stage and risk appetite.' },
    { icon: ShieldCheck, title: 'Financial due diligence', desc: 'Independent, investor-grade diligence that protects you before you sign.' },
  ],
  stats: [
    { value: '\u20b9850cr+', label: 'Transaction value advised' },
    { value: '24', label: 'Deals closed' },
    { value: '12', label: 'Capital raises supported' },
  ],
  statsTitle: 'Numbers our clients can stand behind',
  statsDesc: 'Every model we hand over is one your board can defend in the room.',
  quote: { text: 'Their diligence caught a liability the seller never disclosed. That alone paid for the engagement three times over.', author: 'Founder, Financial Services client' },
  related: [
    { label: 'Strategy Consulting', to: '/services/strategy-consulting' },
    { label: 'Operations Consulting', to: '/services/operations-consulting' },
    { label: 'Talent & Organization', to: '/services/talent-organization' },
  ],
  ctaTitle: 'Weighing a deal or a raise?',
  ctaDesc: 'Get an independent read before you\u2019re locked into terms.',
};

export default function FinancialAdvisory() {
  return <DetailPageTemplate data={data} />;
}
