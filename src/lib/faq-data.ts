/**
 * FAQ content for the home page FAQ section.
 *
 * Kept in a plain (non-client) module so it can be safely imported by both
 * server components (page.tsx — for JSON-LD output) and the client FAQ
 * accordion component (lunar-faq.tsx) without crossing the client/server
 * boundary.
 */

export interface FAQ {
  q: string;
  a: string;
}

export const FAQS: FAQ[] = [
  {
    q: "What is the current moon phase emoji?",
    a: "The current moon phase emoji is the Unicode glyph that matches tonight's Moon phase, calculated live using the standard synodic-month algorithm. The eight canonical phases map to \u{1F311} (new), \u{1F312} (waxing crescent), \u{1F313} (first quarter), \u{1F314} (waxing gibbous), \u{1F315} (full), \u{1F316} (waning gibbous), \u{1F317} (last quarter), and \u{1F318} (waning crescent). The hero at the top of this page shows the one that matches right now, and the value updates every minute while the page is open.",
  },
  {
    q: "How is the moon phase calculated?",
    a: "We compute the Moon's age by measuring the time between now and a known reference new Moon — 2000-01-06 18:14 UTC — then dividing by the synodic month length of 29.530588853 days. The fractional remainder maps to one of the eight named phases. This is the same approach the U.S. Naval Observatory uses in its phase tables, so the dates you see here align with their published astronomical data service.",
  },
  {
    q: "Why are there exactly eight moon phase emojis?",
    a: "The Unicode standard reserves a contiguous block (U+1F311 through U+1F318) for the eight principal moon phases. These correspond to the eight waypoints of the 29.53-day synodic cycle: new, waxing crescent, first quarter, waxing gibbous, full, waning gibbous, last quarter, and waning crescent. Between these waypoints the Moon is technically in transition, but for everyday reference these eight glyphs cover every night of the cycle.",
  },
  {
    q: "How often does the moon phase emoji change?",
    a: "On average, a new named phase begins every 3.69 days (29.53 divided by 8), but the exact interval varies slightly because the Moon's orbit is elliptical. The hero glyph on this page is recomputed every minute, so you'll see it shift within a few hours of the true phase transition. If you keep the page open across midnight, the day's symbol will reflect the latest calculation.",
  },
  {
    q: "What does illumination percentage mean?",
    a: "Illumination is the fraction of the Moon's Earth-facing disc lit by the Sun at a given moment. It runs from 0 percent at new Moon to 100 percent at full Moon, following a cosine curve. Note that illumination does not equal apparent brightness — even a 10 percent crescent can look striking against a dark sky because our eyes adapt to low light.",
  },
  {
    q: "Why does the moon sometimes appear during the day?",
    a: "The Moon is above the horizon for roughly twelve hours out of every twenty-four, just like the Sun. Depending on its phase, those hours overlap with daytime or nighttime. A first-quarter Moon, for instance, rises around noon and sets around midnight, so you'll often catch it high in the afternoon sky. A full Moon, by contrast, rises near sunset and stays up all night.",
  },
  {
    q: "What is the difference between waxing and waning?",
    a: "Waxing means the illuminated portion of the Moon is growing each night, moving from new Moon toward full Moon — the right limb (in the Northern Hemisphere) is lit and the left limb is dark. Waning means the illuminated portion is shrinking, moving from full Moon back toward new Moon — the opposite limb lights up. The terms come from old English and Latin roots meaning 'to grow' and 'to diminish' respectively.",
  },
  {
    q: "Is the moon phase the same everywhere on Earth?",
    a: "Yes. The Moon's phase depends only on the Sun-Earth-Moon geometry, which is effectively identical for everyone on the planet at the same instant. The clock time at which you see the phase change will differ by time zone, but the phase itself is universal. Our calculator uses your local time, then converts to UTC for the standard reference calculation.",
  },
];
