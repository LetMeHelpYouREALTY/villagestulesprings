import Link from "next/link";

import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog/las-vegas-market-update-2024", label: "Market Insights" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-gold-300/30 bg-navy-700">
      <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-5">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-2xl tracking-wide text-cream-100">Villages at Tule Springs</span>
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold-300">
            Dr. Janet Duffy, REALTOR&reg;
          </span>
        </Link>

        <nav className="hidden items-center gap-8 font-sans text-sm uppercase tracking-widest text-cream-200 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-gold-300">
              {link.label}
            </Link>
          ))}
        </nav>

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
    </header>
  );
}
