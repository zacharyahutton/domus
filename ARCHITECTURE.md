# ARCHITECTURE — Domus Windows & Doors (flight test)

## Stack

Next.js 15 App Router · TypeScript · Tailwind CSS v4 · zod · Framer Motion **declared but unused in `src/` (audit finding)** · no database v1.

## Decisions

| Decision | Choice | Why |
|----------|--------|-----|
| Monolith | Next full-stack | SEO + one lead API; see `Knowledge/Engineering-Decisions/Next-vs-React-SPA.md` |
| FastAPI | Rejected | No Python/AI need |
| Content | Typed TS modules in `src/content/` | CMS-ready shapes without Database-Layer |
| Brand | Real Domus Windows & Doors Ltd. | Logo colors; Jamaica NAP; WhatsApp |

## Active pattern adapters

| Pattern | Where |
|---------|-------|
| Premium-Hero | `components/sections/DomusHero.tsx` |
| Portfolio-Gallery | `components/projects/ProjectGallery.tsx` |
| Lead-Funnel + Form-System | `components/forms/LeadForm.tsx` + `lib/lead.ts` |
| Secure-API ideas | `app/api/leads/route.ts` + `lib/rate-limit.ts` (**incomplete for prod** — see audit) |

## Labeled gaps (first principles)

| ID | Implementation |
|----|----------------|
| G1 | Next Route Handler lead API — **persistence + durable RL still open** |
| G2 | `lib/seo.ts`, `sitemap.ts`, `robots.ts`, LocalBusiness JSON-LD — **localhost default footgun** |
| G3 | `content/journal.ts` + journal routes |
| G4 | Project detail + related |
| G5 | `TestimonialsSection` — **UI only; content not verified** |
| G6 | Service detail pages |
| G7 | WhatsApp CTAs throughout — **no sticky FAB; Jamaica-only vs live multi-island** |
| G8 | `design-system.md` + CSS tokens from logo |
| G9 | FAQ section from live-site FAQ — **no FAQPage schema** |

## Security

Zod validation · honeypot → 204 · IP rate limit (in-memory; multi-instance caveat) · optional `LEAD_WEBHOOK_URL` (failure still returns 200) · no PII-full logs · **no CSP/security headers** (audit FAIL).

## Post-build audit pointer

Hostile audit 2026-07-19: `AUDITS/POST_BUILD_SENIOR_AUDIT.md` — production **5.4/10**, DevOS compliance **WARNING**.
