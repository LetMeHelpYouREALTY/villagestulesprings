import Image from "next/image";

import { MEDIA } from "@/lib/media-catalog";
import { cn } from "@/lib/utils";

export type PortraitSize = "xs" | "sm" | "md" | "lg" | "xl";

const SIZE_PX: Record<PortraitSize, number> = {
  xs: 40,
  sm: 56,
  md: 80,
  lg: 128,
  xl: 220,
};

type DrJanPortraitProps = {
  size?: PortraitSize;
  className?: string;
  priority?: boolean;
};

/**
 * Circular headshot of Dr. Jan Duffy used in header, footer, heroes, and CTAs.
 */
export function DrJanPortrait({ size = "md", className, priority }: DrJanPortraitProps) {
  const px = portraitPixels(size);
  const asset = MEDIA.drJanDuffy;

  return (
    <span
      className={cn("relative inline-block shrink-0 overflow-hidden rounded-full bg-navy-900", className)}
      style={{ width: px, height: px }}
    >
      <Image
        src={asset.gitSrc}
        alt={asset.alt}
        width={px}
        height={px}
        priority={priority}
        className="h-full w-full object-cover"
      />
    </span>
  );
}

function assertNever(value: never): never {
  throw new Error(`Unhandled portrait size: ${String(value)}`);
}

/** Compile-time guard so a new PortraitSize must set SIZE_PX. */
export function portraitPixels(size: PortraitSize): number {
  switch (size) {
    case "xs":
      return SIZE_PX.xs;
    case "sm":
      return SIZE_PX.sm;
    case "md":
      return SIZE_PX.md;
    case "lg":
      return SIZE_PX.lg;
    case "xl":
      return SIZE_PX.xl;
    default:
      return assertNever(size);
  }
}
