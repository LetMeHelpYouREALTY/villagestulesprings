import Link from "next/link";

import type { BreadcrumbItem } from "@/lib/schema";

type BreadcrumbNavProps = {
  items: BreadcrumbItem[];
};

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-cream-50">
      <ol className="container mx-auto flex flex-wrap gap-2 px-4 py-3 font-sans text-xs uppercase tracking-widest text-navy-500">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {last ? (
                <span className="text-navy-800">{item.name}</span>
              ) : (
                <Link href={item.path} className="hover:text-gold-600">
                  {item.name}
                </Link>
              )}
              {last ? null : <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
