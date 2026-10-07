import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomeHighlightModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
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
        <div className="pointer-events-none fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center sm:p-6">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="pointer-events-auto fixed inset-0 bg-slate-900/30 backdrop-blur-xs"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-2xl"
          >
            {/* Top accent bar */}
            <div className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-primary via-accent-blue to-accent-sage" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-800"
              aria-label="Close popup"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Content */}
            <div className="space-y-4 p-6 pt-8 sm:p-8 sm:pt-10">

              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/60 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5 text-accent-gold" />
                <span>Business Inquiry</span>
              </div>

              {/* Heading */}
              <h3 className="font-display text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-3xl">
                {"Let's Build, Improve & Grow Your Business"}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-600">
                Whether you have an idea, an existing business, or a growth ambition, Vaidimi helps turn opportunities into structured, efficient and scalable businesses.
              </p>

              {/* Three statements */}
              <div className="space-y-2.5 pt-1">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3"
                >
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  <span className="text-sm font-semibold leading-snug text-slate-700">Have an idea? We turn it into a business.</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.44, duration: 0.4 }}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3"
                >
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span className="text-sm font-semibold leading-snug text-slate-700">Have a business? We make it more efficient.</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.53, duration: 0.4 }}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3"
                >
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                  <span className="text-sm font-semibold leading-snug text-slate-700">We help businesses grow — Micro to Small, Small to Medium.</span>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row">
                <Link
                  to="/contact"
                  onClick={handleClose}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-light hover:shadow-lg sm:flex-1"
                >
                  Book an Appointment <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  onClick={handleClose}
                  className="w-full px-4 py-3 text-xs font-semibold text-slate-500 transition-colors hover:text-slate-800 sm:w-auto"
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
