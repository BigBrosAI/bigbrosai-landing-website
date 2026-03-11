import { Section, SectionHeader } from "@/components/ui/Section";
import { INDUSTRIES } from "@/lib/data";
import {
  ShoppingCart, GraduationCap, HeartPulse, Landmark, Building2,
  Car, CalendarDays, Monitor, UtensilsCrossed, Plane, Dumbbell, Sparkles,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";

const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Landmark,
  Building2,
  Car,
  CalendarDays,
  Monitor,
  UtensilsCrossed,
  Plane,
  Dumbbell,
  Sparkles,
};

export function IndustriesSection() {
  return (
    <Section bg="alt">
      <SectionHeader
        eyebrow="Industries"
        title="Trusted across every industry"
        subtitle="From healthcare to e-commerce — BigBrosAI adapts to how your business communicates."
      />
      <div className="flex flex-wrap gap-3 justify-center">
        {INDUSTRIES.map((ind) => {
          const Icon = ICON_MAP[ind.icon];
          return (
            <div
              key={ind.label}
              className="group flex items-center gap-2.5 px-4 py-2.5 bg-white border border-gray-200 rounded-xl cursor-default hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 shadow-sm"
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                style={{ background: ind.color + "18", color: ind.color }}
              >
                {Icon && <Icon size={15} strokeWidth={2} />}
              </div>
              <span className="text-sm font-medium text-gray-700">{ind.label}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
