import type { FaqItem } from "@/lib/schema";

export const HOME_DIRECT_ANSWER =
  "Dr. Janet Duffy (Nevada license S.0197614.LLC) is the REALTOR® for Villages at Tule Springs in North Las Vegas, NV 89084. Call 702-222-1964 to search live MLS inventory or book a 15-minute conversation.";

export const HOME_FAQS: FaqItem[] = [
  {
    question: "Who is the REALTOR® for Villages at Tule Springs on this site?",
    answer:
      "Dr. Janet Duffy, Berkshire Hathaway HomeServices Nevada Properties, license S.0197614.LLC. Client line: 702-222-1964.",
  },
  {
    question: "What is Villages at Tule Springs?",
    answer:
      "A 1,280-acre master-planned community in North Las Vegas, zip 89084, planned for about 8,683 homes, near I-215 and Tule Springs Fossil Beds National Monument.",
  },
  {
    question: "What price range is shown in the office listings widget?",
    answer:
      "The office listings block under the hero is live MLS inventory through RealScout. Ask Dr. Duffy for a custom price or property-type search.",
  },
  {
    question: "How do I schedule a showing?",
    answer: "Use the Calendly calendar on this page or call 702-222-1964.",
  },
];

export const HOME_SERVICE_LINKS = [
  { href: "/buyers", label: "Buy in 89084", blurb: "MLS search and builder registration." },
  { href: "/sellers", label: "Sell in Tule Springs", blurb: "Pricing from recent 89084 comps." },
  { href: "/new-construction", label: "New construction", blurb: "Register before the first model." },
  { href: "/home-valuation", label: "Home valuation", blurb: "Widget plus a licensed review." },
  { href: "/luxury-homes", label: "Upper-tier homes", blurb: "Larger plans and premium lots." },
  { href: "/listings", label: "Live listings", blurb: "Office widget plus custom search." },
] as const;

export const HOME_GUIDE_LINKS = [
  { href: "/nevada-buyer-guide", label: "Nevada buyer guide" },
  { href: "/listing-process", label: "Listing process" },
  { href: "/relocating", label: "Relocating to 89084" },
  { href: "/hoa", label: "HOA documents" },
  { href: "/builders", label: "Builders" },
  { href: "/faq", label: "FAQ" },
] as const;
