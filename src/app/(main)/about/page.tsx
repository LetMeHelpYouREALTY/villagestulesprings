import type { Metadata } from "next";

import { aboutPageMetadata } from "@/config/metadata-config";

// Use the pre-configured metadata for the about page
export const metadata: Metadata = aboutPageMetadata;

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">About Dr. Janet Duffy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="mb-8 text-xl text-gray-600">
            Dr. Janet Duffy is a licensed real estate professional with over 15 years of experience helping clients buy
            and sell homes in the Las Vegas metropolitan area.
          </p>

          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Experience & Expertise</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• 15+ years in Las Vegas real estate</li>
                <li>• Licensed Nevada Real Estate Agent</li>
                <li>• Certified Home Valuation Specialist</li>
                <li>• Luxury Home Marketing Expert</li>
                <li>• First-Time Homebuyer Specialist</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Areas Served</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Las Vegas</li>
                <li>• Henderson</li>
                <li>• Summerlin</li>
                <li>• Green Valley</li>
                <li>• Anthem</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 p-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Professional Approach</h2>
            <p className="mb-4 text-gray-600">
              Dr. Janet Duffy combines deep local market knowledge with a personalized approach to help clients achieve
              their real estate goals. Whether you&apos;re buying your first home, selling a family residence, or
              investing in Las Vegas real estate, Dr. Duffy provides expert guidance every step of the way.
            </p>
            <p className="text-gray-600">
              Her commitment to excellence and client satisfaction has earned her recognition as one of Las Vegas&apos;s
              top real estate professionals, with hundreds of successful transactions and satisfied clients.
            </p>
          </div>

          <div className="mt-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Ready to Work Together?</h2>
            <p className="mb-6 text-gray-600">
              Contact Dr. Janet Duffy today for a free consultation about your real estate needs.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:(702) 555-REALTOR"
                className="rounded-lg bg-green-600 px-6 py-3 text-white transition-colors hover:bg-green-700"
              >
                Call (702) 555-REALTOR
              </a>
              <a
                href="mailto:info@lasvegasrealestate.com"
                className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
              >
                Email Dr. Duffy
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
