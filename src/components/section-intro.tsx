import type { ReactNode } from "react";

import { DrJanPortrait, type PortraitSize } from "@/components/dr-jan-portrait";
import { cn } from "@/lib/utils";

type SectionIntroProps = {
  kicker: string;
  title: ReactNode;
  subtitle?: ReactNode;
  dark?: boolean;
  portraitSize?: PortraitSize;
  className?: string;
};

/**
 * Shared section header with Dr. Jan Duffy's portrait — used on every public section intro.
 */
export function SectionIntro({
  kicker,
  title,
  subtitle,
  dark = false,
  portraitSize = "md",
  className,
}: SectionIntroProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <DrJanPortrait size={portraitSize} className="mx-auto mb-4 ring-2 ring-gold-300/80" />
      <p className={cn("font-sans text-xs uppercase tracking-[0.2em]", dark ? "text-gold-300" : "text-gold-600")}>
        {kicker}
      </p>
      <h2 className={cn("mb-4 mt-2 font-serif text-4xl lg:text-5xl", dark ? "text-cream-100" : "text-navy-800")}>
        {title}
      </h2>
      {subtitle ? (
        <p className={cn("mx-auto max-w-3xl font-sans text-xl font-light", dark ? "text-cream-300" : "text-navy-500")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
