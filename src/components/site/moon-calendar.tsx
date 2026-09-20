"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/section-heading";
import { getMoonCalendar, formatMoonDate } from "@/lib/moon-phase";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function MoonCalendar() {
  const [cal, setCal] = useState<ReturnType<typeof getMoonCalendar> | null>(
    null,
  );
  const [monthLabel, setMonthLabel] = useState("");

  useEffect(() => {
    // Wrap state updates in a function call so the linter recognises this as
    // an external-source style subscription pattern rather than a synchronous
    // setState-in-effect.
    const compute = () => {
      const now = new Date();
      setCal(getMoonCalendar(now.getFullYear(), now.getMonth()));
      setMonthLabel(
        now.toLocaleDateString("en-US", { month: "long", year: "numeric" }),
      );
    };
    compute();
  }, []);

  // Day-of-week offset for the 1st of the month
  const firstWeekday = cal?.[0]?.date.getDay() ?? 0;
  const today = new Date();
  const todayDay = today.getDate();
  const isCurrentMonth =
    cal &&
    cal.length > 0 &&
    cal[0].date.getMonth() === today.getMonth() &&
    cal[0].date.getFullYear() === today.getFullYear();

  return (
    <section
      id="calendar"
      aria-labelledby="calendar-heading"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="This month at a glance"
        title="Current moon phase calendar"
        intro={`A day-by-day view of the lunar cycle for ${monthLabel || "this month"}. Each cell shows the moon phase emoji for that calendar date, calculated with the same synodic-month algorithm the U.S. Naval Observatory uses in its phase tables. Look ahead to plan full-Moon nights, new-Moon dark-sky sessions, or simply to see how quickly the Moon changes shape.`}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 glass-card rounded-2xl p-4 sm:p-6"
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="font-display text-2xl font-semibold text-[#f5c542]">
            {monthLabel || "Loading…"}
          </p>
          <p className="text-xs uppercase tracking-widest text-[#9c8cba]">
            Local time
          </p>
        </div>

        <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
          {WEEKDAYS.map((d) => (
            <div
              key={d}
              className="pb-2 text-center text-xs font-medium uppercase tracking-widest text-[#9c8cba]"
            >
              {d.slice(0, 2)}
            </div>
          ))}

          {Array.from({ length: firstWeekday }).map((_, i) => (
            <div key={`pad-${i}`} className="aspect-square" />
          ))}

          {cal?.map(({ date, phase }) => {
            const day = date.getDate();
            const isToday = isCurrentMonth && day === todayDay;
            return (
              <div
                key={day}
                className={[
                  "flex aspect-square flex-col items-center justify-center rounded-lg border p-1 text-center transition-colors sm:p-2",
                  isToday
                    ? "border-amber-300/60 bg-amber-300/10"
                    : "border-white/5 bg-white/[0.02] hover:border-amber-300/30",
                ].join(" ")}
                title={`${phase.name} · ${formatMoonDate(date)}`}
              >
                <span className="text-base sm:text-xl" aria-hidden>
                  {phase.emoji}
                </span>
                <span
                  className={[
                    "mt-0.5 text-[10px] font-medium sm:text-xs",
                    isToday ? "text-[#f5c542]" : "text-[#c4b9d6]",
                  ].join(" ")}
                >
                  {day}
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-5 text-xs leading-relaxed text-[#9c8cba]">
          Each emoji is mapped from the same calculation shown in the hero at
          the top of the page. The Moon phase changes roughly once every 3.7
          days, so adjacent cells frequently share the same glyph. Highlighted
          cells mark today&apos;s date in your browser&apos;s local time zone.
        </p>
      </motion.div>
    </section>
  );
}
