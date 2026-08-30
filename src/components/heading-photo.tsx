import { SiteImage } from "@/components/site-image";
import type { MediaAspect, MediaAsset } from "@/lib/media-catalog";
import { cn } from "@/lib/utils";

type HeadingPhotoProps = {
  asset: MediaAsset;
  className?: string;
  priority?: boolean;
};

const ASPECT_CLASS: Record<MediaAspect, string> = {
  "16:9": "aspect-[16/9]",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
};

/** Photo that matches a nearby H1 / H2 / H3. */
export function HeadingPhoto({ asset, className, priority }: HeadingPhotoProps) {
  return (
    <figure className={cn("overflow-hidden rounded-lg bg-navy-100", className)}>
      <div className={cn("relative w-full", ASPECT_CLASS[asset.aspect])}>
        <SiteImage asset={asset} fill sizes="(max-width: 768px) 100vw, 1200px" priority={priority} />
      </div>
      <figcaption className="sr-only">{asset.heading}</figcaption>
    </figure>
  );
}
