import type { FaqItem } from "@/lib/schema";

type FaqSectionProps = {
  items: FaqItem[];
  heading?: string;
};

/** Visible Q&A for AEO/GEO. Class names match Speakable + FAQ JSON-LD. */
export function FaqSection({ items, heading = "Frequently Asked Questions" }: FaqSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="bg-cream-100 py-16" aria-labelledby="faq-heading">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 id="faq-heading" className="mb-8 font-serif text-3xl text-navy-800">
          {heading}
        </h2>
        <dl className="space-y-6">
          {items.map((item) => (
            <div key={item.question} className="rounded-lg border border-gold-200 bg-cream-50 p-6">
              <dt className="font-serif text-xl text-navy-800">{item.question}</dt>
              <dd className="faq-answer mt-3 font-sans leading-relaxed text-navy-500">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
