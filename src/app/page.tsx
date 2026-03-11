import type { Metadata } from "next";
import { HeroSection }        from "@/components/sections/HeroSection";
import { MarqueeSection, StatsSection } from "@/components/sections/MarqueeSection";
import { FeaturesSection }    from "@/components/sections/FeaturesSection";
import { WhatsAppSection }    from "@/components/sections/WhatsAppSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { IndustriesSection }  from "@/components/sections/IndustriesSection";
import { CTASection }         from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "bigbrosai — Reach Customers on Every Channel",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <StatsSection />
      <FeaturesSection />
      <WhatsAppSection />
      <TestimonialsSection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
