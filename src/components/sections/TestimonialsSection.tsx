import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TESTIMONIALS } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <Section bg="white">
      <SectionHeader
        eyebrow="Customer Stories"
        title={<>Businesses that <span className="text-gradient">love bigbrosai</span></>}
        subtitle="50,000+ businesses trust bigbrosai to power their customer communication every day."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </Section>
  );
}
