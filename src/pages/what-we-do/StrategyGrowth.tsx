import { Compass, ClipboardList, Handshake, BarChart3 } from 'lucide-react';
import WhatWeDoDetailTemplate from '@/components/templates/WhatWeDoDetailTemplate';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'What We Do / Strategy & Growth',
  title: 'The decisions that set your next five years',
  description: 'Market entry, strategic planning, M&A advisory and competitive analysis — the practice areas behind our biggest client outcomes.',
  accent: 'accent-green',
  crumbLabel: 'What We Do',
  crumbTo: '/what-we-do',
  overview: [
    'Strategy & Growth is the founding practice at Vaidimi \u2014 the work our name is built around. It covers the handful of decisions that shape a company\u2019s trajectory: where to expand, what to prioritize, and when to walk away from a deal.',
    'This practice area spans four connected disciplines, each of which can be engaged independently or as part of a broader strategy program.',
  ],
  highlightsTitle: 'What this includes',
  highlights: [
    { icon: Compass, title: 'Market Entry', desc: 'Go-to-market plans backed by real demand validation before you commit capital.' },
    { icon: ClipboardList, title: 'Strategic Planning', desc: 'Multi-year roadmaps sequenced against your team\u2019s actual capacity.' },
    { icon: Handshake, title: 'M&A Advisory', desc: 'Deal sourcing, valuation, and negotiation support from term sheet to close.' },
    { icon: BarChart3, title: 'Competitive Analysis', desc: 'Structured intelligence on where you win, and where you\u2019re exposed.' },
  ],
  related: [
    { label: 'Strategy Consulting (Service)', to: '/services/strategy-consulting' },
    { label: 'Digital Transformation', to: '/what-we-do/digital-transformation' },
    { label: 'Consulting Practices', to: '/what-we-do/consulting-practices' },
  ],
  ctaTitle: 'Facing a decision that will shape the next five years?',
  ctaDesc: 'Let\u2019s pressure-test it together before you commit.',
};

export default function StrategyGrowth() {
  return <WhatWeDoDetailTemplate data={data} />;
}
