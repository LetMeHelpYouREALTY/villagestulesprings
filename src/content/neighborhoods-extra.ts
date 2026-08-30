import type { NeighborhoodContent } from "@/content/neighborhoods";
import { MEDIA } from "@/lib/media-catalog";

/** Nearby comparison communities. Geographic facts only — no invented medians or school ratings. */
export const EXTRA_NEIGHBORHOODS: NeighborhoodContent[] = [
  {
    slug: "heartland",
    name: "Heartland",
    kicker: "D.R. Horton · North Las Vegas",
    h1: "Heartland vs Villages at Tule Springs",
    title: "Heartland Homes | Compared with Tule Springs | Dr. Janet Duffy",
    description:
      "Compare Heartland and Villages at Tule Springs with Dr. Janet Duffy. North Las Vegas new construction, 702-222-1964.",
    directAnswer:
      "Heartland is a newer D.R. Horton community in North Las Vegas. Villages at Tule Springs is the larger 1,280-acre master plan nearby, with phases since about 2017. Dr. Janet Duffy compares both by lot and contract — 702-222-1964.",
    photo: MEDIA.listingExecutive,
    zip: "89084",
    sections: [
      {
        heading: "Two builder maps, not one brochure",
        photo: MEDIA.inventoryLevels,
        body: [
          "Heartland and Villages at Tule Springs can share a builder name on some phases and still sit on different parcels, HOAs, and completion calendars.",
          "We confirm which sales office holds your registration. Touring the wrong trailer first can complicate representation.",
        ],
      },
      {
        heading: "How we compare without guessed prices",
        photo: MEDIA.homePrices,
        body: [
          "This page does not republish a competitor’s price band. You get a same-day MLS and builder-office check for the floor plan you want.",
          "Lot premiums, HOA, and remaining construction traffic usually decide the match more than a headline community name.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Heartland inside Villages at Tule Springs?",
        answer:
          "Treat them as separate products until the parcel map says otherwise. Dr. Duffy confirms HOA and legal name — 702-222-1964.",
      },
    ],
  },
  {
    slug: "providence",
    name: "Providence",
    kicker: "Northwest Comparison · 89166",
    h1: "Providence vs Villages at Tule Springs",
    title: "Providence Las Vegas Homes | Compared with Tule Springs | Dr. Janet Duffy",
    description:
      "Compare Providence (northwest Las Vegas) with Villages at Tule Springs. Dr. Janet Duffy, 702-222-1964.",
    directAnswer:
      "Providence is a Focus Property Group master plan in the northwest valley (often searched as 89166, near the 215 at Hualapai). Villages at Tule Springs is in the City of North Las Vegas, zip 89084. Dr. Janet Duffy compares both — 702-222-1964.",
    photo: MEDIA.summerlin,
    zip: "89166",
    sections: [
      {
        heading: "Two cities, one beltway",
        photo: MEDIA.areasServed,
        body: [
          "Providence sits in the northwest Las Vegas fabric near Centennial Hills and Skye Canyon. Villages at Tule Springs is City of North Las Vegas near the Fossil Beds.",
          "Utility providers, trash service, and permit offices can differ. That shows up in closing documents more than in listing photos.",
        ],
      },
      {
        heading: "Resale vs still-building",
        photo: MEDIA.perfectHome,
        body: [
          "Providence opened in the mid-2000s and is largely a resale market with tree-lined streets already in place. Villages at Tule Springs still has active phases in 2026.",
          "Neither is “better.” Warranty years vs established landscaping is the trade. We export both MLS sets before you tour.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Providence in North Las Vegas?",
        answer:
          "Providence is generally a northwest Las Vegas / 89166 search, not City of North Las Vegas 89084. Confirm the city on the tax record. Call 702-222-1964.",
      },
    ],
  },
  {
    slug: "eldorado",
    name: "Eldorado",
    kicker: "Established North Las Vegas",
    h1: "Eldorado and Villages at Tule Springs",
    title: "Eldorado North Las Vegas Homes | Dr. Janet Duffy",
    description: "Compare Eldorado resale with Villages at Tule Springs new homes. Dr. Janet Duffy, 702-222-1964.",
    directAnswer:
      "Eldorado is an established North Las Vegas master plan where Pardee Homes built for decades starting in the late 1980s. Villages at Tule Springs is the newer 1,280-acre plan to the north. Dr. Janet Duffy compares year-built and HOA — 702-222-1964.",
    photo: MEDIA.featuredAliante,
    sections: [
      {
        heading: "Year-built is the first filter",
        photo: MEDIA.listingTwoStory,
        body: [
          "Eldorado resale often means older mechanicals and landscaping already mature. Tule Springs new construction can still carry unused warranty years and unfinished streets.",
          "Roof, HVAC, and irrigation clocks are inspection items on every Eldorado tour — year-built is not a condition grade.",
        ],
      },
      {
        heading: "Same city, different commute legs",
        photo: MEDIA.areasServed,
        body: [
          "Both sit in North Las Vegas, but they do not share one exit. Time I-15 vs I-215 from the actual address.",
          "Dr. Duffy will not quote a single citywide commute number.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Eldorado still building like Tule Springs?",
        answer:
          "Eldorado is largely resale. Villages at Tule Springs still has active builder phases. Confirm with Dr. Duffy — 702-222-1964.",
      },
    ],
  },
  {
    slug: "valley-vista",
    name: "Valley Vista",
    kicker: "North Las Vegas Master Plan",
    h1: "Valley Vista vs Villages at Tule Springs",
    title: "Valley Vista Homes | North Las Vegas | Dr. Janet Duffy",
    description:
      "Compare Valley Vista and Villages at Tule Springs new construction with Dr. Janet Duffy. 702-222-1964.",
    directAnswer:
      "Valley Vista is another actively building North Las Vegas master plan. Villages at Tule Springs is the far-north 1,280-acre community near Tule Springs Fossil Beds. Dr. Janet Duffy compares both on a dated MLS pull — 702-222-1964.",
    photo: MEDIA.perfectHome,
    sections: [
      {
        heading: "Two active job sites",
        photo: MEDIA.inventoryLevels,
        body: [
          "If you need unused warranty years, both maps can work. The deciding facts are lot, HOA, and which builder holds the registration.",
          "Construction traffic exists on both. Visit at the hour you would live there.",
        ],
      },
      {
        heading: "Do not mix the sales offices",
        photo: MEDIA.listingVilla,
        body: [
          "Register Dr. Duffy before the first model in either community. A walk-in at the wrong trailer can complicate representation.",
          "Call 702-222-1964 the morning you go so we confirm who is releasing lots that week.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I tour Valley Vista or Tule Springs first?",
        answer:
          "Start with the commute and city services you need, then the other. Dr. Duffy sequences that — 702-222-1964.",
      },
    ],
  },
  {
    slug: "summerlin",
    name: "Summerlin",
    kicker: "West Valley Comparison",
    h1: "Summerlin vs Villages at Tule Springs",
    title: "Summerlin Homes Compared with Tule Springs | Dr. Janet Duffy",
    description:
      "Compare Summerlin and Villages at Tule Springs with Dr. Janet Duffy. Two master plans, two pricing conversations. 702-222-1964.",
    directAnswer:
      "Summerlin is a large west-valley master plan. Villages at Tule Springs is a 1,280-acre North Las Vegas plan in 89084. They are not the same pricing band. Dr. Janet Duffy pulls comps for the subdivision you name — 702-222-1964.",
    photo: MEDIA.summerlin,
    sections: [
      {
        heading: "Different developers, different cities",
        photo: MEDIA.areasServed,
        body: [
          "Summerlin sits in the City of Las Vegas / west-valley fabric toward Red Rock. Villages at Tule Springs is City of North Las Vegas near the Fossil Beds and I-215 north.",
          "HOA structures, village amenities, and remaining new-construction supply are not interchangeable. Compare the parcel, not the brand.",
        ],
      },
      {
        heading: "No guessed medians on this page",
        photo: MEDIA.homePrices,
        body: [
          "Summerlin and 89084 do not share one average price. A number without a dated MLS pull is not used here.",
          "If your search spans both, you get two comp sets. Call 702-222-1964.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Villages at Tule Springs part of Summerlin?",
        answer: "No. It is in North Las Vegas, zip 89084. Dr. Duffy works both maps — 702-222-1964.",
      },
    ],
  },
  {
    slug: "henderson",
    name: "Henderson",
    kicker: "Southeast Valley Comparison",
    h1: "Henderson vs North Las Vegas 89084",
    title: "Henderson Homes Compared with Tule Springs | Dr. Janet Duffy",
    description:
      "Compare Henderson and Villages at Tule Springs with Dr. Janet Duffy. Two cities, two commute maps. 702-222-1964.",
    directAnswer:
      "Henderson is a separate city southeast of the Las Vegas Strip corridor. Villages at Tule Springs is in North Las Vegas 89084. Dr. Janet Duffy compares commute, city services, and inventory type — 702-222-1964.",
    photo: MEDIA.henderson,
    sections: [
      {
        heading: "City services are not optional trivia",
        photo: MEDIA.downtownLasVegas,
        body: [
          "Police, permits, and trash sit with different municipalities. If your employer or insurance cares about the city name, confirm it on the tax record.",
          "Drive time between Henderson and far-north North Las Vegas is a cross-valley trip. Time it once each way for your workplace.",
        ],
      },
      {
        heading: "Product mix",
        photo: MEDIA.listingTwoStory,
        body: [
          "Henderson mixes decades of resale with its own master plans. Villages at Tule Springs is still adding phases in 2026.",
          "We do not use school ratings or “family-friendly” language. Ask for named campuses if that data matters to your household.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can one agent show Henderson and Tule Springs?",
        answer: "Yes. Cluster showings by valley side. Call Dr. Janet Duffy at 702-222-1964.",
      },
    ],
  },
  {
    slug: "89031",
    name: "Zip 89031",
    kicker: "North Las Vegas Zip",
    h1: "Homes in Zip Code 89031",
    title: "89031 Homes | North Las Vegas | Dr. Janet Duffy",
    description:
      "Search North Las Vegas zip 89031 and compare with Villages at Tule Springs 89084. Dr. Janet Duffy, 702-222-1964.",
    directAnswer:
      "Zip 89031 is in North Las Vegas, generally south of the 89084 / Villages at Tule Springs search. Dr. Janet Duffy runs both zips when the commute calls for it. Call 702-222-1964.",
    photo: MEDIA.areasServed,
    zip: "89031",
    sections: [
      {
        heading: "Do not treat NLV as one zip",
        photo: MEDIA.quickHomeSearch,
        body: [
          "89031 and 89084 mix different year-built stock and HOAs. A citywide average price is not useful.",
          "Tell Dr. Duffy the employment center. The zip filter follows that, not a pin in the middle of North Las Vegas.",
        ],
      },
      {
        heading: "When 89031 is the better first tour",
        photo: MEDIA.inventoryLevels,
        body: [
          "If the workplace is closer to central North Las Vegas or I-15, 89031 can cut drive time versus the far-north master plan.",
          "If you want unused warranty years in Villages at Tule Springs, start in 89084. We can still run 89031 as a backup list.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Villages at Tule Springs in 89031?",
        answer: "No. The master plan is searched as 89084. Dr. Duffy covers both zips — 702-222-1964.",
      },
    ],
  },
];
