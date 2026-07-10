import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What areas do you serve?",
    answer:
      "We specialize in Las Vegas and Henderson, Nevada, including Summerlin, Green Valley, and surrounding communities. Our expertise covers residential, luxury, and investment properties throughout Southern Nevada.",
  },
  {
    question: "How long does the home buying process take?",
    answer:
      "Most buyers close within 30\u201345 days of going under contract, though the timeline varies based on financing, inspections, and any contingencies. We'll walk you through each milestone so there are no surprises.",
  },
  {
    question: "Do you help with home valuations?",
    answer:
      "Yes\u2014we provide free, no-obligation comparative market analyses based on recent comparable sales, current inventory, and neighborhood trends so you know exactly where your home stands.",
  },
  {
    question: "What makes you different from other real estate agents?",
    answer:
      "As a Berkshire Hathaway HomeServices agent, I combine hands-on local market expertise built since 2008 with the backing of a globally trusted brand\u2014giving clients both personalized service and institutional-grade resources.",
  },
  {
    question: "Can you help with investment properties?",
    answer:
      "Absolutely. We work with investors on rental analysis, cap rate comparisons, and portfolio strategy across Las Vegas and Henderson, and can connect you with trusted property management partners.",
  },
  {
    question: "What are your fees?",
    answer:
      "Buyer representation is typically paid by the seller at no direct cost to you. Listing fees are competitive and discussed upfront during a free, no-pressure consultation before you sign anything.",
  },
];

export function FaqSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Get answers to common questions about our real estate services
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="overflow-hidden rounded-lg border border-slate-200 last:border-b"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 hover:bg-slate-50 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="border-t border-slate-200 bg-slate-50 px-6 py-4 text-slate-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
