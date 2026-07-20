# Domus Finish Polish Audit — 2026-07-19

Local-only pass. **No git push.**

## Shipped

| Area | Change |
|------|--------|
| Hero | Restored AI-generated high-res slides in `public/media/hero/slide-1..4.jpg` (zip crops removed from hero) |
| Who we are / About | AI backdrop `public/media/bg/who-we-are.jpg` (+ `caribbean-home.jpg`); logo tilt retained via `DomusLogoMark` |
| Product / page covers | Fence, doors, supreme covers from gallery zips (`fence-cover`, `doors-cover`, `supreme-cover`); Portmore fence card updated |
| Before & After | True AI before→after pairs in `public/media/ba/before-*.jpg` / `after-*.jpg` (no weak zip BA crops) |
| Reviews | Endless Vacation–style carousel; white section; auto-scroll **loops** to start; Kingston Google **4.5** kept |
| Why Domus | Keeps `SectionReveal` parallax on `modern-openings.jpg`; reviews moved out so pool image does not wash reviews |
| Footer bar | Desktop one line: `© 2026 Domus Ltd` · Privacy · Terms · Cookies · Accessibility · Made by Zachary Hutton |
| Where to Buy | Constrained Kingston Google Maps embed |
| Mobile header | Soft hide — higher threshold (`y > 220`, delta `> 14`); reappears on scroll-up |
| Desktop header | WehFiGo-style — hides on scroll down (`y > 80`, delta `> 8`); reappears on scroll-up (`lg+` only) |
| Mobile bottom nav | **Never hides**; taller (`h-[3.65rem]`), 5-col even grid, Menu label + active ring |
| Desktop tabs | Route-accurate `aria-current` / active styles for Products, Gallery, Insights, About, Where to Buy, FAQ |

## Paths

- Hero: `src/components/sections/DomusHero.tsx` + `public/media/hero/`
- BA: `src/components/sections/BeforeAfterSlider.tsx` + `public/media/ba/`
- Reviews: `src/components/sections/ReviewsCarousel.tsx`
- Why Domus: `src/components/sections/TrustWhyDomus.tsx`
- Footer: `src/components/layout/Footer.tsx`
- Map: `src/app/distributors/page.tsx`
- Nav: `Header.tsx`, `MobileBottomNav.tsx`

## Confirm

- `npm run build` — see session log
- No `git push`
