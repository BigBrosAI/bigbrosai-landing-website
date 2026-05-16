import type { PricingPlan, Testimonial, Channel, Stat } from "@/types";
import { ALL_PLANS } from "@/lib/plans";
import {
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  MessageCircle,
} from "lucide-react";
// ── NAVIGATION ────────────────────────────────────────────
export const NAV_ITEMS = [
  {
    label: "Product",
    dropdown: [
      {
        label: "WhatsApp Marketing",
        desc: "Broadcast, Automate & Engage",
        href: "/features#whatsapp",
      },
      {
        label: "AI Chatbot Builder",
        desc: "No-code conversational flows",
        href: "/features#chatbot",
      },
      {
        label: "Multi-Agent Inbox",
        desc: "Team live-chat on one number",
        href: "/features#inbox",
      },
      {
        label: "Campaign Analytics",
        desc: "Real-time delivery & click tracking",
        href: "/features#analytics",
      },
      {
        label: "Automation Flows",
        desc: "Trigger-based message journeys",
        href: "/features#automation",
      },
    ],
  },
  {
    label: "Channels",
    dropdown: [
      {
        label: "WhatsApp",
        desc: "Official Business API — LIVE",
        href: "/channels#whatsapp",
      },
      {
        label: "Email",
        desc: "Transactional & marketing — Soon",
        href: "/channels#email",
      },
      {
        label: "SMS",
        desc: "Global SMS delivery — Soon",
        href: "/channels#sms",
      },
      {
        label: "RCS",
        desc: "Rich Android messaging — Soon",
        href: "/channels#rcs",
      },
      {
        label: "Instagram",
        desc: "DM automation — Soon",
        href: "/channels#instagram",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Refund Policy", href: "/legal/refund" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "GDPR", href: "/legal/gdpr" },
];

// ── STATS ─────────────────────────────────────────────────
export const HERO_STATS: Stat[] = [
  { value: "50K+", label: "Businesses" },
  { value: "2B+", label: "Messages Sent" },
  { value: "60+", label: "Countries" },
];

export const PLATFORM_STATS: Stat[] = [
  { value: "50,000", label: "Businesses Trust Us" },
  { value: "2B+", label: "Messages Delivered" },
  { value: "5+", label: "Channels Supported" },
  { value: "60+", label: "Countries Served" },
  { value: "99.9%", label: "Uptime SLA" },
];

// ── CHANNELS ─────────────────────────────────────────────
export const CHANNELS: Channel[] = [
  {
    name: "WhatsApp",
    emoji: "💬",
    color: "#25d366",
    status: "LIVE",
    reach: "2.6B+ users",
    openRate: "98%",
    desc: "The world's most used messaging app. Send promotional broadcasts, automate conversations, collect payments and run Click-to-WhatsApp Ads via official Meta Business APIs.",
    features: [
      "Template message broadcasting",
      "AI chatbot & flow builder",
      "WhatsApp Pay integration",
      "Green Tick verification",
      "Click-to-WhatsApp Ads",
      "Multi-agent shared inbox",
    ],
  },
  {
    name: "Email",
    emoji: "📧",
    color: "#3b82f6",
    status: "LIVE",
    reach: "4B+ users",
    openRate: "22%",
    desc: "Send transactional emails from your verified domain. Every organisation gets 300 free emails per day — no credit card, no trial. Only ₹0.125/email beyond the free tier.",
    features: [
      "300 free emails per day — forever",
      "Send from your own verified domain",
      "DKIM, SPF & DMARC authentication",
      "Delivery webhooks & bounce tracking",
      "Attachment support",
      "₹0.125/email after free tier",
    ],
  },
  {
    name: "SMS",
    emoji: "📱",
    color: "#f59e0b",
    status: "SOON",
    reach: "7B+ devices",
    openRate: "98%",
    desc: "SMS delivers everywhere — no internet required. Perfect for OTPs, transactional alerts, and time-sensitive promotions with 98% open rates across 190+ countries.",
    features: [
      "Global delivery (190+ countries)",
      "OTP & verification flows",
      "Short code & long code",
      "Delivery receipts",
      "Unicode message support",
      "DLT compliance (India)",
    ],
  },
  {
    name: "RCS",
    emoji: "💎",
    color: "#8b5cf6",
    status: "SOON",
    reach: "1B+ Android users",
    openRate: "70%",
    desc: "Rich Communication Services — the next evolution of SMS on Android. Send interactive cards, carousels, suggested replies and branded messages with verified sender identity.",
    features: [
      "Rich cards & carousels",
      "Verified business sender",
      "Read receipts",
      "Suggested reply buttons",
      "Location sharing",
      "Payment integration",
    ],
  },
  {
    name: "Instagram DM",
    emoji: "📸",
    color: "#e1306c",
    status: "SOON",
    reach: "2B+ users",
    openRate: "85%",
    desc: "Automate Instagram Direct Messages. Respond to story mentions, DMs and comments automatically. Qualify leads and drive sales directly inside Instagram.",
    features: [
      "Auto-reply to DMs & comments",
      "Story mention triggers",
      "Keyword-based flows",
      "Lead capture forms",
      "Product catalog sharing",
      "Handoff to live agent",
    ],
  },
];

// ── FEATURES ──────────────────────────────────────────────
export const FEATURES_DATA = [
  {
    id: "whatsapp",
    image: "/features/1.png",
    title: "Omnichannel Broadcasting",
    desc: "Send approved messages to your entire contact list across WhatsApp, Email, SMS and more — all from one dashboard. Schedule campaigns, segment audiences, and track every delivery, read and click in real time.",
    color: "#25d366",
    bullets: [
      "Broadcast across WhatsApp, Email & SMS",
      "Real-time delivery & read tracking",
      "CTA buttons and quick replies",
      "Schedule campaigns 2 months ahead",
      "Smart audience segmentation",
      "Retarget engaged users instantly",
    ],
  },
  {
    id: "chatbot",
    image: "/features/2.png",
    title: "AI Chatbot Builder",
    desc: "Drag-and-drop chatbot flow builder powered by AI. Create intelligent conversational journeys that qualify leads, answer FAQs, and close deals — 24/7 without human intervention.",
    color: "#8b5cf6",
    bullets: [
      "No-code visual flow builder",
      "AI-powered intent recognition",
      "Lead qualification automation",
      "Product catalog integration",
      "CRM & webhook integrations",
      "Handoff to live agent trigger",
    ],
  },
  {
    id: "analytics",
    image: "/features/3.png",
    title: "Real-Time Analytics",
    desc: "Track every message, every click, every conversion. Get deep campaign insights so you can iterate fast and improve ROI on every send.",
    color: "#3b82f6",
    bullets: [
      "Delivery, read & click rate dashboards",
      "Campaign ROI and conversion tracking",
      "A/B test message variants",
      "Audience engagement heatmaps",
      "Export reports to CSV / Excel",
      "Real-time webhook notifications",
    ],
  },
  {
    id: "inbox",
    image: "/features/4.png",
    title: "Multi-Agent Live Chat",
    desc: "Your entire support team sharing one WhatsApp Business number. Smart routing ensures the right agent handles each conversation at the right time.",
    color: "#f59e0b",
    bullets: [
      "Unlimited agent seats",
      "Smart conversation routing",
      "Internal notes & @mentions",
      "Contact tags & custom attributes",
      "CSAT feedback collection",
      "Mobile app for agents",
    ],
  },
  {
    id: "automation",
    image: "/features/5.png",
    title: "Automation & Flows",
    desc: "Set it and forget it. Trigger personalized multi-step message sequences based on user actions, purchase events, or time-based conditions.",
    color: "#ef4444",
    bullets: [
      "Welcome & onboarding sequences",
      "Abandoned cart recovery",
      "Appointment reminders",
      "Post-purchase follow-ups",
      "Re-engagement campaigns",
      "Custom webhook triggers",
    ],
  },
  {
    id: "api",
    image: "/features/6.png",
    title: "Official Multi-Channel APIs",
    desc: "bigbrosai is built on official Meta-approved WhatsApp Business APIs, verified email relay infrastructure, and carrier-grade SMS gateways. Your account is safe, compliant, and production-ready from day one.",
    color: "#0ea5e9",
    bullets: [
      "Official Meta BSP partner (WhatsApp)",
      "Free Green Tick verification",
      "300 free emails/day — no expiry",
      "99.9% delivery uptime SLA",
      "Developer REST API & webhooks",
      "Official SDKs (Node.js, Python)",
    ],
  },
];

// ── TESTIMONIALS ──────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Marketing Head",
    company: "TechRetail India",
    avatar: "P",
    rating: 5,
    text: "bigbrosai helped us achieve 40% better engagement. Our WhatsApp campaigns drive 35% of monthly revenue, and the email automation handles the rest. The ROI across channels is undeniable.",
  },
  {
    name: "Rahul Mehta",
    role: "Founder",
    company: "GrowthHack Agency",
    avatar: "R",
    rating: 5,
    text: "The chatbot builder is incredible — we automated 80% of lead qualification across WhatsApp and Instagram. Response time dropped from hours to seconds. Our clients see 3x conversion rates.",
  },
  {
    name: "Sneha Patel",
    role: "CX Manager",
    company: "HealthFirst Clinics",
    avatar: "S",
    rating: 5,
    text: "WhatsApp appointment reminders reduced no-shows by 60%, and transactional emails keep patients informed post-visit. Setup took less than a day. ROI was visible within the first week.",
  },
  {
    name: "Arjun Nair",
    role: "E-commerce Director",
    company: "FashionForward",
    avatar: "A",
    rating: 5,
    text: "Abandoned cart recovery via WhatsApp recovers 25% of lost sales. The free email tier handles our transactional flow. It's the single best marketing investment we made this year.",
  },
  {
    name: "Meera Singh",
    role: "Head of Growth",
    company: "EduPlatform",
    avatar: "M",
    rating: 5,
    text: "We broadcast course updates to 200K students across WhatsApp and email. WhatsApp open rates consistently above 92%. No other platform gives us this kind of reach from one dashboard.",
  },
  {
    name: "Vikram Tiwari",
    role: "CEO",
    company: "FinServe Solutions",
    avatar: "V",
    rating: 5,
    text: "The analytics dashboard gives complete visibility across all channels. A/B testing messages and seeing real-time conversion differences has transformed how we run omnichannel campaigns.",
  },
];

// ── SOCIAL MEDIA ──────────────────────────────────────────
export const SOCIAL_MEDIA = [
  { Icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/8279305027" },
  { Icon: Twitter, label: "Twitter", href: "https://x.com/bigbrosai" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/bigbrosai/" },
  { Icon: Youtube, label: "YouTube", href: "https://youtube.com/@bigbrosai" },
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com/bigbrosai_official/" },
]


// ── PRICING ───────────────────────────────────────────────
// Derived from the single source of truth in @/lib/plans.
// Only FREE / BASIC / PRO are shown as cards; ENTERPRISE has its own block.
export const PRICING_PLANS: PricingPlan[] = ALL_PLANS
  .filter((p) => p.code !== "ENTERPRISE")
  .map((p) => ({
    name: p.name,
    price: { monthly: p.pricing.monthly, annual: p.pricing.annual },
    desc: p.description,
    color: p.color,
    popular: p.popular,
    cta: p.cta,
    // Legacy flat feature list — used only by the old plan cards.
    // The new FeatureComparisonTable reads directly from PlanDefinition.
    features: buildLegacyFeatureList(p.code),
  }));

function buildLegacyFeatureList(code: string): string[] {
  switch (code) {
    case "FREE":
      return [
        "Free WhatsApp Business API",
        "₹50 Free signup Bonus.",
        "Unlimited Free Service Conversations",
        "300 free emails / day (forever)",
        "Upload & Manage Contacts",
        "Create tags & attributes",
        "Live Chat Dashboard",
        "Email support",
        "Create template messages",
      ];
    case "BASIC":
      return [
        "All Features of Free",
        "Marketing: ₹0.9999 / conversation",
        "Utility: ₹0.145 / conversation",
        "Authentication: ₹0.145 / conversation",
        "Create up to 2 Campaigns",
        "1 Owner + 4 FREE Agents included",
        "Extra agents at ₹99 / user / month",
        "Click-to-WhatsApp Ads",
        "Smart Audience Segregation",
        "Broadcasting & Retargeting",
        "Template Message APIs",
        "2,400 Messages / min",
        "Shared Team Inbox",
        "Up to 1 GB Cloud Storage",
      ];
    case "PRO":
      return [
        "All Features of Basic",
        "Marketing: ₹0.9999 / conversation",
        "Utility: ₹0.145 / conversation",
        "Authentication: ₹0.145 / conversation",
        "Unlimited Campaigns",
        "Campaign Budget Analytics",
        "Import Contacts via CSV",
        "5,000 Messages / min",
        "CSV Campaign Scheduler",
        "User Access Control",
        "AI Template Builder",
        "Flow Builder — 2 free slots / month",
        "Extra flow slots at ₹250 / slot",
        "1 Owner + 4 FREE Agents included",
        "Extra agents at ₹99 / user / month",
        "Dedicated Account Manager",
        "99.9% SLA Guarantee",
        "Up to 5 GB Cloud Storage",
      ];
    default:
      return [];
  }
}

// ── INDUSTRIES ────────────────────────────────────────────
export const INDUSTRIES = [
  { icon: "ShoppingCart", label: "E-commerce", color: "#15803d" },
  { icon: "GraduationCap", label: "Education", color: "#7c3aed" },
  { icon: "HeartPulse", label: "Healthcare", color: "#dc2626" },
  { icon: "Landmark", label: "Finance & BFSI", color: "#0369a1" },
  { icon: "Building2", label: "Real Estate", color: "#d97706" },
  { icon: "Car", label: "Automobile", color: "#64748b" },
  { icon: "CalendarDays", label: "Events", color: "#db2777" },
  { icon: "Monitor", label: "IT Services", color: "#0891b2" },
  { icon: "UtensilsCrossed", label: "Food & Delivery", color: "#ea580c" },
  { icon: "Plane", label: "Travel", color: "#2563eb" },
  { icon: "Dumbbell", label: "Fitness", color: "#16a34a" },
  { icon: "Sparkles", label: "Beauty & Retail", color: "#9333ea" },
];


// ── FOOTER LINKS ──────────────────────────────────────────
export const FOOTER_COLS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Channels", href: "/channels" },
      { label: "Pricing", href: "/pricing" },
      { label: "API Docs", href: "https://docs.bigbrosai.com/", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "https://blog.bigbrosai.com" },
      { label: "Careers", href: "mailto:careers@bigbrosai.com" },
      { label: "Partners", href: "/contact-us" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Log In", href: "https://dashboard.bigbrosai.com/signin", external: true },
      { label: "Sign Up Free", href: "https://dashboard.bigbrosai.com/signup", external: true },
      { label: "Contact Us", href: "/contact-us" },
      { label: "Help Center", href: "mailto:support@bigbrosai.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Refund Policy", href: "/legal/refund" },
      { label: "Cookie Policy", href: "/legal/cookies" },
      { label: "GDPR Compliance", href: "/legal/gdpr" },
    ],
  },
];
