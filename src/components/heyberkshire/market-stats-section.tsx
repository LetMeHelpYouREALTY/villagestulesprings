import Link from "next/link";

const STATS = [
  { value: "$450K", label: "Median Home Price", delta: "+4.2% YoY" },
  { value: "28", label: "Avg Days on Market" },
  { value: "4,850", label: "Active Listings" },
  { value: "2.1", label: "Months Inventory" },
];

export function MarketStatsSection() {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Las Vegas Real Estate Market | January 2026</h2>
          <p className="text-slate-300">Current market data from Berkshire Hathaway HomeServices Nevada Properties</p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-2 text-4xl font-bold text-blue-400 md:text-5xl">{stat.value}</div>
              <div className="text-sm text-slate-300">{stat.label}</div>
              {stat.delta && <div className="text-sm text-green-400">{stat.delta}</div>}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/heyberkshire/market-report"
            className="inline-block rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            View Full Market Report
          </Link>
        </div>
      </div>
    </section>
  );
}
