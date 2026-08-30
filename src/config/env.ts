/**
 * Centralized, typed access to environment variables.
 * Public (NEXT_PUBLIC_*) values are safe for client components.
 * Server-only secrets must never be imported into client components.
 *
 * Note: NEXT_PUBLIC_* must be referenced as static property access so Next.js
 * can inline them at build time.
 */

/** Base64("Agent-225050") — the ID RealScout widget APIs accept. */
export const FALLBACK_REALSCOUT_AGENT_ID = "QWdlbnQtMjI1MDUw";

function nonempty(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : undefined;
}

function utf8ToBase64(value: string): string {
  return btoa(value);
}

/**
 * RealScout widgets require `agent-encoded-id` as Base64("Agent-<id>").
 * A numeric Vercel env like `225050` 404s the listing APIs.
 */
export function normalizeRealScoutAgentId(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return FALLBACK_REALSCOUT_AGENT_ID;

  if (trimmed.startsWith("QWdlbnQt") && /^[A-Za-z0-9+/]+=*$/.test(trimmed)) {
    return trimmed;
  }

  if (/^\d+$/.test(trimmed)) {
    return utf8ToBase64(`Agent-${trimmed}`);
  }

  const named = /^Agent-(\d+)$/i.exec(trimmed);
  if (named) {
    return utf8ToBase64(`Agent-${named[1]}`);
  }

  return trimmed;
}

/** RealScout agent encoded ID used by all widget tags. */
export function getRealScoutAgentId(): string {
  const fromEnv = nonempty(process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID);
  return normalizeRealScoutAgentId(fromEnv ?? FALLBACK_REALSCOUT_AGENT_ID);
}

/** Cloudinary cloud name (required for next-cloudinary CldImage). */
export function getCloudinaryCloudName(): string | undefined {
  return nonempty(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
}

/** Optional Cloudinary folder prefix for public IDs. */
export function getCloudinaryFolder(): string {
  return nonempty(process.env.CLOUDINARY_FOLDER) ?? nonempty(process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER) ?? "";
}

/**
 * Build a Cloudinary public ID under the configured folder.
 * Example: folder "villages-tule-springs" + "hero" → "villages-tule-springs/hero"
 */
export function cloudinaryPublicId(asset: string): string {
  const folder = getCloudinaryFolder();
  const clean = asset.replace(/^\//, "");
  return folder ? `${folder.replace(/\/$/, "")}/${clean}` : clean;
}

/** Whether Cloudinary delivery is configured for this deployment. */
export function isCloudinaryConfigured(): boolean {
  return Boolean(getCloudinaryCloudName());
}

/**
 * Google Maps embed URL. Prefer a full embed URL when provided;
 * otherwise build a place search embed from the Maps API key.
 */
export function getMapEmbedUrl(): string | undefined {
  const embed = nonempty(process.env.NEXT_PUBLIC_OPEN_HOUSES_MAP_EMBED_URL);
  if (embed) return embed;

  const apiKey = nonempty(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
  if (!apiKey) return undefined;

  const query = encodeURIComponent("Villages at Tule Springs, North Las Vegas, NV");
  return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}&zoom=14`;
}

export function isMapsConfigured(): boolean {
  return Boolean(getMapEmbedUrl());
}
