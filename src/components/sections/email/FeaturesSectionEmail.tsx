import Link from "next/link";
import {
  LayoutTemplate, Sparkles, UserCheck,
  Workflow, BarChart2, ShieldCheck, ArrowRight
} from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const EMAIL_FEATURES = [
  { Icon: LayoutTemplate, title: "Developer API & SMTP", color: "#ec4899", desc: "Integrate email in minutes. Use our intuitive REST API libraries or simply drop in our SMTP relay credentials." },
  { Icon: Sparkles, title: "Email Validation API", color: "#8b5cf6", desc: "Clean your lists in real-time. Detect and block invalid or disposable emails before you even hit send." },
  { Icon: UserCheck, title: "Inbound Routing", color: "#f59e0b", desc: "Parse incoming emails directly into the dashboard. We pull out attachments, parse the body, and trigger webhooks." },
  { Icon: Workflow, title: "Real-Time Webhooks", color: "#14b8a6", desc: "Get instantly notified via webhooks when emails are delivered, opened, clicked, bounced, or flagged as spam." },
  { Icon: BarChart2, title: "Advanced Tracking", color: "#0369a1", desc: "Full transparency. Monitor your logs for exactly what happened sequentially with every single email delivered." },
  { Icon: ShieldCheck, title: "Dedicated IPs", color: "#10b981", desc: "Complete control over your sender reputation. Automated IP warmup and native DMARC/SPF/DKIM support built-in." },
];

export function FeaturesSectionEmail() {
  return (
    <Section bg="alt">
      <SectionHeader
        eyebrow="Email Infrastructure"
        title={<>A Transactional Email API <span className="text-gradient">Developers Love</span></>}
        subtitle="Built from the ground up for high volume, secure, and reliable email delivery."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {EMAIL_FEATURES.map(({ Icon, color, ...f }) => (
          <FeatureCard key={f.title} icon={<Icon size={22} />} color={color} {...f} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="https://dashboard.bigbrosai.com/signup" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="md">Start Sending Now <ArrowRight size={15} /></Button>
        </Link>
      </div>
    </Section>
  );
}
