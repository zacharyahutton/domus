# Domus Remediation Code Map — Phase 2

Companion to `REMEDIATION_PLAN.md`. Evidence from local `Documents/Domus` source (2026-07-19).

---

## Critical / High — evidence table

| ID | File | Line / component | Reason | Risk | Fix | Complexity |
|----|------|------------------|--------|------|-----|------------|
| **C1** | `src/app/api/leads/route.ts` | ~57–70 | Webhook optional; catch swallows errors; always `200` | Leads silently vanish in prod | Require webhook in production (`VERCEL_ENV`/`NODE_ENV`); on webhook fail return `502`; log id only | M |
| **C2** | `src/lib/rate-limit.ts` | entire | In-memory `Map` per instance | Abuse bypass on serverless | Optional Upstash Redis REST; fallback memory + `X-RateLimit-Backend: memory` warning; document in `.env.example` | M |
| **C3** | `src/content/trust.ts` | `testimonials` 9–34 | Invented quotes/names | Brand / advertising integrity | Remove array; add `trustSignals` (years, warranty, showrooms, social) | L |
| **C3** | `src/components/sections/HomeSections.tsx` | `TestimonialsSection` 92–112 | Renders fake quotes | Same | Replace with `TrustSection` | L |
| **C3** | `src/app/page.tsx` | ~33 | Imports testimonials section | Same | Wire TrustSection | L |
| **C4** | `src/lib/seo.ts` | L4 | `?? "http://localhost:3000"` | Canonical/sitemap poison if env unset on deploy | `getSiteUrl()`: prod throws/uses explicit fallback only in `development`; prefer `NEXT_PUBLIC_SITE_URL` | L |
| **C4** | `src/app/layout.tsx` | L22 | Same localhost default | Same | Use shared `getSiteUrl()` | L |
| **C4** | `src/app/sitemap.ts` | L6 | Same | Same | Shared helper | L |
| **C4** | `src/app/robots.ts` | (check) | Likely same | Same | Shared helper | L |
| **H1** | — | missing routes | No privacy/terms/cookies | PII collection without notice | Add `privacy|terms|cookies|accessibility/page.tsx` | L |
| **H1** | `src/components/layout/Footer.tsx` | L63–66 | No legal links; flight-test copy | Legal + brand risk | Legal nav + production copyright | L |
| **H2** | `next.config.ts` | L3–9 | Images only | Clickjacking, MIME sniff, weak CSP | `headers()` async | L |
| **H3** | `src/components/projects/ProjectGallery.tsx` | L101–139 | Dialog no trap/focus | Keyboard users trapped poorly / tab out | Focus trap + initial focus close btn + restore | M |
| **H4** | `src/app/globals.css` | `--domus-orange: #ff9800` | White on orange ≈ fail AA | Low-vision / audit fail | Add `--domus-orange-ink` CTA bg `#c77700` or ink text | L |
| **H5** | — | missing | No sticky mobile WA | Conversion lag vs live | `StickyWhatsApp.tsx` client FAB | L |
| **H6** | `Footer.tsx` | L63–66 | Flight-test disclaimer | Unprofessional | Production copy | L |
| **H6** | `public/*.svg` | next/vercel/globe etc. | Scaffold junk | Unprofessional if linked | Delete unused | L |
| **H7** | `src/content/projects.ts` | Unsplash URLs | Presented as Domus installs | Misleading portfolio | `placeholder: true` + UI badge “Placeholder photography” | L |
| **H8** | `api/leads/route.ts` | POST entry | No Origin/Referer check | CSRF from random sites | Allowlist origins from `getSiteUrl()` | L |
| **H9** | `api/leads/route.ts` | fetch webhook | No timeout; any URL | Hang / SSRF if misconfigured | `AbortSignal.timeout(8_000)`; `https:` only | L |

---

## Inventory

### Routes (App Router)

| Route | Type | Notes |
|-------|------|-------|
| `/` | SSG page | Home composition |
| `/about` | SSG | Thin NAP |
| `/contact` | SSG | LeadForm |
| `/projects` | SSG | Gallery |
| `/projects/[slug]` | SSG | Case studies |
| `/services` | SSG | Index |
| `/services/[slug]` | SSG | 4 product lines |
| `/journal` | SSG | Index |
| `/journal/[slug]` | SSG | Posts |
| `/api/leads` | Dynamic Route Handler | POST only |
| `/sitemap.xml` | Metadata route | |
| `/robots.txt` | Metadata route | |
| **Add** `/privacy` `/terms` `/cookies` `/accessibility` | SSG | Legal / a11y |

### APIs

| Method | Path | Validation | Abuse controls |
|--------|------|------------|----------------|
| POST | `/api/leads` | zod `leadSchema` | Honeypot 204; in-memory RL; **needs** durable RL + origin + fail-closed webhook |

### Key components

| Component | Client? | Issues |
|-----------|---------|--------|
| `Header` | Yes | Mobile menu a11y |
| `Footer` | No | Legal + social |
| `DomusHero` | No | Stock hero; contact in hero |
| `HomeSections.*` | No | Fake testimonials |
| `ProjectGallery` | Yes | Lightbox a11y; filter roles |
| `LeadForm` | Yes | 422 details |
| **Add** `StickyWhatsApp` | Yes | Conversion |
| **Add** `Reveal` / motion wrapper | Yes | Framer |

### Dependencies (`package.json`)

| Dep | Used? | Action |
|-----|-------|--------|
| `next` 15.5.20 | Yes | Headers config |
| `react` 19.1 | Yes | — |
| `zod` 4.x | Yes | Shared lead schema |
| `framer-motion` | **Unused in src** | Add reveals + dialog |
| ReactBits | **Not installed** | GAP — do not add mid-remediation unless needed; Framer sufficient |
| `@upstash/ratelimit` | Not installed | Prefer fetch to Upstash REST without new dep if possible, or document optional |

### Security opportunities

- Fail-closed leads, origin check, webhook timeout, security headers, durable RL, honeypot keep, no PII in logs (keep).

### A11y opportunities

- Dialog focus trap, CTA contrast, mobile nav scroll lock, skip link (exists), FAQ semantics ok, form labels ok.

### SEO opportunities

- URL guard, FAQPage JSON-LD, Article on journal, richer LocalBusiness (no fake street address), legal pages linked, placeholder honesty / optional noindex staging flag.

### UX / animation opportunities

- Sticky WA, Framer scroll reveals, gallery hover (exists), loading on form (exists), remove card chrome slightly on trust section.

---

## Pattern involvement (per issue)

| ID | Pattern / Knowledge |
|----|---------------------|
| C1–C2, H8–H9 | Secure-API ideas + Lead-Funnel contract — **adapter, labeled gap** |
| C3 | Incoming Testimonial — **reject fake**; first principles trust |
| C4, M4–M5 | SEO Knowledge / Incoming SEO-Foundation — first principles |
| H2 | `Security/` Knowledge |
| H3 | Portfolio-Gallery Active — improve adaptation |
| H5, H1 | First principles |
| M6 | Framer already in deps; Portfolio motion mine if available |

---

## Execution notes

Implement in `Documents/Domus` only. Do not edit `DevOS/Projects/Personal/Domus/web` as the live app (learning copy — avoid drift). After code: Phase 12 audits + curated Waiting notes in DevOS.
