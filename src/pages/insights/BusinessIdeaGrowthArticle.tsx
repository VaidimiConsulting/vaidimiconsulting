import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  CheckCircle2,
  CalendarCheck,
  ShieldCheck,
  TrendingUp,
  Target,
  Layers,
  BarChart3,
  Lightbulb,
  Building2,
  PhoneCall,
  Sparkles,
} from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import { Button } from '@/components/ui/Button';

export default function BusinessIdeaGrowthArticle() {
  useEffect(() => {
    // 1. Set SEO Document Title
    const originalTitle = document.title;
    document.title = 'From Business Idea to Sustainable Growth: A Practical Roadmap | Vaidimi Consulting';

    // 2. Set Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';

    const newDesc =
      'A practical, battle-tested strategic roadmap for founders and executives to transition an early business idea into a resilient, scalable, and profitable enterprise.';

    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', newDesc);

    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc !== null) {
        metaDesc.setAttribute('content', originalDesc);
      }
    };
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'From Business Idea to Sustainable Growth: A Practical Roadmap',
          text: 'A practical strategic roadmap from early validation to predictable enterprise scaling.',
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <>
      {/* Banner */}
      <PageBanner
        eyebrow="Insights · Strategy & Growth Advisory"
        title="From Business Idea to Sustainable Growth: A Practical Roadmap"
        description="A battle-tested strategic framework for founders and executive leaders transitioning from early validation to compounding enterprise growth."
        accent="accent"
        crumbs={[
          { label: 'Insights', to: '/insights' },
          { label: 'Latest Articles', to: '/insights/latest-articles' },
          { label: 'Business Growth Roadmap' },
        ]}
      />

      <main className="py-12 lg:py-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Navigation Bar / Return Link */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              to="/insights/latest-articles"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm hover:border-emerald-300 transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-emerald-600" />
              <span>Back to Latest Articles</span>
            </Link>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3.5 py-2 rounded-full shadow-sm hover:bg-slate-50 transition-colors"
              title="Share this article"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-500" />
              <span>Share Article</span>
            </button>
          </div>

          <article className="bg-white border border-slate-200/90 rounded-3xl p-6 md:p-12 shadow-sm">
            {/* Category & Metadata Header */}
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100/70 text-emerald-800">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  Strategy & Business Growth
                </span>
                <span className="text-xs font-medium text-slate-400">·</span>
                <span className="text-xs font-medium text-slate-500">Executive Advisory Series</span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.18] mb-6 tracking-tight">
                From Business Idea to Sustainable Growth: A Practical Roadmap
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0F223D] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                    VC
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 leading-tight">Vaidimi Advisory Practice</p>
                    <p className="text-xs text-slate-500">Enterprise Strategy & Growth Practice</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs md:text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-slate-400" /> October 2026
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-400" /> 7 min read
                  </span>
                </div>
              </div>
            </header>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden shadow-card border border-slate-200/80 mb-12 bg-slate-100">
              <img
                src="/images/business-growth-roadmap.jpg"
                alt="Executive business growth roadmap discussion at Vaidimi Consulting"
                className="w-full h-auto max-h-[520px] object-cover"
                loading="eager"
              />
              <div className="bg-slate-50 px-4 py-2.5 text-xs text-slate-500 border-t border-slate-200/60 flex items-center justify-between">
                <span>The 5-Horizon Architecture for Scaling Resilient Commercial Enterprises</span>
                <span className="text-slate-400 font-mono">Strategy Framework</span>
              </div>
            </div>

            {/* Executive Summary / Key Takeaways Box */}
            <div className="bg-gradient-to-br from-emerald-50/80 via-white to-slate-50 border-l-4 border-emerald-600 rounded-2xl p-6 md:p-8 mb-12 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-emerald-900 font-bold text-lg">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Executive Summary & Key Takeaways</span>
              </div>
              <ul className="space-y-3 text-slate-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Validate Before Scaling:</strong> Differentiate early opportunistic sales from repeatable,
                    high-retention product-market fit.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Protect Unit Economics:</strong> Maintain an LTV-to-CAC ratio above 3.5:1 and positive contribution
                    margins before accelerating sales spend.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Institutionalize Systems:</strong> Replace founder dependency with standard operating procedures
                    (SOPs), transparent metrics, and accountable ownership.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Multi-Horizon Governance:</strong> Structure executive reviews to balance weekly operational cash
                    flow with long-term strategic resilience.
                  </span>
                </li>
              </ul>
            </div>

            {/* Article Body Content */}
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base md:text-lg space-y-10">
              <section>
                <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-normal">
                  Every enduring commercial enterprise begins with a spark of insight — an unsolved inefficiency in the market,
                  a proprietary technology, or a distinctive service delivery model. Yet statistics show that over 70% of emerging
                  businesses plateau or fail not because their original idea lacked merit, but because they attempted to scale an
                  unstandardized engine.
                </p>
                <p className="mt-4 text-slate-600">
                  Sustainable growth is not the result of unchecked optimism or accidental momentum. It requires a disciplined,
                  phase-by-phase operational and strategic framework that transforms fragile early traction into an institutional
                  asset. Below is the practical roadmap distilled from hundreds of client transformations conducted across Vaidimi
                  Consulting&apos;s corporate advisory engagements.
                </p>
              </section>

              {/* Phase 1 */}
              <section className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm">
                    01
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 m-0">
                    Phase 1: Validating Product-Market Depth & Core Value
                  </h2>
                </div>
                <p>
                  The most perilous chasm early-stage businesses encounter is mistaking early enthusiasm for repeatable,
                  scalable demand. In this inception phase, the objective is not gross transaction volume; it is customer validation
                  depth.
                </p>
                <p>
                  A truly validated idea demonstrates three non-negotiable qualities: customers experience measurable relief from
                  an urgent problem, they renew or reorder with minimal friction, and they actively advocate for the solution within
                  their networks.
                </p>
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 my-6 not-prose">
                  <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-600" /> Phase 1 Execution Checklist:
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Quantify Net Retention Rate (NRR) and Net Promoter Score across your first 50 enterprise accounts or 500 consumer buyers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Isolate the exact trigger that converted exploratory discussions into paid, contracted commitments.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Discard vanity topline metrics in favor of gross margin per delivered customer engagement.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Phase 2 */}
              <section className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    02
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 m-0">
                    Phase 2: Mastering Unit Economics & Cash-Flow Architecture
                  </h2>
                </div>
                <p>
                  Premature scaling is the single most common cause of commercial insolvency. Pouring capital and sales headcount
                  into an unoptimized business model merely amplifies cash burn. Before launching multi-channel marketing, leadership
                  must master unit economics.
                </p>
                <p>
                  Sustainable growth requires that Lifetime Value (LTV) exceeds Customer Acquisition Cost (CAC) by at least 3.5:1,
                  with a payback timeline under 6 months. Furthermore, businesses must actively monitor their working capital
                  cycle: if you extend 90-day credit to enterprise clients while paying staff and vendors in 15 days, rapid top-line
                  growth will trigger an acute liquidity squeeze.
                </p>
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 my-6 not-prose">
                  <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-emerald-600" /> Financial Health Benchmarks:
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>LTV : CAC Ratio:</strong> Target ≥ 3.5x with fully loaded acquisition and onboarding costs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Working Capital Gap:</strong> Compress Days Sales Outstanding (DSO) through milestone-based billing and early-payment discounts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Runway Buffer:</strong> Maintain at least 6 months of fixed operational expenses in non-speculative liquid reserves.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Phase 3 */}
              <section className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                    03
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 m-0">
                    Phase 3: Operational Standardization & Systems-First Execution
                  </h2>
                </div>
                <p>
                  In the startup phase, founder agility and improvisation are assets. In the scaleup phase, they become liabilities.
                  When day-to-day delivery depends entirely on the founder&apos;s personal oversight, service consistency falters,
                  onboarding takes quarters instead of weeks, and customer satisfaction drops.
                </p>
                <p>
                  Scaling demands converting tacit founder knowledge into documented, repeatable operating systems. By instituting
                  clear standard operating procedures (SOPs), automated data pipelines, and role-based accountability matrices,
                  the enterprise builds capacity to double output without doubling chaos.
                </p>
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 my-6 not-prose">
                  <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-600" /> Operational Standardization Checklist:
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Document end-to-end client delivery workflows with unambiguous RACI (Responsible, Accountable, Consulted, Informed) matrices.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Deploy cloud business infrastructure that unifies billing, CRM, pipeline tracking, and project delivery.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Institute weekly operating cadence reviews focused on leading quality metrics rather than trailing post-mortems.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Phase 4 */}
              <section className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-sm">
                    04
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 m-0">
                    Phase 4: Constructing a Predictable Go-To-Market (GTM) Engine
                  </h2>
                </div>
                <p>
                  A sustainable commercial engine does not rely on serendipity or individual heroics. It functions as an
                  integrated growth flywheel where strategic brand positioning, targeted outbound outreach, thought leadership,
                  and structured client referrals reinforce one another.
                </p>
                <p>
                  By aligning corporate messaging squarely with client economic outcomes and equipping sales teams with tangible
                  case studies, businesses compress sales cycles, defend pricing power, and eliminate reliance on seasonal spikes.
                </p>
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 my-6 not-prose">
                  <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-600" /> GTM Flywheel Pillars:
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>Inbound Authority:</strong> Publish sector research, case studies, and proprietary viewpoints that establish credible authority.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>Strategic Partnerships:</strong> Build formal alliances with complementary service providers to access pre-qualified audiences.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>Customer Success & Retention:</strong> Establish formal quarterly business reviews (QBRs) to expand account value and generate referrals.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Phase 5 */}
              <section className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-sm">
                    05
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 m-0">
                    Phase 5: Executive Governance & Strategic Horizon Planning
                  </h2>
                </div>
                <p>
                  The final stage of the roadmap involves transitioning the leadership mindset from tactical firefighting to
                  stewardship and governance. This involves delegating operational execution to capable functional heads, establishing
                  a formal advisory board, and managing capital allocation with disciplined foresight.
                </p>
                <p>
                  Organizations that achieve this level of maturity consistently command higher valuation multiples, withstand
                  broader economic headwinds, and build enduring enterprise value that outlives individual leadership tenures.
                </p>
              </section>

              {/* Growth Maturity Summary Table */}
              <section className="pt-8 not-prose">
                <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-slate-700" />
                  Growth Maturity Matrix at a Glance
                </h3>
                <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                  <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-[#0F223D] text-white text-xs font-semibold uppercase tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4">Stage</th>
                        <th className="py-3.5 px-4">Core Focus</th>
                        <th className="py-3.5 px-4">Primary Metric</th>
                        <th className="py-3.5 px-4">Main Risk</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">Phase 1: Validation</td>
                        <td className="py-3 px-4">Problem-solution fit</td>
                        <td className="py-3 px-4 font-mono text-emerald-700 font-semibold">Net Retention / NPS</td>
                        <td className="py-3 px-4 text-rose-600">Building for non-existent market</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">Phase 2: Economics</td>
                        <td className="py-3 px-4">Margin & cash-flow stability</td>
                        <td className="py-3 px-4 font-mono text-emerald-700 font-semibold">LTV : CAC ≥ 3.5x</td>
                        <td className="py-3 px-4 text-rose-600">Cash exhaustion from loose terms</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">Phase 3: Operations</td>
                        <td className="py-3 px-4">SOPs & delegation systems</td>
                        <td className="py-3 px-4 font-mono text-emerald-700 font-semibold">Process turnaround time</td>
                        <td className="py-3 px-4 text-rose-600">Founder operational bottleneck</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">Phase 4: GTM Engine</td>
                        <td className="py-3 px-4">Multi-channel pipeline</td>
                        <td className="py-3 px-4 font-mono text-emerald-700 font-semibold">Predictable pipeline velocity</td>
                        <td className="py-3 px-4 text-rose-600">Over-dependence on single channel</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">Phase 5: Governance</td>
                        <td className="py-3 px-4">Leadership bench & capital allocation</td>
                        <td className="py-3 px-4 font-mono text-emerald-700 font-semibold">Enterprise value / EBITDA</td>
                        <td className="py-3 px-4 text-rose-600">Loss of strategic focus</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Conclusion */}
              <section className="pt-6 border-t border-slate-100">
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">
                  Conclusion: Transforming Vision into Compounding Value
                </h3>
                <p>
                  Transforming a business idea into sustainable, scalable growth does not demand round-the-clock crisis
                  management. It demands clarity, institutional cadence, and deliberate execution. By respecting the sequence of
                  growth — proving value, securing economics, codifying systems, scaling distribution, and embedding governance —
                  founders and leaders build organizations that endure.
                </p>
                <p className="text-slate-600 font-medium">
                  At Vaidimi Consulting, we partner with enterprises at every phase of this roadmap, diagnosing systemic
                  bottlenecks, architecting operating models, and guiding strategic execution to unlock measurable commercial value.
                </p>
              </section>
            </div>

            {/* Prominent "Book an Appointment" CTA Section */}
            <div className="mt-14 pt-10 border-t border-slate-200">
              <div className="bg-gradient-to-br from-[#0B1528] via-[#0F223D] to-[#162D4F] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-card">
                {/* Decorative background glow */}
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute left-10 -top-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-4">
                    <CalendarCheck className="w-3.5 h-3.5" />
                    Strategic Advisory Consultation
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-4 leading-snug">
                    Ready to Build Your Sustainable Growth Roadmap?
                  </h3>

                  <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
                    Book an executive appointment with Vaidimi Consulting. We will evaluate your current growth bottlenecks,
                    stress-test your unit economics, and design an actionable, milestones-driven roadmap tailored to your industry.
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <Button
                      to="/contact"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-emerald-900/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      <span>Book an Appointment</span>
                    </Button>

                    <Button
                      to="/what-we-do/strategy-growth"
                      variant="outline"
                      className="border-slate-400/40 text-slate-200 hover:bg-white/10 hover:text-white font-semibold px-6 py-3.5 rounded-full"
                    >
                      <span>Explore Strategy Practice</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-700/60 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" /> Confidential & Partner-Led
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-400" /> 45-Minute Diagnostic Session
                    </span>
                    <span className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-emerald-400" /> Direct Senior Practice Engagement
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Return Bar */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/insights/latest-articles"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Latest Articles</span>
              </Link>
              <Link
                to="/insights"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
              >
                <span>View All Insights</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
