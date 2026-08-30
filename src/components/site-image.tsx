"use client";

import { useCallback, useState } from "react";

import Image from "next/image";

import { cloudflareImageLoader } from "@/lib/cloudflare-image-loader";
import type { MediaAsset } from "@/lib/media-catalog";
import { cn } from "@/lib/utils";

type SiteImageProps = {
  asset: MediaAsset;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
};

/**
 * Serves Cloudflare Images first, then the git WebP backup if the CDN 404s
 * (before the upload script has run, or during local development).
 */
export function SiteImage({ asset, className, sizes, priority, fill, width, height }: SiteImageProps) {
  const [useGitBackup, setUseGitBackup] = useState(false);
  const handleError = useCallback(() => setUseGitBackup(true), []);
  const w = width ?? asset.width;
  const h = height ?? asset.height;

  if (fill) {
    return useGitBackup ? (
      <Image
        src={asset.gitSrc}
        alt={asset.alt}
        fill
        className={cn("object-cover", className)}
        sizes={sizes}
        priority={priority}
      />
    ) : (
      <Image
        loader={cloudflareImageLoader}
        src={asset.id}
        alt={asset.alt}
        fill
        className={cn("object-cover", className)}
        sizes={sizes}
        priority={priority}
        unoptimized
        onError={handleError}
      />
    );
  }

  return useGitBackup ? (
    <Image
      src={asset.gitSrc}
      alt={asset.alt}
      width={w}
      height={h}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  ) : (
    <Image
      loader={cloudflareImageLoader}
      src={asset.id}
      alt={asset.alt}
      width={w}
      height={h}
      className={className}
      sizes={sizes}
      priority={priority}
      unoptimized
      onError={handleError}
    />
  );
}
