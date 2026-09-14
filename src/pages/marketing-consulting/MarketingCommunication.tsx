import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CompactServiceBanner from '@/components/marketing-consulting/CompactServiceBanner';
import ServiceFooterCTA from '@/components/marketing-consulting/ServiceFooterCTA';
import ServiceNavFooter from '@/components/marketing-consulting/ServiceNavFooter';

export default function MarketingCommunication() {
  return (
    <div className="bg-white min-h-screen">
      <CompactServiceBanner
        label="Marketing Consulting"
        title="Marketing Communication — Design & Development"
        headline="Make your message impossible to misunderstand."
        description="Turn your brand strategy into communication that looks clear, feels consistent and connects with your audience."
        bannerImage="/images/marketing-communication-banner.jpg"
        accent="rose-blue"
      />

      {/* SECTION 1: Every message shapes your brand */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
                Every message{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  shapes your brand.
                </span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-full mt-6" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-700 text-lg leading-relaxed font-medium space-y-4"
            >
              <p>Your website, presentation, social media post, brochure and campaign all contribute to how people experience your business.</p>
              <p>We help create communication that connects your message with your audience and your brand.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE DEVELOP */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-16 text-center tracking-tight">
            What We Develop
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "BRAND MESSAGING",
                items: ["Taglines", "Key messages", "Brand voice", "Communication themes"],
                color: "text-[#D95C5C]",
                bg: "bg-rose-50 border-rose-100"
              },
              {
                title: "MARKETING MATERIALS",
                items: ["Company profiles", "Brochures", "Presentations", "Flyers"],
                color: "text-[#168FC5]",
                bg: "bg-sky-50 border-sky-100"
              },
              {
                title: "DIGITAL COMMUNICATION",
                items: ["Website content direction", "Social media creatives", "Landing page communication", "Digital campaign assets"],
                color: "text-[#16a34a]",
                bg: "bg-emerald-50 border-emerald-100"
              },
              {
                title: "CAMPAIGN COMMUNICATION",
                items: ["Campaign concepts", "Launch communication", "Promotional campaigns", "Seasonal campaigns"],
                color: "text-[#123B61]",
                bg: "bg-slate-100 border-slate-200"
              }
            ].map((section, idx) => (
               <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-3xl border ${section.bg} shadow-sm`}
               >
                 <h3 className={`font-display font-bold text-lg tracking-wider uppercase mb-6 ${section.color}`}>
                   {section.title}
                 </h3>
                 <ul className="space-y-4">
                   {section.items.map((item, i) => (
                     <li key={i} className="flex items-center gap-3">
                       <span className={`w-2 h-2 rounded-full ${section.color.replace('text-', 'bg-')}`} />
                       <span className="font-medium text-slate-800">{item}</span>
                     </li>
                   ))}
                 </ul>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FOUR PRINCIPLES */}
      <section className="py-20 lg:py-32 bg-white overflow-hidden border-b border-slate-100">
         <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-10">
           {["CLEAR", "CONSISTENT", "RELEVANT", "MEMORABLE"].map((word, idx) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-200 hover:text-[#168FC5] transition-colors duration-500 cursor-default"
              >
                {word}
              </motion.div>
           ))}
         </div>
      </section>

      {/* SECTION 4: From message to market */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white text-center">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
           <h2 className="font-display text-4xl sm:text-5xl font-extrabold mb-16 tracking-tight">
             From message to market.
           </h2>
           <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16 text-lg sm:text-xl font-bold text-slate-300">
             <span>Idea</span>
             <ArrowRight className="text-[#D95C5C] rotate-90 md:rotate-0" />
             <span>Message</span>
             <ArrowRight className="text-[#D95C5C] rotate-90 md:rotate-0" />
             <span>Design</span>
             <ArrowRight className="text-[#D95C5C] rotate-90 md:rotate-0" />
             <span>Communication</span>
             <ArrowRight className="text-[#D95C5C] rotate-90 md:rotate-0" />
             <span className="text-white">Audience</span>
           </div>
           <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#168FC5] hover:bg-[#0284c7] text-white font-bold px-9 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Improve Your Communication</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
        </div>
      </section>

      <ServiceFooterCTA />
      <ServiceNavFooter currentSlug="marketing-communication" />
    </div>
  );
}
