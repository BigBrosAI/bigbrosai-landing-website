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

export const metadata: Metadata = { title: "Channels" };

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
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-14 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-4xl font-bold mb-6">
            Meet Customers Wherever They Are
          </h1>

          <p className="text-gray-600 mb-8">
            From WhatsApp to Instagram DMs — BigBrosAI unifies every channel
            in one dashboard.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {CHANNELS.map((ch) => (
              <a
                key={ch.name}
                href={`#${ch.name.toLowerCase().replace(" ", "")}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold"
                style={{
                  borderColor: ch.color + "40",
                  background: ch.color + "0c",
                  color: ch.color,
                }}
              >
                {CHANNEL_ICONS[ch.name]}
                {ch.name}
                <span
                  className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full"
                  style={{
                    background: ch.status === "LIVE" ? ch.color + "20" : "#f1f5f9",
                    color: ch.status === "LIVE" ? ch.color : "#94a3b8",
                  }}
                >
                  {ch.status}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Cards */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {CHANNELS.map((ch) => {
            const stats = CHANNEL_STATS[ch.name] ?? [];
            const isLive = ch.status === "LIVE";

            return (
              <div
                key={ch.name}
                id={ch.name.toLowerCase().replace(" ", "")}
                className="bg-white rounded-3xl border border-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-xl"
                    style={{ background: ch.color + "15", color: ch.color }}
                  >
                    {CHANNEL_ICONS[ch.name]}
                  </div>

                  <h2 className="text-2xl font-bold">{ch.name}</h2>
                </div>

                <p className="text-gray-600 mb-6">{ch.desc}</p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center gap-2 px-3 py-2 border rounded-lg"
                    >
                      {s.icon}
                      <span className="text-sm font-semibold">{s.value}</span>
                      <span className="text-xs text-gray-500">{s.label}</span>
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {ch.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      {FEATURE_ICONS[f] ?? <Check size={14} />}
                      {f}
                    </div>
                  ))}
                </div>

                <a
                  href={isLive ? "/pricing" : "#"}
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: ch.color }}
                >
                  {isLive
                    ? `Get started with ${ch.name}`
                    : `Get notified when ${ch.name} launches`}
                  <ArrowRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}