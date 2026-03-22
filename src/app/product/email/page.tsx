import type { Metadata } from "next";
import { HeroSectionEmail }     from "@/components/sections/email/HeroSectionEmail";
import { EmailUseCasesSection } from "@/components/sections/email/EmailUseCasesSection";
import { PricingSectionEmail }  from "@/components/sections/email/PricingSectionEmail";
import { MarqueeSection }       from "@/components/sections/MarqueeSection";
import { TestimonialsSection }  from "@/components/sections/TestimonialsSection";
import { CTASection }           from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "bigbrosai — Email Marketing & Automation",
  description:
    "Send beautiful campaigns, automate workflows, and deliver transactional emails at scale. High deliverability, drag-and-drop builder, and smart segmentation.",
  alternates: { canonical: "https://www.bigbrosai.com/product/email" },
};

export default function EmailProductPage() {
  return (
    <>
      <HeroSectionEmail />
      <MarqueeSection />
      <EmailUseCasesSection />
      <PricingSectionEmail />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
