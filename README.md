# Domus Windows & Doors Ltd.

Premium windows & doors site for Jamaica â€” Next.js App Router rebuild.

**Live (legacy):** https://domuswindows.com/  
**GitHub:** https://github.com/zacharyahutton/domus

## Structure

| Path | Purpose |
|------|---------|
| `src/` | App Router pages, components, content, lib |
| `public/` | Static assets (including brand logo under `public/brand/`) |
| `Brand/` | Source brand assets & IG reference grids |
| `PROJECT_PLAN.md` | Architecture & capability plan |
| `design-system.md` | Visual tokens & composition rules |
| `ARCHITECTURE.md` Â· `LESSONS.md` Â· `PATTERN_EXTRACTIONS.md` Â· `PROMPT_EVOLUTION.md` Â· `PROJECT_CLOSE.md` | Learning / close docs |

## Run

```powershell
cd C:\Users\EverybodyHatesA1one\Documents\Domus
npm install
npm run dev
```

Open http://localhost:3000

```powershell
npm run build
npm run test:lead
```

## Env

Copy `.env.example` â†’ `.env.local` and fill values as needed. Never commit secrets.

## Windows path note

Canonical folder: `C:\Users\EverybodyHatesA1one\Documents\Domus`

This PC's File Explorer **Documents** opens OneDrive. A junction at `C:\Users\EverybodyHatesA1one\OneDrive\Documents\Domus` points at the canonical folder so Domus appears in Documents.

