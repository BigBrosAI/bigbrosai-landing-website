"use client";

import { ArrowRight, CalendarDays, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  const clickStart = () => {
    window.open("https://dashboard.bigbrosai.com", "_blank");
  };

  const clickDemo = () => {
    window.open("https://calendly.com/founderbbai/30min", "_blank");
  };

  return (
    <section className="py-24 px-6 bg-brand-700 relative overflow-hidden">

      {/* Omnichannel illustration — floating channel nodes */}
      <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.12]"
        viewBox="0 0 1200 400" fill="none" preserveAspectRatio="xMidYMid slice">
        {/* Grid dots */}
        {Array.from({ length: 9 }).map((_, r) =>
          Array.from({ length: 26 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={c * 48 + 12} cy={r * 46 + 12} r="1.8" fill="white" />
          ))
        )}
        {/* Connection lines */}
        <line x1="200" y1="180" x2="400" y2="120" stroke="white" strokeWidth="1.5" />
        <line x1="400" y1="120" x2="600" y2="200" stroke="white" strokeWidth="1.5" />
        <line x1="600" y1="200" x2="800" y2="130" stroke="white" strokeWidth="1.5" />
        <line x1="800" y1="130" x2="1000" y2="200" stroke="white" strokeWidth="1.5" />
        <line x1="200" y1="180" x2="300" y2="300" stroke="white" strokeWidth="1" />
        <line x1="600" y1="200" x2="700" y2="320" stroke="white" strokeWidth="1" />
        <line x1="1000" y1="200" x2="900" y2="310" stroke="white" strokeWidth="1" />
        {/* Nodes */}
        <circle cx="200" cy="180" r="18" fill="white" opacity="0.2" />
        <circle cx="400" cy="120" r="22" fill="white" opacity="0.2" />
        <circle cx="600" cy="200" r="28" fill="white" opacity="0.25" />
        <circle cx="800" cy="130" r="20" fill="white" opacity="0.2" />
        <circle cx="1000" cy="200" r="18" fill="white" opacity="0.2" />
        <circle cx="300" cy="300" r="14" fill="white" opacity="0.15" />
        <circle cx="700" cy="320" r="14" fill="white" opacity="0.15" />
        <circle cx="900" cy="310" r="14" fill="white" opacity="0.15" />
      </svg>

      {/* Radial */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(255,255,255,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-7">
          <ShieldCheck size={13} className="text-white/80" />
          <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">
            Setup in 10 minutes — no credit card
          </span>
        </div>

        <h2 className="font-display font-black text-white text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-5">
          Ready to 10× your
          <br />
          customer engagement?
        </h2>

        <p className="text-white/75 text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          Join 50,000+ businesses using bigbrosai across WhatsApp, Email, SMS & more. Start free — no credit card required.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="bg-white text-brand-700 hover:bg-gray-50 shadow-xl border-0 font-bold"
            onClick={clickStart}
          >
            Start for Free <ArrowRight size={17} />
          </Button>

          <Button
            size="lg"
            className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 font-semibold"
            onClick={clickDemo}
          >
            <CalendarDays size={17} /> Book a Demo
          </Button>
        </div>

        <p className="text-white/50 text-sm">
          ✓ No setup fee · ✓ Free WhatsApp & Email API · ✓ Cancel anytime
        </p>
      </div>
    </section>
  );
}