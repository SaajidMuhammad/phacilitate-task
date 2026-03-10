"use client";

import { motion } from "framer-motion";
import { AnimatedSection, itemVariants } from "@/components/ui/AnimatedSection";

export const Stats = () => (
  <section className="bg-(--green) px-5 py-16 sm:px-8 md:py-24 lg:px-10">
    <AnimatedSection className="mx-auto grid max-w-[1200px] items-end gap-10 md:grid-cols-3 md:gap-8">
      <motion.div variants={itemVariants} className="flex flex-col justify-end">
        <p className="text-[56px] font-medium leading-none text-white md:text-[72px] lg:text-[80px]">
          $14B
        </p>
        <p className="mt-3 text-[13px] text-white/60 tracking-wide">
          Funds and syndicates
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col justify-end">
        <p className="text-[56px] font-medium leading-none text-white md:text-[72px] lg:text-[80px]">
          23k+
        </p>
        <p className="mt-3 text-[13px] text-white/60 tracking-wide">
          Raised by active startups
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col justify-end md:pl-6 md:border-white/20"
      >
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50">
          Numbers
        </p>
        <h2 className="text-[28px] font-medium leading-[1.15] text-white sm:text-[32px] md:text-[38px] lg:text-[44px]">
          Market and build the solutions
        </h2>
      </motion.div>
    </AnimatedSection>
  </section>
);
