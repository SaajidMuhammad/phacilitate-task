"use client";

import { motion } from "framer-motion";
import { AnimatedSection, itemVariants } from "@/components/ui/AnimatedSection";

// Refined Wireframe Icons to match the image exactly
const icons: Record<string, React.ReactNode> = {
  transparency: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="stroke-[#1A2E26] stroke-[1]">
      <circle cx="18" cy="18" r="10" />
      <circle cx="30" cy="18" r="10" />
      <circle cx="18" cy="30" r="10" />
      <circle cx="30" cy="30" r="10" />
    </svg>
  ),
  expansion: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="stroke-[#1A2E26] stroke-[1]">
        <rect x="14" y="14" width="20" height="20" rx="8" transform="rotate(45 24 24)" />
        <rect x="18" y="18" width="12" height="12" rx="4" transform="rotate(45 24 24)" />
    </svg>
  ),
  investment: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="stroke-[#1A2E26] stroke-[1]">
      <circle cx="24" cy="24" r="12" />
      <circle cx="24" cy="26" r="8" />
      <circle cx="24" cy="28" r="4" />
    </svg>
  ),
};

const VALUES_DATA = [
  {
    id: "transparency",
    title: "Transparency",
    description: "A departure from the industry norm of ambiguity, Montfort, as a public and finest company.",
    theme: "white"
  },
  {
    id: "expansion",
    title: "Creative expansion",
    description: "Ascone proprietary fintech platform helps our subsidiaries locate and manage investments.",
    theme: "white"
  },
  {
    id: "investment",
    title: "Private Credit Investments",
    description: "We provide access to unique private credit investments; a rare but valuable part of a sound investment portfolio.",
    theme: "colored"
  }
];

export const Values = () => (
  <section id="benefits" className="bg-white px-6 py-24">
    <AnimatedSection className="mx-auto max-w-[1200px]">
      {/* Header Grid */}
      <div className="mb-20 grid items-end gap-10 md:grid-cols-2">
        <motion.div variants={itemVariants}>
          <span className="mb-6 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#3D5A4E]">
            Values
          </span>
          <h2 className="text-[40px] font-medium leading-[1.1] tracking-tight text-[#111827] md:text-[52px]">
            Make your <br /> spend, Well-spent
          </h2>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex md:justify-end">
          <p className="max-w-[380px] text-[16px] leading-relaxed text-gray-500 md:text-left">
            Manages a diversified group of specialized private credit brands with efficient tech-enabled processes.
          </p>
        </motion.div>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {VALUES_DATA.map((value) => (
          <motion.div
            key={value.title}
            variants={itemVariants}
            className={`relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-sm border p-10 transition-all duration-500 hover:shadow-xl ${
              value.theme === 'colored' 
                ? "border-transparent bg-[#EBE9DB]" 
                : "border-gray-100 bg-white shadow-sm"
            }`}
          >
            {/* Special Top-Right Curve for the colored card */}
            {value.theme === 'colored' && (
              <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-[100px] bg-white/40" />
            )}

            <div className="relative z-10">
              <div className="mb-12">{icons[value.id]}</div>
              <h3 className="text-[20px] font-medium text-[#1A2E26]">{value.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-500">
                {value.description}
              </p>
            </div>

            {/* Bottom Arrow Button */}
            <div className="relative z-10">
              <button className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                value.theme === 'colored' 
                ? "bg-[#21352E] border-transparent text-white" 
                : "bg-white border-gray-200 text-[#1A2E26] hover:bg-gray-50"
              }`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  </section>
);