"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutUs = () => (
  <section className="bg-white px-6 py-24 font-sans">
    <div className="mb-20 text-center">
      <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-(--green)">
        About Us
      </span>
      <h2 className="mt-5 text-[44px] font-medium leading-[1.15] tracking-tight text-(--text-primary) md:text-[54px]">
        One app for all your <br /> money things
      </h2>
      <p className="mx-auto mt-6 max-w-[480px] text-[17px] leading-relaxed text-(--text-secondary)">
        Remove all the friction that stands in the way of your money goals.
      </p>
    </div>

    <div className="mx-auto grid max-w-[1140px] gap-2 lg:grid-cols-[340px_1fr]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative flex h-[520px] w-[320px] flex-col overflow-hidden bg-(--green) p-10 text-white"
      >
        <h3 className="text-[32px] font-medium leading-[1.1] tracking-tight text-(--white)">
          Grow savings <br /> faster
        </h3>

        <div className="relative mt-auto flex w-full flex-col items-center justify-end">
          <p className="mb-4 text-[20px] font-normal opacity-90">$12,000</p>

          <div className="flex items-end gap-[10px]">
            <div className="h-9 w-[22px] bg-white/15" />
            <div className="h-16 w-[22px] bg-white/15" />
            <div className="h-24 w-[22px] bg-white/15" />

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.55, ease: "easeOut" }}
              className="flex items-end"
            >
              <svg
                width="56"
                height="172"
                viewBox="0 0 56 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 0 L56 75 L36 75 L36 172 L20 172 L20 75 L0 75 Z"
                  fill="#D4EDE3"
                />
              </svg>
            </motion.div>

            <div className="h-28 w-[22px] bg-white/15" />
            <div className="h-20 w-[22px] bg-white/15" />
            <div className="h-32 w-[22px] bg-white/15" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="relative flex h-[520px] flex-col overflow-hidden rounded-bl-[25%]  bg-[#E5EAE7] p-12"
      >
        <h3 className="relative z-10 text-[38px] font-medium tracking-tight text-(--green)">
          Send across the global
        </h3>

        <div className="relative mt-auto h-[320px] w-full">
          <div className="absolute left-[55%] top-2/3 -translate-x-1/2 -translate-y-1/2">
            <svg
              width="180"
              height="180"
              viewBox="0 0 100 100"
              className="stroke-[#1A2E26] fill-none stroke-[0.6]"
            >
              <circle cx="50" cy="50" r="45" />
              <ellipse cx="50" cy="50" rx="18" ry="45" />
              <line x1="5" y1="50" x2="95" y2="50" />
              <line x1="12" y1="30" x2="88" y2="30" />
              <line x1="12" y1="70" x2="88" y2="70" />
            </svg>
          </div>

          <motion.div
            style={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{
              repeat: Infinity,
              duration: 3,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute left-16 top-10 z-20 w-[170px] bg-white shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
          >
            <div className="mb-3 h-[100px] w-full overflow-hidden  bg-[#F3F4F6]">
              <Image
                src="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=200"
                alt="money"
                width={200}
                height={200}
                className="h-full w-full object-cover grayscale opacity-60"
              />
            </div>
            <div className="px-4 py-2">
              <p className="text-3xl font-medium tracking-tight text-(--green)">
                $25,000
              </p>
              <p className="text-[11px] font-medium text-(--green)">
                Sent bro!
              </p>
            </div>
          </motion.div>
          <div className="flex -space-x-2 absolute bottom-12 left-16">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-11 w-11 rounded-full border-[3px] border-[#D9E3DE] bg-gray-300 overflow-hidden shadow-sm"
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

          <motion.div
            style={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{
              repeat: Infinity,
              duration: 3,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute right-12 top-10 z-20  bg-[#1D3129] px-4 py-3 text-white shadow-2xl"
          >
            <p className="text-3xl font-medium tracking-tight text-white">
              $40,000
            </p>
            <p className="mt-1 text-sm font-light opacity-70">Thanks Chris!</p>
            <div className="absolute -bottom-1.5 left-6 h-3 w-3 rotate-45 bg-[#1D3129]" />
          </motion.div>

          <div className="absolute bottom-32 right-33 h-11 w-11 rounded-full border-[3px] border-white bg-white shadow-lg overflow-hidden">
            <Image
              src="https://i.pravatar.cc/100?u=a4"
              alt="avatar"
              className="h-full w-full object-cover"
              width={100}
              height={100}
            />
          </div>

          <div className="absolute bottom-10 right-4 flex items-center -space-x-2">
            <Image
              src="https://www.worldometers.info/images/flags/original/us.webp"
              alt="usa"
              width={100}
              height={100}
              className="h-[40px] w-[40px] object-cover rounded-full border border-white"
            />
            <Image
              src="https://www.worldometers.info/images/flags/original/de.webp"
              alt="germany"
              width={100}
              height={100}
              className="h-[40px] w-[40px] object-cover rounded-full border border-white"

            />
            <Image
              src="https://www.worldometers.info/images/flags/original/ng.webp"
              alt="nigeria"
              width={100}
              height={100}
              className="h-[40px] w-[40px] object-cover rounded-full border border-white"
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
