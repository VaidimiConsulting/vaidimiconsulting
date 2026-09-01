import { PiggyBank, Cog, Users } from 'lucide-react';
import SectorDetailTemplate from '@/components/templates/SectorDetailTemplate';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'Sector / MSME',
  title: 'Structured growth for micro and small enterprises',
  description: 'We bring institutional-grade strategy to businesses that rarely get access to it \u2014 sized and priced for MSME budgets.',
  accent: 'accent-blue',
  crumbLabel: 'Sector',
  crumbTo: '/sector',
  overview: [
    'MSMEs drive a huge share of employment and output, but rarely have access to the kind of strategic support larger enterprises take for granted. We built a practice specifically to close that gap \u2014 right-sized engagements, practical deliverables, and pricing that matches your scale.',
    'Whether it\u2019s formalizing your first real financial reporting, accessing credit, or planning your first hire beyond the founding team, we meet you at the stage you\u2019re actually at.',
  ],
  highlightsTitle: 'How we help',
  highlights: [
    { icon: PiggyBank, title: 'Credit & funding readiness', desc: 'Get your financials and documentation investor and lender ready.' },
    { icon: Cog, title: 'Process formalization', desc: 'Systems that scale past a single founder holding everything in their head.' },
    { icon: Users, title: 'First leadership hires', desc: 'Structuring your team for the next 10x, not just the next quarter.' },
  ],
  stats: [
    { value: '200+', label: 'MSMEs supported' },
    { value: '\u20b940cr+', label: 'Credit facilitated' },
    { value: '65%', label: 'Reported revenue growth within a year' },
  ],
  statsTitle: 'Growth you can measure',
  statsDesc: 'Our MSME clients see results fast because the fixes are usually structural, not strategic.',
  related: [
    { label: 'SME', to: '/sector/sme' },
    { label: 'Agribusiness', to: '/sector/agribusiness' },
    { label: 'Talent & Organization', to: '/services/talent-organization' },
  ],
  ctaTitle: 'Ready to formalize your growth?',
  ctaDesc: 'Book a free assessment \u2014 most MSME engagements start there.',
};

export default function Msme() {
  return <SectorDetailTemplate data={data} />;
}
