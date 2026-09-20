import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/site/page-header";
import { ContactForm } from "@/components/site/contact-form";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Moon Phase Emoji with corrections, questions, or feedback about the current moon phase emoji, the lunar cycle, or any page on the site. We read every message.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact — Moon Phase Emoji",
    description:
      "Contact us with corrections, questions, or feedback about the current moon phase emoji or the lunar cycle. We read every message.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Moon Phase Emoji",
    description:
      "Contact us with corrections, questions, or feedback about the current moon phase emoji or the lunar cycle.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="Spotted an error in the current moon phase emoji? Have a question about how we calculate the lunar cycle, or want to suggest a new section? Send a message below — we read everything and reply within two business days."
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <ContactForm />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-display text-lg font-semibold text-[#f5c542]">
              Corrections
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#c4b9d6]">
              If you see a phase that doesn&apos;t match the sky, please tell
              us. The U.S. Naval Observatory is the source of truth, and we
              align our calculator to their phase tables. Include your
              timezone so we can replicate the calculation on our end.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-display text-lg font-semibold text-[#f5c542]">
              Editorial requests
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#c4b9d6]">
              Want a new section, a different calendar view, or coverage of a
              specific phase? That&apos;s exactly the kind of feedback that
              shapes this site. Use the subject line to tell us what
              you&apos;d like to see.
            </p>
          </div>
        </div>

        <p className="mt-8 text-sm text-[#9c8cba]">
          Looking for our source list instead? Read the{" "}
          <Link
            href="/sources"
            className="text-[#f5c542] underline-offset-4 hover:underline"
          >
            Sources
          </Link>{" "}
          page.
        </p>
      </section>
    </>
  );
}
