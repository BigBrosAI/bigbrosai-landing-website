"use client";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
  bullets?: string[];
  className?: string;
}

export function FeatureCard({ icon, title, desc, color, bullets, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "group bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent cursor-default",
      className
    )}>
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: color + "18", color }}
      >
        {icon}
      </div>
      <h3 className="font-display font-bold text-[1.05rem] text-gray-900 mb-2.5 tracking-tight">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4">{desc}</p>
      {bullets && (
        <ul className="space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <Check size={13} strokeWidth={2.5} className="mt-0.5 shrink-0" style={{ color }} />
              <span className="text-sm text-slate-600 leading-snug">{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
