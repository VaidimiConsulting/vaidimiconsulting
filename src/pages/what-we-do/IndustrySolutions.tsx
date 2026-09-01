import { Factory, ShoppingBag, Cpu, Cog, Layers } from 'lucide-react';
import WhatWeDoDetailTemplate from '@/components/templates/WhatWeDoDetailTemplate';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'What We Do / Industry Solutions',
  title: 'Playbooks shaped by the industry, not generic frameworks',
  description: 'Manufacturing, Consumer, Tech, Industry 4.0, and other sectors — solutions built around how each industry actually operates.',
  accent: 'accent-green',
  crumbLabel: 'What We Do',
  crumbTo: '/what-we-do',
  overview: [
    'Generic frameworks break down when applied to specific industries \u2014 a manufacturing cost problem looks nothing like a consumer brand\u2019s growth problem. Our Industry Solutions practice adapts our core methodology to the operating realities of each sector we serve.',
    'This spans traditional industries as well as emerging areas like Industry 4.0 automation and smart manufacturing.',
  ],
  highlightsTitle: 'Where we apply this',
  highlights: [
    { icon: Factory, title: 'Manufacturing', desc: 'Production efficiency, quality systems, and cost structure optimization.' },
    { icon: ShoppingBag, title: 'Consumer', desc: 'Brand and channel strategy for consumer goods and D2C businesses.' },
    { icon: Cpu, title: 'Tech', desc: 'Go-to-market and org design support for technology companies.' },
    { icon: Cog, title: 'Industry 4.0', desc: 'Automation and smart-factory adoption roadmaps.' },
    { icon: Layers, title: 'Other Sectors', desc: 'Custom industry playbooks built for sectors outside our core six.' },
  ],
  related: [
    { label: 'Consulting Practices', to: '/what-we-do/consulting-practices' },
    { label: 'Digital Transformation', to: '/what-we-do/digital-transformation' },
    { label: 'Sector overview', to: '/sector' },
  ],
  ctaTitle: 'Don\u2019t see your industry listed?',
  ctaDesc: 'We build custom playbooks for sectors outside our core focus areas too.',
};

export default function IndustrySolutions() {
  return <WhatWeDoDetailTemplate data={data} />;
}
