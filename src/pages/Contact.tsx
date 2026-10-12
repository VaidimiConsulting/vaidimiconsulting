import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  CheckCircle2, 
  AlertCircle,
  Loader2,
  Sparkles,
  Building2,
  User,
  ShieldCheck,
  Clock,
  ArrowRight
} from 'lucide-react';
import { services } from '@/data/services';

const SERVICE_OPTIONS = [
  'Marketing Consulting',
  'IT Consulting',
  'Promotion & Advertisement',
  'HR Consulting',
  'Financial Consulting',
  'Event Management',
  'Strategy & Business Growth',
  'Digital Transformation',
  'Enterprise Multi-Practice Advisory'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: services[0]?.title || 'Marketing Consulting',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [websiteHp, setWebsiteHp] = useState(''); // Anti-spam honeypot

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Corporate email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid work or corporate email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Contact number is required.';
    } else if (formData.phone.trim().length < 7) {
      errs.phone = 'Please enter a valid phone number (min 7 digits).';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message or project requirement.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    try {
      const submissionBody = new FormData();
      submissionBody.append('full_name', formData.name.trim());
      submissionBody.append('email', formData.email.trim().toLowerCase());
      submissionBody.append('phone', formData.phone.trim());
      submissionBody.append('company', formData.company.trim() || 'N/A');
      submissionBody.append('service_required', formData.service);
      submissionBody.append('enquiry_type', `Contact Page: ${formData.service}`);
      submissionBody.append('project_requirement', formData.message.trim());
      submissionBody.append('preferred_contact_method', 'Email');
      submissionBody.append('lead_source', 'Website Contact Page');
      submissionBody.append('privacy_consent', 'true');
      submissionBody.append('website_hp', websiteHp);

      const response = await fetch('/api/enquiries', {
        method: 'POST',
        body: submissionBody
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setSubmitError(
          result.message ||
            'We were unable to process your enquiry at this time. Please try again or reach out to info@vaidimiconsulting.in directly.'
        );
      }
    } catch (err) {
      setSubmitError(
        'Unable to connect to the enquiry service. Please check your network or email info@vaidimiconsulting.in directly.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: services[0]?.title || 'Marketing Consulting',
      message: ''
    });
    setErrors({});
    setSubmitError(null);
    setSubmitted(false);
  };

  return (
    <div className="bg-slate-50/50">
      {/* ========================================================
          HERO SECTION — LUXURY TWO-COLUMN LAYOUT
      ======================================================== */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200/80 bg-gradient-to-b from-white via-emerald-50/20 to-slate-50">
        {/* Subtle Ambient Color Glow Accents */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 -z-0">
          <div className="absolute top-0 left-10 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl" />
          <div className="absolute top-10 right-10 w-96 h-96 bg-sky-200/25 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Headline, Message & Prominent Contact Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Strategic Practice Advisory & Partnerships</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                  Let's Build <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-[#173F69] via-[#1A4D3E] to-[#10B981] bg-clip-text text-transparent">
                    What's Next.
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  We help ambitious enterprises scale, navigate complex operational transformations, and achieve sustainable competitive advantage through high-impact consulting.
                </p>
              </div>

              {/* Prominent Contact Action Cards */}
              <div className="space-y-4 pt-2">
                
                {/* Email Action */}
                <a
                  href="mailto:info@vaidimiconsulting.in"
                  className="group flex items-center gap-5 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-[#173F69] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Official Communications
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                        Active SLA
                      </span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate">
                      info@vaidimiconsulting.in
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Monitored daily · Executive response within 4 business hours
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all flex-shrink-0 mr-2" />
                </a>

                {/* Phone Action */}
                <a
                  href="tel:+918868990973"
                  className="group flex items-center gap-5 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#173F69] to-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-[#173F69]/20 group-hover:scale-105 transition-transform">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Direct Advisory Line
                      </span>
                      <span className="text-[10px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200/60">
                        Toll-Free Direct
                      </span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#173F69] transition-colors">
                      +91 8868990973
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Monday to Saturday, 9:00 AM – 7:30 PM IST
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#173F69] group-hover:translate-x-1 transition-all flex-shrink-0 mr-2" />
                </a>

                {/* Office Location Action */}
                <div className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-50 text-emerald-800 flex items-center justify-center flex-shrink-0 border border-emerald-200/80">
                    <MapPin className="w-7 h-7 text-emerald-700" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Corporate Headquarters & Advisory Office
                    </span>
                    <div className="text-sm sm:text-base font-semibold text-slate-900">
                      Varanasi, Uttar Pradesh, India
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      SH 9/132, MAA Bhawani Nagar Colony, Airport Road, Varanasi - 221002, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

              </div>

              {/* Trust Indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-500 border-t border-slate-200/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Mutual NDA & Confidentiality Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>4-Hour Executive Consultation SLA</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Existing Contact Image Layout */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative Gradient Backdrop Ring */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-sky-500/15 to-teal-400/20 rounded-[2.5rem] blur-2xl -z-10" />

                <div className="relative rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-[0_20px_50px_rgba(23,63,105,0.08)] overflow-hidden">
                  
                  {/* Subtle Brand Accent Stripe on Top */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#7FC4D9] via-[#E8C84A] via-[#8FBF6B] to-[#173F69] absolute top-0 left-0" />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    
                    {/* The existing image from public/images/contact1.png */}
                    <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-square flex items-center justify-center p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-emerald-50/30 border border-slate-100 shadow-inner">
                      <img 
                        src="/images/contact1.png" 
                        alt="Vaidimi Consulting Contact & Executive Engagement" 
                        className="w-full h-auto max-h-[260px] object-contain drop-shadow-md transition-transform duration-500 hover:scale-105"
                        loading="eager"
                      />
                    </div>

                    <div className="mt-6 space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200/60">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Client Leadership Advisory</span>
                      </div>
                      <h2 className="font-display text-xl font-bold text-slate-900">
                        Direct Access to Practice Directors
                      </h2>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
                        Every inquiry is reviewed directly by a Senior Practice Partner specialized in your industry sector.
                      </p>
                    </div>

                    <div className="w-full mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 gap-3 text-left">
                      <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Confidentiality</span>
                        <span className="text-xs font-semibold text-slate-800">100% Protected</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">SLA Commitment</span>
                        <span className="text-xs font-semibold text-slate-800">4 Hours</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================
          EXECUTIVE ENQUIRY FORM SECTION
      ======================================================== */}
      <section className="py-16 lg:py-24 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/70 inline-block shadow-sm">
              Initiate an Executive Dialogue
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
              Contact & Strategic Consultation
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Complete the strategic briefing form below. Our practice leadership will prepare preliminary benchmarks and reach out within 4 business hours.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.06)] relative overflow-hidden">
            
            {/* Top Brand Accent Line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#173F69] via-[#1A4D3E] to-[#10B981] absolute top-0 left-0" />

            {/* Error Message Alert */}
            {submitError && (
              <div className="mb-8 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3 shadow-sm">
                <AlertCircle className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
                <div className="leading-relaxed">{submitError}</div>
              </div>
            )}

            {/* Form Success State */}
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8 space-y-6"
              >
                <div className="w-20 h-20 bg-gradient-to-tr from-emerald-500 to-teal-400 text-white rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/25">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80 inline-block mb-2">
                    Delivered to info@vaidimiconsulting.in
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                    Enquiry Delivered Successfully
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your executive enquiry regarding <strong className="text-slate-900">{formData.service}</strong> has been transmitted directly to our practice desk.
                </p>

                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 text-left text-xs text-slate-700 max-w-md mx-auto space-y-2 shadow-inner">
                  <div className="flex justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500 font-medium">Corporate Email:</span>
                    <span className="font-semibold text-slate-900">{formData.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500 font-medium">Contact Phone:</span>
                    <span className="font-semibold text-slate-900">{formData.phone}</span>
                  </div>
                  {formData.company && (
                    <div className="flex justify-between border-b border-slate-200/60 pb-2">
                      <span className="text-slate-500 font-medium">Enterprise / Company:</span>
                      <span className="font-semibold text-slate-900">{formData.company}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Next Action:</span>
                    <span className="font-semibold text-emerald-700">Senior Partner review within 4 hrs</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs tracking-wide transition-all shadow-sm"
                  >
                    <span>Send Another Enquiry</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              /* The Actual Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Anti-spam Honeypot */}
                <input
                  type="text"
                  name="website_hp"
                  value={websiteHp}
                  onChange={(e) => setWebsiteHp(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Row 1: Full Name & Company */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Vikram Singhania"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all ${
                          errors.name
                            ? 'border-rose-300 bg-rose-50/20 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-200 bg-white focus:border-[#173F69] focus:ring-2 focus:ring-[#173F69]/15'
                        }`}
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    </div>
                    {errors.name && (
                      <p className="text-rose-600 text-xs font-medium mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Company / Organization <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Industrial Group"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#173F69] focus:ring-2 focus:ring-[#173F69]/15 transition-all"
                      />
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    </div>
                  </div>
                </div>

                {/* Row 2: Corporate Email & Contact Number */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Corporate Email <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="vikram@company.com"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all ${
                          errors.email
                            ? 'border-rose-300 bg-rose-50/20 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-200 bg-white focus:border-[#173F69] focus:ring-2 focus:ring-[#173F69]/15'
                        }`}
                      />
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    </div>
                    {errors.email && (
                      <p className="text-rose-600 text-xs font-medium mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Contact Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all ${
                          errors.phone
                            ? 'border-rose-300 bg-rose-50/20 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-200 bg-white focus:border-[#173F69] focus:ring-2 focus:ring-[#173F69]/15'
                        }`}
                      />
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    </div>
                    {errors.phone && (
                      <p className="text-rose-600 text-xs font-medium mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Row 3: Service of Interest */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Service of Interest <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-900 outline-none focus:border-[#173F69] focus:ring-2 focus:ring-[#173F69]/15 transition-all cursor-pointer"
                  >
                    {SERVICE_OPTIONS.map((srv) => (
                      <option key={srv} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 4: Brief Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Brief Message / Transformation Objectives <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your strategic priorities, operational roadblocks, expected timeline, or business requirements..."
                    className={`w-full p-4 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all resize-y ${
                      errors.message
                        ? 'border-rose-300 bg-rose-50/20 focus:ring-2 focus:ring-rose-200'
                        : 'border-slate-200 bg-white focus:border-[#173F69] focus:ring-2 focus:ring-[#173F69]/15'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-rose-600 text-xs font-medium mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full py-4 px-8 rounded-2xl font-bold text-sm sm:text-base text-white shadow-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                      submitting
                        ? 'bg-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#173F69] via-[#1A4D3E] to-[#0F352A] hover:from-[#0E3154] hover:to-[#09221B] shadow-[0_12px_30px_rgba(23,63,105,0.25)] hover:shadow-[0_15px_35px_rgba(23,63,105,0.35)] transform hover:-translate-y-0.5 active:translate-y-0'
                    }`}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Enquiry</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Submissions are strictly confidential and routed directly to info@vaidimiconsulting.in</span>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>
    </div>
  );
}
