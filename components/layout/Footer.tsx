import { FOOTER_LINKS } from "@/lib/constants";

export const Footer = () => (
  <footer className="border-t border-(--border) bg-white">
    <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-5 md:gap-8 md:py-16 lg:px-10">
      {Object.entries(FOOTER_LINKS).map(([category, links]) => (
        <div key={category}>
          <h4 className="mb-4 text-[13px] font-semibold text-(--navy)">
            {category}
          </h4>
          <ul className="flex flex-col gap-2.5">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[13px] text-(--text-muted) transition-colors duration-150 hover:text-(--green)"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="flex items-start justify-start md:justify-end">
        <a
          href="#"
          className="text-[28px] font-bold tracking-tight text-(--green)"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Ascone
        </a>
      </div>
    </div>

    <div className="border-t border-(--border) px-5 py-5 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 text-[11px] text-(--text-muted) sm:flex-row">
        <p>&copy; Ascone Finance Ltd {new Date().getFullYear()}</p>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-(--green)">Privacy Policy</a>
          <a href="#" className="transition-colors hover:text-(--green)">Terms of Use</a>
          <a href="#" className="transition-colors hover:text-(--green)">Disclaimer</a>
        </div>
      </div>
    </div>
  </footer>
);
