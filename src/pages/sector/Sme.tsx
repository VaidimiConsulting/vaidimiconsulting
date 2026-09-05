import { TrendingUp, Cog, Users } from 'lucide-react';
import SectorDetailTemplate from '@/components/templates/SectorDetailTemplate';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'Sector / SME',
  title: 'Playbooks for businesses past the founding stage',
  description: 'Strategy and operations support for SMEs scaling beyond what founder instinct alone can carry.',
  accent: 'accent-blue',
  crumbLabel: 'Sector',
  crumbTo: '/sector',
  overview: [
    'The jump from founder-led to professionally managed is where most SMEs stall. We help you build the systems, reporting, and leadership bench that let the business run without every decision passing through one person.',
    'Our SME practice focuses on the handful of structural changes that unlock the next stage of growth \u2014 not a generic maturity framework.',
  ],
  highlightsTitle: 'Where we focus',
  highlights: [
    { icon: TrendingUp, title: 'Growth strategy', desc: 'A roadmap for your next 3 years, sequenced against your actual capacity.' },
    { icon: Cog, title: 'Operational systems', desc: 'Reporting and process infrastructure that scales past the founding team.' },
    { icon: Users, title: 'Leadership bench', desc: 'Building a management layer that can run the business day to day.' },
  ],
  stats: [
    { value: '150+', label: 'SMEs advised' },
    { value: '3.2x', label: 'Avg. revenue growth over engagement' },
  ],
  statsTitle: 'Scaling, without losing what made you good',
  statsDesc: 'We protect what made the business work while fixing what\u2019s stopping it from growing further.',
  related: [
    { label: 'MSME', to: '/sector/msme' },
    { label: 'Retail', to: '/sector/retail' },
    { label: 'Marketing Consulting', to: '/services/marketing-consulting' },
  ],
  ctaTitle: 'Hit a growth ceiling?',
  ctaDesc: 'Let\u2019s find the structural fix, not just another strategy deck.',
};

export default function Sme() {
  return <SectorDetailTemplate data={data} />;
}
