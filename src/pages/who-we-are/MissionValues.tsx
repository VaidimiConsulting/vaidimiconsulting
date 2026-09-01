import { Target, Heart, ShieldCheck, Users } from 'lucide-react';
import DetailPageTemplate, { type DetailPageData } from '@/components/templates/DetailPageTemplate';

const data: DetailPageData = {
  eyebrow: 'Who We Are / Mission & Values',
  title: 'Guidance, growth, success — in that order',
  description: 'Our mission and the operating values that keep every engagement honest.',
  accent: 'accent-sage',
  crumbLabel: 'Who We Are',
  crumbTo: '/who-we-are',
  overview: [
    'Our mission is simple: help ambitious businesses make their hardest decisions with confidence, and stay involved long enough to see those decisions pay off.',
    'We believe growth without guidance is just risk, and guidance without follow-through is just theory. Success is what happens when both are done right, together.',
  ],
  highlightsTitle: 'Our values',
  highlights: [
    { icon: Target, title: 'Outcomes over decks', desc: 'We are judged by what changed in the business, not what was presented.' },
    { icon: Heart, title: 'Honesty, even when inconvenient', desc: 'We tell clients what they need to hear, not just what they want to hear.' },
    { icon: Users, title: 'Embedded, not distant', desc: 'We work alongside your team, not from behind a slide deck.' },
    { icon: ShieldCheck, title: 'Accountability', desc: 'If a recommendation doesn\u2019t work, we own that and adjust \u2014 we don\u2019t disappear.' },
  ],
  related: [
    { label: 'Our Story', to: '/who-we-are' },
    { label: 'Leadership Team', to: '/who-we-are/leadership-team' },
    { label: 'Corporate Responsibility', to: '/who-we-are/corporate-responsibility' },
  ],
  ctaTitle: 'Want to know if we\u2019re the right fit?',
  ctaDesc: 'A first conversation is always free \u2014 and honest, in both directions.',
};

export default function MissionValues() {
  return <DetailPageTemplate data={data} />;
}
