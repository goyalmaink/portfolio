"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section id="work" className="bg-beige py-24 md:py-36">
      <div className="container-x">
        <SectionHeading index="03" label="Selected Work" title="Projects as experiences." />
      </div>

      <div className="mt-16 border-t-2 border-charcoal">
        {PROJECTS.map((p) => (
          <ProjectRow key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({ project }: { project: (typeof PROJECTS)[number] }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = titleRef.current;
    if (!el) return;
    const r = ref.current!.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    el.style.transform = `translateX(${dx * 24}px)`;
  };
  const reset = () => {
    if (titleRef.current) titleRef.current.style.transform = "translateX(0)";
  };

  return (
    <Link
      ref={ref}
      href={`/work/${project.slug}`}
      onMouseMove={onMove}
      onMouseLeave={reset}
      data-cursor="OPEN"
      className="group relative block border-b-2 border-charcoal"
    >
      {/* accent wipe on hover */}
      <span
        className="absolute inset-0 z-0 origin-bottom scale-y-0 transition-transform duration-500 ease-brand group-hover:scale-y-100"
        style={{ backgroundColor: project.accent }}
        aria-hidden
      />

      <div className="container-x relative z-10 flex flex-col gap-4 py-8 transition-colors duration-500 md:flex-row md:items-center md:justify-between md:py-12 group-hover:text-offwhite">
        <div className="flex items-center gap-6 md:gap-12">
          <span className="font-inter text-sm font-semibold opacity-60">{project.index}</span>
          <span
            ref={titleRef}
            className="font-display text-4xl font-bold leading-none tracking-tightest transition-transform duration-300 ease-out will-change-transform md:text-7xl lg:text-8xl"
          >
            {project.title}
          </span>
        </div>

        <div className="flex items-center justify-between gap-8 md:justify-end">
          <div className="max-w-xs">
            <p className="font-inter text-sm opacity-70">{project.subtitle}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-current px-2.5 py-0.5 font-inter text-[11px] opacity-70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <motion.span className="hidden shrink-0 font-inter text-sm font-semibold uppercase tracking-widest md:inline-flex md:items-center md:gap-2">
            View
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.span>
        </div>
      </div>
    </Link>
  );
}
