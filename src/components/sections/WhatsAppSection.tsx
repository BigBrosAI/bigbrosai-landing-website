import {
  TrendingUp, MousePointerClick, Users, BadgeDollarSign,
  MessageSquare, Send, Eye, BarChart3, ArrowUp,
  Zap, CheckCircle2, Activity,
} from "lucide-react";
import { Section } from "@/components/ui/Section";

/* ── Stats grid ─────────────────────────────────────────── */
const WA_STATS = [
  {
    value: "98%",
    label: "Open Rate",
    sub: "vs 22% for Email",
    Icon: Eye,
    accent: "#15803d",
    bg: "rgba(21,128,61,0.12)",
    border: "rgba(21,128,61,0.25)",
  },
  {
    value: "45%",
    label: "Click Rate",
    sub: "vs 2% for Email",
    Icon: MousePointerClick,
    accent: "#15803d",
    bg: "rgba(21,128,61,0.08)",
    border: "rgba(21,128,61,0.18)",
  },
  {
    value: "2.6B+",
    label: "Active Users",
    sub: "Global daily reach",
    Icon: Users,
    accent: "#15803d",
    bg: "rgba(21,128,61,0.12)",
    border: "rgba(21,128,61,0.25)",
  },
  {
    value: "3×",
    label: "Higher ROI",
    sub: "vs other channels",
    Icon: BadgeDollarSign,
    accent: "#15803d",
    bg: "rgba(21,128,61,0.08)",
    border: "rgba(21,128,61,0.18)",
  },
];

/* ── Campaign funnel rows ────────────────────────────────── */
const FUNNEL = [
  { label: "Messages Sent", val: "12,450", pct: 100, Icon: Send },
  { label: "Delivered", val: "12,321", pct: 99, Icon: CheckCircle2 },
  { label: "Opened", val: "11,892", pct: 96, Icon: Eye },
  { label: "Clicked", val: "5,803", pct: 47, Icon: MousePointerClick },
];

/* ── Footer metrics ──────────────────────────────────────── */
const METRICS = [
  { label: "Conversion", value: "18.3%", Icon: TrendingUp },
  { label: "Revenue", value: "₹2.4L", Icon: BadgeDollarSign },
  { label: "ROAS", value: "5.2×", Icon: BarChart3 },
];

export function WhatsAppSection() {
  return (
    <Section bg="dark">
      {/* ── Section label ── */}
      <div className="flex justify-center mb-14">
        <div className="inline-flex items-center gap-2 bg-brand-700/20 border border-brand-700/30 text-brand-400 text-[11px] font-bold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full">
          <MessageSquare size={12} />
          Why WhatsApp
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start max-w-6xl mx-auto">

        {/* ── Left column ── */}
        <div>
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-[2.7rem] leading-[1.1] tracking-tight mb-4">
            <span className="text-white">WhatsApp delivers</span>
            <br />
            <span
              className="font-black"
              style={{
                background: "linear-gradient(135deg, #4ade80 0%, #15803d 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              the highest ROI
            </span>
          </h2>

          <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-md">
            With 2.6B+ users and 98% open rates, WhatsApp outperforms every other marketing channel — by a wide margin.
          </p>

          {/* Stats 2×2 grid */}
          <div className="grid grid-cols-2 gap-3">
            {WA_STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-5 flex flex-col gap-3 group hover:-translate-y-0.5 transition-transform duration-200"
                style={{ background: s.bg, border: `1px solid ${s.border}` }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(21,128,61,0.2)" }}
                >
                  <s.Icon size={17} style={{ color: "#4ade80" }} />
                </div>
                <div>
                  <div className="font-display font-black text-3xl text-white leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="font-semibold text-sm text-slate-200">{s.label}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick proof point */}
          <div className="mt-6 flex items-center gap-2.5 text-sm text-slate-400">
            <ArrowUp size={14} className="text-green-400 shrink-0" />
            WhatsApp open rates are{" "}
            <span className="font-bold text-green-400">4.5× higher</span>{" "}
            than email on average.
          </div>
        </div>

        {/* ── Right column — dashboard card ── */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Card header */}
          <div
            className="px-6 py-4 flex items-center justify-between"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-700/30 flex items-center justify-center">
                <BarChart3 size={16} className="text-green-400" />
              </div>
              <div>
                <div className="text-white text-sm font-semibold leading-tight">Campaign Analytics</div>
                <div className="text-slate-500 text-[10px]">Last 7 days</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full">
              <Activity size={10} className="text-green-400 animate-pulse" />
              <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">Live</span>
            </div>
          </div>

          {/* Funnel bars */}
          <div className="px-6 py-5 space-y-4">
            {FUNNEL.map((r, idx) => (
              <div key={r.label}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <r.Icon
                      size={13}
                      className="shrink-0"
                      style={{ color: idx === 0 ? "#94a3b8" : "#4ade80" }}
                    />
                    <span className="text-xs text-slate-400">{r.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white tabular-nums">{r.val}</span>
                    <span
                      className="text-[10px] font-semibold tabular-nums"
                      style={{ color: r.pct >= 90 ? "#4ade80" : r.pct >= 50 ? "#a3e635" : "#fbbf24" }}
                    >
                      {r.pct}%
                    </span>
                  </div>
                </div>
                {/* Track */}
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${r.pct}%`,
                      background:
                        r.pct === 100
                          ? "rgba(148,163,184,0.5)"
                          : "linear-gradient(90deg, #15803d, #4ade80)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "0 24px" }} />

          {/* Bottom metrics row */}
          <div className="px-6 py-5 grid grid-cols-3 gap-2">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="rounded-xl p-3.5 text-center"
                style={{ background: "rgba(21,128,61,0.1)", border: "1px solid rgba(21,128,61,0.2)" }}
              >
                <m.Icon size={14} className="text-green-400 mx-auto mb-2" />
                <div
                  className="font-display font-black text-lg leading-none mb-1"
                  style={{ color: "#4ade80" }}
                >
                  {m.value}
                </div>
                <div className="text-[10px] text-slate-500 font-medium">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Powered by badge */}
          <div
            className="px-6 py-3 flex items-center justify-center gap-2"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <Zap size={11} className="text-brand-400" />
            <span className="text-[10px] text-slate-600 font-medium">
              Powered by bigbrosai · Official Meta BSP
            </span>
          </div>
        </div>

      </div>
    </Section>
  );
}