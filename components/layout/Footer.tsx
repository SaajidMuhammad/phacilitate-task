"use client";

import { FOOTER_LINKS } from "@/lib/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white px-6 pt-20 pb-10 font-sans">
      <div className="mx-auto max-w-[1200px]">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 lg:grid-cols-6">
          
          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-5">
              <h4 className="text-[15px] font-bold text-[#111827]">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-gray-500 transition-colors hover:text-[#21352E]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Right Section: Logo and Address */}
          <div className="col-span-2 flex flex-col items-start md:items-end lg:col-start-5 lg:col-end-7">
            {/* Logo - Serif and High Contrast */}
            <h2 className="text-[64px] font-medium leading-none tracking-tighter text-[#1A2E26]" 
                style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>
              Ascone
            </h2>
            
            <div className="mt-12 space-y-1 text-left md:text-right">
              <p className="text-[14px] leading-relaxed text-gray-500">
                181 Bay Street, Bay Wellington
              </p>
              <p className="text-[14px] leading-relaxed text-gray-500">
                Tower, Suite 292 Toronto,
              </p>
              <p className="text-[14px] leading-relaxed text-gray-500">
                Ontario M5J 2T3
              </p>
              
              {/* Language Selector */}
              <div className="mt-4 flex items-center justify-start gap-2 md:justify-end">
                 <span className="text-lg">🇬🇧</span>
                 <span className="text-[14px] font-medium text-gray-600">English (UK)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-24 border-t border-gray-100 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-[13px] text-gray-400">
              © Ascone Finance Ltd {currentYear}.
            </p>
            
            <div className="flex gap-8">
              <a href="#" className="text-[13px] font-medium text-[#111827] transition-colors hover:opacity-70">
                Privacy Policy
              </a>
              <a href="#" className="text-[13px] font-medium text-[#111827] transition-colors hover:opacity-70">
                Terms of Use
              </a>
              <a href="#" className="text-[13px] font-medium text-[#111827] transition-colors hover:opacity-70">
                Disclosure
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};