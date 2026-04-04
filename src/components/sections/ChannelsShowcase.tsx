import Link from "next/link";
import { ArrowRight, MessageSquare, Mail, Smartphone, Gem, Camera, Check } from "lucide-react";

const CHANNELS = [
  {
    icon: MessageSquare,
    name: "WhatsApp",
    color: "#15803d",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    status: "LIVE",
    stat: "98%",
    statLabel: "open rate",
    reach: "2.6B+ users",
    desc: "Broadcast templates, automate conversations, collect payments and run Click-to-WhatsApp Ads via official Meta Business APIs.",
    bullets: ["Template broadcasting", "AI chatbot & flows", "Green Tick verification", "WhatsApp Pay"],
    href: "/channels#whatsapp",
  },
  {
    icon: Mail,
    name: "Email",
    color: "#1d4ed8",
    bg: "#eff6ff",
    border: "#bfdbfe",
    status: "LIVE",
    stat: "300",
    statLabel: "free/day",
    reach: "4B+ users",
    desc: "Send transactional emails from your verified domain. 300 free emails per day — no credit card, no expiry.",
    bullets: ["DKIM/SPF/DMARC auth", "Custom domain sending", "Delivery webhooks", "₹0.125/email after free"],
    href: "/channels#email",
  },
  {
    icon: Smartphone,
    name: "SMS",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
    status: "SOON",
    stat: "98%",
    statLabel: "open rate",
    reach: "7B+ devices",
    desc: "SMS delivers everywhere — no internet required. Perfect for OTPs, alerts, and time-sensitive promotions.",
    bullets: ["190+ countries", "OTP & verification", "DLT compliance (India)", "Delivery receipts"],
    href: "/channels#sms",
  },
  {
    icon: Gem,
    name: "RCS",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
    status: "SOON",
    stat: "70%",
    statLabel: "open rate",
    reach: "1B+ Android",
    desc: "Rich Communication Services — the next evolution of SMS. Send interactive cards, carousels, and branded messages.",
    bullets: ["Rich cards & carousels", "Verified sender", "Suggested replies", "Read receipts"],
    href: "/channels#rcs",
  },
  {
    icon: Camera,
    name: "Instagram DM",
    color: "#be185d",
    bg: "#fdf2f8",
    border: "#fbcfe8",
    status: "SOON",
    stat: "85%",
    statLabel: "open rate",
    reach: "2B+ users",
    desc: "Automate Instagram Direct Messages. Respond to story mentions, DMs and comments automatically.",
    bullets: ["Auto-reply to DMs", "Story mention triggers", "Lead capture forms", "Handoff to live agent"],
    href: "/channels#instagram",
  },
];

export function ChannelsShowcase() {
  return (
    <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-[11px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-700" /> 5 Channels · 1 Dashboard
          </div>
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight leading-[1.1] mb-4">
            Every channel your customers use,{" "}
            <span className="text-gradient">unified in one place</span>
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto">
            Stop juggling tools. bigbrosai connects WhatsApp, Email, SMS, RCS and Instagram so you can reach every customer from a single dashboard.
          </p>
        </div>

        {/* Channel grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {CHANNELS.map((ch) => {
            const Icon = ch.icon;
            const isLive = ch.status === "LIVE";
            return (
              <div key={ch.name}
                className="bg-white rounded-2xl border overflow-hidden flex flex-col"
                style={{ borderColor: ch.border }}>
                {/* Top bar */}
                <div className="h-1" style={{ background: ch.color }} />

                <div className="p-6 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: ch.bg, color: ch.color }}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-display font-bold text-gray-900 text-base">{ch.name}</span>
                          <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full"
                            style={{ background: isLive ? ch.color + "15" : "#f1f5f9", color: isLive ? ch.color : "#94a3b8" }}>
                            {ch.status}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">{ch.reach}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-black text-xl leading-none" style={{ color: ch.color }}>{ch.stat}</p>
                      <p className="text-[10px] text-slate-400">{ch.statLabel}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{ch.desc}</p>

                  {/* Bullets */}
                  <div className="grid grid-cols-2 gap-1.5 mb-5 flex-1">
                    {ch.bullets.map((b) => (
                      <div key={b} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <Check size={11} style={{ color: ch.color }} className="shrink-0" />
                        {b}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href={ch.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold mt-auto"
                    style={{ color: ch.color }}>
                    {isLive ? "Get started" : "Learn more"}
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* "All channels" card */}
          <div className="bg-gradient-to-br from-brand-700 to-brand-800 rounded-2xl p-6 flex flex-col justify-between text-white">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-white/60 mb-3">Coming Together</p>
              <h3 className="font-display font-black text-xl leading-tight mb-3">
                One inbox for every channel
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                All your customer conversations — WhatsApp, Email, SMS, RCS and Instagram — in a single unified inbox. Never miss a message.
              </p>
            </div>
            <Link href="/channels"
              className="inline-flex items-center gap-2 mt-6 bg-white/15 hover:bg-white/25 border border-white/25 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all self-start">
              View all channels <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
