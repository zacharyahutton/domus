# Client-Ready Pass — Domus (2026-07-19)

Local-only polish. **No git push.** Treated as finished client / portfolio product.

## Voice rule

Zero developer voice on the site. No CMS placeholders, no “awaiting verification,” no audit notes, no instructions to Zachary in UI copy.

## Fixed in this pass

| Area | Change |
|------|--------|
| Header nav | **Home** always present; **Request a Quote** removed as nav tab (CTA button only) |
| Top utility bar | Jamaica phones + WhatsApp, Regional WhatsApp `868.280.3161`, `info@domuswindows.com`, FB/IG/YT — scrolls away, not sticky with header |
| AI assistant | Icon-only FAB (no spelled-out bubble label) |
| Hero | 4 local showcase slides; developer captions removed |
| Before/after | Slider reaches **0–100%**; client-facing captions; 3 BA projects on gallery |
| Who we are | Count-up stats (300+, 4+, 25+, 2 showrooms) + Caribbean architecture reveal |
| Section reveals | Stronger veil lift so background openings imagery is visible |
| Gallery | Featured vs All (`?view=featured`); filters match intent; broken placeholders removed |
| Products | Real Domus product imagery under `public/media/products/`; series in scroller; **no chart screenshot embed** |
| Handrails | Real balcony/handrail product hero (not logo splash) |
| Process | GSAP scrub timeline — cards + progress line visibly animate |
| Why Domus | Caribbean openings background (**not mountains**); individual membership logos; premium Google reviews (4.5, Chelsea Ave, limited honest cards) |
| Insights | Cover cards + “All insights →” CTA |
| About | Clickable membership logos; developer GLB notes removed |
| Where to Buy | 🇯🇲/🇹🇹 flags; real distributor names/logos; membership strip |
| Quote | Call / WhatsApp redirect buttons per regional line |
| Footer | Extracted map, membership logos, payment cards; © **2025** Domus Windows and Doors Ltd.; Made by **Zachary Hutton** |

## Imagery still needed from Zachary (optional upgrades)

1. **True install photography** — replace architectural stand-ins with Domus Jamaica / Caribbean job-site photos
2. **Matched before/after pairs** from Domus / Mr Domus social (same house, same angle)
3. **High-res handrail install photos** (Whitman / Conrad / Majestic on real balconies)
4. **Fence install photos** (product line icons/stubs are thin from Domus outdoor configurator)
5. **Verified Google review quotes** if more than the current sparse set should appear on-site
6. Confirm any distributor display names Domus wants emphasized

## Assets downloaded locally

- Memberships: TTMA, CHTA, Proudly T&T, PSOJ
- Footer: Caribbean map, payment cards, social icons
- Products: Domus window/door type JPGs from `domuswindows.com/images/windows/`
- Outdoor: louvers + handrail hero stock
- Hero / BA / backgrounds under `public/media/`

## Verify

```bash
cd C:\Users\EverybodyHatesA1one\Documents\Domus
npm run build
npm run dev
```

Preview: http://localhost:3000

## Git

**No commit / no push** unless Zachary asks.
