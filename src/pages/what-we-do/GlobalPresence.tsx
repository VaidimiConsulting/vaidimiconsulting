import { Globe2, MapPin, Building } from 'lucide-react';
import WhatWeDoDetailTemplate from '@/components/templates/WhatWeDoDetailTemplate';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'What We Do / Global Presence',
  title: 'Local depth, delivered across three regions',
  description: 'Americas, Europe, and Asia — how our practice reaches clients beyond our home market.',
  accent: 'accent-green',
  crumbLabel: 'What We Do',
  crumbTo: '/what-we-do',
  overview: [
    'While our roots are in India, Vaidimi Consulting supports clients expanding into or operating across the Americas, Europe, and Asia. Cross-border engagements are led by consultants with direct operating experience in the relevant region, not just desk research.',
    'This is particularly relevant for our Market Entry and M&A Advisory work, where local regulatory and cultural context often determines whether a strategy actually works.',
  ],
  highlightsTitle: 'Where we operate',
  highlights: [
    { icon: Globe2, title: 'Americas', desc: 'Market entry and partnership support for businesses expanding into North and South America.' },
    { icon: MapPin, title: 'Europe', desc: 'Regulatory and go-to-market guidance across key European markets.' },
    { icon: Building, title: 'Asia', desc: 'Deep coverage across South and Southeast Asian markets, beyond our home base.' },
  ],
  related: [
    { label: 'Strategy & Growth', to: '/what-we-do/strategy-growth' },
    { label: 'Strategy Consulting (Service)', to: '/services/strategy-consulting' },
    { label: 'Our Story', to: '/who-we-are' },
  ],
  ctaTitle: 'Planning a cross-border move?',
  ctaDesc: 'Let\u2019s talk about which market makes sense first.',
};

export default function GlobalPresence() {
  return <WhatWeDoDetailTemplate data={data} />;
}
