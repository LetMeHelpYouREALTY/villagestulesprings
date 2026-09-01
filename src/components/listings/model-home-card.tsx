import Link from "next/link";

import { Bath, Bed, MapPin, Ruler } from "lucide-react";

import { SiteImage } from "@/components/site-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  bedroomLabel,
  formatSqFt,
  formatUsd,
  listingStreetAddress,
  planPath,
  type HeartlandPlan,
} from "@/data/heartland-cottages";

type ModelHomeCardProps = {
  plan: HeartlandPlan;
};

export function ModelHomeCard({ plan }: ModelHomeCardProps) {
  const home = plan.inventory;

  return (
    <Card className="overflow-hidden rounded-lg border border-navy-200/20 bg-cream-50 shadow-none transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-100">
        <SiteImage asset={plan.image} fill sizes="(max-width: 768px) 100vw, 50vw" />
        <Badge className="absolute right-3 top-3 rounded-md border-0 bg-gold-400 font-sans text-xs uppercase tracking-widest text-navy-800 hover:bg-gold-400">
          Model Home
        </Badge>
      </div>
      <CardContent className="space-y-4 p-6">
        <div>
          <p className="font-serif text-2xl text-navy-800">{formatUsd(home.price)}</p>
          <h3 className="mt-1 font-serif text-lg text-navy-700">
            {plan.planLabel} · Lot {home.lotNumber}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 font-sans text-sm text-navy-400">
            <MapPin className="h-3.5 w-3.5 text-gold-500" />
            {listingStreetAddress(home)}, {home.city}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 border-t border-gold-200/40 pt-4 font-sans text-sm text-navy-500">
          <span className="flex items-center gap-1.5">
            <Bed className="h-4 w-4 text-gold-500" />
            {bedroomLabel(plan)}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-gold-500" />
            {plan.bathrooms} baths
          </span>
          <span className="flex items-center gap-1.5">
            <Ruler className="h-4 w-4 text-gold-500" />
            {formatSqFt(plan.squareFeet)}
          </span>
        </div>
        <p className="font-sans text-xs text-navy-400">
          MLS {home.mlsNumber} · {home.closingWindow}
          {home.isCulDeSac ? " · Cul-de-sac lot" : ""}
        </p>
        <Button
          asChild
          variant="outline"
          className="w-full rounded-lg border-navy-200/40 font-sans uppercase tracking-widest text-navy-700 hover:border-gold-400 hover:bg-gold-50 hover:text-navy-800"
        >
          <Link href={planPath(plan.slug)}>View {plan.planLabel} model</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
