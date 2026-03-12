"use client";
import { useState } from "react";
import {
  Check,
  ArrowRight,
  Zap,
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

const FAQ = [
  { q: "Is there a free plan?", a: "Yes! Every new account gets a ₹50 signup bonus to get started." },
  { q: "Are WhatsApp conversation charges included?", a: "Platform fees are included. WhatsApp conversation charges are billed separately per Meta's rates." },
  { q: "Can I change plans anytime?", a: "Yes — you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades are applied in the next billing cycle." },
  { q: "Do you offer a refund guarantee?", a: "Refunds may be issued after a review of the request." },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

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
                  ? "bg-white shadow-sm text-gray-900"
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
                    : "border border-gray-200 shadow-sm"
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
                    onClick={() => window.open("https://staging-dashboard.bigbrosai.com", "_blank")}
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
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
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