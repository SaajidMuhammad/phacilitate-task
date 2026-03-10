"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";
import { AnimatedSection, itemVariants } from "@/components/ui/AnimatedSection";

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-(--border)">
    <button
      onClick={onToggle}
      className="flex w-full cursor-pointer items-center justify-between py-5 text-left transition-colors hover:text-(--green)"
      aria-expanded={isOpen}
    >
      <span className="pr-4 text-[15px] font-medium text-(--navy)">{question}</span>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-(--border) transition-transform duration-200">
        <svg
          className={`h-4 w-4 text-(--text-muted) transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <p className="pb-5 text-[14px] leading-relaxed text-(--text-muted)">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section id="faq" className="bg-white px-5 py-16 sm:px-8 md:py-24 lg:px-10">
      <AnimatedSection className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <motion.div variants={itemVariants}>
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.15em] text-(--text-muted)">
            FAQ
          </span>
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-(--navy) sm:text-[34px] md:text-[40px]">
            Frequently asked
            <br />
            questions
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </AnimatedSection>
    </section>
  );
};
