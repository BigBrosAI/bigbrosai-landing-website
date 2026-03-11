import { cn } from "@/lib/utils";

export function Section({
  children, className, id, bg = "white",
}: {
  children: React.ReactNode; className?: string; id?: string;
  bg?: "white" | "alt" | "dark" | "brand";
}) {
  return (
    <section id={id} className={cn("py-24 px-6",
      bg === "white" && "bg-white",
      bg === "alt"   && "bg-gray-50",
      bg === "dark"  && "bg-[#0f172a]",
      bg === "brand" && "bg-brand-700",
      className
    )}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow, title, subtitle,
  centered = true, dark = false, className,
}: {
  eyebrow?: string; title: React.ReactNode; subtitle?: string;
  centered?: boolean; dark?: boolean; className?: string;
}) {
  return (
    <div className={cn("mb-16", centered && "text-center", className)}>
      {eyebrow && (
        <div className={cn(
          "inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full border mb-5",
          dark ? "bg-brand-700/20 text-brand-300 border-brand-700/30"
               : "bg-brand-50 text-brand-700 border-brand-200"
        )}>
          <span className={cn("w-1.5 h-1.5 rounded-full", dark ? "bg-brand-400" : "bg-brand-700")} />
          {eyebrow}
        </div>
      )}
      <h2 className={cn(
        "font-display font-black leading-[1.1] tracking-tight text-3xl md:text-4xl lg:text-[2.8rem] mb-4",
        dark ? "text-white" : "text-gray-900",
        centered && "mx-auto max-w-3xl"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-base md:text-lg leading-relaxed",
          dark ? "text-slate-400" : "text-slate-500",
          centered && "max-w-2xl mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
