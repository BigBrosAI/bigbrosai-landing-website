import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWA } from "@/components/layout/FloatingWA";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bigbrosai.com"),

  title: {
    default: "BigBros AI — Omnichannel Marketing & Automation Platform",
    template: "%s | BigBros AI",
  },

  description:
    "BigBros AI is the all-in-one platform to automate customer communication across WhatsApp, Email, SMS, RCS & Instagram. Send broadcasts, build AI chatbots, and grow your business — powered by official APIs.",

  keywords: [
    "WhatsApp marketing platform",
    "email marketing automation",
    "SMS marketing",
    "RCS messaging",
    "Instagram DM automation",
    "omnichannel marketing",
    "AI chatbot builder",
    "WhatsApp Business API",
    "customer engagement platform",
    "marketing automation India",
    "bulk WhatsApp sender",
    "transactional email service",
    "BigBros AI",
  ],

  alternates: {
    canonical: "https://www.bigbrosai.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "BigBros AI — Omnichannel Marketing & Automation Platform",
    description:
      "Automate customer engagement across WhatsApp, Email, SMS, RCS & Instagram. Build AI chatbots, send broadcasts, and scale faster with BigBros AI.",
    url: "https://www.bigbrosai.com",
    siteName: "BigBros AI",
    images: [
      {
        url: "/BBAI_logo.png",
        width: 1200,
        height: 630,
        alt: "BigBros AI — Omnichannel Marketing Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BigBros AI — Omnichannel Marketing & Automation Platform",
    description:
      "Scale your business with AI-powered automation across WhatsApp, Email, SMS, RCS & Instagram.",
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
      description: "BigBros AI is an omnichannel marketing automation platform for WhatsApp, Email, SMS, RCS and Instagram.",
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
      description: "Omnichannel marketing automation platform — WhatsApp, Email, SMS, RCS & Instagram from one dashboard.",
      featureList: [
        "WhatsApp Business API broadcasting",
        "Email marketing & transactional emails",
        "SMS marketing automation",
        "RCS rich messaging",
        "Instagram DM automation",
        "AI chatbot builder",
        "Multi-agent live chat inbox",
        "Campaign analytics & reporting",
      ],
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
        {
          "@type": "ListItem",
          position: 1,
          name: "Log In",
          url: "https://dashboard.bigbrosai.com/signin",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sign Up Free",
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
          name: "Features",
          url: "https://www.bigbrosai.com/features",
        },
        {
          "@type": "ListItem",
          position: 5,
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
