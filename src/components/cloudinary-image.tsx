"use client";

import { CldImage as CldImageDefault, type CldImageProps } from "next-cloudinary";

/**
 * Client wrapper around next-cloudinary CldImage so Server Components
 * can render optimized Cloudinary images without marking the whole page client-side.
 * Requires NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME.
 */
export function CloudinaryImage(props: CldImageProps) {
  return <CldImageDefault {...props} />;
}
