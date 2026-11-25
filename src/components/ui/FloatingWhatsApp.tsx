import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCheck } from 'lucide-react';
import logo from '@/assets/logo-transparent.png';

interface FloatingWhatsAppProps {
  /** WhatsApp phone number in international format without + or spaces (e.g. 918869990973) */
  phoneNumber?: string;
  companyName?: string;
  statusMessage?: string;
  welcomeMessage?: string;
  assistanceMessage?: string;
  defaultMessage?: string;
}

export default function FloatingWhatsApp({
  phoneNumber = '918869990973',
  companyName = 'Vaidimi Consulting',
  statusMessage = 'Typically replies in minutes',
  welcomeMessage = 'Hello! Welcome to Vaidimi Consulting. How can we help you today?',
  assistanceMessage = 'Our business advisory team is online to assist you with MSME, industrial, ISO, and growth strategies.',
  defaultMessage = 'Hello! I would like to know more about Vaidimi Consulting services.'
}: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Set formatted current time for the chat bubble
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
      );
    };
    updateTime();
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleStartChat = () => {
    const textToSend = userInput.trim() || defaultMessage;
    const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <>
      {/* =========================================================
          CHAT POPUP
      ========================================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.92 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-200/90"
            role="dialog"
            aria-label="WhatsApp Chat Support"
          >
            {/* Header: WhatsApp Official Teal Green */}
            <div className="relative bg-[#095E54] px-5 py-4 text-white">
              <div className="flex items-center justify-between">
                {/* Brand & Avatar */}
                <div className="flex items-center gap-3">
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 p-1.5 backdrop-blur-xs ring-2 ring-white/30">
                    <img
                      src={logo}
                      alt={companyName}
                      className="h-full w-full object-contain filter brightness-0 invert"
                    />
                    {/* Active green status indicator */}
                    <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#095E54] bg-[#25D366]" />
                  </div>

                  <div>
                    <h3 className="font-display text-sm font-bold tracking-wide text-white">
                      {companyName}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-200">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </span>
                      <span>Online • {statusMessage}</span>
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/15 hover:text-white cursor-pointer"
                  aria-label="Close WhatsApp chat popup"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Chat Body with subtle WhatsApp-style background */}
            <div className="bg-[#EFEAE2] p-4 space-y-3.5 min-h-[190px] max-h-[320px] overflow-y-auto">
              {/* Date divider */}
              <div className="flex justify-center">
                <span className="rounded-md bg-white/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500 shadow-2xs backdrop-blur-xs">
                  Today
                </span>
              </div>

              {/* Bot / Business Welcome Message Bubble */}
              <div className="relative max-w-[88%] rounded-2xl rounded-tl-xs bg-white p-3.5 shadow-sm border border-slate-200/50">
                <p className="text-[11px] font-bold text-[#095E54] mb-1">
                  {companyName}
                </p>
                <p className="text-xs sm:text-[13px] leading-relaxed text-slate-800">
                  {welcomeMessage}
                </p>
                <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-400">
                  <span>{currentTime || 'Just now'}</span>
                  <CheckCheck className="h-3 w-3 text-sky-500" />
                </div>
              </div>

              {/* Online assistance note */}
              <div className="rounded-xl bg-emerald-50/90 border border-emerald-200/80 p-2.5 text-center">
                <p className="text-[11px] font-medium text-emerald-800 leading-snug">
                  {assistanceMessage}
                </p>
              </div>
            </div>

            {/* Footer with Optional Input & Start WhatsApp Chat Button */}
            <div className="bg-white p-3.5 border-t border-slate-100 space-y-2.5">
              {/* Optional Quick Message Input */}
              <div className="relative flex items-center rounded-xl bg-slate-50 border border-slate-200/90 px-3 py-1.5 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition-all">
                <input
                  type="text"
                  placeholder="Type a message or click below..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleStartChat();
                    }
                  }}
                  className="w-full bg-transparent text-xs text-slate-800 placeholder-slate-400 outline-none"
                />
              </div>

              {/* Main Action Button */}
              <button
                type="button"
                onClick={handleStartChat}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-extrabold text-white shadow-md transition-all duration-200 hover:bg-[#20bd5a] hover:shadow-lg active:scale-[0.98] cursor-pointer"
              >
                <WhatsAppSvg className="h-5 w-5 fill-current" />
                <span>Start WhatsApp Chat</span>
                <Send className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>

              <p className="text-center text-[10px] text-slate-400">
                Direct WhatsApp link • Instant redirect
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          FLOATING TRIGGER BUTTON (Fixed Bottom-Right)
      ========================================================= */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center">
        {/* Subtle Tooltip Label on Desktop when closed */}
        {!isOpen && (
          <div className="hidden lg:flex mr-3 items-center rounded-full bg-slate-900/90 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-xs border border-white/10 pointer-events-none animate-fade-in">
            <span>Chat on WhatsApp</span>
          </div>
        )}

        <motion.button
          ref={buttonRef}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-colors duration-200 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer"
          aria-label={isOpen ? "Close WhatsApp chat" : "Chat on WhatsApp"}
          title="Chat with Vaidimi Consulting on WhatsApp"
        >
          {/* Subtle pulsating attention ring when closed */}
          {!isOpen && (
            <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-60" />
          )}

          {/* Toggle between WhatsApp icon and Close icon */}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6 stroke-[2.5]" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <WhatsAppSvg className="h-7 w-7 fill-current" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}

/** Official WhatsApp SVG Icon */
function WhatsAppSvg({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
    </svg>
  );
}
