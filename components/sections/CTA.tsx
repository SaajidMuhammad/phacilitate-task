"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, itemVariants } from "@/components/ui/AnimatedSection";
import Image from "next/image";

export const CTA = () => (
  <section className="bg-(--green) mx-auto max-w-[1200px]">
    <AnimatedSection className="grid items-center gap-10 md:grid-cols-2 md:gap-16 relative">
      <div className="py-16 md:py-24  px-5  sm:px-8  lg:px-18">
        <motion.h2
          variants={itemVariants}
          className="text-[36px] font-medium leading-[1.15] text-white sm:text-[34px] md:text-[44px]"
        >
          Change the way you
          <br />
          use your{" "}
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
            }}
          >
            money
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-sm text-[15px] font-medium leading-relaxed text-white/60"
        >
          Join over million people who use Ascone. Process deposits and withdraw
          anytime, anywhere you need.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-7">
          <Button
            variant="ghost"
            size="lg"
            href="#"
            className="bg-white text-(--green) hover:bg-(--cream)"
          >
            Get Started Now
          </Button>
        </motion.div>
      </div>

      <div className="absolute top-10 right-4 ">
        <motion.div
          variants={itemVariants}
          className="hidden items-center  justify-center md:flex "
        >
          <div className="relative z-10 flex gap-1">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="h-32 w-32 bg-white"
                style={{
                  clipPath:
                    "polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%)",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
      <div className="h-60 w-72 mt-6 bg-(--cream) absolute bottom-0 right-0 rounded-tr-[40%]">
        <Image
          src="/images/phone-hand.png"
          width={1000}
          height={1000}
          alt="Interface"
          className="h-full w-full object-contain scale-100"
        />
      </div>
    </AnimatedSection>
  </section>  
);
