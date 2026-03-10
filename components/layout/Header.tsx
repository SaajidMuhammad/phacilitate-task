"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="flex w-full items-center justify-between bg-(--green) px-2 py-2 text-center text-xs tracking-wide text-white/80">
        <div className="w-full text-center">
          Session 2024 • Early-bird registration now open
        </div>
        <button
          type="button"
          aria-label="Dismiss"
          className="flex h-6 w-6 items-center justify-center"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-(--border-light) bg-white">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:px-8 md:h-[68px] lg:px-10">
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-[22px] font-bold tracking-tight text-(--green)"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Ascone
            </a>

            <nav
              className="hidden items-center ml-10 gap-8 md:flex"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[14px] font-medium text-black transition-colors duration-150 hover:text-(--green)"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#"
              className="text-[14px] font-medium text-black transition-colors duration-150 hover:text-(--green)"
            >
              Login
            </a>
            <Button size="sm" href="#">
              Sign Up <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-sm text-(--text-secondary) transition-colors hover:bg-(--sage) md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden border-t border-(--border-light) bg-white md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1 px-5 py-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-sm px-3 py-2.5 text-sm text-(--text-secondary) transition-colors hover:bg-(--sage) hover:text-(--green)"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-sm px-3 py-2.5 text-sm text-(--text-secondary) transition-colors hover:bg-(--sage) hover:text-(--green)"
                >
                  Login
                </a>
                <div className="pt-2">
                  <Button
                    size="sm"
                    href="#"
                    className="w-full"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
