# Mayank Goel — Portfolio

A brutalist, highly-animated personal portfolio for **Mayank Goel**, Full Stack Software Engineer.
Built to *not* look like a typical dev portfolio: oversized display typography, a custom cursor,
a preloader, scroll-driven motion, and an interactive **microservice universe** built from the real
enterprise platform he ships.

> This project is fully self-contained and independent of any other work. Everything lives in this
> folder.

---

## Tech stack

| Concern | Choice |
|---|---|
| Framework | **Next.js 15** (App Router, RSC) |
| Language | **TypeScript 5** (strict) |
| Styling | **Tailwind CSS 3.4** (bespoke brutalist tokens) |
| Animation | **Framer Motion 11**, **GSAP 3.12 + ScrollTrigger** |
| Smooth scroll | **Lenis 1.1** (synced to the GSAP ticker) |
| Fonts | Clash Display + General Sans (Fontshare), Inter (Google Fonts) — loaded via CSS `@import` so builds never depend on the network |
| Data viz | Hand-written **Canvas 2D** force-directed graph (no Three.js — keeps the bundle light and Lighthouse high) |

### Why these calls
- **Canvas, not Three.js/WebGL** for the service network — a 14-node graph doesn't need a 3D engine,
  and this keeps first-load JS ~170 kB and protects the performance budget.
- **Bespoke Tailwind, not a component kit** — the brutalist aesthetic is the point; shadcn/MUI would
  fight it.
- **Fonts via CSS `@import`, not `next/font`** — makes `next build` work on locked-down/offline
  networks. Swap back to `next/font` if you self-host the font files.

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (prerenders every page)
npm run start      # serve the production build
npm run lint       # eslint
```

Requires Node 18.18+ (Node 20 LTS recommended).

---

## Add your assets

1. **Portrait** — drop a transparent cut-out at `public/portrait.png` (head-to-shoulders works best).
   Until then the hero shows a designed **MG** monogram fallback automatically.
2. **Résumé** — a copy of the résumé ships at `public/Mayank_Goel_Resume.html`. To serve a PDF
   instead, open that HTML in a browser → Print → *Save as PDF* → save it to
   `public/Mayank_Goel_Resume.pdf`, then set `resume` in `src/lib/data/site.ts` back to
   `/Mayank_Goel_Resume.pdf`.
3. **Contact / social** — the LinkedIn, GitHub, email and phone in `src/lib/data/site.ts` are marked
   as *needs-verification*; confirm the handles before publishing.

---

## Architecture

Single-page site (`/`) composed of independent section components, plus dynamic **case-study** pages
under `/work/[slug]` generated statically from a typed data layer.

```
Providers (layout.tsx)
├── Preloader          one-time intro (sessionStorage-gated)
├── Cursor             custom cursor, reacts to [data-cursor] hints
└── SmoothScroll       Lenis ↔ GSAP ticker bridge
        └── page.tsx
            Navbar
            Hero → MarqueeStrip → About → Experience → Projects
                 → Skills → MicroserviceUniverse → Achievements → Contact
            Footer
```

**Content is data-driven.** All copy lives in `src/lib/data/*` so the UI never hardcodes strings.
Case studies, stats, the timeline, skills and the service graph all read from there — edit data, not
components.

### Sitemap
```
/                         Home (all sections)
/work/abcd-platform       Case study
/work/health-insurance-journey
/work/design-system
/work/askaura-ai
/sitemap.xml   /robots.txt   (generated)
```

---

## Folder structure

```
mayank-portfolio/
├── public/                     portrait.png (add), résumé
├── src/
│   ├── app/
│   │   ├── layout.tsx          metadata, JSON-LD, providers
│   │   ├── page.tsx            home composition
│   │   ├── globals.css         fonts, cursor, noise, reduced-motion
│   │   ├── not-found.tsx       branded 404
│   │   ├── sitemap.ts  robots.ts
│   │   └── work/[slug]/page.tsx   static case studies (generateStaticParams)
│   ├── components/
│   │   ├── providers/          SmoothScroll
│   │   ├── layout/             Navbar, Footer
│   │   ├── sections/           Hero, About, Experience, Projects, Skills,
│   │   │                       MicroserviceUniverse, Achievements, Contact,
│   │   │                       MarqueeStrip, CaseStudyIntro
│   │   └── ui/                 Cursor, Preloader, Magnetic, Marquee, RevealText,
│   │                           Counter, TiltCard, SectionHeading, RotatingBadge,
│   │                           Portrait, ButtonLink
│   └── lib/
│       ├── data/               site, about, experience, projects, skills, services
│       └── utils.ts            cn()
├── tailwind.config.ts          brutalist design tokens
└── next.config.mjs             security headers, console stripping
```

---

## Design system (tokens in `tailwind.config.ts`)

- **Colors** — `beige #F2D4BE`, `orange #FF6A00` (+`light`), `offwhite #FAF9F6`, `charcoal #111111`.
- **Type scale** — display sizes `mega`/`10xl` use `clamp()` so the giant type is fluid, never
  overflowing on mobile.
- **Fonts** — `font-display` (Clash), `font-sans`/`font-general` (General Sans), `font-inter` (UI).
- **Motion** — `ease-brand` cubic-bezier, `marquee` + `spin-slow` keyframes.

## Animation architecture

- **Lenis** drives smooth scroll and is stepped by the **GSAP ticker** (one RAF loop, no jank).
  Lenis is exposed as `window.__lenis` so the Navbar can `scrollTo` anchors.
- **Framer Motion** handles component-level entrance/hover/expand (Experience accordion, skill pills,
  counters, case-study intro).
- **GSAP ScrollTrigger** powers scroll-linked pieces (About timeline rail, Hero parallax).
- **Canvas RAF** runs the microservice graph physics + hover hit-testing.
- **`RevealText`** splits headings into words for staggered reveals.
- **Custom cursor** grows/labels itself from `[data-cursor="VIEW|OPEN|GO"]` on interactive elements.

## Accessibility & performance

- Full `prefers-reduced-motion` support — the preloader, parallax, marquees and graph physics all
  quiet down; the cursor falls back to the native pointer on touch/coarse devices.
- Semantic landmarks, `aria-expanded` on the experience accordion, focus-visible rings, alt text.
- Every page is **statically prerendered**; first-load JS ≈170 kB (home) / 151 kB (case study).

## SEO

- Metadata API (title template, OG, Twitter, canonical) in `layout.tsx` + per-case-study
  `generateMetadata`.
- **JSON-LD `Person`** schema in the document head.
- Generated `sitemap.xml` and `robots.ts`; `metadataBase` set from `SITE.url`.

---

## Deploy

Zero-config on **Vercel** (`vercel` / connect the repo). Any Node host works via `npm run build && npm run start`,
or export a static host since every route is prerendered.

Before going live, update `SITE.url` in `src/lib/data/site.ts` to the real domain (it drives canonical
URLs, the sitemap and OG tags).

## Maintenance note

`npm audit` will flag Next.js advisories — the advisory range currently spans virtually all published
versions, so there's no "clean" pin to jump to. Keep Next.js on the latest patch as fixes land
(`npm i next@latest eslint-config-next@latest`) and run `npm audit fix` for transitive `postcss`/`sharp`.
```
# Portfoltio
# portfolio
