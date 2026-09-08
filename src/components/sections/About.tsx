"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TIMELINE } from "@/lib/data/about";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealText } from "@/components/ui/RevealText";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="about" className="bg-beige py-24 md:py-36">
      <div className="container-x">
        <SectionHeading
          index="01"
          label="About"
          title="Software with purpose."
        />
        <RevealText
          as="p"
          text="I'm a full-stack software engineer focused on building scalable and reliable applications. My experience spans frontend development, backend systems, and enterprise products."
          className="mt-8 max-w-2xl font-inter text-lg leading-relaxed text-charcoal/70"
        />

        <div ref={ref} className="relative mt-20 pl-8 md:pl-0">
          {/* vertical rail */}
          <div className="absolute left-0 top-0 h-full w-px bg-charcoal/15 md:left-1/2">
            <motion.div
              style={{ scaleY: lineScale }}
              className="h-full w-full origin-top bg-orange"
            />
          </div>

          <div className="flex flex-col gap-16">
            {TIMELINE.map((node, i) => (
              <TimelineRow key={node.year} node={node} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({
  node,
  i,
}: {
  node: (typeof TIMELINE)[number];
  i: number;
}) {
  const left = i % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`relative grid md:grid-cols-2 md:gap-12 ${left ? "" : "md:[direction:rtl]"}`}
    >
      {/* node dot */}
      <span className="absolute -left-8 top-2 flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2">
        <span className="h-4 w-4 rounded-full border-2 border-charcoal bg-orange" />
      </span>

      <div className={`${left ? "md:text-right" : "md:text-left"} [direction:ltr]`}>
        <div className="font-display text-6xl font-bold text-charcoal/15 md:text-7xl">
          {node.year}
        </div>
      </div>
      <div className="[direction:ltr]">
        <h3 className="font-display text-2xl font-semibold md:text-3xl">{node.title}</h3>
        <p className="mt-2 max-w-md font-inter text-charcoal/70">{node.body}</p>
      </div>
    </motion.div>
  );
}
