import { BUSINESS } from "@/config/business";

export function NapBar() {
  return (
    <div className="border-b border-gold-300/20 bg-navy-800">
      <p className="container mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2 text-center font-sans text-xs text-cream-300">
        <span>{BUSINESS.legalName}</span>
        <span aria-hidden="true">·</span>
        <span>{BUSINESS.addressLine}</span>
        <span aria-hidden="true">·</span>
        <a href={`tel:${BUSINESS.telephoneE164}`} className="text-gold-300 hover:underline">
          {BUSINESS.telephoneDisplay}
        </a>
        <span aria-hidden="true">·</span>
        <span>NV {BUSINESS.license}</span>
      </p>
    </div>
  );
}
