import { Link } from 'react-router-dom';
import {
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import logo from '@/assets/logo.png';
import { services } from '@/data/services';

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Vaidimi', to: '/who-we-are' },
  { label: 'Leadership Team', to: '/who-we-are/leadership-team' },
  { label: 'Blog & Insights', to: '/blog' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
];

const SECTORS = [
  { label: 'MSME', to: '/sector/msme' },
  { label: 'SME', to: '/sector/sme' },
  { label: 'Agribusiness', to: '/sector/agribusiness' },
  { label: 'Logistics & Supply', to: '/sector/logistics' },
  { label: 'Financial Services', to: '/sector/financial-services' },
  { label: 'Retail & Consumer', to: '/sector/retail' },
];

const LINKS = {
  linkedin: 'https://www.linkedin.com/in/mayank-panday-228192436',
  facebook: 'https://www.facebook.com/share/17rX6H3sbt/',
  instagram: 'https://www.instagram.com/vaidimi_consulting',
  email: 'info@vaidimiconsulting.in',
  phoneDisplay: '+91 8869990973',
  phoneHref: 'tel:+918869990973',
};

const SOCIAL_LINKS = [
  { icon: Linkedin, href: LINKS.linkedin, label: 'LinkedIn' },
  { icon: Facebook, href: LINKS.facebook, label: 'Facebook' },
  { icon: Instagram, href: LINKS.instagram, label: 'Instagram' },
  { icon: Mail, href: `mailto:${LINKS.email}`, label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#10182d] text-slate-300">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#214d63]/20 blur-3xl" />
        <div className="absolute right-[-12%] top-[28%] h-[420px] w-[420px] rounded-full bg-[#1b365b]/30 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[42%] h-80 w-80 rounded-full bg-[#173f39]/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b88a72] to-transparent opacity-70" />

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 py-14 md:py-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="mt-7 max-w-[560px] text-[15px] leading-7 text-slate-200/80 sm:text-base">
              Guidance, growth and success — we partner with ambitious
              enterprises across strategy, digital infrastructure, corporate
              finance, and operations to turn vision into measurable momentum.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                const isExternal = item.href.startsWith('http');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    {...(isExternal
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/[0.025] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#c8a18d] hover:bg-white/[0.08] hover:text-white"
                  >
                    <Icon className="h-[17px] w-[17px] transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6 lg:flex lg:justify-end">
            <div className="w-full max-w-[485px] rounded-[22px] border border-white/10 bg-[#172644]/95 p-6 shadow-[0_22px_60px_rgba(0,0,0,.2)] sm:p-7">
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#b98e78]/30 bg-[#b98e78]/10">
                  <Sparkles className="h-5 w-5 text-[#d2aa94]" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-white">
                    Subscribe to Monthly Advisory Insights
                  </h3>
                  <p className="mt-1.5 max-w-[390px] text-sm leading-5 text-slate-300/80">
                    Field-tested frameworks on enterprise scale and technology
                    straight to your inbox.
                  </p>
                </div>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="name@company.com"
                  className="min-w-0 flex-1 rounded-xl border border-white/15 bg-[#0e1a31] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 transition-colors focus:border-[#8ca7bd]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-[46px] w-[54px] shrink-0 items-center justify-center rounded-xl border border-[#bd957f] bg-transparent text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bd957f]/15"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-0 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
          <div className="pb-10 sm:pr-8 lg:border-r lg:border-white/10 lg:pb-0">
            <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.05em] text-white/65">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center text-[16px] leading-6 text-[#a9bfd6] transition-colors duration-200 hover:text-white"
                  >
                    <span>{link.label}</span>
                    {link.label === 'About Vaidimi' && (
                      <ArrowUpRight className="ml-1.5 h-4 w-4 text-[#c49a83] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 py-10 sm:pl-8 sm:pr-8 lg:border-r lg:border-t-0 lg:py-0">
            <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.05em] text-white/65">
              Consulting Practices
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-[16px] leading-6 text-[#a9bfd6] transition-colors duration-200 hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 py-10 sm:pr-8 lg:border-r lg:border-t-0 lg:py-0 lg:pl-8">
            <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.05em] text-white/65">
              Industry Sectors
            </h4>
            <ul className="space-y-4">
              {SECTORS.map((sector) => (
                <li key={sector.label}>
                  <Link
                    to={sector.to}
                    className="group inline-flex items-center text-[16px] leading-6 text-[#a9bfd6] transition-colors duration-200 hover:text-white"
                  >
                    <span>{sector.label}</span>
                    {sector.label === 'Retail & Consumer' && (
                      <ArrowUpRight className="ml-1.5 h-4 w-4 text-[#c49a83] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 pt-10 sm:col-span-2 lg:col-span-1 lg:border-t-0 lg:pl-8 lg:pt-0">
            <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.05em] text-white/65">
              Corporate Office
            </h4>
            <div className="space-y-5 text-[16px] leading-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#c49a83]" />
                <span className="text-[#e0e5ed]">
                  SH 9/132, MAA Bhawani Nagar Colony,
                  <br />
                  Airport Road, Varanasi -
                  <br />
                  221002
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 shrink-0 text-[#c49a83]" />
                <a
                  href={LINKS.phoneHref}
                  className="text-[#e0e5ed] transition-colors hover:text-white"
                >
                  {LINKS.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 shrink-0 text-[#c49a83]" />
                <a
                  href={`mailto:${LINKS.email}`}
                  className="break-all text-[#e0e5ed] transition-colors hover:text-white"
                >
                  {LINKS.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © {year} Vaidimi Consulting. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <Link to="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link to="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </div>

          <div className="pointer-events-none absolute -right-2 bottom-7 hidden md:block">
            <div className="relative h-12 w-12">
              <span className="absolute left-1/2 top-0 h-12 w-1 -translate-x-1/2 rotate-45 rounded-full bg-white/25" />
              <span className="absolute left-1/2 top-0 h-12 w-1 -translate-x-1/2 -rotate-45 rounded-full bg-white/25" />
              <span className="absolute left-1/2 top-1/2 h-12 w-1 -translate-x-1/2 -translate-y-1/2 rotate-90 rounded-full bg-white/25" />
              <span className="absolute left-1/2 top-1/2 h-12 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}