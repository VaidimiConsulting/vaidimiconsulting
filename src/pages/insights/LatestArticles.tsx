import { Lightbulb, TrendingUp, Layers } from 'lucide-react';
import InsightDetailTemplate from '@/components/templates/InsightDetailTemplate';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'Insights / Latest Articles',
  title: 'Short reads on strategy, from the field',
  description: 'Opinionated takes from our consultants \u2014 written from live engagements, not theory.',
  accent: 'accent-gold',
  crumbLabel: 'Insights',
  crumbTo: '/insights',
  overview: [
    'Our articles come out of real client work \u2014 the pattern that showed up across three unrelated engagements, the assumption that kept breaking, the framework that finally worked. We publish when we have something worth saying, not on a content calendar.',
    'New articles are added regularly across strategy, digital transformation, operations, and sector-specific themes.',
  ],
  highlightsTitle: 'What you\u2019ll find here',
  highlights: [
    { icon: Lightbulb, title: 'Field notes', desc: 'Observations from live engagements, generalized where useful.' },
    { icon: TrendingUp, title: 'Sector deep dives', desc: 'What\u2019s actually changing in MSME, retail, logistics, and financial services.' },
    { icon: Layers, title: 'Frameworks', desc: 'The mental models our consultants reach for most often.' },
  ],
  related: [
    { label: 'Research Reports', to: '/insights/research-reports' },
    { label: 'Case Studies', to: '/insights/case-studies' },
    { label: 'Podcasts', to: '/insights/podcasts' },
  ],
  ctaTitle: 'Want these delivered monthly?',
  ctaDesc: 'Subscribe from the footer, or reach out directly to talk through a specific challenge.',
};

export default function LatestArticles() {
  return <InsightDetailTemplate data={data} />;
}
