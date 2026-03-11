import type { Metadata } from "next";
import { Target, Lock, Zap, ShieldCheck, Mail, MessageCircle, MapPin } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = { title: "About Us" };

const VALUES = [
  { Icon: Target,      title: "Customer Obsession", desc: "Every feature starts with a real customer problem. Your success is our success.", color: "#15803d" },
  { Icon: Lock,        title: "Privacy First",       desc: "We never sell your data. Customer conversations are encrypted and fully private.", color: "#0369a1" },
  { Icon: Zap,         title: "Move Fast",           desc: "We ship features weekly — not quarterly. New capabilities delivered at speed.", color: "#d97706" },
  { Icon: ShieldCheck, title: "Official & Safe",     desc: "100% built on official Meta-approved APIs. Your account stays safe and compliant.", color: "#7c3aed" },
];

const STATS = [
  { value: "2021",  label: "Founded"     },
  { value: "50K+",  label: "Businesses"  },
  { value: "2B+",   label: "Messages/yr" },
  { value: "60+",   label: "Countries"   },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-[11px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-700" /> About Us
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-[1.1] mb-5">
            Empowering Businesses with <span className="text-gradient">Intelligent Communication</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            Bigbros Ai Private Limited — making enterprise-grade communication automation accessible to every business, regardless of size.
          </p>
        </div>
      </section>

      <Section bg="alt">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader eyebrow="Our Story" title="Why we built BigBrosAI" centered={false} />
            <div className="space-y-4 text-slate-500 text-sm leading-relaxed">
              <p>BigBrosAI was born from frustration. We watched businesses struggle with fragmented tools — one for WhatsApp, another for email, yet another for SMS. Managing conversations across silos was expensive, complex, and inefficient.</p>
              <p>We built BigBrosAI to fix that. A unified platform where businesses can manage every customer touchpoint — from the first WhatsApp message to ongoing omnichannel engagement — in one place.</p>
              <p>Today we power communication for 50,000+ businesses in 60+ countries, processing billions of messages monthly through official WhatsApp Business APIs.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white border border-gray-200 rounded-2xl p-7 text-center shadow-sm">
                <div className="font-display font-black text-4xl text-brand-700 mb-2">{s.value}</div>
                <div className="font-medium text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader eyebrow="Our Values" title="What drives us every day" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v) => (
            <div key={v.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-7 text-center hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5"
                style={{ background: v.color + "15", color: v.color }}>
                <v.Icon size={22} />
              </div>
              <h3 className="font-display font-bold text-gray-900 text-base mb-2">{v.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="alt">
        <SectionHeader eyebrow="Contact" title="We'd love to hear from you" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
          {[
            { Icon: Mail,          label: "Email",    value: "support@bigbrosai.com" },
            { Icon: MessageCircle, label: "WhatsApp", value: "+91 99999 99999"        },
            { Icon: MapPin,        label: "Location", value: "India"                 },
          ].map((c) => (
            <div key={c.label} className="bg-white border border-gray-200 rounded-2xl p-7 text-center hover:border-brand-300 transition-colors shadow-sm">
              <c.Icon size={24} className="text-brand-700 mx-auto mb-3" />
              <div className="font-semibold text-sm text-gray-900 mb-1">{c.label}</div>
              <div className="text-brand-700 text-sm font-medium">{c.value}</div>
            </div>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
