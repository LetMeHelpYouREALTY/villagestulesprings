import { CuratedAmenityList } from "@/components/amenities/curated-amenity-list";
import { COMMUNITY_MAP_LABEL, communityMapEmbedUrl, type AmenityCategoryId } from "@/config/community-map";
import { curatedPlacesForCategory } from "@/data/amenities-page";

type AmenityMapFallbackProps = {
  heightClass: string;
  categoryId?: AmenityCategoryId;
  showCategoryList?: boolean;
};

export function AmenityMapFallback({
  heightClass,
  categoryId,
  showCategoryList = true,
}: AmenityMapFallbackProps) {
  const categoryPlaces = categoryId ? curatedPlacesForCategory(categoryId) : undefined;

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-lg border border-navy-200/20 shadow-sm">
        <iframe
          title={`Map of ${COMMUNITY_MAP_LABEL}`}
          src={communityMapEmbedUrl()}
          className={`w-full border-0 ${heightClass}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      {showCategoryList ? (
        <CuratedAmenityList
          compact
          places={categoryPlaces}
          title={
            categoryPlaces && categoryPlaces.length > 0
              ? "Nearby places (curated)"
              : "Nearby places (map preview)"
          }
        />
      ) : null}
    </div>
  );
}
