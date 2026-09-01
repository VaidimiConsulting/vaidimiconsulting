import { FileText, TrendingUp, Layers } from 'lucide-react';
import InsightDetailTemplate from '@/components/templates/InsightDetailTemplate';
import type { DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'Insights / Research Reports',
  title: 'Sector research built from primary data',
  description: 'Deep-dive reports grounded in surveys, interviews, and financial data across the sectors we serve.',
  accent: 'accent-gold',
  crumbLabel: 'Insights',
  crumbTo: '/insights',
  overview: [
    'Unlike most consulting content, our research reports are built from primary data we collect directly \u2014 client benchmarking, sector surveys, and structured interviews \u2014 not aggregated third-party statistics.',
    'Reports are published periodically and made available to clients and prospective clients on request.',
  ],
  highlightsTitle: 'Recent focus areas',
  highlights: [
    { icon: FileText, title: 'MSME credit access', desc: 'A survey-based look at financing barriers across 300+ small businesses.' },
    { icon: TrendingUp, title: 'Retail unit economics', desc: 'Benchmarking store-level profitability across formats and cities.' },
    { icon: Layers, title: 'Digital adoption in logistics', desc: 'Where technology investment is actually paying off in the sector.' },
  ],
  related: [
    { label: 'Whitepapers', to: '/insights/whitepapers' },
    { label: 'Case Studies', to: '/insights/case-studies' },
    { label: 'Latest Articles', to: '/insights/latest-articles' },
  ],
  ctaTitle: 'Want early access to a report?',
  ctaDesc: 'Get in touch and we\u2019ll share our latest research before public release.',
};

export default function ResearchReports() {
  return <InsightDetailTemplate data={data} />;
}
