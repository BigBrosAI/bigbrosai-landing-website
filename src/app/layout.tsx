import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWA } from "@/components/layout/FloatingWA";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bigbrosai.com"),

  title: {
    default: "BigBros AI — WhatsApp & AI Automation for Businesses",
    template: "%s | BigBros AI",
  },

  description:
    "Automate your business with AI-powered WhatsApp, Email, SMS & chatbot solutions. Boost engagement, generate leads, and scale faster with BigBros AI.",

  alternates: {
    canonical: "https://www.bigbrosai.com",
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
    shortcut: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.bigbrosai.com/#organization",
      name: "BigBros AI",
      url: "https://www.bigbrosai.com",
      logo: "https://www.bigbrosai.com/logo.png",
      sameAs: [
        "https://x.com/bigbrosai",
        "https://linkedin.com/company/bigbrosai/",
        "https://instagram.com/bigbros.ai/",
        "https://youtube.com/@bigbrosai",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@bigbrosai.com",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.bigbrosai.com/#website",
      url: "https://www.bigbrosai.com",
      name: "BigBros AI",
      publisher: { "@id": "https://www.bigbrosai.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.bigbrosai.com/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "BigBros AI",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://dashboard.bigbrosai.com",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
      publisher: { "@id": "https://www.bigbrosai.com/#organization" },
    },
    {
      "@type": "ItemList",
      name: "BigBros AI Key Pages",
      itemListElement: [
        { "@type": "SiteLinksSearchBox", target: "https://dashboard.bigbrosai.com/signin" },
        {
          "@type": "ListItem",
          position: 1,
          name: "Log In",
          url: "https://dashboard.bigbrosai.com/signin",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sign Up",
          url: "https://dashboard.bigbrosai.com/signup",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Pricing",
          url: "https://www.bigbrosai.com/pricing",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Contact Us",
          url: "https://www.bigbrosai.com/contact-us",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <GoogleAnalytics gaId="G-ETDQMP0BYH" />
        <Footer />
        <FloatingWA />
      </body>
    </html>
  );
}
