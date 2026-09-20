import Link from "next/link";
import { Moon } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="mt-auto border-t border-amber-300/15 bg-[#0a0420]/70 backdrop-blur-md"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(245,197,66,0.5), transparent 70%)",
                }}
              >
                <Moon className="h-5 w-5 text-[#f5c542]" strokeWidth={2.2} />
              </span>
              <span className="font-display text-xl font-semibold text-[#f5f0e8]">
                {SITE_NAME}
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#c4b9d6]">
              Live lunar phase, glyph, and meaning — refreshed every minute.
              Our moon phase calculations follow the U.S. Naval Observatory
              astronomical data service, paired with the Unicode moon phase
              emoji set so the symbol you see matches tonight's sky.
            </p>
            <p className="mt-4 text-xs text-[#9c8cba]">
              Astronomical data:{" "}
              <a
                href="https://aa.usno.navy.mil/data/MoonPhases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f5c542] underline-offset-4 hover:underline"
              >
                U.S. Naval Observatory
              </a>{" "}
              · Emoji reference:{" "}
              <a
                href="https://www.moonphaseemoji.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f5c542] underline-offset-4 hover:underline"
              >
                Moon Phase Emoji
              </a>
            </p>
          </div>

          {/* Site nav */}
          <nav aria-label="Footer navigation">
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-[#f5c542]">
              Explore
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#c4b9d6] transition-colors hover:text-[#f5c542]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* About blurb */}
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-[#f5c542]">
              About
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#c4b9d6]">
              Written and edited by Jacob Moses, Content Specialist. Our goal
              is to make lunar astronomy readable, accurate, and useful — one
              phase at a time.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-xs text-[#9c8cba] sm:flex-row sm:items-center">
          <p>&copy; {year} {SITE_NAME}. All rights reserved.</p>
          <p>
            Moon phase emoji symbols follow the Unicode standard (U+1F311–U+1F318).
          </p>
        </div>
      </div>
    </footer>
  );
}
