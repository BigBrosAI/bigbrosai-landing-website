import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "gray" | "blue" | "orange";
  size?: "sm" | "md";
  className?: string;
}

const V = {
  green: "bg-brand-50 text-brand-700 border-brand-200",
  gray:  "bg-gray-100 text-gray-500 border-gray-200",
  blue:  "bg-blue-50 text-blue-700 border-blue-200",
  orange:"bg-orange-50 text-orange-700 border-orange-200",
};

export function Badge({ children, variant = "green", size = "md", className }: BadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center font-semibold border rounded-full",
      V[variant],
      size === "sm" ? "text-[10px] px-2 py-0.5" : "text-xs px-2.5 py-1",
      className
    )}>
      {children}
    </span>
  );
}

export function StatusBadge({ status }: { status: "LIVE" | "SOON" }) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-widest",
      status === "LIVE"
        ? "bg-brand-50 text-brand-700 border-brand-200"
        : "bg-gray-100 text-gray-500 border-gray-200"
    )}>
      <span className={cn("w-1.5 h-1.5 rounded-full", status === "LIVE" ? "bg-brand-700 animate-pulse" : "bg-gray-400")} />
      {status}
    </span>
  );
}
