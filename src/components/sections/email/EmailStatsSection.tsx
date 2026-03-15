import {
  TrendingUp, MousePointerClick, Users, BadgeDollarSign,
  Mail, Send, Eye, BarChart3, ArrowUp,
  Zap, CheckCircle2, Activity,
} from "lucide-react";
import { Section } from "@/components/ui/Section";

/* ── Stats grid ─────────────────────────────────────────── */
const EMAIL_STATS = [
  {
    value: "99.99%",
    label: "Uptime SLA",
    sub: "Enterprise-grade reliability",
    Icon: Zap,
    accent: "#0ea5e9", // sky-500
    bg: "rgba(14, 165, 233, 0.12)",
    border: "rgba(14, 165, 233, 0.25)",
  },
  {
    value: "< 1s",
    label: "Delivery Latency",
    sub: "Lightning fast processing",
    Icon: Send,
    accent: "#0ea5e9",
    bg: "rgba(14, 165, 233, 0.08)",
    border: "rgba(14, 165, 233, 0.18)",
  },
  {
    value: "99%",
    label: "Inbox Placement",
    sub: "Automated IP Warmup",
    Icon: CheckCircle2,
    accent: "#0ea5e9",
    bg: "rgba(14, 165, 233, 0.12)",
    border: "rgba(14, 165, 233, 0.25)",
  },
  {
    value: "10M+",
    label: "API Calls / Day",
    sub: "Built for massive scale",
    Icon: BarChart3,
    accent: "#0ea5e9",
    bg: "rgba(14, 165, 233, 0.08)",
    border: "rgba(14, 165, 233, 0.18)",
  },
];

/* ── Campaign funnel rows ────────────────────────────────── */
const FUNNEL = [
  { label: "API Requests", val: "1,450,210", pct: 100, Icon: Activity },
  { label: "Processed", val: "1,449,850", pct: 99.9, Icon: CheckCircle2 },
  { label: "Delivered", val: "1,448,010", pct: 99.8, Icon: Send },
  { label: "Bounces", val: "1,840", pct: 0.1, Icon: Eye },
];

/* ── Footer metrics ──────────────────────────────────────── */
const METRICS = [
  { label: "Avg Latency", value: "350ms", Icon: Zap },
  { label: "Webhooks", value: "8M+", Icon: Activity },
  { label: "Spam Rate", value: "0.01%", Icon: BarChart3 },
];

export function EmailStatsSection() {
  return (
    <Section bg="dark">
      {/* ── Section label ── */}
      <div className="flex justify-center mb-14">
        <div className="inline-flex items-center gap-2 bg-sky-900/40 border border-sky-800/50 text-sky-400 text-[11px] font-bold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full">
          <Mail size={12} />
          Why Email Marketing
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start max-w-6xl mx-auto">

        {/* ── Left column ── */}
        <div>
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-[2.7rem] leading-[1.1] tracking-tight mb-4">
            <span className="text-white">Built for scale,</span>
            <br />
            <span
              className="font-black"
              style={{
                background: "linear-gradient(135deg, #38bdf8 0%, #0369a1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              engineered for delivery
            </span>
          </h2>

          <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-md">
            Whether you are sending a single password reset or 10 million receipts, our distributed infrastructure guarantees delivery in milliseconds.
          </p>

          {/* Stats 2×2 grid */}
          <div className="grid grid-cols-2 gap-3">
            {EMAIL_STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-5 flex flex-col gap-3 group hover:-translate-y-0.5 transition-transform duration-200"
                style={{ background: s.bg, border: `1px solid ${s.border}` }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(14, 165, 233, 0.2)" }}
                >
                  <s.Icon size={17} style={{ color: "#38bdf8" }} />
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
            <ArrowUp size={14} className="text-sky-400 shrink-0" />
            Our automated warm-up ensures you get{" "}
            <span className="font-bold text-sky-400">primary tab</span>{" "}
            placement.
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
              <div className="w-8 h-8 rounded-lg bg-sky-900/40 flex items-center justify-center">
                <Activity size={16} className="text-sky-400" />
              </div>
              <div>
                <div className="text-white text-sm font-semibold leading-tight">API Infrastructure Logs</div>
                <div className="text-slate-500 text-[10px]">Real-time Event Stream</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full">
              <Activity size={10} className="text-sky-400 animate-pulse" />
              <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">Live</span>
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
                      style={{ color: idx === 0 ? "#94a3b8" : "#38bdf8" }}
                    />
                    <span className="text-xs text-slate-400">{r.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white tabular-nums">{r.val}</span>
                    <span
                      className="text-[10px] font-semibold tabular-nums"
                      style={{ color: r.pct >= 90 ? "#38bdf8" : r.pct >= 30 ? "#7dd3fc" : "#fbbf24" }}
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
                          : "linear-gradient(90deg, #0284c7, #38bdf8)",
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
                style={{ background: "rgba(14, 165, 233, 0.1)", border: "1px solid rgba(14, 165, 233, 0.2)" }}
              >
                <m.Icon size={14} className="text-sky-400 mx-auto mb-2" />
                <div
                  className="font-display font-black text-lg leading-none mb-1"
                  style={{ color: "#38bdf8" }}
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
            <Zap size={11} className="text-sky-400" />
            <span className="text-[10px] text-slate-600 font-medium">
              Powered by bigbrosai Email Engine
            </span>
          </div>
        </div>

      </div>
    </Section>
  );
}
