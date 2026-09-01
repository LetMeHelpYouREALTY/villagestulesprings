import { HEARTLAND_FAQS } from "@/data/heartland-cottages";

export function ModelHomeFaq() {
  return (
    <section className="bg-cream-50 py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-10 text-center font-serif text-4xl text-navy-800">Heartland Cottages questions</h2>
        <dl className="space-y-6">
          {HEARTLAND_FAQS.map((item) => (
            <div key={item.question} className="rounded-lg border border-navy-200/20 bg-white p-6">
              <dt className="font-serif text-xl text-navy-800">{item.question}</dt>
              <dd className="mt-3 font-sans text-navy-500">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
