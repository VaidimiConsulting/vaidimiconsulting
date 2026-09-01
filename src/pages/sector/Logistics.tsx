import { Truck, Cloud, PiggyBank } from 'lucide-react';
import SectorDetailTemplate from '@/components/templates/SectorDetailTemplate';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'Sector / Logistics',
  title: 'Network design for cost and reliability',
  description: 'We help logistics operators redesign networks and pricing models to stay competitive as fuel and labor costs rise.',
  accent: 'accent-blue',
  crumbLabel: 'Sector',
  crumbTo: '/sector',
  overview: [
    'Logistics margins are thin and getting thinner. We work with operators to redesign routing, warehouse networks, and pricing models \u2014 usually finding 15-25% in recoverable cost without new capital investment.',
    'We also support technology adoption, from route optimization software to fleet telematics, scoped to what your operation can realistically absorb.',
  ],
  highlightsTitle: 'Where we focus',
  highlights: [
    { icon: Truck, title: 'Network & route design', desc: 'Rework hub placement and routing for lower cost per delivery.' },
    { icon: Cloud, title: 'Technology adoption', desc: 'Route optimization and telematics that pay for themselves within a year.' },
    { icon: PiggyBank, title: 'Pricing strategy', desc: 'Repricing models that reflect true cost-to-serve by lane.' },
  ],
  stats: [
    { value: '23%', label: 'Avg. cost-per-delivery reduction' },
    { value: '35+', label: 'Networks redesigned' },
  ],
  statsTitle: 'Margin recovered without new capex',
  statsDesc: 'Most of our logistics engagements pay for themselves within the first two quarters.',
  related: [
    { label: 'Agribusiness', to: '/sector/agribusiness' },
    { label: 'Digital & Technology', to: '/services/digital-technology' },
    { label: 'Operations Consulting', to: '/services/operations-consulting' },
  ],
  ctaTitle: 'Cost per delivery creeping up?',
  ctaDesc: 'We\u2019ll map where your network is bleeding margin.',
};

export default function Logistics() {
  return <SectorDetailTemplate data={data} />;
}
