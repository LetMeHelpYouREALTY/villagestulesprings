import type { MarketingPageContent } from "@/content/marketing-types";
import { MEDIA } from "@/lib/media-catalog";

export const CORE_MARKETING_PAGES_A: MarketingPageContent[] = [
  {
    slug: "buyers",
    kicker: "North Las Vegas Buyers",
    h1: "Buy a Home in Villages at Tule Springs",
    title: "Buy Homes in Villages at Tule Springs | Dr. Janet Duffy",
    description:
      "Work with Dr. Janet Duffy to buy a home in Villages at Tule Springs and North Las Vegas. New construction and resale search, 702-222-1964.",
    directAnswer:
      "Dr. Janet Duffy (Nevada license S.0197614.LLC) represents buyers in Villages at Tule Springs, zip 89084. Call 702-222-1964 or book a 15-minute conversation to start a live MLS search.",
    photo: MEDIA.perfectHome,
    pageType: "WebPage",
    service: {
      name: "Home buyer representation",
      description: "MLS search, new-construction negotiation, and closing coordination in North Las Vegas.",
    },
    sections: [
      {
        heading: "How buyer representation works",
        photo: MEDIA.experienceExpertise,
        body: [
          "You get a licensed Nevada REALTOR® who searches current MLS inventory, builder releases, and off-market leads in Villages at Tule Springs and nearby North Las Vegas villages.",
          "We compare lot position, elevation, HOA dues, and remaining builder warranty — not slogans. Offers include inspection windows and rate-lock timing that match 2026 lending conditions.",
        ],
      },
      {
        heading: "New construction vs resale",
        photo: MEDIA.listingTwoStory,
        body: [
          "Villages at Tule Springs is a 1,280-acre master plan with more than 8,600 homes planned. National builders have delivered phases since about 2017; D.R. Horton remains active in 2026.",
          "Resale homes skip the construction wait. New builds can still offer unused warranty years. We walk both paths with the same contract review.",
        ],
      },
      {
        heading: "Commute and location facts",
        photo: MEDIA.tuleSprings,
        body: [
          "The community sits in North Las Vegas near the I-215 Beltway and the Tule Springs Fossil Beds National Monument. Centennial Hills retail is a short drive south; Aliante is east along the beltway.",
          "Confirm drive times for your actual workplace. We map I-215, US-95, and Beltway exits from the exact parcel — not a generic valley average.",
        ],
      },
    ],
    faqs: [
      {
        question: "Who should I call to buy in Villages at Tule Springs?",
        answer:
          "Call Dr. Janet Duffy at 702-222-1964. She is a licensed Nevada REALTOR® (S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties.",
      },
      {
        question: "Do I need a buyer agent for a builder home?",
        answer:
          "Yes. Register with Dr. Duffy before your first builder visit so representation is on the registration card. Builder contracts still need independent review of options, lot premiums, and closing credits.",
      },
      {
        question: "What price range is shown on this site?",
        answer:
          "The office listings widget on every page currently filters single-family homes listed from $800,000 to $1,000,000. Ask Dr. Duffy for a search at any other budget.",
      },
    ],
  },
  {
    slug: "sellers",
    kicker: "North Las Vegas Sellers",
    h1: "Sell Your Home in Villages at Tule Springs",
    title: "Sell a Home in Villages at Tule Springs | Dr. Janet Duffy",
    description:
      "List with Dr. Janet Duffy in Villages at Tule Springs and North Las Vegas. Pricing from recent comps, 702-222-1964.",
    directAnswer:
      "Sellers in zip 89084 work with Dr. Janet Duffy on pricing from recent closed comps, not a generic valley average. Call 702-222-1964 for a listing consult.",
    photo: MEDIA.homeValuation,
    pageType: "WebPage",
    service: {
      name: "Home seller representation",
      description: "Listing strategy, pricing, and marketing for Villages at Tule Springs and North Las Vegas.",
    },
    sections: [
      {
        heading: "Pricing from closed comps",
        photo: MEDIA.homePrices,
        body: [
          "We pull GLVAR closed sales on comparable square footage, lot size, and elevation in Villages at Tule Springs parcels — not a metro median.",
          "List price, credits, and days-on-market targets change with rate moves. You get a written range before photography is booked.",
        ],
      },
      {
        heading: "What buyers in 89084 inspect",
        photo: MEDIA.interiorKitchen,
        body: [
          "HVAC tonnage, solar leases vs owned systems, and HOA documents show up on every well-prepared listing in this master plan.",
          "We order disclosures early so inspection requests do not stall the first weekend of showings.",
        ],
      },
      {
        heading: "Marketing that matches MLS rules",
        photo: MEDIA.featuredListings,
        body: [
          "Professional photos, accurate public remarks, and syndication through MLS — plus the RealScout widgets already on this site.",
          "Dr. Duffy’s office listings module sits below the hero on every public page so active inventory stays visible to search traffic.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I get a list price for my Tule Springs home?",
        answer:
          "Call 702-222-1964. Dr. Duffy prepares a comparative market analysis from recent 89084 closed sales. Online estimates are a starting point, not the list price.",
      },
      {
        question: "Can you list a home that is still under a builder warranty?",
        answer:
          "Yes. Remaining warranty years are disclosed in the listing remarks. Buyers still complete a standard inspection.",
      },
    ],
  },
  {
    slug: "home-valuation",
    kicker: "Complimentary Analysis",
    h1: "Home Valuation in Villages at Tule Springs",
    title: "Free Home Valuation | Villages at Tule Springs | Dr. Janet Duffy",
    description:
      "Get a Villages at Tule Springs home valuation from Dr. Janet Duffy. Instant estimate plus a 15-minute review. Call 702-222-1964.",
    directAnswer:
      "Use the valuation widget on this page for an automated range, then book 15 minutes with Dr. Janet Duffy at 702-222-1964 to review actual 89084 comps.",
    photo: MEDIA.homeValuation,
    pageType: "WebPage",
    service: {
      name: "Home valuation",
      description: "Automated estimate plus a licensed review of North Las Vegas comparable sales.",
    },
    sections: [
      {
        heading: "What the number includes",
        photo: MEDIA.marketOverview,
        body: [
          "The on-page widget is an automated estimate. Dr. Duffy then checks living area, lot, upgrades, and the most recent closed sales in Villages at Tule Springs.",
          "Refinancing, listing, and insurance questions use different value definitions. Say which decision you are making so the range is useful.",
        ],
      },
      {
        heading: "When a full CMA is better",
        photo: MEDIA.experienceExpertise,
        body: [
          "If you plan to list within 90 days, skip the widget-only path. A comparative market analysis uses sold, pending, and expired listings in 89084.",
          "Call 702-222-1964 or use the calendar at the bottom of this page.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the home valuation free?",
        answer:
          "Yes. The automated tool and a 15-minute conversation with Dr. Janet Duffy are complimentary. Call 702-222-1964.",
      },
      {
        question: "Is an online estimate an appraisal?",
        answer:
          "No. Lenders require a licensed appraisal. This page is a market opinion for sellers and owners, not a loan document.",
      },
    ],
  },
  {
    slug: "contact",
    kicker: "North Las Vegas Office",
    h1: "Contact Dr. Janet Duffy",
    title: "Contact Dr. Janet Duffy | Villages at Tule Springs REALTOR®",
    description:
      "Contact Dr. Janet Duffy at 702-222-1964. Villages at Tule Springs, North Las Vegas, NV 89084. Book a 15-minute conversation.",
    directAnswer:
      "Call Dr. Janet Duffy at 702-222-1964, email DrDuffySells@VillagesTuleSprings.com, or book a 15-minute conversation. Office service area: Villages at Tule Springs, North Las Vegas, NV 89084.",
    photo: MEDIA.aboutHero,
    pageType: "ContactPage",
    sections: [
      {
        heading: "Hours and license",
        photo: MEDIA.professionalApproach,
        body: [
          "Monday–Friday 9:00 AM–6:00 PM. Saturday 10:00 AM–5:00 PM. Sunday by appointment.",
          "Nevada real estate license S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties.",
        ],
      },
      {
        heading: "What to have ready",
        photo: MEDIA.quickHomeSearch,
        body: [
          "Buyers: target zip (89084 or nearby), beds, and whether you want new construction or resale.",
          "Sellers: address, approximate square footage, and your preferred list window.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the phone number for Dr. Janet Duffy?",
        answer: "702-222-1964. That is the client CTA line on every page of villagestulesprings.com.",
      },
      {
        question: "Where is the office?",
        answer:
          "Villages at Tule Springs, North Las Vegas, NV 89084. Appointments are scheduled by phone or Calendly — not walk-in.",
      },
    ],
  },
  {
    slug: "listings",
    kicker: "Live MLS Inventory",
    h1: "Homes for Sale in Villages at Tule Springs",
    title: "Homes for Sale | Villages at Tule Springs | Dr. Janet Duffy",
    description:
      "Browse homes for sale in Villages at Tule Springs with Dr. Janet Duffy. Live office listings $800K–$1M plus MLS search. 702-222-1964.",
    directAnswer:
      "Office listings on this site currently show single-family homes from $800,000 to $1,000,000. Use the search widgets for other prices, or call 702-222-1964.",
    photo: MEDIA.featuredListings,
    pageType: "CollectionPage",
    sections: [
      {
        heading: "How to read the widgets",
        photo: MEDIA.homes800k1m,
        body: [
          "The office listings block below the hero is live MLS data through RealScout. Status and price can change the same day.",
          "Advanced search on the home page covers additional property types. Confirm any address with Dr. Duffy before you visit.",
        ],
      },
      {
        heading: "Showing a listed home",
        photo: MEDIA.interiorLiving,
        body: [
          "Occupied homes need an appointment. Book a 30-minute tour on Calendly or call 702-222-1964.",
          "New-construction models follow builder hours. Register with Dr. Duffy before the first model visit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are these MLS listings current?",
        answer:
          "Widgets pull from RealScout connected to MLS. Always verify status and price with Dr. Janet Duffy at 702-222-1964 before writing an offer.",
      },
    ],
  },
];
