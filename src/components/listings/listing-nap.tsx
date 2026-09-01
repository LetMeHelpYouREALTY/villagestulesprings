import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { SITE_NAP } from "@/config/site-nap";

export function ListingNap() {
  return (
    <aside className="rounded-lg border border-gold-200 bg-cream-100 p-6" aria-label="Business contact">
      <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-600">Visit · Call · Book</p>
      <p className="mt-2 font-serif text-2xl text-navy-800">{SITE_NAP.businessName}</p>
      <p className="font-sans text-sm text-navy-500">
        {SITE_NAP.agentName}, REALTOR&reg; · {SITE_NAP.brokerage}
      </p>
      <ul className="mt-4 space-y-3 font-sans text-sm text-navy-700">
        <li className="flex items-start gap-2">
          <MapPin className="mt-0.5 h-4 w-4 text-gold-500" />
          {SITE_NAP.streetAddress}, {SITE_NAP.city}, {SITE_NAP.region} {SITE_NAP.postalCode}
        </li>
        <li className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-gold-500" />
          <a href={SITE_NAP.phoneHref} className="text-gold-600 underline-offset-4 hover:underline">
            {SITE_NAP.phoneDisplay}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-gold-500" />
          <a href={`mailto:${SITE_NAP.email}`} className="break-all hover:text-gold-600">
            {SITE_NAP.email}
          </a>
        </li>
        <li className="flex items-start gap-2">
          <Clock className="mt-0.5 h-4 w-4 text-gold-500" />
          <span>
            {SITE_NAP.weekdayHours}
            <br />
            {SITE_NAP.saturdayHours}
            <br />
            {SITE_NAP.sundayHours}
          </span>
        </li>
      </ul>
      <p className="mt-4 font-sans text-xs text-navy-400">Nevada license {SITE_NAP.license}</p>
    </aside>
  );
}
