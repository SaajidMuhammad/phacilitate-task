"use client";

import { motion } from "framer-motion";
import { PARTNER_LOGOS } from "@/lib/constants";
import { itemVariants, AnimatedSection } from "@/components/ui/AnimatedSection";

const logoStyles: Record<string, string> = {
  loom: "font-bold tracking-tight",
  HubSpot: "font-bold",
  OpenAI: "font-bold",
  Raycast: "font-medium",
  zenefits: "font-medium",
};

export const LogoStrip = () => (
  <section className="bg-white px-5 py-12 sm:px-8 md:py-20 lg:px-10">
    <AnimatedSection className="mx-auto max-w-[1200px] border-y border-(--border-light) py-8">
      <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between md:gap-12">
        {PARTNER_LOGOS.map((name) => (
          <motion.span
            key={name}
            variants={itemVariants}
            className={`text-lg text-(--green) opacity-60 transition-opacity duration-200 hover:opacity-100 md:text-2xl ${logoStyles[name] ?? ""}`}
          >
            {name}
          </motion.span>
        ))}
      </div>
    </AnimatedSection>
  </section>
);
