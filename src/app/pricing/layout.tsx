import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Simple, Transparent WhatsApp API Plans",
  description:
    "Start free, scale as you grow. BigBros AI pricing plans for WhatsApp marketing — Starter, Basic and Pro. No hidden fees, cancel anytime.",
  alternates: { canonical: "/pricing" },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
