# Current Moon Phase Emoji

Live, real-time moon phase website built with **Next.js 16** + **TypeScript** + **Tailwind CSS 4** + **shadcn/ui** + **Framer Motion**.

The hero shows the real-time Moon phase emoji (calculated from the current date using a custom synodic-month algorithm), illumination %, lunar age, and a countdown to the next major phase. Includes 7 pages: Home, About, Contact, Privacy, Terms, Disclaimer, Sources.

## Pages

- `/` — Home (hero, 8 phases, lunar cycle, calendar, meanings, how phases work, facts, FAQ, E-E-A-T bio, sources)
- `/about` — About Us
- `/contact` — Contact form + direct email
- `/privacy-policy` — Privacy Policy
- `/terms` — Terms & Conditions
- `/disclaimer` — Disclaimer
- `/sources` — Sources

## Local development

```bash
# Install deps (Bun is the package manager used in development)
bun install

# Start dev server (port 3000)
bun run dev

# Lint
bun run lint

# Standard production build (Vercel / Node host)
bun run build
bun run start
```

## Deploying to Cloudflare Pages

This repo is preconfigured for Cloudflare Pages via [`@cloudflare/next-on-pages`](https://github.com/cloudflare/next-on-pages).

### Step 1 — Connect GitHub (fixes "Missing git connection")

On the Cloudflare dashboard (`Workers & Pages` → `Create` → `Pages` → `Connect to Git`):

1. Click **Connect to Git**.
2. If you have not yet linked GitHub, click **Connect GitHub** and authorize Cloudflare to access your account.
3. In the GitHub App installation that pops up, either grant access to **All repositories** or specifically to `techsuli415502-code/current-moon-phase-emoji-cloud-fair`.
4. Back on Cloudflare, the repository list should now populate. Select `current-moon-phase-emoji-cloud-fair`.
5. Click **Begin setup**.

> If the repo does not appear after authorization, go to https://github.com/settings/installations → Cloudflare Pages → Configure → make sure the repo is selected. Then return to the Cloudflare dashboard and refresh.

### Step 2 — Build configuration

On the "Set up your application" screen, fill in:

| Field                | Value                                              |
| -------------------- | -------------------------------------------------- |
| Project name         | `current-moon-phase-emoji` (or any slug you want)  |
| Production branch    | `main`                                             |
| Framework preset     | **Next.js (Static HTML Export)** is wrong — pick **None** (we run a custom build) |
| Build command        | `npx @cloudflare/next-on-pages@1 --experimental-minify` |
| Build output dir     | `.vercel/output/static`                            |
| Root directory       | (leave blank)                                       |
| Environment variables| `NODE_VERSION` = `20`                              |

Click **Save and Deploy**.

### Step 3 — Enable the `nodejs_compat` flag (one-time)

After the first deploy fails or succeeds, set the compatibility flag so that Next.js server components work on Cloudflare's runtime:

1. Go to your Pages project → **Settings** → **Functions**.
2. Under **Compatibility flags**, add `nodejs_compat` to the **Production** and **Preview** columns.
3. Trigger a new deploy (Deployments → Retry deployment).

### Step 4 — (Optional) Custom domain

Pages → Custom domains → Set up a custom domain. Update `SITE_URL` in `src/lib/constants.ts` to match, and redeploy so canonical/sitemap URLs use the real domain.

---

## Deploying to Vercel (alternative, simpler)

If Cloudflare Pages keeps failing on the Next.js 16 build, the simpler path is Vercel:

1. Go to https://vercel.com/new
2. Import `techsuli415502-code/current-moon-phase-emoji-cloud-fair`
3. Vercel auto-detects Next.js — no build config needed
4. Click **Deploy**

Vercel is the original Next.js host and supports every Next.js feature out of the box (including `output: "standalone"`, which is no longer in this repo but Vercel doesn't need it).

---

## Tech

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4 + shadcn/ui (New York)
- **Animations:** Framer Motion
- **Fonts:** Cormorant Garamond (display) + Inter (body) via `next/font/google`
- **SEO:** per-page metadata, Open Graph, Twitter cards, canonical URLs, JSON-LD (`WebSite` + `FAQPage`), `sitemap.ts`, `robots.ts`

## License

© 2026 Moon Phase Emoji. All rights reserved.
