import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brochure — WhatsApp, Email, SMS & Omni | bigbrosai",
  description:
    "Everything BigBros AI does on one page — WhatsApp, Email, SMS and a unified Omni-channel command centre powered by BB-AI. Pricing, industries, service offerings and zero-downtime migration.",
  alternates: { canonical: "https://www.bigbrosai.com/brochure" },
  openGraph: {
    title: "BigBros AI Brochure — Omni-channel messaging, powered by BB-AI",
    description:
      "WhatsApp · Email · SMS · Omni — see how each channel works, what it costs, and how fast you can switch.",
    type: "website",
  },
};

export default function BrochureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
