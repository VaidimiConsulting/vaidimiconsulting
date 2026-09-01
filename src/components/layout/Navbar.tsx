import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import logo from '@/assets/logo.png';

const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const MEGA_MENU_ITEMS = [
  { title: 'Strategy & Growth', items: ['Market Entry', 'Strategic Planning', 'M&A Advisory', 'Competitive Analysis'] },
  { title: 'Digital Transformation', items: ['Cloud Solutions', 'Data & AI', 'Cybersecurity'] },
  { title: 'Business Units', items: ['Financial Services', 'Healthcare Solutions', 'Loan Management', 'Tailored Consulting'] },
  { title: 'Industry Solutions', items: ['Manufacturing', 'Consumer', 'Tech', 'Industry 4.0', 'Other Sectors'] },
  { title: 'Consulting Practices', items: ['Strategy & Growth', 'Digital Transformation', 'Operations & Cost Management'] },
  { title: 'Global Presence', items: ['Americas', 'Europe', 'Asia'] },
];

const MENUS = {
  services: {
    label: 'Services',
    type: 'single',
    accent: 'accent',
    items: ['Strategy Consulting', 'Digital & Technology', 'Operations Consulting', 'Financial Advisory', 'Talent & Organization'],
    bottomLink: { text: 'View all services', to: '/services' },
  },
  sector: {
    label: 'Sector',
    type: 'two-column',
    accent: 'accent-blue',
    items: ['MSME', 'SME', 'Agribusiness', 'Logistics', 'Financial Services', 'Retail'],
    bottomLink: { text: 'View all sectors', to: '/sector' },
  },
  insights: {
    label: 'Insights',
    type: 'single',
    accent: 'accent-gold',
    items: ['Latest Articles', 'Research Reports', 'Whitepapers', 'Case Studies', 'Webinars & Events', 'Podcasts'],
    bottomLink: { text: 'Browse all insights', to: '/insights' },
  },
  'who-we-are': {
    label: 'Who We Are',
    type: 'single-compact',
    accent: 'accent-sage',
    items: ['Our Story', 'Leadership Team', 'Mission & Values', 'Careers', 'Newsroom', 'Corporate Responsibility'],
  },
  'what-we-do': {
    label: 'What We Do',
    type: 'mega',
    accent: 'accent-green',
    columns: MEGA_MENU_ITEMS,
    bottomLink: { text: 'Explore all of what we do', to: '/what-we-do' },
  },
};

const MENU_KEYS = Object.keys(MENUS) as Array<keyof typeof MENUS>;

const ROUTE_BASE: Record<string, string> = {
  services: '/services',
  sector: '/sector',
  insights: '/insights',
  'who-we-are': '/who-we-are',
  'what-we-do': '/what-we-do',
};

const linkTo = (menuKey: string, item: string) => `${ROUTE_BASE[menuKey]}/${slugify(item)}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
    setActiveMobileMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = (key: string) => {
    setActiveMobileMenu(activeMobileMenu === key ? null : key);
  };

  const renderDesktopDropdown = () => {
    if (!activeMenu || !MENUS[activeMenu as keyof typeof MENUS]) return null;
    const menu = MENUS[activeMenu as keyof typeof MENUS];

    return (
      <motion.div
        initial={{ opacity: 0, y: -8, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 0.98 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="absolute top-full inset-x-0 mt-3 flex justify-center px-4 z-40"
        onMouseEnter={() => setActiveMenu(activeMenu)}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="w-[min(92vw,880px)] bg-card border border-border rounded-2xl shadow-lift overflow-hidden">
        <div className={`px-8 py-8 ${menu.type === 'mega' ? '' : ''}`}>
          {menu.type === 'mega' && 'columns' in menu && (
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {menu.columns.map((col, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  className="space-y-3"
                >
                  <Link to={`/what-we-do/${slugify(col.title)}`} className="text-xs font-medium text-text-primary uppercase tracking-wider hover:text-accent-green transition-colors block">
                    {col.title}
                  </Link>
                  <ul className="space-y-2.5">
                    {col.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link
                          to={`/what-we-do/${slugify(col.title)}`}
                          className="text-sm text-text-secondary hover:text-accent-green transition-colors block"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}

          {menu.type === 'two-column' && 'items' in menu && (
            <div className="grid grid-cols-2 gap-x-10 gap-y-1 max-w-md">
              {menu.items.map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.03 }}>
                  <Link to={linkTo('sector', item)} className="text-sm font-medium text-text-secondary hover:text-accent-blue transition-colors block py-2.5">
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {menu.type === 'single' && 'items' in menu && (
            <div className="flex flex-col space-y-1 max-w-xs">
              {menu.items.map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.03 }}>
                  <Link
                    to={linkTo(activeMenu, item)}
                    className={`text-sm font-medium text-text-secondary hover:text-${menu.accent} transition-colors block py-2`}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {menu.type === 'single-compact' && 'items' in menu && (
            <div className="flex flex-col space-y-1 max-w-xs">
              {menu.items.map((item, idx) => {
                const path = item === 'Careers' ? '/careers' : item === 'Our Story' ? '/who-we-are' : linkTo('who-we-are', item);
                return (
                  <motion.div key={idx} initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.03 }}>
                    <Link to={path} className="text-sm text-text-secondary hover:text-accent-sage transition-colors block py-2">
                      {item}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}

          {'bottomLink' in menu && menu.bottomLink && (
            <div className={`mt-6 pt-5 border-t border-border ${menu.type === 'mega' ? 'flex items-center justify-between' : 'flex'}`}>
              <Link to={menu.bottomLink.to} className={`text-sm font-medium text-${menu.accent} hover:text-text-primary transition-colors`}>
                {menu.bottomLink.text} &rarr;
              </Link>
              {menu.type === 'mega' && (
                <Link to="/contact" className="text-sm text-text-muted hover:text-accent transition-colors">
                  How we partner with you &rarr;
                </Link>
              )}
            </div>
          )}
        </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <motion.div
          layout
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center justify-between transition-colors duration-300 ${
            scrolled
              ? 'mt-3 w-[min(94vw,1180px)] px-5 py-2.5 bg-card/95 backdrop-blur-md border border-border rounded-full shadow-soft'
              : 'mt-0 w-full px-6 lg:px-10 py-5 bg-surface/90 backdrop-blur-sm border-b border-border/60'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img src={logo} alt="Vaidimi Consulting" className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-8' : 'h-11'}`} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {MENU_KEYS.map((key) => (
              <Link
                key={key}
                to={ROUTE_BASE[key]}
                className={`relative flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                  activeMenu === key ? 'text-text-primary bg-surface-alt' : 'text-text-secondary hover:text-text-primary'
                }`}
                onMouseEnter={() => setActiveMenu(key)}
              >
                {MENUS[key].label}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === key ? 'rotate-180' : ''}`} />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button aria-label="Search" className="text-text-secondary hover:text-accent transition-colors">
              <Search className="w-4.5 h-4.5" />
            </button>
            <Button to="/contact" className={scrolled ? 'px-5 py-2 text-xs' : ''}>
              Get in touch
            </Button>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-text-primary p-2" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>

        <AnimatePresence>{activeMenu && renderDesktopDropdown()}</AnimatePresence>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-surface pt-24 overflow-y-auto lg:hidden"
          >
            <div className="px-6 py-6 space-y-2 pb-24">
              {MENU_KEYS.map((key) => {
                const menu = MENUS[key];
                return (
                  <div key={key} className="border-b border-border pb-3">
                    <button onClick={() => toggleMobileMenu(key)} className="flex items-center justify-between w-full text-lg font-medium text-text-primary py-2">
                      {menu.label}
                      <ChevronDown className={`w-5 h-5 transition-transform ${activeMobileMenu === key ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeMobileMenu === key && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="pt-2 pl-3 space-y-3 pb-3">
                            {menu.type === 'mega' && 'columns' in menu ? (
                              menu.columns.map((col, idx) => (
                                <div key={idx} className="mb-4">
                                  <h4 className={`text-xs font-medium text-${menu.accent} uppercase tracking-wider mb-2`}>{col.title}</h4>
                                  <ul className="space-y-2.5">
                                    {col.items.map((item, itemIdx) => (
                                      <li key={itemIdx}>
                                        <Link to={linkTo('what-we-do', item)} className="text-text-secondary text-sm block">{item}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))
                            ) : 'items' in menu ? (
                              <ul className="space-y-3">
                                {menu.items.map((item, idx) => {
                                  const path =
                                    key === 'who-we-are'
                                      ? item === 'Careers'
                                        ? '/careers'
                                        : item === 'Our Story'
                                        ? '/who-we-are'
                                        : linkTo(key, item)
                                      : linkTo(key, item);
                                  return (
                                    <li key={idx}>
                                      <Link to={path} className="text-text-secondary text-base block">{item}</Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            ) : null}
                            {'bottomLink' in menu && menu.bottomLink && (
                              <Link to={menu.bottomLink.to} className={`text-${menu.accent} text-sm font-medium block pt-1`}>{menu.bottomLink.text}</Link>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <div className="pt-4">
                <Button to="/contact" className="w-full h-12 text-base">Get in touch</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
