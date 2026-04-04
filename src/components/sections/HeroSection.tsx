"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight, MessageSquare, Mail, Smartphone,
  Camera, Play, CheckCircle2, TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Badge";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { HERO_STATS } from "@/lib/data";

const CHANNELS = [
  { Icon: MessageSquare, label: "WhatsApp", color: "#15803d", live: true, url: "/" },
  { Icon: Mail, label: "Email", color: "#0369a1", live: true, url: "/product/email" },
  { Icon: Smartphone, label: "SMS", color: "#d97706", live: false },
  { Icon: Camera, label: "Instagram", color: "#be185d", live: false },
];

const TRUST = ["No credit card required", "Setup in 10 minutes", "Official Meta BSP"];

export function HeroSection() {
  const [startHref, setStartHref] = useState("https://dashboard.bigbrosai.com/signup");

  useEffect(() => {
    // If user already has a session cookie/token, send them to dashboard
    const hasCookie = document.cookie.includes("accessToken");
    const hasLocal = typeof localStorage !== "undefined" && localStorage.getItem("current-project");
    if (hasCookie || hasLocal) {
      setStartHref("https://dashboard.bigbrosai.com/pt");
    }
  }, []);
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

      {/* Omnichannel illustration — floating channel nodes */}
      <svg aria-hidden="true" className="absolute right-0 top-0 h-full w-[520px] pointer-events-none opacity-[0.55]"
        viewBox="0 0 520 480" fill="none" preserveAspectRatio="xMaxYMid slice">
        <defs>
          <radialGradient id="heroGlow" cx="60%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#f0fdf4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="520" height="480" fill="url(#heroGlow)" />
        {/* Grid dots */}
        {Array.from({ length: 10 }).map((_, r) =>
          Array.from({ length: 13 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={c * 42 + 8} cy={r * 48 + 8} r="1.6" fill="#d1fae5" />
          ))
        )}
        {/* Connection lines */}
        <line x1="260" y1="200" x2="120" y2="100" stroke="#86efac" strokeWidth="2" />
        <line x1="260" y1="200" x2="400" y2="110" stroke="#93c5fd" strokeWidth="2" />
        <line x1="260" y1="200" x2="160" y2="330" stroke="#fcd34d" strokeWidth="2" />
        <line x1="260" y1="200" x2="390" y2="320" stroke="#fca5a5" strokeWidth="2" />
        <line x1="260" y1="200" x2="260" y2="370" stroke="#c4b5fd" strokeWidth="1.5" />
        <line x1="120" y1="100" x2="400" y2="110" stroke="#86efac" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
        <line x1="160" y1="330" x2="390" y2="320" stroke="#fcd34d" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
        {/* Center hub — BigBros AI */}
        <circle cx="260" cy="200" r="44" fill="#f0fdf4" />
        <circle cx="260" cy="200" r="34" fill="#15803d" />
        <text x="260" y="196" textAnchor="middle" fill="white" fontSize="9" fontWeight="800" fontFamily="sans-serif">BigBros</text>
        <text x="260" y="208" textAnchor="middle" fill="white" fontSize="9" fontWeight="800" fontFamily="sans-serif">AI</text>
        {/* Signal rings */}
        <circle cx="260" cy="200" r="52" stroke="#15803d" strokeWidth="1" fill="none" strokeDasharray="5 4" opacity="0.3" />
        <circle cx="260" cy="200" r="62" stroke="#15803d" strokeWidth="0.8" fill="none" strokeDasharray="4 5" opacity="0.15" />
        {/* WhatsApp node */}
        <circle cx="120" cy="100" r="30" fill="#dcfce7" />
        <circle cx="120" cy="100" r="22" fill="#15803d" />
        <rect x="109" y="91" width="22" height="16" rx="4" fill="white" />
        <path d="M109 107 L112 114 L109 114 Z" fill="white" />
        <rect x="112" y="95" width="12" height="2" rx="1" fill="#15803d" />
        <rect x="112" y="99" width="8" height="2" rx="1" fill="#15803d" />
        <text x="120" y="142" textAnchor="middle" fill="#15803d" fontSize="9" fontWeight="700" fontFamily="sans-serif">WhatsApp</text>
        {/* Email node */}
        <circle cx="400" cy="110" r="28" fill="#dbeafe" />
        <circle cx="400" cy="110" r="20" fill="#1d4ed8" />
        <rect x="389" y="102" width="22" height="16" rx="2" fill="white" />
        <path d="M389 102 L400 112 L411 102" stroke="#1d4ed8" strokeWidth="1.5" fill="none" />
        <text x="400" y="150" textAnchor="middle" fill="#1d4ed8" fontSize="9" fontWeight="700" fontFamily="sans-serif">Email</text>
        {/* SMS node */}
        <circle cx="160" cy="330" r="26" fill="#fef3c7" />
        <circle cx="160" cy="330" r="18" fill="#d97706" />
        <rect x="150" y="322" width="20" height="14" rx="4" fill="white" />
        <path d="M150 336 L153 343 L150 343 Z" fill="white" />
        <rect x="153" y="326" width="10" height="2" rx="1" fill="#d97706" />
        <rect x="153" y="330" width="7" height="2" rx="1" fill="#d97706" />
        <text x="160" y="368" textAnchor="middle" fill="#d97706" fontSize="9" fontWeight="700" fontFamily="sans-serif">SMS</text>
        {/* Instagram node */}
        <circle cx="390" cy="320" r="26" fill="#fce7f3" />
        <circle cx="390" cy="320" r="18" fill="#be185d" />
        <rect x="381" y="311" width="18" height="18" rx="5" stroke="white" strokeWidth="1.5" fill="none" />
        <circle cx="390" cy="320" r="4.5" stroke="white" strokeWidth="1.5" fill="none" />
        <circle cx="396" cy="314" r="1.5" fill="white" />
        <text x="390" y="358" textAnchor="middle" fill="#be185d" fontSize="9" fontWeight="700" fontFamily="sans-serif">Instagram</text>
        {/* RCS node */}
        <circle cx="260" cy="370" r="24" fill="#ede9fe" />
        <circle cx="260" cy="370" r="16" fill="#7c3aed" />
        <rect x="251" y="362" width="18" height="14" rx="4" fill="white" />
        <path d="M251 376 L254 382 L251 382 Z" fill="white" />
        <rect x="254" y="366" width="9" height="2" rx="1" fill="#7c3aed" />
        <rect x="254" y="370" width="6" height="2" rx="1" fill="#7c3aed" />
        <text x="260" y="406" textAnchor="middle" fill="#7c3aed" fontSize="9" fontWeight="700" fontFamily="sans-serif">RCS</text>
        {/* Sparkles */}
        <circle cx="70" cy="200" r="3.5" fill="#fcd34d" opacity="0.8" />
        <circle cx="460" cy="220" r="3" fill="#93c5fd" opacity="0.8" />
        <circle cx="310" cy="60" r="3" fill="#86efac" opacity="0.7" />
        <circle cx="200" cy="420" r="3.5" fill="#fca5a5" opacity="0.7" />
        <circle cx="480" cy="380" r="2.5" fill="#c4b5fd" opacity="0.7" />
      </svg>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 items-center">

          {/* ── Left copy ── */}
          <div className="order-2 lg:order-1">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-8">
              <TrendingUp size={13} className="text-brand-700" />
              <span className="text-xs font-semibold text-brand-700">Fastest Growing All-in-One Marketing Platform</span>
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
              {CHANNELS.map(({ Icon, label, color, live, url }) => (
                <Link key={label} href={url || "/"}>
                  <div
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl border text-sm font-medium"
                    style={{ borderColor: color + "40", background: color + "08", color }}
                  >
                    <Icon size={15} />
                    {label}
                    <StatusBadge status={live ? "LIVE" : "SOON"} />
                  </div>
                </Link>
              ))}
            </div>
            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                href={startHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">
                  Start for Free <ArrowRight size={17} />
                </Button>
              </Link>
              <a
                href="https://www.youtube.com/@bigbrosai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary">
                  <span className="w-8 h-8 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center shrink-0">
                    <Play size={13} className="text-brand-700 fill-brand-700 ml-0.5" />
                  </span>
                  Watch Demo
                </Button>
              </a>
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
