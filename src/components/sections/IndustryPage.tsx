import Link from "next/link";
import {
  ArrowRight, CheckCircle2, MessageCircle, ArrowLeft,
  Quote, ChevronRight,
  CalendarDays,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { INDUSTRY_LIST, type Industry } from "@/lib/industries";

export function IndustryPage({ industry }: { industry: Industry }) {
  const { caseStudy: _cs, ...rest } = { caseStudy: null, ...industry };
  const related = INDUSTRY_LIST.filter((i) => industry.relatedSlugs.includes(i.slug));
  const Icon = industry.icon;

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative py-20 px-6 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${industry.color}08 0%, #ffffff 60%)`,
          borderBottom: "1px solid #f1f5f9",
        }}
      >
        {/* Decorative circle */}
        <div
          className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${industry.color}10 0%, transparent 70%)`,
          }}
        />
        <div className="max-w-4xl mx-auto relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-brand-700 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/industries" className="hover:text-brand-700 transition-colors">Industries</Link>
            <ChevronRight size={14} />
            <span className="text-slate-600 font-medium">{industry.label}</span>
          </div>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-6"
            style={{
              background: industry.color + "12",
              color: industry.color,
              border: `1px solid ${industry.color}30`,
            }}
          >
            <Icon size={12} />
            {industry.label} · bigbrosai
          </div>

          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-[3.2rem] text-gray-900 leading-[1.1] tracking-tight mb-5">
            {industry.heroTagline}
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mb-10">
            {industry.heroSubtitle}
          </p>

          {/* Metrics strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {industry.metrics.map((m) => (
              <div
                key={m.label}
                className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
              >
                <m.icon size={16} className="mb-2" style={{ color: industry.color }} />
                <div
                  className="font-display font-black text-2xl leading-none mb-1"
                  style={{ color: industry.color }}
                >
                  {m.value}
                </div>
                <div className="text-[11px] text-slate-500 font-medium leading-tight">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="https://calendly.com/founderbbai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white font-semibold text-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
              style={{ color: industry.color }}
            >
              <CalendarDays size={17} />
              Get a Free Demo
              <ArrowRight size={14} />
            </Link>
            <Button variant="secondary" size="lg">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* ── Challenge & Solution ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="rounded-2xl p-7"
              style={{ background: "#fef2f2", border: "1px solid #fecaca" }}
            >
              <div className="text-[10px] font-black uppercase tracking-widest text-red-400 mb-3">The Challenge</div>
              <p className="text-slate-700 text-base leading-relaxed">{industry.challenge}</p>
            </div>
            <div
              className="rounded-2xl p-7"
              style={{ background: industry.color + "06", border: `1px solid ${industry.color}25` }}
            >
              <div
                className="text-[10px] font-black uppercase tracking-widest mb-3"
                style={{ color: industry.color }}
              >
                The bigbrosai Solution
              </div>
              <p className="text-slate-700 text-base leading-relaxed">{industry.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4"
              style={{ background: industry.color + "12", color: industry.color, border: `1px solid ${industry.color}30` }}
            >
              <Icon size={11} />
              Use Cases
            </div>
            <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-3">
              How bigbrosai powers {industry.label}
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Every automation below is live in our platform — ready to deploy for your business in hours, not weeks.
            </p>
          </div>

          <div className="space-y-6">
            {industry.useCases.map((uc, idx) => (
              <div
                key={uc.title}
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm"
              >
                {/* Use case header */}
                <div
                  className="px-8 py-6 flex items-start gap-4"
                  style={{ borderBottom: `1px solid ${industry.color}15` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: industry.color + "15" }}
                  >
                    <uc.icon size={19} style={{ color: industry.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className="text-[10px] font-black uppercase tracking-widest"
                        style={{ color: industry.color }}
                      >
                        Use Case {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display font-black text-xl text-gray-900 mb-2">{uc.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{uc.description}</p>
                  </div>
                </div>

                {/* Step-by-step */}
                <div className="px-8 py-6">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                    Step-by-step flow
                  </p>
                  <div className="space-y-3">
                    {uc.steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0 mt-0.5"
                          style={{ background: industry.color }}
                        >
                          {i + 1}
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed pt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Quote size={36} className="mx-auto mb-6" style={{ color: industry.color + "50" }} />
          <p className="font-display font-bold text-2xl md:text-3xl text-gray-900 leading-tight mb-8">
            "{industry.quote}"
          </p>
          <div className="flex items-center justify-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-black"
              style={{ background: industry.color }}
            >
              {industry.quoteAuthor[0]}
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">{industry.quoteAuthor}</p>
              <p className="text-sm text-slate-500">
                {industry.quoteRole}, {industry.quoteCompany}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-16 px-6"
        style={{
          background: `linear-gradient(135deg, ${industry.color} 0%, ${industry.color}cc 100%)`,
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-4">
            Ready to transform your {industry.label} business?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join 50,000+ businesses using bigbrosai to automate, engage, and grow on WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="https://calendly.com/founderbbai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white font-semibold text-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
              style={{ color: industry.color }}
            >
              <CalendarDays size={17} />
              Get a Free Demo
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-2 border border-white/40 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── Related Industries ── */}
      {related.length > 0 && (
        <section className="py-14 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-6 text-center">
              Explore Other Industries
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((r) => {
                const RIcon = r.icon;
                return (
                  <Link
                    key={r.slug}
                    href={`/industries/${r.slug}`}
                    className="group bg-white border border-gray-200 rounded-2xl p-6 flex items-center gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: r.color + "15" }}
                    >
                      <RIcon size={18} style={{ color: r.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm">{r.label}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5 truncate">{r.heroTagline}</p>
                    </div>
                    <ArrowRight size={15} className="text-slate-300 group-hover:text-slate-500 transition-colors shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
