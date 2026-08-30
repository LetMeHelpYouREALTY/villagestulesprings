import { EXTRA_NEIGHBORHOODS } from "@/content/neighborhoods-extra";
import { MEDIA, type MediaAsset } from "@/lib/media-catalog";
import type { FaqItem } from "@/lib/schema";

export type NeighborhoodContent = {
  slug: string;
  name: string;
  kicker: string;
  h1: string;
  title: string;
  description: string;
  directAnswer: string;
  photo: MediaAsset;
  zip?: string;
  sections: { heading: string; body: string[]; photo: MediaAsset }[];
  faqs: FaqItem[];
};

const CORE_NEIGHBORHOODS: NeighborhoodContent[] = [
  {
    slug: "villages-at-tule-springs",
    name: "Villages at Tule Springs",
    kicker: "Master Plan · 89084",
    h1: "Villages at Tule Springs Real Estate",
    title: "Villages at Tule Springs Homes | North Las Vegas | Dr. Janet Duffy",
    description:
      "Homes in Villages at Tule Springs, a 1,280-acre North Las Vegas master plan near I-215 and Tule Springs Fossil Beds. Dr. Janet Duffy, 702-222-1964.",
    directAnswer:
      "Villages at Tule Springs is a 1,280-acre master-planned community in North Las Vegas, zip 89084, planned for more than 8,600 homes. Dr. Janet Duffy at 702-222-1964 represents buyers and sellers here.",
    photo: MEDIA.tuleSprings,
    zip: "89084",
    sections: [
      {
        heading: "Scale and setting",
        photo: MEDIA.amenityPool,
        body: [
          "The master plan covers about 1,280 acres beside the Eglington Preserve corridor and near Tule Springs Fossil Beds National Monument.",
          "Build-out began around 2017. Parks, trails, and civic parcels arrive in phases — confirm what is open on the parcel you are touring.",
        ],
      },
      {
        heading: "Housing types",
        photo: MEDIA.listingTownhome,
        body: [
          "Product includes single-family homes and townhomes from national builders. Floor plans range from compact two-story models to larger move-up elevations.",
          "HOA rules, solar, and landscaping packages differ by village. We pull the CC&Rs before you waive review.",
        ],
      },
      {
        heading: "Getting around",
        photo: MEDIA.areasServed,
        body: [
          "I-215 is the primary beltway connection. Centennial Hills retail sits to the south; Aliante is east. Time the Strip or employment centers from the actual lot.",
          "This page does not use school ratings or “family-friendly” language. Ask for named campuses and bus routes if that data matters to your household.",
        ],
      },
    ],
    faqs: [
      {
        question: "What zip code is Villages at Tule Springs?",
        answer: "89084, City of North Las Vegas, Nevada.",
      },
      {
        question: "Who can show me homes there today?",
        answer: "Dr. Janet Duffy, 702-222-1964. Book a 30-minute tour on this site’s calendar.",
      },
    ],
  },
  {
    slug: "north-las-vegas",
    name: "North Las Vegas",
    kicker: "Citywide Service Area",
    h1: "North Las Vegas Real Estate",
    title: "North Las Vegas Homes for Sale | Dr. Janet Duffy",
    description:
      "Buy or sell in North Las Vegas with Dr. Janet Duffy — Villages at Tule Springs, Aliante, and nearby 89084 inventory. 702-222-1964.",
    directAnswer:
      "Dr. Janet Duffy represents North Las Vegas buyers and sellers, with a focus on Villages at Tule Springs (89084). Call 702-222-1964.",
    photo: MEDIA.areasServed,
    zip: "89084",
    sections: [
      {
        heading: "How North Las Vegas searches differ",
        photo: MEDIA.inventoryLevels,
        body: [
          "The city includes older grid neighborhoods, Aliante, Tule Springs master plans, and industrial-adjacent pockets along I-15.",
          "We filter by zip, year built, and HOA — not by a single “North Las Vegas” average price, which mixes too many products.",
        ],
      },
      {
        heading: "Why this site concentrates on 89084",
        photo: MEDIA.tuleSprings,
        body: [
          "Villagestulesprings.com is built for the Tule Springs master-plan search. Broader North Las Vegas addresses are still covered in MLS.",
          "Tell Dr. Duffy the employment center and commute window; the map follows that, not a generic city pin.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you only work in Villages at Tule Springs?",
        answer:
          "That is the focus of this website. Dr. Duffy also covers greater North Las Vegas, Las Vegas, Henderson, and Summerlin. Call 702-222-1964.",
      },
    ],
  },
  {
    slug: "tule-springs",
    name: "Tule Springs",
    kicker: "Northwest Corridor",
    h1: "Tule Springs Area Homes",
    title: "Tule Springs Real Estate | North Las Vegas | Dr. Janet Duffy",
    description:
      "Tule Springs area real estate near the Fossil Beds and I-215, including Villages at Tule Springs. Dr. Janet Duffy, 702-222-1964.",
    directAnswer:
      "Tule Springs refers to the northwest North Las Vegas corridor by Tule Springs Fossil Beds National Monument. Villages at Tule Springs is the large master plan inside that area. Call 702-222-1964.",
    photo: MEDIA.tuleSprings,
    zip: "89084",
    sections: [
      {
        heading: "Monument and open space",
        photo: MEDIA.amenityPool,
        body: [
          "The national monument preserves Ice Age fossil beds and public trails. It is a location fact, not a promised backyard view — lot orientation varies.",
          "Dust, wind, and remaining construction traffic are part of an active master-plan edge. Walk the streets at the hour you would actually live there.",
        ],
      },
      {
        heading: "Villages vs the wider corridor",
        photo: MEDIA.homes800k1m,
        body: [
          "Listings tagged “Tule Springs” may sit inside the master plan or on adjacent North Las Vegas streets. We confirm the HOA name and parcel map.",
          "Heartland and other builder villages nearby are separate products with their own incentives.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Tule Springs the same as Villages at Tule Springs?",
        answer:
          "No. Tule Springs is the broader northwest area. Villages at Tule Springs is the named 1,280-acre master plan. Dr. Duffy handles both — 702-222-1964.",
      },
    ],
  },
  {
    slug: "aliante",
    name: "Aliante",
    kicker: "East of Tule Springs",
    h1: "Aliante Homes and Tule Springs Buyers",
    title: "Aliante Real Estate | North Las Vegas | Dr. Janet Duffy",
    description:
      "Compare Aliante and Villages at Tule Springs with Dr. Janet Duffy. North Las Vegas listings, 702-222-1964.",
    directAnswer:
      "Aliante is a North Las Vegas community east of the Tule Springs corridor along the beltway. Dr. Janet Duffy compares Aliante resale with Villages at Tule Springs new construction. Call 702-222-1964.",
    photo: MEDIA.featuredAliante,
    sections: [
      {
        heading: "When Aliante is the better map",
        photo: MEDIA.featuredAliante,
        body: [
          "Aliante has more established retail and golf-course adjacency than the newest Tule Springs phases. Resale dominates; new construction is limited.",
          "We run side-by-side HOA, lot size, and year-built tables so you are not comparing a 2005 Aliante home to a 2024 Tule Springs elevation by price alone.",
        ],
      },
      {
        heading: "Drive time between the two",
        photo: MEDIA.areasServed,
        body: [
          "Beltway travel between Aliante and Villages at Tule Springs is typically a short hop, but rush hour on I-215 varies. Time it once in each direction.",
          "Dr. Duffy will not quote a single commute number without your destination address.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can one agent show both Aliante and Tule Springs in a day?",
        answer: "Yes. Call 702-222-1964 and we cluster showings by beltway direction.",
      },
    ],
  },
  {
    slug: "skye-canyon",
    name: "Skye Canyon",
    kicker: "Northwest Comparison",
    h1: "Skye Canyon vs Villages at Tule Springs",
    title: "Skye Canyon Homes | Compared with Tule Springs | Dr. Janet Duffy",
    description:
      "Compare Skye Canyon and Villages at Tule Springs with Dr. Janet Duffy. Northwest Las Vegas real estate, 702-222-1964.",
    directAnswer:
      "Skye Canyon is a northwest Las Vegas master plan west of the Tule Springs / North Las Vegas line. Dr. Janet Duffy compares it with Villages at Tule Springs by HOA, builder, and lot — 702-222-1964.",
    photo: MEDIA.summerlin,
    sections: [
      {
        heading: "Two master plans, two cities",
        photo: MEDIA.areasServed,
        body: [
          "Villages at Tule Springs is in the City of North Las Vegas. Skye Canyon sits in the Las Vegas / northwest valley fabric with its own amenity spine.",
          "Utility providers, trash service, and permit offices differ. That shows up in closing documents more than in listing photos.",
        ],
      },
      {
        heading: "How we compare inventory",
        photo: MEDIA.listingExecutive,
        body: [
          "Same beds and baths can hide different lot widths and garage counts. We export both communities’ active and sold sets before you pick a model.",
          "No guessed medians on this page. You get a dated MLS pull.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I tour Skye Canyon or Tule Springs first?",
        answer:
          "Start with the city you need for commute or municipal services, then the other. Dr. Duffy sequences that — 702-222-1964.",
      },
    ],
  },
  {
    slug: "centennial-hills",
    name: "Centennial Hills",
    kicker: "South of Tule Springs",
    h1: "Centennial Hills and Tule Springs",
    title: "Centennial Hills Real Estate | Near Tule Springs | Dr. Janet Duffy",
    description:
      "Compare Centennial Hills resale with Villages at Tule Springs new homes. Dr. Janet Duffy, 702-222-1964.",
    directAnswer:
      "Centennial Hills sits south of the Tule Springs corridor with older resale stock and established retail. Dr. Janet Duffy compares it with Villages at Tule Springs for buyers who want 89084 new construction versus a finished neighborhood. Call 702-222-1964.",
    photo: MEDIA.summerlin,
    sections: [
      {
        heading: "Retail and medical along the 215",
        photo: MEDIA.downtownLasVegas,
        body: [
          "Centennial Hills has a denser retail and medical cluster than the newest Tule Springs villages. That can cut errand time even if the home is older.",
          "We still verify HOA, roof age, and HVAC on every resale — year-built in the 2000s is not a condition guarantee.",
        ],
      },
      {
        heading: "Who typically cross-shops",
        photo: MEDIA.listingTwoStory,
        body: [
          "Buyers who want a shorter punch-list often stay in Centennial Hills. Buyers who want unused warranty years often start in Villages at Tule Springs.",
          "Neither is “better.” The contract terms and remaining work are the decision.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Centennial Hills in North Las Vegas?",
        answer:
          "Most Centennial Hills addresses are in the City of Las Vegas / unincorporated-northwest pattern, not the City of North Las Vegas. Villages at Tule Springs is North Las Vegas. Confirm the city on the tax record. Call 702-222-1964.",
      },
    ],
  },
];

export const NEIGHBORHOODS: NeighborhoodContent[] = [...CORE_NEIGHBORHOODS, ...EXTRA_NEIGHBORHOODS];

const NEIGHBORHOOD_BY_SLUG = new Map(NEIGHBORHOODS.map((item) => [item.slug, item]));

export function getNeighborhood(slug: string): NeighborhoodContent | undefined {
  return NEIGHBORHOOD_BY_SLUG.get(slug);
}

export function neighborhoodSlugs(): string[] {
  return NEIGHBORHOODS.map((item) => item.slug);
}
