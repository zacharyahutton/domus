# What Changed and How — Domus + DevOS (Zachary)

Local-only work · **2026-07-19** · **No GitHub push**

---

## 1. DevOS workflow changes (mining + compare)

Permanent Cross-Project Intelligence Mining is now part of the OS:

| Asset | Path |
|-------|------|
| Always-on rule | `DevOS/.cursor/rules/cross-project-intelligence.mdc` |
| Full SOP | `DevOS/Systems/SOPs/Cross-Project-Intelligence-Mining.md` |
| Wired into | `MASTER.md`, `START_HERE.md`, `MASTER_RULES.md`, `Curation-Gate.md`, `Project-Close.md` |
| Project-Tests note | `DevOS/Prompts/Project-Tests/README.md` |
| Domus ore queue | `DevOS/Learning/Patterns Waiting/Domus-Phase11-Ore.md` |

**Behavior:** before inventing motion/nav/forms/leads/SEO/security, search prior repos + Active Patterns; evaluate reusable ore; never blind-copy; keep confidential/branding out; promote only production-quality; **merge not duplicate**. When multiple projects solved the same problem, **compare** (performance, maintainability, reusability, API cleanliness, UX) and promote the best.

Local-first git policy unchanged: write on PC → show you → push last when you OK.

---

## 2. Remediation plan overview

Hostile audit accepted (was **5.4 / 10**). Plan + code map:

- `Documents/Domus/AUDITS/REMEDIATION_PLAN.md`
- `Documents/Domus/AUDITS/REMEDIATION_CODE_MAP.md`

Phases: Critical lead/SEO/trust → High legal/security/a11y → Medium polish → mining notes → final audit.

---

## 3. What was actually fixed

- Lead API fail-closed in production; webhook https + 8s timeout; origin allowlist
- Optional Upstash rate limit; memory fallback labeled
- Fake testimonials removed → honest Trust section + YouTube/IG CTAs
- Privacy, Terms, Cookies, Accessibility pages + footer legal/social
- Security headers + CSP in `next.config.ts`
- Gallery focus trap; sticky WhatsApp; darker CTA (`bg-cta`)
- Canonical URL helper (no localhost in production builds)
- FAQPage + Article JSON-LD; placeholder photo badges
- Framer Motion scroll reveals (ReactBits **not** installed — GAP)
- Scaffold SVGs deleted; `.env.example` added

---

## 4. Score before → after

| | Before | After |
|--|--------|-------|
| **Overall production** | **5.4** | **7.6** |
| Security | 4.5 | 7.4 |
| SEO | 5.0 | 7.6 |
| A11y | 5.5 | 7.8 |

Full table: `AUDITS/POST_REMEDIATION_AUDIT.md`

---

## 5. How to preview locally

```powershell
cd C:\Users\EverybodyHatesA1one\Documents\Domus
npm run dev
```

Open **http://localhost:3000**

Optional local env (copy from `.env.example`):

- `NEXT_PUBLIC_SITE_URL=http://localhost:3000`
- `LEAD_WEBHOOK_URL=` (leave empty in dev — form still accepts with `persisted: false`)
- Upstash vars only if testing durable rate limit

Production host must set `NEXT_PUBLIC_SITE_URL` + `LEAD_WEBHOOK_URL` (https).

---

## 6. Remaining known risks

- Stock photography still stands in for Domus installs (labeled)
- Without Upstash, rate limit is still per-instance
- No push / no live deploy from this session
- WEROI / Portfolio folders were **not** on this machine for mining — re-mine later
- Final brand cutover still needs real assets + configured webhook

---

## Confirmations

1. **REMEDIATION_PLAN:** `C:\Users\EverybodyHatesA1one\Documents\Domus\AUDITS\REMEDIATION_PLAN.md`  
   **WHAT_CHANGED:** `C:\Users\EverybodyHatesA1one\Documents\Domus\AUDITS\WHAT_CHANGED_AND_HOW.md`
2. DevOS mining rules **added** (rule + SOP + control-plane links)
3. **No GitHub push** to Domus or DevOS
4. Production score **5.4 → 7.6**
5. Preview: `cd Documents\Domus` → `npm run dev` → localhost:3000
6. Risks: placeholder photos, Upstash/webhook env, CSP looseness, missing cross-project folders
