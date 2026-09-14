import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: services[0]?.title || 'Marketing Consulting',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageBanner
        eyebrow="Contact / Advisory Inquiries"
        title="Initiate an executive consultation"
        description="Tell us about your organization and strategic priorities — a Senior Practice Partner will review and respond within 4 business hours."
        accent="accent"
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr,1.25fr] gap-12 lg:gap-16 items-start">
          
          {/* Contact Details & Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }} 
            className="space-y-8"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 inline-block mb-3">
                Headquarters & Direct Channels
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                We Welcome High-Value Conversations
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you are exploring a multi-year organizational turnaround or seeking specialized counsel for an immediate inflection point, our partners are accessible.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/70 flex items-center justify-center flex-shrink-0 text-emerald-800">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">Corporate Headquarters</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    SH 9/132, MAA Bhawani Nagar Colony, Airport Road, Varanasi - 221002, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/70 flex items-center justify-center flex-shrink-0 text-emerald-800">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">Official Communications</p>
                  <a href="mailto:info@vaidimiconsulting.in" className="text-xs font-medium text-emerald-700 hover:text-emerald-900 transition-colors">
                    info@vaidimiconsulting.in
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">Encrypted inbox monitored 24/7 by partner desk</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/70 flex items-center justify-center flex-shrink-0 text-emerald-800">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">Direct Advisory Line</p>
                  <a href="tel:8869990973" className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 transition-colors">
                    +91 8869990973
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">Mon – Sat: 9:00 AM – 7:30 PM IST</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-12 h-12 rounded-xl bg-slate-200/70 flex items-center justify-center flex-shrink-0 text-slate-700">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">Guaranteed SLA</p>
                  <p className="text-xs text-slate-600">
                    All enterprise inquiries are acknowledged within 4 hours and assigned directly to a Lead Practice Director.
                  </p>
                </div>
              </div>
            </div>

            {/* Confidentiality card */}
            <div className="p-5 rounded-2xl bg-emerald-950 text-white border border-emerald-800/60 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>NDA & Confidentiality Assurance</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                All data, strategic roadmaps, and financials shared are protected under standard non-disclosure agreements prior to formal discovery sessions.
              </p>
            </div>
          </motion.div>

          {/* Form / Success State */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-xl relative"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">Inquiry Received Successfully</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name || 'valued leader'}</strong>. Your consultation request regarding <strong className="text-slate-900">{formData.service}</strong> has been routed to our practice team.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 max-w-sm mx-auto text-left space-y-1">
                  <div><strong>Company:</strong> {formData.company || 'Confidential'}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Next Step:</strong> Partner calendar invitation within 4 business hours.</div>
                </div>
                <div className="pt-4">
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="text-xs">
                    Send Another Inquiry
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">Request Executive Consultation</h3>
                  <p className="text-xs text-slate-500 mt-1">Please provide foundational context so our practice lead can prepare custom benchmarks.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                      placeholder="e.g. Vikram Singhania" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Enterprise / Organization *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                      placeholder="e.g. Acme Industrial Group" 
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Corporate Email *</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                      placeholder="vikram@acme.com" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Contact Number</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                      placeholder="+91 98765 43210" 
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Primary Practice Area of Interest</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white transition-all"
                  >
                    {services.map((service) => (
                      <option key={service.slug} value={service.title}>{service.title}</option>
                    ))}
                    <option value="Enterprise Diagnostics & Multi-Practice Advisory">Enterprise Diagnostics & Multi-Practice Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Key Transformation Objectives & Constraints</label>
                  <textarea 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none transition-all" 
                    placeholder="Briefly describe your growth targets, operational roadblocks, timeline, or current scale..." 
                  />
                </div>

                <Button className="w-full justify-center py-3.5 shadow-lg shadow-emerald-900/20 text-sm font-semibold">
                  <span>Submit Strategic Briefing Request</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>

                <p className="text-[11px] text-center text-slate-400">
                  By submitting, you consent to our team reviewing submitted details under strict mutual confidentiality.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </>
  );
}
