/**
 * Cloudflare Images — primary CDN for site photography.
 * Git copies in /public/images are the optimized origin/backup.
 *
 * Delivery: https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>
 * Flexible variants: w=1200,q=80,f=auto,fit=scale-down
 */

/** Public account hash from Cloudflare Images → Developer Resources. */
export const CLOUDFLARE_IMAGES_HASH =
  process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH?.trim() ?? "byE6BTe9lNqo21V57n4aPQ";

/** Account ID used only by the upload script (server-side). */
export const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID?.trim() ?? "2cc579c1ec9e426ed585e933ebf4753b";

export const CLOUDFLARE_IMAGES_DELIVERY_HOST = "imagedelivery.net";

export function cloudflareImagesConfigured(): boolean {
  return CLOUDFLARE_IMAGES_HASH.length > 0;
}
