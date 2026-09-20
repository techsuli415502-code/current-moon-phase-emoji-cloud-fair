import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/site/page-header";
import { SourcesList } from "@/components/site/sources-list";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sources",
  description:
    "The sources behind Moon Phase Emoji: the U.S. Naval Observatory's astronomical moon phase data service, and the Moon Phase Emoji reference for Unicode moon phase symbols.",
  alternates: { canonical: `${SITE_URL}/sources` },
  openGraph: {
    title: "Sources — Moon Phase Emoji",
    description:
      "The sources behind Moon Phase Emoji: the U.S. Naval Observatory and the Moon Phase Emoji reference for Unicode moon phase symbols.",
    url: `${SITE_URL}/sources`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sources — Moon Phase Emoji",
    description:
      "The sources behind Moon Phase Emoji: the U.S. Naval Observatory and the Moon Phase Emoji reference.",
  },
};

export default function SourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sources"
        title="Where the data comes from"
        intro="We try to be transparent about every number on this site. This page lists the two primary references behind the Moon phase calculations and the moon phase emoji set, with notes on how each is used."
      />

      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="space-y-6 text-base leading-relaxed text-[#c4b9d6]">
          <p>
            Moon Phase Emoji doesn&apos;t generate its own astronomical
            measurements. Instead, we rely on two established sources: the
            U.S. Naval Observatory&apos;s Astronomical Applications
            Department, which publishes authoritative moon phase tables, and
            the Moon Phase Emoji reference site, which documents the Unicode
            moon phase emoji set in plain language. Together these cover the
            math (what the Moon is doing) and the glyphs (which emoji
            represents it).
          </p>
          <p>
            Every place in the body of the site where a specific fact is
            drawn from one of these references, we name the source inline.
            The list below is the canonical place to verify each citation
            in full, with the original URLs and a summary of how we use each
            one.
          </p>
        </div>
      </section>

      <SourcesList withHeading={false} />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
          How we use each source
        </h2>

        <article className="mt-6 glass-card rounded-2xl p-6">
          <h3 className="font-display text-xl font-semibold text-[#f5c542]">
            U.S. Naval Observatory — Moon Phases
          </h3>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#c4b9d6]">
            <p>
              The Astronomical Applications Department of the U.S. Naval
              Observatory (USNO) maintains the de facto reference tables for
              lunar phases. Our calculation uses their published reference
              new Moon (2000-01-06 18:14 UTC, JD 2451550.1) and the mean
              synodic month length of 29.530588853 days.
            </p>
            <p>
              We cite the USNO wherever we mention a specific upcoming phase
              date — for example, in the hero countdown to the next full or
              new Moon. Our algorithm produces phase timings that align
              with USNO&apos;s published tables to within a few hours for
              most dates; users requiring precise ephemeris should consult
              the USNO directly.
            </p>
            <p>
              <a
                href="https://aa.usno.navy.mil/data/MoonPhases"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[#f5c542] underline-offset-4 hover:underline"
              >
                Open the USNO Moon Phases service →
              </a>
            </p>
          </div>
        </article>

        <article className="mt-6 glass-card rounded-2xl p-6">
          <h3 className="font-display text-xl font-semibold text-[#f5c542]">
            Moon Phase Emoji
          </h3>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#c4b9d6]">
            <p>
              The Moon Phase Emoji reference site documents the eight
              Unicode moon phase symbols (U+1F311 through U+1F318), their
              names, and the order in which they appear across the lunar
              cycle. We use this reference to confirm the one-to-one
              mapping between our calculated phase index (0–7) and the
              emoji we render.
            </p>
            <p>
              Anywhere on this site where we identify a specific glyph —
              the hero, the calendar grid, the eight-phase table — that
              mapping comes from this source. If you want to verify the
              Unicode assignment or the canonical name of a phase, the
              reference is the place to start.
            </p>
            <p>
              <a
                href="https://www.moonphaseemoji.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[#f5c542] underline-offset-4 hover:underline"
              >
                Open Moon Phase Emoji →
              </a>
            </p>
          </div>
        </article>

        <div className="mt-10 rounded-2xl border border-amber-300/15 bg-[#1a0b3d]/40 p-6">
          <h3 className="font-display text-xl font-semibold text-[#f5c542]">
            Editorial notes
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#c4b9d6]">
            <li>
              We&apos;ve written all body prose on this site from scratch.
              Where we cite a fact, we name the source either inline or in
              a footnote-style sentence at the end of the section.
            </li>
            <li>
              We don&apos;t republish USNO&apos;s tables wholesale. Our
              calculator produces a single phase for &quot;right now,&quot;
              and our calendar grid shows one phase per day for the current
              month only — far less data than USNO publishes.
            </li>
            <li>
              For more about our editorial standards and correction
              process, see the{" "}
              <Link
                href="/about"
                className="text-[#f5c542] underline-offset-4 hover:underline"
              >
                About
              </Link>{" "}
              page.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
