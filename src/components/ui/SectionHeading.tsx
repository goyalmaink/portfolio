import { RevealText } from "./RevealText";
import { cn } from "@/lib/utils";

type Props = {
  index?: string;
  label: string;
  title: string;
  className?: string;
  dark?: boolean;
};

export function SectionHeading({ index, label, title, className, dark }: Props) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="flex items-center gap-4">
        {index && (
          <span className="font-inter text-sm font-semibold text-orange">({index})</span>
        )}
        <span
          className={cn(
            "font-inter text-xs font-semibold uppercase tracking-[0.3em]",
            dark ? "text-offwhite/60" : "text-charcoal/50",
          )}
        >
          {label}
        </span>
        <span className={cn("h-px flex-1", dark ? "bg-offwhite/20" : "bg-charcoal/20")} />
      </div>
      <RevealText
        as="h2"
        text={title}
        className={cn(
          "max-w-5xl text-5xl font-bold leading-[0.95] md:text-7xl lg:text-8xl",
          dark ? "text-offwhite" : "text-charcoal",
        )}
      />
    </div>
  );
}
