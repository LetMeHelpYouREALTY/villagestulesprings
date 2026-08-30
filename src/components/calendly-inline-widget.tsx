import { getCalendlyEmbedUrl, type CalendlyEvent } from "@/config/calendly";

type CalendlyInlineWidgetProps = {
  event: CalendlyEvent;
  title?: string;
  height?: number;
  utmMedium?: string;
  utmCampaign?: string;
};

/**
 * Official Calendly inline embed via iframe so it works on first paint
 * without racing widget.js on client navigation.
 */
export function CalendlyInlineWidget({
  event,
  title = "Schedule with Dr. Jan Duffy",
  height = 720,
  utmMedium = "inline",
  utmCampaign = "villages-tule-springs",
}: CalendlyInlineWidgetProps) {
  const src = getCalendlyEmbedUrl(event, {
    utmSource: "website",
    utmMedium,
    utmCampaign,
  });

  return (
    <div className="overflow-hidden rounded-lg border border-navy-200/20 bg-cream-50">
      <iframe src={src} title={title} className="w-full border-0" style={{ minWidth: 320, height }} loading="lazy" />
    </div>
  );
}
