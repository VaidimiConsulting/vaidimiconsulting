import { TrendingUp, Cloud, Cog } from 'lucide-react';
import WhatWeDoDetailTemplate from '@/components/templates/WhatWeDoDetailTemplate';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'What We Do / Consulting Practices',
  title: 'The three pillars every engagement draws from',
  description: 'Strategy & Growth, Digital Transformation, and Operations & Cost Management — the core disciplines behind everything we deliver.',
  accent: 'accent-green',
  crumbLabel: 'What We Do',
  crumbTo: '/what-we-do',
  overview: [
    'Every engagement at Vaidimi, regardless of sector or business unit, draws on one or more of three core consulting practices. Understanding these helps clients see how our teams are actually structured behind the scenes.',
    'Most complex engagements blend all three \u2014 a market entry program, for example, typically needs strategy work up front, technology decisions in the middle, and operational execution at the end.',
  ],
  highlightsTitle: 'The three practices',
  highlights: [
    { icon: TrendingUp, title: 'Strategy & Growth', desc: 'Market entry, planning, M&A, and competitive positioning.' },
    { icon: Cloud, title: 'Digital Transformation', desc: 'Cloud, data & AI, and cybersecurity capability building.' },
    { icon: Cog, title: 'Operations & Cost Management', desc: 'Process redesign, cost optimization, and supply chain strategy.' },
  ],
  related: [
    { label: 'Strategy & Growth', to: '/what-we-do/strategy-growth' },
    { label: 'Digital Transformation', to: '/what-we-do/digital-transformation' },
    { label: 'HR Consulting (Service)', to: '/services/hr-consulting' },
  ],
  ctaTitle: 'Not sure which practice your problem falls under?',
  ctaDesc: 'Most real problems span more than one \u2014 let\u2019s map yours together.',
};

export default function ConsultingPractices() {
  return <WhatWeDoDetailTemplate data={data} />;
}
