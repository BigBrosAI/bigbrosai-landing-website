import Link from "next/link";
import {
  ArrowRight, Mail, LayoutTemplate, Send, Users,
  Play, CheckCircle2, TrendingUp, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Badge";
import { EmailMockup } from "@/components/ui/EmailMockup";

const HIGHLIGHTS = [
  { Icon: Sparkles, label: "99.99% Guaranteed Uptime", color: "#8b5cf6" },
  { Icon: LayoutTemplate, label: "Developer Friendly API", color: "#ec4899" },
  { Icon: Send, label: "SMTP Relay Support", color: "#14b8a6" },
  { Icon: Users, label: "Real-time Webhooks", color: "#f59e0b" },
];

const TRUST = ["Built for developers", "Setup in 10 minutes", "Global Infrastructure"];

const HERO_STATS = [
  { value: "< 1s", label: "Global Latency" },
  { value: "45M+", label: "API Calls Daily" },
  { value: "99.99%", label: "Uptime SLA" },
];

export function HeroSectionEmail() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-20 px-6">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(3,105,161,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(3,105,161,0.035) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
      {/* Radial fade at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top center, rgba(3,105,161,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* ── Left copy ── */}
          <div className="order-2 lg:order-1">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-8">
              <TrendingUp size={13} className="text-blue-700" />
              <span className="text-xs font-semibold text-blue-700">Enterprise-Grade Email Marketing</span>
            </div>

            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.08] tracking-tight text-gray-900 mb-5">
              Reliable Transactional{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">Email API</span>
                <svg className="absolute -bottom-1.5 left-0 w-full" height="5" viewBox="0 0 200 5" preserveAspectRatio="none">
                  <path d="M0 4 Q50 0 100 3 Q150 6 200 2" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
                </svg>
              </span>
            </h1>

            <p className="text-base md:text-[1.1rem] text-slate-500 leading-relaxed mb-8 max-w-xl">
              Send OTPs, password resets, and critical alerts with confidence. bigbrosai offers an enterprise-grade REST API and SMTP relay with guaranteed sub-second delivery.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mb-9">
              {HIGHLIGHTS.map(({ Icon, label, color }) => (
                <div key={label}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl border text-sm font-medium bg-white shadow-sm"
                  style={{ borderColor: "rgba(0,0,0,0.05)", color: "#334155" }}>
                  <Icon size={15} style={{ color }} />
                  {label}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                href="https://dashboard.bigbrosai.com/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="h-12 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 flex items-center gap-2 transition-all">
                  Start Sending Free <ArrowRight size={17} />
                </button>
              </Link>
              <Button size="lg" variant="secondary">
                <span className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                  <Play size={13} className="text-blue-700 fill-blue-700 ml-0.5" />
                </span>
                Watch Demo
              </Button>
            </div>

            {/* Trust bullets */}
            <div className="flex flex-wrap gap-5">
              {TRUST.map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 size={15} className="text-blue-600 shrink-0" />
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

          {/* ── Right Dashboard Realistic Mockup ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="animate-float w-full flex justify-center lg:justify-end">
              <EmailMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
