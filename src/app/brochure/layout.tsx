import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brochure | bigbrosai",
  description: "View and download bigbrosai product brochure - Learn about our WhatsApp Business API platform",
  openGraph: {
    title: "bigbrosai Brochure",
    description: "View and download bigbrosai product brochure",
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
