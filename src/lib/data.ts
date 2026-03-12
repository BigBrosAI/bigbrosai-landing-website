import type { PricingPlan, Testimonial, Channel, Stat } from "@/types";

// ── NAVIGATION ────────────────────────────────────────────
export const NAV_ITEMS = [
  {
    label: "Product",
    dropdown: [
      { label: "WhatsApp Marketing",  desc: "Broadcast, Automate & Engage",       href: "/features#whatsapp"  },
      { label: "AI Chatbot Builder",  desc: "No-code conversational flows",        href: "/features#chatbot"   },
      { label: "Multi-Agent Inbox",   desc: "Team live-chat on one number",        href: "/features#inbox"     },
      { label: "Campaign Analytics",  desc: "Real-time delivery & click tracking", href: "/features#analytics" },
      { label: "Automation Flows",    desc: "Trigger-based message journeys",      href: "/features#automation"},
    ],
  },
  {
    label: "Channels",
    dropdown: [
      { label: "WhatsApp",  desc: "Official Business API — LIVE",     href: "/channels#whatsapp"  },
      { label: "Email",     desc: "Transactional & marketing — Soon", href: "/channels#email"     },
      { label: "SMS",       desc: "Global SMS delivery — Soon",       href: "/channels#sms"       },
      { label: "RCS",       desc: "Rich Android messaging — Soon",    href: "/channels#rcs"       },
      { label: "Instagram", desc: "DM automation — Soon",             href: "/channels#instagram" },
    ],
  },
  { label: "Pricing",    href: "/pricing"  },
  { label: "About",      href: "/about"    },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy",  href: "/legal/privacy"  },
  { label: "Terms of Service",href: "/legal/terms"    },
  { label: "Refund Policy",   href: "/legal/refund"   },
  { label: "Cookie Policy",   href: "/legal/cookies"  },
  { label: "GDPR",            href: "/legal/gdpr"     },
];

// ── STATS ─────────────────────────────────────────────────
export const HERO_STATS: Stat[] = [
  { value: "50K+",  label: "Businesses"       },
  { value: "2B+",   label: "Messages Sent"    },
  { value: "60+",   label: "Countries"        },
];

export const PLATFORM_STATS: Stat[] = [
  { value: "50,000", label: "Businesses Trust Us"    },
  { value: "2B+",    label: "Messages Delivered"     },
  { value: "98%",    label: "WhatsApp Open Rate"     },
  { value: "60+",    label: "Countries Served"       },
  { value: "99.9%",  label: "Uptime SLA"             },
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
    status: "SOON",
    reach: "4B+ users",
    openRate: "22%",
    desc: "Reach customers in their inbox with beautifully designed HTML emails. Transactional, promotional and drip campaigns — all managed from the same BigBrosAI dashboard.",
    features: [
      "Drag-and-drop email builder",
      "A/B split testing",
      "Open & click tracking",
      "Unsubscribe management",
      "DKIM/SPF authentication",
      "Drip campaign sequences",
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
    title: "WhatsApp Broadcasting",
    desc: "Send approved template messages to your entire contact list at once. Schedule campaigns, segment audiences, and track every delivery, read and click in real time.",
    color: "#25d366",
    bullets: [
      "Bulk broadcast to unlimited contacts",
      "Real-time delivery & read tracking",
      "CTA buttons and quick replies",
      "Schedule campaigns 2 months ahead",
      "Smart audience segmentation",
      "Retarget engaged users instantly",
    ],
  },
  {
    id: "chatbot",
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
    title: "Official WhatsApp API",
    desc: "BigBrosAI is built on official Meta-approved WhatsApp Business APIs. Your account is safe, compliant, and eligible for the coveted Green Tick verification.",
    color: "#0ea5e9",
    bullets: [
      "Official Meta BSP partner",
      "Free Green Tick verification",
      "No per-message markup fees",
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
    text: "BigBrosAI helped us achieve 40% better engagement than email. Our WhatsApp campaigns now drive 35% of total monthly revenue. The ROI is undeniable.",
  },
  {
    name: "Rahul Mehta",
    role: "Founder",
    company: "GrowthHack Agency",
    avatar: "R",
    rating: 5,
    text: "The chatbot builder is incredible — we automated 80% of lead qualification and cut response time from hours to seconds. Our clients are seeing 3x conversion rates.",
  },
  {
    name: "Sneha Patel",
    role: "CX Manager",
    company: "HealthFirst Clinics",
    avatar: "S",
    rating: 5,
    text: "Patient appointment reminders through WhatsApp reduced no-shows by 60%. Setup took less than a day. The ROI was visible within the first week.",
  },
  {
    name: "Arjun Nair",
    role: "E-commerce Director",
    company: "FashionForward",
    avatar: "A",
    rating: 5,
    text: "Abandoned cart recovery via WhatsApp recovers 25% of lost sales. It's the single best marketing investment we made this year. Highly recommended.",
  },
  {
    name: "Meera Singh",
    role: "Head of Growth",
    company: "EduPlatform",
    avatar: "M",
    rating: 5,
    text: "We broadcast course updates to 200K students. Open rates consistently above 92%. No other channel comes even close to these numbers for us.",
  },
  {
    name: "Vikram Tiwari",
    role: "CEO",
    company: "FinServe Solutions",
    avatar: "V",
    rating: 5,
    text: "The analytics dashboard gives us complete visibility. A/B testing messages and seeing real-time conversion differences has transformed how we run campaigns.",
  },
];

// ── PRICING ───────────────────────────────────────────────
export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    desc: "Perfect for small businesses starting with WhatsApp marketing.",
    color: "#64748b",
    cta: "Start for Free",
    features: [
      "Free WhatsApp Business API",
      "₹50 Free signup Bonus.",
      "Unlimited Free Service Conversations",
      "Upload & Manage Contacts",
      "Create tags & attributes",
      "Live Chat Dashboard",
      "Email support",
      "Create template messages",
    ],
  },
  {
    name: "Basic",
    price: { monthly: 799, annual: 720 },
    desc: "For scaling teams who need automation and advanced analytics.",
    color: "#22c55e",
    cta: "Get Started",
    popular: true,
    features: [
      "All Features of Free",
      "Marketing: ₹0.99",
      "Utility: ₹0.145",
      "Authentication: ₹0.145",
      "Service: Unlimited Free Service Conversations",
      "Create 2 Campaigns only",
      "Create Contacts only",
      "1 Owner + 5 FREE Agents included.",
      "Click-to-WhatsApp Ads",
      "Smart Audience Segregation",
      "Broadcasting & Retargeting",
      "Template Message APIs",
      "2400 Messages/min",
      "Shared Team Inbox",
      "Upto 1 GB Cloud Storage"
    ],
  },
  {
    name: "Pro",
    price: { monthly: 1499, annual: 1350 },
    desc: "For high-volume businesses with advanced compliance needs.",
    color: "#8b5cf6",
    cta: "Get Started",
    features: [
      "All Features of Basic",
      "Marketing: ₹0.99",
      "Utility: ₹0.145",
      "Authentication: ₹0.145",
      "Service: Unlimited Free Service Conversations",
      "Unlimited Campaign",
      "Campaign Budget Analytics",
      "Allow Import Contacts",
      "5000 Messages/min",
      "CSV Campaign Scheduler",
      "User Access Control",
      "AI template builder",
      "Dedicated account manager",
      "99.9% SLA guarantee",
      "Upto 5 GB Cloud Storage"
    ],
  },
];

// ── INDUSTRIES ────────────────────────────────────────────
export const INDUSTRIES = [
  { icon: "ShoppingCart",  label: "E-commerce",      color: "#15803d" },
  { icon: "GraduationCap", label: "Education",        color: "#7c3aed" },
  { icon: "HeartPulse",    label: "Healthcare",       color: "#dc2626" },
  { icon: "Landmark",      label: "Finance & BFSI",   color: "#0369a1" },
  { icon: "Building2",     label: "Real Estate",      color: "#d97706" },
  { icon: "Car",           label: "Automobile",       color: "#64748b" },
  { icon: "CalendarDays",  label: "Events",           color: "#db2777" },
  { icon: "Monitor",       label: "IT Services",      color: "#0891b2" },
  { icon: "UtensilsCrossed",label: "Food & Delivery", color: "#ea580c" },
  { icon: "Plane",         label: "Travel",           color: "#2563eb" },
  { icon: "Dumbbell",      label: "Fitness",          color: "#16a34a" },
  { icon: "Sparkles",      label: "Beauty & Retail",  color: "#9333ea" },
];

// ── FOOTER LINKS ──────────────────────────────────────────
export const FOOTER_COLS = [
  {
    title: "Product",
    links: [
      { label: "Features",  href: "/features"  },
      { label: "Channels",  href: "/channels"  },
      { label: "Pricing",   href: "/pricing"   },
      { label: "API Docs",  href: "/docs"      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us",  href: "/about"  },
      { label: "Blog",      href: "#"       },
      { label: "Careers",   href: "#"       },
      { label: "Partners",  href: "#"       },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center",   href: "#"  },
      { label: "Status Page",   href: "#"  },
      { label: "Contact Us",    href: "#"  },
      { label: "Developer API", href: "#"  },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy",   href: "/legal/privacy"  },
      { label: "Terms of Service", href: "/legal/terms"    },
      { label: "Refund Policy",    href: "/legal/refund"   },
      { label: "Cookie Policy",    href: "/legal/cookies"  },
      { label: "GDPR Compliance",  href: "/legal/gdpr"     },
    ],
  },
];
