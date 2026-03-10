"use client";

import { motion } from "framer-motion";
import { AnimatedSection, itemVariants } from "@/components/ui/AnimatedSection";

export const AboutUs = () => (
  <section id="about" className="bg-white px-5 py-16 sm:px-8 md:py-24 lg:px-10">
    <AnimatedSection className="mx-auto max-w-[1200px] text-center">
      <motion.span
        variants={itemVariants}
        className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.15em] text-(--text-muted)"
      >
        About Us
      </motion.span>

      <motion.h2
        variants={itemVariants}
        className="mx-auto max-w-md text-[28px] font-bold leading-[1.15] tracking-tight text-(--navy) sm:text-[34px] md:text-[40px]"
      >
        One app for all your money things
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-(--text-muted)"
      >
        Remove all the friction from your financial life and make every dollar count.
      </motion.p>
    </AnimatedSection>
  </section>
);
