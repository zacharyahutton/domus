# Domus Remediation Plan — Phase 1

| Field | Value |
|-------|-------|
| **Date** | 2026-07-19 |
| **Canonical app** | `C:\Users\EverybodyHatesA1one\Documents\Domus` |
| **Source audit** | `AUDITS/POST_BUILD_SENIOR_AUDIT.md` (overall **5.4 / 10**) |
| **Code map** | `AUDITS/REMEDIATION_CODE_MAP.md` |
| **Git** | Local only — **no push** until Zachary OK’s |
| **ReactBits** | **GAP** — not in `package.json`; use Framer Motion tastefully |

---

## Executive verdict

Hostile audit is accepted. Domus is a strong flight-test scaffold, not client-launchable. This plan remediates **all Critical + High**, meaningful **Medium / Quick Wins**, and adds premium polish (motion, sticky WA, trust honesty, legal pages) without fabricating testimonials or inventing Active Patterns.

---

## Issue categories

### Critical

| ID | Issue | Target |
|----|-------|--------|
| C1 | Leads return 200 when webhook missing or webhook fails — silent loss | Fail-closed / fail-visible delivery |
| C2 | In-memory rate limit unsafe on serverless | Durable RL with Upstash optional + honest fallback |
| C3 | Fabricated testimonials presented as customer voice | Replace with real trust strategy (no fake quotes) |
| C4 | SEO `metadataBase` / canonical / sitemap default to `localhost` | Harden URL resolution; prod fail-closed |

### High

| ID | Issue | Target |
|----|-------|--------|
| H1 | No Privacy / Terms / Cookies while collecting PII | Legal pages + footer links |
| H2 | No security headers / CSP | `next.config.ts` headers |
| H3 | Gallery lightbox: no focus trap / initial focus | Dialog a11y |
| H4 | Orange CTA + white text likely WCAG fail | Darker CTA token / ink text where needed |
| H5 | No sticky mobile WhatsApp CTA | Sticky FAB / bar |
| H6 | Flight-test footer disclaimer + scaffold SVGs | Production footer; remove junk public assets |
| H7 | Stock photos unlabeled as placeholders | Label placeholders; honest portfolio framing |
| H8 | Origin/CSRF check absent on lead POST | Origin allowlist when site URL set |
| H9 | Webhook fetch: no timeout / SSRF hygiene | Timeout + URL protocol check |

### Medium

| ID | Issue | Target |
|----|-------|--------|
| M1 | Mobile nav: no scroll lock / focus return | Header a11y |
| M2 | Gallery tabs lack tabpanel / arrow keys | Improve or demote to toolbar |
| M3 | LeadForm ignores 422 issue details | Surface zod issues |
| M4 | JSON-LD thin (no hours, geo, street) | Enrich from known public facts; no invention of street if unknown |
| M5 | FAQPage / Article schema missing | Add FAQPage on home; Article on journal posts |
| M6 | framer-motion unused | Scroll reveals + lightbox motion |
| M7 | Social links only in JSON-LD | Footer social icons |
| M8 | Home conversion path diluted | Tighten trust section; keep IA |
| M9 | Contract test schema drift vs `lib/lead.ts` | Align test to shared schema export or document |

### Low

| ID | Issue | Target |
|----|-------|--------|
| L1 | Hero includes phone beyond hero budget | Soften secondary contact line |
| L2 | Services index text-only vs imaged cards | Light visual polish |
| L3 | `noindex` until real assets (optional honesty) | `robots` / env flag for staging |
| L4 | Accessibility statement | Short `/accessibility` page |

### Quick Wins

| ID | Issue | Target |
|----|-------|--------|
| Q1 | Delete leftover `public/*.svg` scaffold junk | Delete |
| Q2 | Cookie policy (even if no analytics cookies) | Page + footer |
| Q3 | Prefer-reduced-motion already present — keep | Preserve |
| Q4 | Loading states on form submit | Already partial — polish |
| Q5 | `.env.example` documenting required vars | Add |

### Future (out of this remediation scope — document only)

| ID | Issue |
|----|-------|
| F1 | Real Domus install photography / before-after pairs |
| F2 | Multi-island WhatsApp numbers |
| F3 | Newsletter / CRM |
| F4 | YouTube playlist embeds |
| F5 | Distributor / membership badges |
| F6 | Captcha (Turnstile/hCaptcha) |
| F7 | CMS / admin |
| F8 | Deploy CI + Vercel project wiring |
| F9 | True before/after slider with real assets |
| F10 | Google Reviews widget (only with real reviews) |

---

## Full remediation checklist

### Phase 3 — Critical + High reliability/security/legal/trust

- [ ] C1 Lead fail-closed when no webhook in production; 502/503 on webhook failure
- [ ] C2 Rate limit: Upstash REST if env set; else in-memory + warn header / docs; never claim Secure-API complete
- [ ] C3 Remove fake testimonials; replace with Proof / Trust section (years, warranty claims from FAQ, showrooms, social links, YouTube CTA — no invented quotes)
- [ ] C4 `getSiteUrl()` — require `NEXT_PUBLIC_SITE_URL` in production; use `siteConfig.url` carefully; align sitemap/robots/layout
- [ ] H1 Privacy, Terms, Cookies pages
- [ ] H2 Security headers (CSP report-friendly, HSTS only if HTTPS prod, X-Frame, Referrer, Permissions)
- [ ] H3 Lightbox focus trap + Escape + restore focus
- [ ] H4 CTA contrast fix (`--domus-orange-deep` or dark text on orange)
- [ ] H5 Sticky mobile WhatsApp
- [ ] H6 Production footer + legal + social; remove flight-test line
- [ ] H7 Placeholder labeling on stock images / projects
- [ ] H8 Origin check on `/api/leads`
- [ ] H9 Webhook timeout + https-only allow

### Phase 4–8 — Quality / SEO / a11y / UX

- [ ] M1–M3 Header, gallery roles, form errors
- [ ] M4–M5 Schema enrichment
- [ ] M6 Framer Motion reveals (respect reduced motion)
- [ ] M7 Footer social
- [ ] Q1–Q5 Env example, junk SVGs, cookie page, a11y statement
- [ ] Premium polish: hover/spacing/typography/nav/gallery/loading

### Phase 9–11 — Mining + polish

- [ ] Mine candidates listed below; adapt winners only
- [ ] Queue curated notes in `DevOS/Learning/Patterns Waiting/` (no dump)
- [ ] ReactBits: document GAP if not installed

### Phase 12 — Final audit

- [ ] `POST_REMEDIATION_AUDIT.md` + `WHAT_CHANGED_AND_HOW.md`
- [ ] `npm run lint` · `npm run test:lead` · `npm run build`

---

## Execution order (senior engineer)

1. **Foundation libs** — `seo.ts` URL guard, `rate-limit.ts`, lead route reliability + origin + webhook hygiene  
2. **Content honesty** — `trust.ts` / HomeSections trust strategy; project placeholder flags  
3. **Legal + chrome** — privacy/terms/cookies/accessibility pages; Footer; Header; StickyWhatsApp  
4. **Config** — `next.config.ts` headers; `.env.example`; delete scaffold SVGs  
5. **A11y + motion** — Gallery dialog; CTA contrast; Framer reveals  
6. **SEO schema** — FAQPage, richer LocalBusiness, journal Article  
7. **Verify** — lint / lead test / build  
8. **Audits + DevOS waiting notes** — local only, no push  

---

## DevOS patterns — reuse vs gaps (honest)

| Capability | Status | Source | Plan |
|------------|--------|--------|------|
| Premium hero | ✅ Active | `Patterns/Active/Premium-Hero/` | Keep adapted DomusHero |
| Portfolio gallery | ✅ Active | `Patterns/Active/Portfolio-Gallery/` | Harden a11y (focus trap) |
| Lead form FE | ✅ Active | `Lead-Funnel` + `Form-System` | Better 422 UX |
| Lead API Next adapter | ⚠️ Partial | Secure-API **ideas** only — no Next Active | Improve adapter; queue Incoming |
| Rate limit durable | ❌ Gap | Secure-API sketch ≠ Upstash | First principles + optional Upstash |
| SEO Foundation Active | ❌ Gap | Incoming / `SEO/` Knowledge | First principles harden |
| Security headers | ❌ Gap | `Security/` Knowledge | First principles in next.config |
| Testimonials pattern | ❌ Gap | Incoming only | **Do not invent quotes** — proof section |
| WhatsApp sticky CTA | ❌ Gap | No Active | First principles |
| Legal pages | ❌ Gap | No Active | First principles SMB templates (generic) |
| ReactBits | ❌ Gap | Not installed | Skip; Framer Motion only |

Preference order honored: Active → Knowledge/Engineering → first principles (**labeled**).

---

## Cross-project mining candidates (polish)

Scan during Phase 9 — **curated adapt, never dump**. Paths as of 2026-07-19:

| Candidate | Expected path | Mine for | Notes |
|-----------|---------------|----------|-------|
| **weROI** | `Documents/WEROI` | Forms, API validation, dashboards | **Path missing locally this session** — skip or locate later |
| **Portfolio** | `Documents/PORTFOLIO` | Motion, hero, nav, typography, SEO | **Path missing locally this session** |
| **WehFiGo** | `Documents/WehFiGo` or `DevOS/Projects/Client/WehFiGo` | Product UX, docs discipline | Check DevOS project folder |
| **PNTCOG** | `Documents/PNTCOG` | Ministry IA, static constraints | Optional |
| **Telegram bot** | `Documents/TELEGRAM BOT DEMO` | N/A for marketing site | Do not mix |
| **DevOS Domus web copy** | `DevOS/Projects/Personal/Domus/web` | Avoid dual-source drift — **canonical is Documents/Domus** | Sync learning only |
| **Active Portfolio-Gallery** | `Patterns/Active/Portfolio-Gallery/` | Dialog / filter patterns | Primary mine for gallery a11y |
| **Active Lead-Funnel** | `Patterns/Active/Lead-Funnel/` | Contract tests | Align Domus test |
| **Secure-API** | `Patterns/Active/Secure-API/` | Rate limit + origin ideas | Adapt, don’t overclaim |

**Compare previous projects** (when multiple exist): score performance · maintainability · reusability · API cleanliness · UX — promote winner to Domus + queue `Learning/Patterns Waiting/`.

If WEROI/Portfolio folders are absent, document GAP and proceed with Active Patterns + Framer first principles.

---

## Constraints (binding)

- Local only — **no git push**
- No fabricated testimonials / stats / reviews
- Gap honesty
- Prefer small logical change sets
- Local commits only if useful at milestone end; prefer visible uncommitted files

---

## Success criteria

| Metric | Before | Target after |
|--------|--------|--------------|
| Overall production score | 5.4 | ≥ 7.5 |
| Security | 4.5 | ≥ 7.0 |
| SEO | 5.0 | ≥ 7.0 |
| A11y | 5.5 | ≥ 7.5 |
| Trust honesty | Fail | Pass (no fake quotes) |
| Lead reliability | Fail | Fail-closed / visible |
| Deploy confidence | No | Conditional Yes (needs real photos + env on host) |

---

## STOP gate

**Phase 1–2 deliverables:** this file + `REMEDIATION_CODE_MAP.md` must be complete and visible before implementation.  
**Authorized to continue:** user prompt says plan first then implement same session after plan exists — proceed to Phase 3+ once both files are written.
