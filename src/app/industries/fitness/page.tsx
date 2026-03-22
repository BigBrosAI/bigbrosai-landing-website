import type { Metadata } from "next";
import { INDUSTRY_MAP } from "@/lib/industries";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { notFound } from "next/navigation";

const industry = INDUSTRY_MAP["fitness"];

export const metadata: Metadata = {
  title: `${industry?.label} WhatsApp Automation | bigbrosai`,
  description: industry?.heroSubtitle,
  alternates: { canonical: "https://www.bigbrosai.com/industries/fitness" },
};

export default function Page() {
  if (!industry) return notFound();
  return <IndustryPage industry={industry} />;
}
