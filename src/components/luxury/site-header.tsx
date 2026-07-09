"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LUXURY_SITE } from "@/config/luxury-site-config";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-luxury-charcoal/95 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:py-5">
        <Link href="/" className="group">
          <p className="font-display text-sm font-medium tracking-[0.2em] text-luxury-gold md:text-base">
            {LUXURY_SITE.agentName.toUpperCase()}
          </p>
          <p className={`text-xs tracking-wide ${scrolled ? "text-luxury-cream/70" : "text-luxury-charcoal/70"}`}>
            {LUXURY_SITE.tagline}
          </p>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {LUXURY_SITE.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide transition-colors hover:text-luxury-gold ${
                scrolled ? "text-luxury-ivory/90" : "text-luxury-charcoal/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${LUXURY_SITE.phoneTel}`}
            className={`flex items-center gap-2 text-sm transition-colors hover:text-luxury-gold ${
              scrolled ? "text-luxury-ivory" : "text-luxury-charcoal"
            }`}
          >
            <Phone className="size-4" />
            {LUXURY_SITE.phone}
          </a>
          <Button asChild className="luxury-btn-outline rounded-none px-5 py-2 text-sm">
            <Link href="/#contact">Schedule a Private Showing</Link>
          </Button>
        </div>

        <button
          type="button"
          className={`lg:hidden ${scrolled ? "text-luxury-ivory" : "text-luxury-charcoal"}`}
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-luxury-gold/20 bg-luxury-charcoal px-4 py-6 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {LUXURY_SITE.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide text-luxury-ivory/90 hover:text-luxury-gold"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${LUXURY_SITE.phoneTel}`} className="flex items-center gap-2 text-sm text-luxury-gold">
              <Phone className="size-4" />
              {LUXURY_SITE.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
