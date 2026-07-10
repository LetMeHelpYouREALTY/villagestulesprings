import type { Metadata } from "next";
import Image from "next/image";

import { generateArticleMetadata } from "@/config/metadata-config";

// Generate article-specific metadata with all the required Open Graph properties
export const metadata: Metadata = generateArticleMetadata({
  title: "Las Vegas Real Estate Market Update: 2024 Trends & Insights",
  description:
    "Discover the latest Las Vegas real estate market trends for 2024. Dr. Janet Duffy shares expert insights on home prices, inventory levels, and what buyers and sellers need to know.",
  url: "https://villagestulesprings.com/blog/las-vegas-market-update-2024",
  publishedTime: "2024-01-15T10:00:00Z",
  modifiedTime: "2024-01-15T15:30:00Z",
  author: "Dr. Janet Duffy",
  section: "Market Analysis",
  tags: [
    "Las Vegas real estate",
    "market trends",
    "home prices",
    "real estate market 2024",
    "Las Vegas housing market",
    "property values",
    "market analysis",
  ],
  featuredImage: "/blog/las-vegas-market-2024.jpg",
});

export default function BlogPostPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <article className="mx-auto max-w-4xl">
        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-4 text-sm text-gray-500">
            <time dateTime="2024-01-15T10:00:00Z">January 15, 2024</time>
            <span className="mx-2">•</span>
            <span>Market Analysis</span>
            <span className="mx-2">•</span>
            <span>Dr. Janet Duffy</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Las Vegas Real Estate Market Update: 2024 Trends & Insights
          </h1>

          <p className="text-xl leading-relaxed text-gray-600">
            As we move through 2024, the Las Vegas real estate market continues to evolve. Here&apos;s what buyers and
            sellers need to know about current trends, pricing, and opportunities.
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative mb-12 h-96 w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/blog/las-vegas-market-2024.jpg"
            alt="Las Vegas real estate market trends and home prices in 2024"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="mb-6 text-3xl font-semibold text-gray-900">Market Overview</h2>
          <p className="mb-6 text-gray-600">
            The Las Vegas real estate market in 2024 shows signs of stabilization after the volatility of recent years.
            While interest rates remain elevated compared to historic lows, the market is adapting to new conditions.
          </p>

          <h2 className="mb-6 text-3xl font-semibold text-gray-900">Key Trends</h2>

          <h3 className="mb-4 text-2xl font-semibold text-gray-900">Home Prices</h3>
          <p className="mb-6 text-gray-600">
            Median home prices in Las Vegas have shown modest appreciation year-over-year, with luxury properties in
            areas like Summerlin and Henderson continuing to perform well. The market is seeing more balanced conditions
            between buyers and sellers.
          </p>

          <h3 className="mb-4 text-2xl font-semibold text-gray-900">Inventory Levels</h3>
          <p className="mb-6 text-gray-600">
            Inventory levels have improved from the historic lows of 2021-2022, providing buyers with more options.
            However, well-priced homes in desirable neighborhoods still move quickly, often receiving multiple offers.
          </p>

          <h3 className="mb-4 text-2xl font-semibold text-gray-900">Interest Rates</h3>
          <p className="mb-6 text-gray-600">
            Mortgage rates have stabilized in the 6-7% range, which has become the new normal for many buyers. This has
            led to more realistic expectations and sustainable market conditions.
          </p>

          <h2 className="mb-6 text-3xl font-semibold text-gray-900">What This Means for You</h2>

          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">For Buyers</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• More inventory to choose from</li>
                <li>• Less competition on most properties</li>
                <li>• Opportunity to negotiate terms</li>
                <li>• Time to make informed decisions</li>
              </ul>
            </div>

            <div className="rounded-lg bg-green-50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">For Sellers</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Price homes competitively</li>
                <li>• Prepare for longer marketing times</li>
                <li>• Focus on property presentation</li>
                <li>• Consider timing carefully</li>
              </ul>
            </div>
          </div>

          <h2 className="mb-6 text-3xl font-semibold text-gray-900">Neighborhood Highlights</h2>

          <h3 className="mb-4 text-2xl font-semibold text-gray-900">Summerlin</h3>
          <p className="mb-4 text-gray-600">
            Summerlin continues to be a top performer with strong demand for luxury homes and master-planned community
            amenities. New construction is limited, supporting resale values.
          </p>

          <h3 className="mb-4 text-2xl font-semibold text-gray-900">Henderson</h3>
          <p className="mb-4 text-gray-600">
            Henderson&apos;s diverse neighborhoods offer opportunities for buyers at various price points. The
            area&apos;s proximity to Las Vegas and strong school districts maintain its appeal.
          </p>

          <h3 className="mb-4 text-2xl font-semibold text-gray-900">Downtown Las Vegas</h3>
          <p className="mb-6 text-gray-600">
            Downtown continues its transformation with new residential developments and entertainment options. This area
            offers unique opportunities for investors and urban living enthusiasts.
          </p>

          <div className="my-8 rounded-lg bg-gray-50 p-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Expert Insight</h2>
            <blockquote className="mb-4 text-lg italic text-gray-700">
              &quot;The Las Vegas market in 2024 presents opportunities for both buyers and sellers, but success
              requires understanding current conditions and working with experienced professionals who know the local
              market intimately.&quot;
            </blockquote>
            <cite className="text-gray-600">— Dr. Janet Duffy, Licensed Real Estate Agent</cite>
          </div>

          <h2 className="mb-6 text-3xl font-semibold text-gray-900">Looking Ahead</h2>
          <p className="mb-8 text-gray-600">
            As we progress through 2024, the Las Vegas real estate market is expected to remain stable with moderate
            price appreciation. The key to success in this market is working with knowledgeable professionals who can
            guide you through the complexities of buying or selling in today&apos;s environment.
          </p>
        </div>

        {/* Article Footer */}
        <footer className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-gray-600">
                <strong>About the Author:</strong> Dr. Janet Duffy is a licensed real estate professional with over 15
                years of experience in the Las Vegas market.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="tel:(702) 555-REALTOR"
                className="rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
              >
                Contact Dr. Duffy
              </a>
              <a
                href="/listings"
                className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
              >
                View Listings
              </a>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}
