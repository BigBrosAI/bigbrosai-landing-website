import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";

const CLIENTS = [
  { name: "Anytime Fitness", src: "/clients/anytime-fitness.png" },
  { name: "Capsule Cabs",    src: "/clients/capsulecabs.png" },
  { name: "Stockzy",         src: "/clients/stockzy.webp" },
  { name: "StockTutor",      src: "/clients/stocktutor.webp" },
  { name: "EasyLauncher",    src: "/clients/easylauncher.png" },
  { name: "Simpkins School", src: "/clients/simpkins-school.png" },
];

// Duplicate for seamless loop
const TRACK = [...CLIENTS, ...CLIENTS];

export function ClientsSection() {
  return (
    <Section bg="alt">
      <SectionHeader
        eyebrow="Trusted by Businesses"
        title={<>Brands that <span className="text-gradient">grow with bigbrosai</span></>}
        subtitle="From fitness studios to fintech startups — businesses of all sizes rely on bigbrosai to reach their customers."
      />

      <div className="overflow-hidden">
        <div
          className="flex gap-6 w-max"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          {TRACK.map(({ name, src }, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-44 h-20 rounded-2xl border border-gray-200 bg-white px-5 py-4 shrink-0"
            >
              <Image
                src={src}
                alt={name}
                width={130}
                height={48}
                className="object-contain max-h-10 w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
