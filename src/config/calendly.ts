/**
 * Verified Calendly event URLs for Dr. Jan Duffy (calendly.com/drjanduffy).
 * Confirmed on sister sites (Turnberry Place, Open House Marketplace, Maravilla).
 * Override with NEXT_PUBLIC_CALENDLY_* env vars when an event slug changes.
 */

export type CalendlyEvent = "conversation" | "homeTour" | "openHouse";

const FALLBACK: Record<CalendlyEvent, string> = {
  conversation: "https://calendly.com/drjanduffy/dr-duffy-private-15-min-conversation",
  homeTour: "https://calendly.com/drjanduffy/1-home-tour-30-mins",
  openHouse: "https://calendly.com/drjanduffy/open-house-tour",
};

const PRIMARY_COLOR = "d4af37";

function nonempty(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : undefined;
}

function envUrl(event: CalendlyEvent): string | undefined {
  switch (event) {
    case "conversation":
      return nonempty(process.env.NEXT_PUBLIC_CALENDLY_CONVERSATION_URL);
    case "homeTour":
      return nonempty(process.env.NEXT_PUBLIC_CALENDLY_HOME_TOUR_URL);
    case "openHouse":
      return nonempty(process.env.NEXT_PUBLIC_CALENDLY_OPEN_HOUSE_URL);
    default: {
      const exhaustive: never = event;
      return exhaustive;
    }
  }
}

/** Bare Calendly event URL (no embed query params). */
export function getCalendlyUrl(event: CalendlyEvent): string {
  const fromEnv = envUrl(event);
  if (fromEnv) return fromEnv;
  switch (event) {
    case "conversation":
      return FALLBACK.conversation;
    case "homeTour":
      return FALLBACK.homeTour;
    case "openHouse":
      return FALLBACK.openHouse;
    default: {
      const exhaustive: never = event;
      return exhaustive;
    }
  }
}

type EmbedParams = {
  hideGdprBanner?: boolean;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

function withParams(url: string, params: Record<string, string>): string {
  const parsed = new URL(url);
  for (const [key, value] of Object.entries(params)) {
    parsed.searchParams.set(key, value);
  }
  return parsed.toString();
}

/** URL for the inline iframe embed. */
export function getCalendlyEmbedUrl(event: CalendlyEvent, extras: EmbedParams = {}): string {
  const params: Record<string, string> = {
    hide_gdpr_banner: extras.hideGdprBanner === false ? "0" : "1",
    primary_color: PRIMARY_COLOR,
    embed_domain: "villagestulesprings.com",
    embed_type: "Inline",
  };
  if (extras.utmSource) params.utm_source = extras.utmSource;
  if (extras.utmMedium) params.utm_medium = extras.utmMedium;
  if (extras.utmCampaign) params.utm_campaign = extras.utmCampaign;
  return withParams(getCalendlyUrl(event), params);
}

/** URL for popup widget / new-tab booking. */
export function getCalendlyPopupUrl(event: CalendlyEvent, extras: EmbedParams = {}): string {
  const params: Record<string, string> = {
    hide_gdpr_banner: extras.hideGdprBanner === false ? "0" : "1",
    primary_color: PRIMARY_COLOR,
  };
  if (extras.utmSource) params.utm_source = extras.utmSource;
  if (extras.utmMedium) params.utm_medium = extras.utmMedium;
  if (extras.utmCampaign) params.utm_campaign = extras.utmCampaign;
  return withParams(getCalendlyUrl(event), params);
}
