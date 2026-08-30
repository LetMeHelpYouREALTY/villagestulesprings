import type { MarketingPageContent } from "@/content/marketing-types";
import { MEDIA } from "@/lib/media-catalog";

export const EXTRA_MARKETING_PAGES_A: MarketingPageContent[] = [
  {
    slug: "services",
    kicker: "North Las Vegas REALTOR®",
    h1: "Real Estate Services in Villages at Tule Springs",
    title: "Real Estate Services | Villages at Tule Springs | Dr. Janet Duffy",
    description:
      "Buyer, seller, new-construction, and valuation services in Villages at Tule Springs with Dr. Janet Duffy. North Las Vegas, NV 89084. Call 702-222-1964.",
    directAnswer:
      "Dr. Janet Duffy (S.0197614.LLC) provides buyer representation, listing, new-construction registration, and home valuation in Villages at Tule Springs, North Las Vegas 89084. Call 702-222-1964.",
    photo: MEDIA.professionalApproach,
    pageType: "CollectionPage",
    service: {
      name: "Villages at Tule Springs real estate services",
      description: "Licensed representation for buying, selling, and valuing homes in zip 89084.",
    },
    itemList: {
      name: "Services",
      items: [
        { name: "Buy a home", path: "/buyers" },
        { name: "Sell a home", path: "/sellers" },
        { name: "Home valuation", path: "/home-valuation" },
        { name: "New construction", path: "/new-construction" },
        { name: "Luxury homes", path: "/luxury-homes" },
        { name: "Home tours", path: "/home-tours" },
      ],
    },
    sections: [
      {
        heading: "What each service covers",
        photo: MEDIA.experienceExpertise,
        body: [
          "Buying: MLS search, builder registration, and offer strategy on the exact parcel. Selling: comps from 89084 closings, photography, and MLS remarks that match listing rules.",
          "Valuation is a market opinion plus an automated widget — not a lender appraisal. New construction still needs independent contract review of options and lot premiums.",
        ],
      },
      {
        heading: "How to start",
        photo: MEDIA.quickHomeSearch,
        body: [
          "Call 702-222-1964 or book 15 minutes on the calendar at the bottom of this page. Have a zip (89084 or nearby), beds, and buy vs sell ready.",
          "Every public page already shows live office listings through RealScout and Dr. Duffy’s Calendly — you do not need a separate portal login.",
        ],
      },
    ],
    faqs: [
      {
        question: "What real estate services does Dr. Janet Duffy offer in 89084?",
        answer:
          "Buyer and seller representation, new-construction registration, home valuation review, and scheduled tours in Villages at Tule Springs and nearby North Las Vegas. Call 702-222-1964.",
      },
    ],
  },
  {
    slug: "relocating",
    kicker: "Move to 89084",
    h1: "Relocating to Villages at Tule Springs",
    title: "Relocating to North Las Vegas | Villages at Tule Springs | Dr. Janet Duffy",
    description:
      "Relocate to Villages at Tule Springs in North Las Vegas with Dr. Janet Duffy. Builder vs resale, I-215 access, 702-222-1964.",
    directAnswer:
      "Out-of-state buyers relocating to Villages at Tule Springs (North Las Vegas 89084) work with Dr. Janet Duffy on virtual tours, builder registration, and a dated MLS pull. Call 702-222-1964.",
    photo: MEDIA.areasServed,
    pageType: "WebPage",
    service: {
      name: "Relocation buyer representation",
      description: "Remote search, video walkthroughs, and closing coordination for buyers moving to North Las Vegas.",
    },
    sections: [
      {
        heading: "Remote search that still uses MLS",
        photo: MEDIA.quickHomeSearch,
        body: [
          "You get the same live inventory the office widgets use — not a marketing brochure. We send video walkthroughs of occupied homes after the listing agent confirms access.",
          "Nevada closings use a title/escrow company. We coordinate signature packets and wire instructions so you are not guessing from another time zone.",
        ],
      },
      {
        heading: "Climate and construction facts",
        photo: MEDIA.tuleSprings,
        body: [
          "North Las Vegas is high desert. HVAC tonnage, solar leases vs owned systems, and stucco/roof age matter more here than in a wetter market.",
          "Villages at Tule Springs is still building in 2026. Expect construction traffic on unfinished parcels. Walk or video the street at the hour you would actually live there.",
        ],
      },
      {
        heading: "Timing a move to 89084",
        photo: MEDIA.listingExecutive,
        body: [
          "New-construction closings follow the builder’s estimated completion, which can slip. Resale closings follow the purchase contract — often 30 days if the lender is ready.",
          "Register with Dr. Duffy before any builder model visit so representation is on the card. Call 702-222-1964 before you fly in.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I buy in Villages at Tule Springs without living in Nevada yet?",
        answer:
          "Yes. Dr. Janet Duffy coordinates remote showings, builder registration, and escrow. Call 702-222-1964 to start a search before you travel.",
      },
      {
        question: "Should relocating buyers start with new construction or resale?",
        answer:
          "New builds can add unused warranty years and a wait. Resale can close faster if the home is vacant. We run both lists against your move date — no guessed medians.",
      },
    ],
  },
  {
    slug: "investors",
    kicker: "89084 Inventory Review",
    h1: "North Las Vegas Investment Properties",
    title: "Investment Homes | Villages at Tule Springs | Dr. Janet Duffy",
    description:
      "Review North Las Vegas and Villages at Tule Springs inventory with Dr. Janet Duffy. No guessed cap rates. Call 702-222-1964.",
    directAnswer:
      "Dr. Janet Duffy will pull current 89084 comps, HOA dues, and rental restrictions from the CC&Rs. This site does not publish guessed cap rates. Call 702-222-1964.",
    photo: MEDIA.marketOverview,
    pageType: "WebPage",
    service: {
      name: "Investment property advisory",
      description:
        "MLS search and contract review for North Las Vegas investment purchases — no invented yield figures.",
    },
    sections: [
      {
        heading: "What we will not invent",
        photo: MEDIA.homePrices,
        body: [
          "Cap rates, rent comps, and vacancy need a dated pull for the exact floor plan and HOA. A page that publishes a single “North Las Vegas cap rate” is mixing too many products.",
          "You get a written set of solds and actives for the subdivision you name. Insurance, property tax, and HOA are line items — not slogans.",
        ],
      },
      {
        heading: "HOA and rental rules",
        photo: MEDIA.listingTownhome,
        body: [
          "Villages at Tule Springs villages do not share one rental policy. We read the CC&Rs before you waive review.",
          "Townhomes and single-family parcels can differ on leases, parking, and landscape packages. Confirm the parcel map, not the marketing name.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you publish a cap rate for Villages at Tule Springs?",
        answer: "No. Dr. Duffy prepares a dated rent and sale comp set for a specific address. Call 702-222-1964.",
      },
    ],
  },
  {
    slug: "townhomes",
    kicker: "Attached Product",
    h1: "Townhomes in Villages at Tule Springs",
    title: "Townhomes for Sale | Villages at Tule Springs | Dr. Janet Duffy",
    description:
      "Compare townhomes and single-family homes in Villages at Tule Springs with Dr. Janet Duffy. HOA, garage count, and lot. 702-222-1964.",
    directAnswer:
      "Townhomes in Villages at Tule Springs are attached product with shared walls and village-specific HOA rules. Dr. Janet Duffy compares them to single-family parcels in 89084. Call 702-222-1964.",
    photo: MEDIA.listingTownhome,
    pageType: "WebPage",
    service: {
      name: "Townhome buyer representation",
      description: "MLS search and HOA review for attached homes in Villages at Tule Springs.",
    },
    sections: [
      {
        heading: "What changes vs a detached lot",
        photo: MEDIA.interiorGarage,
        body: [
          "Garage count, visitor parking, and yard maintenance often sit in the HOA documents — not the listing photo.",
          "Builders have delivered townhome product in the Tule Springs / Heartland corridor. Confirm whether the listing is inside Villages at Tule Springs or an adjacent builder village.",
        ],
      },
      {
        heading: "How we compare floor plans",
        photo: MEDIA.interiorLiving,
        body: [
          "Same bed count can hide different interior square footage and a different HOA fee. We export both attached and detached actives before you tour.",
          "The office listings widget on every page currently filters single-family homes from $800,000 to $1,000,000. Ask for a townhome-only search at any budget.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are townhomes included in the office listings widget?",
        answer:
          "That module currently filters single-family product in an $800,000–$1,000,000 band. Call 702-222-1964 for a live townhome search.",
      },
    ],
  },
  {
    slug: "single-family-homes",
    kicker: "Detached Product",
    h1: "Single-Family Homes in Villages at Tule Springs",
    title: "Single-Family Homes | Villages at Tule Springs | Dr. Janet Duffy",
    description:
      "Search single-family homes in Villages at Tule Springs, North Las Vegas 89084, with Dr. Janet Duffy. Call 702-222-1964.",
    directAnswer:
      "Most Villages at Tule Springs inventory is detached single-family. This site’s office widget currently shows SFR listings from $800,000 to $1,000,000. Call Dr. Janet Duffy at 702-222-1964 for other prices.",
    photo: MEDIA.listingTwoStory,
    pageType: "WebPage",
    service: {
      name: "Single-family home representation",
      description: "Buyer and seller representation for detached homes in zip 89084.",
    },
    sections: [
      {
        heading: "Lot, elevation, and orientation",
        photo: MEDIA.featuredDesertVista,
        body: [
          "Desert lots vary by width, setback, and whether the yard faces residual construction. We walk those items on the first showing.",
          "Single-story vs two-story changes HVAC load and stair access. That is a floor-plan fact, not a lifestyle slogan.",
        ],
      },
      {
        heading: "Resale vs still-building streets",
        photo: MEDIA.perfectHome,
        body: [
          "Finished streets have landscaping in place. Active phases still have construction traffic. Both can be single-family product inside the same 1,280-acre master plan.",
          "Remaining builder warranty years, if any, belong in the listing remarks and the purchase disclosures.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does the on-site listings widget show single-family homes?",
        answer:
          "Yes. It currently filters SFR listings from $800,000 to $1,000,000. Call 702-222-1964 for a custom price band.",
      },
    ],
  },
];
