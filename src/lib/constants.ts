/**
 * Site-wide constants for Moon Phase Emoji.
 *
 * The production domain is a placeholder for now — keep it consistent across
 * all metadata (canonical, OG, sitemap, robots).
 */

export const SITE_URL = "https://moonphaseemoji.com";
export const SITE_NAME = "Moon Phase Emoji";
export const SITE_TAGLINE = "Live lunar phase, glyph, and meaning — refreshed every minute.";
export const SITE_DESCRIPTION =
  "Discover the current moon phase emoji, the live lunar cycle, and the meaning behind each phase. See today's Moon phase glyph, illumination, and countdown to the next full moon.";
export const SITE_EMAIL = "techsuli415502@gmail.com";

/**
 * Google Analytics 4 Measurement ID (format: G-XXXXXXXXXX).
 * Leave as-is to enable GA on every page; change to "G-XXXXXXXXXX" to disable.
 */
export const GA_MEASUREMENT_ID = "G-PYHWGSM864";

export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/sources", label: "Sources" },
];

export interface SourceEntry {
  url: string;
  title: string;
  description: string;
  /** Short citation label used inline in body text. */
  citation: string;
}

export const SOURCES: SourceEntry[] = [
  {
    url: "https://www.moonphaseemoji.com/",
    title: "Moon Phase Emoji",
    description:
      "A focused reference covering the Unicode moon phase emoji symbols, their meanings, and the order in which they appear across the lunar cycle. Useful when you need to quickly identify which emoji represents the current Moon phase.",
    citation: "Moon Phase Emoji",
  },
  {
    url: "https://aa.usno.navy.mil/data/MoonPhases",
    title: "U.S. Naval Observatory — Moon Phases",
    description:
      "The Astronomical Applications Department of the U.S. Naval Observatory publishes authoritative tables of past and future Moon phases. Their calculations are the standard reference for astronomers and almanacs.",
    citation: "U.S. Naval Observatory",
  },
];

/** The eight canonical moon phases in cycle order, with illumination % midpoints. */
export const PHASE_DETAILS: {
  index: number;
  name: string;
  emoji: string;
  illumination: string;
  description: string;
}[] = [
  {
    index: 0,
    name: "New Moon",
    emoji: "\u{1F311}",
    illumination: "0%",
    description:
      "The Moon is positioned between Earth and the Sun, leaving its near side in shadow. The cycle begins here, traditionally a moment for setting intentions.",
  },
  {
    index: 1,
    name: "Waxing Crescent",
    emoji: "\u{1F312}",
    illumination: "~25%",
    description:
      "A thin sliver of light appears on the western limb of the Moon. Each evening the illuminated portion grows, visible just after sunset.",
  },
  {
    index: 2,
    name: "First Quarter",
    emoji: "\u{1F313}",
    illumination: "50%",
    description:
      "Exactly half of the near side is illuminated. The Moon has completed one-quarter of its orbit since the last new Moon.",
  },
  {
    index: 3,
    name: "Waxing Gibbous",
    emoji: "\u{1F314}",
    illumination: "~75%",
    description:
      "More than half-lit and still waxing, the Moon rises in the east during late afternoon and stays visible through most of the night.",
  },
  {
    index: 4,
    name: "Full Moon",
    emoji: "\u{1F315}",
    illumination: "100%",
    description:
      "The Moon and Sun sit on opposite sides of Earth, fully illuminating the near side. Full Moons rise near sunset and set near sunrise.",
  },
  {
    index: 5,
    name: "Waning Gibbous",
    emoji: "\u{1F316}",
    illumination: "~75%",
    description:
      "Illumination begins to recede. The Moon rises later each evening, and the lit portion shrinks from the western limb.",
  },
  {
    index: 6,
    name: "Last Quarter",
    emoji: "\u{1F317}",
    illumination: "50%",
    description:
      "The opposite half is lit compared to first quarter. The Moon now rises around midnight and sets around noon.",
  },
  {
    index: 7,
    name: "Waning Crescent",
    emoji: "\u{1F318}",
    illumination: "~25%",
    description:
      "A thin crescent returns, visible low in the eastern sky just before dawn. The cycle is nearly complete.",
  },
];
