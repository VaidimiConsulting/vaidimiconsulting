import { motion } from 'motion/react';
import { Target, Heart, ShieldCheck, Users } from 'lucide-react';

export default function MissionValues() {
  return (
    <main className="min-h-screen bg-white text-[#173F69]">

      {/* =====================================================
          HERO / BANNER
      ===================================================== */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[320px] sm:h-[400px] lg:h-[500px]">

          {/* Banner Image */}
          <img
            src="/images/goal.jpg"

            alt="Vaidimi Consulting"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c39]/80 via-[#0b1c39]/45 to-transparent" />

          {/* Banner Content */}
          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl text-white"
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-white/80">
                Who We Are / Mission & Values
              </p>

              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Guidance, growth,
                <span className="block text-[#cfe8d5]">
                  success — in that order
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/90 sm:text-lg">
                Our mission and the operating values that keep every
                engagement honest.
              </p>
            </motion.div>
          </div>

          {/* Bottom decorative line */}
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#173F69] via-[#78a98a] to-[#173F69]" />
        </div>
      </section>


      {/* =====================================================
          MISSION SECTION
      ===================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#78a98a]" />

                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#78a98a]">
                  Our Mission
                </span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight text-[#173F69] sm:text-4xl lg:text-5xl">
                Turning difficult decisions into
                <span className="block text-[#78a98a]">
                  confident action.
                </span>
              </h2>

              <p className="mt-7 text-base font-semibold leading-8 text-slate-600 sm:text-lg">
                Our mission is simple: help ambitious businesses make their
                hardest decisions with confidence, and stay involved long
                enough to see those decisions pay off.
              </p>

              <p className="mt-5 text-base font-semibold leading-8 text-slate-600 sm:text-lg">
                We believe growth without guidance is just risk, and guidance
                without follow-through is just theory. Success is what happens
                when both are done right, together.
              </p>

              {/* Small highlight */}
              <div className="mt-8 flex items-center gap-4 border-l-4 border-[#78a98a] pl-5">
                <Target className="h-7 w-7 text-[#173F69]" />

                <p className="text-sm font-bold leading-6 text-[#173F69]">
                  Practical guidance. Clear decisions. Measurable growth.
                </p>
              </div>
            </motion.div>


            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="group relative overflow-hidden rounded-[28px]">
                <img
                  src="/images/mission.jpeg"
                  alt="Our Mission"
                  className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[450px]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c39]/60 via-transparent to-transparent" />

                {/* Floating label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-3 rounded-full bg-white/95 px-5 py-3 shadow-lg backdrop-blur">
                    <Target className="h-5 w-5 text-[#173F69]" />

                    <span className="text-sm font-extrabold text-[#173F69]">
                      Purpose-driven consulting
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          VISION SECTION
      ===================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-1"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#173F69]" />

                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#173F69]">
                  Our Vision
                </span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight text-[#173F69] sm:text-4xl lg:text-5xl">
                Building businesses that grow
                <span className="block text-[#78a98a]">
                  with clarity and confidence.
                </span>
              </h2>

              <p className="mt-7 text-base font-semibold leading-8 text-slate-600 sm:text-lg">
                We envision a business environment where ambitious
                organisations can navigate complexity without losing sight of
                what matters most.
              </p>

              <p className="mt-5 text-base font-semibold leading-8 text-slate-600 sm:text-lg">
                Our approach brings strategy, technology and commercial
                thinking together so businesses can create sustainable
                momentum and turn opportunity into meaningful results.
              </p>

              {/* Vision points */}
              <div className="mt-8 grid gap-5 sm:grid-cols-2">

                <div className="flex gap-3">
                  <Heart className="mt-1 h-6 w-6 shrink-0 text-[#78a98a]" />

                  <div>
                    <h3 className="font-extrabold text-[#173F69]">
                      Human at the core
                    </h3>

                    <p className="mt-1 text-sm font-medium leading-6 text-slate-500">
                      Strong relationships create stronger outcomes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Users className="mt-1 h-6 w-6 shrink-0 text-[#78a98a]" />

                  <div>
                    <h3 className="font-extrabold text-[#173F69]">
                      Built together
                    </h3>

                    <p className="mt-1 text-sm font-medium leading-6 text-slate-500">
                      We work alongside teams to create lasting progress.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>


            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-2"
            >
              <div className="group relative overflow-hidden rounded-[28px]">

                <img
                  src="/images/vision1.jpg"
                  alt="Our Vision"
                  className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c39]/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-3 rounded-full bg-white/95 px-5 py-3 shadow-lg backdrop-blur">
                    <ShieldCheck className="h-5 w-5 text-[#173F69]" />

                    <span className="text-sm font-extrabold text-[#173F69]">
                      Growth with confidence
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#78a98a]">
              What Guides Us
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#173F69] sm:text-4xl">
              Values that shape every engagement
            </h2>

            <p className="mt-4 font-medium leading-7 text-slate-500">
              Our values are not just principles on paper. They influence how
              we think, communicate and work with every client.
            </p>
          </motion.div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Target,
                title: 'Outcomes over decks',
                desc: 'We are judged by what changed in the business, not what was presented.',
              },
              {
                icon: Heart,
                title: 'Honesty, even when inconvenient',
                desc: 'We tell clients what they need to hear, not just what they want to hear.',
              },
              {
                icon: Users,
                title: 'Embedded, not distant',
                desc: 'We work alongside your team, not from behind a slide deck.',
              },
              {
                icon: ShieldCheck,
                title: 'Accountability',
                desc: 'If a recommendation does not work, we own that and adjust.',
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_10px_35px_rgba(23,63,105,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#78a98a]/40 hover:shadow-[0_18px_45px_rgba(23,63,105,0.10)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef6f1] transition duration-300 group-hover:bg-[#173F69]">
                    <Icon className="h-6 w-6 text-[#173F69] transition group-hover:text-white" />
                  </div>

                  <h3 className="mt-6 text-lg font-extrabold text-[#173F69]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-6 text-slate-500">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="bg-white pb-20 pt-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[28px] bg-[#173F69] px-7 py-12 text-center sm:px-12 sm:py-16"
          >
            {/* Decorative circles */}
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-white/10" />
            <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full border border-white/10" />

            <div className="relative z-10 mx-auto max-w-3xl">

              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Want to know if we're the right fit?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl font-medium leading-7 text-white/75">
                A first conversation is always free — and honest, in both
                directions.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-[#173F69] transition duration-300 hover:-translate-y-1 hover:bg-[#cfe8d5]"
              >
                Start a Conversation
              </a>

            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}