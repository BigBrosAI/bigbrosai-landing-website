import { Check, ShieldCheck } from "lucide-react";
import { StatCounter } from "@/components/ui/StatCounter";
import { PLATFORM_STATS } from "@/lib/data";

const ITEMS = [
  "Official WhatsApp Business API",
  "Free Green Tick Verification",
  "Free Onboarding Session",
  "Zero Setup Fees",
  "99.9% Uptime SLA",
  "Real-Time Campaign Analytics",
  "Multi-Channel Automation",
  "24/7 Priority Support",
  "No Per-Message Markup",
  "Developer REST API & Webhooks",
  "Official Meta BSP Partner",
  "GDPR Compliant",
];

export function MarqueeSection() {
  return (
    <div className="bg-brand-700 py-3.5 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap" style={{ animation: "marquee 30s linear infinite", width: "max-content" }}>
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-white text-[12.5px] font-medium">
            <Check size={13} className="opacity-70 shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="bg-white py-16 px-6 border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {PLATFORM_STATS.map((s) => (
            <StatCounter key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
