import Link from "next/link";
import { ArrowRight, LayoutTemplate, Workflow, Users, Send, BarChart2, ShieldCheck } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   VISUAL MOCKUPS
───────────────────────────────────────────────────────── */

function DragDropMockup() {
  const blocks = [
    { label: "Header Image", color: "#e0f2fe", border: "#7dd3fc", icon: "🖼️" },
    { label: "Heading Text", color: "#f0fdf4", border: "#86efac", icon: "T" },
    { label: "Body Copy", color: "#fafafa", border: "#e5e7eb", icon: "¶" },
    { label: "CTA Button", color: "#eff6ff", border: "#93c5fd", icon: "→" },
    { label: "Footer", color: "#fafafa", border: "#e5e7eb", icon: "—" },
  ];
  return (
    <div className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#f1f3f4] border-b border-gray-200">
        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"/><div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"/><div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"/></div>
        <div className="flex-1 bg-white border border-gray-200 rounded px-2 py-0.5 text-[10px] text-gray-400">app.bigbrosai.com/email/builder</div>
      </div>
      {/* Editor chrome */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 bg-gray-50">
        <div className="flex gap-2">
          {["Design","Code","Preview"].map((t,i)=>(
            <span key={t} className={`text-[10px] font-semibold px-2.5 py-1 rounded-md ${i===0?"bg-blue-600 text-white":"text-gray-500"}`}>{t}</span>
          ))}
        </div>
        <div className="flex gap-2">
          <div className="text-[10px] text-gray-400 border border-gray-200 rounded px-2 py-1">Undo</div>
          <div className="text-[10px] bg-blue-600 text-white rounded px-2 py-1 font-semibold">Send Test</div>
        </div>
      </div>
      {/* Two-panel editor */}
      <div className="flex h-52">
        {/* Left: blocks panel */}
        <div className="w-28 border-r border-gray-100 p-2 bg-gray-50 shrink-0">
          <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-1">Blocks</p>
          {["Image","Text","Button","Divider","Social"].map(b=>(
            <div key={b} className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-white cursor-grab mb-0.5">
              <div className="w-4 h-4 rounded bg-blue-100 flex items-center justify-center text-[8px] text-blue-600 font-bold shrink-0">+</div>
              <span className="text-[9px] text-gray-600">{b}</span>
            </div>
          ))}
        </div>
        {/* Right: canvas */}
        <div className="flex-1 p-3 overflow-hidden bg-white">
          <div className="border-2 border-dashed border-blue-200 rounded-xl p-2 space-y-1.5">
            {blocks.map(b=>(
              <div key={b.label} className="flex items-center gap-2 px-2 py-1.5 rounded-lg border cursor-pointer transition-shadow" style={{background:b.color,borderColor:b.border}}>
                <span className="text-[10px] w-4 text-center shrink-0">{b.icon}</span>
                <span className="text-[9px] text-gray-700 font-medium">{b.label}</span>
                <div className="ml-auto flex gap-1">
                  <div className="w-3 h-3 rounded bg-white/60 border border-gray-200"/>
                  <div className="w-3 h-3 rounded bg-white/60 border border-gray-200"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationMockup() {
  const steps = [
    { label: "Contact joins list", icon: "👤", color: "#dbeafe", border: "#93c5fd", line: true },
    { label: "Wait 1 day", icon: "⏱", color: "#fef9c3", border: "#fde047", line: true },
    { label: "Send Welcome Email", icon: "✉️", color: "#dcfce7", border: "#86efac", line: true },
    { label: "Opened email?", icon: "?", color: "#f3e8ff", border: "#c084fc", line: true },
    { label: "Send Offer Email", icon: "🎁", color: "#dcfce7", border: "#86efac", line: false },
  ];
  return (
    <div className="w-full max-w-[420px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#f1f3f4] border-b border-gray-200">
        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"/><div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"/><div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"/></div>
        <div className="flex-1 bg-white border border-gray-200 rounded px-2 py-0.5 text-[10px] text-gray-400">app.bigbrosai.com/email/automation</div>
      </div>
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
        <p className="text-xs font-bold text-gray-800">Welcome Series Flow</p>
        <span className="text-[9px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">● Active</span>
      </div>
      <div className="px-6 py-4 flex flex-col items-center gap-0">
        {steps.map((s, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            <div className="flex items-center gap-3 w-full max-w-[260px] px-3 py-2 rounded-xl border" style={{background:s.color,borderColor:s.border}}>
              <span className="text-sm shrink-0">{s.icon}</span>
              <span className="text-[10px] font-semibold text-gray-800">{s.label}</span>
            </div>
            {s.line && <div className="w-0.5 h-3 bg-gray-200"/>}
          </div>
        ))}
      </div>
    </div>
  );
}

function SegmentationMockup() {
  const segments = [
    { name: "High Value Customers", count: "4,821", color: "#3b82f6", pct: 24 },
    { name: "Engaged — Last 30 days", count: "12,340", color: "#10b981", pct: 62 },
    { name: "At Risk of Churning", count: "2,105", color: "#f59e0b", pct: 11 },
    { name: "New Subscribers", count: "680", color: "#8b5cf6", pct: 3 },
  ];
  return (
    <div className="w-full max-w-[460px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#f1f3f4] border-b border-gray-200">
        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"/><div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"/><div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"/></div>
        <div className="flex-1 bg-white border border-gray-200 rounded px-2 py-0.5 text-[10px] text-gray-400">app.bigbrosai.com/email/segments</div>
      </div>
      <div className="px-5 py-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-bold text-gray-800">Contact Segments</p>
          <div className="text-[9px] bg-blue-600 text-white font-bold px-2.5 py-1 rounded-lg">+ New Segment</div>
        </div>
        <div className="space-y-2.5">
          {segments.map(s=>(
            <div key={s.name} className="flex items-center gap-3">
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-[10px] font-medium text-gray-700">{s.name}</span>
                  <span className="text-[10px] font-bold text-gray-900">{s.count}</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{width:`${s.pct}%`,background:s.color}}/>
                </div>
              </div>
              <span className="text-[9px] text-gray-400 w-6 text-right">{s.pct}%</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[10px] text-gray-500">Total contacts: <strong className="text-gray-800">19,946</strong></span>
          <span className="text-[10px] text-blue-600 font-semibold cursor-pointer">Export CSV →</span>
        </div>
      </div>
    </div>
  );
}

function TransactionalMockup() {
  return (
    <div className="w-full max-w-[460px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#f1f3f4] border-b border-gray-200">
        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"/><div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"/><div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"/></div>
        <div className="flex-1 bg-white border border-gray-200 rounded px-2 py-0.5 text-[10px] text-gray-400">app.bigbrosai.com/email/logs</div>
      </div>
      {/* Code snippet */}
      <div className="bg-gray-900 px-4 py-3">
        <p className="text-[9px] text-gray-500 font-mono mb-1">// Send transactional email via API</p>
        <p className="text-green-400 font-mono text-[9px] leading-relaxed">
          POST /v1/emails<br/>
          <span className="text-blue-300">Authorization:</span> Bearer <span className="text-yellow-300">YOUR_API_KEY</span><br/>
          <span className="text-gray-300">&#123;</span><br/>
          &nbsp;&nbsp;<span className="text-blue-300">"to"</span>: <span className="text-yellow-300">"user@example.com"</span>,<br/>
          &nbsp;&nbsp;<span className="text-blue-300">"template_id"</span>: <span className="text-yellow-300">"otp_verify"</span>,<br/>
          &nbsp;&nbsp;<span className="text-blue-300">"params"</span>: &#123; <span className="text-blue-300">"code"</span>: <span className="text-yellow-300">"482917"</span> &#125;<br/>
          <span className="text-gray-300">&#125;</span>
        </p>
      </div>
      {/* Log entries */}
      <div className="divide-y divide-gray-50">
        <div className="grid grid-cols-4 px-4 py-2 text-[8px] font-bold text-gray-400 uppercase tracking-wider">
          <span>Recipient</span><span>Template</span><span>Status</span><span>Latency</span>
        </div>
        {[
          { to: "rahul@...", tpl: "otp_verify", status: "Delivered", ms: "312ms", ok: true },
          { to: "priya@...", tpl: "order_conf", status: "Delivered", ms: "289ms", ok: true },
          { to: "amit@...",  tpl: "password_r", status: "Delivered", ms: "401ms", ok: true },
          { to: "sneha@...", tpl: "invoice",    status: "Delivered", ms: "356ms", ok: true },
        ].map((r,i)=>(
          <div key={i} className="grid grid-cols-4 px-4 py-2 items-center hover:bg-gray-50">
            <span className="text-[10px] text-gray-700 font-medium">{r.to}</span>
            <span className="text-[9px] text-gray-500">{r.tpl}</span>
            <span className="flex items-center gap-1 text-[9px] text-green-600 font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-green-500"/>{r.status}</span>
            <span className="text-[9px] text-gray-400">{r.ms}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  const campaigns = [
    { name: "Black Friday Sale", sent: "24,500", open: "68%", click: "22%", conv: "8.4%" },
    { name: "Welcome Series",    sent: "8,120",  open: "74%", click: "31%", conv: "12.1%" },
    { name: "Cart Recovery",     sent: "3,840",  open: "61%", click: "18%", conv: "6.2%" },
  ];
  return (
    <div className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#f1f3f4] border-b border-gray-200">
        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"/><div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"/><div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"/></div>
        <div className="flex-1 bg-white border border-gray-200 rounded px-2 py-0.5 text-[10px] text-gray-400">app.bigbrosai.com/email/analytics</div>
      </div>
      {/* Stats row */}
      <div className="grid grid-cols-4 divide-x divide-gray-100 border-b border-gray-100">
        {[{v:"68%",l:"Avg Open"},{v:"24%",l:"Avg Click"},{v:"99%",l:"Deliverability"},{v:"0.01%",l:"Spam Rate"}].map(s=>(
          <div key={s.l} className="px-3 py-3 text-center">
            <p className="font-black text-base text-blue-600">{s.v}</p>
            <p className="text-[9px] text-gray-400 mt-0.5">{s.l}</p>
          </div>
        ))}
      </div>
      {/* Campaign table */}
      <div className="divide-y divide-gray-50">
        <div className="grid grid-cols-5 px-4 py-2 text-[8px] font-bold text-gray-400 uppercase tracking-wider">
          <span className="col-span-2">Campaign</span><span>Open</span><span>Click</span><span>Conv.</span>
        </div>
        {campaigns.map(c=>(
          <div key={c.name} className="grid grid-cols-5 px-4 py-2.5 items-center hover:bg-gray-50">
            <div className="col-span-2">
              <p className="text-[10px] font-medium text-gray-800">{c.name}</p>
              <p className="text-[9px] text-gray-400">{c.sent} sent</p>
            </div>
            <span className="text-[10px] font-bold text-green-600">{c.open}</span>
            <span className="text-[10px] font-bold text-blue-600">{c.click}</span>
            <span className="text-[10px] font-bold text-purple-600">{c.conv}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeliverabilityMockup() {
  return (
    <div className="w-full max-w-[440px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#f1f3f4] border-b border-gray-200">
        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"/><div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"/><div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"/></div>
        <div className="flex-1 bg-white border border-gray-200 rounded px-2 py-0.5 text-[10px] text-gray-400">app.bigbrosai.com/email/deliverability</div>
      </div>
      <div className="px-5 py-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-bold text-gray-800">Sender Reputation</p>
          <span className="text-[9px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">Excellent</span>
        </div>
        {/* Score ring */}
        <div className="flex items-center gap-5 mb-4">
          <div className="relative w-20 h-20 shrink-0">
            <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e5e7eb" strokeWidth="3"/>
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="95 5" strokeLinecap="round"/>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-black text-lg text-gray-900 leading-none">95</span>
              <span className="text-[8px] text-gray-400">/100</span>
            </div>
          </div>
          <div className="space-y-2 flex-1">
            {[
              { label: "SPF", status: "Pass", ok: true },
              { label: "DKIM", status: "Pass", ok: true },
              { label: "DMARC", status: "Pass", ok: true },
              { label: "Blacklist", status: "Clean", ok: true },
            ].map(r=>(
              <div key={r.label} className="flex items-center justify-between">
                <span className="text-[10px] text-gray-600">{r.label}</span>
                <span className={`text-[9px] font-bold flex items-center gap-1 ${r.ok?"text-green-600":"text-red-500"}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${r.ok?"bg-green-500":"bg-red-500"}`}/>
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-xl px-3 py-2.5">
          <p className="text-[10px] text-green-700 font-semibold">✓ Dedicated IP warming complete — you're in the primary inbox.</p>
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
    id: "builder",
    eyebrow: "Drag-and-Drop Builder",
    title: "Design beautiful emails without writing a line of code",
    desc: "Build stunning email campaigns with our intuitive drag-and-drop editor. Choose from 40+ pre-built blocks — images, buttons, columns, social links — and assemble pixel-perfect emails in minutes.",
    body: "Import your own HTML or start from 150+ professionally designed templates. Every email is automatically mobile-responsive.",
    icon: LayoutTemplate,
    href: "https://dashboard.bigbrosai.com/signup",
    visual: <DragDropMockup />,
    flip: false,
    color: "#0284c7",
  },
  {
    id: "automation",
    eyebrow: "Marketing Automation",
    title: "Send the right email at exactly the right moment",
    desc: "Build multi-step automation workflows triggered by user behavior — sign-ups, purchases, page visits, or custom events. Set it once and let it run forever.",
    body: "Welcome series, cart recovery, re-engagement flows, post-purchase sequences — automate your entire customer lifecycle.",
    icon: Workflow,
    href: "https://dashboard.bigbrosai.com/signup",
    visual: <AutomationMockup />,
    flip: true,
    color: "#7c3aed",
  },
  {
    id: "segmentation",
    eyebrow: "Smart Segmentation",
    title: "Target the right audience with precision",
    desc: "Segment your contacts by behavior, demographics, purchase history, engagement level, or any custom attribute. Send hyper-personalized campaigns that actually convert.",
    body: "Dynamic segments update automatically as contacts meet or leave criteria — no manual list management ever again.",
    icon: Users,
    href: "https://dashboard.bigbrosai.com/signup",
    visual: <SegmentationMockup />,
    flip: false,
    color: "#0369a1",
  },
  {
    id: "transactional",
    eyebrow: "Transactional Email API",
    title: "Deliver OTPs, receipts & alerts in under 1 second",
    desc: "Integrate our REST API or SMTP relay in minutes. Send password resets, order confirmations, invoices, and critical alerts with guaranteed sub-second delivery.",
    body: "Official SDKs for Node.js, Python, PHP, Ruby and more. Real-time webhooks for every delivery event.",
    icon: Send,
    href: "https://dashboard.bigbrosai.com/signup",
    visual: <TransactionalMockup />,
    flip: true,
    color: "#0891b2",
  },
  {
    id: "analytics",
    eyebrow: "Campaign Analytics",
    title: "Know exactly what's working — and what's not",
    desc: "Track open rates, click-through rates, conversions, and revenue per campaign in real time. A/B test subject lines, content, and send times to continuously improve performance.",
    body: "Heatmaps show exactly where subscribers click. Export full reports to CSV or connect to your BI tool via API.",
    icon: BarChart2,
    href: "https://dashboard.bigbrosai.com/signup",
    visual: <AnalyticsMockup />,
    flip: false,
    color: "#2563eb",
  },
  {
    id: "deliverability",
    eyebrow: "Deliverability & Reputation",
    title: "Land in the primary inbox — every single time",
    desc: "Dedicated IPs, automated warmup, SPF/DKIM/DMARC authentication, and real-time blacklist monitoring ensure your emails always reach the inbox, never the spam folder.",
    body: "Our deliverability experts proactively monitor your sender reputation and alert you before issues impact your campaigns.",
    icon: ShieldCheck,
    href: "https://dashboard.bigbrosai.com/signup",
    visual: <DeliverabilityMockup />,
    flip: true,
    color: "#059669",
  },
];

/* ─────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────── */
export function EmailUseCasesSection() {
  return (
    <section className="bg-white">
      {/* Header */}
      <div className="py-16 px-6 text-center border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-[2.6rem] text-gray-900 tracking-tight leading-[1.1] mb-3">
            Everything you need for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
              email marketing
            </span>
          </h2>
          <p className="text-slate-500 text-base">
            From drag-and-drop campaigns to transactional APIs — bigbrosai gives you the full email stack in one platform.
          </p>
        </div>
      </div>

      {/* Alternating rows */}
      {ROWS.map(({ id, eyebrow, title, desc, body, icon: Icon, href, visual, flip, color }) => (
        <div key={id} className="border-b border-gray-100 last:border-0">
          <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={flip ? "lg:order-2" : ""}>
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3 flex items-center gap-1.5" style={{ color }}>
                <Icon size={13} />{eyebrow}
              </p>
              <h3 className="font-display font-black text-2xl md:text-[1.75rem] text-gray-900 tracking-tight leading-[1.15] mb-4">
                {title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-3">{desc}</p>
              {body && <p className="text-slate-500 text-sm leading-relaxed mb-6">{body}</p>}
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors hover:opacity-90"
                style={{ background: color }}
              >
                Get Started <ArrowRight size={15} />
              </Link>
            </div>
            <div className={`${flip ? "lg:order-1" : ""} flex justify-center`}>
              {visual}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
