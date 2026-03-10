"use client";

import { motion } from "framer-motion";
import { AnimatedSection, itemVariants } from "@/components/ui/AnimatedSection";

export const FeatureCards = () => (
  <section id="features" className="bg-white px-5 pb-16 sm:px-8 md:pb-24 lg:px-10">
    <AnimatedSection className="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-2 md:gap-6">
      <motion.div
        variants={itemVariants}
        className="group relative overflow-hidden rounded-[var(--radius-xl)] bg-[var(--sage)] p-7 transition-shadow duration-300 hover:shadow-lg md:p-10"
      >
        <h3 className="text-[22px] font-bold leading-tight text-[var(--navy)] sm:text-[26px]">
          Grow savings
          <br />
          faster
        </h3>
        <div className="mt-8 flex items-end gap-6">
          <div className="flex flex-col items-start">
            <div className="flex gap-2">
              {[60, 80, 45, 70, 90, 55, 85].map((h, i) => (
                <div key={i} className="w-3 rounded-t-sm bg-[var(--green)]" style={{ height: h }} />
              ))}
            </div>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-white px-5 py-3 shadow-sm">
            <p className="text-[11px] text-[var(--text-muted)]">Balance</p>
            <p className="text-[18px] font-bold text-[var(--navy)]">$19,000</p>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <svg className="h-10 w-10 text-[var(--green)]" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="10" fill="currentColor" fillOpacity="0.15" />
            <path d="M20 12v16M14 16l6-6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg className="h-10 w-10 text-[var(--green)]" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="10" fill="currentColor" fillOpacity="0.15" />
            <path d="M20 12v16M14 16l6-6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="group relative overflow-hidden rounded-[var(--radius-xl)] bg-[var(--sage)] p-7 transition-shadow duration-300 hover:shadow-lg md:p-10"
      >
        <h3 className="text-[22px] font-bold leading-tight text-[var(--navy)] sm:text-[26px]">
          Send across
          <br />
          the global
        </h3>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <div className="rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-white px-5 py-3 shadow-sm">
            <p className="text-[11px] text-[var(--text-muted)]">Sent</p>
            <p className="text-[18px] font-bold text-[var(--navy)]">$25,000</p>
          </div>

          <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-[var(--green)]/30">
            <div className="h-16 w-16 rounded-full bg-[var(--green)]/10">
              <svg className="h-full w-full p-3 text-[var(--green)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </div>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-white px-5 py-3 shadow-sm">
            <p className="text-[11px] text-[var(--text-muted)]">Received</p>
            <p className="text-[18px] font-bold text-[var(--navy)]">$40,000</p>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  </section>
);
