"use client";
import { useEffect, useMemo, useState } from "react";
import {
  Check,
  ArrowRight,
  Building2,
  HelpCircle,
  MessageCircle,
  UserRound,
  Megaphone,
  ShoppingCart,
  Eye,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { PRICING_PLANS } from "@/lib/data";
import { FeatureComparisonTable } from "@/components/pricing/FeatureComparisonTable";

const FAQ = [
  { q: "Is there a free plan?", a: "Yes! Every new account gets a ₹50 signup bonus to get started." },
  { q: "Do emails cost extra?", a: "Every organisation gets 300 free transactional emails per day — no credit card, no expiry. Beyond that, emails are charged at ₹0.125/email." },
  { q: "Are WhatsApp conversation charges included?", a: "Platform fees are included. WhatsApp conversation charges are billed separately per Meta's rates." },
  { q: "Can I change plans anytime?", a: "Yes — you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades are applied in the next billing cycle." },
  { q: "Do you offer a refund guarantee?", a: "Refunds may be issued after a review of the request." },
];

type WhatsAppPricingCategory =
  | "marketing"
  | "utility"
  | "authentication"
  | "authentication_international"
  | "service";

type WhatsAppPricingRate = {
  marketKey: string;
  marketType: "COUNTRY" | "REGION" | "GLOBAL_FALLBACK";
  metaMarketName: string;
  countryIso?: string | null;
  countryCallingCode?: string | null;
  category: WhatsAppPricingCategory;
  currency: string;
  customerDefaultRate: number;
  effectiveFrom?: string;
};

const WHATSAPP_CATEGORY_LABELS: Record<WhatsAppPricingCategory, string> = {
  marketing: "Marketing",
  utility: "Utility",
  authentication: "Authentication",
  authentication_international: "Auth International",
  service: "Service",
};

const WHATSAPP_CATEGORY_ORDER: WhatsAppPricingCategory[] = [
  "marketing",
  "utility",
  "authentication",
  "authentication_international",
  "service",
];

function formatRate(value?: number | null) {
  if (typeof value !== "number" || Number.isNaN(value)) return "-";
  return `₹${value.toLocaleString("en-IN", { minimumFractionDigits: 4, maximumFractionDigits: 4 })}`;
}

function getPricingPayload(payload: unknown): WhatsAppPricingRate[] {
  if (Array.isArray(payload)) return payload as WhatsAppPricingRate[];
  const data = (payload as { data?: unknown })?.data;
  return Array.isArray(data) ? data as WhatsAppPricingRate[] : [];
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [whatsAppRates, setWhatsAppRates] = useState<WhatsAppPricingRate[]>([]);
  const [pricingLoading, setPricingLoading] = useState(true);
  const [pricingError, setPricingError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadWhatsAppPricing() {
      try {
        setPricingLoading(true);
        setPricingError(null);
        const response = await fetch("/api/whatsapp-pricing", {
          headers: { accept: "application/json" },
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Pricing API returned ${response.status}`);
        }

        const payload = await response.json();
        if (active) setWhatsAppRates(getPricingPayload(payload));
      } catch (error) {
        if (active) setPricingError(error instanceof Error ? error.message : "Could not load pricing");
      } finally {
        if (active) setPricingLoading(false);
      }
    }

    loadWhatsAppPricing();
    return () => {
      active = false;
    };
  }, []);

  const whatsAppPricingRows = useMemo(() => {
    const grouped = new Map<string, {
      sample: WhatsAppPricingRate;
      rates: Partial<Record<WhatsAppPricingCategory, WhatsAppPricingRate>>;
    }>();

    whatsAppRates.forEach((rate) => {
      const key = rate.marketKey || rate.countryIso || rate.metaMarketName;
      const existing = grouped.get(key) || { sample: rate, rates: {} };
      existing.rates[rate.category] = rate;
      grouped.set(key, existing);
    });

    return Array.from(grouped.values()).sort((a, b) => {
      const marketOrder = { COUNTRY: 0, REGION: 1, GLOBAL_FALLBACK: 2 } as Record<string, number>;
      const typeDiff = (marketOrder[a.sample.marketType] ?? 3) - (marketOrder[b.sample.marketType] ?? 3);
      if (typeDiff !== 0) return typeDiff;
      if (a.sample.countryIso === "IN") return -1;
      if (b.sample.countryIso === "IN") return 1;
      return a.sample.metaMarketName.localeCompare(b.sample.metaMarketName);
    });
  }, [whatsAppRates]);

  const visibleCategories = useMemo(() => {
    return WHATSAPP_CATEGORY_ORDER.filter((category) =>
      whatsAppRates.some((rate) => rate.category === category)
    );
  }, [whatsAppRates]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-[11px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-700" /> Transparent Pricing
          </div>

          <h1 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-[1.1] mb-4">
            Simple Pricing, <span className="text-gradient">No Hidden Fees</span>
          </h1>

          <p className="text-slate-500 text-lg mb-8">
            Start free. Scale as you grow. Cancel anytime.
          </p>

          <div className="inline-flex items-center gap-1 bg-gray-100 border border-gray-200 rounded-xl p-1.5">
            {[false, true].map((a) => (
              <button
                key={String(a)}
                onClick={() => setAnnual(a)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${annual === a
                  ? "bg-white  text-gray-900"
                  : "text-gray-500"
                  }`}
              >
                {a ? "Annual" : "Monthly"}
                {a && (
                  <span className="bg-brand-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    10% off
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Email Free Tier Banner */}
      <section className="bg-white border-b border-gray-100 py-4 px-6">
        <div className="max-w-xl mx-auto flex flex-col items-stretch gap-3">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-blue-50 border border-blue-200 rounded-2xl px-5 py-3">
            <span className="text-blue-600 text-sm font-bold">📧 Email:</span>
            <span className="text-blue-700 text-sm font-semibold">300 free emails / day on every plan</span>
            <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">₹0.125 / email after</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-3">
            <span className="text-amber-600 text-sm font-bold">📱 SMS:</span>
            <span className="text-amber-700 text-sm font-semibold">OTP, alerts &amp; promotions on every plan</span>
            <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">₹0.14–0.20 / SMS · volume based</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-8">
            {PRICING_PLANS.map((plan) => {
              const price = annual ? plan.price.annual : plan.price.monthly;

              return (
                <div
                  key={plan.name}
                  className={`bg-white rounded-2xl p-8 relative transition-all ${plan.popular
                    ? "border-2 border-brand-700 shadow-brand-lg scale-[1.02]"
                    : "border border-gray-200 "
                    }`}
                >
                  <div
                    className="font-display font-bold text-lg mb-1"
                    style={{ color: plan.color }}
                  >
                    {plan.name}
                  </div>

                  <div className="font-display font-black text-5xl text-gray-900 mb-1">
                    {price === 0 ? (
                      "Free"
                    ) : (
                      <>
                        ₹{price.toLocaleString()}
                        <span className="text-base font-medium text-slate-400">
                          /mo
                        </span>
                      </>
                    )}
                  </div>

                  {/* {annual && price !== 0 && (
                    <div className="text-xs text-slate-400 mb-3">
                      billed ₹{(plan.price.annual * 12).toLocaleString()}/yr
                    </div>
                  )} */}

                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    {plan.desc}
                  </p>

                  <Button
                    fullWidth
                    variant={plan.popular ? "primary" : "secondary"}
                    size="md"
                    className="mb-7"
                    onClick={() => window.open("https://dashboard.bigbrosai.com", "_blank")}
                  >
                    {plan.cta} <ArrowRight size={15} />
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <Check
                          size={14}
                          strokeWidth={2.5}
                          className="mt-0.5 shrink-0 text-brand-700"
                        />
                        <span className="text-sm text-slate-600 leading-snug">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enterprise */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Building2 size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-display font-black text-white text-xl mb-2">
                  Enterprise / Custom
                </h3>
                <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
                  Unlimited messages, dedicated infrastructure, custom
                  integrations, SLA guarantee, and a named account manager.
                </p>
              </div>
            </div>

            <Button size="lg" variant="primary" className="shrink-0">
              Contact Sales <ArrowRight size={16} />
            </Button>
          </div>

          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-3">
                Compare All Plans
              </h2>
              <p className="text-slate-500 text-base">
                Every feature, every limit — side by side.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-card mt-2">
              <FeatureComparisonTable annual={annual} />
            </div>
          </div>

          <section className="bg-white px-6 py-14 border-b border-gray-100">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="max-w-4xl">
                  <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-[1.1]">
                    Countrywise per WhatsApp message Pricing
                  </h2>
                  <p className="mt-5 text-slate-500 text-lg leading-relaxed">
                    Messaging costs vary by your user's country. Check the exact per-message charges for sending WhatsApp messages to users in different regions.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => document.getElementById("whatsapp-country-pricing")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-brand-700 px-6 py-4 text-base font-bold text-white shadow-brand transition-all hover:bg-brand-800 active:scale-[0.97] lg:shrink-0"
                >
                  Explore Pricing <ArrowRight size={22} />
                </button>
              </div>

              <div id="whatsapp-country-pricing" className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white">
                <div className="overflow-x-auto">
                  <table className="min-w-[980px] w-full text-left">
                    <thead className="bg-gray-50">
                      <tr className="border-b border-gray-200">
                        <th className="px-5 py-4 text-xs font-bold uppercase tracking-[0.08em] text-gray-500">Market</th>
                        {(visibleCategories.length ? visibleCategories : WHATSAPP_CATEGORY_ORDER.slice(0, 3)).map((category) => (
                          <th key={category} className="px-5 py-4 text-xs font-bold uppercase tracking-[0.08em] text-gray-500">
                            {WHATSAPP_CATEGORY_LABELS[category]}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {pricingLoading && Array.from({ length: 6 }).map((_, index) => (
                        <tr key={index}>
                          <td className="px-5 py-5">
                            <div className="h-5 w-40 rounded bg-gray-100 animate-pulse" />
                            <div className="mt-2 h-3 w-16 rounded bg-gray-100 animate-pulse" />
                          </td>
                          {(visibleCategories.length ? visibleCategories : WHATSAPP_CATEGORY_ORDER.slice(0, 3)).map((category) => (
                            <td key={category} className="px-5 py-5">
                              <div className="h-5 w-20 rounded bg-gray-100 animate-pulse" />
                            </td>
                          ))}
                        </tr>
                      ))}
                      {!pricingLoading && !pricingError && whatsAppPricingRows.map(({ sample, rates }) => (
                        <tr key={sample.marketKey} className="hover:bg-gray-50/70">
                          <td className="px-5 py-4">
                            <div className="font-semibold text-gray-900">{sample.metaMarketName}</div>
                            <div className="text-xs text-slate-400">
                              {sample.countryCallingCode
                                ? `+${sample.countryCallingCode}`
                                : sample.marketType === "GLOBAL_FALLBACK"
                                  ? "Default"
                                  : "Region"}
                            </div>
                          </td>
                          {visibleCategories.map((category) => (
                            <td key={category} className="px-5 py-4 font-mono text-sm font-bold text-gray-900">
                              {formatRate(rates[category]?.customerDefaultRate)}
                            </td>
                          ))}
                        </tr>
                      ))}
                      {!pricingLoading && pricingError && (
                        <tr>
                          <td className="px-5 py-8 text-sm text-red-600" colSpan={(visibleCategories.length || 3) + 1}>
                            Pricing is temporarily unavailable.
                          </td>
                        </tr>
                      )}
                      {!pricingLoading && !pricingError && whatsAppPricingRows.length === 0 && (
                        <tr>
                          <td className="px-5 py-8 text-sm text-slate-500" colSpan={(visibleCategories.length || 3) + 1}>
                            WhatsApp pricing will appear after the active Meta rate card is uploaded.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-3">
                Important Pricing Terminologies
              </h2>
              <p className="text-slate-500 text-base">Let's make WhatsApp API Pricing easy to understand for you!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
              {[
                {
                  img: "/whatsapp-black.svg",
                  Icon: MessageCircle,
                  title: "Customer Service Window",
                  body: "When a user sends you a message, a 24-hour support window begins. Each new message from the user resets this window. During this window, you can respond freely without additional charges and you can respond with any free form messages. Also, utility templates delivered within this window won't be charged.",
                },
                {
                  Icon: UserRound,
                  title: "Unlimited Free Service messages",
                  body: "Each business using bigbrosai receives Unlimited FREE service messages. Businesses can reply to user messages without incurring any charges; it's completely FREE.",
                },
                {
                  Icon: Megaphone,
                  title: "Marketing messages",
                  body: "Marketing messages include all promotional messages, offers, product updates. Each marketing message delivered costs ₹1.09/message (for Indian users)",
                  bold: ["₹0.99/message", "(for Indian users)"],
                },
                {
                  Icon: ShoppingCart,
                  title: "Utility Messages",
                  body: "Utility messages are transactional in nature and include messages for delivery updates, transaction receipts, reminders and more. Each utility message delivered costs ₹0.145/message (for Indian users). Utility templates delivered within a customer service window won't be charged.",
                  bold: ["₹0.145/message", "(for Indian users)."],
                },
                {
                  Icon: Eye,
                  title: "Authentication Messages",
                  body: "Authentication messages include messages used for verification purposes such as OTP, account registration and account recovery. Each authentication template message delivered costs ₹0.145/message (for Indian users)",
                  bold: ["₹0.145/message", "(for Indian users)"],
                },
                {
                  Icon: Search,
                  title: "Service Messages",
                  body: "Service messages includes all user-initiated messages related to customer support, Chatbot support & queries asked by users. Service conversations are FREE for all businesses using bigbrosai.",
                  bold: ["related to customer support,", "Chatbot support & queries asked by", "users."],
                },
              ].map(({ Icon, img, title, body }) => (
                <div key={title} className="flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0">
                    {img
                      ? <img src={img} alt={title} className="w-5 h-5 object-contain" />
                      : <Icon size={20} className="text-brand-700" />
                    }
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="font-display font-black text-2xl text-gray-900 text-center mb-8 flex items-center justify-center gap-2">
              <HelpCircle size={22} className="text-brand-700" /> Pricing FAQ
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {FAQ.map((f) => (
                <div
                  key={f.q}
                  className="bg-white border border-gray-200 rounded-2xl p-6 "
                >
                  <div className="font-semibold text-sm text-gray-900 mb-2">
                    {f.q}
                  </div>
                  <div className="text-sm text-slate-500 leading-relaxed">
                    {f.a}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}
