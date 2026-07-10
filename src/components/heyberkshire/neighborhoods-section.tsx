import Link from "next/link";

const NEIGHBORHOODS = [
  { slug: "summerlin", name: "Summerlin", fromPrice: "$625K" },
  { slug: "henderson", name: "Henderson", fromPrice: "$485K" },
  { slug: "green-valley", name: "Green Valley", fromPrice: "$520K" },
  { slug: "the-ridges", name: "The Ridges", fromPrice: "$2.5M" },
  { slug: "southern-highlands", name: "Southern Highlands", fromPrice: "$750K" },
  { slug: "north-las-vegas", name: "North Las Vegas", fromPrice: "$385K" },
  { slug: "skye-canyon", name: "Skye Canyon", fromPrice: "$550K" },
  { slug: "centennial-hills", name: "Centennial Hills", fromPrice: "$495K" },
  { slug: "inspirada", name: "Inspirada", fromPrice: "$525K" },
  { slug: "mountains-edge", name: "Mountains Edge", fromPrice: "$475K" },
];

export function NeighborhoodsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Las Vegas Neighborhoods We Serve</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Berkshire Hathaway HomeServices Nevada Properties covers all of Southern Nevada
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {NEIGHBORHOODS.map((neighborhood) => (
            <Link
              key={neighborhood.slug}
              href={`/heyberkshire/neighborhoods/${neighborhood.slug}`}
              className="group rounded-lg bg-slate-50 p-4 text-center transition-colors hover:bg-blue-50"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">{neighborhood.name}</h3>
              <p className="text-sm text-slate-500">From {neighborhood.fromPrice}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/heyberkshire/neighborhoods" className="font-semibold text-blue-600 hover:text-blue-700">
            View All Neighborhoods →
          </Link>
        </div>
      </div>
    </section>
  );
}
