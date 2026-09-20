import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/site/page-header";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "The Moon Phase Emoji disclaimer: astronomical calculations are approximate, the current moon phase emoji is informational, and the site should not be used for navigation or critical timing.",
  alternates: { canonical: `${SITE_URL}/disclaimer` },
  openGraph: {
    title: "Disclaimer — Moon Phase Emoji",
    description:
      "Astronomical calculations are approximate. Read the full disclaimer before relying on any data from Moon Phase Emoji.",
    url: `${SITE_URL}/disclaimer`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer — Moon Phase Emoji",
    description:
      "Astronomical calculations are approximate. Read the full disclaimer before relying on any data from Moon Phase Emoji.",
  },
};

const LAST_UPDATED = "January 12, 2026";

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Disclaimer"
        intro={`The Moon phase shown on this Site is calculated using a mean synodic-month algorithm and should be treated as informational rather than authoritative. Last updated ${LAST_UPDATED}.`}
      />

      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              1. Informational purposes only
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                Moon Phase Emoji is an editorial and educational resource.
                The current moon phase emoji, the illumination percentage,
                the countdown to the next major phase, and the calendar grid
                are all calculated in your browser and are accurate to within
                a few hours of the true astronomical event for most
                locations. They are not a substitute for authoritative
                sources.
              </p>
              <p>
                We do not guarantee that the figures presented on this Site
                are complete, current, or free of error. You should verify
                any time-sensitive information against the U.S. Naval
                Observatory&apos;s published phase service before relying on
                it.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              2. No professional or navigational advice
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                Nothing on this Site constitutes astronomical, navigational,
                calendrical, religious, or legal advice. The Moon has long
                been used for navigation, agriculture, and ritual —
                applications where even small timing errors can matter. We do
                not endorse using our calculator for those purposes.
              </p>
              <p>
                If you need phase timings for any safety-critical or
                religious observance, consult a qualified authority. The U.S.
                Naval Observatory maintains authoritative tables for the
                former, and your tradition&apos;s scholars for the latter.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              3. Limits of the calculation
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                Our algorithm uses the mean synodic month length of
                29.530588853 days and a fixed reference new Moon at JD
                2451550.1. The Moon&apos;s actual orbit is perturbed by the
                Sun, by Earth&apos;s equatorial bulge, and by the planets,
                which means the true interval between identical phases
                varies by several hours from cycle to cycle.
              </p>
              <p>
                This is why our displayed phase may be off by up to a few
                hours compared with a high-precision ephemeris. For everyday
                reference — picking a night for a Moon watch, decoding a
                calendar emoji, answering &quot;is it a full Moon
                tonight?&quot; — that&apos;s plenty accurate. For astronomical
                field work, it is not.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              4. Third-party data
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                We cite and link to the U.S. Naval Observatory&apos;s moon
                phase service and to the Moon Phase Emoji reference site for
                Unicode symbols. We are not affiliated with either
                organization, and we don&apos;t represent them. Their
                content, accuracy, and availability are their responsibility.
              </p>
              <p>
                Full citations live on our{" "}
                <Link
                  href="/sources"
                  className="text-[#f5c542] underline-offset-4 hover:underline"
                >
                  Sources
                </Link>{" "}
                page.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              5. Cultural context is not fact
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                Our Moon Phase Meaning section describes how various
                traditions have associated meaning with each phase. These
                descriptions are cultural context, not scientific fact. We
                present them as human-readable interpretations drawn from
                wide historical reading, not as authoritative statements
                about what the Moon does or does not do.
              </p>
              <p>
                If a description conflicts with your tradition, treat that
                as a sign the description is incomplete, not that your
                tradition is wrong.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              6. Acceptance
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                By using this Site you accept this disclaimer in full. If you
                do not agree with any part of it, please do not use the
                Site. See our{" "}
                <Link
                  href="/terms"
                  className="text-[#f5c542] underline-offset-4 hover:underline"
                >
                  Terms &amp; Conditions
                </Link>{" "}
                for the broader agreement that governs your visit.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
