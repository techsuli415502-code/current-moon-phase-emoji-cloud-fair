import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/site/page-header";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms under which Moon Phase Emoji is made available, including acceptable use, intellectual property, disclaimers, and limits of liability.",
  alternates: { canonical: `${SITE_URL}/terms` },
  openGraph: {
    title: "Terms & Conditions — Moon Phase Emoji",
    description:
      "The terms under which Moon Phase Emoji is made available, including acceptable use and limits of liability.",
    url: `${SITE_URL}/terms`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions — Moon Phase Emoji",
    description:
      "The terms under which Moon Phase Emoji is made available, including acceptable use and limits of liability.",
  },
};

const LAST_UPDATED = "January 12, 2026";

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        intro={`By accessing Moon Phase Emoji, you agree to these terms. Please read them carefully; if you don't agree, you should not use the site. Last updated ${LAST_UPDATED}.`}
      />

      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              1. Acceptance of terms
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                These terms govern your use of Moon Phase Emoji (the &quot;
                Site&quot;). By loading any page, you confirm that you&apos;ve
                read these terms, that you understand them, and that you
                agree to be bound by them. If you don&apos;t agree, please
                don&apos;t use the Site.
              </p>
              <p>
                If you&apos;re using the Site on behalf of an organization,
                you represent that you have authority to bind that
                organization to these terms.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              2. Description of the service
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                Moon Phase Emoji is a free informational website that
                displays the current moon phase emoji, the lunar cycle, and
                related educational content. The site calculates the live
                Moon phase in your browser using a published synodic-month
                algorithm aligned with the U.S. Naval Observatory&apos;s
                phase tables.
              </p>
              <p>
                The Site is provided for general informational purposes only.
                It is not a substitute for professional astronomical,
                navigational, or calendrical advice, and should not be relied
                upon for any decision where accuracy is critical.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              3. Acceptable use
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                You agree to use the Site lawfully and not to interfere with
                its operation. Without limiting that, you agree not to:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Attempt to access non-public areas of the Site, its
                  servers, or underlying infrastructure.
                </li>
                <li>
                  Use automated tools to scrape, mirror, or republish content
                  at a volume that could degrade service for others.
                </li>
                <li>
                  Submit content through the Contact form that is unlawful,
                  infringing, abusive, or otherwise harmful.
                </li>
                <li>
                  Use the Site in a way that could damage, disable, or
                  impair it.
                </li>
              </ul>
              <p>
                We may, at our discretion, restrict or block access for
                anyone whose conduct we believe violates these terms.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              4. Intellectual property
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                The original text, layout, design, and code on this Site are
                © Moon Phase Emoji. The Unicode moon phase emoji symbols are
                part of the Unicode standard and are subject to the Unicode
                open data license. Astronomical phase data is drawn from the
                U.S. Naval Observatory&apos;s publicly available service.
              </p>
              <p>
                You&apos;re welcome to quote short excerpts for educational
                or review purposes, with attribution and a link back to the
                source page. Reproduction of entire pages, in any form, is
                not permitted without written permission.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              5. Disclaimers
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                The Site is provided &quot;as is&quot; and &quot;as
                available.&quot; We make no warranties, express or implied,
                about its accuracy, reliability, availability, or fitness for
                any particular purpose. To the fullest extent permitted by
                law, we disclaim all liability for any loss or damage arising
                from your use of, or reliance on, the Site.
              </p>
              <p>
                Astronomical calculations are inherently approximate. The
                Moon phase displayed on this Site may differ from published
                tables by a few hours due to the use of mean orbital
                parameters. For tasks that require precise phase timing,
                consult the U.S. Naval Observatory directly. See our{" "}
                <Link
                  href="/disclaimer"
                  className="text-[#f5c542] underline-offset-4 hover:underline"
                >
                  Disclaimer page
                </Link>{" "}
                for the full statement.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              6. Limitation of liability
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                To the extent permitted by law, neither Moon Phase Emoji nor
                its author shall be liable for any indirect, incidental,
                consequential, or punitive damages arising out of or
                relating to your use of the Site. Any liability is limited to
                the amount you paid to access the Site, which is zero.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              7. Changes to these terms
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                We may update these terms from time to time. When we do,
                we&apos;ll change the &quot;Last updated&quot; date at the
                top of this page. Continued use of the Site after a change
                means you accept the new terms.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              8. Governing law and contact
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                These terms are interpreted in accordance with applicable
                law, without regard to conflict-of-law principles. Any
                disputes will be handled informally where possible — please
                start by reaching us through the{" "}
                <Link
                  href="/contact"
                  className="text-[#f5c542] underline-offset-4 hover:underline"
                >
                  Contact
                </Link>{" "}
                page.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
