#!/usr/bin/env node
/**
 * Re-encode source PNGs into optimized git-backup WebP (max 1200–1600px, q78).
 * Usage: node scripts/optimize-git-images.mjs [srcDir] [dstDir]
 */
import { spawnSync } from "node:child_process";
import { mkdirSync, readdirSync } from "node:fs";
import { basename, join } from "node:path";

const SRC = process.argv[2] ?? "/opt/cursor/artifacts/assets";
const DST = process.argv[3] ?? "public/images";
const CARD = new Set([
  "featured-aliante",
  "featured-desert-vista",
  "featured-maravilla-courtyard",
  "experience-expertise",
  "areas-served",
  "professional-approach",
  "home-prices",
  "inventory-levels",
  "summerlin",
  "henderson",
  "downtown-las-vegas",
  "listing-villa",
  "listing-two-story",
  "listing-executive",
  "listing-townhome",
  "interior-living",
  "interior-kitchen",
  "interior-master",
  "interior-bath",
  "interior-garage",
  "quick-home-search",
  "og-image-square",
]);

mkdirSync(DST, { recursive: true });

for (const file of readdirSync(SRC).filter((f) => f.endsWith(".png"))) {
  const name = basename(file, ".png");
  const maxw = CARD.has(name) ? 1200 : 1600;
  const out = join(DST, `${name}.webp`);
  const result = spawnSync(
    "ffmpeg",
    ["-y", "-loglevel", "error", "-i", join(SRC, file), "-vf", `scale='min(${maxw},iw)':-2`, "-c:v", "libwebp", "-quality", "78", "-compression_level", "6", out],
    { stdio: "inherit" },
  );
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
  console.log(`wrote ${out}`);
}
