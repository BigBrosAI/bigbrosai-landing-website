import type { Metadata } from "next";
import { HeroSection }         from "@/components/sections/HeroSection";
import { MarqueeSection }      from "@/components/sections/MarqueeSection";
import { UseCasesSection }     from "@/components/sections/UseCasesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { IndustriesSection }   from "@/components/sections/IndustriesSection";
import { CTASection }          from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "BigBros AI — WhatsApp Automation & AI Chatbot for Businesses",
  description:
    "Automate customer engagement using WhatsApp, AI chatbots, Email, SMS & Instagram. Generate leads, support customers, and scale your business with BigBros AI.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <UseCasesSection />
      <TestimonialsSection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
