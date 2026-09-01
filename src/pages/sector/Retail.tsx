import { ShoppingBag, TrendingUp, Cloud } from 'lucide-react';
import SectorDetailTemplate from '@/components/templates/SectorDetailTemplate';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'Sector / Retail',
  title: 'Omnichannel strategy and store economics',
  description: 'We help retail brands get store unit economics right and build genuinely connected online and offline experiences.',
  accent: 'accent-blue',
  crumbLabel: 'Sector',
  crumbTo: '/sector',
  overview: [
    'Retail is unforgiving on unit economics \u2014 a store that "feels" successful can still be quietly losing money. We help brands get a clear-eyed view of store-level profitability, and build omnichannel strategy that actually converts, not just adds channels.',
    'From new market entry to online-offline integration, our retail practice is built around one question: does this location, channel, or format make money on its own?',
  ],
  highlightsTitle: 'Where we focus',
  highlights: [
    { icon: ShoppingBag, title: 'Store economics', desc: 'Unit-level profitability analysis across your existing footprint.' },
    { icon: TrendingUp, title: 'Market entry & format strategy', desc: 'Validated store formats and locations before you sign a lease.' },
    { icon: Cloud, title: 'Omnichannel integration', desc: 'Online and offline experiences that share inventory, not just branding.' },
  ],
  stats: [
    { value: '22%', label: 'Avg. revenue lift post-optimization' },
    { value: '40+', label: 'Store formats evaluated' },
  ],
  statsTitle: 'Every store, accountable on its own numbers',
  statsDesc: 'We don\u2019t let a strong brand mask a weak location.',
  quote: { text: 'They found three stores that were quietly losing money for two years. Nobody had run the numbers that way before.', author: 'VP Operations, Retail sector client' },
  related: [
    { label: 'SME', to: '/sector/sme' },
    { label: 'Strategy Consulting', to: '/services/strategy-consulting' },
    { label: 'Financial Services', to: '/sector/financial-services' },
  ],
  ctaTitle: 'Not sure which stores are actually profitable?',
  ctaDesc: 'A store-level economics review usually pays for itself within the quarter.',
};

export default function Retail() {
  return <SectorDetailTemplate data={data} />;
}
