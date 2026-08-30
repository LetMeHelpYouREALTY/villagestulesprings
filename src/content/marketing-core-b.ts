import type { MarketingPageContent } from "@/content/marketing-types";
import { MEDIA } from "@/lib/media-catalog";

export const CORE_MARKETING_PAGES_B: MarketingPageContent[] = [
  {
    slug: "new-construction",
    kicker: "Builder Communities",
    h1: "New Construction in Villages at Tule Springs",
    title: "New Construction Homes | Villages at Tule Springs | Dr. Janet Duffy",
    description:
      "Buy new construction in Villages at Tule Springs with Dr. Janet Duffy. Builder registration, lot premiums, and contract review. 702-222-1964.",
    directAnswer:
      "Villages at Tule Springs is a 1,280-acre North Las Vegas master plan with national builders active since about 2017. Register with Dr. Janet Duffy at 702-222-1964 before touring models.",
    photo: MEDIA.listingExecutive,
    pageType: "WebPage",
    service: {
      name: "New construction buyer representation",
      description: "Builder registration, lot selection, and contract review in Villages at Tule Springs.",
    },
    sections: [
      {
        heading: "Register before the model",
        photo: MEDIA.listingVilla,
        body: [
          "Builder sales offices credit the agent on the first registration card. Touring a model without an agent on file can block representation later.",
          "Dr. Duffy registers you, then walks lot premiums, structural options, and closing-cost credits in the builder addenda.",
        ],
      },
      {
        heading: "What is still being built",
        photo: MEDIA.inventoryLevels,
        body: [
          "Phases continue in 2026. D.R. Horton has been among the most active builders in the broader Tule Springs / Heartland corridor, including townhome product.",
          "Inventory and incentives change weekly. We confirm the current release with the sales office the morning of your appointment.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use my own REALTOR® at a Tule Springs builder?",
        answer:
          "Yes, if you register Dr. Janet Duffy on the first visit. Call 702-222-1964 before you walk into a model home.",
      },
    ],
  },
  {
    slug: "luxury-homes",
    kicker: "Upper-Tier Inventory",
    h1: "Luxury Homes in Villages at Tule Springs",
    title: "Luxury Homes for Sale | Villages at Tule Springs | Dr. Janet Duffy",
    description:
      "Tour luxury and upper-tier homes in Villages at Tule Springs with Dr. Janet Duffy. Larger lots, single-story plans, and live office listings. 702-222-1964.",
    directAnswer:
      "Upper-tier homes in Villages at Tule Springs concentrate on larger floor plans and premium lots. This site’s office widget shows live For Sale listings. Call 702-222-1964.",
    photo: MEDIA.heroDreamHome,
    pageType: "WebPage",
    service: {
      name: "Luxury home advisory",
      description: "Representation for upper-tier listings and purchases in North Las Vegas master plans.",
    },
    sections: [
      {
        heading: "What “luxury” means on this map",
        photo: MEDIA.featuredDesertVista,
        body: [
          "In 89084 it usually means more interior square footage, a larger lot, or a single-story plan — not a gated Summerlin enclave.",
          "We compare casita options, indoor-outdoor rooms, and mountain-view lots using the same MLS data as the rest of the valley.",
        ],
      },
      {
        heading: "Nearby alternatives",
        photo: MEDIA.summerlin,
        body: [
          "If the search expands west, Centennial Hills and Skye Canyon add different product. South toward Summerlin is a separate pricing band.",
          "Dr. Duffy will not guess a median. You get current comps for the exact subdivision you are considering.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you work above $1 million?",
        answer:
          "Yes. Call 702-222-1964 for a custom search at any price. The office widget is not a cap on what Dr. Duffy can show.",
      },
    ],
  },
  {
    slug: "faq",
    kicker: "Direct Answers",
    h1: "Villages at Tule Springs Real Estate FAQ",
    title: "FAQ | Villages at Tule Springs Real Estate | Dr. Janet Duffy",
    description:
      "Answers about buying and selling in Villages at Tule Springs with Dr. Janet Duffy. Phone 702-222-1964. North Las Vegas, NV 89084.",
    directAnswer:
      "Dr. Janet Duffy is the REALTOR® for this site: 702-222-1964, Villages at Tule Springs, North Las Vegas, NV 89084, license S.0197614.LLC.",
    photo: MEDIA.professionalApproach,
    pageType: "WebPage",
    sections: [
      {
        heading: "How this site is meant to be used",
        photo: MEDIA.quickHomeSearch,
        body: [
          "Search widgets are live MLS tools. The calendar is Dr. Duffy’s booking page. The phone number in the header is the client line.",
          "Dashboard and login routes are not public marketing pages and are excluded from the sitemap.",
        ],
      },
    ],
    faqs: [
      {
        question: "Who is the listing agent for this website?",
        answer:
          "Dr. Janet Duffy, REALTOR®, Berkshire Hathaway HomeServices Nevada Properties, Nevada license S.0197614.LLC.",
      },
      {
        question: "What is the service area?",
        answer:
          "Primary: Villages at Tule Springs and North Las Vegas (89084). Also Las Vegas, Henderson, and Summerlin.",
      },
      {
        question: "How do I schedule a tour?",
        answer: "Use the Calendly widget on any page or call 702-222-1964.",
      },
      {
        question: "Is there an MLS disclaimer?",
        answer:
          "Listing data is deemed reliable but not guaranteed. Confirm status, price, and square footage with Dr. Duffy before acting.",
      },
    ],
  },
  {
    slug: "market",
    kicker: "89084 Snapshot",
    h1: "Villages at Tule Springs Market Notes",
    title: "Villages at Tule Springs Market | Dr. Janet Duffy",
    description:
      "How to read the Villages at Tule Springs market with Dr. Janet Duffy. Current listings on this site, no guessed medians. 702-222-1964.",
    directAnswer:
      "This page does not publish a guessed median price. Dr. Janet Duffy pulls live 89084 comps for your address. Call 702-222-1964. For a 2024 valley overview see the market insights article.",
    photo: MEDIA.marketOverview,
    pageType: "WebPage",
    sections: [
      {
        heading: "What we will not invent",
        photo: MEDIA.homePrices,
        body: [
          "Median sale prices, DOM, and inventory counts move weekly. A number without a dated MLS pull is not used on this page.",
          "The office listings widget shows a live For Sale slice from RealScout. Ask Dr. Duffy for a dated pull on a specific subdivision.",
        ],
      },
      {
        heading: "How to get a dated report",
        photo: MEDIA.blogMarket2024,
        body: [
          "Ask for a CMA or buyer-market brief with a pull timestamp. That file is what you take to a lender or relocation department.",
          "The 2024 insights article remains available for context; it is not a substitute for a 2026 comp set.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where is the latest market article?",
        answer:
          "Read Las Vegas Real Estate Market Update: 2024 Trends & Insights on this site, then call 702-222-1964 for a current 89084 pull.",
      },
    ],
  },
];
