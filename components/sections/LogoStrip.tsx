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
  <section className="border-y border-(--border-light) bg-white px-5 py-8 sm:px-8 md:py-10 lg:px-10">
    <AnimatedSection className="mx-auto max-w-[1200px]">
      <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between md:gap-12">
        {PARTNER_LOGOS.map((name) => (
          <motion.span
            key={name}
            variants={itemVariants}
            className={`text-lg text-(--navy) opacity-60 transition-opacity duration-200 hover:opacity-100 md:text-xl ${logoStyles[name] ?? ""}`}
          >
            {name === "OpenAI" ? (
              <span className="flex items-center gap-1">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0011.053.001a6.046 6.046 0 00-5.77 4.217 6.001 6.001 0 00-4.027 2.907 6.046 6.046 0 00.746 7.097 5.98 5.98 0 00.516 4.911 6.046 6.046 0 006.51 2.9A6.065 6.065 0 0012.947 24a6.046 6.046 0 005.77-4.217 6.001 6.001 0 004.027-2.907 6.046 6.046 0 00-.746-7.097" />
                </svg>
                OpenAI
              </span>
            ) : (
              name
            )}
          </motion.span>
        ))}
      </div>
    </AnimatedSection>
  </section>
);
