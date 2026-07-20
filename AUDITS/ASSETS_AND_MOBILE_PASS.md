# Domus Assets + Mobile Pass (2026-07-19)

Local-only polish. **No git push** in this pass.

## A) Zip → site distribution

| Zip | Category folder | Site uses |
|-----|-----------------|-----------|
| `images.zip` | `public/media/gallery/performance/single-hung/` | Product singlehung, hero slide-1, BA after-1, gallery line |
| `images (1).zip` | `…/horizontal-slider/` | Product horizontal-slider, hero slide-3, bg caribbean-home, salt-air insight |
| `images (2).zip` | `…/awning-operator/` | Product awning, kitchen gallery, energy insight |
| `images (3).zip` | `…/awning-pushout/` | Product louver / awning pushout gallery |
| `images (4).zip` | `…/casement-operator/` | Product casement, noise insight |
| `images (5).zip` | `…/casement-pushout/` | Casement pushout gallery |
| `images (6).zip` | `…/picture-fixed/` | Product picture, bg modern-openings, care insight |
| `images (7).zip` | `…/shaped/` | Product shaped, BA before-1 |
| `images (8).zip` | `…/multi-unit/` | Product multiunit/curtainwall, hero slide-2, distributor insight |
| `images (9).zip` | `…/security/single-swing-doors/` | Product swing-door.png, BA pair 2 |
| `images (10).zip` | `…/security/double-swing-doors/` | Product double-swing.png, sliding/storefront, hero slide-4 |

Unsplash removed from Insights / CSP. Brand logos + memberships retained.

## B) Polish shipped

1. Section reveal veils lighter so architecture shows through.
2. `FirstFoldMotion` GSAP on BA + Who we are after hero.
3. Endless Vacation–style `ReviewsCarousel` (6 cards, Google SVG, arrows, auto-scroll, stars, avatars, verified check, quote marks). Kingston **4.5** kept in summary.
4. Five new Insights posts (care, noise, salt air, Solar E, distributors) with zip-crop covers.
5. Top utility bar **home only**; disappears when not at top.
6. Footer legal centered; Made by → portfolio URL.
7. About: tilt logo only; no GLB / no developer caption.
8. Where to Buy: SVG distributor marks + JM/TT/GY/Eastern flag SVGs (no emoji).
9. Mobile bottom nav (Home / Products / Gallery / Quote / burger); header hide-on-scroll-down; nested menu back.

## C) Preview

```bash
cd C:\Users\EverybodyHatesA1one\Documents\Domus
npm run dev
```

Then open `http://localhost:3000`.

## D) DevOS logs

- `Learning/Lessons/Domus-Assets-Mobile-Polish-2026-07-19.md`
- `Patterns/Incoming/Mobile-Bottom-Nav-Manufacturer.md`
- `Patterns/Incoming/Premium-Reviews-Carousel.md`
- `Patterns/Incoming/Zip-Gallery-Distribution.md`
- `Patterns/Incoming/Flag-Icons-Not-Emojis.md`

## Confirm

No `git push` performed in this pass.
