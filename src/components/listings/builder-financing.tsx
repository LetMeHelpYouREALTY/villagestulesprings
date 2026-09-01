import { SITE_NAP } from "@/config/site-nap";
import { HEARTLAND_FINANCING, formatUsd } from "@/data/heartland-cottages";

export function BuilderFinancing() {
  return (
    <section className="bg-navy-800 py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <p className="text-center font-sans text-xs uppercase tracking-[0.2em] text-gold-300">
          Special financing as of {HEARTLAND_FINANCING.asOf}
        </p>
        <h2 className="mt-3 text-center font-serif text-4xl text-cream-100">DHI Mortgage October closing terms</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center font-sans text-cream-300">
          Builder financing through {HEARTLAND_FINANCING.lender}. Based on qualifying. Subject to change.
        </p>
        <ul className="mt-10 space-y-4">
          {HEARTLAND_FINANCING.options.map((option) => (
            <li
              key={`${option.rate}-${option.term}`}
              className="flex flex-col gap-1 rounded-lg border border-gold-300/20 bg-navy-700/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="font-serif text-3xl text-gold-300">{option.rate}</span>
              <span className="font-sans text-cream-100">
                {option.term} · {option.closing}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-8 grid gap-4 font-sans text-sm text-cream-200 md:grid-cols-2">
          <p>
            Up to {formatUsd(HEARTLAND_FINANCING.closingCostIncentive)} closing-cost incentive using{" "}
            {HEARTLAND_FINANCING.lender}.
          </p>
          <p>{HEARTLAND_FINANCING.brokerCoopPercent}% broker co-op for cooperating brokers.</p>
        </div>
        <p className="mt-6 font-sans text-xs leading-relaxed text-cream-300/80">
          {HEARTLAND_FINANCING.notes.join(" ")} Call {SITE_NAP.agentName} at {SITE_NAP.phoneDisplay} to walk the
          numbers.
        </p>
      </div>
    </section>
  );
}
