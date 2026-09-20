/**
 * Moon Phase Calculator
 *
 * Uses the standard synodic-month algorithm referenced by the U.S. Naval
 * Observatory (https://aa.usno.navy.mil/data/MoonPhases) to derive the current
 * lunar phase, illumination percentage, and the next major phase (New or Full).
 *
 * Reference new moon: 2000-01-06 18:14 UTC (Julian Date 2451550.1)
 * Synodic month length: 29.530588853 days
 */

export type MoonPhaseIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface MoonPhaseData {
  /** 0..7 index corresponding to the eight named phases */
  phaseIndex: MoonPhaseIndex;
  /** Human-readable phase name (e.g. "Waxing Gibbous") */
  name: string;
  /** Unicode emoji matching the calculated phase */
  emoji: string;
  /** Fraction of the lunar disc that is illuminated (0..1) */
  illumination: number;
  /** Days since the most recent new moon */
  ageInDays: number;
  /** Days remaining until the next reference phase (synodic) */
  cycleProgress: number;
  /** Distance to next major phase (New or Full), whichever comes first */
  nextPhase: {
    name: string;
    emoji: string;
    date: Date;
    daysUntil: number;
    hoursUntil: number;
  };
  /** Distance to next full moon specifically */
  nextFullMoon: { date: Date; daysUntil: number };
  /** Distance to next new moon specifically */
  nextNewMoon: { date: Date; daysUntil: number };
}

/** Reference Julian Date for the new moon of 2000-01-06 18:14 UTC. */
const REFERENCE_JULIAN_DATE = 2451550.1;
/** Mean synodic month (days) — average time between two identical phases. */
const SYNODIC_MONTH = 29.530588853;

/** Display data for the eight canonical lunar phases. */
export const PHASE_TABLE: {
  index: MoonPhaseIndex;
  name: string;
  emoji: string;
  description: string;
}[] = [
  {
    index: 0,
    name: "New Moon",
    emoji: "\u{1F311}",
    description:
      "The Moon sits between Earth and Sun, its Earth-facing side in shadow. A fresh lunar cycle begins.",
  },
  {
    index: 1,
    name: "Waxing Crescent",
    emoji: "\u{1F312}",
    description:
      "A sliver of light appears on the right limb as the Moon pulls away from the Sun in our sky.",
  },
  {
    index: 2,
    name: "First Quarter",
    emoji: "\u{1F313}",
    description:
      "Half of the near side is lit. The Moon has completed one-quarter of its orbit around Earth.",
  },
  {
    index: 3,
    name: "Waxing Gibbous",
    emoji: "\u{1F314}",
    description:
      "More than half lit and still growing. The full Moon is approaching in the next several nights.",
  },
  {
    index: 4,
    name: "Full Moon",
    emoji: "\u{1F315}",
    description:
      "The entire near side is illuminated as the Moon and Sun sit on opposite sides of Earth.",
  },
  {
    index: 5,
    name: "Waning Gibbous",
    emoji: "\u{1F316}",
    description:
      "Illumination begins to recede on the right limb as the Moon moves back toward third quarter.",
  },
  {
    index: 6,
    name: "Last Quarter",
    emoji: "\u{1F317}",
    description:
      "The opposite half is lit compared to first quarter, marking the third waypoint of the cycle.",
  },
  {
    index: 7,
    name: "Waning Crescent",
    emoji: "\u{1F318}",
    description:
      "A thin crescent returns, this time on the left limb, as the cycle winds toward the next new Moon.",
  },
];

/** Convert a JS Date to a Julian Date (UT). */
function toJulianDate(date: Date): number {
  // Milliseconds since 1970-01-01 -> JD via the standard conversion.
  return date.getTime() / 86_400_000 + 2_440_587.5;
}

/** Find the next occurrence (in days from the reference) of a given phase value. */
function nextPhaseOccurrence(phaseValue: number, currentPhase: number): number {
  // phaseValue in [0,1) — advance until current < target
  let delta = phaseValue - currentPhase;
  if (delta <= 0) delta += 1;
  return currentPhase + delta;
}

/**
 * Compute the full Moon Phase data for a given date.
 *
 * Returns the index, name, emoji, illumination, age, and the next major
 * phase (New or Full) for the supplied Date.
 */
export function getMoonPhase(date: Date = new Date()): MoonPhaseData {
  const jd = toJulianDate(date);
  const daysSinceRef = jd - REFERENCE_JULIAN_DATE;
  let cycle = daysSinceRef / SYNODIC_MONTH;
  // Normalize to [0,1)
  cycle = ((cycle % 1) + 1) % 1;

  // Map the continuous cycle [0,1) to one of the 8 named phases.
  // Each phase occupies a 1/8 = 0.125 slice centered on its canonical point.
  const phaseIndex = (Math.floor(cycle * 8 + 0.5) % 8) as MoonPhaseIndex;
  const phase = PHASE_TABLE[phaseIndex];

  // Illumination derived from the phase angle: cos(phase * 2π).
  // New Moon -> 1.0 (full shadow from our perspective on the lit side ratio
  // being 0), Full Moon -> 1.0. We want a 0..1 visible-illumination value,
  // so we use (1 - cos) / 2.
  const illumination = (1 - Math.cos(cycle * 2 * Math.PI)) / 2;

  // Age of the current cycle (days since the most recent new moon).
  const ageInDays = cycle * SYNODIC_MONTH;

  // Compute next New Moon (cycle value 0) and next Full Moon (cycle value 0.5).
  const nextNewCycle = nextPhaseOccurrence(0, cycle);
  const nextFullCycle = nextPhaseOccurrence(0.5, cycle);

  const nextNewMoonDate = new Date(
    date.getTime() + (nextNewCycle - cycle) * SYNODIC_MONTH * 86_400_000,
  );
  const nextFullMoonDate = new Date(
    date.getTime() + (nextFullCycle - cycle) * SYNODIC_MONTH * 86_400_000,
  );

  const daysUntilNew = (nextNewCycle - cycle) * SYNODIC_MONTH;
  const daysUntilFull = (nextFullCycle - cycle) * SYNODIC_MONTH;

  // Sooner of the two is the next major phase.
  const nextIsNew = daysUntilNew <= daysUntilFull;
  const nextPhase = nextIsNew
    ? {
        name: "New Moon",
        emoji: "\u{1F311}",
        date: nextNewMoonDate,
        daysUntil: daysUntilNew,
        hoursUntil: daysUntilNew * 24,
      }
    : {
        name: "Full Moon",
        emoji: "\u{1F315}",
        date: nextFullMoonDate,
        daysUntil: daysUntilFull,
        hoursUntil: daysUntilFull * 24,
      };

  return {
    phaseIndex,
    name: phase.name,
    emoji: phase.emoji,
    illumination,
    ageInDays,
    cycleProgress: cycle,
    nextPhase,
    nextFullMoon: { date: nextFullMoonDate, daysUntil: daysUntilFull },
    nextNewMoon: { date: nextNewMoonDate, daysUntil: daysUntilNew },
  };
}

/** Format a date as a readable "Mon DD, YYYY" string. */
export function formatMoonDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Build a moon-phase calendar for the month containing `date`. */
export function getMoonCalendar(
  year: number,
  month: number,
): { date: Date; phase: MoonPhaseData }[] {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const out: { date: Date; phase: MoonPhaseData }[] = [];
  for (let day = 1; day <= daysInMonth; day++) {
    // Use local noon to avoid DST edge effects.
    const d = new Date(year, month, day, 12, 0, 0);
    out.push({ date: d, phase: getMoonPhase(d) });
  }
  return out;
}
