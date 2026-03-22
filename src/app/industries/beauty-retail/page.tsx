import type { Metadata } from "next";
import { INDUSTRY_MAP } from "@/lib/industries";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { notFound } from "next/navigation";

const industry = INDUSTRY_MAP["beauty-retail"];

export const metadata: Metadata = {
  title: `${industry?.label} WhatsApp Automation | bigbrosai`,
  description: industry?.heroSubtitle,
  alternates: { canonical: "https://www.bigbrosai.com/industries/beauty-retail" },
};

export default function Page() {
  if (!industry) return notFound();
  return <IndustryPage industry={industry} />;
}
