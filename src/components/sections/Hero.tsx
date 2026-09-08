"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { RotatingBadge } from "@/components/ui/RotatingBadge";

const LEFT = ["Software Engineer", "Full Stack Developer", "Building modern digital products."];
const RIGHT = ["React", "Next.js", "Node.js", "TypeScript", "Microservices", "AI"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yType = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-orange pb-10 pt-28 text-charcoal"
    >
      {/* Giant background typography — desktop only */}
      <motion.div
        style={{ y: yType, opacity }}
        className="pointer-events-none absolute inset-0 z-0 hidden flex-col items-center justify-center px-2 md:flex"
        aria-hidden
      >
        <span className="whitespace-nowrap font-display text-[17vw] font-bold leading-[0.82] tracking-tightest text-offwhite sm:text-[20vw] md:text-[22vw] lg:text-[24vw]">
          MAYANK
        </span>
        <span className="whitespace-nowrap font-display text-[17vw] font-bold leading-[0.82] tracking-tightest text-offwhite sm:text-[20vw] md:text-[22vw] lg:text-[24vw]">
          GOEL
        </span>
      </motion.div>

      {/* Name heading — mobile only */}
      <div className="container-x relative z-20 md:hidden" aria-hidden>
        <h2 className="font-display text-[16vw] font-bold leading-[0.85] tracking-tightest text-offwhite">
          MAYANK
          <br />
          GOEL
        </h2>
      </div>

      {/* Overlaid content grid */}
      <div className="container-x relative z-20 grid grid-cols-1 items-end gap-8 pt-8 md:mt-auto md:grid-cols-3">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 md:order-1"
        >
          {LEFT.map((line, i) => (
            <p
              key={i}
              className={
                i === LEFT.length - 1
                  ? "mt-2 max-w-xs font-inter text-sm text-charcoal/70"
                  : "font-display text-2xl font-semibold leading-tight md:text-3xl"
              }
            >
              {line}
            </p>
          ))}
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="#work" cursor="VIEW">View Work</ButtonLink>
            <ButtonLink href={SITE.resume} download variant="outline" cursor="VIEW">
              Résumé
            </ButtonLink>
          </div>
        </motion.div>

        {/* Middle — badge */}
        <div className="order-1 flex justify-center md:order-2">
          <RotatingBadge />
        </div>

        {/* Right — stack + stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-3 md:text-right"
        >
          <ul className="ml-auto flex flex-wrap gap-x-4 gap-y-1 font-inter text-sm font-medium md:justify-end">
            {RIGHT.map((s) => (
              <li key={s} className="text-charcoal/80">
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-8 md:justify-end">
            <div>
              <div className="font-display text-4xl font-bold md:text-5xl">13+</div>
              <div className="font-inter text-xs uppercase tracking-widest text-charcoal/60">
                Product lines
              </div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold md:text-5xl">2+</div>
              <div className="font-inter text-xs uppercase tracking-widest text-charcoal/60">
                Years shipping
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 font-inter text-[10px] uppercase tracking-[0.3em] text-charcoal/50"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
