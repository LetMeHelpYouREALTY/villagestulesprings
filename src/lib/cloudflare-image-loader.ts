import type { ImageLoaderProps } from "next/image";

import { CLOUDFLARE_IMAGES_HASH } from "@/config/cloudflare-images";

const DEFAULT_QUALITY = 80;

/**
 * Next.js loader for Cloudflare Images flexible variants.
 * `src` is the custom image ID (e.g. vts-hero-dream-home).
 */
export function cloudflareImageLoader({ src, width, quality }: ImageLoaderProps): string {
  const q = quality ?? DEFAULT_QUALITY;
  return `https://imagedelivery.net/${CLOUDFLARE_IMAGES_HASH}/${src}/w=${width},q=${q},f=auto,fit=scale-down`;
}

export function cloudflarePublicUrl(imageId: string): string {
  return `https://imagedelivery.net/${CLOUDFLARE_IMAGES_HASH}/${imageId}/public`;
}

export function cloudflareSizedUrl(imageId: string, width: number, quality = DEFAULT_QUALITY): string {
  return `https://imagedelivery.net/${CLOUDFLARE_IMAGES_HASH}/${imageId}/w=${width},q=${quality},f=auto,fit=scale-down`;
}
