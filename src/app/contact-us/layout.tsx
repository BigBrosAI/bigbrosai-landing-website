import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch with BigBros AI",
  description:
    "Have questions? Contact BigBros AI for sales, support or a product demo. We respond within 24 hours.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
