import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomeHighlightModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const isDismissed = sessionStorage.getItem('vaidimi_audit_popup_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('vaidimi_audit_popup_dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6 pointer-events-none">
          {/* Ambient soft backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs pointer-events-auto"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/90 overflow-hidden"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent-blue to-accent" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
              aria-label="Close highlight"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-primary text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Executive Opportunity · 2026</span>
              </div>

              {/* Headline */}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                Complimentary Enterprise Growth & Efficiency Audit
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect directly with Vaidimi's senior advisory partners for a 30-minute strategic review. We'll audit your commercial bottlenecks, evaluate digital leverage, and provide an actionable growth blueprint.
              </p>

              {/* Value points */}
              <div className="grid grid-cols-2 gap-2 pt-1 pb-2">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Confidential Advisory</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Zero Sales Obligation</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Link
                  to="/contact"
                  onClick={handleClose}
                  className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-primary hover:bg-primary-light text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  Book Strategic Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={handleClose}
                  className="w-full sm:w-auto py-3 px-4 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
