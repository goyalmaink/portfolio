"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type Lenis from "lenis";
import { NAV_LINKS, SITE } from "@/lib/data/site";
import { Magnetic } from "@/components/ui/Magnetic";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    const target = document.querySelector(href) as HTMLElement | null;
    if (lenis && target) lenis.scrollTo(target, { offset: -20 });
    else target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={cn(
          "container-x flex items-center justify-between py-5 transition-all duration-500",
        )}
      >
        <a
          href="#top"
          onClick={scrollTo("#top")}
          data-cursor="GO"
          className="font-display text-lg font-bold uppercase tracking-tight"
        >
          Mayank<span className="text-orange">.</span>Goel
        </a>

        <div
          className={cn(
            "hidden items-center gap-1 rounded-full border px-2 py-2 backdrop-blur-md transition-colors duration-500 md:flex",
            scrolled ? "border-charcoal/15 bg-offwhite/70" : "border-transparent bg-transparent",
          )}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={scrollTo(l.href)}
              data-cursor="GO"
              className="rounded-full px-4 py-1.5 font-inter text-sm font-medium transition-colors hover:bg-charcoal hover:text-offwhite"
            >
              {l.label}
            </a>
          ))}
        </div>

        <Magnetic cursor="VIEW">
          <a
            href={SITE.resume}
            download
            className="rounded-full bg-orange px-5 py-2.5 font-inter text-sm font-semibold uppercase tracking-wide text-offwhite transition-colors hover:bg-charcoal"
          >
            Résumé
          </a>
        </Magnetic>
      </nav>
    </motion.header>
  );
}
