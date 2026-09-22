import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { EeatBio } from "@/components/site/eeat-bio";
import { SourcesList } from "@/components/site/sources-list";
import { MidContentBannerAd } from "@/components/ads/mid-content-banner-ad";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Moon Phase Emoji: a small editorial project by content specialist Jacob Moses to make the current moon phase emoji, the lunar cycle, and moon phase meaning easy to read and use.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About — Moon Phase Emoji",
    description:
      "A small editorial project by content specialist Jacob Moses to make the current moon phase emoji and the lunar cycle easy to read and use.",
    url: `${SITE_URL}/about`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Moon Phase Emoji",
    description:
      "A small editorial project by content specialist Jacob Moses to make the current moon phase emoji and the lunar cycle easy to read and use.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A small project about the Moon"
        intro="Moon Phase Emoji exists for one reason: to make the current moon phase emoji — and the meaning behind it — easy to look up in two seconds. No pop-ups, no ads, no newsletter wall. Just the phase, the glyph, the countdown, and a bit of context written by hand."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <article className="glass-card rounded-2xl p-6 lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              Why this site exists
            </h2>
            <div className="mt-4 space-y-5 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                Most moon phase sites are heavy on widgets and light on
                explanations. We wanted the opposite: a single screen where
                you land, see tonight&apos;s Moon, see the Unicode emoji that
                represents it, and read a few sentences about what that
                actually means. The current moon phase emoji is a tiny piece
                of information, but it&apos;s the piece most people are
                looking for when they search.
              </p>
              <p>
                The project is run by a single writer — Jacob Moses — who
                built the calculation logic, drafted every page, and cites
                the U.S. Naval Observatory&apos;s astronomical applications
                service for the underlying phase data. The Moon phase emoji
                set itself comes from the Unicode standard, and a focused
                reference site called Moon Phase Emoji documents the symbols
                and their order. We link to both from every relevant page.
              </p>
              <p>
                We don&apos;t sell anything. We don&apos;t have a newsletter.
                We don&apos;t track you with cookies beyond what the platform
                requires to serve the page. If you find a factual error,
                please use the Contact page and tell us — we&apos;ll fix it
                and credit you.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <h2 className="font-display text-xl font-semibold text-[#f5c542]">
                At a glance
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-[#c4b9d6]">
                <li><strong className="text-[#f5f0e8]">Founded:</strong> 2026</li>
                <li><strong className="text-[#f5f0e8]">Author:</strong> Jacob Moses</li>
                <li><strong className="text-[#f5f0e8]">Focus:</strong> Moon phases and the lunar cycle</li>
                <li><strong className="text-[#f5f0e8]">Data source:</strong> U.S. Naval Observatory</li>
                <li><strong className="text-[#f5f0e8]">Emoji set:</strong> Unicode U+1F311–U+1F318</li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h2 className="font-display text-xl font-semibold text-[#f5c542]">
                Editorial principles
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#c4b9d6]">
                <li>Original prose. No copy-paste from other sites.</li>
                <li>Cite sources, including on the same page where a fact appears.</li>
                <li>Plain language. Astronomy doesn&apos;t need jargon.</li>
                <li>Numbers and dates verified against USNO data.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Mid-content banner ad — between About sections */}
      <MidContentBannerAd />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we cover"
          title="The shape of the site"
          intro="Seven pages, each with a single job. Together they cover the lunar cycle from calculator to cultural context."
        />

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { href: "/", title: "Home", text: "The live moon phase emoji, the eight phases, the calendar, the FAQ, and the author bio — all in one scroll." },
            { href: "/about", title: "About", text: "Who we are, what we publish, and how the calculation behind the current moon phase emoji actually works." },
            { href: "/contact", title: "Contact", text: "A working contact form for corrections, questions, or feedback. We read everything." },
            { href: "/sources", title: "Sources", text: "Every data source and citation in one place, with links and editorial notes." },
            { href: "/privacy-policy", title: "Privacy", text: "What we collect (almost nothing), what we do with it (almost nothing), and how to reach us." },
            { href: "/terms", title: "Terms", text: "The terms under which the site is made available, including acceptable use and liability limits." },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="glass-card glass-card-hover block rounded-2xl p-6 transition-all"
            >
              <h3 className="font-display text-xl font-semibold text-[#f5c542]">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c4b9d6]">
                {c.text}
              </p>
              <span className="mt-4 inline-block text-xs font-medium uppercase tracking-widest text-[#f5c542]">
                Read &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <EeatBio />
      <SourcesList />
    </>
  );
}
