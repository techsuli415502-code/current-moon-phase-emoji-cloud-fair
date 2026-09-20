"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Optional delay (seconds) for staggered entrances. */
  delay?: number;
  /** Render as a different element if needed (e.g. "article"). */
  as?: "div" | "article" | "section" | "li";
  className?: string;
  /** Viewport once-only threshold. */
  amount?: number;
}

const motionProps = (delay: number, amount: number): HTMLMotionProps<"div"> => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/**
 * Reveal — a thin client wrapper around framer-motion for scroll-triggered
 * fade/slide-in animations. Lets server components stay on the server.
 */
export function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
  amount = 0.2,
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} {...motionProps(delay, amount)}>
      {children}
    </MotionTag>
  );
}
