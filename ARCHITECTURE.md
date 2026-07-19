# ARCHITECTURE — Domus Windows & Doors (flight test)

## Stack

Next.js 15 App Router · TypeScript · Tailwind CSS v4 · zod · Framer Motion available (used lightly via CSS transitions) · no database v1.

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
| Secure-API ideas | `app/api/leads/route.ts` + `lib/rate-limit.ts` |

## Labeled gaps (first principles)

| ID | Implementation |
|----|----------------|
| G1 | Next Route Handler lead API |
| G2 | `lib/seo.ts`, `sitemap.ts`, `robots.ts`, LocalBusiness JSON-LD |
| G3 | `content/journal.ts` + journal routes |
| G4 | Project detail + related |
| G5 | `TestimonialsSection` |
| G6 | Service detail pages |
| G7 | WhatsApp CTAs throughout |
| G8 | `design-system.md` + CSS tokens from logo |
| G9 | FAQ section from live-site FAQ |

## Security

Zod validation · honeypot → 204 · IP rate limit (in-memory; multi-instance caveat) · optional `LEAD_WEBHOOK_URL` · no PII-full logs.
