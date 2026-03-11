"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ChevronDown, ArrowRight,
  MessageSquare, Mail, Smartphone, Camera, Gem,
  Bot, BarChart2, Users, Zap, Shield, LayoutGrid,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const PRODUCT = [
  { label: "WhatsApp Marketing", desc: "Broadcast, automate & engage", href: "/features#whatsapp", Icon: MessageSquare, color: "#15803d" },
  { label: "AI Chatbot Builder", desc: "No-code conversation flows", href: "/features#chatbot", Icon: Bot, color: "#7c3aed" },
  { label: "Multi-Agent Inbox", desc: "Your whole team on one number", href: "/features#inbox", Icon: Users, color: "#d97706" },
  { label: "Campaign Analytics", desc: "Real-time delivery & click tracking", href: "/features#analytics", Icon: BarChart2, color: "#0369a1" },
  { label: "Automation Flows", desc: "Trigger-based message journeys", href: "/features#automation", Icon: Zap, color: "#dc2626" },
  { label: "Official API", desc: "Meta-approved + Green Tick", href: "/features#api", Icon: Shield, color: "#0891b2" },
];

const CHANNELS = [
  { label: "WhatsApp", desc: "Official Business API — LIVE", href: "/channels#whatsapp", Icon: MessageSquare, live: true },
  { label: "Email", desc: "Transactional & marketing — Soon", href: "/channels#email", Icon: Mail, live: false },
  { label: "SMS", desc: "Global SMS delivery — Soon", href: "/channels#sms", Icon: Smartphone, live: false },
  { label: "RCS", desc: "Rich Android messaging — Soon", href: "/channels#rcs", Icon: Gem, live: false },
  { label: "Instagram", desc: "DM automation — Soon", href: "/channels#instagram", Icon: Camera, live: false },
];

function DropMenu({ items, cols = 2 }: { items: typeof PRODUCT; cols?: 1 | 2 }) {
  return (
    <div className={cn(
      "absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 z-50",
      cols === 2 ? "w-[440px] grid grid-cols-2 gap-1" : "w-56 flex flex-col gap-1"
    )}>
      {items.map((item) => (
        <Link key={item.label} href={item.href}
          className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
            style={{ background: ("color" in item ? item.color : "#15803d") + "15", color: ("color" in item ? item.color : "#15803d") }}>
            <item.Icon size={16} />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold text-gray-900 group-hover:text-brand-700 transition-colors leading-tight">
              {item.label}
              {"live" in item && !item.live && (
                <span className="ml-1.5 text-[9px] font-bold bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full align-middle">SOON</span>
              )}
            </div>
            <div className="text-xs text-slate-500 mt-0.5 leading-tight">{item.desc}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function NavDrop({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(v => !v)}
        className={cn("flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
          open ? "bg-brand-50 text-brand-700" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        )}>
        {label}
        <ChevronDown size={14} className={cn("transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && children}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200" : "bg-white border-b border-gray-100"
      )}>
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image src="/logo.png" alt="bigbrosai" width={140} height={36} className="h-10 w-auto" priority />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5 flex-1">
            <NavDrop label="Product">
              <DropMenu items={PRODUCT} cols={2} />
            </NavDrop>
            <NavDrop label="Channels">
              <DropMenu items={CHANNELS as unknown as typeof PRODUCT} cols={1} />
            </NavDrop>
            {[
              { label: "Pricing", href: "/pricing" },
              { label: "About", href: "/about" },
              { label: "Docs", href: "/docs" },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <Button
              onClick={() => window.open("https://staging-dashboard.bigbrosai.com/signin", "_blank")}
              variant="ghost"
              size="sm"
            >
              Log in
            </Button>

            <Button
              onClick={() => window.open("https://staging-dashboard.bigbrosai.com/signup", "_blank")}
              variant="primary"
              size="sm"
            >
              Start Free <ArrowRight size={14} />
            </Button>
          </div>

          {/* Mobile */}
          <button className="md:hidden ml-auto p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobile(v => !v)}>
            {mobile ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {mobile && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
            {[
              { label: "Features", href: "/features" },
              { label: "Channels", href: "/channels" },
              { label: "Pricing", href: "/pricing" },
              { label: "About", href: "/about" },
              { label: "Docs", href: "/docs" },
            ].map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMobile(false)}
                className="px-3 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                {l.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2">
              <Button variant="secondary" fullWidth>Log in</Button>
              <Button variant="primary" fullWidth>Start for Free</Button>
            </div>
          </div>
        )}
      </header>
      <div className="h-16" />
    </>
  );
}
