import Link from "next/link";
import { ArrowRight, MousePointerClick, FileText, CreditCard, Megaphone, Bot } from "lucide-react";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────
   VISUAL MOCKUPS
───────────────────────────────────────────────────────── */

function BroadcastMockup() {
  const rows = [
    { name: "img_tem", cat: "MARKETING", status: "Approved", date: "Mar 15" },
    { name: "flash_sale_40", cat: "MARKETING", status: "Approved", date: "Mar 14" },
    { name: "otp_verify", cat: "AUTHENTICATION", status: "Approved", date: "Feb 15" },
    { name: "order_confirm", cat: "UTILITY", status: "Approved", date: "Feb 10" },
  ];
  const catColor: Record<string, string> = {
    MARKETING: "#f59e0b", AUTHENTICATION: "#8b5cf6", UTILITY: "#0369a1",
  };
  return (
    <div className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#f1f3f4] border-b border-gray-200">
        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" /><div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" /><div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" /></div>
        <div className="flex-1 bg-white border border-gray-200 rounded px-2 py-0.5 text-[10px] text-gray-400">dashboard.bigbrosai.com/templates</div>
      </div>
      {/* Header row */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
        <div><p className="text-sm font-bold text-gray-900">Message Templates <span className="text-gray-400 font-normal">(25)</span></p><p className="text-[10px] text-gray-400">Create and manage your WhatsApp message templates</p></div>
        <div className="bg-brand-700 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg">+ Create Template</div>
      </div>
      {/* Filter tabs */}
      <div className="flex gap-3 px-5 py-2 border-b border-gray-100 text-[10px] font-medium">
        {["All", "Approved", "Pending", "Rejected"].map((t, i) => (
          <span key={t} className={i === 0 ? "text-brand-700 border-b-2 border-brand-700 pb-1" : "text-gray-400"}>{t}</span>
        ))}
      </div>
      {/* Table */}
      <div className="divide-y divide-gray-50">
        <div className="grid grid-cols-4 px-5 py-2 text-[9px] font-bold text-gray-400 uppercase tracking-wider">
          <span>Template Name</span><span>Category</span><span>Status</span><span>Created</span>
        </div>
        {rows.map(r => (
          <div key={r.name} className="grid grid-cols-4 px-5 py-2.5 items-center hover:bg-gray-50">
            <span className="text-[11px] text-gray-800 font-medium truncate">{r.name}</span>
            <span className="text-[9px] font-bold" style={{ color: catColor[r.cat] }}>{r.cat}</span>
            <span className="flex items-center gap-1 text-[10px] text-green-600 font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-green-500" />{r.status}</span>
            <span className="text-[10px] text-gray-400">{r.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatbotMockup() {
  return (
    <div className="relative flex items-end justify-center gap-3 py-4">
      {/* Phone */}
      <div className="w-48 rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white shrink-0">
        <div className="bg-[#075E54] px-3 py-2 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[9px] font-bold text-white">B</div>
          <div><p className="text-white text-[10px] font-semibold">bigbrosai ✓</p><p className="text-white/60 text-[8px]">typically replies instantly</p></div>
        </div>
        <div className="bg-[#E5DDD5] px-2 py-3 space-y-2 min-h-[180px]">
          <div className="bg-white rounded-lg rounded-tl-none px-2.5 py-2 max-w-[90%] shadow-sm">
            <p className="text-[10px] text-gray-800">Hi! 👋 How can I help you today?</p>
          </div>
          <div className="flex gap-1 flex-wrap">
            {["Buy a Plan", "Get Support", "Talk to Sales"].map(b => (
              <div key={b} className="bg-white border border-brand-200 rounded-full px-2 py-0.5 text-[8px] text-brand-700 font-semibold">{b}</div>
            ))}
          </div>
          <div className="bg-[#dcf8c6] rounded-lg rounded-tr-none px-2.5 py-2 max-w-[90%] ml-auto shadow-sm">
            <p className="text-[10px] text-gray-800">Buy a Plan</p>
          </div>
          <div className="bg-white rounded-lg rounded-tl-none px-2.5 py-2 max-w-[90%] shadow-sm">
            <p className="text-[10px] text-gray-800 mb-1.5">Great! Here are our plans 🎉</p>
            {["Starter — Free", "Basic — ₹799/mo", "Pro — ₹1499/mo"].map(p => (
              <div key={p} className="flex items-center gap-1.5 py-0.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-600 shrink-0" /><span className="text-[9px] text-gray-700">{p}</span></div>
            ))}
          </div>
        </div>
      </div>
      {/* Flow card */}
      <div className="w-44 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 shrink-0 mb-8">
        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">Chatbot Flow</p>
        {[
          { label: "Trigger: User Message", color: "#15803d" },
          { label: "AI Intent Detection", color: "#7c3aed" },
          { label: "Send Product Info", color: "#0369a1" },
          { label: "Capture Lead", color: "#d97706" },
          { label: "Handoff to Agent", color: "#dc2626" },
        ].map((step, i) => (
          <div key={i} className="flex items-center gap-2 mb-1.5 last:mb-0">
            <div className="w-4 h-4 rounded-md flex items-center justify-center shrink-0 text-white text-[8px] font-bold" style={{ background: step.color }}>{i + 1}</div>
            <p className="text-[9px] text-gray-700 leading-tight">{step.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTWAMockup() {
  return (
    <div className="relative flex items-end justify-center gap-4 py-6">
      <div className="w-52 rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white shrink-0">
        <div className="bg-gradient-to-br from-brand-800 to-brand-600 aspect-[4/3] flex items-center justify-center relative overflow-hidden">
          <div className="relative text-center px-4">
            <p className="text-white text-[10px] font-semibold uppercase tracking-widest mb-1 opacity-70">Sponsored</p>
            <p className="text-white font-black text-base leading-tight">MBA, MS<br />MTech Programs</p>
          </div>
        </div>
        <div className="px-3 py-2.5">
          <p className="text-[10px] text-gray-500 truncate mb-2">hind_edu · Advance your education...</p>
          <div className="flex gap-1.5">
            <div className="flex-1 bg-gray-100 rounded-md py-1.5 text-center text-[10px] font-semibold text-gray-700">Send Message</div>
            <div className="flex-1 bg-[#25d366] rounded-md py-1.5 text-center text-[10px] font-semibold text-white flex items-center justify-center gap-1">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
              WhatsApp
            </div>
          </div>
        </div>
      </div>
      <svg width="40" height="40" viewBox="0 0 40 40" className="shrink-0 text-gray-300 hidden sm:block">
        <path d="M4 20 Q20 4 36 20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" fill="none" strokeLinecap="round" />
        <path d="M30 14 L36 20 L30 26" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="w-44 rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white shrink-0">
        <div className="bg-[#075E54] px-3 py-2 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[9px] font-bold text-white">H</div>
          <div><p className="text-white text-[10px] font-semibold">Hind University ✓</p><p className="text-white/60 text-[8px]">Business Account</p></div>
        </div>
        <div className="bg-[#E5DDD5] px-2 py-3 space-y-2">
          <div className="bg-white rounded-lg rounded-tl-none px-2.5 py-2 max-w-[90%] shadow-sm"><p className="text-[10px] text-gray-800">Enroll me for MBA Program!</p></div>
          <div className="bg-white rounded-lg rounded-tl-none px-2.5 py-2 max-w-[90%] shadow-sm">
            <p className="text-[10px] text-gray-800 mb-1.5">Hi Diksha 👋<br />Fill this form to proceed</p>
            <div className="bg-brand-600 rounded-md py-1 text-center text-[9px] font-bold text-white">Fill Details</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormsMockup() {
  return (
    <div className="relative flex items-center justify-center gap-3 py-6">
      <div className="w-44 rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white shrink-0">
        <div className="bg-[#075E54] px-3 py-2 flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[8px] font-bold text-white">E</div>
          <p className="text-white text-[10px] font-semibold">Ecoshop ✓</p>
        </div>
        <div className="px-3 py-3">
          <div className="flex items-center justify-between mb-2"><span className="text-[9px] font-bold text-gray-700">Join now</span><span className="text-gray-400 text-[10px]">✕</span></div>
          <p className="text-[9px] text-gray-600 mb-2 leading-snug">Which category are you interested in?</p>
          {["Mobile phones", "Televisions", "Cameras", "Accessories"].map((item, i) => (
            <div key={item} className="flex items-center gap-1.5 py-1 border-b border-gray-50 last:border-0">
              <div className={`w-3 h-3 rounded border flex items-center justify-center ${i === 0 || i === 2 ? "bg-brand-600 border-brand-600" : "border-gray-300"}`}>
                {(i === 0 || i === 2) && <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>}
              </div>
              <span className="text-[9px] text-gray-700">{item}</span>
            </div>
          ))}
          <div className="mt-3 bg-brand-600 rounded-lg py-1.5 text-center text-[9px] font-bold text-white">Confirm</div>
          <p className="text-[7px] text-gray-400 text-center mt-1">Managed by bigbrosai</p>
        </div>
      </div>
      <div className="w-44 rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white shrink-0 -ml-6 mt-8">
        <div className="bg-[#075E54] px-3 py-2 flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[8px] font-bold text-white">E</div>
          <p className="text-white text-[10px] font-semibold">Ecoshop ✓</p>
        </div>
        <div className="px-3 py-3">
          <div className="flex items-center justify-between mb-2"><span className="text-[9px] font-bold text-gray-700">Join now</span><span className="text-gray-400 text-[10px]">✕</span></div>
          <p className="text-[9px] text-gray-600 mb-3 leading-snug">Get early access to our Black Friday deals!</p>
          {["Name", "Email", "Phone"].map(f => (
            <div key={f} className="mb-2">
              <p className="text-[8px] text-gray-500 mb-0.5">{f}</p>
              <div className="border border-gray-200 rounded px-2 py-1 text-[9px] text-gray-400 bg-gray-50">{f === "Name" ? "Ayesha Patel" : f === "Email" ? "ayesha@mail.com" : "+91 98765..."}</div>
            </div>
          ))}
          <div className="mt-2 bg-brand-600 rounded-lg py-1.5 text-center text-[9px] font-bold text-white">Continue</div>
          <p className="text-[7px] text-gray-400 text-center mt-1">Managed by bigbrosai</p>
        </div>
      </div>
    </div>
  );
}

function PaymentsMockup() {
  return (
    <div className="relative flex items-center justify-center py-6">
      <div className="relative">
        <div className="w-56 h-56 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gray-300 mx-auto mb-2 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-gray-500"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" /></svg>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#25d366] flex items-center justify-center mx-auto">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
            </div>
          </div>
        </div>
        <div className="absolute -top-2 -right-4 w-44 bg-white rounded-xl rounded-bl-none shadow-lg border border-gray-100 px-3 py-2.5">
          <p className="text-[10px] text-gray-800 leading-snug mb-1">Sounds great 🤩 Let me create an order and you can pay here.</p>
          <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2 mt-1">
            <div className="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gray-500"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            </div>
            <div><p className="text-[9px] font-semibold text-gray-800">Rockway 450</p><p className="text-[8px] text-gray-500">Quantity 1</p></div>
          </div>
          <div className="flex justify-between items-center mt-2 pt-1.5 border-t border-gray-100">
            <span className="text-[9px] text-gray-500">Total</span><span className="text-[9px] font-bold text-gray-800">₹890.00</span>
          </div>
          <div className="text-right mt-1"><span className="text-[9px] text-brand-600 font-semibold">View Details</span></div>
        </div>
        <div className="absolute -bottom-4 -left-6 w-40 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2.5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center shrink-0"><span className="text-[8px]">H</span></div>
            <div><p className="text-[8px] font-semibold text-gray-800 leading-none">Headway Inc.</p><p className="text-[7px] text-gray-400">Rockway 450 · ₹890.00</p></div>
          </div>
          <p className="font-black text-xl text-gray-900 leading-none mb-1">₹890.00</p>
          <div className="flex items-center gap-1">
            <div className="w-3.5 h-3.5 rounded-full bg-brand-600 flex items-center justify-center"><svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg></div>
            <span className="text-[8px] text-brand-600 font-semibold">Sent to You · Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   ROW DATA
───────────────────────────────────────────────────────── */
const ROWS = [
  {
    id: "broadcast",
    eyebrow: "WhatsApp Broadcast",
    title: "Send campaigns to unlimited contacts — instantly",
    desc: "Create approved message templates and broadcast to your entire contact list in one click. Schedule ahead, segment by tags, and track every delivery and click in real time.",
    body: "Retarget users who clicked, opened, or ignored — all from the same dashboard. No per-message markup, no limits.",
    icon: Megaphone,
    href: "/features#whatsapp",
    visual: <BroadcastMockup />,
    flip: false,
    image: "./dashboard/ui_shadow_final.png"
  },
  {
    id: "chatbot",
    eyebrow: "AI Chatbot Builder",
    title: "Automate conversations with a no-code AI chatbot",
    desc: "Build intelligent WhatsApp chatbot flows with a drag-and-drop builder. Qualify leads, answer FAQs, share catalogs, and close sales — 24/7 without any human intervention.",
    body: "Connect to your CRM, trigger webhooks, and hand off to a live agent the moment a conversation needs a human touch.",
    icon: Bot,
    href: "/features#chatbot",
    visual: <ChatbotMockup />,
    flip: true,
  },
  {
    id: "ctwa",
    eyebrow: "Click-to-WhatsApp Ads",
    title: "Run AI powered Ads that Click to WhatsApp",
    desc: "Run Ads on Facebook & Instagram that land directly on WhatsApp. 5X your lead generation and 2-3X conversions instantly.",
    body: "Get quality leads with AI & Conversions API, smartly segregate your leads and build Chatbot Flows to automate everything.",
    icon: MousePointerClick,
    href: "/features#whatsapp",
    visual: <CTWAMockup />,
    flip: false,
    image: "./dashboard/meta_ads.png"
  },
  {
    id: "forms",
    eyebrow: "WhatsApp Forms",
    title: "Build WhatsApp Forms",
    desc: "Capture leads & collect useful information directly in WhatsApp Chats with WhatsApp Forms.",
    body: "From feedback to gathering user insights, collect it all on WhatsApp — no external links, no drop-offs.",
    icon: FileText,
    href: "/features#chatbot",
    visual: <FormsMockup />,
    flip: true,
  },
  {
    id: "payments",
    eyebrow: "WhatsApp Payments",
    title: "Collect Payments on WhatsApp",
    desc: "Collect Payments now on WhatsApp seamlessly with WhatsApp Pay and other modes of payment (Razorpay, Payu etc) and grow your revenue.",
    body: "",
    icon: CreditCard,
    href: "/features#whatsapp",
    visual: <PaymentsMockup />,
    flip: false,
  },
];

/* ─────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────── */
export function UseCasesSection() {
  return (
    <section className="bg-white">
      {/* Header */}
      <div className="py-16 px-6 text-center border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-[2.6rem] text-gray-900 tracking-tight leading-[1.1] mb-3">
            Everything your business needs on WhatsApp
          </h2>
          <p className="text-slate-500 text-base">
            From broadcasts to payments — bigbrosai ships new WhatsApp features at blazing fast speed ⚡
          </p>
        </div>
      </div>

      {/* Alternating rows */}
      {ROWS.map(({ id, eyebrow, title, desc, body, icon: Icon, href, visual, flip, image }) => (
        <div key={id} className="border-b border-gray-100 last:border-0">
          <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={flip ? "lg:order-2" : ""}>
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-700 mb-3 flex items-center gap-1.5">
                <Icon size={13} />{eyebrow}
              </p>
              <h3 className="font-display font-black text-2xl md:text-[1.75rem] text-gray-900 tracking-tight leading-[1.15] mb-4">
                {title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-3">{desc}</p>
              {body && <p className="text-slate-500 text-sm leading-relaxed mb-6">{body}</p>}
              <Link
                href={href}
                className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Explore <ArrowRight size={15} />
              </Link>
            </div>
            <div className={`${flip ? "lg:order-1" : ""} flex justify-center`}>
              {image ? <img src={image} alt="image" /> : visual}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
