import { Leaf, GraduationCap, HandHeart } from 'lucide-react';
import DetailPageTemplate, { type DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'Who We Are / Corporate Responsibility',
  title: 'Giving back where our expertise actually helps',
  description: 'We put our consulting hours to work for causes aligned with what we do best \u2014 not just a check.',
  accent: 'accent-sage',
  crumbLabel: 'Who We Are',
  crumbTo: '/who-we-are',
  overview: [
    'We believe corporate responsibility should draw on what a company is actually good at. As a strategy and operations firm, that means pro-bono consulting hours, not just donations \u2014 helping small nonprofits and social enterprises fix the same structural issues we solve for paying clients.',
    'Every year, a portion of our team\u2019s time is set aside for pro-bono engagements with organizations working in education, rural livelihoods, and environmental sustainability.',
  ],
  highlightsTitle: 'Where we focus',
  highlights: [
    { icon: GraduationCap, title: 'Education access', desc: 'Pro-bono strategy support for nonprofits working on rural and urban education gaps.' },
    { icon: Leaf, title: 'Environmental sustainability', desc: 'Operational efficiency consulting for organizations reducing agricultural and industrial waste.' },
    { icon: HandHeart, title: 'Livelihood programs', desc: 'Structuring and scaling support for rural livelihood and skilling initiatives.' },
  ],
  related: [
    { label: 'Our Story', to: '/who-we-are' },
    { label: 'Mission & Values', to: '/who-we-are/mission-values' },
    { label: 'Careers', to: '/careers' },
  ],
  ctaTitle: 'Working on something we could help with?',
  ctaDesc: 'We review pro-bono requests from mission-aligned organizations year-round.',
};

export default function CorporateResponsibility() {
  return <DetailPageTemplate data={data} />;
}
