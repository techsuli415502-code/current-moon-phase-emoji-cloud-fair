"use client";

import { motion } from "framer-motion";
import { MoonPhaseDisplay } from "@/components/site/moon-phase-display";
import { SectionHeading } from "@/components/site/section-heading";

export function CurrentPhaseSection() {
  return (
    <section
      id="current-phase"
      aria-labelledby="current-phase-heading"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Tonight, in detail"
        title={<>The current moon phase, decoded</>}
        intro="The hero above shows the live glyph. Here we break down what the Moon is doing right now — illumination, age, and how long until the next major phase. These figures refresh every minute while you keep this page open, so the numbers stay aligned with the sky outside."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 glass-card rounded-2xl p-6 sm:p-10"
      >
        <MoonPhaseDisplay variant="card" />

        <div className="mt-10 grid grid-cols-1 gap-6 border-t border-amber-300/15 pt-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-[#f5c542]">
              What the illumination means
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#c4b9d6]">
              Illumination is the percentage of the Moon&apos;s Earth-facing
              disc that is lit by the Sun. Zero means new Moon, fifty means
              quarter, one hundred means full. The number doesn&apos;t reflect
              apparent brightness — the Moon looks brilliant even at a thin
              crescent because we see it against a dark sky.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-[#f5c542]">
              Why age matters
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#c4b9d6]">
              Moon age is the number of days since the most recent new Moon.
              Because the synodic month is 29.53 days long, age ranges from
              zero to about 29.5. The age helps you place the current Moon
              phase within the cycle — a five-day-old Moon is a waxing
              crescent, a fourteen-day-old Moon is near full.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-[#f5c542]">
              Reading the countdown
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#c4b9d6]">
              The countdown targets whichever major phase is sooner: the next
              new Moon or the next full Moon. The U.S. Naval Observatory
              publishes these dates years in advance, and our calculation is
              aligned with their tables. Times are approximate to the nearest
              hour because the true moment of phase change depends on your
              observing location.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
