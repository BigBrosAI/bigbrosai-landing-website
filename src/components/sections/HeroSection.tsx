import Link from "next/link";
import {
  ArrowRight, MessageSquare, Mail, Smartphone,
  Camera, Play, CheckCircle2, TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Badge";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { HERO_STATS } from "@/lib/data";

const CHANNELS = [
  { Icon: MessageSquare, label: "WhatsApp", color: "#15803d", live: true },
  { Icon: Mail, label: "Email", color: "#0369a1", live: false },
  { Icon: Smartphone, label: "SMS", color: "#d97706", live: false },
  { Icon: Camera, label: "Instagram", color: "#be185d", live: false },
];

const TRUST = ["No credit card required", "Setup in 10 minutes", "Official Meta BSP"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-20 px-6">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(21,128,61,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(21,128,61,0.035) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
      {/* Radial fade at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top center, rgba(21,128,61,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 items-center">

          {/* ── Left copy ── */}
          <div className="order-2 lg:order-1">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-8">
              <TrendingUp size={13} className="text-brand-700" />
              <span className="text-xs font-semibold text-brand-700">#1 WhatsApp Marketing Platform in India</span>
            </div>

            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.08] tracking-tight text-gray-900 mb-5">
              Reach Every Customer on{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Every Channel</span>
                <svg className="absolute -bottom-1.5 left-0 w-full" height="5" viewBox="0 0 200 5" preserveAspectRatio="none">
                  <path d="M0 4 Q50 0 100 3 Q150 6 200 2" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
                </svg>
              </span>
            </h1>

            <p className="text-base md:text-[1.1rem] text-slate-500 leading-relaxed mb-8 max-w-xl">
              bigbrosai is the unified platform to Broadcast, Automate & Engage customers across WhatsApp, Email, SMS, RCS and Instagram — all powered by official APIs.
            </p>

            {/* Channel pills */}
            <div className="flex flex-wrap gap-2 mb-9">
              {CHANNELS.map(({ Icon, label, color, live }) => (
                <div key={label}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl border text-sm font-medium"
                  style={{ borderColor: color + "40", background: color + "08", color }}>
                  <Icon size={15} />
                  {label}
                  <StatusBadge status={live ? "LIVE" : "SOON"} />
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                href="https://staging-dashboard.bigbrosai.com/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">
                  Start for Free <ArrowRight size={17} />
                </Button>
              </Link>
              <Button size="lg" variant="secondary">
                <span className="w-8 h-8 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center shrink-0">
                  <Play size={13} className="text-brand-700 fill-brand-700 ml-0.5" />
                </span>
                Watch Demo
              </Button>
            </div>

            {/* Trust bullets */}
            <div className="flex flex-wrap gap-5">
              {TRUST.map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 size={15} className="text-brand-700 shrink-0" />
                  {t}
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex gap-8 flex-wrap mt-10 pt-8 border-t border-gray-100">
              {HERO_STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-display font-black text-xl text-gray-900">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right phone ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="animate-float">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
