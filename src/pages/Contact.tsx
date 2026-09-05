import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';

export default function Contact() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Let's talk about your next move"
        description="Tell us a bit about your business and what you're trying to solve — a partner will get back to you within a business day."
        accent="accent"
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr,1.2fr] gap-14">
          {/* Contact info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-8">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-accent-dark" />
              </div>
              <div>
                <p className="font-medium text-text-primary mb-1">Office</p>
                <p className="text-sm text-text-secondary">Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent-gold/15 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-text-primary mb-1">Email</p>
                <p className="text-sm text-text-secondary">hello@vaidimiconsulting.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent-blue/15 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-text-primary mb-1">Phone</p>
                <p className="text-sm text-text-secondary">+91 522 000 0000</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-text-secondary mb-1.5 block">Full name</label>
                <input type="text" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs font-medium text-text-secondary mb-1.5 block">Company</label>
                <input type="text" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="Company name" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1.5 block">Email</label>
              <input type="email" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="name@company.com" />
            </div>
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1.5 block">What are you looking for help with?</label>
              <select className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary bg-white">
                {services.map((service) => (
                  <option key={service.slug}>{service.title}</option>
                ))}
                <option>Not sure yet</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1.5 block">Message</label>
              <textarea rows={4} className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary resize-none" placeholder="Tell us a bit about what you're working through..." />
            </div>
            <Button className="w-full justify-center">Send message</Button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
