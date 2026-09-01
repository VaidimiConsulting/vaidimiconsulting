import { Cloud, Database, ShieldAlert } from 'lucide-react';
import WhatWeDoDetailTemplate from '@/components/templates/WhatWeDoDetailTemplate';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'What We Do / Digital Transformation',
  title: 'Technology decisions that hold up in three years, not three months',
  description: 'Cloud solutions, data & AI, and cybersecurity — built to compound, not just launch.',
  accent: 'accent-green',
  crumbLabel: 'What We Do',
  crumbTo: '/what-we-do',
  overview: [
    'Digital Transformation at Vaidimi isn\u2019t about chasing the newest tooling \u2014 it\u2019s about making the two or three technology bets that will actually still matter in three years, and executing them properly.',
    'We work across cloud infrastructure, data and AI capability building, and cybersecurity, usually as an extension of a broader strategy or operations engagement.',
  ],
  highlightsTitle: 'What this includes',
  highlights: [
    { icon: Cloud, title: 'Cloud Solutions', desc: 'Migration and cost-optimized architecture sized to your real traffic.' },
    { icon: Database, title: 'Data & AI', desc: 'Clean data pipelines and production-ready AI use cases, not proofs of concept.' },
    { icon: ShieldAlert, title: 'Cybersecurity', desc: 'Practical risk controls that satisfy auditors without slowing product velocity.' },
  ],
  related: [
    { label: 'Digital & Technology (Service)', to: '/services/digital-technology' },
    { label: 'Strategy & Growth', to: '/what-we-do/strategy-growth' },
    { label: 'Industry Solutions', to: '/what-we-do/industry-solutions' },
  ],
  ctaTitle: 'Not sure which tech bet is worth making?',
  ctaDesc: 'We\u2019ll help you separate the noise from what will actually compound.',
};

export default function DigitalTransformation() {
  return <WhatWeDoDetailTemplate data={data} />;
}
