import { Marquee } from "@/components/ui/Marquee";

const ITEMS = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "NODE.JS",
  "KOTLIN",
  "MICROSERVICES",
  "DESIGN SYSTEMS",
  "GENAI",
  "ENTERPRISE SCALE",
];

export function MarqueeStrip() {
  return (
    <div className="border-y-2 border-charcoal bg-beige py-5 font-display text-3xl font-semibold uppercase tracking-tight text-charcoal md:text-5xl">
      <Marquee items={ITEMS} />
    </div>
  );
}
