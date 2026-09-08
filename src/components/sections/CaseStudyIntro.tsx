"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data/projects";
import { RevealText } from "@/components/ui/RevealText";

// Relative luminance (sRGB) to decide readable foreground on the accent bg.
function isDark(hex: string) {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const r = parseInt(full.slice(0, 2), 16) / 255;
  const g = parseInt(full.slice(2, 4), 16) / 255;
  const b = parseInt(full.slice(4, 6), 16) / 255;
  const lin = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  const L = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  return L < 0.4;
}

export function CaseStudyIntro({ project }: { project: Project }) {
  const dark = isDark(project.accent);
  const fg = dark ? "text-offwhite" : "text-charcoal";
  const border = dark ? "border-offwhite" : "border-charcoal";

  return (
    <header
      className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36"
      style={{ backgroundColor: project.accent }}
    >
      <div className="noise-overlay" aria-hidden />
      {/* giant ghost index */}
      <span
        aria-hidden
        className={`pointer-events-none absolute -right-4 top-8 select-none font-display text-[38vw] font-bold leading-none md:text-[26vw] ${
          dark ? "text-offwhite/10" : "text-charcoal/10"
        }`}
      >
        {project.index}
      </span>

      <div className="container-x relative z-10">
        <Link
          href="/#work"
          data-cursor="OPEN"
          className={`inline-flex items-center gap-2 font-inter text-sm font-semibold uppercase tracking-widest transition-colors ${
            dark ? "text-offwhite/70 hover:text-offwhite" : "text-charcoal/70 hover:text-charcoal"
          }`}
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          Back to work
        </Link>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {project.tags.map((t) => (
            <span
              key={t}
              className={`rounded-full border-2 px-3 py-1 font-inter text-xs font-semibold uppercase tracking-widest ${border} ${fg}`}
            >
              {t}
            </span>
          ))}
        </div>

        <RevealText
          as="h1"
          text={project.title}
          className={`mt-6 max-w-6xl text-6xl font-bold leading-[0.85] tracking-tightest md:text-[11rem] ${fg}`}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <p className={`max-w-2xl font-inter text-xl leading-relaxed ${dark ? "text-offwhite/80" : "text-charcoal/80"}`}>
            {project.summary}
          </p>
          <dl className={`flex shrink-0 gap-10 font-inter text-sm ${dark ? "text-offwhite/70" : "text-charcoal/70"}`}>
            <div>
              <dt className={`uppercase tracking-widest ${dark ? "text-offwhite/50" : "text-charcoal/50"}`}>Role</dt>
              <dd className={`mt-1 font-semibold ${fg}`}>{project.role}</dd>
            </div>
            <div>
              <dt className={`uppercase tracking-widest ${dark ? "text-offwhite/50" : "text-charcoal/50"}`}>Year</dt>
              <dd className={`mt-1 font-semibold ${fg}`}>{project.year}</dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </header>
  );
}
