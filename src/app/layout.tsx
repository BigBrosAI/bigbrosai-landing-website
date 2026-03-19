import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWA } from "@/components/layout/FloatingWA";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bigbrosai.com"),

  title: {
    default: "BigBros AI — WhatsApp & AI Automation for Businesses",
    template: "%s | BigBros AI",
  },

  description:
    "Automate your business with AI-powered WhatsApp, Email, SMS & chatbot solutions. Boost engagement, generate leads, and scale faster with BigBros AI.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "BigBros AI — AI Automation Platform",
    description:
      "Automate customer engagement using WhatsApp, chatbots, and AI tools.",
    url: "https://www.bigbrosai.com",
    siteName: "BigBros AI",
    images: [
      {
        url: "/BBAI_logo.png",
        width: 1200,
        height: 630,
        alt: "BigBros AI Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BigBros AI — AI Automation Platform",
    description:
      "Scale your business with AI-powered automation and WhatsApp marketing.",
    images: ["/BBAI_logo.png"],
  },

  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWA />
      </body>
    </html>
  );
}
