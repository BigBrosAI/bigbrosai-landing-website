import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWA } from "@/components/layout/FloatingWA";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: {
    default: "bigbrosai — Unified Communication Platform",
    template: "%s | bigbrosai",
  },
  description:
    "Bigbros Ai Private Limited — The unified platform to Broadcast, Automate & Engage customers across WhatsApp, Email, SMS, RCS & Instagram via official APIs.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  verification: {
    google: "G-ETDQMP0BYH",
    other: {
      "msvalidate.01": "",
    },
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <GoogleAnalytics gaId="G-ETDQMP0BYH" />
        <GoogleTagManager gtmId="GTM-KGHPPDZW" />
        <Footer />
        <FloatingWA />
      </body>
    </html>
  );
}
