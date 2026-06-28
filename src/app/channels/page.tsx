import type { Metadata } from "next";
import {
  MessageSquare, Mail, Smartphone, Gem, Camera,
  Check, Users, TrendingUp, ArrowRight,
  Megaphone, Bot, CreditCard, BadgeCheck, LayoutGrid,
  SplitSquareHorizontal, MousePointerClick, MailX, ShieldCheck,
  Timer, Globe2, Hash, Receipt, Languages,
  Layers, UserCheck, BookOpen, Tag, LayoutDashboard,
  Reply, AtSign, Search, Package, UserRoundCog,
  MessageCircle, Star, Zap, Activity,
} from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { CHANNELS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Channels — WhatsApp, Email, SMS, RCS & Instagram",
  description:
    "Reach customers on every channel — WhatsApp, Email, SMS, RCS and Instagram DM — all managed from one BigBros AI dashboard. Official Meta Business API, 98% open rates.",
  alternates: { canonical: "https://www.bigbrosai.com/channels" },
};

const CHANNEL_ICONS: Record<string, React.ReactNode> = {
  "WhatsApp": <MessageSquare size={26} />,
  "Email": <Mail size={26} />,
  "SMS": <Smartphone size={26} />,
  "RCS": <Gem size={26} />,
  "Instagram DM": <Camera size={26} />,
};

const FEATURE_ICONS: Record<string, React.ReactNode> = {
  "Template message broadcasting": <Megaphone size={14} />,
  "AI chatbot & flow builder": <Bot size={14} />,
  "WhatsApp Pay integration": <CreditCard size={14} />,
  "Green Tick verification": <BadgeCheck size={14} />,
  "Click-to-WhatsApp Ads": <MousePointerClick size={14} />,
  "Multi-agent shared inbox": <LayoutGrid size={14} />,
  "Drag-and-drop email builder": <LayoutDashboard size={14} />,
  "A/B split testing": <SplitSquareHorizontal size={14} />,
  "Open & click tracking": <MousePointerClick size={14} />,
  "Unsubscribe management": <MailX size={14} />,
  "DKIM/SPF authentication": <ShieldCheck size={14} />,
  "Drip campaign sequences": <Timer size={14} />,
  "Global delivery (190+ countries)": <Globe2 size={14} />,
  "OTP & verification flows": <Hash size={14} />,
  "Short code & long code": <Receipt size={14} />,
  "Delivery receipts": <Check size={14} />,
  "Unicode message support": <Languages size={14} />,
  "DLT compliance (India)": <ShieldCheck size={14} />,
  "Rich cards & carousels": <Layers size={14} />,
  "Verified business sender": <UserCheck size={14} />,
  "Read receipts": <BookOpen size={14} />,
  "Suggested reply buttons": <Reply size={14} />,
  "Location sharing": <Tag size={14} />,
  "Payment integration": <CreditCard size={14} />,
  "Auto-reply to DMs & comments": <MessageCircle size={14} />,
  "Story mention triggers": <AtSign size={14} />,
  "Keyword-based flows": <Search size={14} />,
  "Lead capture forms": <UserRoundCog size={14} />,
  "Product catalog sharing": <Package size={14} />,
  "Handoff to live agent": <UserCheck size={14} />,
};

const CHANNEL_STATS: Record<string, Array<{ icon: React.ReactNode; label: string; value: string }>> = {
  "WhatsApp": [
    { icon: <TrendingUp size={14} />, label: "Open Rate", value: "98%" },
    { icon: <Users size={14} />, label: "Active Users", value: "2.6B+" },
    { icon: <Zap size={14} />, label: "Delivery", value: "99.9%" },
  ],
  "Email": [
    { icon: <TrendingUp size={14} />, label: "Open Rate", value: "22%" },
    { icon: <Users size={14} />, label: "Active Users", value: "4B+" },
    { icon: <Activity size={14} />, label: "Click Rate", value: "3.5%" },
  ],
  "SMS": [
    { icon: <TrendingUp size={14} />, label: "Open Rate", value: "98%" },
    { icon: <Globe2 size={14} />, label: "Countries", value: "190+" },
    { icon: <Zap size={14} />, label: "Delivery", value: "< 3s" },
  ],
  "RCS": [
    { icon: <TrendingUp size={14} />, label: "Open Rate", value: "70%" },
    { icon: <Users size={14} />, label: "Devices", value: "1B+" },
    { icon: <Star size={14} />, label: "Engagement", value: "5x" },
  ],
  "Instagram DM": [
    { icon: <TrendingUp size={14} />, label: "Open Rate", value: "85%" },
    { icon: <Users size={14} />, label: "Active Users", value: "2B+" },
    { icon: <Activity size={14} />, label: "Response", value: "< 1m" },
  ],
};

export default function ChannelsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bigbrosai.com" },
          { "@type": "ListItem", position: 2, name: "Channels", item: "https://www.bigbrosai.com/channels" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Which messaging channels does BigBros AI support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "BigBros AI supports WhatsApp (live), Email, SMS, RCS and Instagram DM — all managed from one unified dashboard.",
            },
          },
          {
            "@type": "Question",
            name: "Is BigBros AI an official WhatsApp Business API provider?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. BigBros AI is built on official Meta-approved WhatsApp Business APIs with 99.9% delivery uptime and Green Tick verification support.",
            },
          },
          {
            "@type": "Question",
            name: "What is the open rate for WhatsApp marketing messages?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "WhatsApp messages achieve up to 98% open rates, compared to 22% for email and 85% for Instagram DM.",
            },
          },
          {
            "@type": "Question",
            name: "When will Email, SMS, RCS and Instagram DM channels be available?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Email, SMS, RCS and Instagram DM are coming soon. You can contact us to get notified when they launch.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-14 pb-20 px-6">
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(21,128,61,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(21,128,61,0.03) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-[11px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-700" /> 5 Channels · 1 Platform
            </div>
            <h1 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-[1.08] mb-5">
              Meet Customers{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Wherever They Are</span>
                <svg className="absolute -bottom-1.5 left-0 w-full" height="5" viewBox="0 0 200 5" preserveAspectRatio="none">
                  <path d="M0 4 Q50 0 100 3 Q150 6 200 2" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
                </svg>
              </span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              From WhatsApp to Instagram DMs — bigbrosai unifies every channel in one dashboard so you never miss a customer conversation.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {CHANNELS.map((ch) => (
                <a
                  key={ch.name}
                  href={`#${ch.name.toLowerCase().replace(" ", "")}`}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all hover:shadow-md"
                  style={{ borderColor: ch.color + "40", background: ch.color + "0c", color: ch.color }}
                >
                  {CHANNEL_ICONS[ch.name]}
                  {ch.name}
                  <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full"
                    style={{ background: ch.status === "LIVE" ? ch.color + "20" : "#f1f5f9", color: ch.status === "LIVE" ? ch.color : "#94a3b8" }}>
                    {ch.status}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Channel stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {CHANNELS.map((ch) => (
              <div key={ch.name} className="bg-white border border-gray-100 rounded-2xl p-4 text-center">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: ch.color + "15", color: ch.color }}>
                  {CHANNEL_ICONS[ch.name]}
                </div>
                <p className="font-display font-black text-lg text-gray-900 leading-none">{ch.openRate}</p>
                <p className="text-[10px] text-slate-500 mt-1">open rate</p>
                <p className="text-[10px] font-semibold mt-1" style={{ color: ch.color }}>{ch.reach}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Cards */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {CHANNELS.map((ch) => {
            const stats = CHANNEL_STATS[ch.name] ?? [];
            const isLive = ch.status === "LIVE";

            return (
              <div
                key={ch.name}
                id={ch.name.toLowerCase().replace(" ", "")}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden"
              >
                {/* Top accent */}
                <div className="h-1" style={{ background: `linear-gradient(90deg, ${ch.color}, ${ch.color}60)` }} />

                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-14 h-14 flex items-center justify-center rounded-2xl shrink-0"
                        style={{ background: ch.color + "15", color: ch.color }}>
                        {CHANNEL_ICONS[ch.name]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-2xl font-display font-black text-gray-900">{ch.name}</h2>
                          <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full"
                            style={{ background: isLive ? ch.color + "15" : "#f1f5f9", color: isLive ? ch.color : "#94a3b8", border: `1px solid ${isLive ? ch.color + "30" : "#e5e7eb"}` }}>
                            {ch.status}
                          </span>
                        </div>
                        <p className="text-slate-500 text-sm">{ch.reach} · {ch.openRate} open rate</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {stats.map((s) => (
                        <div key={s.label} className="flex items-center gap-2 px-3 py-2 border border-gray-100 rounded-xl bg-gray-50">
                          <span style={{ color: ch.color }}>{s.icon}</span>
                          <span className="text-sm font-bold text-gray-900">{s.value}</span>
                          <span className="text-xs text-gray-500">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-600 text-base leading-relaxed mb-6 max-w-3xl">{ch.desc}</p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-6">
                    {ch.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5 text-sm text-slate-700 bg-gray-50 rounded-xl px-3 py-2.5">
                        <span style={{ color: ch.color }}>{FEATURE_ICONS[f] ?? <Check size={14} />}</span>
                        {f}
                      </div>
                    ))}
                  </div>

                  <a href={isLive ? "/pricing" : "/contact-us"}
                    className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-all hover:opacity-90"
                    style={{ background: ch.color }}>
                    {isLive ? `Get started with ${ch.name}` : `Get notified when ${ch.name} launches`}
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
