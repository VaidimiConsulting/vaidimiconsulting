import { motion } from 'motion/react';
import PageBanner from '@/components/ui/PageBanner';
import {
  Paintbrush,
  Megaphone,
  Code2,
  Network,
  Sparkles,
  Star,
} from 'lucide-react';

// ============================================================
// LEADERS DATA
// ============================================================
const LEADERS = [
  {
    name: 'Gargi Singh',
    title: 'Director · Creative Head',
    bio: 'Leads the firm with a creative vision that bridges brand identity and business strategy. Brings a sharp design sensibility and leadership depth to every engagement.',
    icon: Paintbrush,
    gradient: 'from-[#1A4D3E] to-[#10B981]',
    accent: '#10B981',
    accentBg: 'bg-emerald-50',
    accentText: 'text-[#1A4D3E]',
    tag: 'Leadership',
    number: '01',
  },
  {
    name: 'Mayank Pandey',
    title: 'Marketing Head · Lead Consultant',
    bio: 'Drives marketing strategy and consulting engagements across sectors. Specialises in building growth systems that connect brand, content and customer acquisition.',
    icon: Megaphone,
    gradient: 'from-[#0EA5E9] to-[#0369A1]',
    accent: '#0EA5E9',
    accentBg: 'bg-sky-50',
    accentText: 'text-sky-700',
    tag: 'Marketing',
    number: '02',
  },
  {
    name: 'Madhu Prajapati',
    title: 'Team Lead · Software Consultant',
    bio: 'Heads the software consulting practice and coordinates cross-functional project delivery. Translates complex business requirements into practical digital solutions.',
    icon: Code2,
    gradient: 'from-[#7C3AED] to-[#A855F7]',
    accent: '#7C3AED',
    accentBg: 'bg-violet-50',
    accentText: 'text-violet-700',
    tag: 'Technology',
    number: '03',
  },
  {
    name: 'Varsha Srivastava',
    title: 'Developer · Design Consultant',
    bio: "Builds and ships web products with a designer's eye and a developer's precision. Creates digital experiences that are both functional and visually compelling.",
    icon: Sparkles,
    gradient: 'from-[#E55B63] to-[#F59E0B]',
    accent: '#E55B63',
    accentBg: 'bg-rose-50',
    accentText: 'text-rose-700',
    tag: 'Design & Dev',
    number: '04',
  },
  {
    name: 'Vipin Kumar',
    title: 'IT Networking Consultant · Technical Head',
    bio: 'Oversees all technical infrastructure, networking, and systems architecture. Ensures businesses are backed by secure, scalable and reliable technology foundations.',
    icon: Network,
    gradient: 'from-[#F59E0B] to-[#D97706]',
    accent: '#F59E0B',
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-700',
    tag: 'Infrastructure',
    number: '05',
  },
];

// ============================================================
// COMPONENT
// ============================================================
export default function LeadershipTeam() {
  return (
    <>
      <PageBanner
        eyebrow="Who We Are / Leadership Team"
        title="The people setting the standard"
        description="A focused team of specialists — each owning a distinct domain, all working toward the same outcome."
        accent="accent-sage"
        crumbs={[{ label: 'Who We Are', to: '/who-we-are' }, { label: 'Leadership Team' }]}
      />

      {/* ── Intro strip ── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
              <Star className="w-3.5 h-3.5 text-[#1A4D3E]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#1A4D3E]">Our Core Team</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Five specialists.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A4D3E] to-[#10B981]">
                One direction.
              </span>
            </h2>
            <p className="mt-4 text-slate-500 text-base lg:text-lg leading-relaxed">
              Vaidimi's leadership spans creative direction, marketing, software, design and infrastructure — a deliberate mix of disciplines built for today's business challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Leader profiles — alternating layout ── */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-0">
          {LEADERS.map((leader, i) => {
            const Icon = leader.icon;

            return (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.05 }}
                className="relative py-14 lg:py-20 border-b border-slate-100 last:border-b-0 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20"
              >
                {/* ── Large Attractive Icon Area ── */}
                <div className="relative flex-shrink-0 flex items-center justify-center">
                  {/* Soft background blob/glow for the icon */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${leader.gradient} opacity-10 blur-3xl rounded-full scale-150`}
                  />
                  
                  {/* The actual large SVG icon */}
                  <div className={`relative z-10 text-transparent bg-clip-text bg-gradient-to-br ${leader.gradient}`}>
                    <Icon 
                      className="w-24 h-24 lg:w-36 lg:h-36 drop-shadow-sm" 
                      strokeWidth={1} 
                      color={leader.accent} 
                    />
                  </div>

                  {/* Elegant Numbering */}
                  <div className="absolute -top-4 -left-6 lg:-top-8 lg:-left-12 font-serif font-bold text-slate-100 select-none text-7xl lg:text-9xl -z-10">
                    {leader.number}
                  </div>
                </div>

                {/* ── Content panel ── */}
                <div className="flex-1 max-w-2xl">
                  {/* Tag pill */}
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] mb-5 ${leader.accentBg} ${leader.accentText}`}>
                    {leader.tag}
                  </span>

                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                    {leader.name}
                  </h3>

                  <p
                    className="mt-3 text-sm font-bold uppercase tracking-[0.12em]"
                    style={{ color: leader.accent }}
                  >
                    {leader.title}
                  </p>

                  <p className="mt-6 text-slate-600 leading-relaxed text-lg max-w-xl">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="py-20 bg-[#16241D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-4">Work With Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Want to work alongside this team?
            </h2>
            <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
              We're always open to conversations with businesses ready to grow and with talent ready to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#10B981] text-white text-sm font-bold hover:bg-[#059669] transition-colors"
              >
                Start a Conversation
              </a>
              <a
                href="/careers"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white text-sm font-semibold hover:bg-white/5 transition-colors"
              >
                View Open Roles
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
