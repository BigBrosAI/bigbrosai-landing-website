import Link from "next/link";
import { Megaphone, Bot, BarChart2, Users, Zap, Globe, ArrowRight } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const FEATURES = [
  { Icon: Megaphone, title: "WhatsApp Broadcast",   color: "#15803d", desc: "Send approved templates to unlimited contacts. Schedule, segment, and track every delivery and click in real time." },
  { Icon: Bot,       title: "AI Chatbot Builder",   color: "#7c3aed", desc: "No-code drag-and-drop flow builder. Qualify leads, answer FAQs, and close sales — automatically, 24/7." },
  { Icon: BarChart2, title: "Real-Time Analytics",  color: "#0369a1", desc: "Monitor delivery, open and click rates. Campaign ROI dashboards with one-click retargeting of engaged users." },
  { Icon: Users,     title: "Multi-Agent Inbox",    color: "#d97706", desc: "Your entire team sharing one WhatsApp number with smart routing, contact tagging, and internal notes." },
  { Icon: Zap,       title: "Automation Flows",     color: "#dc2626", desc: "Trigger personalized multi-step sequences from user actions — welcome flows, cart recovery, reminders." },
  { Icon: Globe,     title: "Multi-Channel (Soon)", color: "#0891b2", desc: "Expand to Email, SMS, RCS and Instagram DMs from the same dashboard. One platform, all channels." },
];

export function FeaturesSection() {
  return (
    <Section bg="alt">
      <SectionHeader
        eyebrow="Platform Features"
        title={<>Everything You Need to <span className="text-gradient">Grow Faster</span></>}
        subtitle="One platform for messaging, automation, and analytics — built for serious, scalable growth."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map(({ Icon, color, ...f }) => (
          <FeatureCard key={f.title} icon={<Icon size={22} />} color={color} {...f} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/features">
          <Button variant="outline" size="md">Explore All Features <ArrowRight size={15} /></Button>
        </Link>
      </div>
    </Section>
  );
}
