import { ScrollText } from 'lucide-react';
import InsightDetailTemplate from '@/components/templates/InsightDetailTemplate';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'Insights / Case Studies',
  title: 'Real engagements, real numbers',
  description: 'Client-approved case studies covering the strategy, execution, and measurable outcomes of our work.',
  accent: 'accent-gold',
  crumbLabel: 'Insights',
  crumbTo: '/insights',
  overview: [
    'Every case study on this page went through client sign-off before publication \u2014 names may be anonymized on request, but the numbers are real. We publish outcomes, not just activities.',
    'Case studies span all five of our service lines and all six sectors we serve.',
  ],
  highlightsTitle: 'Featured case studies',
  highlights: [
    { icon: ScrollText, title: 'Retail market entry in 9 months', desc: 'How a regional retailer went from plan to first stores in under a year.' },
    { icon: ScrollText, title: 'Logistics network redesign', desc: '23% cost-per-delivery reduction without new capital investment.' },
    { icon: ScrollText, title: 'MSME credit readiness', desc: 'How structured financial reporting unlocked \u20b94cr in working capital.' },
  ],
  related: [
    { label: 'Research Reports', to: '/insights/research-reports' },
    { label: 'Latest Articles', to: '/insights/latest-articles' },
    { label: 'Webinars & Events', to: '/insights/webinars-events' },
  ],
  ctaTitle: 'Want to see if we\u2019ve solved your problem before?',
  ctaDesc: 'Tell us your situation \u2014 we\u2019ll point you to the closest relevant case study.',
};

export default function CaseStudies() {
  return <InsightDetailTemplate data={data} />;
}
