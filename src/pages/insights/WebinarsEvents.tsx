import { Video } from 'lucide-react';
import InsightDetailTemplate from '@/components/templates/InsightDetailTemplate';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'Insights / Webinars & Events',
  title: 'Live conversations with our partners and guests',
  description: 'Sessions on strategy, growth, and sector-specific challenges \u2014 hosted by our team and guest operators.',
  accent: 'accent-gold',
  crumbLabel: 'Insights',
  crumbTo: '/insights',
  overview: [
    'We run periodic webinars and in-person events on the themes our clients are actually wrestling with \u2014 from credit access for MSMEs to digital transformation playbooks for mid-market retailers.',
    'Sessions are free to attend and open to prospective clients, current clients, and industry peers.',
  ],
  highlightsTitle: 'Upcoming and recent sessions',
  highlights: [
    { icon: Video, title: 'Financing growth without diluting control', desc: 'A panel with two founders who raised debt instead of equity.' },
    { icon: Video, title: 'Retail unit economics workshop', desc: 'A hands-on session walking through our store-level profitability model.' },
    { icon: Video, title: 'AI adoption for mid-market logistics', desc: 'What\u2019s realistic to implement in the next 12 months, and what isn\u2019t.' },
  ],
  related: [
    { label: 'Podcasts', to: '/insights/podcasts' },
    { label: 'Latest Articles', to: '/insights/latest-articles' },
    { label: 'Whitepapers', to: '/insights/whitepapers' },
  ],
  ctaTitle: 'Want an invite to the next session?',
  ctaDesc: 'Subscribe from the footer or reach out and we\u2019ll add you to the list.',
};

export default function WebinarsEvents() {
  return <InsightDetailTemplate data={data} />;
}
