"use client";
import { useState } from "react";
import {
  Check, ArrowRight, Building2, HelpCircle,
  MailWarning, ShieldAlert, CheckCircle2, Eye, MousePointerClick, UserMinus
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const EMAIL_PLANS = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    desc: "For developers and side projects testing out our API.",
    popular: false,
    color: "#64748b", // slate-500
    cta: "Start for Free",
    features: [
      "Up to 10,000 emails/month",
      "REST API & SMTP Relay",
      "3 Days Log Retention",
      "Standard Deliverability",
      "Community Support",
    ],
  },
  {
    name: "Scale",
    price: { monthly: 2499, annual: 1999 },
    desc: "Everything you need to deliver transactional emails at scale.",
    popular: true,
    color: "#0284c7", // sky-600
    cta: "Start Free Trial",
    features: [
      "Up to 100,000 emails/month",
      "Real-time Webhooks",
      "Inbound Parsing",
      "30 Days Log Retention",
      "1 Dedicated IP",
      "Priority API Support",
    ],
  },
  {
    name: "Volume",
    price: { monthly: 8299, annual: 6599 },
    desc: "High volume sending with dedicated infrastructure.",
    popular: false,
    color: "#8b5cf6", // violet-500
    cta: "Contact Sales",
    features: [
      "Up to 1,000,000 emails/month",
      "Multiple Dedicated IPs",
      "Custom Reverse DNS",
      "99.99% SLA Guarantee",
      "Deliverability Expert",
      "24/7 Phone Support",
    ],
  },
];

const FAQ = [
  { q: "Is the Starter plan really free?", a: "Yes! You can send up to 10,000 emails per month via API or SMTP completely free, no credit card required." },
  { q: "What happens if I go over my limit?", a: "You won't be cut off. We will notify you when you approach your limit, and you can simply slide into the next volume tier seamlessly." },
  { q: "Do you offer dedicated IPs?", a: "Yes, dedicated IP addresses are included in our Pro and Enterprise plans to ensure the highest possible deliverability." },
  { q: "Can I bring my own HTML templates?", a: "Absolutely. You can import custom HTML templates, or build from scratch using our rich drag-and-drop builder." },
];

export function PricingSectionEmail() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="bg-gray-50 py-24 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-700" /> Flexible Pricing
          </div>

          <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-[1.1] mb-6">
            Email Pricing That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">Scales With You</span>
          </h2>

          <div className="flex items-center justify-center gap-4 mt-8">
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
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Save 20%
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-8">
          {EMAIL_PLANS.map((plan) => {
            const price = annual ? plan.price.annual : plan.price.monthly;

            return (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl p-8 relative transition-all ${plan.popular
                    ? "border-2 border-blue-600 shadow-xl shadow-blue-900/5 scale-[1.02] z-10"
                    : "border border-gray-200 shadow-sm"
                  }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
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

                <p className="text-slate-500 text-sm mb-6 leading-relaxed mt-4">
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

                <div className="space-y-3 pt-6 border-t border-gray-100">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <Check
                        size={14}
                        strokeWidth={2.5}
                        className="mt-0.5 shrink-0 text-blue-600"
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
        <div className="bg-gray-900 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 bg-gradient-to-br from-gray-900 to-slate-800 border border-slate-700 shadow-2xl">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
              <Building2 size={24} className="text-blue-400" />
            </div>
            <div>
              <h3 className="font-display font-black text-white text-2xl mb-2">
                Enterprise Email Solutions
              </h3>
              <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
                Sending over 1 million emails a month? Get custom volume pricing, dedicated infrastructure, whitelabeling, and priority SLAs designed for large-scale operations.
              </p>
            </div>
          </div>

          <Button size="lg" className="shrink-0 bg-white text-gray-900 hover:bg-gray-100">
            Contact Sales <ArrowRight size={16} />
          </Button>
        </div>

        {/* Email Terminology Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-3">
              Important Email Terminologies
            </h2>
            <p className="text-slate-500 text-base">Let's make Email Marketing Metrics easy to understand for you!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
            {[
              {
                Icon: CheckCircle2,
                title: "Deliverability Rate",
                body: "The percentage of emails that successfully reach the recipient's main inbox, avoiding the spam folder. Maintaining a high deliverability rate ensures your audience actually sees your messages.",
              },
              {
                Icon: MailWarning,
                title: "Bounce Rate",
                body: "The percentage of your emails that could not be delivered. Hard bounces indicate invalid or non-existent email addresses, while soft bounces are temporary delivery failures (like a full inbox).",
              },
              {
                Icon: ShieldAlert,
                title: "Spam Complaint Rate",
                body: "The percentage of recipients who marked your email as spam. A high spam complaint rate can severely damage your sender reputation and cause future emails to be blocked by ISPs.",
              },
              {
                Icon: Eye,
                title: "Open Rate",
                body: "The percentage of successfully delivered emails that were opened by recipients. A strong subject line and recognizable sender name are key factors in driving high open rates.",
              },
              {
                Icon: MousePointerClick,
                title: "Click-Through Rate (CTR)",
                body: "The percentage of recipients who clicked on one or more links contained in your email. It indicates how engaging and relevant your email content and call-to-actions are to your audience.",
              },
              {
                Icon: UserMinus,
                title: "Unsubscribe Rate",
                body: "The percentage of users who opt out of your mailing list after receiving an email. Ensuring content relevance and healthy sending frequencies can minimize unsubscribes.",
              },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Area */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display font-black text-2xl text-gray-900 text-center mb-8 flex items-center justify-center gap-2">
            <HelpCircle size={22} className="text-blue-600" /> Frequently Asked Questions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FAQ.map((f) => (
              <div
                key={f.q}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
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
  );
}
