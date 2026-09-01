import { Cloud, Database, Lock } from 'lucide-react';
import DetailPageTemplate, { type DetailPageData } from '@/components/templates/DetailPageTemplate';

// Edit any text below to update this page's content.
const data: DetailPageData = {
  eyebrow: 'Services / Digital & Technology',
  title: 'Technology that earns its budget line',
  description:
    'We help teams modernize infrastructure, unlock their data, and close security gaps — without a multi-year rebuild.',
  accent: 'accent-blue',
  crumbLabel: 'Services',
  crumbTo: '/services',
  overview: [
    'Most digital transformation programs stall because they try to change everything at once. We take a narrower path: identify the two or three technology bets that actually move revenue or cost, and execute those completely before moving on.',
    'From cloud migration to building your first real data pipeline, our engagements are scoped to ship something usable within the first quarter — not a 40-page architecture document.',
  ],
  highlightsTitle: 'What we deliver',
  highlights: [
    { icon: Cloud, title: 'Cloud solutions', desc: 'Migration and cost-optimized cloud architecture built for your actual traffic, not hypothetical scale.' },
    { icon: Database, title: 'Data & AI', desc: 'From clean data pipelines to your first production AI use case, shipped and monitored.' },
    { icon: Lock, title: 'Cybersecurity', desc: 'Practical risk assessments and controls that satisfy auditors without slowing your team down.' },
  ],
  stats: [
    { value: '40%', label: 'Avg. infra cost reduction' },
    { value: '6 wks', label: 'To first shipped milestone' },
    { value: '30+', label: 'Migrations delivered' },
    { value: 'Zero', label: 'Downtime incidents' },
  ],
  statsTitle: 'A track record built on shipped work',
  statsDesc: 'We measure ourselves on what went live, not what was scoped.',
  quote: { text: 'They didn\u2019t sell us a platform. They fixed the three things that were actually slowing us down.', author: 'Anil Kapoor, Head of IT \u2014 Logistics sector client' },
  related: [
    { label: 'Operations Consulting', to: '/services/operations-consulting' },
    { label: 'Strategy Consulting', to: '/services/strategy-consulting' },
    { label: 'Talent & Organization', to: '/services/talent-organization' },
  ],
  ctaTitle: 'Have a system that\u2019s holding you back?',
  ctaDesc: 'Tell us what\u2019s slow, brittle, or insecure \u2014 we\u2019ll tell you what\u2019s actually worth fixing first.',
};

export default function DigitalTechnology() {
  return <DetailPageTemplate data={data} />;
}
