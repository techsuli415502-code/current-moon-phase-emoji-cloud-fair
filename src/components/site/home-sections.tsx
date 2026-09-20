import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { PHASE_DETAILS } from "@/lib/constants";
import { PHASE_TABLE } from "@/lib/moon-phase";

/** === Eight Moon Phases grid === */
export function EightPhasesSection() {
  return (
    <section
      id="phases"
      aria-labelledby="phases-heading"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="The eight waypoints"
        title={<>The 8 moon phases, in order</>}
        intro="Every synodic month — 29.53 days — the Moon cycles through eight named phases, each marked by its own Unicode glyph. The grid below shows them in cycle order, with the illumination percentage and a short description for each. Most calendar apps print one of these eight symbols per night."
      />

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PHASE_DETAILS.map((p, i) => (
          <Reveal
            key={p.name}
            as="article"
            delay={i * 0.05}
            className="glass-card glass-card-hover group flex flex-col items-center rounded-2xl p-6 text-center transition-all"
          >
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full text-4xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(245,197,66,0.18), rgba(26,11,61,0.55) 60%)",
                border: "1px solid rgba(245,197,66,0.25)",
              }}
            >
              <span
                className="transition-transform duration-500 group-hover:scale-110"
                aria-hidden
              >
                {p.emoji}
              </span>
            </div>
            <p className="mt-4 text-xs font-medium uppercase tracking-widest text-[#9c8cba]">
              Phase {i + 1}
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold text-[#f5c542]">
              {p.name}
            </h3>
            <p className="mt-1 text-xs font-medium text-[#f5c542]/80">
              Illumination: {p.illumination}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#c4b9d6]">
              {p.description}
            </p>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[#9c8cba]">
        The phase table you see above is a simplification of a continuous
        process — the Moon doesn&apos;t snap from one symbol to the next but
        gradually morphs. The 8 phases correspond to the 8 standard waypoints
        used by astronomers and almanac compilers worldwide, including the
        U.S. Naval Observatory. The Unicode emoji set was designed to mirror
        these waypoints one-to-one.
      </p>
    </section>
  );
}

/** === Lunar Cycle diagram === */
export function LunarCycleSection() {
  const radius = 150;
  const center = 180;
  // Place 8 phases around the circle, starting at top (new moon)
  return (
    <section
      id="cycle"
      aria-labelledby="cycle-heading"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="The 29.53-day journey"
        title={<>The lunar cycle, drawn out</>}
        intro="One complete lunar cycle — new Moon to new Moon — takes 29.53 days, on average. The diagram below shows the eight phases arranged around the cycle, with the illuminated portion growing and shrinking as the Moon orbits Earth. Read clockwise from the top: new, waxing crescent, first quarter, waxing gibbous, full, waning gibbous, last quarter, waning crescent."
      />

      <Reveal
        className="mt-10 flex flex-col items-center gap-12 lg:flex-row"
      >
        {/* Diagram */}
        <div className="relative mx-auto" style={{ width: center * 2, maxWidth: "100%" }}>
          <svg
            viewBox={`0 0 ${center * 2} ${center * 2}`}
            className="w-full h-auto"
            role="img"
            aria-label="Diagram of the lunar cycle showing the eight phases arranged around a circle"
          >
            <defs>
              <radialGradient id="earthGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7ec4cf" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#1a0b3d" stopOpacity="1" />
              </radialGradient>
              <radialGradient id="orbitGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f5c542" stopOpacity="0" />
                <stop offset="80%" stopColor="#f5c542" stopOpacity="0" />
                <stop offset="100%" stopColor="#f5c542" stopOpacity="0.5" />
              </radialGradient>
            </defs>
            {/* Orbit ring */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke="rgba(245,197,66,0.25)"
              strokeWidth="1"
              strokeDasharray="3 6"
            />
            {/* Earth in the middle */}
            <circle
              cx={center}
              cy={center}
              r="20"
              fill="url(#earthGrad)"
              stroke="rgba(126,196,207,0.6)"
              strokeWidth="1"
            />
            <text
              x={center}
              y={center + 4}
              textAnchor="middle"
              fill="#f5f0e8"
              fontSize="10"
              fontFamily="Inter, sans-serif"
            >
              Earth
            </text>
            {/* 8 phases around */}
            {PHASE_TABLE.map((p, i) => {
              const angle = (i / 8) * 2 * Math.PI - Math.PI / 2;
              const x = center + Math.cos(angle) * radius;
              const y = center + Math.sin(angle) * radius;
              return (
                <g key={p.index}>
                  <circle
                    cx={x}
                    cy={y}
                    r="22"
                    fill="rgba(10,4,32,0.85)"
                    stroke="rgba(245,197,66,0.4)"
                    strokeWidth="1"
                  />
                  <text
                    x={x}
                    y={y + 8}
                    textAnchor="middle"
                    fontSize="22"
                    fontFamily="Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif"
                  >
                    {p.emoji}
                  </text>
                  <text
                    x={x}
                    y={y + 36}
                    textAnchor="middle"
                    fill="#c4b9d6"
                    fontSize="9"
                    fontFamily="Inter, sans-serif"
                  >
                    Day {Math.round((i / 8) * 29.53)}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Prose */}
        <div className="max-w-xl">
          <h3 className="font-display text-2xl font-semibold text-[#f5f0e8]">
            Why 29.53 and not 27.3 days?
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[#c4b9d6]">
            The Moon takes about 27.3 days to complete one orbit around Earth
            (its sidereal month), measured against the fixed stars. But Earth
            is also moving along its own orbit around the Sun, so the Moon
            needs extra time — about two days — to catch up and realign with
            the Sun. That alignment, from new Moon to new Moon, is the synodic
            month of 29.53 days we use for phase prediction.
          </p>
          <h3 className="mt-8 font-display text-2xl font-semibold text-[#f5f0e8]">
            The geometry of phases
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[#c4b9d6]">
            As the Moon moves counter-clockwise around Earth, the angle
            between Sun, Earth, and Moon changes. From new Moon (aligned
            between us and the Sun), through first quarter (perpendicular),
            to full Moon (on the opposite side), and back. The illuminated
            fraction you see is simply the part of the Moon&apos;s near side
            that faces the Sun at that angle.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/** === Moon Phase Meaning === */
const PHASE_MEANINGS: { emoji: string; name: string; text: string }[] = [
  {
    emoji: "\u{1F311}",
    name: "New Moon — beginnings",
    text: "Across cultures the new Moon signals a fresh start. With the lunar disc hidden in the Sun's glare, the sky is darkest and clearest, and many traditions treat it as a moment to set intentions or begin new projects. Astronomically it's also the best time for deep-sky observing because no moonlight washes out the Milky Way. The new Moon isn't a hole in the cycle — it's the reset button.",
  },
  {
    emoji: "\u{1F313}",
    name: "Quarter Moon — decision",
    text: "First and last quarter Moons mark the halfway waypoints of the waxing and waning halves of the cycle. With half the disc lit, they're sometimes read as moments of choice — the point where a waxing intention either commits or stalls, and a waning project either ships or winds down. Visually, a quarter Moon rises either near noon (first quarter) or near midnight (last quarter), so it's the Moon you see during the day.",
  },
  {
    emoji: "\u{1F315}",
    name: "Full Moon — culmination",
    text: "The full Moon is the cycle's peak, with the entire near side lit by direct sunlight. It rises near sunset and stays visible all night, which is why so many cultures built calendars and festivals around it. The full Moon also has measurable effects on the night sky — moonlight drowns out faint stars and meteors, which is why serious astrophotographers schedule their work around the new Moon instead.",
  },
  {
    emoji: "\u{1F318}",
    name: "Waning Crescent — release",
    text: "The last sliver before the new Moon is the quietest phase. The lit portion has shrunk to a thin crescent visible just before dawn, and the cycle is winding down. Many contemplative traditions treat this as a time for release and reflection — finishing what was begun at the new Moon, clearing space, preparing for the next reset. The sky is darkening again, and faint stars start to reappear.",
  },
];

export function MoonMeaningSection() {
  return (
    <section
      id="meaning"
      aria-labelledby="meaning-heading"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Cultural read"
        title={<>What each moon phase means</>}
        intro="Beyond the math, the Moon has carried meaning in every agricultural, religious, and storytelling tradition on the planet. The descriptions below are not astronomy — they're cultural context. They pair a phase with the human association it has accumulated over thousands of years of watching the night sky."
      />

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {PHASE_MEANINGS.map((m, i) => (
          <Reveal
            key={m.name}
            as="article"
            delay={i * 0.08}
            className="glass-card glass-card-hover flex gap-5 rounded-2xl p-6"
          >
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-3xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(245,197,66,0.2), rgba(26,11,61,0.6) 60%)",
                border: "1px solid rgba(245,197,66,0.25)",
              }}
              aria-hidden
            >
              {m.emoji}
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-[#f5c542]">
                {m.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c4b9d6]">
                {m.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[#9c8cba]">
        We treat these as cultural context, not scientific fact. If you want to
        track the Moon for farming, fishing, or observing rather than
        reflection, the calendar section above gives you the actual phase for
        each day, calculated against the U.S. Naval Observatory&apos;s
        reference data.
      </p>
    </section>
  );
}

/** === How Moon Phases Work === */
export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="The geometry"
        title={<>How moon phases actually work</>}
        intro="Phases are not shadows cast by Earth — that's the most common misconception. A moon phase is simply the shape of the lit portion of the Moon's near side as seen from Earth, which changes as the Moon orbits us and the Sun-Earth-Moon angle changes."
      />

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr]">
        {/* Sun-Earth-Moon diagram */}
        <Reveal
          className="glass-card rounded-2xl p-6 sm:p-8"
        >
          <svg
            viewBox="0 0 600 280"
            className="w-full h-auto"
            role="img"
            aria-label="Sun-Earth-Moon geometry showing how the phase angle determines the illuminated portion visible from Earth"
          >
            <defs>
              <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fff7e6" />
                <stop offset="60%" stopColor="#f5c542" />
                <stop offset="100%" stopColor="#c98a2d" />
              </radialGradient>
              <radialGradient id="earthGrad2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7ec4cf" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#1a0b3d" />
              </radialGradient>
              <radialGradient id="moonGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f5f0e8" />
                <stop offset="100%" stopColor="#9c8cba" />
              </radialGradient>
            </defs>

            {/* Sun on left */}
            <circle cx="60" cy="140" r="34" fill="url(#sunGrad)" />
            <text
              x="60"
              y="200"
              textAnchor="middle"
              fill="#f5c542"
              fontSize="14"
              fontFamily="Inter, sans-serif"
            >
              Sun
            </text>

            {/* Light rays */}
            <g stroke="rgba(245,197,66,0.35)" strokeWidth="1">
              <line x1="94" y1="120" x2="320" y2="120" />
              <line x1="94" y1="140" x2="320" y2="140" />
              <line x1="94" y1="160" x2="320" y2="160" />
            </g>

            {/* Earth in center */}
            <circle cx="320" cy="140" r="22" fill="url(#earthGrad2)" />
            <text
              x="320"
              y="200"
              textAnchor="middle"
              fill="#7ec4cf"
              fontSize="14"
              fontFamily="Inter, sans-serif"
            >
              Earth
            </text>

            {/* Moon orbit ring */}
            <circle
              cx="320"
              cy="140"
              r="100"
              fill="none"
              stroke="rgba(245,197,66,0.25)"
              strokeWidth="1"
              strokeDasharray="3 4"
            />

            {/* Moon position 1: New Moon (between Earth and Sun) */}
            <circle cx="240" cy="140" r="9" fill="url(#moonGrad)" />
            <text x="240" y="125" textAnchor="middle" fill="#c4b9d6" fontSize="10">
              New
            </text>

            {/* Moon position 2: First quarter */}
            <circle cx="320" cy="60" r="9" fill="url(#moonGrad)" />
            <text x="320" y="48" textAnchor="middle" fill="#c4b9d6" fontSize="10">
              Quarter
            </text>

            {/* Moon position 3: Full Moon (behind Earth) */}
            <circle cx="420" cy="140" r="9" fill="url(#moonGrad)" />
            <text x="420" y="125" textAnchor="middle" fill="#c4b9d6" fontSize="10">
              Full
            </text>

            {/* Moon position 4: Last quarter */}
            <circle cx="320" cy="220" r="9" fill="url(#moonGrad)" />
            <text x="320" y="245" textAnchor="middle" fill="#c4b9d6" fontSize="10">
              Quarter
            </text>

            {/* Viewer line of sight */}
            <line
              x1="320"
              y1="140"
              x2="560"
              y2="140"
              stroke="rgba(126,196,207,0.4)"
              strokeWidth="1"
              strokeDasharray="2 3"
            />
            <text x="540" y="135" textAnchor="end" fill="#7ec4cf" fontSize="11">
              Viewer
            </text>
          </svg>

          <p className="mt-4 text-xs leading-relaxed text-[#9c8cba]">
            Sunlight streams in from the left. As the Moon orbits Earth
            counter-clockwise, the angle between Sun, Earth, and Moon changes,
            and so does the lit portion visible to a viewer on Earth&apos;s
            surface. At new Moon, the Moon sits between us and the Sun, so its
            lit side faces away. At full Moon, the Moon is on the opposite
            side, so we see the entire lit half.
          </p>
        </Reveal>

        <div className="flex flex-col justify-center">
          <div className="space-y-6 text-base leading-relaxed text-[#c4b9d6]">
            <p>
              The Moon is always half lit by the Sun — that never changes. What
              changes is how much of the lit half happens to face Earth. When
              the Moon sits between us and the Sun, its lit side faces away and
              we see no Moon at all (new). When it sits on the opposite side of
              Earth from the Sun, its lit side faces us directly and we see a
              full disc (full). Everything in between is one of the six other
              named phases.
            </p>
            <p>
              This is also why the Moon rises and sets at different times
              depending on its phase. A full Moon rises roughly when the Sun
              sets, because they&apos;re on opposite sides of Earth. A new
              Moon rises with the Sun, which is why you can&apos;t see it
              anyway — it&apos;s lost in the daytime glare.
            </p>
            <p>
              The U.S. Naval Observatory has published phase tables using this
              same geometry since the nineteenth century, and our calculator
              produces results aligned with their service. You can verify
              tonight&apos;s phase against their data at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** === Interesting Moon Facts === */
const MOON_FACTS: { title: string; fact: string; emoji: string }[] = [
  {
    emoji: "\u{1F9EE}",
    title: "Drifting away",
    fact: "The Moon is receding from Earth at about 3.8 centimeters per year. Laser ranging experiments have measured this drift since the Apollo astronauts left retroreflectors on the surface. Billions of years from now, total solar eclipses will become impossible because the Moon will appear too small in the sky to cover the Sun's disc.",
  },
  {
    emoji: "\u{1F4D0}",
    title: "Same face, always",
    fact: "The Moon is tidally locked to Earth, so it rotates on its axis once per orbit — meaning the same hemisphere always faces us. From Earth we see roughly 59 percent of the lunar surface over time, thanks to libration (a slight wobble), but never the far side directly.",
  },
  {
    emoji: "\u{1FA90}",
    title: "Thin atmosphere",
    fact: "The Moon has an exosphere — an extremely thin layer of gases including argon, helium, and trace sodium — but nothing you could breathe or even feel. The total mass of all gases above the lunar surface is estimated at around 25,000 kilograms, less than the air in a small room.",
  },
  {
    emoji: "\u{1F321}",
    title: "Wild temperature swings",
    fact: "Because there's no atmosphere to distribute heat, lunar surface temperature ranges from about -173 °C in shadowed polar craters to +127 °C at the equator in direct sunlight. That's a 300-degree swing within a single rotation.",
  },
  {
    emoji: "\u{1F4A7}",
    title: "Water ice at the poles",
    fact: "Multiple spacecraft have confirmed water ice trapped in permanently shadowed craters near the lunar poles. These cold traps never see sunlight, so the ice has been stable for billions of years. The total estimated reserve is at least 600 million kilograms.",
  },
  {
    emoji: "\u{1F683}",
    title: "Twelve people have walked there",
    fact: "Between 1969 and 1972, twelve NASA astronauts walked on the Moon across six Apollo missions. No human has set foot on its surface since December 1972. Several robotic missions and the Artemis program now aim to return people to the Moon in the coming decade.",
  },
  {
    emoji: "\u{1F4D6}",
    title: "Calendars were Moon-first",
    fact: "Most ancient calendars — Babylonian, Hebrew, Islamic, Chinese — were originally lunar, tracking months from new Moon to new Moon. Solar calendars like ours were a later refinement. The Islamic calendar is still purely lunar, which is why Ramadan shifts across the seasons each year.",
  },
  {
    emoji: "\u{1F30A}",
    title: "It causes tides",
    fact: "The Moon's gravity pulls Earth's oceans into two bulges — one facing the Moon and one on the opposite side. As Earth rotates through these bulges we get two high tides and two low tides every 24 hours and 50 minutes. The Sun also contributes, but about two-thirds of tidal force comes from the Moon.",
  },
];

export function MoonFactsSection() {
  return (
    <section
      id="facts"
      aria-labelledby="facts-heading"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Things worth knowing"
        title={<>Eight interesting moon facts</>}
        intro="A grab bag of facts about the Moon, pulled together from lunar science and astronomy references. None of them are required to understand the current moon phase emoji — but each of them adds context to what's up there in the sky tonight."
      />

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {MOON_FACTS.map((f, i) => (
          <Reveal
            key={f.title}
            as="article"
            delay={i * 0.05}
            className="glass-card glass-card-hover flex flex-col gap-3 rounded-2xl p-5"
          >
            <span className="text-3xl" aria-hidden>
              {f.emoji}
            </span>
            <h3 className="font-display text-lg font-semibold text-[#f5c542]">
              {f.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#c4b9d6]">{f.fact}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
