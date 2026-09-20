import Link from "next/link";

export function EeatBio() {
  return (
    <section
      aria-labelledby="author-bio"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[auto_1fr]">
        {/* Author avatar (monogram, no real photo) */}
        <div className="flex flex-col items-center md:items-start">
          <div
            className="flex h-28 w-28 items-center justify-center rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(245,197,66,0.4), rgba(26,11,61,0.9) 70%)",
              border: "1px solid rgba(245,197,66,0.35)",
              boxShadow:
                "0 0 50px rgba(245,197,66,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
            aria-label="Author monogram avatar for Jacob Moses"
            role="img"
          >
            <span className="font-display text-3xl font-semibold text-[#f5c542]">
              JM
            </span>
          </div>
          <p className="mt-4 text-center font-display text-lg text-[#f5f0e8] md:text-left">
            Jacob Moses
          </p>
          <p className="text-center text-xs uppercase tracking-widest text-[#9c8cba] md:text-left">
            Content Specialist
          </p>
        </div>

        {/* Bio body */}
        <div>
          <span className="eyebrow">About the author</span>
          <h2
            id="author-bio"
            className="mt-4 font-display text-3xl font-semibold text-[#f5f0e8] sm:text-4xl"
          >
            Written by Jacob Moses
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-[#c4b9d6]">
            <p>
              I write about the Moon because it&apos;s the one piece of the sky
              that asks nothing of you. You don&apos;t need a telescope, a dark
              site, or a clear calendar — just a moment to look up. My focus is
              on creating clear, useful, and accurate content about moon phases
              and the lunar cycle so that anyone landing on this page can answer
              a simple question in a few seconds:{" "}
              <em>what is the current moon phase emoji?</em> Every page here is
              written by hand, checked against published astronomical data, and
              kept readable on purpose.
            </p>
            <p>
              The current moon phase emoji shown in the hero is calculated live
              in your browser using the same standard synodic-month method that
              the U.S. Naval Observatory uses in its phase tables. The eight
              Unicode moon phase symbols — 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 — are
              mapped one-to-one to the eight named phases, so the glyph you see
              is the one a printer, an almanac, or a calendar would print for
              tonight.
            </p>
            <p>
              My approach is deliberately plain. I&apos;m not an astronomer,
              and I don&apos;t claim credentials I don&apos;t have. What I am
              is a content specialist who cares about plain language and
              verifiable sources. When I summarize the lunar cycle, I cite the
              U.S. Naval Observatory&apos;s phase service and the moon phase
              emoji reference at MoonPhaseEmoji.com — both linked from our{" "}
              <Link
                href="/sources"
                className="text-[#f5c542] underline-offset-4 hover:underline"
              >
                Sources
              </Link>{" "}
              page. If anything you read here feels unclear or wrong, please
              use the{" "}
              <Link
                href="/contact"
                className="text-[#f5c542] underline-offset-4 hover:underline"
              >
                Contact
              </Link>{" "}
              page and tell me. I read everything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
