export type CopyBlock = {
  title: string;
  body: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const SELLER_SERVICES: readonly CopyBlock[] = [
  {
    title: "Price to the 89084 comps",
    body: "As of September 2026, 89084 lists at a $459,999 median with 68 days on market. She prices against those 322 actives, not a valley average.",
  },
  {
    title: "SID, LID, and HOA in the listing",
    body: "Heartland Cottages models show no SID or LID and $111 monthly HOA. She confirms assessments before the first photo goes live.",
  },
  {
    title: "MLS and RealScout reach",
    body: "Your home lists on the Greater Las Vegas MLS and in Dr. Duffy's office feed. Buyers searching Villages at Tule Springs see it first.",
  },
  {
    title: "Model-home context",
    body: "Standing Heartland plans are $446,990 and $465,990. She uses those numbers when your lot sits in the same master plan.",
  },
  {
    title: "Photography and showing desk",
    body: "She sets the photo date, showing window, and offer review. One phone for sellers in North Las Vegas 89084: 702-222-1964.",
  },
  {
    title: "Close on the calendar you need",
    body: "October builder closings sit next to resale escrow. She lines your list date against that buyer traffic.",
  },
] as const;

export const SELLER_FAQS: readonly FaqItem[] = [
  {
    question: "What is my 89084 home worth?",
    answer:
      "Start with the complimentary valuation, then walk September 2026 comps: $459,999 median list, $238 per sq ft, 68 days on market. Call 702-222-1964.",
  },
  {
    question: "Do you list homes inside The Villages at Tule Springs?",
    answer:
      "Yes. Dr. Jan Duffy lists resale homes in The Villages at Tule Springs and nearby North Las Vegas 89084, including next to gated Heartland Cottages.",
  },
  {
    question: "How do SID and HOA affect my list price?",
    answer:
      "Buyers ask on day one. Heartland Cottages currently reports no SID or LID and $111 HOA. She discloses your assessments in the listing remarks.",
  },
  {
    question: "Should I wait because new construction is still delivering?",
    answer:
      "Builder inventory and resale compete in the same zip. She lines your list price against the 1,700 and 1,865 sq ft Heartland models before you go live.",
  },
] as const;

export const PRIVATE_CLIENT_SERVICES: readonly CopyBlock[] = [
  {
    title: "One desk for buy and sell",
    body: "List the 89084 home and write the Heartland contract on the same call. No second introduction.",
  },
  {
    title: "Appointment-only model tours",
    body: "Walk 7401 and 7343 Balenger Bay Ave with her, not the builder's rotation. Call 702-222-1964.",
  },
  {
    title: "Remote video first",
    body: "Out-of-area clients start with the 1,700 and 1,865 sq ft YouTube tours, then fly for a single focused day.",
  },
  {
    title: "Quiet search",
    body: "She runs RealScout and MLS for Villages at Tule Springs without posting your criteria on social feeds.",
  },
  {
    title: "Builder contract review",
    body: "D.R. Horton writes for the builder. She reads lot premiums, incentives, and closing dates for you.",
  },
  {
    title: "Single number",
    body: "702-222-1964 is the client line. Fifteen minutes on Calendly if you would rather book than call.",
  },
] as const;

export const PRIVATE_CLIENT_FAQS: readonly FaqItem[] = [
  {
    question: "What does private-client representation include?",
    answer:
      "Coordinated buy and sell in 89084, Heartland Cottages model tours by appointment, and a confidential RealScout search. Call 702-222-1964.",
  },
  {
    question: "Do you offer off-market inventory?",
    answer:
      "She searches live MLS and her office listings. She will not invent pocket listings. If a coming-soon exists, you hear it on a consult.",
  },
  {
    question: "Can I tour before I fly to Las Vegas?",
    answer:
      "Yes. The 1865 and 1700 plans have video tours. She then schedules a same-day walk of both cul-de-sac lots.",
  },
] as const;

export const NEW_CONSTRUCTION_SERVICES: readonly CopyBlock[] = [
  {
    title: "You, not the builder",
    body: "The D.R. Horton sales office at 358 Tiffany Springs Ave represents the builder. Dr. Duffy represents you.",
  },
  {
    title: "Standing Heartland models",
    body: "1,865 sq ft with den at $465,990. 1,700 sq ft at $446,990. Both gated, no SID or LID, $111 HOA.",
  },
  {
    title: "Incentive math",
    body: "DHI Mortgage quotes 4.99% 30-year and 3.875% ARM options for October closings, plus up to $5,000 toward closing costs, as of September 2026.",
  },
  {
    title: "Master-plan map",
    body: "The Villages at Tule Springs covers 1,280 acres and up to 8,683 homes. She compares villages, not only two lots.",
  },
  {
    title: "Broker co-op",
    body: "Heartland Cottages posts a 3% broker co-op. Hiring her does not raise the price to you.",
  },
  {
    title: "Title and assessments",
    body: "She confirms no SID or LID in the file and reads HOA documents before you sign.",
  },
] as const;

export const NEW_CONSTRUCTION_FAQS: readonly FaqItem[] = [
  {
    question: "Can I use my own agent on a D.R. Horton home?",
    answer:
      "Yes. Register Dr. Jan Duffy before your first sales-office visit so the 3% co-op and your representation stay intact. Call 702-222-1964.",
  },
  {
    question: "Where is the Heartland Cottages sales office?",
    answer:
      "358 Tiffany Springs Ave, North Las Vegas, NV 89084. Tour the models with Dr. Duffy, not only the builder desk.",
  },
  {
    question: "What rates are quoted right now?",
    answer:
      "As of September 2026, DHI Mortgage quotes 4.99% 30-year fixed and 3.875% 5-year or 7-year ARM options for October closings. Terms require qualifying and can change.",
  },
] as const;

export const LISTINGS_FAQS: readonly FaqItem[] = [
  {
    question: "Where do these residences come from?",
    answer:
      "Live Greater Las Vegas MLS inventory through Dr. Jan Duffy's RealScout office feed, plus permanent Heartland Cottages model-home pages.",
  },
  {
    question: "Can I filter by price or plan?",
    answer:
      "Use the search on this page for 89084 resale. Open the 1,700 and 1,865 sq ft model pages for gated new construction.",
  },
  {
    question: "How do I tour a home?",
    answer:
      "Call 702-222-1964 or book 15 minutes. She schedules Heartland models and resale showings on the same day when lots line up.",
  },
] as const;

export const COMMUNITIES_FAQS: readonly FaqItem[] = [
  {
    question: "What is The Villages at Tule Springs?",
    answer:
      "A 1,280-acre North Las Vegas master plan planned for up to 8,683 homes in zip 89084, next to Tule Springs Fossil Beds National Monument.",
  },
  {
    question: "Where is Heartland Cottages?",
    answer:
      "A gated D.R. Horton village inside The Villages at Tule Springs. Sales office: 358 Tiffany Springs Ave, North Las Vegas, NV 89084.",
  },
  {
    question: "What retail is coming nearby?",
    answer:
      "Smith's Marketplace is planned at 900 W. Tule Springs Parkway, 122,000 sq ft at Revere and the North 215, targeted for 2027.",
  },
] as const;

export const VALUATION_FAQS: readonly FaqItem[] = [
  {
    question: "Is the home valuation free?",
    answer:
      "Yes. Instant RealScout value plus a 15-minute consult with Dr. Jan Duffy. Call 702-222-1964 if you would rather talk first.",
  },
  {
    question: "What numbers does she use?",
    answer:
      "September 2026 89084 snapshot: $459,999 median list, $238 per sq ft, 322 actives, 68 days on market, plus your property's comps.",
  },
] as const;

export const HOME_FAQS: readonly FaqItem[] = [
  {
    question: "What areas does Dr. Jan Duffy cover on this site?",
    answer:
      "The Villages at Tule Springs and gated Heartland Cottages in North Las Vegas 89084, including new construction and resale homes in the master plan.",
  },
  {
    question: "Why use a buyer's agent for new construction?",
    answer:
      "The builder's sales team represents the builder. A licensed buyer's agent represents you on price, upgrades, timelines, and contract terms before you sign.",
  },
  {
    question: "How do I tour Heartland Cottages model homes?",
    answer:
      "Call 702-222-1964 or book a 15-minute consult on this site. Dr. Jan Duffy can walk the standing 1,700 and 1,865 sq ft models with you.",
  },
  {
    question: "Where is The Villages at Tule Springs?",
    answer:
      "The community sits in North Las Vegas, Nevada 89084, north of the 215 Beltway near Aliante. Use the map on this page for directions.",
  },
] as const;

export const CONTACT_FAQS: readonly FaqItem[] = [
  {
    question: "What are the office hours?",
    answer:
      "Monday through Friday 9:00 AM to 6:00 PM. Saturday 10:00 AM to 5:00 PM. Sunday by appointment. Call 702-222-1964.",
  },
  {
    question: "Where are you located?",
    answer: "Villages at Tule Springs, North Las Vegas, NV 89084. Email DrDuffySells@VillagesTuleSprings.com.",
  },
  {
    question: "Do I need to fill out a form?",
    answer: "No. Book 15 minutes on Calendly or call 702-222-1964. That is the client line.",
  },
] as const;
