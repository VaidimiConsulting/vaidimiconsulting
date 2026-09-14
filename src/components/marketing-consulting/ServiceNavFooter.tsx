import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Grid } from 'lucide-react';

export interface ServiceNavItem {
  slug: string;
  title: string;
  route: string;
}

export const MARKETING_SERVICES_NAV: ServiceNavItem[] = [
  { slug: 'brand-creation', title: 'Brand Creation', route: '/marketing-consulting/brand-creation' },
  { slug: 'brand-development', title: 'Brand Development', route: '/marketing-consulting/brand-development' },
  { slug: 'marketing-communication', title: 'Marketing Communication', route: '/marketing-consulting/marketing-communication' },
  { slug: 'strategic-marketing', title: 'Strategic Marketing', route: '/marketing-consulting/strategic-marketing' },
  { slug: 'digital-marketing', title: 'Digital Marketing', route: '/marketing-consulting/digital-marketing' },
];

export default function ServiceNavFooter({ currentSlug }: { currentSlug: string }) {
  const currentIndex = MARKETING_SERVICES_NAV.findIndex((s) => s.slug === currentSlug);

  const prevService = currentIndex > 0 ? MARKETING_SERVICES_NAV[currentIndex - 1] : MARKETING_SERVICES_NAV[MARKETING_SERVICES_NAV.length - 1];
  const nextService = currentIndex < MARKETING_SERVICES_NAV.length - 1 ? MARKETING_SERVICES_NAV[currentIndex + 1] : MARKETING_SERVICES_NAV[0];

  return (
    <section className="py-8 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Previous Service */}
        <Link
          to={prevService.route}
          className="group flex items-center gap-3 text-slate-600 hover:text-[#123B61] transition-colors p-2 rounded-xl hover:bg-white"
        >
          <div className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:border-[#123B61] group-hover:text-[#123B61] transition-all">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <div className="text-left">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Previous Service</span>
            <span className="font-display font-bold text-sm text-slate-900 group-hover:text-[#123B61]">{prevService.title}</span>
          </div>
        </Link>

        {/* Back to Hub */}
        <Link
          to="/services/marketing-consulting"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-slate-700 hover:text-[#123B61] hover:border-slate-300 transition-all"
        >
          <Grid className="w-3.5 h-3.5 text-[#D95C5C]" />
          <span>Back to Marketing Consulting</span>
        </Link>

        {/* Next Service */}
        <Link
          to={nextService.route}
          className="group flex items-center gap-3 text-slate-600 hover:text-[#123B61] transition-colors p-2 rounded-xl hover:bg-white text-right"
        >
          <div className="text-right">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Next Service</span>
            <span className="font-display font-bold text-sm text-slate-900 group-hover:text-[#123B61]">{nextService.title}</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:border-[#123B61] group-hover:text-[#123B61] transition-all">
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </div>
    </section>
  );
}
