import Link from "next/link";
import { Scale, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LEGAL_LINKS } from "@/lib/data";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  activePath: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, subtitle, lastUpdated, activePath, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-brand-50 via-white to-white border-b border-gray-100 py-14 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-3.5 py-1.5 mb-5">
          <Scale size={13} className="text-brand-700" />
          <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">Legal</span>
        </div>
        <h1 className="font-display font-black text-3xl md:text-4xl text-gray-900 mb-3 tracking-tight">{title}</h1>
        <p className="text-slate-500 text-base mb-2">{subtitle}</p>
        <p className="text-slate-400 text-sm">Last updated: {lastUpdated}</p>
      </div>

      <div className="max-w-6xl mx-auto flex">
        <aside className="hidden lg:block w-56 shrink-0 sticky top-16 self-start pt-10 pb-10 pl-6 pr-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.12em] mb-3">Legal Pages</p>
          <nav className="space-y-0.5">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href}
                className={cn("flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors group",
                  activePath === link.href
                    ? "bg-brand-50 text-brand-700 font-semibold"
                    : "text-slate-500 hover:bg-gray-50 hover:text-gray-900"
                )}>
                {link.label}
                <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </nav>
        </aside>
        <article className="flex-1 px-6 lg:px-12 py-10 max-w-3xl">{children}</article>
      </div>
    </div>
  );
}

export function LH2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4 pt-8 border-t border-gray-100 first:border-0 first:pt-0 first:mt-0 tracking-tight">{children}</h2>;
}
export function LH3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-semibold text-base text-gray-800 mt-6 mb-3">{children}</h3>;
}
export function LP({ children }: { children: React.ReactNode }) {
  return <p className="text-slate-600 text-sm leading-relaxed mb-4">{children}</p>;
}
export function LUL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mb-5 space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
          <span className="text-brand-700 mt-0.5 shrink-0">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
export function LCallout({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warning" }) {
  return (
    <div className={cn("rounded-xl border px-5 py-4 text-sm leading-relaxed mb-5",
      type === "info" ? "bg-blue-50 border-blue-200 text-blue-800" : "bg-orange-50 border-orange-200 text-orange-800"
    )}>
      {children}
    </div>
  );
}
