import Link from "next/link";

import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { LUXURY_SITE } from "@/config/luxury-site-config";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-luxury-charcoal text-luxury-ivory">
      <div className="container mx-auto grid gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-xl text-luxury-gold">{LUXURY_SITE.agentName}</p>
          <p className="mt-2 text-sm text-luxury-cream/70">{LUXURY_SITE.brokerage}</p>
          <p className="mt-1 text-xs text-luxury-cream/50">License {LUXURY_SITE.license}</p>
        </div>

        <div>
          <p className="luxury-eyebrow mb-4 text-luxury-gold-light">Contact</p>
          <ul className="space-y-3 text-sm text-luxury-cream/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-luxury-gold" />
              <span>{LUXURY_SITE.address.formatted}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-luxury-gold" />
              <a href={`tel:${LUXURY_SITE.phoneTel}`} className="hover:text-luxury-gold">
                {LUXURY_SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-luxury-gold" />
              <a href={`mailto:${LUXURY_SITE.email}`} className="hover:text-luxury-gold">
                {LUXURY_SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="size-4 shrink-0 text-luxury-gold" />
              <span>{LUXURY_SITE.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="luxury-eyebrow mb-4 text-luxury-gold-light">Service Areas</p>
          <ul className="space-y-2 text-sm text-luxury-cream/80">
            {LUXURY_SITE.serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <div className="mt-6 flex gap-4">
            <Link href={LUXURY_SITE.social.facebook} className="text-sm hover:text-luxury-gold">
              Facebook
            </Link>
            <Link href={LUXURY_SITE.social.instagram} className="text-sm hover:text-luxury-gold">
              Instagram
            </Link>
            <Link href={LUXURY_SITE.social.linkedin} className="text-sm hover:text-luxury-gold">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-luxury-gold/20">
        <div className="container mx-auto space-y-3 px-4 py-6 text-xs leading-relaxed text-luxury-cream/50">
          <p>
            Listing information is deemed reliable but not guaranteed accurate. Data provided by participating MLS
            sources. Listings marked with an icon are provided courtesy of the Internet Data Exchange (IDX) program.
          </p>
          <p>
            Equal Housing Opportunity. All real estate advertised herein is subject to the Federal Fair Housing Act.
          </p>
          <p>
            &copy; {new Date().getFullYear()} {LUXURY_SITE.agentName}. All rights reserved. | {LUXURY_SITE.brokerage}
          </p>
        </div>
      </div>
    </footer>
  );
}
