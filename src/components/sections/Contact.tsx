"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/data/site";
import { RevealText } from "@/components/ui/RevealText";
import { Magnetic } from "@/components/ui/Magnetic";
import { Marquee } from "@/components/ui/Marquee";

const CHANNELS = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "LinkedIn", value: "/in/goyalmaink", href: SITE.linkedin, external: true },
  { label: "GitHub", value: "/goyalmaink", href: SITE.github, external: true },
  { label: "Résumé", value: "Download PDF", href: SITE.resume, download: true },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-orange text-charcoal">
      <div className="border-b-2 border-charcoal py-6">
        <Marquee
          items={["OPEN TO OPPORTUNITIES", "LET'S BUILD SOMETHING", "SAY HELLO"]}
          className="font-display text-3xl font-bold uppercase tracking-tight md:text-5xl"
        />
      </div>

      <div className="container-x py-24 md:py-36">
        <p className="font-inter text-sm font-semibold uppercase tracking-[0.3em] text-charcoal/60">
          ( Contact )
        </p>

        <RevealText
          as="h2"
          text="Let's build something amazing."
          className="mt-6 max-w-6xl text-6xl font-bold leading-[0.9] tracking-tightest md:text-8xl lg:text-[10rem]"
        />

        <div className="mt-16 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <a
            href={`mailto:${SITE.email}`}
            data-cursor="GO"
            className="group inline-flex items-center gap-4 font-display text-3xl font-bold underline-offset-8 hover:underline md:text-5xl"
          >
            {SITE.email}
            <span className="transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1">↗</span>
          </a>
          <p className="max-w-sm font-inter text-charcoal/70">
            Currently a Software Developer at EY building the ABCD platform — and open to talking
            about ambitious engineering work.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border-2 border-charcoal bg-charcoal md:grid-cols-4">
          {CHANNELS.map((c, i) => (
            <Magnetic key={c.label} cursor="GO">
              <motion.a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                download={c.download}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="flex h-full flex-col justify-between gap-8 bg-orange p-6 transition-colors duration-300 hover:bg-charcoal hover:text-offwhite md:p-8"
              >
                <span className="font-inter text-xs font-semibold uppercase tracking-[0.25em] opacity-60">
                  {c.label}
                </span>
                <span className="font-display text-lg font-semibold md:text-xl">{c.value}</span>
              </motion.a>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
}
