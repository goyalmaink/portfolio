import Link from "next/link";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Magnetic";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  download?: boolean;
  external?: boolean;
  className?: string;
  cursor?: "VIEW" | "OPEN" | "GO";
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  download,
  external,
  className,
  cursor = "VIEW",
}: Props) {
  const base =
    "group relative inline-flex items-center gap-3 rounded-full px-7 py-4 font-inter text-sm font-semibold uppercase tracking-widest transition-colors duration-300";
  const styles =
    variant === "solid"
      ? "bg-charcoal text-offwhite hover:bg-orange"
      : "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-offwhite";

  const content = (
    <span className="flex items-center gap-3">
      {children}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );

  return (
    <Magnetic cursor={cursor}>
      <Link
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn(base, styles, className)}
      >
        {content}
      </Link>
    </Magnetic>
  );
}
