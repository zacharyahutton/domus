# Domus Windows & Doors — PROJECT_PLAN (Phase 0 · corrected)

| Field | Value |
|-------|-------|
| **Project** | Domus Windows & Doors Ltd. — premium local-business / home-improvement platform |
| **Path** | `Projects/Personal/Domus/` |
| **Live site (reference)** | https://domuswindows.com/ |
| **Mode** | PRIMARY: DevOS 1.8 personal engineering flight test · SECONDARY: professional delivery simulation for a **real** Caribbean manufacturer |
| **Brand** | Domus Windows & Doors Ltd. — **not** WeROI · **not** a fictional European architecture atelier |
| **Primary market (this build)** | Jamaica / Caribbean homeowners & builders (showrooms Kingston + Montego Bay cues) |
| **Date** | 2026-07-19 |
| **Status** | Phase 0 reframed — plan complete; build authorized after this file |
| **Stack decision** | **Next.js App Router full-stack** (TypeScript, Tailwind, Framer Motion where appropriate) |

---

## 1. Intent (corrected)

Ship a production-quality **premium local-business marketing platform** for Domus Windows & Doors Ltd.: hurricane-ready uPVC windows, doors, fencing, handrails — Jamaica/Caribbean climate, security, UV, sound reduction. Full systems: marketing IA, portfolio/before-after, educational journal, SEO (local Jamaica), lead gen (project type / location / budget / timeline + WhatsApp), CMS-ready content modules.

This is **not** a luxury architecture atelier site. Previous draft framing is **void**.

---

## 2. Real brand facts (sources)

| Fact | Source |
|------|--------|
| Legal / trade name | Domus Windows & Doors Ltd. (logo badge) |
| Tagline / claim | World leader in uPVC windows, doors & outdoor products for Caribbean climate (`domuswindows.com` meta/description) |
| Products | Windows · Doors · Fencing · Handrails (+ consultation / quote) |
| Jamaica phones | Office **876-618-3474** · WhatsApp **876-619-1223** (site + IG cues) |
| Email | sales@domuswindows.com |
| Social | Facebook DomusWindowsAndDoors · IG `@domus.window.door` · YouTube · blog.domuswindows.com |
| Persona | “Mr. Domus” educational / before-after (IG) |
| Trust cue | Gold **25 Years** badge on IG creatives |
| Visual ID | Multi-color geometric **D** (magenta, green, blue, orange/yellow) + DOMUS wordmark + “Windows & Doors Ltd.”; white grounds; install photography |
| Brand files | `Brand/Logo/domus-circular-badge.png` · `Brand/References/ig-grid-1.png` · `Brand/References/ig-grid-2.png` |

### Live site skim (2026-07-19 · Firecrawl)

**Strengths today:** Quote form (name, phone, country, product, attribution), multi-island WhatsApp numbers, FAQ (uPVC, colors, vs steel/aluminum, warranty, maintenance), newsletter, distributor logos, house-tour / testimonial YouTube playlists, membership badges.

**Gaps / opportunities vs flight-test rebuild:** Dated IA & Arial-heavy UI; weak modern portfolio/before-after browsing; blog off-site (`blog.domuswindows.com`); no App Router SEO pack (sitemap/OG/schema as first-class); lead form lacks budget/timeline fields; Jamaica local SEO (NAP, LocalBusiness schema, Kingston/MoBay) underdeveloped relative to brand story; no CMS-ready typed content layer in current stack.

**Competitors (implicit):** Local aluminum/steel fabricators + other Caribbean uPVC importers — Domus differentiates on hurricane rating, uPVC durability in salt/humidity, laminate/security glass, 20yr frame warranty (per FAQ).

---

## 3. Intelligence scan (completed · honest)

| Layer | Loaded | Notes for *this* Domus |
|-------|--------|-------------------------|
| Control plane | `MASTER.md`, `START_HERE.md`, `.cursor/rules/project-plan-first.mdc` | Plan + gap honesty before code |
| Active patterns | All 10 under `Patterns/Active/` | See map — only claim what exists |
| Discovery | Provenance only | Not executable |
| Incoming | SEO-Foundation, Testimonial-Social-Proof, CMS-Marketing-Site | **Not executable** |
| Recipes | `Recipes/Local-Business-System/` (best fit) · `Recipes/Marketing-Website/` | No Windows/Doors niche recipe |
| Engineering-Decisions | `Next-vs-React-SPA.md`, `FastAPI-vs-Node.md` | Next full-stack for SEO + one lead API |
| Lessons | brand-first hero · lead spam controls · executable ≠ provenance | Apply |
| SEO | `SEO/Technical SEO/`, `SEO/JSON-LD/`, `SEO/Local SEO/`, crawlability | Knowledge — **not** Active code |
| Security | `Security/*`, `Knowledge/Security/*` | Apply to lead route |
| Design Intelligence | Principles only | Palette **from logo**, not invented atelier palette |
| Decision Engine | Custom Next justified for flight test + CMS-ready content layer | WP would often win for pure brochure client — labeled as rejected for this test |

---

## 4. Architecture decision

### Choice: **Next.js App Router full-stack**

1. Marketing + journal + local SEO → Next (`Next-vs-React-SPA.md`).
2. Single lead POST + WhatsApp deep-link — no Python/AI backend need → skip FastAPI.
3. Content as typed TS modules (CMS-ready) — **no** `Database-Layer` in v1.
4. Adapt Active Lead-Funnel / Form-System I/O to Next Route Handlers (labeled adapter).

### Rejected approaches

| Approach | Why rejected |
|----------|----------------|
| European “luxury atelier” Domus fiction | **Wrong brand** — voided |
| Invented cream/bronze atelier palette | Ignores real logo colors |
| Next + FastAPI | Overkill for brochure + leads |
| WordPress/Elementor | Valid Decision Engine default for client brochure; rejected here because flight test must exercise Active pattern adaptation in Next |
| Auth / Dashboard / DB | Out of scope v1 |
| Claiming Incoming SEO/Testimonials/CMS as Active | Forbidden |

### Dependencies

- `next`, `react`, `typescript`, `tailwindcss`, `framer-motion`, `zod`
- `next/font` — brand-aligned display + body (not Inter as hero voice)
- `next/image` — logo + install photography
- No DB/ORM v1

---

## 5. Capability map (honest)

Legend: ✅ Active · ⚠️ Partial · ❌ Gap

| Requirement | Status | DevOS source | Notes |
|-------------|--------|--------------|-------|
| Brand-first hero | ✅ | `Patterns/Active/Premium-Hero/` | Adapt to Domus logo + hurricane/Caribbean CTAs |
| Portfolio grid/filter/lightbox | ✅ | `Patterns/Active/Portfolio-Gallery/` | Adapt to installs / before-after / product categories |
| Lead form FE | ✅ | `Lead-Funnel` + `Form-System` | Extend fields: project type, Jamaica location, budget, timeline |
| Lead API + spam | ⚠️ | FastAPI stubs + `Secure-API` ideas + Lesson spam | **No Next handler in Active** — adapter G1 |
| Booking multi-step | ⚠️ Optional | `Booking-System` | Soft consult via form + WhatsApp; not full booking |
| Local-business recipe map | ⚠️ | `Recipes/Local-Business-System/` | Points at Active; not a site scaffold |
| Local SEO knowledge | ⚠️ | `SEO/Local SEO/`, JSON-LD guide | Guides only |
| SEO metadata/sitemap/robots/OG | ❌ Active | Incoming `SEO-Foundation` only | **G2** first principles from `SEO/` |
| Journal / education CMS-ready | ❌ | Incoming CMS only | **G3** typed modules |
| Before/after + project detail | ⚠️ | Gallery ≠ case studies | **G4** first principles on gallery |
| Testimonials | ❌ | Incoming only | **G5** first principles (YouTube/IG inspired) |
| Product service pages (4 lines) | ❌ | No Active | **G6** Windows/Doors/Fencing/Handrails |
| WhatsApp CTA / multi-channel | ❌ | No Active pattern | **G7** first principles (links from live site) |
| Brand design tokens from logo | ❌ Active kit | Design Intelligence principles | **G8** `design-system.md` from logo hexes |
| FAQ content system | ❌ Active | Live site FAQ + Discovery FAQ cards (provenance) | **G9** content modules / section |
| Auth / DB / FastAPI / Dashboard | N/A | Active exists | Out of scope — do not force-fit |

### Explicit GAPS

| ID | Needed | In DevOS? | Approach |
|----|--------|-----------|----------|
| G1 | Next `/api/leads` + rate limit + honeypot + extended fields | FastAPI only in Active | Labeled adapter; keep Lead-Funnel contract spirit |
| G2 | Next Metadata / sitemap / robots / OG / LocalBusiness schema | Incoming SEO-Foundation | First principles from `SEO/` |
| G3 | Journal (uPVC, hurricane glass, security) | No Active blog | Typed `content/journal` modules |
| G4 | Install portfolio detail + before/after | Gallery partial | First principles pages |
| G5 | Testimonials UI | Incoming only | First principles |
| G6 | Product service detail pages | No | First principles |
| G7 | WhatsApp + phone sticky CTAs | No | First principles |
| G8 | Domus multi-color design system | No token kit | From logo + IG refs |
| G9 | FAQ section | No Active | First principles from live FAQ |

---

## 6. Selected Active patterns — adaptation

| Pattern | Domus adaptation |
|---------|------------------|
| **Premium-Hero** | Logo/wordmark brand-level; headline hurricane-ready Caribbean homes; CTAs **Begin Your Project** + **View Our Work** |
| **Portfolio-Gallery** | Categories: Windows, Doors, Fencing, Handrails, Before/After; link to `/projects/[slug]` |
| **Lead-Funnel / Form-System** | Fields + honeypot; WhatsApp parallel CTA; Jamaica-first location |
| **Secure-API** | Rate-limit + validation ideas on Route Handler — not copy FastAPI middleware |

**Unused (honest):** Authentication-System, Database-Layer, FastAPI-Production-Service, Dashboard-System.

---

## 7. Information architecture

```text
/                         Home (hero, trust/25yrs, products, featured installs, process, testimonials, journal CTA, lead)
/projects                 Portfolio + filters (incl. before/after)
/projects/[slug]          Install case study
/journal                  Insights index
/journal/[slug]           Education article
/about                    Company / Mr. Domus / showrooms Jamaica
/services                 Overview
/services/windows
/services/doors
/services/fencing
/services/handrails
/contact                  Quote funnel + WhatsApp / phones
```

Jamaica NAP + LocalBusiness JSON-LD; WhatsApp `https://api.whatsapp.com/send?phone=18766191223`.

---

## 8. Design system mandate

Document in `design-system.md` **from logo** (do not invent atelier palette):

| Token | Approx | Role |
|-------|--------|------|
| Magenta / pink | logo D top-left | Accent A |
| Green | logo D top-right | Accent B |
| Blue | logo D bottom-left | Accent C |
| Orange / gold-yellow | logo D bottom-right + ring + 25yrs gold | Accent D / CTA warmth |
| Ink | near-black wordmark | Text |
| White / light gray | badge ground | Surfaces |

Premium **local-business** polish — Caribbean install photography, geometric D, white footers on graphics — not purple SaaS, not cream-terracotta atelier.

---

## 9. Security

Env for optional webhook; zod validation; honeypot; IP rate limit (document serverless limit); no third-party sale of leads (match live privacy claim); no secrets in client.

---

## 10. Roadmap

1. ✅ Intelligence scan + this corrected `PROJECT_PLAN.md`
2. Brand assets in `Brand/` + `design-system.md` from logo
3. Scaffold/continue `web/` Next app
4. Content modules (products, projects, journal, FAQ, testimonials)
5. Layout chrome + hero (Premium-Hero adapted)
6. Services + portfolio + journal pages
7. Contact lead + WhatsApp + `/api/leads`
8. SEO pack (G2) + LocalBusiness schema
9. Motion/a11y; form contract test; `npm run build`
10. Close docs + PATTERN_EXTRACTIONS (promote only if Domus-independent)

---

## 11. Success criteria

- [ ] Plan frames **real** Domus Windows & Doors (this file)
- [ ] Brand assets copied; design-system matches logo
- [ ] Gaps labeled; no fake Active claims
- [ ] Production `web/` builds
- [ ] Jamaica local SEO + WhatsApp CTAs
- [ ] Commit + push `zacharyahutton/devOS`
