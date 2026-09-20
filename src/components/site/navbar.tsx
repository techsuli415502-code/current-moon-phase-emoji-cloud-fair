"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Moon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-amber-300/15 bg-[#0a0420]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-90"
          aria-label="Moon Phase Emoji — home"
        >
          {/* Inline mark (mirrors favicon) */}
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(245,197,66,0.5), transparent 70%)",
            }}
          >
            <Moon className="h-5 w-5 text-[#f5c542]" strokeWidth={2.2} />
          </span>
          <span
            className="hidden font-display text-xl font-semibold tracking-wide sm:inline"
            style={{ color: "#f5f0e8" }}
          >
            Moon Phase Emoji
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-[#f5c542]"
                      : "text-pearl hover:text-[#f5c542]",
                  )}
                  style={{ color: active ? "#f5c542" : undefined }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-80 max-w-[85vw] border-l border-amber-300/20 bg-[#0a0420]/95 backdrop-blur-xl"
          >
            <SheetHeader>
              <SheetTitle className="font-display text-2xl text-[#f5c542]">
                Moon Phase Emoji
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="mt-6 flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-md px-3 py-3 text-base font-medium transition-colors",
                        active
                          ? "bg-amber-300/10 text-[#f5c542]"
                          : "text-pearl hover:bg-white/5 hover:text-[#f5c542]",
                      )}
                      style={{ color: active ? "#f5c542" : undefined }}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
