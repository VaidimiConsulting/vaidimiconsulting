import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Mail,
  CheckCircle2,
  Loader2,
  ArrowRight,
  Sparkles,
  Check,
  Send,
  Building2,
  User,
  Phone,
  MessageSquare,
  Clock,
  Compass,
  Layers,
  ShieldCheck
} from 'lucide-react';

// Services shown as clickable chips
const SERVICE_OPTIONS = [
  'Business Consulting',
  'IT Consulting',
  'Software Development',
  'Web Development',
  'Mobile Application Development',
  'Digital Marketing',
  'SEO',
  'Google Ads',
  'Meta Ads',
  'ISO Certification',
  'Other'
];

// Dropdown categories: every service is also a category, so both stay in sync
const ENQUIRY_TYPES = [
  'General Enquiry',
  ...SERVICE_OPTIONS.filter((s) => s !== 'Other'),
  'Multiple Services',
  'Partnership',
  'Other'
];

const LEAD_SOURCES = [
  'Google',
  'LinkedIn',
  'Instagram',
  'Facebook',
  'Referral',
  'Website',
  'Other'
];

const CONTACT_METHODS = ['Email', 'Phone', 'WhatsApp'];

const CONTACT_TIMES = [
  'Anytime (Business Hours)',
  'Morning (9:00 AM - 12:00 PM)',
  'Afternoon (12:00 PM - 4:00 PM)',
  'Evening (4:00 PM - 7:30 PM)'
];

export default function Enquiry() {
  // Optional pre-select from URL, e.g. /enquiry?service=ISO%20Certification
  const [searchParams] = useSearchParams();
  const presetService = searchParams.get('service');
  const validPreset =
    presetService && SERVICE_OPTIONS.includes(presetService) ? presetService : null;

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [enquiryType, setEnquiryType] = useState(validPreset ?? 'General Enquiry');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    validPreset ? [validPreset] : []
  );
  const [projectRequirement, setProjectRequirement] = useState('');
  const [contactMethod, setContactMethod] = useState('Email');
  const [contactTime, setContactTime] = useState('Anytime (Business Hours)');
  const [leadSource, setLeadSource] = useState('Google');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [websiteHp, setWebsiteHp] = useState(''); // Anti-spam honeypot

  // Validation Errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Category dropdown -> auto-select matching service chip
  const handleCategoryChange = (value: string) => {
    setEnquiryType(value);

    if (SERVICE_OPTIONS.includes(value)) {
      setSelectedServices([value]);
    }

    if (errors.enquiryType) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.enquiryType;
        return next;
      });
    }
  };

  // Service chips -> auto-update category dropdown
  const toggleService = (service: string) => {
    const next = selectedServices.includes(service)
      ? selectedServices.filter((s) => s !== service)
      : [...selectedServices, service];

    setSelectedServices(next);

    // Don't override a manually chosen "Partnership"
    if (enquiryType !== 'Partnership') {
      if (next.length === 0) setEnquiryType('General Enquiry');
      else if (next.length === 1) setEnquiryType(next[0]);
      else setEnquiryType('Multiple Services');
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!enquiryType) {
      newErrors.enquiryType = 'Please select an Enquiry Type.';
    }

    if (!projectRequirement.trim()) {
      newErrors.projectRequirement = 'Please describe your project or requirement.';
    }

    if (!privacyConsent) {
      newErrors.privacyConsent = 'Please accept the privacy terms to submit your enquiry.';
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const newErrors = validateForm();
    const errorKeys = Object.keys(newErrors);
    if (errorKeys.length > 0) {
      const el = document.getElementById(errorKeys[0]);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('full_name', fullName);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('company', company);
      formData.append('enquiry_type', enquiryType);

      selectedServices.forEach((s) => formData.append('service_required', s));
      formData.append('project_requirement', projectRequirement);
      formData.append('preferred_contact_method', contactMethod);
      formData.append('preferred_contact_time', contactTime);
      formData.append('lead_source', leadSource);
      formData.append('privacy_consent', String(privacyConsent));
      formData.append('website_hp', websiteHp);

      const response = await fetch('/api/enquiries', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setSubmitError(
          result.message ||
            "We couldn't submit your enquiry right now. Please try again or contact us directly at info@vaidimiconsulting.in."
        );
      }
    } catch (err) {
      setSubmitError(
        "We couldn't submit your enquiry right now. Please try again or contact us directly at info@vaidimiconsulting.in."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-slate-50 via-sky-50/30 to-slate-100 relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Decorative Color Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none -z-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl" />
          <div className="absolute top-12 right-1/4 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          {submitted ? (
            /* ===================================================
               SUCCESS STATE
            =================================================== */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-3xl p-8 md:p-12 shadow-[0_25px_60px_rgba(23,63,105,0.15)] text-center space-y-6 relative overflow-hidden"
            >
              <div className="h-2 w-full bg-gradient-to-r from-emerald-400 via-teal-500 to-sky-500 absolute top-0 left-0" />

              <div className="w-20 h-20 bg-gradient-to-tr from-emerald-500 to-teal-400 text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30 transform rotate-3">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200/80 inline-block mb-3">
                  Enquiry Submitted Successfully
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900">
                  Thank You for Contacting Vaidimi Consulting
                </h2>
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
                Your enquiry regarding <strong className="text-slate-900">{enquiryType}</strong> has been received. Our practice team will review your requirements and respond shortly.
              </p>

              <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 text-left text-xs text-slate-700 space-y-2 max-w-md mx-auto shadow-inner">
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="font-semibold text-slate-500">Full Name:</span>
                  <span className="font-bold text-slate-900">{fullName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="font-semibold text-slate-500">Email:</span>
                  <span className="font-bold text-slate-900">{email}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="font-semibold text-slate-500">Phone:</span>
                  <span className="font-bold text-slate-900">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Preferred Method:</span>
                  <span className="font-bold text-slate-900">{contactMethod}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#173F69] to-[#0E3154] hover:from-[#0E3154] hover:to-[#0A223B] text-white font-semibold text-sm rounded-2xl shadow-lg shadow-[#173F69]/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Back to Home
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ) : (
            /* ===================================================
               ADVANCED CENTERED ENQUIRY FORM
            =================================================== */
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-3xl shadow-[0_20px_60px_rgba(23,63,105,0.12)] overflow-hidden relative"
            >
              {/* Top Vibrant Multi-Color Brand Stripe Accent */}
              <div className="h-2 w-full bg-gradient-to-r from-[#7FC4D9] via-[#E8C84A] via-[#E06B6B] via-[#8FBF6B] to-[#173F69]" />

              <div className="p-6 sm:p-10 lg:p-12">
                {/* Form Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500/10 via-emerald-500/10 to-indigo-500/10 border border-sky-200/80 text-[#173F69] text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#173F69]" />
                    <span>Business & Technology Consultation</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                    Let's Connect & Build Together
                  </h2>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Fill out the form below with your project requirements. We respond to all business enquiries within 4 business hours.
                  </p>
                </div>

                {submitError && (
                  <div className="mb-8 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm leading-relaxed flex items-start gap-3 shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500 mt-1 flex-shrink-0 animate-pulse" />
                    <div>{submitError}</div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-8">
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

                  {/* BLOCK 1: CONTACT INFORMATION */}
                  <div className="space-y-4 bg-slate-50/60 p-5 sm:p-6 rounded-2xl border border-slate-200/70">
                    <div className="flex items-center gap-2 border-b border-slate-200/80 pb-3">
                      <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">
                        <User className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        1. Your Contact Details
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      {/* Full Name */}
                      <div id="fullName" className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
                          <span>Full Name</span>
                          <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="e.g. Rajesh Sharma"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all ${
                              errors.fullName
                                ? 'border-rose-300 bg-rose-50/30 focus:ring-2 focus:ring-rose-200'
                                : 'border-slate-200 bg-white focus:border-[#173F69] focus:ring-2 focus:ring-[#173F69]/15'
                            }`}
                          />
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        </div>
                        {errors.fullName && (
                          <p className="text-rose-600 text-xs font-medium mt-1">{errors.fullName}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div id="email">
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
                          <span>Email Address</span>
                          <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@company.com"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all ${
                              errors.email
                                ? 'border-rose-300 bg-rose-50/30 focus:ring-2 focus:ring-rose-200'
                                : 'border-slate-200 bg-white focus:border-[#173F69] focus:ring-2 focus:ring-[#173F69]/15'
                            }`}
                          />
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        </div>
                        {errors.email && (
                          <p className="text-rose-600 text-xs font-medium mt-1">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div id="phone">
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
                          <span>Phone Number</span>
                          <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 9876543210"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all ${
                              errors.phone
                                ? 'border-rose-300 bg-rose-50/30 focus:ring-2 focus:ring-rose-200'
                                : 'border-slate-200 bg-white focus:border-[#173F69] focus:ring-2 focus:ring-[#173F69]/15'
                            }`}
                          />
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        </div>
                        {errors.phone && (
                          <p className="text-rose-600 text-xs font-medium mt-1">{errors.phone}</p>
                        )}
                      </div>

                      {/* Company Name */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Company / Organization Name <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Enter company or business name"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#173F69] focus:ring-2 focus:ring-[#173F69]/15 transition-all"
                          />
                          <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BLOCK 2: ENQUIRY SPECIFICATION */}
                  <div className="space-y-4 bg-slate-50/60 p-5 sm:p-6 rounded-2xl border border-slate-200/70">
                    <div className="flex items-center gap-2 border-b border-slate-200/80 pb-3">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                        <Layers className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        2. Enquiry Details
                      </h3>
                    </div>

                    <div className="space-y-5 pt-1">
                      {/* Enquiry Type Dropdown */}
                      <div id="enquiryType">
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Enquiry Category <span className="text-rose-500">*</span>
                        </label>
                        <select
                          value={enquiryType}
                          onChange={(e) => handleCategoryChange(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-900 outline-none focus:border-[#173F69] focus:ring-2 focus:ring-[#173F69]/15 transition-all cursor-pointer"
                        >
                          {ENQUIRY_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.enquiryType && (
                          <p className="text-rose-600 text-xs font-medium mt-1">{errors.enquiryType}</p>
                        )}
                      </div>

                      {/* Service Required Multi-select Colorful Pill Badges */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-2">
                          Service Required <span className="text-slate-400 font-normal">(Click to select multiple)</span>
                        </label>
                        <div className="flex flex-wrap gap-2.5">
                          {SERVICE_OPTIONS.map((service) => {
                            const isSelected = selectedServices.includes(service);
                            return (
                              <button
                                key={service}
                                type="button"
                                onClick={() => toggleService(service)}
                                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 border ${
                                  isSelected
                                    ? 'bg-gradient-to-r from-[#173F69] to-[#0EA5E9] text-white border-[#173F69] shadow-md shadow-sky-500/20 scale-[1.02]'
                                    : 'bg-white text-slate-700 border-slate-200/90 hover:border-sky-300 hover:bg-sky-50/50'
                                }`}
                              >
                                <span
                                  className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all ${
                                    isSelected
                                      ? 'bg-white text-[#173F69]'
                                      : 'border border-slate-300 bg-slate-50'
                                  }`}
                                >
                                  {isSelected ? <Check className="w-2.5 h-2.5 stroke-[3]" /> : null}
                                </span>
                                <span>{service}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Project Requirement Textarea */}
                      <div id="projectRequirement">
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
                          <span>Project / Requirement Description</span>
                          <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <textarea
                            rows={4}
                            value={projectRequirement}
                            onChange={(e) => setProjectRequirement(e.target.value)}
                            placeholder="Please describe your business requirement, project idea, software/web needs, or goals..."
                            className={`w-full p-4 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all resize-y ${
                              errors.projectRequirement
                                ? 'border-rose-300 bg-rose-50/30 focus:ring-2 focus:ring-rose-200'
                                : 'border-slate-200 bg-white focus:border-[#173F69] focus:ring-2 focus:ring-[#173F69]/15'
                            }`}
                          />
                        </div>
                        {errors.projectRequirement && (
                          <p className="text-rose-600 text-xs font-medium mt-1">{errors.projectRequirement}</p>
                        )}
                      </div>

                      {/* Contact Preferences */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
                            <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                            <span>Preferred Contact</span>
                          </label>
                          <select
                            value={contactMethod}
                            onChange={(e) => setContactMethod(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium text-slate-900 outline-none focus:border-[#173F69] transition-all cursor-pointer"
                          >
                            {CONTACT_METHODS.map((method) => (
                              <option key={method} value={method}>
                                {method}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>Preferred Time</span>
                          </label>
                          <select
                            value={contactTime}
                            onChange={(e) => setContactTime(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium text-slate-900 outline-none focus:border-[#173F69] transition-all cursor-pointer"
                          >
                            {CONTACT_TIMES.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
                            <Compass className="w-3.5 h-3.5 text-slate-400" />
                            <span>How did you find us?</span>
                          </label>
                          <select
                            value={leadSource}
                            onChange={(e) => setLeadSource(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium text-slate-900 outline-none focus:border-[#173F69] transition-all cursor-pointer"
                          >
                            {LEAD_SOURCES.map((source) => (
                              <option key={source} value={source}>
                                {source}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BLOCK 3: PRIVACY & SUBMIT */}
                  <div className="pt-2 space-y-5">
                    <div id="privacyConsent" className="space-y-1">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={privacyConsent}
                          onChange={(e) => setPrivacyConsent(e.target.checked)}
                          className="mt-0.5 w-4.5 h-4.5 rounded text-[#173F69] focus:ring-[#173F69] border-slate-300 accent-[#173F69] cursor-pointer"
                        />
                        <span className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-900">
                          I agree to be contacted by Vaidimi Consulting regarding my enquiry and understand that my information will be used only for responding to this request. <span className="text-rose-500">*</span>
                        </span>
                      </label>
                      {errors.privacyConsent && (
                        <p className="text-rose-600 text-xs font-medium pl-7.5">{errors.privacyConsent}</p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-slate-400 pl-7.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Your privacy is protected. We will never share your details with third parties.</span>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={submitting}
                        className={`w-full py-4 px-8 rounded-2xl font-bold text-sm sm:text-base text-white shadow-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                          submitting
                            ? 'bg-slate-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-[#173F69] via-[#0E3154] to-[#1A4D3E] hover:from-[#0E3154] hover:to-[#0F352A] shadow-[0_12px_35px_rgba(23,63,105,0.28)] hover:shadow-[0_15px_40px_rgba(23,63,105,0.38)] transform hover:-translate-y-0.5 active:translate-y-0'
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
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}