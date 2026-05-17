"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowDown, Sparkles, X, RefreshCw, Phone, Mail as MailIc,
  MessageSquare, Mail, Smartphone, LayoutDashboard, CheckCircle2,
} from "lucide-react";
import { PhoneMockup, type MsgTemplate } from "@/components/ui/PhoneMockup";
import { EmailMockup, type TemplateItem } from "@/components/ui/EmailMockup";
import { MigrationSection } from "@/components/sections/brochure/BrochureSections";
import { CTASection } from "@/components/sections/CTASection";

const G1 = "#01AC4C";
const G2 = "#0EA5E9";
const GRAD = `linear-gradient(135deg, ${G1} 0%, ${G2} 100%)`;
const PRICING_URL = "https://www.bigbrosai.com/pricing";

/* email body helper (matches EmailMockup styling) */
function mailBody(accent: string, heading: string, lines: string[], cta: string) {
  return (
    <div className="font-sans text-sm text-slate-700">
      <div className="max-w-md mx-auto bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="h-2" style={{ background: accent }} />
        <div className="p-6 sm:p-7">
          <h1 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">{heading}</h1>
          {lines.map((l, i) => (
            <p key={i} className="mb-3 leading-relaxed text-slate-600">{l}</p>
          ))}
          <button className="mt-2 text-white font-semibold py-2.5 px-5 rounded-lg text-sm" style={{ background: accent }}>
            {cta}
          </button>
          <p className="text-[11px] text-slate-400 mt-6">You're receiving this as a valued customer · Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  );
}
function otpBody(accent: string, brand: string) {
  return (
    <div className="font-sans text-sm text-slate-700">
      <div className="max-w-md mx-auto bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden text-center">
        <div className="h-2" style={{ background: accent }} />
        <div className="p-7">
          <h1 className="text-lg font-bold text-slate-900 mb-2">Your {brand} verification code</h1>
          <p className="text-slate-500 mb-5">Use this code to continue. It expires in 10 minutes.</p>
          <div className="bg-slate-50 font-mono text-3xl font-bold tracking-[0.3em] py-4 rounded-lg text-slate-800 border border-slate-100 mb-5">
            482917
          </div>
          <p className="text-[11px] text-slate-400">Didn't request this? You can safely ignore this email.</p>
        </div>
      </div>
    </div>
  );
}

interface Industry {
  id: string; name: string; brand: string; emoji: string; accent: string; blurb: string;
  wa: MsgTemplate[]; email: TemplateItem[];
  sms: { body: string; t: string; tag: string }[];
  omni: { kpis: { l: string; v: string }[]; threads: { ch: string; who: string; msg: string }[]; ai: string };
}

const mk = (id: string, name: string, brand: string, emoji: string, accent: string, blurb: string,
  wa: MsgTemplate[], emails: { s: string; d: string; p: string; h: string; l: string[]; c: string }[],
  sms: { body: string; t: string; tag: string }[],
  omni: Industry["omni"]): Industry => ({
  id, name, brand, emoji, accent, blurb, wa,
  email: [
    ...emails.map((e) => ({ subject: e.s, sender: brand, date: e.d, preview: e.p, body: mailBody(accent, e.h, e.l, e.c) })),
    { subject: `${brand} verification code`, sender: `${brand} Security`, date: "Just now", preview: "482917 is your verification code…", body: otpBody(accent, brand) },
  ],
  sms: [{ body: `${brand}: 482917 is your verification code. Valid 10 min. Do not share.`, t: "9:41 AM", tag: "OTP" }, ...sms],
  omni,
});

const INDUSTRIES: Industry[] = [
  mk("restaurants", "Restaurants & QSR", "McDonald's", "🍔", "#ea580c", "Menus, orders, offers & loyalty",
    [
      { label: "Order Confirmed", tag: "Logistics", headerType: "image", body: "Hi Rahul 👋\n\nYour *McDonald's* order *#MCD-8821* is confirmed!\n\nEstimated delivery: *25 mins* 🍟", footer: "McDonald's India", buttons: [{ type: "URL", text: "Track Order" }, { type: "QUICK_REPLY", text: "Need Help" }] },
      { label: "Flash Offer", tag: "Marketing", headerType: "image", body: "🍔 *McSaver Wednesday!*\n\nBuy 1 McChicken, get 1 *FREE* — today only.", footer: "Valid today · T&Cs apply", buttons: [{ type: "URL", text: "Find Outlet" }, { type: "QUICK_REPLY", text: "Remind Me" }] },
      { label: "Loyalty Reward", tag: "Recovery", headerType: "text", headerText: "🎁 Reward unlocked", body: "Hey Rahul, you've got *200 McPoints*.\n\nRedeem for a *free McFlurry* 🍦", footer: "McDonald's Rewards", buttons: [{ type: "URL", text: "Redeem Now" }] },
    ],
    [
      { s: "Your McDonald's order is on the way 🍟", d: "Today, 1:12 PM", p: "Order #MCD-8821 — arriving in ~25 mins…", h: "Order #MCD-8821 confirmed", l: ["Your order is being prepared fresh and arrives in ~25 minutes.", "Track your rider live and rate your meal."], c: "Track my order" },
      { s: "McSaver Wednesday — BOGO McChicken 🍔", d: "Today, 9:00 AM", p: "Buy 1 get 1 free, today only…", h: "Buy 1, Get 1 FREE", l: ["It's McSaver Wednesday! Grab a McChicken and get another free.", "Valid today only at participating outlets."], c: "Find nearest outlet" },
    ],
    [
      { body: "McDonald's: Order #MCD-8821 confirmed. Arriving ~25 min. Track: bbai.in/m/8821", t: "1:12 PM", tag: "Order" },
      { body: "McDonald's: McSaver Wed 🍔 BOGO McChicken today. Reply STOP to opt out.", t: "9:00 AM", tag: "Offer" },
    ],
    { kpis: [{ l: "Orders", v: "1,284" }, { l: "Delivered", v: "98%" }, { l: "Repeat", v: "47%" }, { l: "Reply", v: "19s" }], threads: [{ ch: "WA", who: "Rahul V.", msg: "Where is my order?" }, { ch: "SMS", who: "+91 90••• 210", msg: "Cancel order" }, { ch: "EM", who: "corp@acme.io", msg: "Catering for 50" }], ai: "Your order #MCD-8821 is 8 min away 🛵 Shared live tracking — anything else?" }),

  mk("ecommerce", "E-commerce & D2C", "Myntra", "🛍️", "#7c3aed", "Cart recovery, tracking & offers",
    [
      { label: "Abandoned Cart", tag: "Recovery", headerType: "image", body: "Hey Priya 👀\n\nYour *Myntra* bag has *3 items* (*₹2,499*).\n\nGet *15% OFF* with *BACK15*.", footer: "Free delivery above ₹499", buttons: [{ type: "URL", text: "Complete Purchase" }, { type: "QUICK_REPLY", text: "View Bag" }] },
      { label: "Out for Delivery", tag: "Logistics", headerType: "document", body: "📦 *Out for delivery!*\n\nOrder *#MYN-4490* arrives today *2–6 PM*.", footer: "Myntra Logistics", buttons: [{ type: "URL", text: "Live Tracking" }, { type: "QUICK_REPLY", text: "Not Home?" }] },
      { label: "EORS Sale", tag: "Marketing", headerType: "image", body: "🔥 *End Of Reason Sale LIVE!*\n\nUp to *80% OFF* on 5L+ styles.", footer: "Limited period", buttons: [{ type: "URL", text: "Shop Now" }, { type: "QUICK_REPLY", text: "Remind Later" }] },
    ],
    [
      { s: "Priya, your bag is waiting — 15% off 🛒", d: "Today, 11:02 AM", p: "3 items, ₹2,499 — save 15%…", h: "Still thinking it over?", l: ["Your bag has 3 items. Finish in 24h and save 15% with BACK15.", "Free delivery above ₹499."], c: "Complete my order" },
      { s: "End of Reason Sale is LIVE 🔥", d: "Today, 8:00 AM", p: "Up to 80% off, your brands…", h: "The sale you waited for", l: ["Up to 80% off across 5 lakh+ styles.", "Shop before your size sells out."], c: "Shop the sale" },
    ],
    [
      { body: "Myntra: Order #MYN-4490 out for delivery 2-6 PM. Track: bbai.in/y/4490", t: "11:02 AM", tag: "Shipping" },
      { body: "Myntra: EORS LIVE 🔥 up to 80% off. Shop: bbai.in/eors. STOP to opt out.", t: "8:00 AM", tag: "Offer" },
    ],
    { kpis: [{ l: "Carts", v: "318" }, { l: "Recovery", v: "27%" }, { l: "Revenue", v: "₹4.6L" }, { l: "Reply", v: "21s" }], threads: [{ ch: "WA", who: "Priya S.", msg: "Is COD available?" }, { ch: "EM", who: "amit@gmail", msg: "Refund status?" }, { ch: "SMS", who: "+91 98••• 144", msg: "Order delayed" }], ai: "Yes, COD is available ✓ Want me to place the order now?" }),

  mk("education", "Coaching & EdTech", "Physics Wallah", "🎓", "#2563eb", "Admissions, fees & class updates",
    [
      { label: "Fee Reminder", tag: "Authentication", headerType: "text", headerText: "📅 Fee Reminder", body: "Hello *Mr. Sharma*,\n\nAarav's *NEET batch* fee *₹4,200* is due *15 Jan*.", footer: "Physics Wallah", buttons: [{ type: "URL", text: "Pay Fee" }, { type: "QUICK_REPLY", text: "Counsellor" }] },
      { label: "Live Class", tag: "Marketing", headerType: "text", headerText: "📚 Live Class Today", body: "Hi Aarav!\n\n*Physics — Rotational Motion* live at *6:00 PM* with Alakh sir.", footer: "Physics Wallah", buttons: [{ type: "URL", text: "Join Class" }] },
      { label: "Test Result", tag: "Healthcare", headerType: "document", body: "📊 *Weekly Test Result*\n\nAarav scored *182/200* — Rank *#7*.", footer: "Physics Wallah", buttons: [{ type: "URL", text: "View Analysis" }] },
    ],
    [
      { s: "Aarav's NEET batch fee due 15 Jan", d: "Today, 9:10 AM", p: "₹4,200 due — pay in one click…", h: "Term fee due 15 Jan", l: ["The NEET batch fee of ₹4,200 for Aarav is due 15 Jan.", "Pay online to avoid a late fee and keep the seat active."], c: "Pay fee now" },
      { s: "Live class 6 PM — Rotational Motion 📚", d: "Today, 4:25 PM", p: "Alakh sir live tonight…", h: "Your live class is tonight", l: ["Physics — Rotational Motion with Alakh sir at 6:00 PM.", "Join 5 minutes early with your doubts ready."], c: "Join live class" },
    ],
    [
      { body: "Physics Wallah: Aarav NEET fee Rs.4,200 due 15 Jan. Pay: bbai.in/pw/AA8", t: "9:10 AM", tag: "Fee" },
      { body: "Physics Wallah: Live Physics class 6 PM today. Join: bbai.in/pw/live", t: "4:25 PM", tag: "Class" },
    ],
    { kpis: [{ l: "Fees", v: "₹12.4L" }, { l: "On-time", v: "88%" }, { l: "Enquiries", v: "207" }, { l: "Reply", v: "24s" }], threads: [{ ch: "WA", who: "Mr. Sharma", msg: "Pay in 2 parts?" }, { ch: "SMS", who: "+91 91••• 882", msg: "Send receipt" }, { ch: "EM", who: "parent@xyz", msg: "Admission Grade 11?" }], ai: "Yes — a 2-installment plan is available ✓ Shared the split payment link." }),

  mk("healthcare", "Healthcare & Diagnostics", "Dr Lal PathLabs", "🧪", "#0d9488", "Bookings, reminders & reports",
    [
      { label: "Home Collection", tag: "Healthcare", headerType: "text", headerText: "📅 Home Collection", body: "Hello *Amit*,\n\nSample collection confirmed *Mon 15 Jan, 7:30 AM*.\n\nFast 10–12 hrs.", footer: "Dr Lal PathLabs", buttons: [{ type: "QUICK_REPLY", text: "Confirm" }, { type: "QUICK_REPLY", text: "Reschedule" }, { type: "PHONE_NUMBER", text: "Call" }] },
      { label: "Report Ready", tag: "Authentication", headerType: "document", body: "🧪 *Report ready*\n\nYour *Full Body Checkup* report is available.", footer: "Dr Lal PathLabs", buttons: [{ type: "URL", text: "View Report" }] },
      { label: "Health Reminder", tag: "Marketing", headerType: "image", body: "💧 *Annual checkup due*\n\nBook your preventive package & get *20% OFF*.", footer: "Dr Lal PathLabs", buttons: [{ type: "URL", text: "Book Package" }] },
    ],
    [
      { s: "Sample collection confirmed — Mon 7:30 AM", d: "Today, 8:00 AM", p: "Home collection confirmed, fasting required…", h: "Your home collection is booked", l: ["Our phlebotomist visits Mon 15 Jan at 7:30 AM.", "Please fast 10–12 hours before sampling."], c: "View booking" },
      { s: "Your test report is ready 🧪", d: "Today, 5:12 PM", p: "Full Body Checkup — access securely…", h: "Report ready", l: ["Your Full Body Checkup report is now available.", "Access securely and get a free doctor interpretation."], c: "View my report" },
    ],
    [
      { body: "Dr Lal PathLabs: Home collection Mon 7:30 AM. Fast 10-12h. C confirm R reschedule.", t: "8:00 AM", tag: "Appt" },
      { body: "Dr Lal PathLabs: Your report is ready. View: bbai.in/lpl/Amit", t: "5:12 PM", tag: "Report" },
    ],
    { kpis: [{ l: "Bookings", v: "146" }, { l: "No-show", v: "-34%" }, { l: "Reports", v: "1,902" }, { l: "Reply", v: "18s" }], threads: [{ ch: "WA", who: "Amit K.", msg: "Earlier slot?" }, { ch: "SMS", who: "+91 99••• 003", msg: "Reschedule Tue" }, { ch: "EM", who: "ravi@xyz", msg: "Insurance?" }], ai: "Earliest slot is Mon 9:15 AM ✓ Shall I move your collection there?" }),

  mk("travel", "Travel & Hospitality", "MakeMyTrip", "✈️", "#0284c7", "Bookings, itineraries & alerts",
    [
      { label: "Booking Confirmed", tag: "Logistics", headerType: "image", body: "Hi Sneha ✈️\n\n*PNR ABZ123* confirmed!\n\n*DEL → GOA* · 18 Jan · 09:40 AM", footer: "MakeMyTrip", buttons: [{ type: "URL", text: "Web Check-in" }, { type: "URL", text: "Itinerary" }] },
      { label: "Gate Change", tag: "Authentication", headerType: "text", headerText: "✈ Gate Update", body: "Flight *6E-203* now boards *Gate 24*.\n\nBoarding *09:10 AM*.", footer: "MakeMyTrip", buttons: [{ type: "URL", text: "Live Status" }] },
      { label: "Hotel Deal", tag: "Marketing", headerType: "image", body: "🏖️ *Goa stays from ₹2,199/night*\n\nAdd a beach resort & save *30%*.", footer: "MakeMyTrip", buttons: [{ type: "URL", text: "Add Hotel" }] },
    ],
    [
      { s: "You're going to Goa! ✈️ Itinerary inside", d: "Today, 1:20 PM", p: "PNR ABZ123 confirmed…", h: "Trip confirmed: DEL → GOA", l: ["Booking PNR ABZ123 confirmed for 18 Jan, 09:40 AM.", "Web check-in opens 48h before departure."], c: "Manage my trip" },
      { s: "Add a beach stay & save 30% 🏖️", d: "Today, 3:40 PM", p: "Goa resorts from ₹2,199/night…", h: "Make it a holiday", l: ["Add a handpicked Goa beach resort and save 30%.", "Limited rooms at this price."], c: "Add a hotel" },
    ],
    [
      { body: "MakeMyTrip: PNR ABZ123 DEL-GOA 18 Jan 09:40. Check-in: bbai.in/ci/ABZ123", t: "1:20 PM", tag: "Booking" },
      { body: "MakeMyTrip: Gate change ✈ 6E-203 now Gate 24, boarding 09:10.", t: "8:35 AM", tag: "Alert" },
    ],
    { kpis: [{ l: "Bookings", v: "412" }, { l: "Check-ins", v: "94%" }, { l: "Upsell", v: "₹2.1L" }, { l: "Reply", v: "20s" }], threads: [{ ch: "WA", who: "Sneha K.", msg: "Add baggage?" }, { ch: "SMS", who: "+91 90••• 771", msg: "Cab to airport?" }, { ch: "EM", who: "biz@firm.io", msg: "Group of 12" }], ai: "Extra 15kg added to PNR ABZ123 ✓ Payment link sent — anything else?" }),

  mk("realestate", "Real Estate", "NoBroker", "🏠", "#b45309", "Leads, listings & site visits",
    [
      { label: "New Match", tag: "Marketing", headerType: "image", body: "Hi Vikram 🏠\n\n*3 new 3BHK flats* in *Powai* from *₹95L* · zero brokerage.", footer: "NoBroker", buttons: [{ type: "URL", text: "View Listings" }, { type: "QUICK_REPLY", text: "Refine" }] },
      { label: "Visit Booked", tag: "Logistics", headerType: "text", headerText: "📍 Site Visit", body: "Site visit for *Lake View, Powai* is *Sat 11 AM*.", footer: "NoBroker", buttons: [{ type: "QUICK_REPLY", text: "Confirm" }, { type: "QUICK_REPLY", text: "Reschedule" }] },
      { label: "Owner Replied", tag: "Recovery", headerType: "none", body: "💬 The owner of *Lake View 3BHK* replied.\n\nRespond fast — high demand.", footer: "NoBroker", buttons: [{ type: "URL", text: "Open Chat" }] },
    ],
    [
      { s: "3 new 3BHK matches in Powai 🏠", d: "Today, 12:05 PM", p: "Zero brokerage from ₹95L…", h: "New homes for you", l: ["3 new 3BHK flats in Powai match your search from ₹95L.", "Zero brokerage. Connect directly with owners."], c: "View listings" },
      { s: "Site visit confirmed — Sat 11 AM", d: "Today, 3:40 PM", p: "Lake View, Powai…", h: "Site visit confirmed", l: ["Your visit to Lake View, Powai is booked for Sat 11 AM.", "Our relationship manager will guide you."], c: "View details" },
    ],
    [
      { body: "NoBroker: 3 new 3BHK Powai from Rs.95L, 0 brokerage. View: bbai.in/nb/PW", t: "12:05 PM", tag: "Lead" },
      { body: "NoBroker: Site visit Lake View Sat 11 AM. C confirm R reschedule.", t: "3:40 PM", tag: "Visit" },
    ],
    { kpis: [{ l: "Leads", v: "289" }, { l: "Visits", v: "57" }, { l: "Closures", v: "11" }, { l: "Reply", v: "26s" }], threads: [{ ch: "WA", who: "Vikram R.", msg: "Vastu compliant?" }, { ch: "EM", who: "nri@uae.com", msg: "Virtual tour?" }, { ch: "SMS", who: "+91 98••• 552", msg: "Loan help?" }], ai: "Yes, the 3BHK is Vastu-compliant ✓ Attached the layout — book a visit?" }),

  mk("fitness", "Fitness & Gyms", "Anytime Fitness", "💪", "#16a34a", "Renewals, classes & plans",
    [
      { label: "Renewal", tag: "Recovery", headerType: "text", headerText: "⏰ Renewal Due", body: "Hey *Karan* 💪\n\nMembership expires in *3 days*.\n\nRenew & get *1 month free* + PT session.", footer: "Anytime Fitness", buttons: [{ type: "URL", text: "Renew & Save" }, { type: "QUICK_REPLY", text: "Coach" }] },
      { label: "Class Booked", tag: "Logistics", headerType: "none", body: "*HIIT class* booked *Tue 7:00 AM* with Coach Riya.\n\nArrive 10 min early.", footer: "Anytime Fitness", buttons: [{ type: "QUICK_REPLY", text: "Confirm" }, { type: "QUICK_REPLY", text: "Cancel" }] },
      { label: "Win-back", tag: "Marketing", headerType: "image", body: "We miss you, Karan! 🏋️\n\nCome back this week — free *InBody scan*.", footer: "Anytime Fitness", buttons: [{ type: "URL", text: "Book a Slot" }] },
    ],
    [
      { s: "Karan, don't lose your streak — renew + 1 month free", d: "Today, 10:30 AM", p: "Membership ends in 3 days…", h: "Keep the gains going", l: ["Your membership expires in 3 days.", "Renew now and get 1 month free plus a PT session."], c: "Renew membership" },
      { s: "We miss you 🏋️ free InBody scan inside", d: "Today, 6:00 PM", p: "Come back this week…", h: "Your comeback starts now", l: ["It's been 2 weeks. Come back and unlock a free InBody scan.", "Your coach is ready when you are."], c: "Book a slot" },
    ],
    [
      { body: "Anytime Fitness: Membership expires in 3 days. Renew + 1 mo free: bbai.in/af/KP", t: "10:30 AM", tag: "Renewal" },
      { body: "Anytime Fitness: HIIT class Tue 7 AM booked. Reply C to cancel.", t: "6:00 PM", tag: "Class" },
    ],
    { kpis: [{ l: "Renewals", v: "128" }, { l: "Retention", v: "+22%" }, { l: "Class fill", v: "91%" }, { l: "Reply", v: "22s" }], threads: [{ ch: "WA", who: "Karan M.", msg: "Pause 1 month?" }, { ch: "SMS", who: "+91 99••• 410", msg: "Diet plan?" }, { ch: "EM", who: "hr@startup.io", msg: "Corporate plan?" }], ai: "Sure — I can freeze your membership 1 month ✓ Apply it now?" }),

  mk("beauty", "Beauty & Salons", "Cut & Style", "💇", "#db2777", "Appointments, reminders & loyalty",
    [
      { label: "Appointment", tag: "Healthcare", headerType: "image", body: "Hi Anita 💅\n\n*Hair Spa + Facial* booked · *Sat 4:00 PM*.", footer: "Cut & Style", buttons: [{ type: "QUICK_REPLY", text: "Confirm" }, { type: "QUICK_REPLY", text: "Reschedule" }] },
      { label: "Reminder", tag: "Authentication", headerType: "none", body: "Gentle reminder: appointment *tomorrow 4 PM* 💗", footer: "Cut & Style", buttons: [{ type: "QUICK_REPLY", text: "Confirm" }, { type: "PHONE_NUMBER", text: "Call" }] },
      { label: "Loyalty Offer", tag: "Marketing", headerType: "image", body: "We miss you, Anita! ✨\n\n*20% OFF* any service this week.", footer: "Cut & Style", buttons: [{ type: "URL", text: "Book Now" }] },
    ],
    [
      { s: "See you Saturday, Anita ✨", d: "Today, 11:45 AM", p: "Hair Spa + Facial Sat 4 PM…", h: "Your appointment is booked", l: ["Hair Spa + Facial on Saturday at 4:00 PM.", "Arrive 5 min early for a complimentary welcome drink."], c: "View appointment" },
      { s: "20% off your next visit 💗", d: "Today, 1:15 PM", p: "We miss you — 20% off…", h: "We miss you, Anita", l: ["Enjoy 20% off any service this week at Cut & Style.", "Book before slots fill up."], c: "Book now" },
    ],
    [
      { body: "Cut & Style: Hair Spa + Facial Sat 4 PM. Reply C confirm R reschedule.", t: "11:45 AM", tag: "Appt" },
      { body: "Cut & Style: We miss you 💗 20% off this week: bbai.in/cs/AN", t: "1:15 PM", tag: "Offer" },
    ],
    { kpis: [{ l: "Appts", v: "203" }, { l: "Rebook", v: "46%" }, { l: "No-show", v: "-29%" }, { l: "Reply", v: "25s" }], threads: [{ ch: "WA", who: "Anita D.", msg: "Add nail art?" }, { ch: "SMS", who: "+91 90••• 318", msg: "Move to Sunday?" }, { ch: "EM", who: "bride@wed.in", msg: "Bridal package?" }], ai: "Added nail art to Saturday ✓ Total ₹1,850 — see you then!" }),
];

/* ───────── helpers ───────── */
function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}>
      {children}
    </motion.div>
  );
}

const ONODES = [
  // core channels — bigger tiles, longer lines (corners)
  { id: "wa", label: "WhatsApp", color: "#25D366", x: 16, y: 16, big: true },
  { id: "em", label: "Email", color: "#EA4335", x: 84, y: 18, big: true },
  { id: "ig", label: "Instagram", color: "#E1306C", x: 84, y: 84, big: true },
  { id: "sms", label: "SMS", color: "#34C759", x: 16, y: 84, big: true },
  // ad & call funnels — smaller tiles, short lines (near hub)
  { id: "gad", label: "Google Ads", color: "#FBBC05", x: 50, y: 25, big: false },
  { id: "fad", label: "Meta Ads", color: "#1877F2", x: 75, y: 50, big: false },
  { id: "ivr", label: "IVR / Phone", color: "#16a34a", x: 50, y: 75, big: false },
];

function FallbackMark({ id }: { id: string }) {
  if (id === "wa")
    return <svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="#25D366" d="M12 2C6.5 2 2.1 6.4 2.1 11.9c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.9-4.45 9.9-9.91A9.86 9.86 0 0 0 12 2Zm5.8 14.16c-.24.68-1.42 1.3-1.95 1.38-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.93-4.36-.14-.19-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1.01-2.41.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.66.5.24.59.82 2.04.89 2.19.07.15.12.32.02.51-.27.53-.56.74-.71.93-.14.14-.29.3-.12.58.17.29.74 1.22 1.59 1.98 1.1.98 2.02 1.28 2.31 1.43.29.14.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.66-.14.27.1 1.71.81 2 .95.29.14.49.21.56.33.07.12.07.69-.17 1.36Z" /></svg>;
  if (id === "em")
    return <img
  src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
  alt="Gmail"
  width="34"
  height="24"
/>
    if (id === "sms")
    return <svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="#34C759" d="M12 3C6.9 3 3 6.6 3 11.1c0 2.3 1.05 4.35 2.78 5.78-.18 1.5-.84 2.82-1.78 3.92 1.78-.18 3.42-.84 4.83-1.9 1 .32 2.07.49 3.17.49 5.1 0 9-3.6 9-8.29S17.1 3 12 3Z" /></svg>;
  if (id === "ig")
    return <svg viewBox="0 0 24 24" width="100%" height="100%"><defs><linearGradient id="igFb" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#FEDA77" /><stop offset="0.5" stopColor="#F58529" /><stop offset="1" stopColor="#DD2A7B" /></linearGradient></defs><rect x="2.5" y="2.5" width="19" height="19" rx="6" fill="none" stroke="url(#igFb)" strokeWidth="2.2" /><circle cx="12" cy="12" r="4.8" fill="none" stroke="url(#igFb)" strokeWidth="2.2" /><circle cx="17.4" cy="6.6" r="1.4" fill="#DD2A7B" /></svg>;
  if (id === "gad")
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg"
      alt="Google Ads"
      width="24"
      height="24"
    />
  );
  if (id === "fad")
    return <svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="#1877F2" d="M24 12a12 12 0 1 0-13.88 11.85v-8.38H7.08V12h3.04V9.36c0-3 1.79-4.66 4.53-4.66 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.96.93-1.96 1.88V12h3.33l-.53 3.47h-2.8v8.38A12 12 0 0 0 24 12Z" /></svg>;
  
  return <svg
  viewBox="0 0 24 24"
  width="100%"
  height="100%"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx="12" cy="12" r="11" fill="#1E96F0" />

  <path
    fill="#fff"
    d="M16.6 14.2c-.3-.15-1.8-.9-2.08-1s-.48-.15-.68.15-.78 1-.96 1.2-.35.22-.65.07a8.5 8.5 0 0 1-2.5-1.55 9.3 9.3 0 0 1-1.72-2.14c-.18-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.65-.93-2.26-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.25 5.13 4.55.72.3 1.28.48 1.72.62.72.23 1.37.2 1.88.12.58-.08 1.8-.73 2.05-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35Z"
    transform="translate(1 1)"
  />
</svg>
}

function BrandLogo({ id, size }: { id: string; size: number }) {
  return (
    <span style={{ width: size, height: size, display: "inline-flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <FallbackMark id={id} />
    </span>
  );
}

function OmniGraphic({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-full"
          style={{ background: "radial-gradient(circle at 50% 48%, rgba(21,128,61,0.10) 0%, transparent 62%)" }} />

        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
          {ONODES.map((n, i) => (
            <g key={n.id}>
              <line x1="50" y1="50" x2={n.x} y2={n.y}
                stroke={n.color} strokeOpacity="0.22" strokeWidth="0.6" strokeLinecap="round" />
              <line className="animate-power" x1="50" y1="50" x2={n.x} y2={n.y}
                stroke={n.color} strokeOpacity="0.45" strokeWidth="1" strokeLinecap="round"
                strokeDasharray="3 140" style={{ animationDuration: `${3 + i * 0.5}s` }} />
            </g>
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28">
          <span className="absolute inset-0 rounded-full" style={{ background: "#16a34a", opacity: 0.32, animation: "ping-slow 4.2s ease-out infinite" }} />
          <span className="absolute inset-0 rounded-full" style={{ background: "#16a34a", opacity: 0.2, animation: "ping-slow 4.2s ease-out infinite", animationDelay: "2.1s" }} />
          <div className="relative w-28 h-28 rounded-full bg-white shadow-xl ring-1 ring-brand-100 flex items-center justify-center">
            <Image src="/favicon.png" alt="BigBros AI" width={72} height={72} className="w-[58px] h-[58px] object-contain" />
          </div>
        </div>

        {ONODES.map((n, i) => {
          const tile = n.big ? 84 : 60;
          const logo = n.big ? 52 : 36;
          return (
            <div key={n.id} className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}>
              <div
                className="flex flex-col items-center gap-2"
                style={{ animation: `float-soft ${6 + i * 0.6}s ease-in-out infinite`, animationDelay: `${i * 0.6}s` }}>
                <div className="rounded-full bg-white flex items-center justify-center ring-1 ring-gray-100"
                  style={{ width: tile, height: tile, boxShadow: `0 8px 20px ${n.color}1f` }}>
                  <BrandLogo id={n.id} size={logo} />
                </div>
                <span className={`font-semibold tracking-wide ${n.big ? "text-xs" : "text-[10px]"}`}
                  style={{ color: n.color }}>{n.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SmsiPhone({ ind }: { ind: Industry }) {
  const [i, setI] = useState(0);
  useEffect(() => { setI(0); }, [ind.id]);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % ind.sms.length), 3200);
    return () => clearInterval(t);
  }, [ind.sms.length]);
  const m = ind.sms[i];
  return (
    <div className="relative w-[270px] sm:w-[290px] max-w-full">
      <div className="absolute -inset-5 rounded-[60px] pointer-events-none"
        style={{ background: `radial-gradient(ellipse at center, ${G2}1f 0%, transparent 70%)`, filter: "blur(20px)" }} />
      <div className="relative w-full h-[560px] border-[9px] border-gray-900 rounded-[3rem] bg-white overflow-hidden shadow-phone">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-black rounded-b-2xl z-30" />
        <div className="absolute inset-0 flex flex-col">
          <div className="pt-7 pb-3 px-4 bg-[#f7f7f7] border-b border-gray-200 text-center shrink-0">
            <div className="flex justify-between text-[10px] font-semibold text-gray-900 mb-2 px-1"><span>9:41</span><span>5G ▮▮▮</span></div>
            <div className="w-12 h-12 rounded-full mx-auto mb-1.5 flex items-center justify-center text-xl" style={{ background: ind.accent + "1f" }}>{ind.emoji}</div>
            <p className="text-[13px] font-semibold text-gray-900">{ind.brand}</p>
            <p className="text-[10px] text-gray-400">Text Message · SMS</p>
          </div>
          <div className="flex-1 px-4 py-6 overflow-hidden bg-white flex flex-col">
            <div className="flex justify-center mb-3"><span className="text-[9px] text-gray-400 font-medium">Today {m.t}</span></div>
            <AnimatePresence mode="wait">
              <motion.div key={ind.id + i} initial={{ opacity: 0, y: 14, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.34, 1.4, 0.64, 1] }} className="max-w-[82%]">
                <div className="bg-[#e9e9eb] text-gray-900 rounded-2xl rounded-bl-md px-4 py-3">
                  <p className="text-[12.5px] leading-relaxed">{m.body}</p>
                </div>
                <span className="text-[9px] text-gray-400 mt-1.5 ml-1 inline-block">{m.tag} · delivered</span>
              </motion.div>
            </AnimatePresence>
            <div className="mt-auto flex justify-center gap-1.5">
              {ind.sms.map((_, k) => (
                <span key={k} className="rounded-full transition-all" style={{ width: k === i ? 18 : 6, height: 6, background: k === i ? G2 : "#d1d5db" }} />
              ))}
            </div>
          </div>
          <div className="bg-[#f7f7f7] px-3 py-3 border-t border-gray-200 flex items-center gap-2 shrink-0">
            <div className="flex-1 border border-gray-300 rounded-full px-3 py-2 text-[11px] text-gray-400">Text Message</div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: G2 }}><ArrowRight size={14} className="text-white" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OmniDash({ ind }: { ind: Industry }) {
  const wa = [4, 6, 5, 9, 7, 12, 15, 11, 14, 18];
  const em = [3, 4, 4, 6, 5, 7, 9, 8, 10, 12];
  const sm = [2, 2, 3, 3, 4, 4, 5, 5, 6, 7];
  const max = 20, W = 480, H = 130;
  const path = (a: number[]) => a.map((v, idx) => `${(idx / (a.length - 1)) * W},${H - (v / max) * H}`).join(" ");
  return (
    <motion.div key={ind.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} className="w-full max-w-[560px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
      <div className="px-5 py-4 flex items-center justify-between" style={{ background: GRAD }}>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/80">Omni Service Dashboard</p>
          <p className="text-[15px] font-black text-white">{ind.brand}</p>
        </div>
        <div className="flex gap-1 bg-white/15 rounded-lg p-1">
          {["30d", "7d", "24h"].map((x, k) => (
            <span key={x} className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${k === 0 ? "bg-white text-gray-800" : "text-white/80"}`}>{x}</span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-100 border-b border-gray-100">
        {ind.omni.kpis.map((k) => (
          <div key={k.l} className="bg-white px-4 py-3">
            <p className="text-[18px] font-black text-gray-900 leading-none">{k.v}</p>
            <p className="text-[10px] text-gray-400 mt-1">{k.l}</p>
          </div>
        ))}
      </div>
      <div className="px-5 pt-4 pb-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[12px] font-bold text-gray-800">Multi-channel delivery</p>
          <div className="flex gap-3 text-[9px] font-semibold">
            <span className="flex items-center gap-1 text-gray-500"><span className="w-2 h-2 rounded-full" style={{ background: G1 }} />WhatsApp</span>
            <span className="flex items-center gap-1 text-gray-500"><span className="w-2 h-2 rounded-full" style={{ background: G2 }} />Email</span>
            <span className="flex items-center gap-1 text-gray-500"><span className="w-2 h-2 rounded-full bg-amber-500" />SMS</span>
          </div>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-[130px]" preserveAspectRatio="none">
          {[0.25, 0.5, 0.75].map((g) => <line key={g} x1="0" y1={H * g} x2={W} y2={H * g} stroke="#f1f5f9" strokeWidth="1" />)}
          <polyline fill="none" stroke="#f59e0b" strokeWidth="2.5" points={path(sm)} />
          <polyline fill="none" stroke={G2} strokeWidth="2.5" points={path(em)} />
          <polyline fill="none" stroke={G1} strokeWidth="3" points={path(wa)} />
        </svg>
        <div className="flex justify-between text-[8px] text-gray-300 mt-1"><span>Apr 17</span><span>May 1</span><span>May 9</span><span>May 17</span></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 border-t border-gray-100">
        <div className="bg-white p-4 flex items-center gap-4">
          <div className="relative w-16 h-16 shrink-0">
            <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e5e7eb" strokeWidth="3" />
              <circle cx="18" cy="18" r="15.9" fill="none" stroke={G1} strokeWidth="3" strokeDasharray="98 2" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center"><span className="font-black text-sm text-gray-900 leading-none">100</span><span className="text-[7px] text-gray-400">/100</span></div>
          </div>
          <div><p className="text-[12px] font-bold text-gray-900">Sender Reputation</p><p className="text-[10px] text-gray-400 leading-snug">Excellent across WhatsApp, Email &amp; SMS</p></div>
        </div>
        <div className="bg-white p-4">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Unified inbox · BB-AI</p>
          {ind.omni.threads.slice(0, 2).map((t, k) => (
            <div key={k} className="flex items-center gap-2 mb-1.5">
              <span className="text-[8px] font-black px-1.5 py-0.5 rounded text-white shrink-0" style={{ background: t.ch === "WA" ? G1 : t.ch === "EM" ? G2 : "#94a3b8" }}>{t.ch}</span>
              <span className="text-[10px] font-semibold text-gray-700 shrink-0">{t.who}</span>
              <span className="text-[9px] text-gray-400 truncate">{t.msg}</span>
            </div>
          ))}
          <div className="rounded-lg px-2.5 py-1.5 mt-2" style={{ background: G1 + "12" }}>
            <p className="text-[9.5px] text-gray-700 leading-snug"><span className="font-bold" style={{ color: G1 }}>✦ BB-AI:</span> {ind.omni.ai}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PriceCard({ rows, color }: { rows: { l: string; v: string }[]; color: string }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }} transition={{ duration: 0.45 }}
      className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-card w-full max-w-sm">
      <div className="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-white" style={{ background: color }}>Pricing</div>
      <div className="divide-y divide-gray-100">
        {rows.map((r, i) => (
          <motion.div key={r.l} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.07 }}
            className="flex items-center justify-between px-5 py-3">
            <span className="text-sm text-slate-500">{r.l}</span>
            <span className="text-sm font-black text-gray-900">{r.v}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const PRICING = {
  wa: [{ l: "Marketing", v: "₹0.999" }, { l: "Utility / Auth", v: "₹0.145" }, { l: "Service (24h)", v: "Free" }],
  email: [{ l: "Up to 10,000 / mo", v: "Free" }, { l: "< 1 lakh / mo", v: "₹0.095" }, { l: "> 10 lakh / mo", v: "₹0.040" }],
  sms: [{ l: "Standard route", v: "₹0.20" }, { l: "High volume", v: "from ₹0.14" }, { l: "Delivery receipts", v: "Included" }],
  omni: [{ l: "Basic plan", v: "₹4,999 / mo" }, { l: "Pro (BB-AI)", v: "₹7,999 / mo" }, { l: "Billing", v: "Prepaid / Postpaid" }],
};

function ChannelStop({
  Icon, eyebrow, color, brand, headline, desc, mockup, price, flip, alt, pricingLink,
}: {
  Icon: React.ElementType; eyebrow: string; color: string; brand: string;
  headline: string; desc: string; mockup: React.ReactNode;
  price: { l: string; v: string }[]; flip?: boolean; alt?: boolean; pricingLink?: boolean;
}) {
  return (
    <section className={`px-5 sm:px-6 py-14 sm:py-20 border-b border-gray-100 ${alt ? "bg-gray-50" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-5 border"
            style={{ background: color + "10", borderColor: color + "30" }}>
            <Icon size={14} style={{ color }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.13em]" style={{ color }}>{eyebrow}</span>
            <span className="text-[11px] text-slate-400">· {brand}</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-[2.5rem] text-gray-900 tracking-tight leading-[1.12] mb-4">
            {headline}
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-7">{desc}</p>
          <div className="mb-6"><PriceCard rows={price} color={color} /></div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="https://dashboard.bigbrosai.com/signup" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-3.5 rounded-xl hover:opacity-90 transition-all"
              style={{ background: color }}>
              Get started <ArrowRight size={15} />
            </Link>
            {pricingLink && (
              <Link href={PRICING_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline" style={{ color }}>
                View full services & pricing <ArrowRight size={14} />
              </Link>
            )}
          </div>
        </Reveal>
        <Reveal delay={0.1} className={`flex justify-center ${flip ? "lg:order-1" : ""}`}>
          <div className="animate-float max-w-full">{mockup}</div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactStrip() {
  return (
    <section className="px-5 sm:px-6 py-14 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 mb-2">Talk to our team</h3>
        <p className="text-slate-500 text-sm sm:text-base mb-8">Sales, onboarding & migration — we usually reply within minutes.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
          {[
            { Ic: Phone, l: "+91 80066 66198", h: "tel:+918006666198" },
            { Ic: Phone, l: "+91 80066 66197", h: "tel:+918006666197" },
            { Ic: MailIc, l: "info@bigbrosai.com", h: "mailto:info@bigbrosai.com" },
            { Ic: MailIc, l: "support@bigbrosai.com", h: "mailto:support@bigbrosai.com" },
          ].map((c) => (
            <a key={c.l} href={c.h} className="flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl border border-gray-200 bg-white hover:border-brand-300 hover:bg-brand-50 transition-colors text-sm font-semibold text-gray-700">
              <c.Ic size={16} className="text-brand-700" /> {c.l}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const CONNECTIONS = [
  { logo: "fad", color: "#1877F2", title: "Meta / Click-to-WhatsApp Ads", desc: "Turn Facebook & Instagram ad clicks into instant WhatsApp conversations — no landing page needed." },
  { logo: "gad", color: "#FBBC05", title: "Google Ads Lead Sync", desc: "Pipe Google Ads lead-form submissions straight into automated WhatsApp & email follow-ups." },
  { logo: "ivr", color: "#1E96F0", title: "Phone / IVR Calls", desc: "Trigger IVR flows and missed-call campaigns alongside messaging — one unified customer journey." },
];

function ConnectionsSection() {
  return (
    <section className="px-5 sm:px-6 py-14 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-[11px] font-bold uppercase tracking-[0.13em] px-4 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-700" /> Plus, your ad &amp; call funnels
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-gray-900 tracking-tight leading-[1.1] mb-3">
              Connect every lead source
            </h2>
            <p className="text-slate-500 text-sm sm:text-lg max-w-2xl mx-auto">
              Ads and calls flow into the same BB-AI inbox as your messaging — one journey, zero leaks.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CONNECTIONS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="h-full bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-card-hover transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-white ring-1 ring-gray-100 flex items-center justify-center mb-4"
                  style={{ boxShadow: `0 6px 16px ${c.color}1f` }}>
                  <BrandLogo id={c.logo} size={26} />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── main ───────── */
export function BrochureExperience() {
  const [picked, setPicked] = useState<Industry | null>(null);
  const chooserRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = picked ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [picked]);

  return (
    <div className="overflow-x-hidden">
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-white pt-12 sm:pt-16 pb-16 sm:pb-24 px-5 sm:px-6">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(21,128,61,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(21,128,61,0.04) 1px,transparent 1px)",
          backgroundSize: "44px 44px",
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[360px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top center, rgba(21,128,61,0.07) 0%, transparent 70%)" }} />
        <OmniGraphic className="absolute right-4 xl:right-12 top-1/2 -translate-y-1/2 w-[440px] h-[440px] xl:w-[520px] xl:h-[520px] pointer-events-none hidden xl:block" />
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-7">
                <Sparkles size={13} className="text-brand-700" />
                <span className="text-xs font-semibold text-brand-700">Official Meta BSP · Powered by BB-AI</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display font-black text-[2.1rem] leading-[1.1] sm:text-5xl lg:text-[3.5rem] tracking-tight text-gray-900 mb-5">
                Control your Business Flow across
                <br />
                <span className="relative inline-block">
                  <span className="text-gradient">Every Channel</span>
                  <svg className="absolute -bottom-1.5 left-0 w-full" height="5" viewBox="0 0 200 5" preserveAspectRatio="none">
                    <path d="M0 4 Q50 0 100 3 Q150 6 200 2" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
                  </svg>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed mb-8 max-w-xl">
                WhatsApp, Email &amp; SMS in one platform — with AI that writes,
                sends and replies for you. Live in 10 minutes.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button onClick={() => chooserRef.current?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center justify-center gap-2 text-white text-base font-bold px-8 py-4 rounded-2xl shadow-brand transition-all hover:bg-brand-800 bg-brand-700">
                  See it for your business <ArrowDown size={17} />
                </button>
                <Link href="https://dashboard.bigbrosai.com/signup" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-base font-semibold px-7 py-4 rounded-2xl border border-gray-200 text-gray-800 hover:bg-gray-50 transition-all">
                  Start for Free
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {["No credit card", "Setup in 10 min", "Official Meta BSP"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle2 size={15} className="text-brand-700 shrink-0" /> {t}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRY CHOOSER */}
      <section ref={chooserRef} className="px-5 sm:px-6 py-16 sm:py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-[11px] font-bold uppercase tracking-[0.13em] px-4 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-700" /> Choose your industry
              </div>
              <h2 className="font-display font-black text-[1.7rem] leading-tight sm:text-4xl md:text-5xl text-gray-900 tracking-tight mb-3">
                What kind of business do you run?
              </h2>
              <p className="text-slate-500 text-sm sm:text-lg max-w-xl mx-auto">
                Tap your industry — see exactly how BigBros AI looks for <em>your</em> customers, with real examples.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {INDUSTRIES.map((ind, i) => (
              <motion.button key={ind.id} onClick={() => setPicked(ind)}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: (i % 4) * 0.05, duration: 0.45 }}
                whileHover={{ y: -5 }} whileTap={{ scale: 0.97 }}
                className="group relative text-left rounded-3xl border border-gray-200 bg-white p-5 sm:p-7 transition-all hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-x-0 -bottom-16 h-32 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" style={{ background: ind.accent + "22" }} />
                <div className="relative">
                  <div className="text-3xl sm:text-4xl mb-4">{ind.emoji}</div>
                  <p className="font-display font-bold text-gray-900 text-sm sm:text-base leading-tight mb-1.5">{ind.name}</p>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-snug mb-4">{ind.blurb}</p>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-bold" style={{ color: ind.accent }}>
                    See how it looks for you
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MIGRATION + START stay on the first page */}
      <MigrationSection />
      <ContactStrip />
      <CTASection />

      {/* 4. FULL-SCREEN INDUSTRY POPUP */}
      <AnimatePresence>
        {picked && (
          <motion.div className="fixed inset-0 z-[60] bg-white overflow-y-auto overflow-x-hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.32 }}>
            <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-100">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-xl sm:text-2xl shrink-0">{picked.emoji}</span>
                  <div className="min-w-0">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider leading-none mb-1">Tailored for</p>
                    <p className="font-display font-bold text-gray-900 text-xs sm:text-sm leading-none truncate">{picked.name} · {picked.brand}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => { setPicked(null); setTimeout(() => chooserRef.current?.scrollIntoView({ behavior: "smooth" }), 60); }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                    <RefreshCw size={12} /> <span className="hidden sm:inline">Change</span>
                  </button>
                  <button onClick={() => setPicked(null)} aria-label="Close"
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100"><X size={18} /></button>
                </div>
              </div>
            </div>

            <motion.div key={picked.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className="px-5 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-10 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] mb-3" style={{ color: picked.accent }}>{picked.name}</p>
                <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-gray-900 tracking-tight leading-[1.1] max-w-3xl mx-auto">
                  BigBros AI working for <span style={{ color: picked.accent }}>{picked.brand}</span>
                </h2>
              </div>

              <ChannelStop Icon={MessageSquare} eyebrow="WhatsApp Business API" color="#15803d" brand={picked.brand}
                headline="Templates your customers actually open"
                desc="Approved templates, auto-swiping examples and BB-AI category-safe drafting — exactly how it looks in WhatsApp."
                mockup={<PhoneMockup businessName={picked.brand} templates={picked.wa} />}
                price={PRICING.wa} pricingLink />

              <ChannelStop Icon={Mail} eyebrow="Enterprise Email" color="#0284c7" brand={picked.brand}
                headline="Branded email that lands in the inbox"
                desc="Multiple branded templates — receipts, offers, OTPs — from your verified domain. 10,000/month free."
                mockup={<EmailMockup templates={picked.email} />}
                price={PRICING.email} flip alt />

              <ChannelStop Icon={Smartphone} eyebrow="SMS Gateway" color="#d97706" brand={picked.brand}
                headline="Instant, everywhere — no internet needed"
                desc="Real iPhone-style delivery for OTPs, alerts and offers — auto-swiping through real examples."
                mockup={<SmsiPhone ind={picked} />}
                price={PRICING.sms} />

              <ChannelStop Icon={LayoutDashboard} eyebrow="Omni Command Centre" color={G1} brand={picked.brand}
                headline="Every channel, one analytics dashboard"
                desc="Live multi-channel delivery, sender reputation and a BB-AI unified inbox — all in one screen."
                mockup={<OmniDash ind={picked} />}
                price={PRICING.omni} flip alt />

              <ConnectionsSection />
              <MigrationSection />
              <ContactStrip />
              <CTASection />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
