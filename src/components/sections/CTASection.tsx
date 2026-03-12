"use client";

import { ArrowRight, CalendarDays, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  const clickStart = () => {
    window.open("https://staging-dashboard.bigbrosai.com", "_blank");
  };

  const clickDemo = () => {
    window.open("https://calendly.com/founderbbai/30min", "_blank");
  };

  return (
    <section className="py-24 px-6 bg-brand-700 relative overflow-hidden">

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

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
          Join 50,000+ businesses using bigbrosai. Start with 1,000 free
          messages — no credit card required.
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
          ✓ No setup fee · ✓ Free WhatsApp API access · ✓ Cancel anytime
        </p>
      </div>
    </section>
  );
}