import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-700 disabled:opacity-50 disabled:pointer-events-none select-none",
        {
          "bg-brand-700 text-white hover:bg-brand-800 active:scale-[0.97] shadow-brand": variant === "primary",
          "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.97]": variant === "secondary",
          "bg-transparent text-brand-700 border-2 border-brand-700 hover:bg-brand-50 active:scale-[0.97]": variant === "outline",
          "bg-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-100 active:scale-[0.97]": variant === "ghost",
          "bg-gray-900 text-white hover:bg-gray-800 active:scale-[0.97]": variant === "dark",
          "text-sm px-4 py-2 gap-1.5": size === "sm",
          "text-sm px-5 py-2.5": size === "md",
          "text-base px-7 py-3.5 gap-2": size === "lg",
          "text-base px-9 py-4 gap-2 rounded-2xl": size === "xl",
          "w-full": fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";
