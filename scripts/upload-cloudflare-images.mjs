#!/usr/bin/env node
/**
 * Upload optimized git WebP backups to Cloudflare Images with stable custom IDs.
 *
 * Requires CLOUDFLARE_API_TOKEN (Account → Images → Edit).
 * Usage: CLOUDFLARE_API_TOKEN=... node scripts/upload-cloudflare-images.mjs
 *        node scripts/upload-cloudflare-images.mjs --force
 */

import { readdirSync, readFileSync } from "node:fs";
import { basename, extname, join } from "node:path";

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID?.trim() || "2cc579c1ec9e426ed585e933ebf4753b";
const TOKEN = process.env.CLOUDFLARE_API_TOKEN?.trim();
const IMAGES_DIR = join(process.cwd(), "public/images");
const FORCE = process.argv.includes("--force");
const API = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`;

function customId(filename) {
  return `vts-${basename(filename, extname(filename))}`;
}

async function listExisting() {
  const ids = new Set();
  let page = 1;
  while (true) {
    const res = await fetch(`${API}?per_page=100&page=${page}`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    const json = await res.json();
    if (!json.success) {
      throw new Error(`List failed: ${JSON.stringify(json.errors)}`);
    }
    for (const img of json.result?.images ?? json.result ?? []) {
      if (img.id) ids.add(img.id);
    }
    const total = json.result_info?.total_pages ?? 1;
    if (page >= total) break;
    page += 1;
  }
  return ids;
}

async function destroy(id) {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  const json = await res.json();
  if (!json.success) {
    console.warn(`Could not delete ${id}: ${JSON.stringify(json.errors)}`);
  }
}

async function upload(filePath, id) {
  const buf = readFileSync(filePath);
  const form = new FormData();
  form.append("file", new Blob([buf], { type: "image/webp" }), basename(filePath));
  form.append("id", id);
  form.append("requireSignedURLs", "false");
  form.append("metadata", JSON.stringify({ source: "git-backup", site: "villagestulesprings.com" }));

  const res = await fetch(API, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}` },
    body: form,
  });
  const json = await res.json();
  if (!json.success) {
    throw new Error(`Upload ${id} failed: ${JSON.stringify(json.errors)}`);
  }
  return json.result;
}

async function main() {
  if (!TOKEN) {
    console.error("CLOUDFLARE_API_TOKEN is required. Create an API token with Account.Cloudflare Images Edit.");
    process.exit(1);
  }

  const files = readdirSync(IMAGES_DIR).filter((f) => f.endsWith(".webp"));
  console.log(`Uploading ${files.length} optimized git backups to Cloudflare Images (account ${ACCOUNT_ID})…`);

  const existing = await listExisting();
  let uploaded = 0;
  let skipped = 0;

  for (const file of files) {
    const id = customId(file);
    const path = join(IMAGES_DIR, file);
    if (existing.has(id) && !FORCE) {
      console.log(`skip  ${id}`);
      skipped += 1;
      continue;
    }
    if (existing.has(id) && FORCE) {
      await destroy(id);
    }
    const result = await upload(path, id);
    uploaded += 1;
    const variant = result.variants?.[0] ?? `(id ${id})`;
    console.log(`ok    ${id} → ${variant}`);
  }

  console.log(`Done. uploaded=${uploaded} skipped=${skipped}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
