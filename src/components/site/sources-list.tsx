import { SOURCES } from "@/lib/constants";
import Link from "next/link";

interface SourcesListProps {
  /** Show the section eyebrow + heading pattern (default true). */
  withHeading?: boolean;
  /** Compact view used in inline citations. */
  compact?: boolean;
}

export function SourcesList({ withHeading = true, compact = false }: SourcesListProps) {
  return (
    <section
      aria-labelledby="sources-heading"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      {withHeading && (
        <div className="max-w-3xl">
          <span className="eyebrow">Sources &amp; citations</span>
          <h2
            id="sources-heading"
            className="mt-4 font-display text-3xl font-semibold text-[#f5f0e8] sm:text-4xl"
          >
            Where our moon phase data comes from
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#c4b9d6]">
            We don&apos;t generate lunar phase data from scratch. The
            calculations on this site are aligned with two trusted references:
            the U.S. Naval Observatory&apos;s astronomical applications service,
            which is the de facto standard for moon phase tables, and the
            Moon Phase Emoji reference site, which documents the Unicode moon
            phase symbol set. Both are cited wherever specific facts are used,
            and both are linked here in full.
          </p>
        </div>
      )}

      <ul className={compact ? "space-y-4" : "mt-8 grid grid-cols-1 gap-6 md:grid-cols-2"}>
        {SOURCES.map((source) => (
          <li
            key={source.url}
            className="glass-card glass-card-hover rounded-xl p-6 transition-all"
          >
            <h3 className="font-display text-xl font-semibold text-[#f5c542]">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline-offset-4 hover:underline"
              >
                {source.title}
              </a>
            </h3>
            <p className="mt-1 break-all text-xs text-[#9c8cba]">{source.url}</p>
            <p className="mt-4 text-sm leading-relaxed text-[#c4b9d6]">
              {source.description}
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-[#9c8cba]">
              Cited as: <span className="text-[#f5c542]">{source.citation}</span>
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs text-[#9c8cba]">
        Full citations and notes on our editorial process live on the{" "}
        <Link
          href="/sources"
          className="text-[#f5c542] underline-offset-4 hover:underline"
        >
          Sources
        </Link>{" "}
        page.
      </p>
    </section>
  );
}
