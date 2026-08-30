"use client";

import { forwardRef, type ComponentProps, type MouseEvent } from "react";

import { getCalendlyPopupUrl, type CalendlyEvent } from "@/config/calendly";
import { cn } from "@/lib/utils";

type CalendlyButtonProps = {
  event: CalendlyEvent;
  children: React.ReactNode;
  className?: string;
  utmMedium?: string;
  utmCampaign?: string;
} & Omit<ComponentProps<"a">, "href" | "children" | "className">;

/**
 * Opens the matching Calendly event in a popup when widget.js is loaded,
 * otherwise falls back to a new tab.
 */
export const CalendlyButton = forwardRef<HTMLAnchorElement, CalendlyButtonProps>(function CalendlyButton(
  { event, children, className, utmMedium = "cta", utmCampaign = "villages-tule-springs", onClick, ...rest },
  ref,
) {
  const url = getCalendlyPopupUrl(event, {
    utmSource: "website",
    utmMedium,
    utmCampaign,
  });

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
      e.preventDefault();
      window.Calendly.initPopupWidget({ url });
    }
  }

  return (
    <a
      ref={ref}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(className)}
      {...rest}
    >
      {children}
    </a>
  );
});
