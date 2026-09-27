import { CURATED_NEARBY_PLACES, type CuratedPlace } from "@/data/amenities-page";

type CuratedAmenityListProps = {
  places?: readonly CuratedPlace[];
  title?: string;
  compact?: boolean;
};

export function CuratedAmenityList({
  places,
  title = "Featured nearby places",
  compact = false,
}: CuratedAmenityListProps) {
  const items = places ?? CURATED_NEARBY_PLACES;

  return (
    <section aria-labelledby="curated-amenities-heading" className={compact ? "mt-6" : "mt-10"}>
      <h2
        id="curated-amenities-heading"
        className={
          compact
            ? "mb-4 font-serif text-xl text-navy-800"
            : "mb-6 text-center font-serif text-3xl text-navy-800"
        }
      >
        {title}
      </h2>
      <ul className={`grid gap-4 ${compact ? "" : "md:grid-cols-2"}`}>
        {items.map((place) => (
          <li key={place.name} className="rounded-lg border border-navy-200/20 bg-white p-5">
            <p className="font-serif text-lg text-navy-800">{place.name}</p>
            <p className="mt-1 font-sans text-sm text-navy-600">{place.address}</p>
            <p className="mt-2 font-sans text-sm text-navy-500">{place.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
