"use client";

import { motion } from "framer-motion";

/** Circular "LET'S TALK" badge with rotating text ring, like the reference. */
export function RotatingBadge() {
  return (
    <a
      href="#contact"
      data-cursor="GO"
      className="relative flex h-32 w-32 items-center justify-center md:h-40 md:w-40"
      aria-label="Let's talk — go to contact"
    >
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        aria-hidden
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0"
          />
        </defs>
        <text className="fill-charcoal font-inter text-[13px] font-semibold uppercase tracking-[0.28em]">
          <textPath href="#circlePath" startOffset="0%">
            LET&apos;S BUILD SOMETHING · LET&apos;S BUILD SOMETHING ·
          </textPath>
        </text>
      </motion.svg>
      <span className="flex h-[58%] w-[58%] items-center justify-center rounded-full bg-charcoal text-offwhite transition-colors duration-300 group-hover:bg-orange">
        <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
          <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}
