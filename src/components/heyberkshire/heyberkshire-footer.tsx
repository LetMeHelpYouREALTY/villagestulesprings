import Link from "next/link";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { HEYBERKSHIRE_CONFIG } from "@/config/heyberkshire-config";

const QUICK_LINKS = [
  { href: HEYBERKSHIRE_CONFIG.realScoutSearchUrl, label: "All Properties", external: true },
  { href: "/heyberkshire/neighborhoods", label: "Neighborhoods" },
  { href: "/heyberkshire/why-berkshire-hathaway", label: "Why BHHS" },
  { href: "/heyberkshire/market-report", label: "Market Report" },
  { href: "/heyberkshire/about", label: "About Dr. Jan" },
  { href: "/heyberkshire/contact", label: "Contact" },
];

const SERVICE_LINKS = [
  { href: "/heyberkshire/buyers", label: "Home Buying" },
  { href: "/heyberkshire/buyers/california-relocator", label: "California Relocators" },
  { href: "/heyberkshire/sellers", label: "Home Selling" },
  { href: "/heyberkshire/luxury-homes", label: "Luxury Homes" },
  { href: "/heyberkshire/55-plus-communities", label: "55+ Communities" },
  { href: "/heyberkshire/new-construction", label: "New Construction" },
  { href: "/heyberkshire/market-insights", label: "Market Insights" },
];

const SOCIAL_LINKS = [
  { href: HEYBERKSHIRE_CONFIG.socials.facebook, label: "Facebook", icon: Facebook },
  { href: HEYBERKSHIRE_CONFIG.socials.instagram, label: "Instagram", icon: Instagram },
  { href: HEYBERKSHIRE_CONFIG.socials.linkedin, label: "LinkedIn", icon: Linkedin },
];

export function HeyBerkshireFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <h3 className="mb-4 text-xl font-bold">{HEYBERKSHIRE_CONFIG.brandName}</h3>
            <p className="mb-4 text-sm text-slate-300">
              {HEYBERKSHIRE_CONFIG.brandSubtitle} - Your trusted real estate partner in Las Vegas, Henderson, and
              Summerlin. Backed by Warren Buffett&apos;s legacy of trust.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-white"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-slate-300 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Real Estate Services</h3>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-300 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contact {HEYBERKSHIRE_CONFIG.agentName}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" aria-hidden="true" />
                <span className="text-sm text-slate-300">
                  {HEYBERKSHIRE_CONFIG.address.street}
                  <br />
                  {HEYBERKSHIRE_CONFIG.address.city}, {HEYBERKSHIRE_CONFIG.address.region}{" "}
                  {HEYBERKSHIRE_CONFIG.address.postalCode}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 flex-shrink-0 text-blue-400" aria-hidden="true" />
                <a
                  href={HEYBERKSHIRE_CONFIG.phoneHref}
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {HEYBERKSHIRE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 flex-shrink-0 text-blue-400" aria-hidden="true" />
                <a
                  href={`mailto:${HEYBERKSHIRE_CONFIG.email}`}
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {HEYBERKSHIRE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-slate-400 md:text-left">
              © {currentYear} {HEYBERKSHIRE_CONFIG.parentBrokerage}. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/heyberkshire/faq" className="text-slate-400 transition-colors hover:text-white">
                FAQ
              </Link>
              <Link href="/sitemap.xml" className="text-slate-400 transition-colors hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            {HEYBERKSHIRE_CONFIG.agentName}, {HEYBERKSHIRE_CONFIG.agentTitle} | License {HEYBERKSHIRE_CONFIG.license} |{" "}
            {HEYBERKSHIRE_CONFIG.parentBrokerage}
          </p>
          <p className="mx-auto mt-2 max-w-3xl text-center text-xs text-slate-600">
            When you work with a Berkshire Hathaway HomeServices agent, you&apos;re backed by a name synonymous with
            trust, ethical standards, and financial strength.
          </p>
        </div>
      </div>
    </footer>
  );
}
