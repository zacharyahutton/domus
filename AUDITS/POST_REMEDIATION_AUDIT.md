# POST-REMEDIATION AUDIT — Domus Windows & Doors

| Field | Value |
|-------|-------|
| **Date** | 2026-07-19 |
| **App** | `C:\Users\EverybodyHatesA1one\Documents\Domus` |
| **Prior audit** | `POST_BUILD_SENIOR_AUDIT.md` (overall **5.4 / 10**) |
| **Plan** | `REMEDIATION_PLAN.md` · `REMEDIATION_CODE_MAP.md` |
| **Code modified?** | **YES** — local only |
| **Git push?** | **NO** |
| **Verify** | `npm run test:lead` ✅ · `npm run lint` ✅ · `npm run build` ✅ (31 routes) |

---

## Before → after scores

| Dimension | Before | After | Evidence |
|-----------|--------|-------|----------|
| Design | 6.0 | **7.2** | Framer reveals; CTA contrast token; less fake-trust chrome |
| UX | 6.5 | **7.8** | Sticky WhatsApp; honest trust; legal footer; form 422 messages |
| Performance | 7.5 | **7.5** | Still Unsplash LCP risk (labeled) |
| SEO | 5.0 | **7.6** | `getSiteUrl()` no localhost in prod; FAQPage + Article; legal in sitemap |
| Security | 4.5 | **7.4** | Headers/CSP; origin check; webhook timeout/https; fail-closed leads; Upstash optional |
| A11y | 5.5 | **7.8** | Focus-trapped lightbox; mobile scroll lock; darker CTA; a11y statement |
| Conversion | 6.0 | **7.5** | Sticky WA; privacy link on form; trust without lies |
| Code quality | 7.0 | **7.6** | Shared URL/rate-limit modules; contract test enums aligned |
| **Overall** | **5.4** | **7.6** | Production-minded rebuild; not yet asset-complete |

DevOS compliance posture: **PASS with labeled gaps** (Next lead Active still Incoming; durable RL needs Upstash env; real photos still Future).

---

## What was fixed (mapped to audit)

| Finding | Status |
|---------|--------|
| Silent lead loss | **Fixed** — prod 503 without webhook; 502 on webhook fail |
| In-memory RL only | **Improved** — Upstash REST when env set; memory fallback labeled |
| Fake testimonials | **Fixed** — TrustSection + social proof CTAs |
| Localhost SEO poison | **Fixed** — `getSiteUrl()`; prod uses env or `siteConfig.url` |
| No legal pages | **Fixed** — privacy / terms / cookies / accessibility |
| No security headers | **Fixed** — `next.config.ts` |
| Lightbox a11y | **Fixed** — focus trap + restore |
| CTA contrast | **Fixed** — `--domus-cta: #b35f00` |
| Sticky mobile WA | **Fixed** |
| Flight-test footer / scaffold SVGs | **Fixed** |
| Placeholder honesty | **Fixed** — badges + copy |
| Origin / webhook hygiene | **Fixed** |
| framer-motion unused | **Fixed** — Reveal + gallery dialog |
| FAQ/Article schema | **Fixed** |

---

## Files changed (primary)

- `src/lib/site-url.ts` (new), `seo.ts`, `rate-limit.ts`
- `src/app/api/leads/route.ts`
- `next.config.ts`, `.env.example`
- `src/content/trust.ts`, `projects.ts`
- `src/components/**` (Header, Footer, StickyWhatsApp, Gallery, LeadForm, HomeSections, DomusHero, Reveal)
- `src/app/layout.tsx`, `page.tsx`, `sitemap.ts`, `robots.ts`
- `src/app/privacy|terms|cookies|accessibility/page.tsx`
- `src/app/journal/[slug]/page.tsx`, `services/page.tsx` (CTA)
- Deleted `public/{next,vercel,globe,file,window}.svg`
- DevOS: mining rule + SOP + Patterns Waiting ore note

---

## Remaining risks

1. **Placeholder Unsplash photography** — labeled, but still not Domus installs (F1).
2. **Upstash unset** — memory RL remains multi-instance weak until env configured.
3. **LEAD_WEBHOOK_URL** required for production lead acceptance — must configure on host.
4. **NEXT_PUBLIC_SITE_URL** should be set explicitly (warns then falls back to `siteConfig.url`).
5. **CSP** allows `'unsafe-inline'` / `'unsafe-eval'` for Next — tighten later if possible.
6. **WEROI/Portfolio not on disk** — cross-project animation mine incomplete; re-run when paths exist.
7. **ReactBits** — GAP (not installed).
8. **No CI / Vercel project** in-repo yet.
9. Invented street address still absent (good); showroom street NAP still thin.

---

## Deploy confidence

| Question | Answer |
|----------|--------|
| Can this ship as a **staging** Domus preview with env set? | **Yes** |
| Can this replace live Domus.com as final brand site today? | **No** — needs real photos, webhook+RL env, optional multi-island WA |
| Overall deploy confidence | **Conditional Yes** for preview; **No** for final brand cutover |

---

## Verification snapshot

```text
npm run test:lead → ok
npm run lint → exit 0
npm run build → exit 0 (31 static/SSG routes + /api/leads)
```
