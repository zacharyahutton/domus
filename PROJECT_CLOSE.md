# PROJECT_CLOSE — Domus Windows & Doors flight test

**Project:** Domus Windows & Doors Ltd. (premium local-business rebuild)  
**Date:** 2026-07-19  
**Stage:** milestone (DevOS 1.8 flight test) + **hostile post-build audit complete**  
**Audit:** `AUDITS/POST_BUILD_SENIOR_AUDIT.md` (canonical Domus repo) · DevOS copy `Projects/Personal/Domus/POST_BUILD_SENIOR_AUDIT.md`

## Summary

- Reframes Domus as **real** Jamaica/Caribbean uPVC manufacturer (not architecture atelier)
- Next.js production *scaffold*: home, projects, journal, services×4, about, contact, SEO pack, lead API
- Brand assets under `Brand/`; design tokens from geometric D logo
- Active patterns adapted: Premium-Hero, Portfolio-Gallery, Lead-Funnel/Form-System, Secure-API ideas
- Gaps labeled and built as first principles (SEO Active, blog, testimonials, WhatsApp, etc.)
- **Post-build audit overall production 5.4/10 · DevOS compliance WARNING** — learning-strong, launch-not-ready

## Audit outcomes (2026-07-19)

| Area | Result |
|------|--------|
| Build / lint / lead contract test | Pass |
| Production readiness | **5.4/10** — not client-launchable |
| Security | WARNING; FAIL multi-instance lead intake |
| Architecture honesty | Strong (plan + gaps) |
| Trust content | FAIL — Unsplash + invented testimonials + flight-test footer |

## Lessons

| Area | Lesson |
|------|--------|
| Design | Always lock real brand assets before inventing a “premium” palette |
| Engineering | Lead-Funnel FastAPI stubs need an explicit Next adapter pattern (G1) with **durable** RL + fail-visible persistence |
| Process | project-plan-first + gap honesty prevented fake Active claims |
| SEO | LocalBusiness JSON-LD + Jamaica NAP are Knowledge-driven; `metadataBase` localhost default is a production landmine |
| Trust | Invented testimonials are worse than an empty section — advertising/brand risk |
| Security | Documenting a serverless rate-limit caveat ≠ shipping Secure-API |

## Patterns created / candidates

| Pattern | Gate | Why |
|---------|------|-----|
| Next-Lead-Route-Handler | Incoming candidate | Domus-independent adapter for Lead-Funnel on Next |
| SEO-Foundation (Next) | Keep Incoming until portable + tested | Built once here; harden URL env fail-closed |
| Local-Business-WhatsApp-CTA | Incoming candidate | Common Caribbean/local SMB need |

## Mistakes

- Initial flight brief assumed fictional luxury architecture studio — corrected mid-flight
- Shipped fabricated testimonials and stock photography as if portfolio-ready
- Optional webhook + in-memory RL presented as adequate lead security for “production” narrative

## Never again

- Invent brand identity when logo/references exist
- Claim Incoming SEO/Testimonials as Active
- Invent customer quotes for trust sections
- Treat Unsplash as manufacturer portfolio proof
- Return `{ok:true}` when lead delivery failed or was never configured

## Learning answers

1. **Worked:** Active hero/gallery/lead FE transferred cleanly once brand was corrected  
2. **Failed:** Assuming DevOS had blog/SEO Active code; assuming optional webhook = durable leads  
3. **Repeat:** Live-site skim + logo tokens before design-system; hostile post-build audit before “done”  
4. **Never again:** Atelier palette for a multi-color local manufacturer brand; fake testimonials  

## Curation Gate

Promote now? **No** for new Active folders — candidates only in PATTERN_EXTRACTIONS until executable criteria + Domus-independent tests land. Full audit Phase 4 lists extraction order.
