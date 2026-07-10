import Link from "next/link";

import { Mail, MapPin, Phone } from "lucide-react";

const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Dr. Duffy" },
  { href: "/blog/las-vegas-market-update-2024", label: "Market Insights" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-800 font-sans text-cream-200">
      <div className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-cream-100">Villages at Tule Springs</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-300">
            Institutional-grade market knowledge, delivered with local execution &mdash; guiding buyers and sellers
            through the Las Vegas luxury market.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-300">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {FOOTER_LINKS.map((link) => (
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
              (702) 555-REALTOR
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold-300" />
              DrDuffySells@VillagesTuleSprings.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold-300" />
              Las Vegas &amp; Henderson, NV
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
