import Link from "next/link";

import { Phone } from "lucide-react";

import { CalendlyButton } from "@/components/calendly-button";
import { DrJanPortrait } from "@/components/dr-jan-portrait";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/buyers", label: "Buyers" },
  { href: "/sellers", label: "Sellers" },
  { href: "/listings", label: "Listings" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-gold-300/30 bg-navy-700">
      <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <DrJanPortrait size="sm" priority className="ring-2 ring-gold-300" />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-2xl tracking-wide text-cream-100">Villages at Tule Springs</span>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold-300">
              Dr. Janet Duffy, REALTOR&reg;
            </span>
          </span>
        </Link>

        <nav className="hidden flex-wrap items-center gap-6 font-sans text-sm uppercase tracking-widest text-cream-200 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-gold-300">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden border-0 bg-gold-400 font-sans uppercase tracking-widest text-navy-800 hover:bg-gold-300 sm:inline-flex"
          >
            <CalendlyButton event="conversation" utmMedium="header" utmCampaign="header-book">
              Book a Call
            </CalendlyButton>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-gold-300 bg-transparent font-sans uppercase tracking-widest text-gold-200 hover:bg-gold-300 hover:text-navy-800"
          >
            <a href="tel:+17022221964">
              <Phone className="mr-2 h-4 w-4" />
              702-222-1964
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
