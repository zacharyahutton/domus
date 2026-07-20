#!/usr/bin/env node
/**
 * Minimal Domus image crop helper.
 * Usage:
 *   node tools/image-crop/crop.mjs --in path.png --out path.png --size 800 --fit cover
 */
import { existsSync } from "node:fs";
import { resolve } from "node:path";

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  if (i === -1) return fallback;
  return process.argv[i + 1] ?? fallback;
}

const input = arg("in");
const output = arg("out");
const size = Number(arg("size", "800"));
const fit = arg("fit", "cover");

if (!input || !output) {
  console.log("Usage: node tools/image-crop/crop.mjs --in <file> --out <file> [--size 800] [--fit cover]");
  process.exit(1);
}

const inPath = resolve(process.cwd(), input);
const outPath = resolve(process.cwd(), output);

if (!existsSync(inPath)) {
  console.error("Input not found:", inPath);
  process.exit(1);
}

try {
  const sharp = (await import("sharp")).default;
  await sharp(inPath)
    .resize(size, size, { fit })
    .toFile(outPath);
  console.log("Wrote", outPath);
} catch {
  console.log("sharp not installed. Recommended crop:");
  console.log({ inPath, outPath, size, fit, tip: "npm i -D sharp then re-run" });
  process.exit(0);
}
