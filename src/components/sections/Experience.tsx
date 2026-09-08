"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="bg-charcoal py-24 text-offwhite md:py-36">
      <div className="container-x">
        <SectionHeading index="02" label="Experience" title="Where I've shipped." dark />

        <div className="mt-16 border-t border-offwhite/15">
          {EXPERIENCE.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.company} className="border-b border-offwhite/15">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  data-cursor={isOpen ? "VIEW" : "OPEN"}
                  className="group flex w-full items-center justify-between gap-6 py-8 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-1 flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
                    <h3 className="font-display text-3xl font-semibold transition-colors group-hover:text-orange md:text-5xl">
                      {item.company}
                    </h3>
                    <span className="font-inter text-sm text-offwhite/60">{item.role}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="hidden font-inter text-sm text-offwhite/50 md:block">
                      {item.period}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-offwhite/30 text-2xl"
                    >
                      +
                    </motion.span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-10 md:grid-cols-[1fr_1.4fr]">
                        <p className="font-inter text-offwhite/70">{item.summary}</p>
                        <div>
                          <ul className="flex flex-col gap-3">
                            {item.highlights.map((h) => (
                              <li key={h} className="flex gap-3 font-inter text-sm text-offwhite/80">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                                {h}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {item.stack.map((s) => (
                              <span
                                key={s}
                                className="rounded-full border border-offwhite/20 px-3 py-1 font-inter text-xs text-offwhite/70"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
