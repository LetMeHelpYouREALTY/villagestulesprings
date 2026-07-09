import Link from "next/link";

import { Phone } from "lucide-react";

import { HEYBERKSHIRE_CONFIG } from "@/config/heyberkshire-config";

export function CtaSection() {
  return (
    <section className="bg-blue-600 py-16 text-white md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Work with Berkshire Hathaway HomeServices?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
          Whether you&apos;re buying, selling, or investing in Las Vegas real estate, {HEYBERKSHIRE_CONFIG.agentName} is
          here to help.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={HEYBERKSHIRE_CONFIG.phoneHref}
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-blue-600 transition-colors hover:bg-blue-50"
          >
            <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
            Call {HEYBERKSHIRE_CONFIG.phoneDisplay}
          </a>
          <Link
            href="/heyberkshire/contact"
            className="inline-block rounded-md bg-blue-700 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-blue-800"
          >
            Send a Message
          </Link>
        </div>
        <p className="mt-6 text-sm text-blue-200">
          {HEYBERKSHIRE_CONFIG.agentName} | License {HEYBERKSHIRE_CONFIG.license} |{" "}
          {HEYBERKSHIRE_CONFIG.parentBrokerage}
        </p>
      </div>
    </section>
  );
}
