"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  ShoppingCart, GraduationCap, HeartPulse, Landmark, Building2,
  Car, CalendarDays, Monitor, UtensilsCrossed, Plane, Dumbbell, Sparkles,
  TrendingUp, MessageCircle, Users, Zap, ArrowRight, CheckCircle2,
  BarChart3, Clock, Star, ShieldCheck, Bell, Bot,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";

interface CaseStudy {
  headline: string;
  challenge: string;
  solution: string;
  metrics: { value: string; label: string; icon: ComponentType<LucideProps> }[];
  useCases: string[];
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
  accentColor: string;
}

interface Industry {
  icon: string;
  label: string;
  color: string;
  caseStudy: CaseStudy;
}

const INDUSTRIES: Industry[] = [
  {
    icon: "ShoppingCart",
    label: "E-commerce",
    color: "#15803d",
    caseStudy: {
      headline: "Turn abandoned carts into completed orders",
      challenge: "Online stores lose 70% of customers who add items to cart but never checkout — costing crores in revenue.",
      solution: "bigbrosai sends personalised WhatsApp nudges within minutes of abandonment, with one-tap checkout links and discount codes that expire in 2 hours.",
      metrics: [
        { value: "38%", label: "Cart Recovery Rate", icon: TrendingUp },
        { value: "₹12L", label: "Monthly Revenue Recovered", icon: BarChart3 },
        { value: "6 min", label: "Avg. Response Time", icon: Clock },
      ],
      useCases: [
        "Abandoned cart recovery with dynamic discounts",
        "Order confirmation & real-time tracking updates",
        "Post-delivery review & upsell automation",
        "Flash sale broadcasts to segmented customers",
        "COD confirmation to reduce return rates",
      ],
      quote: "We recovered ₹12 lakhs in the first month alone. bigbrosai paid for itself 50 times over.",
      quoteAuthor: "Rohit Mehta",
      quoteRole: "Founder, StyleBazaar",
      accentColor: "#15803d",
    },
  },
  {
    icon: "GraduationCap",
    label: "Education",
    color: "#7c3aed",
    caseStudy: {
      headline: "Convert leads into enrolled students at scale",
      challenge: "EdTech companies lose 60% of interested leads because follow-ups are too slow or too generic to feel personal.",
      solution: "bigbrosai automates the entire admissions funnel — from lead capture to fee payment — over WhatsApp with smart AI chatbots.",
      metrics: [
        { value: "4.2×", label: "Lead Conversion Lift", icon: TrendingUp },
        { value: "85%", label: "Query Resolution Rate", icon: Bot },
        { value: "24/7", label: "Student Support", icon: Clock },
      ],
      useCases: [
        "Instant course enquiry response with AI chatbot",
        "Automated follow-up sequence over 7 days",
        "Batch schedules, fee reminders & study materials",
        "Parent communication portal via WhatsApp",
        "Exam result alerts and re-enrollment campaigns",
      ],
      quote: "Our admissions team used to miss half the leads. Now the bot handles everything and we only step in to close.",
      quoteAuthor: "Priya Nair",
      quoteRole: "Operations Head, LearnSpark",
      accentColor: "#7c3aed",
    },
  },
  {
    icon: "HeartPulse",
    label: "Healthcare",
    color: "#dc2626",
    caseStudy: {
      headline: "Reduce no-shows and automate patient care",
      challenge: "Clinics and hospitals lose 30% of appointment revenue to no-shows, while staff spend hours on manual reminder calls.",
      solution: "bigbrosai automates appointment booking, sends WhatsApp reminders with one-tap confirm/reschedule, and delivers post-visit care instructions.",
      metrics: [
        { value: "67%", label: "Reduction in No-shows", icon: TrendingUp },
        { value: "3 hrs", label: "Staff Time Saved/Day", icon: Clock },
        { value: "4.9★", label: "Patient Satisfaction", icon: Star },
      ],
      useCases: [
        "Appointment booking & smart reminders",
        "Prescription refill and follow-up alerts",
        "Lab report delivery over WhatsApp",
        "Post-discharge care instruction automation",
        "Health camp & vaccination drive broadcasts",
      ],
      quote: "Our no-show rate dropped from 32% to under 10% within two months. Patients love the WhatsApp reminders.",
      quoteAuthor: "Dr. Kavitha Rao",
      quoteRole: "Director, MedFirst Clinics",
      accentColor: "#dc2626",
    },
  },
  {
    icon: "Landmark",
    label: "Finance & BFSI",
    color: "#0369a1",
    caseStudy: {
      headline: "Deliver secure, compliant financial communication",
      challenge: "Banks and NBFCs struggle to deliver timely, personalised alerts while meeting RBI compliance and maintaining customer trust.",
      solution: "bigbrosai delivers verified, end-to-end encrypted WhatsApp messages for transaction alerts, KYC nudges, and loan updates — fully compliant with Meta BSP standards.",
      metrics: [
        { value: "99.8%", label: "Message Delivery Rate", icon: ShieldCheck },
        { value: "52%", label: "Loan Application Uplift", icon: TrendingUp },
        { value: "0", label: "Compliance Violations", icon: CheckCircle2 },
      ],
      useCases: [
        "Transaction alerts and OTP delivery",
        "Loan EMI reminders and overdue follow-ups",
        "KYC document collection via WhatsApp",
        "Insurance policy renewal campaigns",
        "Investment portfolio summary automation",
      ],
      quote: "bigbrosai gave us a compliant WhatsApp channel. Our EMI collection rate jumped by 22% in the first quarter.",
      quoteAuthor: "Anil Sharma",
      quoteRole: "CTO, FinEdge NBFC",
      accentColor: "#0369a1",
    },
  },
  {
    icon: "Building2",
    label: "Real Estate",
    color: "#d97706",
    caseStudy: {
      headline: "Qualify buyers faster and close deals sooner",
      challenge: "Real estate agents waste hours chasing cold leads when 80% of them lose interest within 48 hours of enquiring.",
      solution: "bigbrosai's AI chatbot qualifies leads instantly, shares property brochures and virtual tour links, and schedules site visits — all on WhatsApp.",
      metrics: [
        { value: "3×", label: "Faster Lead Qualification", icon: Zap },
        { value: "41%", label: "Site Visit Conversion", icon: TrendingUp },
        { value: "₹2.8Cr", label: "Pipeline Generated/Month", icon: BarChart3 },
      ],
      useCases: [
        "AI-powered lead qualification chatbot",
        "Property brochure & floor plan delivery",
        "Virtual tour link sharing and follow-ups",
        "Site visit scheduling and reminders",
        "Post-visit follow-up & documentation",
      ],
      quote: "We went from 5 site visits a week to 23. bigbrosai qualifies and books everything while we sleep.",
      quoteAuthor: "Suresh Patel",
      quoteRole: "Sales Director, NestVista Realty",
      accentColor: "#d97706",
    },
  },
  {
    icon: "Car",
    label: "Automobile",
    color: "#64748b",
    caseStudy: {
      headline: "Drive test drives and service bookings on autopilot",
      challenge: "Auto dealerships miss 40% of after-hours enquiries, and service centers lose repeat customers who forget to book timely servicing.",
      solution: "bigbrosai handles test drive bookings, sends personalised service due reminders, and keeps customers engaged with EMI alerts and accessory offers.",
      metrics: [
        { value: "2.7×", label: "Test Drive Bookings", icon: TrendingUp },
        { value: "78%", label: "Service Reminder Open Rate", icon: Bell },
        { value: "60%", label: "Repeat Service Customers", icon: Users },
      ],
      useCases: [
        "Test drive booking and confirmation",
        "Service due reminders based on last visit date",
        "Insurance renewal and EMI alerts",
        "New model launch broadcasts to existing customers",
        "Roadside assistance and complaint tracking",
      ],
      quote: "Our service bay is now fully booked 3 weeks in advance thanks to bigbrosai automated reminders.",
      quoteAuthor: "Manish Gupta",
      quoteRole: "GM, AutoElite Motors",
      accentColor: "#64748b",
    },
  },
  {
    icon: "CalendarDays",
    label: "Events",
    color: "#db2777",
    caseStudy: {
      headline: "Fill seats and keep attendees engaged end-to-end",
      challenge: "Event organizers lose 35% of confirmed registrations to last-minute drop-offs, and attendees miss key information shared only via email.",
      solution: "bigbrosai drives registrations via WhatsApp, sends countdown reminders, shares venue details, and keeps the buzz alive post-event.",
      metrics: [
        { value: "89%", label: "Attendee Show Rate", icon: Users },
        { value: "5×", label: "Registration Conversions", icon: TrendingUp },
        { value: "2 min", label: "Avg. Registration Time", icon: Clock },
      ],
      useCases: [
        "Event registration directly on WhatsApp",
        "Countdown reminders — 7 days, 1 day, 2 hours before",
        "Venue map, schedule, and speaker details delivery",
        "Live Q&A and feedback collection during event",
        "Post-event highlights and next event promotion",
      ],
      quote: "Our last conference had a 92% show rate. bigbrosai kept attendees informed and excited all the way through.",
      quoteAuthor: "Neha Joshi",
      quoteRole: "Event Director, SummitHQ",
      accentColor: "#db2777",
    },
  },
  {
    icon: "Monitor",
    label: "IT Services",
    color: "#0891b2",
    caseStudy: {
      headline: "Accelerate sales cycles with instant technical responses",
      challenge: "SaaS and IT companies lose deals because prospects don't get timely, technical answers when evaluating solutions.",
      solution: "bigbrosai's AI chatbot handles product queries, shares case studies and demo links, and schedules calls — keeping prospects warm 24/7.",
      metrics: [
        { value: "48%", label: "Demo Conversion Rate", icon: TrendingUp },
        { value: "24/7", label: "Lead Qualification", icon: Bot },
        { value: "3 days", label: "Faster Sales Cycle", icon: Clock },
      ],
      useCases: [
        "Product enquiry handling with AI bot",
        "Demo scheduling and calendar integration",
        "Proposal and contract delivery via WhatsApp",
        "Onboarding and support ticket automation",
        "Renewal reminders and upsell campaigns",
      ],
      quote: "Our SDRs now spend 80% of their time on qualified prospects. The bot handles everything before that.",
      quoteAuthor: "Vikram Iyer",
      quoteRole: "VP Sales, CloudNine Software",
      accentColor: "#0891b2",
    },
  },
  {
    icon: "UtensilsCrossed",
    label: "Food & Delivery",
    color: "#ea580c",
    caseStudy: {
      headline: "Build a loyal customer base with every order",
      challenge: "Restaurants and cloud kitchens rely on third-party platforms that eat margins and prevent direct customer relationships.",
      solution: "bigbrosai turns one-time customers into loyal regulars with WhatsApp order confirmations, delivery updates, loyalty points, and exclusive offers.",
      metrics: [
        { value: "44%", label: "Repeat Order Rate", icon: TrendingUp },
        { value: "₹0", label: "Platform Commission Saved", icon: BarChart3 },
        { value: "4.8★", label: "Customer Satisfaction", icon: Star },
      ],
      useCases: [
        "Direct ordering via WhatsApp menu",
        "Real-time order confirmation and delivery tracking",
        "Loyalty points and reward redemption",
        "Daily specials and combo deal broadcasts",
        "Review collection and reputation management",
      ],
      quote: "We moved 30% of our orders off Swiggy to direct WhatsApp orders. Our margins went from 8% to 28%.",
      quoteAuthor: "Anjali Desai",
      quoteRole: "Founder, Tiffin Express",
      accentColor: "#ea580c",
    },
  },
  {
    icon: "Plane",
    label: "Travel",
    color: "#2563eb",
    caseStudy: {
      headline: "Personalise every journey from enquiry to return",
      challenge: "Travel agencies lose 55% of enquiries to OTAs because they cannot respond fast enough with personalised itineraries.",
      solution: "bigbrosai enables instant quote sharing, itinerary delivery, payment links, and real-time travel alerts — all on WhatsApp.",
      metrics: [
        { value: "3.8×", label: "Enquiry-to-Booking Lift", icon: TrendingUp },
        { value: "92%", label: "Document Delivery Success", icon: CheckCircle2 },
        { value: "18 min", label: "Avg. Quote Response Time", icon: Clock },
      ],
      useCases: [
        "Instant itinerary and quote delivery",
        "Visa, tickets, and hotel voucher sharing",
        "Flight delay and gate change alerts",
        "Trip reminder sequence — 30, 7, 1 day before",
        "Post-trip review and re-booking campaigns",
      ],
      quote: "We respond to every enquiry in under 20 minutes now. Our conversion rate has nearly quadrupled.",
      quoteAuthor: "Rajan Bose",
      quoteRole: "CEO, Wanderlust Holidays",
      accentColor: "#2563eb",
    },
  },
  {
    icon: "Dumbbell",
    label: "Fitness",
    color: "#16a34a",
    caseStudy: {
      headline: "Reduce churn and keep members showing up",
      challenge: "Gyms and fitness studios see 40% member churn in the first 3 months because members lose motivation and feel unsupported.",
      solution: "bigbrosai sends personalised workout nudges, class reminders, progress check-ins, and renewal offers to keep members engaged every day.",
      metrics: [
        { value: "55%", label: "Reduction in Churn", icon: TrendingUp },
        { value: "82%", label: "Class Attendance Rate", icon: Users },
        { value: "2.1×", label: "Membership Renewals", icon: BarChart3 },
      ],
      useCases: [
        "Class booking and 1-hour pre-class reminders",
        "Daily workout tips and motivation messages",
        "Membership renewal campaigns with early-bird offers",
        "Personal trainer session confirmations",
        "Diet plan and supplement offer broadcasts",
      ],
      quote: "Member retention went from 58% to 89% after we started using bigbrosai. The daily check-ins make the difference.",
      quoteAuthor: "Kiran Reddy",
      quoteRole: "Owner, IronEdge Fitness",
      accentColor: "#16a34a",
    },
  },
  {
    icon: "Sparkles",
    label: "Beauty & Retail",
    color: "#9333ea",
    caseStudy: {
      headline: "Build a fully booked salon and loyal retail customer base",
      challenge: "Beauty salons lose 30% of appointments to no-shows, while retail stores struggle to drive repeat purchases without expensive ads.",
      solution: "bigbrosai automates appointment reminders, promotes seasonal offers, and builds a loyal WhatsApp community around the brand.",
      metrics: [
        { value: "73%", label: "Reduction in No-shows", icon: TrendingUp },
        { value: "3.2×", label: "Repeat Purchase Rate", icon: ShoppingCart },
        { value: "₹8L", label: "Revenue from Broadcasts/Month", icon: BarChart3 },
      ],
      useCases: [
        "Appointment booking with automated reminders",
        "Seasonal offer and new service broadcasts",
        "Loyalty points tracking via WhatsApp",
        "Product restock and new arrival alerts",
        "Birthday and anniversary personalised offers",
      ],
      quote: "My salon is fully booked 2 weeks ahead now. And our product line sales have tripled with WhatsApp broadcasts.",
      quoteAuthor: "Shruti Malhotra",
      quoteRole: "Owner, Glow Studio",
      accentColor: "#9333ea",
    },
  },
];

const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  ShoppingCart, GraduationCap, HeartPulse, Landmark, Building2,
  Car, CalendarDays, Monitor, UtensilsCrossed, Plane, Dumbbell, Sparkles,
};

export function IndustriesSection() {
  const [active, setActive] = useState(0);
  const industry = INDUSTRIES[active];
  const { caseStudy: cs } = industry;
  const Icon = ICON_MAP[industry.icon];

  const clickDemo = () => {
    window.open("https://calendly.com/founderbbai/30min", "_blank");
  };

  return (
    <Section bg="alt">
      <SectionHeader
        eyebrow="Industries"
        title="Trusted across every industry"
        subtitle="From healthcare to e-commerce — bigbrosai adapts to how your business communicates."
      />

      {/* Industry pill selector */}
      <div className="flex flex-wrap gap-2.5 justify-center mb-12">
        {INDUSTRIES.map((ind, i) => {
          const Ic = ICON_MAP[ind.icon];
          const isActive = i === active;
          return (
            <button
              key={ind.label}
              onClick={() => setActive(i)}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
              style={
                isActive
                  ? {
                    background: ind.color + "15",
                    borderColor: ind.color + "50",
                    color: ind.color,
                    boxShadow: `0 2px 12px ${ind.color}25`,
                    transform: "translateY(-1px)",
                  }
                  : {
                    background: "#ffffff",
                    borderColor: "#e5e7eb",
                    color: "#374151",
                  }
              }
            >
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                style={{ background: ind.color + "18", color: ind.color }}
              >
                {Ic && <Ic size={13} strokeWidth={2} />}
              </div>
              {ind.label}
            </button>
          );
        })}
      </div>

      {/* Case study panel */}
      <div
        key={active}
        className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-card"
        style={{ animation: "fadeSlideIn 0.3s ease" }}
      >
        {/* Top accent bar */}
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${cs.accentColor}, ${cs.accentColor}60)` }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left — story */}
          <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-100">

            {/* Industry badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-5"
              style={{ background: cs.accentColor + "12", color: cs.accentColor, border: `1px solid ${cs.accentColor}30` }}
            >
              {Icon && <Icon size={11} />}
              {industry.label} Case Study
            </div>

            <h3 className="font-display font-black text-2xl md:text-[1.75rem] text-gray-900 leading-tight mb-5">
              {cs.headline}
            </h3>

            <div className="space-y-4 mb-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">The Challenge</p>
                <p className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">How bigbrosai Helps</p>
                <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {cs.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl p-4 text-center"
                  style={{ background: cs.accentColor + "08", border: `1px solid ${cs.accentColor}20` }}
                >
                  <m.icon size={14} className="mx-auto mb-1.5" style={{ color: cs.accentColor }} />
                  <div
                    className="font-display font-black text-xl leading-none mb-1"
                    style={{ color: cs.accentColor }}
                  >
                    {m.value}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium leading-tight">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div
              className="rounded-2xl p-5"
              style={{ background: cs.accentColor + "06", border: `1px solid ${cs.accentColor}18` }}
            >
              <p className="text-sm text-slate-700 leading-relaxed italic mb-3">"{cs.quote}"</p>
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ background: cs.accentColor }}
                >
                  {cs.quoteAuthor[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 leading-tight">{cs.quoteAuthor}</p>
                  <p className="text-[11px] text-slate-400">{cs.quoteRole}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — use cases + CTA */}
          <div className="p-8 md:p-10 bg-gray-50/50">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-5">
              What you can automate
            </p>

            <div className="space-y-2.5 mb-8">
              {cs.useCases.map((uc, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
                >
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: cs.accentColor + "15" }}
                  >
                    <CheckCircle2 size={13} style={{ color: cs.accentColor }} />
                  </div>
                  <p className="text-sm text-slate-700 leading-snug">{uc}</p>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: `linear-gradient(135deg, ${cs.accentColor}10, ${cs.accentColor}04)`,
                border: `1px solid ${cs.accentColor}25`,
              }}
            >
              <div>
                <p className="font-display font-bold text-gray-900 text-base mb-1">
                  Ready to grow your {industry.label} business?
                </p>
                <p className="text-sm text-slate-500">
                  See how bigbrosai works for {industry.label.toLowerCase()} businesses in a free 20-min demo.
                </p>
              </div>
              <button
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 self-start shadow-sm"
                style={{ background: cs.accentColor }}
                onClick={clickDemo}
              >
                <CalendarDays size={17} />
                Get a Free Demo
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Section>
  );
}
