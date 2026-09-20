"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getMoonPhase, formatMoonDate, type MoonPhaseData } from "@/lib/moon-phase";

interface MoonPhaseDisplayProps {
  /** Compact = no surrounding stats card (for hero). Full = with stat row. */
  variant?: "hero" | "card";
}

function useCurrentPhase(refreshMs = 60_000): { phase: MoonPhaseData | null; now: Date } {
  const [state, setState] = useState<{ phase: MoonPhaseData | null; now: Date }>({
    phase: null,
    now: new Date(),
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setState({ phase: getMoonPhase(now), now });
    };
    tick();
    const id = window.setInterval(tick, refreshMs);
    return () => window.clearInterval(id);
  }, [refreshMs]);

  return state;
}

export function MoonPhaseDisplay({ variant = "hero" }: MoonPhaseDisplayProps) {
  const { phase, now } = useCurrentPhase();

  if (!phase) {
    return (
      <div className="flex flex-col items-center gap-4 py-12">
        <div
          className="h-32 w-32 animate-pulse rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(245,197,66,0.25), transparent 70%)",
          }}
        />
        <p className="text-sm text-[#c4b9d6]">Calculating tonight&apos;s moon phase…</p>
      </div>
    );
  }

  const illuminationPct = (phase.illumination * 100).toFixed(0);
  const ageDays = phase.ageInDays.toFixed(1);
  const nextDays = Math.floor(phase.nextPhase.daysUntil);
  const nextHours = Math.round((phase.nextPhase.daysUntil - nextDays) * 24);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Moon disc */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Glow halo */}
        <div
          aria-hidden
          className="absolute -inset-8 rounded-full blur-2xl animate-moon-glow"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(245,197,66,0.55), transparent 70%)",
          }}
        />
        {/* Emoji moon */}
        <div
          className="relative flex h-40 w-40 items-center justify-center rounded-full text-7xl animate-moon-glow sm:h-52 sm:w-52 sm:text-8xl"
          role="img"
          aria-label={`${phase.name} (${phase.emoji})`}
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(245,197,66,0.18), rgba(26,11,61,0.55) 60%)",
            border: "1px solid rgba(245,197,66,0.35)",
          }}
        >
          <span className="animate-float-slow drop-shadow-[0_0_25px_rgba(245,197,66,0.5)]">
            {phase.emoji}
          </span>
        </div>
      </motion.div>

      {/* Phase name + live status */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-center"
      >
        <p className="font-display text-3xl font-semibold text-[#f5f0e8] sm:text-4xl">
          {phase.name}
        </p>
        <p className="mt-2 text-sm text-[#c4b9d6]">
          Calculated live for{" "}
          <time dateTime={now.toISOString()}>
            {now.toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </time>
        </p>
      </motion.div>

      {variant === "card" && (
        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Illumination" value={`${illuminationPct}%`} />
          <Stat label="Moon age" value={`${ageDays} days`} />
          <Stat label="Next phase" value={phase.nextPhase.name} />
          <Stat
            label="Countdown"
            value={`${nextDays}d ${nextHours}h`}
            sub={formatMoonDate(phase.nextPhase.date)}
          />
        </div>
      )}
    </div>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="glass-card rounded-lg p-4 text-center">
      <p className="text-xs font-medium uppercase tracking-wider text-[#9c8cba]">
        {label}
      </p>
      <p className="mt-1 font-display text-xl font-semibold text-[#f5c542]">
        {value}
      </p>
      {sub && <p className="mt-1 text-xs text-[#c4b9d6]">{sub}</p>}
    </div>
  );
}
