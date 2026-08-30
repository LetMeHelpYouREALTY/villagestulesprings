import { CalendlyInlineWidget } from "@/components/calendly-inline-widget";
import { DrJanPortrait } from "@/components/dr-jan-portrait";
import type { CalendlyEvent } from "@/config/calendly";
import { cn } from "@/lib/utils";

type CalendlyScheduleSectionProps = {
  event?: CalendlyEvent;
  kicker?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
  id?: string;
  utmCampaign?: string;
};

function scheduleCopy(dark: boolean) {
  return {
    section: cn("py-20", dark ? "bg-navy-800" : "bg-cream-100"),
    kicker: dark ? "text-gold-300" : "text-gold-600",
    title: dark ? "text-cream-100" : "text-navy-800",
    subtitle: dark ? "text-cream-300" : "text-navy-500",
    phone: dark
      ? "text-gold-300 underline-offset-4 hover:underline"
      : "text-gold-600 underline-offset-4 hover:underline",
  };
}

/**
 * Full-width scheduling block with Dr. Jan Duffy's portrait and an inline Calendly widget.
 */
export function CalendlyScheduleSection({
  event = "conversation",
  kicker = "Book Directly",
  title = "Schedule Time with Dr. Jan Duffy",
  subtitle = "Pick a 15-minute conversation that fits your calendar — no contact form required.",
  dark = false,
  id = "schedule",
  utmCampaign = "sitewide-schedule",
}: CalendlyScheduleSectionProps) {
  const styles = scheduleCopy(dark);

  return (
    <section id={id} className={styles.section} aria-label="Schedule with Dr. Jan Duffy">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <DrJanPortrait size="lg" className="mx-auto mb-4 ring-2 ring-gold-300" />
          <p className={`font-sans text-xs uppercase tracking-[0.2em] ${styles.kicker}`}>{kicker}</p>
          <h2 className={`mb-4 mt-2 font-serif text-3xl md:text-4xl ${styles.title}`}>{title}</h2>
          <p className={`mx-auto max-w-2xl font-sans text-lg font-light ${styles.subtitle}`}>{subtitle}</p>
          <p className={`mt-3 font-sans text-sm ${styles.subtitle}`}>
            Or call{" "}
            <a href="tel:+17022221964" className={styles.phone}>
              702-222-1964
            </a>
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <CalendlyInlineWidget event={event} title={title} utmMedium="section" utmCampaign={utmCampaign} />
        </div>
      </div>
    </section>
  );
}
