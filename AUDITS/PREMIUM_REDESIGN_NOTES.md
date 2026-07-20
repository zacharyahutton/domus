# Domus Premium Redesign Notes (local)

Date: 2026-07-19  
Scope: Major IA + homepage motion + lead/newsletter + footer always-on  
Git: **local only, no push**

## What changed

- Transparent header that gains background, blur, and slight logo/header growth on scroll
- Full-bleed cycling hero with SEO-forward Caribbean / Jamaica / audience copy
- Before/after slider near hero
- Typewriter line on hero (React Bits GAP: no usable `@reactbits` package; custom Typewriter)
- Domus AI Assistant preview bubble (replaces WhatsApp-only sticky); WhatsApp secondary inside panel
- Deep nav dropdowns: Products series + categories, Gallery, Insights, Where to Buy, FAQ, Quote
- Products discovery rail + series chart + fixed Handrails local SVG placeholder
- GSAP SectionReveal (background opens) + ProcessScrollStory
- Trust/Why Domus: Mr Domus portrait, memberships strip, counters, Google-style CMS placeholder reviews
- Insights richer index + longer sectioned articles + category routes
- FAQ accordion page + converting contact form (`variant=full`)
- Footer: logo, newsletter, multi-island contacts, social, Visa/MC note, Sitepact JA credit, map/memberships reference
- Newsletter API stub + one-time popup (localStorage)
- Gallery page with featured priority; legacy `/projects`, `/journal`, `/services` redirect
- Image crop helper under `tools/image-crop/`
- 3D logo: GLB ~112MB kept in `Brand/` only; About uses static mark + tilt (no R3F)

## New routes

- `/products`, `/products/[slug]`
- `/gallery`, `/gallery/[slug]`
- `/insights`, `/insights/[slug]`, `/insights/category/[slug]`
- `/distributors`
- `/faq`
- `/api/newsletter`

## Preview

```bash
cd C:\Users\EverybodyHatesA1one\Documents\Domus
npm run dev
# open http://localhost:3000
```

## Imagery still needed from Zachary / Domus

- Real install photography for hero cycle and gallery (replace Unsplash)
- True before/after pairs
- Cropped individual membership logos (TTMA, CHTA, Proudly T&T, PSOJ)
- Named distributor/agent roster with phones per island
- Verified Google reviews (or keep placeholders forever)
- Compressed/decimated GLB if 3D logo is desired live
- Brand map asset for Find Us

## Dark mode

Skipped. No clean WehFiGo toggle path mined into Domus without extra scope. Note for later.

## Patterns used / gaps

- Active: Premium-Hero (adapted), Lead-Funnel, Portfolio-Gallery, Secure-API ideas on newsletter
- GAP: React Bits text type package
- GAP: Executable GSAP Section-Reveal pattern (candidate logged to DevOS Incoming)
- GAP: Compressed 3D brand mark pattern
