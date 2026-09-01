import { Landmark, HeartPulse, PiggyBank, Sparkles } from 'lucide-react';
import WhatWeDoDetailTemplate from '@/components/templates/WhatWeDoDetailTemplate';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'What We Do / Business Units',
  title: 'Specialized units built around specific business problems',
  description: 'Financial Services, Healthcare Solutions, Loan Management, and Tailored Consulting — dedicated teams, not generalist coverage.',
  accent: 'accent-green',
  crumbLabel: 'What We Do',
  crumbTo: '/what-we-do',
  overview: [
    'Some problems need more than a project team \u2014 they need a dedicated unit that understands the domain deeply. Our Business Units are standing teams built around specific, recurring client needs.',
    'Each unit operates with its own specialists, playbooks, and delivery model, while drawing on the broader firm\u2019s strategy and operations capability when needed.',
  ],
  highlightsTitle: 'Our business units',
  highlights: [
    { icon: Landmark, title: 'Financial Services', desc: 'Dedicated support for banks, NBFCs, and fintechs on risk, compliance, and growth.' },
    { icon: HeartPulse, title: 'Healthcare Solutions', desc: 'Operations and strategy support for healthcare providers and health-tech companies.' },
    { icon: PiggyBank, title: 'Loan Management', desc: 'Underwriting, collections, and portfolio strategy for lending businesses.' },
    { icon: Sparkles, title: 'Tailored Consulting', desc: 'Custom-scoped engagements for problems that don\u2019t fit a standard practice area.' },
  ],
  related: [
    { label: 'Financial Services (Sector)', to: '/sector/financial-services' },
    { label: 'Strategy & Growth', to: '/what-we-do/strategy-growth' },
    { label: 'Consulting Practices', to: '/what-we-do/consulting-practices' },
  ],
  ctaTitle: 'Have a problem that doesn\u2019t fit a standard box?',
  ctaDesc: 'That\u2019s exactly what Tailored Consulting is for \u2014 let\u2019s talk.',
};

export default function BusinessUnits() {
  return <WhatWeDoDetailTemplate data={data} />;
}
