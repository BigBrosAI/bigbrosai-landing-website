// ── Navigation ────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdownItem {
  label: string;
  desc: string;
  href: string;
  icon?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}

// ── Pricing ───────────────────────────────────────────────
export interface PricingPlan {
  name: string;
  price: { monthly: number; annual: number };
  desc: string;
  color: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

// ── Testimonial ───────────────────────────────────────────
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  rating: number;
}

// ── Feature ───────────────────────────────────────────────
export interface Feature {
  title: string;
  desc: string;
  color: string;
  bullets: string[];
}

// ── Channel ───────────────────────────────────────────────
export interface Channel {
  name: string;
  emoji: string;
  color: string;
  status: "LIVE" | "SOON";
  reach: string;
  openRate: string;
  desc: string;
  features: string[];
}

// ── Stat ──────────────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
  sub?: string;
}
