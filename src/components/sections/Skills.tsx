"use client";

import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/lib/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="bg-beige py-24 md:py-36">
      <div className="container-x">
        <SectionHeading index="04" label="Capabilities" title="A stack with range." />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border-2 border-charcoal bg-charcoal md:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="bg-beige p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl font-semibold md:text-3xl">
                  {group.category}
                </h3>
                <span className="font-inter text-xs uppercase tracking-widest text-charcoal/50">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-1 font-inter text-sm text-charcoal/60">{group.blurb}</p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03, duration: 0.4 }}
                    whileHover={{ y: -4, backgroundColor: "#FF6A00", color: "#FAF9F6" }}
                    data-cursor="GO"
                    className="cursor-none rounded-full border-2 border-charcoal bg-transparent px-4 py-2 font-inter text-sm font-medium text-charcoal transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
