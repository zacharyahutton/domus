# PATTERN_EXTRACTIONS — Domus

## Used Active (adapted)

- `Patterns/Active/Premium-Hero/`
- `Patterns/Active/Portfolio-Gallery/`
- `Patterns/Active/Lead-Funnel/`
- `Patterns/Active/Form-System/`
- `Patterns/Active/Secure-API/` (ideas only — **audit: incomplete for production**)

## Promotion candidates (NOT promoted)

| Candidate | Save? | Why | Where |
|-----------|-------|-----|-------|
| Next.js Lead Route Handler (zod + honeypot + **durable** rate limit + fail-visible persistence) | Later | Reusable across Next marketing sites; needs Domus-stripped copy + contract test importing real schema | Incoming → Active after EXECUTABLE-CRITERIA |
| Next SEO Foundation (metadata helpers + sitemap/robots + LocalBusiness + **prod URL hard-fail**) | Later | Incoming `SEO-Foundation` already exists — flesh with portable `implementation/` | `Patterns/Incoming/SEO-Foundation` |
| WhatsApp + phone sticky CTA for local SMB | Later | Caribbean/local pattern; keep Domus numbers out of pattern code | Incoming |
| Lesson: localhost metadataBase landmine | Later | Cross-project SEO footgun from Domus audit | `Knowledge/Lessons/` after Curation Gate |
| Lesson: no fabricated testimonials | Later | Trust/content integrity | `Knowledge/Lessons/` after Curation Gate |

### Curation Gate (each)

```text
Save? No (this turn — audit docs only)
Why? Need Domus-independent implementation/ + VALIDATION before Active
Where? document as Incoming candidates only — do not write Patterns/Active
```

## Audit reference

Full hostile post-build: `AUDITS/POST_BUILD_SENIOR_AUDIT.md` (Domus repo) · DevOS `Projects/Personal/Domus/POST_BUILD_SENIOR_AUDIT.md`
