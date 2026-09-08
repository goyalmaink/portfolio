"use client";

import { useRef, type ElementType } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  once?: boolean;
};

/**
 * Word-by-word reveal. Each word rises from a clipped mask on scroll-in.
 */
export function RevealText({ text, as = "p", className, delay = 0, once = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-12% 0px" });
  const words = text.split(" ");
  const MotionTag = motion(as as ElementType);

  return (
    <MotionTag ref={ref} className={cn("flex flex-wrap", className)} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.25em] inline-block overflow-hidden py-[0.05em]" aria-hidden>
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : { y: "110%" }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.045,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
