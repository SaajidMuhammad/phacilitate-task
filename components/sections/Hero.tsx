"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export const Hero = () => (
  <section className="bg-white px-5 pt-12 pb-0 sm:px-8 md:pt-16 lg:px-10 lg:pt-20">
    <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-2 lg:gap-12">
      <div className="max-w-lg pt-4 md:pt-8">
        <motion.span
          {...fadeUp(0)}
          className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.10em] text-(--green-light)"
        >
          Try It Now!
        </motion.span>

        <motion.h1
          {...fadeUp(0.05)}
          className="text-[36px] leading-[1.1] font-bold tracking-tight text-(--navy) sm:text-[44px] md:text-[52px] lg:text-[58px]"
        >
          Change the way
          <br />
          you use your
          <br />
          <span
            className="text-(--green)"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
            }}
          >
            money
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.12)}
          className="mt-5 max-w-sm text-[15px] leading-relaxed text-(--text-muted)"
        >
          From your everyday spending, to plan for your future with savings and
          investments. Ascone helps you get more from your money.
        </motion.p>

        <motion.div {...fadeUp(0.2)} className="mt-7 flex items-center gap-5">
          <Button size="md" href="#">
            Get Started Now
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    className="h-5 w-5 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[14px] font-bold text-(--text-foreground)">
                5.0
              </p>
            </div>
            <p className="text-[14px] text-(--text-muted)">
              From 120+ <span className="font-bold text-black underline">reviews</span>{" "}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="relative flex items-start justify-center lg:justify-end"
      >
        <div className="relative w-full max-w-[480px]">
          <div className="relative mx-auto w-[200px] sm:w-[220px] md:w-[240px]">
            <div className="aspect-[9/18] rounded-[28px] border-2 border-(--border) bg-(--sage) p-2 shadow-lg">
              <div className="flex h-full flex-col rounded-[22px] bg-white p-3">
                <div className="mb-2 flex items-center justify-between">
                  <div className="h-2 w-10 rounded-full bg-(--border)" />
                  <div className="h-5 w-5 rounded-full bg-(--sage)" />
                </div>
                <div className="mb-3 mt-2">
                  <div className="h-2 w-20 rounded-full bg-(--border)" />
                  <div className="mt-1.5 h-4 w-14 rounded bg-(--text-primary) text-[8px] font-bold leading-[16px] text-white text-center">
                    $4,250
                  </div>
                </div>
                <div className="flex-1 rounded-xl bg-(--sage)/30 p-2">
                  <div className="flex h-full flex-col justify-end gap-1">
                    {[40, 65, 50, 80, 60, 75, 90].map((h, i) => (
                      <div key={i} className="flex items-end gap-1">
                        <div
                          className="w-full rounded-sm bg-(--green)"
                          style={{
                            height: `${h}%`,
                            minHeight: 3,
                            maxHeight: 20,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="absolute top-4 right-0 rounded-lg border border-(--border-light) bg-white p-4 shadow-md sm:right-2"
          >
            <p className="text-[26px] font-bold text-(--green)">56+</p>
            <p className="text-[11px] text-(--text-muted)">Currencies</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
            className="absolute top-28 right-[-10px] rounded-lg border border-(--border-light) bg-white px-4 py-3 shadow-md sm:right-0"
          >
            <p className="text-[22px] font-bold text-(--navy)">$196,000</p>
            <p className="text-[11px] text-(--text-muted)">Users Active</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
            className="absolute bottom-16 right-0 rounded-lg border border-(--border-light) bg-white px-4 py-3 shadow-md sm:right-4"
          >
            <p className="text-[11px] text-(--text-muted)">Saving</p>
            <div className="mt-1 flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-(--sage)" />
              <div className="flex flex-col">
                <div className="h-1 w-12 rounded-full bg-(--green)" />
                <div className="mt-0.5 h-1 w-8 rounded-full bg-(--sage)" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);
