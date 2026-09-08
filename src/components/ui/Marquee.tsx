import { cn } from "@/lib/utils";

type Props = {
  items: string[];
  className?: string;
  reverse?: boolean;
  separator?: string;
};

/** Seamless CSS marquee. Content is duplicated and translated -50% for a perfect loop. */
export function Marquee({ items, className, reverse, separator = "✦" }: Props) {
  const row = [...items, ...items];
  return (
    <div className={cn("relative flex w-full overflow-hidden", className)}>
      <div
        className={cn("marquee-track animate-marquee", reverse && "[animation-direction:reverse]")}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span>{item}</span>
            <span className="mx-8 text-orange md:mx-12">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
