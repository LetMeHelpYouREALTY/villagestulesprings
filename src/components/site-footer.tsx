import Link from "next/link";

import { Mail, MapPin, Phone } from "lucide-react";

import { CalendlyButton } from "@/components/calendly-button";
import { DrJanPortrait } from "@/components/dr-jan-portrait";

const BUY_LINKS = [
  { href: "/listings", label: "Residences" },
  { href: "/buyers", label: "Buyer Representation" },
  { href: "/heartland-cottages", label: "Heartland Cottages" },
  { href: "/new-construction", label: "New Construction" },
  { href: "/amenities", label: "Nearby Amenities" },
  { href: "/private-client", label: "Private Client" },
];

const SELL_LINKS = [
  { href: "/sellers", label: "Sell Your Home" },
  { href: "/home-valuation", label: "Home Valuation" },
  { href: "/communities", label: "Neighborhoods" },
  { href: "/about", label: "About Dr. Duffy" },
  { href: "/contact", label: "Contact" },
  { href: "/blog/las-vegas-market-update-2024", label: "Market Insights" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-800 font-sans text-cream-200">
      <div className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-4">
            <DrJanPortrait size="md" className="ring-2 ring-gold-300" />
            <div>
              <p className="font-serif text-2xl text-cream-100">Villages at Tule Springs</p>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-300">
                Dr. Janet Duffy, REALTOR&reg;
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-300">
            Buy and sell representation for The Villages at Tule Springs and Heartland Cottages in North Las Vegas
            89084.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-300">Buy</p>
          <ul className="mt-4 space-y-2 text-sm">
            {BUY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-gold-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-300">Sell &amp; Areas</p>
          <ul className="mt-4 space-y-2 text-sm">
            {SELL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-gold-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-300">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold-300" />
              <a href="tel:+17022221964" className="hover:text-gold-300">
                702-222-1964
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold-300" />
              <a href="mailto:DrDuffySells@VillagesTuleSprings.com" className="hover:text-gold-300">
                DrDuffySells@VillagesTuleSprings.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-gold-300" />
              Villages at Tule Springs, North Las Vegas, NV 89084
            </li>
            <li>
              <CalendlyButton
                event="conversation"
                utmMedium="footer"
                utmCampaign="footer-portrait"
                className="inline-flex rounded-md bg-gold-400 px-4 py-2 font-sans text-xs uppercase tracking-widest text-navy-800 hover:bg-gold-300"
              >
                Schedule 15 Minutes
              </CalendlyButton>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-300/10 px-4 py-6 text-center text-xs text-cream-300/70">
        &copy; {new Date().getFullYear()} Villages at Tule Springs &mdash; Dr. Janet Duffy, REALTOR&reg;. Equal Housing
        Opportunity. All information deemed reliable but not guaranteed.
      </div>
    </footer>
  );
}
