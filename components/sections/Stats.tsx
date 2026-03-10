"use client";

import { motion } from "framer-motion";
import { AnimatedSection, itemVariants } from "@/components/ui/AnimatedSection";

export const Stats = () => (
  <section className="bg-[var(--green)] px-5 py-16 sm:px-8 md:py-24 lg:px-10">
    <AnimatedSection className="mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-2 md:gap-16">
      <div className="flex flex-wrap gap-8 md:gap-12">
        <motion.div variants={itemVariants}>
          <p className="text-[48px] font-bold leading-none text-white md:text-[64px]">$14B</p>
          <p className="mt-2 text-[13px] text-white/60">Fund of Indication</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <p className="text-[48px] font-bold leading-none text-white md:text-[64px]">23k+</p>
          <p className="mt-2 text-[13px] text-white/60">Raised by a new startup</p>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="max-w-md md:ml-auto">
        <h2 className="text-[28px] font-bold leading-[1.15] text-white sm:text-[34px] md:text-[40px]">
          Market and build the solutions
        </h2>
      </motion.div>
    </AnimatedSection>
  </section>
);
