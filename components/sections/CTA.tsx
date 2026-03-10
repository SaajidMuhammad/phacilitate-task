"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, itemVariants } from "@/components/ui/AnimatedSection";

export const CTA = () => (
  <section className="bg-(--green) px-5 py-16 sm:px-8 md:py-24 lg:px-10">
    <AnimatedSection className="mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-2 md:gap-16">
      <div>
        <motion.h2
          variants={itemVariants}
          className="text-[28px] font-bold leading-[1.15] text-white sm:text-[34px] md:text-[44px]"
        >
          Change the way you
          <br />
          use your{" "}
          <span style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}>
            money
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/60"
        >
          Join over 7,000 people who use Ascone. Process deposits and withdraw anytime, anywhere you need.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-7">
          <Button
            variant="primary"
            size="lg"
            href="#"
            className="bg-white text-(--green) hover:bg-(--cream)"
          >
            Get Started Now
          </Button>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="hidden items-center justify-center md:flex"
      >
        <div className="relative">
          <svg className="h-48 w-48 text-white/10 lg:h-56 lg:w-56" viewBox="0 0 200 200" fill="none">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const cx = 100 + 70 * Math.cos(angle);
              const cy = 100 + 70 * Math.sin(angle);
              return (
                <g key={i}>
                  <line
                    x1="100"
                    y1="100"
                    x2={cx}
                    y2={cy}
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx={cx} cy={cy} r="4" fill="currentColor" />
                </g>
              );
            })}
            <circle cx="100" cy="100" r="20" fill="currentColor" />
          </svg>
          <svg className="absolute top-[-20px] right-[-20px] h-20 w-20 text-white/20" viewBox="0 0 80 80" fill="none">
            <path d="M40 5l5 15h15l-12 9 5 15-13-10-13 10 5-15-12-9h15z" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-[-10px] left-[-10px] h-16 w-16 text-white/15" viewBox="0 0 64 64" fill="none">
            <path d="M32 4l4 12h12l-10 7 4 12-10-8-10 8 4-12-10-7h12z" fill="currentColor" />
          </svg>
        </div>
      </motion.div>
    </AnimatedSection>
  </section>
);
