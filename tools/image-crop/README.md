# Image crop helper (Domus)

Minimal workflow for preparing Domus brand and gallery crops, informed by portfolio crop habits.

## Quick CLI (Node, sharp optional)

```bash
# From Domus root (install sharp if you want automated crops)
npm install --save-dev sharp
node tools/image-crop/crop.mjs --in Brand/References/ref-21.png --out public/brand/mr-domus-square.png --size 800 --fit cover
```

If `sharp` is not installed, `crop.mjs` prints the recommended crop box and exits 0 without writing.

## Manual (Windows Photos / Photoshop)

1. Copy sources into `Brand/References/` (already done for this redesign turn).
2. Prefer square crops for portraits (Mr Domus) and 16:10 for hero/gallery.
3. Export WebP or compressed PNG into `public/brand/` with descriptive names.
4. Never overwrite `/brand/logo.png` without a backup.

## Common Domus sizes

| Use | Ratio | Target width |
|-----|-------|--------------|
| Hero slide | 16:9 | 2000 |
| Gallery card | 16:10 | 1400 |
| Portrait | 4:5 | 900 |
| Membership strip | free | 1200 |

## Notes

- Keep originals in `Brand/References/`.
- Label CMS placeholders in UI until Domus supplies finals.
- The 3D logo GLB lives at `Brand/domus-3d-logo.glb` (~112MB). Do not publish uncompressed to `public/`.
