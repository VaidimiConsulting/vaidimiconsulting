import { UserCog, Sparkles, Users } from 'lucide-react';
import DetailPageTemplate, { type DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'Services / Talent & Organization',
  title: 'Organizations designed to outlast their founders',
  description: 'Org design, leadership development and culture work for teams that are scaling past what got them here.',
  accent: 'accent-sage',
  crumbLabel: 'Services',
  crumbTo: '/services',
  overview: [
    'Most growing companies eventually hit a wall that no amount of strategy can fix: the organization itself. Reporting lines that made sense at 20 people break at 200. Decisions that used to take a hallway conversation now take three meetings.',
    'We help leadership teams redesign structure, build leadership capability, and reset culture deliberately \u2014 before growth forces it to happen badly.',
  ],
  highlightsTitle: 'What we deliver',
  highlights: [
    { icon: UserCog, title: 'Org design', desc: 'Structures and reporting lines that match how your business actually needs to make decisions.' },
    { icon: Sparkles, title: 'Leadership development', desc: 'Practical coaching for first-time managers and senior leaders navigating scale.' },
    { icon: Users, title: 'Culture & change management', desc: 'Change programs that survive contact with a skeptical, busy workforce.' },
  ],
  stats: [
    { value: '85%', label: 'Leader retention post-program' },
    { value: '40+', label: 'Leadership cohorts run' },
    { value: '95%', label: 'Would recommend us' },
  ],
  statsTitle: 'People-first, results-measured',
  statsDesc: 'We track retention and engagement the same way we track revenue.',
  related: [
    { label: 'Strategy Consulting', to: '/services/strategy-consulting' },
    { label: 'Operations Consulting', to: '/services/operations-consulting' },
    { label: 'Financial Advisory', to: '/services/financial-advisory' },
  ],
  ctaTitle: 'Feeling the growing pains?',
  ctaDesc: 'Let\u2019s talk about what your org needs to look like at 2x your current size.',
};

export default function TalentOrganization() {
  return <DetailPageTemplate data={data} />;
}
