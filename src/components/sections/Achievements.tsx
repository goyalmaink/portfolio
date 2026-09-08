"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/data/about";
import { Counter } from "@/components/ui/Counter";
import { Marquee } from "@/components/ui/Marquee";

export function Achievements() {
  return (
    <section className="bg-orange py-20 text-charcoal">
      <div className="border-b-2 border-charcoal pb-10">
        <Marquee
          items={["BY THE NUMBERS", "REAL PRODUCTION IMPACT", "ENTERPRISE SCALE"]}
          className="font-display text-2xl font-semibold uppercase tracking-tight md:text-4xl"
        />
      </div>

      <div className="container-x mt-14 grid grid-cols-2 gap-y-12 md:grid-cols-5">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="text-center"
          >
            <div className="font-display text-6xl font-bold leading-none md:text-7xl">
              <Counter to={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-3 font-inter text-xs uppercase tracking-widest text-charcoal/70">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
