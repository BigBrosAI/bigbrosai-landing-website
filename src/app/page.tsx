import type { Metadata } from "next";
import { HeroSection }         from "@/components/sections/HeroSection";
import { MarqueeSection }      from "@/components/sections/MarqueeSection";
import { ClientsSection }      from "@/components/sections/ClientsSection";
import { EmailFreeSection }    from "@/components/sections/EmailFreeSection";
import { ChannelsShowcase }    from "@/components/sections/ChannelsShowcase";
import { UseCasesSection }     from "@/components/sections/UseCasesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { IndustriesSection }   from "@/components/sections/IndustriesSection";
import { CTASection }          from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "BigBros AI — Omnichannel Marketing Automation Platform",
  description:
    "Send WhatsApp broadcasts, Email campaigns, SMS alerts & Instagram DMs from one platform. Build AI chatbots, automate flows, and grow your business with BigBros AI.",
  alternates: { canonical: "https://www.bigbrosai.com" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <ClientsSection />
      <EmailFreeSection />
      <ChannelsShowcase />
      <UseCasesSection />
      <TestimonialsSection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
