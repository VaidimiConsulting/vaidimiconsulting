import { Mic } from 'lucide-react';
import InsightDetailTemplate from '@/components/templates/InsightDetailTemplate';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'Insights / Podcasts',
  title: 'Conversations with founders and operators we admire',
  description: 'Unscripted conversations about the decisions behind the growth \u2014 not the highlight reel.',
  accent: 'accent-gold',
  crumbLabel: 'Insights',
  crumbTo: '/insights',
  overview: [
    'Our podcast features founders, CFOs, and operators from across the sectors we serve, talking candidly about the decisions that actually mattered \u2014 including the ones that didn\u2019t work out.',
    'New episodes are released periodically and hosted by members of our consulting team.',
  ],
  highlightsTitle: 'Recent episodes',
  highlights: [
    { icon: Mic, title: 'Why we said no to the acquisition offer', desc: 'A founder on the hardest strategic call of their career.' },
    { icon: Mic, title: 'Scaling ops without losing the culture', desc: 'An operations lead on what actually breaks first at 3x headcount.' },
    { icon: Mic, title: 'Reading a balance sheet like an investor', desc: 'A CFO walks through the numbers that matter before any fundraise.' },
  ],
  related: [
    { label: 'Webinars & Events', to: '/insights/webinars-events' },
    { label: 'Case Studies', to: '/insights/case-studies' },
    { label: 'Latest Articles', to: '/insights/latest-articles' },
  ],
  ctaTitle: 'Know someone with a story worth featuring?',
  ctaDesc: 'We\u2019re always looking for operators willing to talk candidly.',
};

export default function Podcasts() {
  return <InsightDetailTemplate data={data} />;
}
