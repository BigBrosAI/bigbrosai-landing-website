import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, MessageCircle } from "lucide-react";
import { INDUSTRY_LIST } from "@/lib/industries";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industries | bigbrosai — WhatsApp Automation for Every Business",
  description: "Discover how bigbrosai helps businesses across 12+ industries automate customer communication, reduce churn, and grow revenue on WhatsApp.",
};

export default function IndustriesIndexPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-[11px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
            Industries
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-[1.1] mb-4">
            Built for every industry
          </h1>
          <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto">
            bigbrosai adapts to how your business communicates — with deep use cases, automations, and workflows for 12 industries.
          </p>
          <Link
            href="https://calendly.com/founderbbai/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg">
              <CalendarDays size={17} />
              Get a Free Demo
              <ArrowRight size={15} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Industry grid */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRY_LIST.map((industry: any) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group bg-white border border-gray-200 rounded-3xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 shadow-sm"
                >
                  {/* Top accent */}
                  <div
                    className="h-1 w-12 rounded-full mb-6"
                    style={{ background: industry.color }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: industry.color + "15" }}
                  >
                    <Icon size={22} style={{ color: industry.color }} />
                  </div>

                  <h2 className="font-display font-black text-xl text-gray-900 mb-2 group-hover:text-brand-700 transition-colors">
                    {industry.label}
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {industry.heroTagline}
                  </p>

                  {/* Key metric */}
                  {(() => {
                    const MetricIcon = industry.metrics[0].icon;
                    return (
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold mb-5"
                        style={{ background: industry.color + "10", color: industry.color, border: `1px solid ${industry.color}25` }}
                      >
                        <MetricIcon size={11} />
                        {industry.metrics[0].value} {industry.metrics[0].label}
                      </div>
                    );
                  })()}

                  {/* Use case count */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-slate-400 font-medium">
                      {industry.useCases.length} automation use cases
                    </span>
                    <div
                      className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all"
                      style={{ color: industry.color }}
                    >
                      Explore
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
