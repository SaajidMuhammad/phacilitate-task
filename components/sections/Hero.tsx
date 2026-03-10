"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export const Hero = () => (
  <section className="bg-white px-5 pt-8 pb-0 sm:px-8 md:pt-12 lg:px-10 lg:pt-12">
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
              From 120+{" "}
              <span className="font-bold text-black underline">
                reviews
              </span>{" "}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="grid w-full max-w-[550px] grid-cols-2 overflow-hidden bg-white "
      >
        <div className="relative aspect-square overflow-hidden bg-(--bg-gray)">
          <Image
            src="/images/phone-hand.png"
            width={1000}
            height={1000}
            alt="Interface"
            className="h-full w-full object-contain scale-100"
          />
          <div className="absolute top-8 right-8 flex flex-col items-end gap-2">
            <div className="h-[6px] w-16 rounded-full bg-white/90" />
            <div className="h-[6px] w-10 rounded-full bg-white/60" />
          </div>
        </div>

        <div className="overflow-hidden rounded-l-full bg-[#EBE9DB] p-8 flex flex-col justify-between">
          <div className="relative z-10">
            <h3 className="text-[3.5rem] pl-32 font-medium tracking-tight text-[#1A2E26] leading-none">
              56+
            </h3>
            <p className="mt-8 text-xl font-medium text-[#1A2E26]/80">
              Currencies
            </p>
          </div>

          <div className="relative self-end opacity-60">
            <svg
              width="70"
              height="70"
              viewBox="0 0 100 100"
              className="stroke-[#1A2E26] fill-none stroke-[1.8]"
            >
              <circle cx="50" cy="50" r="45" />
              <ellipse cx="50" cy="50" rx="18" ry="45" />
              <line x1="5" y1="50" x2="95" y2="50" />
              <line x1="12" y1="30" x2="88" y2="30" />
              <line x1="12" y1="70" x2="88" y2="70" />
            </svg>
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden bg-[#D9E3DE] rounded-tr-[50%] p-8 flex flex-col justify-between">
          <div className="relative z-10 flex gap-1">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="h-10 w-10 bg-[#1A2E26]"
                style={{
                  clipPath:
                    "polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%)",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-end gap-6">
            <p className="text-xl font-medium text-[#1A2E26]/90">
              Users Active
            </p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-12 w-12 rounded-full border-[3px] border-[#D9E3DE] bg-gray-300 overflow-hidden shadow-sm"
                  >
                    <Image
                      src={`https://i.pravatar.cc/150?u=acc${i}`}
                      alt="user"
                      width={150}
                      height={150}
                    />
                  </div>
                ))}
              </div>
              <button className="h-12 w-12 -ml-6 rounded-full bg-[#1A2E26] border-[3px] border-[#D9E3DE] flex items-center justify-center text-white transition-transform hover:scale-105">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden bg-[#243B33] p-8 flex flex-col justify-between text-white">
          <div className="flex items-start justify-between">
            <h3 className="text-3xl font-medium tracking-tight">$196,000</h3>
            <div className="pt-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M12 19V5M12 5L5 12M12 5L19 12" />
              </svg>
            </div>
          </div>

          <div className="flex-1 flex items-center pt-8">
            <svg viewBox="0 0 140 60" className="w-full h-24 overflow-visible">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                d="M0,50 L20,45 L35,55 L55,35 L75,45 L90,20 L110,30 L140,5"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="text-right">
            <p className="text-white text-lg font-medium">Saving</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
