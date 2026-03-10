"use client";

import { motion } from "framer-motion";
import { VALUES } from "@/lib/constants";
import { AnimatedSection, itemVariants } from "@/components/ui/AnimatedSection";

const icons: Record<string, React.ReactNode> = {
  transparency: (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="8" fill="var(--sage)" />
      <path d="M14 20h12M20 14v12" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  expansion: (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="8" fill="var(--sage)" />
      <path d="M15 25l10-10M25 15v6M25 15h-6" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  investment: (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="8" fill="var(--sage)" />
      <path d="M14 26V20M20 26V16M26 26V12" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
};

export const Values = () => (
  <section id="benefits" className="bg-[var(--bg)] px-5 py-16 sm:px-8 md:py-24 lg:px-10">
    <AnimatedSection className="mx-auto max-w-[1200px]">
      <div className="mb-12 grid items-end gap-6 md:mb-16 md:grid-cols-2">
        <motion.div variants={itemVariants}>
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
            Values
          </span>
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-[var(--navy)] sm:text-[34px] md:text-[40px]">
            Make your
            <br />
            spend, Well-spent
          </h2>
        </motion.div>
        <motion.p
          variants={itemVariants}
          className="max-w-md text-[15px] leading-relaxed text-[var(--text-muted)] md:text-right"
        >
          Manage a diversified group of securities and/or credit transfer with almost half-standard complaints.
        </motion.p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
        {VALUES.map((value) => (
          <motion.div
            key={value.title}
            variants={itemVariants}
            className="rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
          >
            <div className="mb-5">{icons[value.icon]}</div>
            <h3 className="text-[16px] font-semibold text-[var(--navy)]">{value.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-muted)]">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  </section>
);
