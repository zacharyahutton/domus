# Domus Windows & Doors Ltd.

Premium windows & doors site for Jamaica — Next.js App Router rebuild.

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
| `ARCHITECTURE.md` · `LESSONS.md` · `PATTERN_EXTRACTIONS.md` · `PROMPT_EVOLUTION.md` · `PROJECT_CLOSE.md` | Learning / close docs |

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

Copy `.env.example` → `.env.local` and fill values as needed. Never commit secrets.
