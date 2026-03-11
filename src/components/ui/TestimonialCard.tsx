import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/types";

export function TestimonialCard({ name, role, company, text, avatar, rating }: Testimonial) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-7 flex flex-col gap-4 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group">
      <Quote size={28} className="text-brand-200 group-hover:text-brand-300 transition-colors" />
      <p className="text-sm text-slate-600 leading-relaxed flex-1">{text}</p>
      <div className="flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm shrink-0"
          style={{ background: "linear-gradient(135deg,#15803d,#16a34a)" }}
        >
          {avatar}
        </div>
        <div>
          <div className="font-semibold text-sm text-gray-900">{name}</div>
          <div className="text-xs text-slate-500">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
}
