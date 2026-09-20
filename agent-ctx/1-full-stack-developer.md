# Task 1 — full-stack-developer — Work Records

## Summary

Built a complete, production-ready, SEO-optimized 7-page Next.js 16 website for the keyword **"current moon phase emoji"** with a unique cosmic editorial identity (deep eggplant/violet + warm gold moon glow, Cormorant Garamond display + Inter body). Home page contains all 11 required sections (hero, current phase detail, 8 phases, lunar cycle diagram, calendar, meanings, how-it-works, facts, FAQ, E-E-A-T bio, sources). All 7 pages navigate cleanly, SEO metadata + JSON-LD present, sitemap + robots dynamic, custom logo/favicon SVG.

## Files Created / Modified

### Library
- `src/lib/moon-phase.ts` — synodic-month algorithm; getMoonPhase, getMoonCalendar, PHASE_TABLE.
- `src/lib/constants.ts` — SITE_URL, NAV_LINKS, SOURCES, PHASE_DETAILS.
- `src/lib/faq-data.ts` — FAQ content kept in plain module (client/server safe).

### Public assets
- `public/logo.svg` — custom gold crescent + disc + "Moon Phase" wordmark
- `public/favicon.svg` — simplified crescent mark
- `public/icon.svg` — same mark, larger
- (Deleted `public/robots.txt` — replaced by dynamic `src/app/robots.ts`)

### App Router pages
- `src/app/layout.tsx` — fonts, Navbar, Footer, StarfieldBackground, full SEO metadata.
- `src/app/globals.css` — cosmic theme variables, keyframes, starfield, glass-card, eyebrow, reduced-motion.
- `src/app/page.tsx` — home with JSON-LD (WebSite + FAQPage).
- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/privacy-policy/page.tsx`
- `src/app/terms/page.tsx`
- `src/app/disclaimer/page.tsx`
- `src/app/sources/page.tsx`
- `src/app/sitemap.ts` — typed generator listing all 7 pages.
- `src/app/robots.ts` — typed generator allowing all + sitemap link.

### Shared site components (`src/components/site/`)
- `navbar.tsx` (client — sticky, transparent → solid on scroll, mobile Sheet)
- `footer.tsx`
- `starfield-background.tsx`
- `moon-phase-display.tsx` (client — live phase, updates every minute, hero + card variants)
- `hero.tsx` (client — H1 with exact "current moon phase emoji" phrase, countdown card)
- `current-phase-section.tsx` (client — wraps MoonPhaseDisplay card variant)
- `moon-calendar.tsx` (client — current-month grid with phase emoji per day)
- `lunar-faq.tsx` (client — shadcn Accordion)
- `home-sections.tsx` (server — EightPhases, LunarCycle SVG, MoonMeaning, HowItWorks SVG, MoonFacts)
- `reveal.tsx` (client — thin wrapper around framer-motion's motion[as] so server components stay server-rendered)
- `section-heading.tsx`
- `page-header.tsx`
- `eeat-bio.tsx` — Jacob Moses first-person bio, JM monogram avatar
- `sources-list.tsx` — reused on home + sources page
- `contact-form.tsx` (client — validated, sonner toast on submit)

## Key Decisions
- Used App Router `robots.ts` and `sitemap.ts` (typed generators) instead of static files. Removed `public/robots.txt` to avoid duplication.
- Created `reveal.tsx` client wrapper around framer-motion's `motion.div`/`motion.article` so that the bulk of the home page (`home-sections.tsx`) remains a server component for SEO and avoids the "createMotionComponent called from server" runtime error.
- Moved FAQ data into `src/lib/faq-data.ts` plain module so both server `page.tsx` (for JSON-LD `FAQPage`) and client `lunar-faq.tsx` (for the accordion) can import the same array without crossing the client boundary.
- Per-page metadata uses simple `title` strings (e.g. "About"); the root layout's `title.template: "%s — Moon Phase Emoji"` produces the full suffix.

## Verification
- `bun run lint` — passes with zero errors/warnings.
- All 7 pages return HTTP 200; `/sitemap.xml` 200; `/robots.txt` 200; `/favicon.svg`, `/icon.svg`, `/logo.svg` 200.
- Home page `<title>` contains the exact phrase "Current Moon Phase Emoji".
- JSON-LD blocks present (WebSite + FAQPage).
- Per-page `<title>`, `<meta name="description">`, canonical, OG, Twitter card all present.
- Moon phase algorithm verified via `bun` script: First Quarter 🌓, 63.4% illumination, 8.66 days age, next Full Moon in 6.11 days — correct for 2026-09-20.
- `prefers-reduced-motion` honored in CSS for all custom animations.
- Sticky footer via `min-h-screen flex flex-col` + `mt-auto` pattern.
- Mobile navbar uses shadcn `Sheet`; touch targets ≥44px.

## Issues Encountered & Resolved
1. Initial lint failure: `react-hooks/set-state-in-effect` flagged `setCal` synchronously called in effect body in `moon-calendar.tsx` — fixed by wrapping in a `compute()` helper.
2. Runtime 500 on home page: importing a named non-component (`FAQS`) from a `"use client"` module into a server component failed; resolved by moving FAQS to a plain module (`src/lib/faq-data.ts`).
3. Runtime 500 on home page: `motion.article` / `motion.div` from framer-motion used inside a server component; resolved by creating `reveal.tsx` client wrapper and replacing all direct `motion.*` calls in `home-sections.tsx`.
4. Duplicate site-name suffix in per-page titles (`About — Moon Phase Emoji — Moon Phase Emoji`) caused by layout `title.template` being applied to already-suffixed strings — fixed by stripping the suffix from per-page metadata `title` values; template handles it.
