export type BuyerService = {
  title: string;
  body: string;
};

export const TULE_SPRINGS_BUYER_SERVICES: readonly BuyerService[] = [
  {
    title: "Independent new-construction representation",
    body: "The D.R. Horton sales office represents the builder. Dr. Jan Duffy represents you on lot, price, incentives, and the purchase contract.",
  },
  {
    title: "Heartland Cottages model tours",
    body: "Walk the standing 1,700 and 1,865 sq ft models. Compare den vs no-den, cul-de-sac lots, and October closing dates.",
  },
  {
    title: "SID, LID, and HOA review",
    body: "Heartland Cottages is listed with no SID or LID and $111 monthly HOA. She confirms assessments in the resale package and title work before you sign.",
  },
  {
    title: "89084 price check",
    body: "Builder list price is not the whole market. She lines Heartland numbers against current 89084 comps before you write an offer.",
  },
  {
    title: "Lender and incentive math",
    body: "DHI Mortgage is quoting October-closing rates and up to $5,000 toward closing costs. She compares that stack to other lenders you may qualify for.",
  },
  {
    title: "Master-plan resale search",
    body: "Need a different village, lot, or close date? She searches the full Villages at Tule Springs map, not only the two current Heartland models.",
  },
] as const;
