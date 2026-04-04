import Link from "next/link";
import { ArrowRight, Mail, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

const PERKS = [
  { stat: "300",     label: "free emails / day",         sub: "Every organisation, forever"   },
  { stat: "₹0.125", label: "per email after free tier",  sub: "Pay only for what you use"     },
  { stat: "99.9%",  label: "delivery uptime SLA",        sub: "Powered by Hyvor Relay"        },
  { stat: "<2s",    label: "average delivery time",      sub: "Global relay infrastructure"   },
];

const FEATURES = [
  "DKIM + SPF + DMARC authentication",
  "Send from your own verified domain",
  "Delivery & bounce webhooks",
  "Attachment support",
  "Idempotency keys",
  "IP allowlist security",
];

export function EmailFreeSection() {
  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full">
            <Mail size={12} /> Email API — Now Live
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-8 py-14 md:px-14">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/5 rounded-full blur-3xl pointer-events-none" />
          {/* Email illustration art */}
          <svg aria-hidden="true" className="absolute right-0 top-0 h-full w-72 pointer-events-none opacity-[0.18]"
            viewBox="0 0 288 320" fill="none" preserveAspectRatio="xMaxYMid slice">
            {/* Envelope stack */}
            <rect x="60" y="80" width="168" height="120" rx="12" fill="#1d4ed8" />
            <path d="M60 80 L144 148 L228 80" stroke="white" strokeWidth="3" fill="none" />
            <rect x="72" y="220" width="144" height="100" rx="10" fill="#1d4ed8" opacity="0.6" />
            <path d="M72 220 L144 270 L216 220" stroke="white" strokeWidth="2" fill="none" opacity="0.8" />
            {/* Speed lines */}
            <line x1="20" y1="120" x2="55" y2="120" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="140" x2="55" y2="140" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
            <line x1="25" y1="160" x2="55" y2="160" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
            {/* Checkmark badge */}
            <circle cx="220" cy="75" r="22" fill="#22c55e" />
            <path d="M210 75 L218 83 L232 67" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* Dots */}
            <circle cx="240" cy="200" r="5" fill="#1d4ed8" opacity="0.4" />
            <circle cx="260" cy="160" r="4" fill="#6366f1" opacity="0.4" />
            <circle cx="50" cy="260" r="5" fill="#1d4ed8" opacity="0.3" />
          </svg>

          <div className="relative flex flex-col lg:flex-row lg:items-center gap-12">

            {/* Left: headline + features */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                  <Zap size={18} className="text-white" />
                </div>
                <span className="text-sm font-bold text-blue-700">Free Tier — No Expiry</span>
              </div>

              <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight leading-[1.1] mb-4">
                300 free emails<br />
                <span className="text-blue-600">every single day</span>
              </h2>

              <p className="text-slate-500 text-base leading-relaxed mb-6 max-w-lg">
                Every organisation on bigbrosai gets 300 transactional emails free per day — no credit card, no trial period, no expiry. Send from your own verified domain with full email authentication. Only pay when you go beyond the free tier.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {FEATURES.map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="https://dashboard.bigbrosai.com/signup" target="_blank" rel="noopener noreferrer">
                  <Button size="md" className="bg-[#388bfd]">
                    Start Sending Free <ArrowRight size={15} />
                  </Button>
                </Link>
                <Link href="https://docs.bigbrosai.com/docs/email/send" target="_blank" rel="noopener noreferrer">
                  <Button size="md" variant="secondary">
                    View API Docs
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: stats grid */}
            <div className="grid grid-cols-2 gap-3 lg:w-72 shrink-0">
              {PERKS.map(p => (
                <div key={p.stat} className="bg-white rounded-2xl border border-gray-200 px-5 py-5 shadow-sm">
                  <p className="font-display font-black text-2xl text-gray-900 leading-none">{p.stat}</p>
                  <p className="text-xs font-semibold text-gray-600 mt-1.5 leading-snug">{p.label}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{p.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
