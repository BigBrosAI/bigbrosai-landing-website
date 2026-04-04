import type { Metadata } from "next";
import Image from "next/image";
import { Check, Megaphone, Bot, BarChart2, Users, Zap, Shield } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { FEATURES_DATA } from "@/lib/data";

export const metadata: Metadata = {
  title: "Features — WhatsApp, Email, SMS & Omnichannel Automation Tools",
  description:
    "Explore BigBros AI features: WhatsApp & Email broadcasting, AI chatbot builder, multi-agent inbox, campaign analytics, automation flows and official APIs for every channel.",
  alternates: { canonical: "https://www.bigbrosai.com/features" },
};

const ICONS: Record<string, React.ReactNode> = {
  whatsapp:   <Megaphone size={24} />,
  chatbot:    <Bot       size={24} />,
  analytics:  <BarChart2 size={24} />,
  inbox:      <Users     size={24} />,
  automation: <Zap       size={24} />,
  api:        <Shield    size={24} />,
};

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-[11px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-700" /> Platform Features
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-[1.1] mb-5">
            Every Tool You Need to <span className="text-gradient">Grow Faster</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            Messaging, automation, and analytics — all in one professional platform built for scale.
          </p>
        </div>
      </section>

      {FEATURES_DATA.map((feature, idx) => (
        <section key={feature.id} id={feature.id}
          className={`py-20 px-6 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: feature.color + "15", color: feature.color }}>
                {ICONS[feature.id]}
              </div>
              <h2 className="font-display font-black text-2xl md:text-3xl text-gray-900 tracking-tight mb-4">{feature.title}</h2>
              <p className="text-slate-500 text-base leading-relaxed mb-7">{feature.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {feature.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-2.5">
                    <Check size={15} strokeWidth={2.5} className="mt-0.5 shrink-0" style={{ color: feature.color }} />
                    <span className="text-sm text-slate-700 leading-snug">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${idx % 2 !== 0 ? "lg:order-1 " : ""}w-full`}>
              <Image
                src={feature.image}
                alt={feature.title}
                width={520}
                height={320}
                className="w-full h-auto object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 520px"
                priority={idx === 0}
              />
            </div>
          </div>
        </section>
      ))}
      <CTASection />
    </>
  );
}
