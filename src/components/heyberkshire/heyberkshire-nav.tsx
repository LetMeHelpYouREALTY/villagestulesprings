"use client";

import { useState } from "react";

import Link from "next/link";

import { ChevronDown, Menu, Phone, X } from "lucide-react";

import { HEYBERKSHIRE_CONFIG } from "@/config/heyberkshire-config";

const NAV_LINKS = [
  { href: "/heyberkshire", label: "Home" },
  { href: HEYBERKSHIRE_CONFIG.realScoutSearchUrl, label: "Properties", external: true },
  { href: "/heyberkshire/neighborhoods", label: "Neighborhoods" },
  { href: "/heyberkshire/about", label: "About" },
  { href: "/heyberkshire/contact", label: "Contact" },
];

const SERVICE_LINKS = [
  { href: "/heyberkshire/buyers", label: "Home Buying" },
  { href: "/heyberkshire/sellers", label: "Home Selling" },
  { href: "/heyberkshire/luxury-homes", label: "Luxury Homes" },
  { href: "/heyberkshire/55-plus-communities", label: "55+ Communities" },
  { href: "/heyberkshire/new-construction", label: "New Construction" },
];

export function HeyBerkshireNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white py-3 shadow-md transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/heyberkshire" className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-slate-900 transition-colors hover:text-blue-600 md:text-xl lg:text-2xl">
              {HEYBERKSHIRE_CONFIG.brandName}
              <span className="text-blue-600"> HomeServices</span>
            </span>
            <span className="hidden text-xs text-slate-500 sm:block">{HEYBERKSHIRE_CONFIG.brandSubtitle}</span>
          </Link>

          <div className="hidden items-center space-x-5 lg:flex">
            {NAV_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
                >
                  {link.label}
                </Link>
              ),
            )}

            <div className="relative">
              <button
                type="button"
                className="flex items-center rounded-md px-2 py-1 text-sm font-medium text-slate-700 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-label="Services menu"
                onClick={() => setServicesOpen((open) => !open)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </button>
              {servicesOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md border border-slate-200 bg-white py-2 shadow-lg">
                  {SERVICE_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                      onClick={() => setServicesOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href={HEYBERKSHIRE_CONFIG.phoneHref}
              className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="hidden xl:inline">{HEYBERKSHIRE_CONFIG.phoneDisplay}</span>
              <span className="xl:hidden">Call</span>
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={HEYBERKSHIRE_CONFIG.phoneHref}
              className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              className="rounded-md p-1 text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mt-3 flex flex-col gap-1 border-t border-slate-100 pt-3 lg:hidden">
            {NAV_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
