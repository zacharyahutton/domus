# POST-BUILD SENIOR AUDIT — Domus Windows & Doors

| Field | Value |
|-------|-------|
| **Audit date** | 2026-07-19 |
| **Auditor posture** | Hostile / post-build / no sugarcoating |
| **Canonical app** | `C:\Users\EverybodyHatesA1one\Documents\Domus` |
| **GitHub** | https://github.com/zacharyahutton/domus |
| **DevOS pointer** | `DevOS/Projects/Personal/Domus/` |
| **Live competitor** | https://domuswindows.com/ (Firecrawl skim 2026-07-19) |
| **Code modified?** | **NO** — report + learning docs only |
| **Build verified** | `npm run build` ✅ · `npm run test:lead` ✅ · `npm run lint` ✅ |

---

# PART A — Website / Product Audit

## 1. Executive Summary

**Verdict: solid DevOS 1.8 flight-test scaffold; not a client-launchable Domus production site.**

Overall production score: **5.4 / 10**.  
DevOS compliance: **WARNING** (architecture honesty strong; security/production and pattern completeness weak).

What works: Next.js 15 App Router IA matches `PROJECT_PLAN.md`; logo-derived tokens; WhatsApp + Jamaica NAP cues; lead zod + honeypot + attempt at rate limit; sitemap/robots/metadata helpers; LocalBusiness JSON-LD; typed CMS-ready content modules; Active patterns adapted with labeled gaps.

What fails a hostile launch review:

1. **Placeholder / fabricated trust content** (footer admits it; Unsplash stock; invented testimonials).
2. **Leads can silently vanish** if `LEAD_WEBHOOK_URL` unset; webhook failure still returns 200.
3. **In-memory rate limit is not production-safe** on serverless.
4. **SEO base URL defaults to `http://localhost:3000`** when `NEXT_PUBLIC_SITE_URL` missing — canonical/sitemap poison.
5. **Zero legal pages** (privacy / terms / cookies) while collecting PII.
6. **No security headers / CSP**; orange CTAs likely fail WCAG contrast; lightbox lacks focus trap.
7. **Behind live site** on multi-island WhatsApp, newsletter, distributor logos, YouTube social proof, real install photography.

This is an excellent **learning artifact**. Shipping it as Domus.com would be reckless.

---

## 2. Architecture Breakdown

### Tree (purposes)

```text
Domus/
├── Brand/                      Source brand assets (logo + IG refs)
│   ├── Logo/domus-circular-badge.png
│   └── References/ig-grid-*.png
├── public/
│   ├── brand/logo.png          Runtime logo
│   └── *.svg                   Leftover Next scaffold junk (next/vercel/globe…)
├── src/
│   ├── app/                    App Router pages + API + SEO routes
│   │   ├── api/leads/route.ts  Lead POST handler
│   │   ├── layout.tsx          Fonts, chrome, JSON-LD, skip link
│   │   ├── page.tsx            Home composition
│   │   ├── about|contact|…     Marketing routes
│   │   ├── projects/[slug]     Case studies (SSG)
│   │   ├── services/[slug]     Product lines (SSG)
│   │   ├── journal/[slug]      Education posts (SSG)
│   │   ├── sitemap.ts|robots.ts
│   │   └── globals.css         Design tokens + a11y motion
│   ├── components/
│   │   ├── layout/Header|Footer
│   │   ├── sections/DomusHero|HomeSections
│   │   ├── projects/ProjectGallery
│   │   └── forms/LeadForm
│   ├── content/                Typed CMS-ready modules (no DB)
│   └── lib/                    seo, lead zod, rate-limit
├── scripts/lead.contract.test.mjs
├── PROJECT_PLAN.md · ARCHITECTURE.md · design-system.md
└── AUDITS/ (this report)
```

| Layer | Choice | Evidence |
|-------|--------|----------|
| Framework | Next.js **15.5.20** App Router + Turbopack | `package.json` |
| FE | React **19.1**, Server Components default; client islands for Header, LeadForm, Gallery | `"use client"` files |
| BE | Single Route Handler `POST /api/leads` | `src/app/api/leads/route.ts` |
| DB | **None** (v1 by design) | `ARCHITECTURE.md`, `PROJECT_PLAN.md` |
| Styling | Tailwind CSS **v4** + CSS vars from logo | `globals.css`, `design-system.md` |
| Animation | `framer-motion` in deps but **unused in src/**; CSS transitions + hover scale only | grep: only `package.json` |
| State | Local React `useState` only | Header, Gallery, LeadForm |
| Validation | zod **4.x** shared server schema | `src/lib/lead.ts` |
| Content | TS modules | `src/content/*` |
| Deploy | Not configured in-repo (no `vercel.json`, no CI) | repo root |

Build output (2026-07-19): **27 static routes** + dynamic `/api/leads`. First Load JS ~124–127 kB shared ~131 kB — acceptable for marketing.

---

## 3. Feature Inventory

| Feature | Status | Evidence |
|---------|--------|----------|
| Home hero (brand-first) | **Completed** | `DomusHero.tsx` |
| Products overview + 4 detail pages | **Completed** | `services/*`, `content/services.ts` |
| Portfolio grid + filter + lightbox | **Completed** | `ProjectGallery.tsx` |
| Project case studies + related | **Completed** | `projects/[slug]/page.tsx` |
| Journal index + posts | **Completed** | `journal/*`, `content/journal.ts` |
| About + NAP block | **Completed** (thin) | `about/page.tsx` |
| Contact + lead form + WhatsApp | **Completed** | `contact/page.tsx`, `LeadForm.tsx` |
| FAQ section | **Completed** | `HomeSections.FaqSection`, `trust.ts` |
| Testimonials UI | **Completed UI / FAIL content** | invented quotes in `trust.ts` |
| Process steps | **Completed** | `trust.ts` |
| SEO metadata helpers | **Completed** | `lib/seo.ts` |
| sitemap.xml / robots.txt | **Completed** | `sitemap.ts`, `robots.ts` |
| LocalBusiness JSON-LD | **Partial** | missing street address, geo, hours, multi-location |
| Lead API + honeypot | **Partial** | works locally; persistence optional |
| Rate limiting | **Partial → production FAIL** | in-memory Map |
| Sticky mobile WhatsApp FAB | **Missing** | only header/footer/inline links |
| Multi-island WhatsApp (live has TT/AG/etc.) | **Missing** | Jamaica-only in `site.ts` |
| Privacy / Terms / Cookies | **Missing** | no routes; footer has no legal links |
| Accessibility statement | **Missing** | — |
| Real photography / before-after pairs | **Missing** | Unsplash only |
| Newsletter | **Missing** vs live | — |
| Distributor / membership badges | **Missing** vs live | — |
| YouTube playlist embeds | **Missing** vs live | social URLs in config unused in UI |
| CMS / admin | **Missing** (typed modules only) | by design |
| Auth / Dashboard / DB | **N/A** | correctly out of scope |
| Booking multi-step | **Missing** (soft consult via form) | plan optional |
| Security headers / CSP | **Missing** | `next.config.ts` images only |
| Deploy pipeline | **Missing** | — |

---

## 4. Business / Trust Features Checklist

| Item | Present? | Notes |
|------|----------|-------|
| Privacy policy | ❌ | Collecting name/email/phone/message with no policy page |
| Terms of use | ❌ | — |
| Cookie policy / consent | ❌ | No analytics cookies observed; still expected for SMB polish |
| Accessibility statement | ❌ | Skip link + focus ring exist; no statement |
| Contact channels | ✅ | Office, WhatsApp, email, showroom cities |
| Footer legal links | ❌ | Copyright + **flight-test disclaimer** only (`Footer.tsx`) |
| Social proof (real) | ❌ | Fabricated testimonials; no review widgets |
| Testimonials | ⚠️ UI only | `trust.ts` — names look invented; no video/source |
| Reviews (Google etc.) | ❌ | — |
| Trust badges / 25 years | ⚠️ | Gold pill in footer; not logo-mark badge asset |
| FAQ | ✅ | 5 Qs aligned with live FAQ themes |
| Warranty claim | ⚠️ | Stated in FAQ/services; no PDF link |
| Social icons in chrome | ❌ | `siteConfig.social` used in JSON-LD only |

**Hostile note:** Publishing invented testimonials as customer voice is a brand-integrity and advertising-risk failure. Footer already confesses placeholders — good honesty for a flight test, fatal for launch.

---

## 5. Navigation / UX Audit

**IA (good):** Our Work · Products · Insights · About · Contact + WhatsApp CTA — matches plan.

| Issue | Severity | Evidence |
|-------|----------|----------|
| Mobile menu: no body scroll lock / focus return | Medium | `Header.tsx` |
| Gallery lightbox: Escape works; **no focus trap**, no initial focus | High (a11y) | `ProjectGallery.tsx` |
| Tabs (`role="tab"`) without `tabpanel` / keyboard arrows | Medium | Gallery filters |
| Hero includes phone/WhatsApp beyond hero budget | Low | `DomusHero.tsx` |
| Home is long — conversion path diluted | Medium | `page.tsx` |
| No sticky mobile quote/WhatsApp bar | High (conversion) | — |
| Services index text-only vs imaged home cards | Low | `services/page.tsx` |
| `LeadForm` `noValidate` — generic errors ignore 422 issues | Medium | `LeadForm.tsx` |

---

## 6. Design System Review

**Documented system quality: Strong (B+).**  
**Implementation fidelity: Mixed (C+).**

Wins:
- Tokens from geometric D (`--domus-magenta|green|blue|orange|gold`) — `globals.css` + `design-system.md`.
- Montserrat + Source Sans 3 via `next/font` — not Inter as hero voice.
- Brand stripe accent; orange primary CTA; white/fog surfaces.
- Hero composition mostly brand-first with full-bleed photo.

Fails / generic drift:
- **Heavy card chrome** across services, journal, testimonials, gallery.
- **Stock Unsplash** everywhere — template, not Domus installs.
- **framer-motion declared unused** — promised motion not delivered.
- Orange `#FF9800` + white text — **likely WCAG AA fail** for normal-size controls.
- Leftover `public/next.svg` etc. scream scaffold.

**Premium vs generic:** Competent agency template, not premium manufacturer showcase. Live site is uglier but more authentically Domus.

---

## 7. ReactBits / Advanced UI Opportunities (brand-appropriate)

| Opportunity | Fit | Difficulty | Notes |
|-------------|-----|------------|-------|
| True before/after slider | High | Medium | Needs real assets |
| Subtle scroll reveal | Medium | Low | Use framer-motion already in package |
| Sticky mobile WhatsApp sheet | High | Low | Brand-critical |
| Showroom map (Kingston / MoBay) | Medium | Medium | Local SEO + trust |
| Product configurator | Later | High | Nice later |
| Parallax / 3D / purple glow kits | **Reject** | — | Off-brand |

---

## 8. SEO Audit

| Area | Grade | Evidence / issue |
|------|-------|------------------|
| Title template + descriptions | B | `layout.tsx`, `createMetadata` |
| Canonical URLs | **F if env unset** | `NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"` |
| Open Graph / Twitter | B- | Present |
| sitemap / robots | B | Present |
| JSON-LD LocalBusiness | C | No streetAddress, geo, hours; `url` hardcodes live domain |
| FAQPage / Article schema | ❌ | Missing |
| Local NAP | C+ | Phones OK; cities only |
| Content depth | C | Thin journal |
| Image SEO | C | Alts OK; stock hurts |
| Indexation honesty | ⚠️ | Placeholders should be `noindex` until real |

**Live wins:** multi-country WhatsApp, newsletter, denser proof, blog equity, logos, YouTube.  
**Rebuild wins:** modern IA, on-site journal, portfolio filters, SEO pack *when env set*.

---

## 9. Security Audit (vs DevOS)

| Control | Verdict | Evidence |
|---------|---------|----------|
| Input validation | **PASS** | zod server-side |
| Honeypot | **PASS** | → 204 |
| Rate limit | **FAIL (prod)** | in-memory Map; spoofable XFF |
| Abuse / captcha | **WARNING** | Honeypot only |
| Secrets | **PASS** | env names only |
| PII logging | **PASS** | redacted |
| Lead persistence | **FAIL** | no webhook → drop; webhook fail still 200 |
| Webhook SSRF | **WARNING** | no timeout/allowlist |
| CSRF Origin check | **WARNING** | absent |
| Security headers / CSP | **FAIL** | none in `next.config.ts` |
| XSS | **PASS** mostly | React + JSON.stringify LD |

**Security overall: WARNING · FAIL for multi-instance production lead intake.**

---

## 10. Production Readiness Scores

| Dimension | Score /10 | Explanation |
|-----------|-----------|-------------|
| Design | **6.0** | Good tokens; stock + cards + unused motion |
| UX | **6.5** | Clear IA; weak sticky CTA; lightbox a11y |
| Performance | **7.5** | SSG OK; Unsplash LCP risk |
| SEO | **5.0** | Pack exists; localhost footgun |
| Security | **4.5** | Validation good; RL/headers/persistence fail |
| A11y | **5.5** | Basics yes; contrast + dialog no |
| Conversion | **6.0** | Form fields strong; trust/legal weak |
| Code quality | **7.0** | Clean; thin tests; dead dep |
| **Overall** | **5.4** | Flight-test ≠ production Domus |

---

## 11. Missing Premium Features

### Needed for launch

1. Real assets / quotes (or remove testimonials).
2. Durable lead delivery with failure handling.
3. Redis/Upstash RL + optional captcha.
4. Privacy + Terms + footer legal.
5. `NEXT_PUBLIC_SITE_URL` enforced; align `siteConfig.url`.
6. Street NAP + richer schema.
7. Remove flight-test footer; strip scaffold SVGs.
8. CTA contrast + lightbox focus trap; `noindex` until real.
9. Security headers.

### Nice later

Multi-island WA, newsletter, YouTube, distributor logos, before/after slider, CMS, sticky FAB, Booking wizard, reviews.

---

## 12. Improvement Roadmap

### Phase 1 — Critical

| Item | Files | Complexity | Impact |
|------|-------|------------|--------|
| Env-guard SEO base URL | `lib/seo.ts`, `sitemap.ts`, `robots.ts`, `layout.tsx` | Low | High |
| Lead delivery fail-closed | `api/leads/route.ts` | Medium | Critical |
| Durable rate limit | `lib/rate-limit.ts` | Medium | Critical |
| Privacy + Terms | new pages + `Footer.tsx` | Low | High |
| Replace placeholders | `content/*`, `Footer.tsx` | Medium | Critical |
| Security headers | `next.config.ts` | Low | High |
| A11y contrast + dialog | `globals.css`, `ProjectGallery.tsx` | Low–Med | High |

### Phase 2 — Premium

Real photos, before/after UI, sticky WA, social footer, FAQPage/Article LD, framer reveals, client zod errors.

### Phase 3 — Advanced

Multi-market phones, newsletter/CRM, YouTube, maps, captcha, CMS.

### Phase 4 — DevOS extraction (no auto-promote)

Next-Lead-Route-Handler → Incoming→Active; SEO-Foundation flesh; Local-Business WhatsApp CTA; Lessons for metadataBase + fake testimonials.

---

# PART B — PHASE 10 DevOS Compliance Audit

## 1. Architecture Intelligence — **WARNING**

| Check | Result |
|-------|--------|
| PROJECT_PLAN before build | **PASS** |
| Gap honesty | **PASS** |
| Stack decision | **PASS** |
| Decision Engine honesty | **PASS** |
| IA match | **PASS** |
| Prod caveats treated as done | **FAIL** |

---

## 2. Pattern Usage Audit

| Pattern | Used? | Notes |
|---------|-------|-------|
| Premium-Hero | ✅ Adapted | Good |
| Portfolio-Gallery | ✅ Adapted | A11y incomplete |
| Lead-Funnel / Form-System | ✅ | Extended fields |
| Secure-API | ⚠️ Ideas only | Need Next adapter |
| Booking / Auth / DB / FastAPI / Dashboard | ❌ N/A | Correct |

Candidates (not promoted): Next-Lead-Route-Handler, SEO-Foundation Next, Local-Business WhatsApp CTA.

---

## 3. Security Compliance — Evidence

Server zod ✅ · Honeypot ✅ · PII logs ✅ · Secrets env ✅ · Rate limit ⚠️/❌ · Captcha ❌ · CSP ❌ · Lead persistence ❌

---

## 4. Quality Engineering

- One contract test duplicates schema (drift vs `lib/lead.ts`).
- TS/lint/build pass.
- Breaks first: lost leads → RL → localhost SEO → Unsplash → fake-quote trust.

---

## 5. AI Development Audit

**Wins:** Brand correction; gap honesty; logo tokens; WA fields; labeled adapters.  
**Mistakes:** Fake testimonials; Unsplash-as-portfolio; overclaim Secure-API; domain collision in `siteConfig.url`; unused framer-motion; duplicated test schema.

---

## 6. Learning Extraction Summary

Brand+live skim first · Next lead Active missing · SEO Knowledge≠Active · No fake testimonials · Documented RL caveat ≠ Secure-API.

---

## 7. Production Deployment Audit

Build ✅ · Hosting config ❌ · Env checklist ⚠️ · Observability ❌ · CI ❌ · Lead runbook ❌

---

## 8. DevOS Scorecard

| Dimension | Score /10 |
|-----------|-----------|
| Architecture | **8.0** |
| Security | **4.5** |
| Pattern Usage | **7.0** |
| Reusable Intelligence | **7.5** |
| AI Workflow | **7.0** |
| Code Quality | **7.0** |
| Production Readiness | **4.5** |
| **Overall Project** | **6.5** |

**Would this increase DevOS maturity?** **YES** if Phase 4 curated; **NO** if left as one-off without Incoming/Active follow-through.

---

## 9. Knowledge Domus Should Carry Forward

1. Next-Lead-Route-Handler contract (200/204/422/429 + durable RL + fail-visible persistence).
2. Next SEO Foundation with hard-fail when public URL unset in prod.
3. Local-Business WhatsApp CTA (inject numbers).
4. Never invent testimonials.
5. Stock photography ≠ manufacturer portfolio.
6. Serverless RL caveat ≠ Secure-API shipped.
7. Prompt winner: real brand + live skim + gap table before code.

---

## Appendix — Verification Snapshot

```text
npm run build   → exit 0 (Next 15.5.20, 27 pages)
npm run test:lead → ok
npm run lint → exit 0
git remote → https://github.com/zacharyahutton/domus.git
branch → main
```

**No application source files were modified for this audit.**
