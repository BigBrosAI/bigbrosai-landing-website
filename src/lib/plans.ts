/**
 * ─────────────────────────────────────────────────────────────────────────────
 * LAYER 1 — PLAN DEFINITIONS  (Single Source of Truth)
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Every plan's limits and feature flags live here.
 * Nothing else in the codebase should hard-code plan logic.
 *
 * Conventions:
 *   limits  → numeric caps  (-1 = unlimited, 0 = not allowed)
 *   features → boolean gates (true = included, false = not included)
 *   pricing → INR, paise-free (whole rupees)
 *   addons  → purchasable extras on top of the base plan
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── Plan code enum ────────────────────────────────────────────────────────────

export type PlanCode = 'FREE' | 'BASIC' | 'PRO' | 'ENTERPRISE';

// ── Pricing shape ─────────────────────────────────────────────────────────────

export interface PlanPricing {
  /** Monthly price in INR (0 = free) */
  monthly: number;
  /** Annual price in INR per month (already divided by 12) */
  annual: number;
  /** Annual discount percentage shown in UI */
  annualDiscountPct: number;
  /** Currency code */
  currency: 'INR';
  /** Whether this plan requires a sales call */
  isCustom: boolean;
}

// ── Per-message rates ─────────────────────────────────────────────────────────

export interface MessageRates {
  /** WhatsApp marketing conversation rate in INR */
  waMarketing: number | null;
  /** WhatsApp utility conversation rate in INR */
  waUtility: number | null;
  /** WhatsApp authentication conversation rate in INR */
  waAuthentication: number | null;
  /** WhatsApp service conversation rate in INR (null = free) */
  waService: number | null;
  /** Email rate per message beyond free quota in INR */
  emailPerMessage: number;
}

// ── Numeric limits ────────────────────────────────────────────────────────────

export interface PlanLimits {
  tags: number;
  attributes: number;
  // ── Campaigns ──────────────────────────────────────────
  /** Max campaigns allowed per billing cycle (-1 = unlimited, 0 = not allowed) */
  campaigns: number;

  // ── Contacts ───────────────────────────────────────────
  /** Max contacts that can be stored (-1 = unlimited) */
  contacts: number;

  // ── Messaging throughput ────────────────────────────────
  /** Max WhatsApp messages per minute (0 = not allowed) */
  messagesPerMinute: number;

  // ── Team seats ──────────────────────────────────────────
  /** Number of owner seats included (always 1) */
  ownerSeats: number;
  /** Number of agent seats included for free */
  freeAgentSeats: number;
  /** Cost in INR per extra agent per month (0 = not applicable) */
  extraAgentCostPerMonth: number;

  // ── Flows (Chatbot Builder) ─────────────────────────────
  /** Free flow slots included per billing cycle (0 = not allowed) */
  freeFlowSlots: number;
  /** Cost in INR per additional flow slot addon */
  flowAddonCostPerSlot: number;

  // ── Storage ─────────────────────────────────────────────
  /** Cloud storage in GB (0 = none) */
  storageGB: number;

  // ── Email ───────────────────────────────────────────────
  /** Free transactional emails per day (all plans get 300) */
  freeEmailsPerDay: number;
}

// ── Feature flags ─────────────────────────────────────────────────────────────

export interface PlanFeatures {
  // ── WhatsApp core ───────────────────────────────────────
  /** Access to WhatsApp Business API */
  whatsappApi: boolean;
  /** Unlimited free service conversations */
  unlimitedServiceConversations: boolean;
  /** Create and manage WA template messages */
  templateMessages: boolean;
  /** Template Message APIs (developer access) */
  templateMessageApi: boolean;
  /** AI-powered template builder */
  aiTemplateBuilder: boolean;

  // ── Campaigns ───────────────────────────────────────────
  /** Can create broadcast campaigns */
  broadcastCampaigns: boolean;
  /** Broadcasting & retargeting to existing contacts */
  retargeting: boolean;
  /** Click-to-WhatsApp Ads integration */
  clickToWhatsAppAds: boolean;
  /** Smart audience segregation / filtering */
  smartAudienceSegregation: boolean;
  /** CSV-based campaign scheduler */
  csvCampaignScheduler: boolean;
  /** Campaign budget analytics */
  campaignBudgetAnalytics: boolean;

  // ── Contacts ────────────────────────────────────────────
  /** Manual contact creation */
  createContacts: boolean;
  /** Bulk CSV contact import */
  importContacts: boolean;
  /** Export contacts to CSV */
  exportContacts: boolean;

  // ── Flows (Chatbot Builder) ─────────────────────────────
  /** Access to the visual flow / chatbot builder */
  flowBuilder: boolean;
  /** Can purchase additional flow slot addons */
  flowAddons: boolean;

  // ── Live Chat / Inbox ───────────────────────────────────
  /** Shared team live-chat inbox */
  liveChat: boolean;

  // ── Team & Access Control ───────────────────────────────
  /** Role-based user access control (RBAC) */
  userAccessControl: boolean;

  // ── Email ───────────────────────────────────────────────
  /** Transactional email sending */
  emailSending: boolean;
  /** Custom sending domains for email */
  customEmailDomains: boolean;

  // ── Developer / API ─────────────────────────────────────
  /** REST API access via API keys */
  apiAccess: boolean;
  /** Outbound webhook configuration */
  webhooks: boolean;

  // ── Analytics ───────────────────────────────────────────
  /** Basic dashboard analytics */
  basicAnalytics: boolean;
  /** Per-campaign delivery & read analytics */
  campaignAnalytics: boolean;

  // ── Support & SLA ───────────────────────────────────────
  /** Dedicated account manager */
  dedicatedAccountManager: boolean;
  /** 99.9% uptime SLA guarantee */
  slaGuarantee: boolean;
}

// ── Addon definitions ─────────────────────────────────────────────────────────

export interface PlanAddon {
  key: string;
  label: string;
  description: string;
  /** Price in INR per unit per month */
  pricePerUnit: number;
  unit: string;
  /** Minimum quantity purchasable */
  minQty: number;
  /** Which plans can purchase this addon */
  availableOn: PlanCode[];
}

// ── Full plan definition ──────────────────────────────────────────────────────

export interface PlanDefinition {
  code: PlanCode;
  name: string;
  tagline: string;
  description: string;
  /** Hex color used in UI for this plan */
  color: string;
  /** Highlight this plan as most popular */
  popular: boolean;
  /** CTA button label */
  cta: string;
  pricing: PlanPricing;
  rates: MessageRates;
  limits: PlanLimits;
  features: PlanFeatures;
}

// ─────────────────────────────────────────────────────────────────────────────
// PLAN DEFINITIONS
// ─────────────────────────────────────────────────────────────────────────────

export const PLAN_DEFINITIONS: Record<PlanCode, PlanDefinition> = {

  // ── FREE ──────────────────────────────────────────────────────────────────
  FREE: {
    code: 'FREE',
    name: 'Starter',
    tagline: 'Get started for free',
    description: 'Perfect for small businesses starting with WhatsApp marketing.',
    color: '#64748b',
    popular: false,
    cta: 'Start for Free',

    pricing: {
      monthly: 0,
      annual: 0,
      annualDiscountPct: 0,
      currency: 'INR',
      isCustom: false,
    },

    rates: {
      waMarketing: null,       // not available on free
      waUtility: null,
      waAuthentication: null,
      waService: null,         // always free
      emailPerMessage: 0.125,  // ₹0.125 beyond 300/day
    },

    limits: {
      tags: 10,
      attributes: 5,
      campaigns: 0,            // cannot create campaigns
      contacts: -1,            // unlimited manual contacts
      messagesPerMinute: 0,    // no bulk sending
      ownerSeats: 1,
      freeAgentSeats: 0,
      extraAgentCostPerMonth: 0,
      freeFlowSlots: 0,        // flow builder not available
      flowAddonCostPerSlot: 0,
      storageGB: 0,
      freeEmailsPerDay: 300,
    },

    features: {
      // WhatsApp
      whatsappApi: true,
      unlimitedServiceConversations: true,
      templateMessages: true,
      templateMessageApi: false,
      aiTemplateBuilder: false,
      // Campaigns
      broadcastCampaigns: false,
      retargeting: false,
      clickToWhatsAppAds: false,
      smartAudienceSegregation: false,
      csvCampaignScheduler: false,
      campaignBudgetAnalytics: false,
      // Contacts
      createContacts: true,
      importContacts: false,
      exportContacts: false,
      // Flows
      flowBuilder: false,
      flowAddons: false,
      // Inbox
      liveChat: true,
      // Team
      userAccessControl: false,
      // Email
      emailSending: true,
      customEmailDomains: false,
      // Developer
      apiAccess: false,
      webhooks: false,
      // Analytics
      basicAnalytics: true,
      campaignAnalytics: false,
      // Support
      dedicatedAccountManager: false,
      slaGuarantee: false,
    },
  },

  // ── BASIC ─────────────────────────────────────────────────────────────────
  BASIC: {
    code: 'BASIC',
    name: 'Basic',
    tagline: 'For scaling teams',
    description: 'For scaling teams who need automation and advanced analytics.',
    color: '#22c55e',
    popular: false,
    cta: 'Get Started',

    pricing: {
      monthly: 999,
      annual: 720,             // ₹720/mo billed annually (≈10% off)
      annualDiscountPct: 10,
      currency: 'INR',
      isCustom: false,
    },

    rates: {
      waMarketing: 0.99,
      waUtility: 0.145,
      waAuthentication: 0.145,
      waService: null,         // free
      emailPerMessage: 0.125,
    },

    limits: {
      tags: 10,
      attributes: 5,
      campaigns: 1,            // max 2 campaigns per billing cycle
      contacts: -1,            // unlimited
      messagesPerMinute: 2400,
      ownerSeats: 1,
      freeAgentSeats: 4,       // 1 owner + 4 agents free
      extraAgentCostPerMonth: 499,
      freeFlowSlots: 0,        // flow builder not available on Basic
      flowAddonCostPerSlot: 399,
      storageGB: 1,
      freeEmailsPerDay: 300,
    },

    features: {
      // WhatsApp
      whatsappApi: true,
      unlimitedServiceConversations: true,
      templateMessages: true,
      templateMessageApi: true,
      aiTemplateBuilder: false,
      // Campaigns
      broadcastCampaigns: true,
      retargeting: true,
      clickToWhatsAppAds: true,
      smartAudienceSegregation: true,
      csvCampaignScheduler: false,
      campaignBudgetAnalytics: false,
      // Contacts
      createContacts: true,
      importContacts: false,   // create only, no CSV import
      exportContacts: false,
      // Flows
      flowBuilder: false,
      flowAddons: false,
      // Inbox
      liveChat: true,
      // Team
      userAccessControl: false,
      // Email
      emailSending: true,
      customEmailDomains: false,
      // Developer
      apiAccess: true,
      webhooks: true,
      // Analytics
      basicAnalytics: true,
      campaignAnalytics: true,
      // Support
      dedicatedAccountManager: false,
      slaGuarantee: false,
    },
  },

  // ── PRO ───────────────────────────────────────────────────────────────────
  PRO: {
    code: 'PRO',
    name: 'Pro',
    tagline: 'For high-volume businesses',
    description: 'For high-volume businesses with advanced compliance needs.',
    color: '#8b5cf6',
    popular: true,
    cta: 'Get Started',

    pricing: {
      monthly: 2100,
      annual: 1890,            // ₹1,890/mo billed annually (≈10% off)
      annualDiscountPct: 10,
      currency: 'INR',
      isCustom: false,
    },

    rates: {
      waMarketing: 0.99,
      waUtility: 0.145,
      waAuthentication: 0.145,
      waService: null,         // free
      emailPerMessage: 0.125,
    },

    limits: {
      tags: 100,
      attributes: 20,
      campaigns: -1,           // unlimited
      contacts: -1,            // unlimited
      messagesPerMinute: 5000,
      ownerSeats: 1,
      freeAgentSeats: 4,       // 1 owner + 4 agents free
      extraAgentCostPerMonth: 499,
      freeFlowSlots: 2,        // 2 free flow slots per month
      flowAddonCostPerSlot: 399, // ₹250 per additional slot
      storageGB: 5,
      freeEmailsPerDay: 300,
    },

    features: {
      // WhatsApp
      whatsappApi: true,
      unlimitedServiceConversations: true,
      templateMessages: true,
      templateMessageApi: true,
      aiTemplateBuilder: true,
      // Campaigns
      broadcastCampaigns: true,
      retargeting: true,
      clickToWhatsAppAds: true,
      smartAudienceSegregation: true,
      csvCampaignScheduler: true,
      campaignBudgetAnalytics: true,
      // Contacts
      createContacts: true,
      importContacts: true,
      exportContacts: true,    // Pro only
      // Flows
      flowBuilder: true,
      flowAddons: true,
      // Inbox
      liveChat: true,
      // Team
      userAccessControl: true,
      // Email
      emailSending: true,
      customEmailDomains: true,
      // Developer
      apiAccess: true,
      webhooks: true,
      // Analytics
      basicAnalytics: true,
      campaignAnalytics: true,
      // Support
      dedicatedAccountManager: true,
      slaGuarantee: true,
    },
  },

  // ── ENTERPRISE ────────────────────────────────────────────────────────────
  ENTERPRISE: {
    code: 'ENTERPRISE',
    name: 'Enterprise',
    tagline: 'Built for scale',
    description: 'Custom pricing, dedicated infrastructure, and white-glove support for large teams.',
    color: '#0f172a',
    popular: false,
    cta: 'Contact Sales',

    pricing: {
      monthly: 0,              // 0 = custom / contact sales
      annual: 0,
      annualDiscountPct: 0,
      currency: 'INR',
      isCustom: true,
    },

    rates: {
      waMarketing: null,       // negotiated
      waUtility: null,
      waAuthentication: null,
      waService: null,
      emailPerMessage: 0,      // negotiated
    },

    limits: {
      tags: -1,
      attributes: -1,
      campaigns: -1,
      contacts: -1,
      messagesPerMinute: -1,   // unlimited / custom
      ownerSeats: 1,
      freeAgentSeats: -1,      // custom
      extraAgentCostPerMonth: 0, // negotiated
      freeFlowSlots: -1,       // custom
      flowAddonCostPerSlot: 0, // negotiated
      storageGB: -1,           // custom
      freeEmailsPerDay: -1,    // custom
    },

    features: {
      // WhatsApp
      whatsappApi: true,
      unlimitedServiceConversations: true,
      templateMessages: true,
      templateMessageApi: true,
      aiTemplateBuilder: true,
      // Campaigns
      broadcastCampaigns: true,
      retargeting: true,
      clickToWhatsAppAds: true,
      smartAudienceSegregation: true,
      csvCampaignScheduler: true,
      campaignBudgetAnalytics: true,
      // Contacts
      createContacts: true,
      importContacts: true,
      exportContacts: true,
      // Flows
      flowBuilder: true,
      flowAddons: true,
      // Inbox
      liveChat: true,
      // Team
      userAccessControl: true,
      // Email
      emailSending: true,
      customEmailDomains: true,
      // Developer
      apiAccess: true,
      webhooks: true,
      // Analytics
      basicAnalytics: true,
      campaignAnalytics: true,
      // Support
      dedicatedAccountManager: true,
      slaGuarantee: true,
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ADDON CATALOG
// ─────────────────────────────────────────────────────────────────────────────

export const PLAN_ADDONS: PlanAddon[] = [
  {
    key: 'flow_slot',
    label: 'Flow Builder Slot',
    description: 'Add one additional active chatbot flow to your project.',
    pricePerUnit: 250,
    unit: 'slot / month',
    minQty: 1,
    availableOn: ['PRO', 'ENTERPRISE'],
  },
  {
    key: 'extra_agent',
    label: 'Extra Agent Seat',
    description: 'Add one more agent seat beyond your plan\'s included seats.',
    pricePerUnit: 99,
    unit: 'agent / month',
    minQty: 1,
    availableOn: ['BASIC', 'PRO', 'ENTERPRISE'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPER UTILITIES
// ─────────────────────────────────────────────────────────────────────────────

/** Get a plan definition by its code */
export function getPlan(code: PlanCode): PlanDefinition {
  return PLAN_DEFINITIONS[code];
}

/** Check if a plan has a specific feature enabled */
export function planHasFeature(
  code: PlanCode,
  feature: keyof PlanFeatures,
): boolean {
  return PLAN_DEFINITIONS[code].features[feature];
}

/** Get a numeric limit for a plan (-1 = unlimited) */
export function getPlanLimit(
  code: PlanCode,
  limit: keyof PlanLimits,
): number {
  return PLAN_DEFINITIONS[code].limits[limit];
}

/** Returns true if the limit is unlimited (-1) */
export function isUnlimited(value: number): boolean {
  return value === -1;
}

/**
 * Returns the display string for a limit value.
 * -1 → "Unlimited"
 *  0 → "—" (not available)
 *  n → String(n)
 */
export function formatLimit(value: number): string {
  if (value === -1) return 'Unlimited';
  if (value === 0) return '—';
  return String(value);
}

/**
 * Returns the display string for a rate value.
 * null → "—" (not available / negotiated)
 *  0   → "Free"
 *  n   → "₹n"
 */
export function formatRate(value: number | null): string {
  if (value === null) return '—';
  if (value === 0) return 'Free';
  return `₹${value}`;
}

/** Ordered list of plan codes for rendering (Free → Basic → Pro → Enterprise) */
export const PLAN_ORDER: PlanCode[] = ['FREE', 'BASIC', 'PRO', 'ENTERPRISE'];

/** All plans as an ordered array */
export const ALL_PLANS: PlanDefinition[] = PLAN_ORDER.map((c) => PLAN_DEFINITIONS[c]);
