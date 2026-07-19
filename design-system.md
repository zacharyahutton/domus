# Domus Windows & Doors — Design System

**Brand:** Domus Windows & Doors Ltd. · Caribbean uPVC · Jamaica-first delivery surface  
**Sources:** `Brand/Logo/domus-circular-badge.png`, IG reference grids, live site skim (domuswindows.com)  
**Do not** invent a European atelier palette. Colors come from the geometric **D** logo.

## Logo

- Circular badge, white ground, thin **orange-gold** ring
- Geometric **D** in 2×2 color blocks with white negative-space “D”
- Wordmark **DOMUS** (bold caps) + “Windows & Doors Ltd.”
- Assets: `Brand/Logo/domus-circular-badge.png`

## Color tokens (from logo)

| Token | Hex (approx) | Role |
|-------|--------------|------|
| `--domus-magenta` | `#E91E63` | D top-left · accent strip / highlights |
| `--domus-green` | `#4CAF50` | D top-right · success / outdoor cue |
| `--domus-blue` | `#1E88E5` | D bottom-left · trust / links secondary |
| `--domus-orange` | `#FF9800` | D bottom-right · ring · primary CTA warmth (aligns with live `#FF9900`) |
| `--domus-gold` | `#C9A227` | “25 Years” badge gold |
| `--ink` | `#1A1A1A` | Wordmark / body |
| `--stone` | `#5C5C5C` | Secondary text |
| `--fog` | `#F5F5F5` | Soft section grounds |
| `--white` | `#FFFFFF` | Primary surface (logo ground) |
| `--line` | `#E0E0E0` | Dividers |

Use the four D colors sparingly as a **stripe / icon language** — not rainbow gradients on every section. Primary interactive color: **orange**. Surfaces stay mostly white/fog with strong photography.

## Typography

| Role | Face | Notes |
|------|------|-------|
| Brand / display | **Montserrat** Bold (or similar geometric sans matching logo caps) | DOMUS-like presence — not Inter as hero voice |
| Body | **Source Sans 3** | Readable Caribbean marketing copy |
| UI labels | Montserrat Medium, tracked | Filters, nav, badges |

## Visual language

- Install photography: Caribbean homes, white uPVC frames, glass, fencing, handrails
- Before/after grids like IG (white footer bars OK on project cards)
- Gold “25 Years” trust badge (sparingly)
- Geometric D mark in header / favicon
- Avoid: purple SaaS glow, cream+terracotta atelier cliché, broadsheet density

## Hero budget

Brand (logo + Domus) + one headline (hurricane-ready / premium Caribbean homes) + one support + CTAs **Begin Your Project** / **View Our Work** + one dominant install image. No stat strips or chip clusters in first viewport.

## Motion

Subtle reveal + filter crossfade; honor `prefers-reduced-motion`.

## Accessibility

AA contrast ink on white; visible focus rings in `--domus-orange`; skip link; semantic landmarks.
