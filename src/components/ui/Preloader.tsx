"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAME = "MAYANK";

export function Preloader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    // Only show once per browser session.
    if (typeof window !== "undefined" && sessionStorage.getItem("preloaded")) {
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";

    const letters = setInterval(() => {
      setCount((c) => {
        if (c >= NAME.length) {
          clearInterval(letters);
          return c;
        }
        return c + 1;
      });
    }, 130);

    const finish = setTimeout(() => {
      setDone(true);
      sessionStorage.setItem("preloaded", "1");
      document.body.style.overflow = "";
    }, 2400);

    return () => {
      clearInterval(letters);
      clearTimeout(finish);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-charcoal text-offwhite"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-[16vw] font-bold leading-none tracking-tightest md:text-[12vw]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {NAME.slice(0, count)}
              <span className="text-orange">.</span>
            </motion.h1>
          </div>
          <motion.div
            className="mt-6 flex items-center gap-3 font-inter text-xs uppercase tracking-[0.3em] text-offwhite/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <span className="h-px w-10 bg-orange" />
            Building the future…
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
