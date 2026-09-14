import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function ServiceFooterCTA() {
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#123B61] via-[#102a45] to-[#0a1b2d] text-white p-10 sm:p-14 overflow-hidden shadow-lift border border-slate-800">
          {/* Subtle Ambient Glows */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 text-indigo-300 backdrop-blur-md mb-2">
              <MessageSquare className="w-6 h-6" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to move your{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent">
                marketing forward?
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Tell us where your business is today. We'll help you identify where marketing can create the greatest impact.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 hover:opacity-95 text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-indigo-900/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/services/marketing-consulting"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full border border-white/20 transition-colors"
              >
                <span>Explore Marketing Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
