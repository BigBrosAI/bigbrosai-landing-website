"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft, ChevronRight,
  Smile, Paperclip, Camera, Send,
  Copy, ExternalLink, PhoneCall, MessageCircle,
  FileText, MapPin, Play,
  ShoppingCart, Star, Gift, Calendar, Truck, CreditCard,
  MoreVertical,
} from "lucide-react";

type ButtonType = "QUICK_REPLY" | "URL" | "PHONE_NUMBER" | "COPY_CODE";
interface TemplateButton { type: ButtonType; text: string; }
interface MsgTemplate {
  label: string;
  tag: string;
  headerType?: "none" | "text" | "image" | "video" | "document" | "location";
  headerText?: string;
  body: string;
  footer?: string;
  buttons?: TemplateButton[];
}

const EmojiIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#8696A0" strokeWidth="2" />
    <circle cx="8" cy="10" r="1.5" fill="#8696A0" />
    <circle cx="16" cy="10" r="1.5" fill="#8696A0" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#8696A0" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AttachIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" stroke="#8696A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CameraIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" stroke="#8696A0" strokeWidth="2" />
    <circle cx="12" cy="13" r="4" stroke="#8696A0" strokeWidth="2" />
  </svg>
);

const TEMPLATES: MsgTemplate[] = [
  {
    label: "Order Confirmation",
    tag: "E-commerce",
    headerType: "image",
    body: "Hi Rahul 👋\n\nYour order *#ORD-8821* has been confirmed and is being processed.\n\nEstimated delivery: *2-3 business days*.",
    footer: "bogbrosai.com",
    buttons: [
      { type: "URL", text: "Track Order" },
      { type: "QUICK_REPLY", text: "Get Support" },
    ],
  },
  {
    label: "OTP Verification",
    tag: "Authentication",
    headerType: "none",
    body: "*482917* is your verification code for BigBrosAI.\n\nThis code expires in *10 minutes*. Do not share it with anyone.",
    footer: "bogbrosai.com",
    buttons: [{ type: "COPY_CODE", text: "Copy Code" }],
  },
  {
    label: "Flash Sale Alert",
    tag: "Marketing",
    headerType: "image",
    body: "🎉 *Exclusive Flash Sale — 40% OFF!*\n\nHurry Priya, this offer expires in *2 hours*.\n\nUse code: *FLASH40* at checkout.",
    footer: "Valid today only · T&Cs apply",
    buttons: [
      { type: "URL", text: "Shop Now" },
      { type: "QUICK_REPLY", text: "Remind Later" },
    ],
  },
  {
    label: "Appointment Reminder",
    tag: "Healthcare",
    headerType: "text",
    headerText: "📅 Appointment Reminder",
    body: "Hello *Amit*,\n\nThis is a reminder for your appointment on *Mon, 15 Jan* at *10:30 AM*.\n\nPlease arrive 10 minutes early.",
    footer: "bogbrosai.com",
    buttons: [
      { type: "QUICK_REPLY", text: "Confirm" },
      { type: "QUICK_REPLY", text: "Reschedule" },
      { type: "PHONE_NUMBER", text: "Call Us" },
    ],
  },
  {
    label: "Shipping Update",
    tag: "Logistics",
    headerType: "document",
    body: "📦 Your package is *out for delivery!*\n\nHi Sneha, your order *#SHP-4490* will arrive today between *2 PM – 6 PM*.",
    footer: "bogbrosai.com",
    buttons: [
      { type: "URL", text: "Live Tracking" },
      { type: "QUICK_REPLY", text: "Not Home?" },
    ],
  },
  {
    label: "Abandoned Cart",
    tag: "Recovery",
    headerType: "image",
    body: "Hey Arjun 👀\n\nYou left something behind!\n\nYour cart has *3 items* worth *₹1,499* waiting for you.",
    footer: "Free delivery on orders above ₹499",
    buttons: [
      { type: "URL", text: "Complete Purchase" },
      { type: "QUICK_REPLY", text: "View Cart" },
    ],
  },
];

const BRAND = "#15803d";

const TAG_ICONS: Record<string, React.ReactNode> = {
  "E-commerce": <ShoppingCart size={11} />,
  "Authentication": <Star size={11} />,
  "Marketing": <Gift size={11} />,
  "Healthcare": <Calendar size={11} />,
  "Logistics": <Truck size={11} />,
  "Recovery": <CreditCard size={11} />,
};

function BtnIcon({ type }: { type: ButtonType }) {
  if (type === "URL") return <ExternalLink size={13} className="shrink-0" />;
  if (type === "PHONE_NUMBER") return <PhoneCall size={13} className="shrink-0" />;
  if (type === "COPY_CODE") return <Copy size={13} className="shrink-0" />;
  return <MessageCircle size={13} className="shrink-0" />;
}

function MediaSlot({ type }: { type?: string }) {
  const Icon = type === "video" ? Play : type === "location" ? MapPin : Camera;
  return (
    <div
      className="w-full aspect-video rounded-lg overflow-hidden flex flex-col items-center justify-center gap-2"
      style={{ background: BRAND + "12" }}
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: BRAND + "25" }}>
        <Icon size={20} style={{ color: BRAND }} />
      </div>
      <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: BRAND }}>
        {type === "video" ? "Video" : type === "location" ? "Location" : "Image"}
      </span>
    </div>
  );
}

function BodyText({ text }: { text: string }) {
  const html = text.replace(/\*([^*]+)\*/g, "<strong>$1</strong>");
  return (
    <p
      className="text-[12px] text-gray-800 leading-relaxed whitespace-pre-wrap break-words"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function DblCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
      <path d="M2 9L5.5 12.5L10 8" stroke={BRAND} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 9L10.5 12.5L16 7" stroke={BRAND} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneMockup({ businessName = "bigbrosai" }: { businessName?: string }) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const template = TEMPLATES[current];

  useEffect(() => {
    const iv = setInterval(() => advance(1), 3500);
    return () => clearInterval(iv);
  }, [current]);

  function advance(dir: 1 | -1) {
    setVisible(false);
    setTimeout(() => {
      setCurrent((c) => (c + dir + TEMPLATES.length) % TEMPLATES.length);
      setVisible(true);
    }, 260);
  }

  function jumpTo(i: number) {
    if (i === current) return;
    setVisible(false);
    setTimeout(() => { setCurrent(i); setVisible(true); }, 260);
  }

  const hasMedia = ["image", "video", "location"].includes(template.headerType ?? "");

  return (
    <div className="flex flex-col items-center gap-5 select-none">

      <div className="relative w-[288px]">
        {/* Ambient glow */}
        <div
          className="absolute -inset-6 rounded-[60px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${BRAND}20 0%, transparent 70%)`,
            filter: "blur(20px)",
          }}
        />

        {/* Phone outer shell */}
        <div
          className="relative w-[288px] h-[610px] border-[8px] border-gray-900 rounded-[3rem] bg-black overflow-hidden"
          style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px #2a2a2a inset" }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-28 bg-black rounded-b-2xl z-30" />

          {/* Screen */}
          <div
            className="absolute inset-0 flex flex-col"
            style={{ borderRadius: "calc(3rem - 8px)", overflow: "hidden" }}
          >
            {/* Status bar */}
            <div className="bg-[#075E54] h-7 flex items-center justify-between px-5 pt-4 shrink-0">
              <span className="text-white text-[9px] font-semibold">9:41</span>
              <span className="text-white/70 text-[8px] tracking-wide">●●● WiFi</span>
            </div>

            {/* WA header */}
            <div className="bg-[#075E54] px-3 pb-3 pt-1 flex items-center gap-2 text-white shrink-0">
              <ChevronLeft size={22} className="text-white shrink-0" />
              <div className="w-9 h-9 rounded-full border border-white/20 overflow-hidden shrink-0 bg-white/10">
                <Image
                  src="/social-profile-logo.png"
                  alt={businessName}
                  width={36}
                  height={36}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 leading-tight">
                  <span className="text-[13px] font-semibold truncate">{businessName}</span>
                  <Image
                    src="/whatspp-verification-badge.svg"
                    alt="verified"
                    width={14}
                    height={14}
                    className="shrink-0"
                  />
                </div>
                <p className="text-[9.5px] text-white/70">WhatsApp Business Account</p>
              </div>
              <MoreVertical size={18} className="text-white/80 shrink-0" />
            </div>

            {/* Chat area */}
            <div
              className="flex-1 px-3 py-3 flex flex-col gap-2.5 overflow-hidden"
              style={{
                backgroundImage: `url("/whatsapp-background.jpg")`,
                backgroundSize: "300px",
                backgroundColor: "#E5DDD5",
              }}
            >
              <div className="flex justify-center">
                <span className="bg-white/90 text-[9px] font-semibold text-[#667781] px-3 py-0.5 rounded-md uppercase tracking-wide shadow-sm">
                  Today
                </span>
              </div>

              {/* Animated bubble */}
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0) scale(1)" : "translateY(10px) scale(0.97)",
                  transition: "opacity 0.26s ease, transform 0.26s cubic-bezier(0.34,1.56,0.64,1)",
                }}
              >
                <div className="bg-white rounded-xl rounded-tl-none shadow-sm max-w-[91%] overflow-hidden">

                  {hasMedia && (
                    <div className="px-1 pt-1">
                      <MediaSlot type={template.headerType} />
                    </div>
                  )}

                  {template.headerType === "text" && template.headerText && (
                    <div className="px-3 pt-3 pb-1">
                      <p className="text-[12.5px] font-black text-gray-900">{template.headerText}</p>
                    </div>
                  )}

                  {template.headerType === "document" && (
                    <div
                      className="mx-3 mt-3 mb-2 flex items-center gap-2.5 p-2.5 rounded-lg border border-gray-100"
                      style={{ background: BRAND + "08" }}
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: BRAND + "20" }}>
                        <FileText size={15} style={{ color: BRAND }} />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-gray-800 leading-tight">Shipping_Label.pdf</p>
                        <p className="text-[9px] text-gray-400">PDF · 1 page</p>
                      </div>
                    </div>
                  )}

                  <div className={hasMedia || template.headerType === "text" || template.headerType === "document" ? "px-3 pt-1.5" : "px-3 pt-3"}>
                    <BodyText text={template.body} />
                  </div>

                  {template.footer && (
                    <p className="px-3 text-[10px] text-gray-400 italic mt-1 border-t border-gray-50 pt-1 pb-0.5">
                      {template.footer}
                    </p>
                  )}

                  <div className="px-3 pb-2 pt-1 flex justify-end items-center gap-1">
                    <span className="text-[9px] text-gray-400">10:24 AM</span>
                    <DblCheck />
                  </div>

                  {template.buttons && template.buttons.length > 0 && (
                    <div className="border-t border-gray-100">
                      {template.buttons.map((btn, i) => (
                        <button
                          key={i}
                          className={`w-full py-2.5 flex items-center justify-center gap-1.5 text-[11.5px] font-semibold hover:bg-gray-50 transition-colors ${i > 0 ? "border-t border-gray-100" : ""}`}
                          style={{ color: BRAND }}
                        >
                          <BtnIcon type={btn.type} />
                          {btn.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="bg-white px-3 py-3 border-t border-gray-100 flex items-center gap-3">
              <div className="flex-1 bg-[#F0F2F5] rounded-full px-4 py-2 flex items-center gap-2">
                <EmojiIcon />
                <span className="text-gray-400 text-sm">Message</span>
                <div className="ml-auto flex items-center gap-2">
                  <AttachIcon />
                  <CameraIcon />
                </div>
              </div>
              <div className="p-2 rounded-full bg-[#128C7E] text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => advance(-1)}
          className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-all"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-1.5 items-center">
          {TEMPLATES.map((_, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: current === i ? 20 : 7,
                height: 7,
                background: current === i ? BRAND : "#d1d5db",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => advance(1)}
          className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-all"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Label pill */}
      <div
        className="flex items-center gap-2 px-4 py-2 rounded-full border text-[11px] font-semibold"
        style={{ background: BRAND + "10", borderColor: BRAND + "35", color: BRAND }}
      >
        {TAG_ICONS[template.tag]}
        {template.label}
        <span className="opacity-40 text-[10px]">· {current + 1}/{TEMPLATES.length}</span>
      </div>

    </div>
  );
}