import { Cog, Target, GitBranch } from 'lucide-react';
import DetailPageTemplate, { type DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'Services / Operations Consulting',
  title: 'Operations built for margin, not just motion',
  description: 'We redesign processes and cost structures so your team does more with the resources it already has.',
  accent: 'accent-green',
  crumbLabel: 'Services',
  crumbTo: '/services',
  overview: [
    'Operational inefficiency rarely announces itself \u2014 it hides in handoffs, duplicated approvals, and reporting nobody reads. We map how work actually flows through your organization, not how the org chart says it should, and remove the friction that\u2019s quietly costing you margin.',
    'Every engagement ends with a set of changes your team can run without us \u2014 not a dependency on further consulting.',
  ],
  highlightsTitle: 'Where we focus',
  highlights: [
    { icon: Cog, title: 'Process redesign', desc: 'End-to-end mapping of your highest-friction workflows, redesigned for speed and accountability.' },
    { icon: Target, title: 'Cost optimization', desc: 'Line-by-line review of spend against actual business impact, not just budget category.' },
    { icon: GitBranch, title: 'Supply chain & vendor strategy', desc: 'Renegotiated terms and reduced dependency risk across critical vendors.' },
  ],
  stats: [
    { value: '18%', label: 'Avg. cost reduction' },
    { value: '3x', label: 'Faster approval cycles' },
    { value: '90 days', label: 'Typical engagement length' },
  ],
  statsTitle: 'Efficiency, measured in weeks not years',
  statsDesc: 'Our engagements are built to show results before the quarter ends.',
  related: [
    { label: 'Digital & Technology', to: '/services/digital-technology' },
    { label: 'Financial Advisory', to: '/services/financial-advisory' },
    { label: 'Strategy Consulting', to: '/services/strategy-consulting' },
  ],
  ctaTitle: 'Ready to find your hidden margin?',
  ctaDesc: 'A short operations audit usually pays for the whole engagement.',
};

export default function OperationsConsulting() {
  return <DetailPageTemplate data={data} />;
}
