import type { Metadata } from "next";
import "./globals.css";
import { Navbar }     from "@/components/layout/Navbar";
import { Footer }     from "@/components/layout/Footer";
import { FloatingWA } from "@/components/layout/FloatingWA";

export const metadata: Metadata = {
  title: {
    default:  "bigbrosai — Unified Communication Platform",
    template: "%s | bigbrosai",
  },
  description:
    "Bigbros Ai Private Limited — The unified platform to Broadcast, Automate & Engage customers across WhatsApp, Email, SMS, RCS & Instagram via official APIs.",
  icons: {
    icon:     "/favicon.png",
    apple:    "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
