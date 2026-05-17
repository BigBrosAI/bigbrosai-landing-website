"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Repeat, Zap } from "lucide-react";

const WA_MIGRATE =
  "https://wa.me/918279305027?text=" +
  encodeURIComponent("Hi BigBros AI, I already have a WABA and want to plan a zero-downtime migration. Please help.");

function Reveal({
  children, delay = 0, className,
}: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

const STEPS = [
  { Icon: Smartphone, t: "We connect your number", d: "We handle the Meta side. You keep your existing WABA and green tick — nothing is recreated." },
  { Icon: Repeat, t: "We port everything", d: "Contacts database, approved templates, chat history and settings move across, fully intact." },
  { Icon: Zap, t: "You go live — same day", d: "Campaigns resume with zero downtime. A dedicated relationship manager oversees the switch." },
];

export function MigrationSection() {
  return (
    <section className="px-5 sm:px-6 py-16 sm:py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-[11px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full mb-5">
              <Repeat size={12} /> Already on a WABA?
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-900 tracking-tight leading-[1.1] mb-3">
              Switch in minutes, <span className="text-gradient">not weeks</span>
            </h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto">
              Seamless zero-downtime migration from your current vendor. Keep
              selling while we move everything for you.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.1}>
              <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-6 sm:p-7">
                <span className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-brand-700 text-white font-display font-black text-sm flex items-center justify-center shadow-brand">
                  {i + 1}
                </span>
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-4">
                  <s.Icon size={20} className="text-brand-700" />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{s.t}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-7 sm:mt-8 rounded-2xl px-6 sm:px-10 py-9 sm:py-10 flex flex-col items-center text-center gap-6"
            style={{ background: "linear-gradient(135deg,#0f3d24 0%,#15803d 60%,#16a34a 100%)" }}>
            <p className="text-white font-semibold text-lg sm:text-2xl leading-snug max-w-2xl">
              We move you over instantly — <span className="font-black">nothing is lost.</span>
            </p>
            <p className="text-white/75 text-sm sm:text-base max-w-xl">
              Your contacts, approved templates, chat history and green tick come
              with you. Zero downtime, no setup headache.
            </p>
            <a
              href={WA_MIGRATE}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white text-[#15803d] font-bold text-base px-9 py-4 rounded-2xl shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-transform w-full sm:w-auto justify-center"
            >
              Plan my migration
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
