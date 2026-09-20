import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "The Moon Phase Emoji privacy policy: what we collect (almost nothing), what we do with it (almost nothing), and how to reach us about your data.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: "Privacy Policy — Moon Phase Emoji",
    description:
      "What we collect, what we do with it, and how to reach us about your data.",
    url: `${SITE_URL}/privacy-policy`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Moon Phase Emoji",
    description:
      "What we collect, what we do with it, and how to reach us about your data.",
  },
};

const LAST_UPDATED = "January 12, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        intro={`This policy explains what we collect when you visit Moon Phase Emoji, what we do with it, and how to reach us if you have a question about your data. Last updated ${LAST_UPDATED}.`}
      />

      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              1. The short version
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                Moon Phase Emoji is a small editorial site. We don&apos;t run
                an ad network, we don&apos;t sell anything, and we don&apos;t
                have a customer database. When you open a page, the host
                platform may log standard request data (IP address, browser
                type, timestamp) for security and reliability. We do not
                receive that data as a person-identifying record.
              </p>
              <p>
                The current moon phase emoji you see in the hero is calculated
                entirely in your browser. No data about your visit is sent to
                a server to compute the phase. There is nothing in our
                calculation that requires us to know who you are.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              2. Information we collect
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                We collect essentially no first-party information. The contact
                form on the Contact page asks for your name, email, subject,
                and message — and that information is processed only to reply
                to you. The form does not currently write to a database; in
                its current configuration, submitted messages are received as
                an on-screen confirmation rather than stored server-side.
              </p>
              <p>
                Server-side, the host platform may keep access logs that
                contain IP addresses and request metadata. These logs are
                used to keep the site online and secure; we don&apos;t use
                them to identify visitors or build profiles.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              3. Cookies and similar technologies
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                We do not set tracking cookies. The site does not use Google
                Analytics, Facebook Pixel, or any similar analytics tool. If
                the host platform sets a technical cookie required to serve
                the site, it is functional and not used for cross-site
                tracking.
              </p>
              <p>
                Your browser&apos;s local storage is not used to persist any
                personally identifying information about your visit. The moon
                phase calculator runs in-memory and discards its state when
                you close the tab.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              4. Third-party links
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                We link out to external references — most notably the U.S.
                Naval Observatory&apos;s moon phase service and the Moon Phase
                Emoji reference site. These are independent sites with their
                own privacy policies. Once you click through, you&apos;re on
                their turf, and we have no control over what they collect.
              </p>
              <p>
                We use <code>rel=&quot;noopener noreferrer&quot;</code> on all
                external links to prevent your browsing context from being
                shared with the destination site.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              5. Children&apos;s privacy
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                Moon Phase Emoji is a general-audience reference site. We
                don&apos;t knowingly collect information from children, and
                the site is appropriate for all ages. If you believe a child
                has submitted information through the contact form, please
                reach us through the Contact page and we&apos;ll remove it.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              6. Your rights
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                Depending on where you live, you may have rights to access,
                correct, or delete personal information we hold about you.
                Because we don&apos;t maintain a visitor database, in
                practice there&apos;s usually nothing to delete — but if you
                believe otherwise, contact us and we&apos;ll investigate.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              7. Changes to this policy
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                If we change this policy, we&apos;ll update the
                &quot;Last updated&quot; date at the top of this page. We
                won&apos;t make retroactive changes to how we handle data
                that was already collected under a previous version of this
                policy.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-display text-2xl font-semibold text-[#f5c542]">
              8. Contacting us
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#c4b9d6]">
              <p>
                Questions about this policy go through the Contact page. We
                aim to reply within two business days. The fastest way to
                flag a privacy issue is to use the subject line
                &quot;Privacy&quot; so we can route your message correctly.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
