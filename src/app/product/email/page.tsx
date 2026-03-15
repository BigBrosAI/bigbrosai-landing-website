import type { Metadata } from "next";
import { HeroSectionEmail } from "@/components/sections/email/HeroSectionEmail";
import { EmailStatsSection } from "@/components/sections/email/EmailStatsSection";
import { FeaturesSectionEmail } from "@/components/sections/email/FeaturesSectionEmail";
import { PricingSectionEmail } from "@/components/sections/email/PricingSectionEmail";
import { MarqueeSection, StatsSection } from "@/components/sections/MarqueeSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "bigbrosai — Email Marketing & Automation",
  description: "Enterprise-grade email marketing and automation. High deliverability, AI writing assistant, and smart segmentation.",
};

export default function EmailProductPage() {
  return (
    <>
      <HeroSectionEmail />
      <MarqueeSection />
      <StatsSection />
      <FeaturesSectionEmail />
      <EmailStatsSection />
      <PricingSectionEmail />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
