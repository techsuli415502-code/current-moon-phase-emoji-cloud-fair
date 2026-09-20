"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MoonPhaseDisplay } from "@/components/site/moon-phase-display";
import { useEffect, useState } from "react";
import { getMoonPhase, formatMoonDate, type MoonPhaseData } from "@/lib/moon-phase";

export function Hero() {
  // Show live countdown to the next major phase.
  const [phase, setPhase] = useState<MoonPhaseData | null>(null);

  useEffect(() => {
    const tick = () => setPhase(getMoonPhase(new Date()));
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        {/* Left column — copy */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">Live lunar phase · updated every minute</span>
            <h1
              id="hero-heading"
              className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-[#f5f0e8] headline-glow sm:text-6xl lg:text-7xl"
            >
              Your{" "}
              <span className="gradient-gold">current moon phase emoji</span>,
              right now
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#c4b9d6]">
              Tonight&apos;s Moon has a name, a glyph, and a story. We
              calculate the live lunar phase using the same synodic-month
              method the U.S. Naval Observatory publishes — then we pair it
              with the Unicode moon phase emoji so the symbol you see matches
              the sky.
            </p>

            {/* Countdown card */}
            {phase && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 inline-flex flex-col gap-2 rounded-xl border border-amber-300/25 bg-[#1a0b3d]/60 px-5 py-4 backdrop-blur-md"
              >
                <span className="text-xs font-medium uppercase tracking-widest text-[#9c8cba]">
                  Next major phase
                </span>
                <span className="font-display text-2xl font-semibold text-[#f5c542]">
                  {phase.nextPhase.emoji} {phase.nextPhase.name}
                </span>
                <span className="text-sm text-[#c4b9d6]">
                  {Math.floor(phase.nextPhase.daysUntil)} days{" "}
                  {Math.round(
                    (phase.nextPhase.daysUntil -
                      Math.floor(phase.nextPhase.daysUntil)) *
                      24,
                  )}{" "}
                  hours away · {formatMoonDate(phase.nextPhase.date)}
                </span>
              </motion.div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#current-phase"
                className="inline-flex h-11 items-center justify-center rounded-md bg-[#f5c542] px-6 text-sm font-semibold text-[#1a0b3d] transition-colors hover:bg-[#f8d77a]"
              >
                See tonight&apos;s details
              </Link>
              <Link
                href="#phases"
                className="inline-flex h-11 items-center justify-center rounded-md border border-amber-300/30 px-6 text-sm font-medium text-[#f5f0e8] transition-colors hover:border-amber-300/60 hover:bg-amber-300/5"
              >
                Browse the 8 phases
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right column — moon */}
        <div className="order-1 flex justify-center lg:order-2">
          <MoonPhaseDisplay variant="hero" />
        </div>
      </div>
    </section>
  );
}
