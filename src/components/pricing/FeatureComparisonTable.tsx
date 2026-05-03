"use client";

import { useState } from "react";
import { Check, Minus, ArrowRight, Info } from "lucide-react";
import {
  ALL_PLANS,
  type PlanCode,
  type PlanDefinition,
  formatLimit,
  formatRate,
} from "@/lib/plans";

// ─────────────────────────────────────────────────────────────────────────────
// Row definitions — every row the table renders
// ─────────────────────────────────────────────────────────────────────────────

interface SectionRow {
  type: "section";
  label: string;
}

interface FeatureRow {
  type: "feature";
  label: string;
  tooltip?: string;
  key: keyof PlanDefinition["features"];
}

interface LimitRow {
  type: "limit";
  label: string;
  tooltip?: string;
  key: keyof PlanDefinition["limits"];
  /** Optional unit suffix shown after the value */
  unit?: string;
}

interface RateRow {
  type: "rate";
  label: string;
  tooltip?: string;
  key: keyof PlanDefinition["rates"];
}

interface AddonRow {
  type: "addon";
  label: string;
  tooltip?: string;
  /** Static per-plan values to display */
  values: Record<PlanCode, string>;
}

type Row = SectionRow | FeatureRow | LimitRow | RateRow | AddonRow;

const ROWS: Row[] = [
  // ── WhatsApp Messaging ──────────────────────────────────
  { type: "section", label: "WhatsApp Messaging" },
  {
    type: "feature",
    label: "WhatsApp Business API",
    key: "whatsappApi",
  },
  {
    type: "feature",
    label: "Unlimited Free Service Conversations",
    tooltip: "User-initiated support conversations are always free.",
    key: "unlimitedServiceConversations",
  },
  {
    type: "rate",
    label: "Marketing Conversations",
    tooltip: "Promotional messages, offers, product updates.",
    key: "waMarketing",
  },
  {
    type: "rate",
    label: "Utility Conversations",
    tooltip: "Delivery updates, receipts, reminders.",
    key: "waUtility",
  },
  {
    type: "rate",
    label: "Authentication Conversations",
    tooltip: "OTPs, account verification.",
    key: "waAuthentication",
  },
  {
    type: "limit",
    label: "Messages / Minute Throughput",
    tooltip: "Max WhatsApp messages your project can send per minute.",
    key: "messagesPerMinute",
    unit: "msg/min",
  },

  // ── Campaigns ───────────────────────────────────────────
  { type: "section", label: "Campaigns" },
  {
    type: "limit",
    label: "Campaigns per Day",
    tooltip: "Including all types of campaigns.",
    key: "campaigns",
  },
  {
    type: "feature",
    label: "Broadcasting & Retargeting",
    key: "retargeting",
  },
  // {
  //   type: "feature",
  //   label: "Click-to-WhatsApp Ads",
  //   key: "clickToWhatsAppAds",
  // },
  {
    type: "feature",
    label: "Smart Audience Segregation",
    key: "smartAudienceSegregation",
  },
  {
    type: "feature",
    label: "Schedule Campaigns",
    tooltip: "Upload a CSV to schedule bulk campaigns.",
    key: "csvCampaignScheduler",
  },
  // {
  //   type: "feature",
  //   label: "Campaign Budget Analytics",
  //   key: "campaignBudgetAnalytics",
  // },

  // ── Contacts ────────────────────────────────────────────
  { type: "section", label: "Contacts" },
  {
    type: "feature",
    label: "Create & Manage Contacts",
    key: "createContacts",
  },
  {
    type: "limit",
    label: "Tags",
    key: "tags"
  },
  {
    type: "limit",
    label: "Custom Attributes",
    key: "attributes",
  },
  {
    type: "feature",
    label: "Bulk CSV Contact Import",
    tooltip: "Import thousands of contacts at once via CSV.",
    key: "importContacts",
  },
  {
    type: "feature",
    label: "Export Contacts to CSV",
    tooltip: "Download your full contact list as a CSV file. Pro & Enterprise only.",
    key: "exportContacts",
  },

  // ── Flow Builder ────────────────────────────────────────
  { type: "section", label: "Flow Builder (Chatbot)" },
  {
    type: "addon",
    label: "Chatbot Flows",
    tooltip: "Purchase extra slots at ₹250 each.",
    values: { FREE: "—", BASIC: "5 Chatbot Flows: ₹2199 (charged separately)", PRO: "5 Chatbot Flows: ₹2199 (charged separately)", ENTERPRISE: "Custom" },
  },

  // ── Blue Tick Verification ────────────────────────────────────────
  { type: "section", label: "Blue Tick Verification" },
  {
    type: "addon",
    label: "Blue Tick Verification",
    tooltip: "WhatsApp Blue Tick Verification.",
    values: { FREE: "—", BASIC: "₹999 (one time fee)", PRO: "₹999 (one time fee)", ENTERPRISE: "No Charge" },
  },

  // ── Team & Access ────────────────────────────────────────
  { type: "section", label: "Team & Access Control" },
  {
    type: "addon",
    label: "Included Seats",
    tooltip: "Owner + free agent seats bundled with the plan.",
    values: {
      FREE: "1 Owner",
      BASIC: "1 Owner + 5 Agents (₹499/agent/month)",
      PRO: "1 Owner + 5 Agents ₹499/agent/month)",
      ENTERPRISE: "Custom",
    },
  },

  // ── Webhooks Update ────────────────────────────────────────
  { type: "section", label: "Webhooks Update" },
  {
    type: "addon",
    label: "Webhooks Update",
    tooltip: "WhatsApp Blue Tick Verification.",
    values: { FREE: "—", BASIC: "₹999/month", PRO: "₹999/month", ENTERPRISE: "Custom" },
  },

  // ── Storage ──────────────────────────────────────────────
  { type: "section", label: "Storage" },
  {
    type: "limit",
    label: "Cloud Storage",
    key: "storageGB",
    unit: "GB",
  },
];

// Remove the duplicate "Monthly Platform Fee" limit row we used as placeholder
const CLEAN_ROWS = ROWS.filter(
  (r) => !(r.type === "limit" && (r as LimitRow).key === "storageGB" && r.label === "Monthly Platform Fee"),
);

// ─────────────────────────────────────────────────────────────────────────────
// Cell renderers
// ─────────────────────────────────────────────────────────────────────────────

function BoolCell({ value }: { value: boolean }) {
  return value ? (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-50">
      <Check size={13} strokeWidth={3} className="text-brand-700" />
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
      <Minus size={13} strokeWidth={2.5} className="text-gray-400" />
    </span>
  );
}

function TextCell({ value, highlight }: { value: string; highlight?: boolean }) {
  if (value === "—") {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
        <Minus size={13} strokeWidth={2.5} className="text-gray-400" />
      </span>
    );
  }
  return (
    <span
      className={`text-sm font-medium ${highlight ? "text-brand-700" : "text-gray-700"}`}
    >
      {value}
    </span>
  );
}

function getCellValue(row: Row, plan: PlanDefinition): React.ReactNode {
  switch (row.type) {
    case "feature":
      return <BoolCell value={plan.features[(row as FeatureRow).key]} />;

    case "limit": {
      const val = plan.limits[(row as LimitRow).key];
      const unit = (row as LimitRow).unit;
      const display = formatLimit(val);
      if (display === "—") return <TextCell value="—" />;
      return (
        <TextCell
          value={display === "Unlimited" ? "Unlimited" : unit ? `${display} ${unit}` : display}
          highlight={display === "Unlimited"}
        />
      );
    }

    case "rate": {
      const val = plan.rates[(row as RateRow).key];
      const display = formatRate(val);
      return <TextCell value={display} />;
    }

    case "addon":
      return <TextCell value={(row as AddonRow).values[plan.code]} />;

    default:
      return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Tooltip
// ─────────────────────────────────────────────────────────────────────────────

function Tooltip({ text }: { text: string }) {
  return (
    <span className="group relative inline-flex ml-1.5 cursor-help">
      <Info size={12} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
      <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 rounded-lg bg-gray-900 px-3 py-2 text-[11px] text-white leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity z-50 shadow-lg">
        {text}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
      </span>
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────

interface FeatureComparisonTableProps {
  annual: boolean;
}

export function FeatureComparisonTable({ annual }: FeatureComparisonTableProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Plans to show in columns (all 4)
  const plans = ALL_PLANS;

  const planHeaderBg: Record<PlanCode, string> = {
    FREE: "bg-slate-50 border-slate-200",
    BASIC: "bg-green-50 border-green-200",
    PRO: "bg-violet-50 border-violet-200",
    ENTERPRISE: "bg-gray-900 border-gray-700",
  };

  const planHeaderText: Record<PlanCode, string> = {
    FREE: "text-slate-700",
    BASIC: "text-green-700",
    PRO: "text-violet-700",
    ENTERPRISE: "text-white",
  };

  return (
    <div className="w-full overflow-x-auto overflow-y-visible">
      <table className="w-full min-w-[720px] border-collapse">
        {/* ── Sticky header ── */}
        <thead className="sticky top-0 z-20">
          <tr>
            {/* Feature label column */}
            <th className="bg-white border-b border-gray-200 py-4 px-5 text-left w-[260px]">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Features
              </span>
            </th>

            {plans.map((plan) => {
              const price = annual ? plan.pricing.annual : plan.pricing.monthly;
              const isEnterprise = plan.code === "ENTERPRISE";
              const isPro = plan.code === "PRO";

              return (
                <th
                  key={plan.code}
                  className={`border-b px-4 text-center align-top ${planHeaderBg[plan.code]} ${isPro ? "border-2 border-violet-400 pt-4 pb-4" : "py-4 border-gray-200"}`}
                >
                  {isPro && (
                    <div className="flex justify-center mb-2">
                      <span className="bg-violet-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                        Most Popular
                      </span>
                    </div>
                  )}
                  {!isPro && <div className="h-[22px]" />}

                  <div
                    className={`font-display font-black text-base mb-0.5 ${planHeaderText[plan.code]}`}
                  >
                    {plan.name}
                  </div>

                  {isEnterprise ? (
                    <div className="text-gray-400 text-sm font-semibold">Custom</div>
                  ) : (
                    <div className={`font-display font-black text-2xl ${planHeaderText[plan.code]}`}>
                      {price === 0 ? (
                        "Free"
                      ) : (
                        <>
                          ₹{price.toLocaleString()}
                          <span className="text-xs font-medium opacity-60">/mo</span>
                        </>
                      )}
                    </div>
                  )}

                  <div className="mt-2">
                    <a
                      href={isEnterprise ? "/contact-us" : "https://dashboard.bigbrosai.com/signup"}
                      target={isEnterprise ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all ${
                        isPro
                          ? "bg-violet-600 text-white hover:bg-violet-700"
                          : isEnterprise
                          ? "bg-white/10 text-white hover:bg-white/20"
                          : "bg-white border border-gray-200 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {plan.cta} <ArrowRight size={10} />
                    </a>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>

        {/* ── Body ── */}
        <tbody>
          {CLEAN_ROWS.map((row, idx) => {
            if (row.type === "section") {
              return (
                <tr key={`section-${idx}`}>
                  <td
                    colSpan={5}
                    className="bg-gray-50 border-y border-gray-200 px-5 py-2.5 cursor-pointer select-none"
                    onClick={() =>
                      setActiveSection(
                        activeSection === row.label ? null : row.label,
                      )
                    }
                  >
                    <span className="text-[11px] font-black uppercase tracking-widest text-gray-500">
                      {row.label}
                    </span>
                  </td>
                </tr>
              );
            }

            const labelRow = row as FeatureRow | LimitRow | RateRow | AddonRow;

            return (
              <tr
                key={`row-${idx}`}
                className="border-b border-gray-100 hover:bg-gray-50/60 transition-colors"
              >
                {/* Label */}
                <td className="py-3.5 px-5">
                  <span className="text-sm text-gray-600 leading-snug flex items-center">
                    {labelRow.label}
                    {labelRow.tooltip && <Tooltip text={labelRow.tooltip} />}
                  </span>
                </td>

                {/* Plan cells */}
                {plans.map((plan) => (
                  <td
                    key={plan.code}
                    className={`py-3.5 px-4 text-center ${
                      plan.code === "PRO"
                        ? "bg-violet-50/40"
                        : plan.code === "ENTERPRISE"
                        ? "bg-gray-900/5"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      {getCellValue(row, plan)}
                    </div>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>

        {/* ── Footer CTA row ── */}
        <tfoot>
          <tr className="border-t-2 border-gray-200">
            <td className="py-6 px-5 text-sm text-gray-400 font-medium">
              Ready to get started?
            </td>
            {plans.map((plan) => {
              const isEnterprise = plan.code === "ENTERPRISE";
              const isPro = plan.code === "PRO";
              return (
                <td key={plan.code} className="py-6 px-4 text-center">
                  <a
                    href={isEnterprise ? "/contact-us" : "https://dashboard.bigbrosai.com/signup"}
                    target={isEnterprise ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-xl transition-all ${
                      isPro
                        ? "bg-violet-600 text-white hover:bg-violet-700 shadow-md"
                        : isEnterprise
                        ? "bg-gray-900 text-white hover:bg-gray-800"
                        : "bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {plan.cta} <ArrowRight size={13} />
                  </a>
                </td>
              );
            })}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
