import { BookOpen, Layers, TrendingUp } from 'lucide-react';
import InsightDetailTemplate from '@/components/templates/InsightDetailTemplate';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'Insights / Whitepapers',
  title: 'The methodology behind our engagements',
  description: 'Frameworks and approaches we use with clients, documented for teams who want to run the thinking themselves.',
  accent: 'accent-gold',
  crumbLabel: 'Insights',
  crumbTo: '/insights',
  overview: [
    'We believe good strategic thinking shouldn\u2019t be a black box. Our whitepapers document the actual frameworks we use inside client engagements \u2014 market entry scoring models, org design principles, cost-to-serve analysis \u2014 so teams can apply the thinking directly.',
    'These are written for practitioners, not marketing \u2014 expect worked examples over buzzwords.',
  ],
  highlightsTitle: 'Popular whitepapers',
  highlights: [
    { icon: BookOpen, title: 'The market entry scorecard', desc: 'A structured model for evaluating new market opportunities.' },
    { icon: Layers, title: 'Org design for scaling teams', desc: 'When to restructure reporting lines, and when to hold steady.' },
    { icon: TrendingUp, title: 'Cost-to-serve analysis', desc: 'A step-by-step guide to true customer and channel profitability.' },
  ],
  related: [
    { label: 'Research Reports', to: '/insights/research-reports' },
    { label: 'Case Studies', to: '/insights/case-studies' },
    { label: 'Marketing Consulting', to: '/services/marketing-consulting' },
  ],
  ctaTitle: 'Want to apply a framework to your business?',
  ctaDesc: 'We\u2019re happy to walk your team through any of these directly.',
};

export default function Whitepapers() {
  return <InsightDetailTemplate data={data} />;
}
