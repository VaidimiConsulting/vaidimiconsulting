import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import logo from '@/assets/logo.png';
import { services } from '@/data/services';

const FOOTER_COLUMNS = [
  {
    title: 'Services',
    accent: 'accent',
    links: services.map((service) => ({ label: service.title, to: `/services/${service.slug}` })),
  },
  {
    title: 'Sector',
    accent: 'accent-blue',
    links: [
      { label: 'MSME', to: '/sector/msme' },
      { label: 'SME', to: '/sector/sme' },
      { label: 'Agribusiness', to: '/sector/agribusiness' },
      { label: 'Logistics', to: '/sector/logistics' },
      { label: 'Retail', to: '/sector/retail' },
    ],
  },
  {
    title: 'Insights',
    accent: 'accent-gold',
    links: [
      { label: 'Latest Articles', to: '/insights/latest-articles' },
      { label: 'Research Reports', to: '/insights/research-reports' },
      { label: 'Case Studies', to: '/insights/case-studies' },
      { label: 'Webinars & Events', to: '/insights/webinars-events' },
      { label: 'Podcasts', to: '/insights/podcasts' },
    ],
  },
  {
    title: 'Who We Are',
    accent: 'accent-sage',
    links: [
      { label: 'Our Story', to: '/who-we-are' },
      { label: 'Leadership Team', to: '/who-we-are/leadership-team' },
      { label: 'Careers', to: '/careers' },
      { label: 'Newsroom', to: '/who-we-are/newsroom' },
      { label: 'Corporate Responsibility', to: '/who-we-are/corporate-responsibility' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/90 relative overflow-hidden">
      {/* subtle top divider curve */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        {/* Top: brand + newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-white/10">
          <div>
            <img src={logo} alt="Vaidimi Consulting" className="h-10 w-auto object-contain brightness-0 invert opacity-90 mb-5" />
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Guidance, growth and success — we partner with ambitious businesses across strategy,
              digital transformation and operations to turn plans into measurable results.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Linkedin, Twitter, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center lg:items-end">
            <p className="text-sm font-medium text-white mb-1">Stay ahead of the curve</p>
            <p className="text-xs text-white/60 mb-4">Monthly insights on strategy and growth, straight to your inbox.</p>
            <form className="flex w-full max-w-sm gap-2">
              <input
                type="email"
                placeholder="name@company.com"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/50"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-accent hover:bg-accent-dark transition-colors rounded-lg px-4 flex items-center justify-center flex-shrink-0"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Middle: link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-medium uppercase tracking-wider text-white/50 mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-white/80 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-t border-white/10 text-sm text-white/70">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-accent-sage flex-shrink-0" />
            <span>Vibhuti Khand, Gomti Nagar, Lucknow, UP</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-accent-gold flex-shrink-0" />
            <span>hello@vaidimiconsulting.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-accent-blue flex-shrink-0" />
            <span>+91 522 000 0000</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-8 text-xs text-white/50">
          <p>© {year} Vaidimi Consulting. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
