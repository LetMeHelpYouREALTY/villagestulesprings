import Link from "next/link";

import { DrJanPortrait } from "@/components/dr-jan-portrait";
import { PublicPageShell } from "@/components/public-page-shell";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <PublicPageShell>
      <main className="flex min-h-[50vh] flex-col items-center justify-center space-y-4 bg-cream-50 px-4 py-24 text-center">
        <DrJanPortrait size="lg" className="ring-2 ring-gold-300" />
        <h1 className="font-serif text-3xl text-navy-800">Page not found</h1>
        <p className="max-w-md font-sans text-navy-500">
          That page is not on villagestulesprings.com. Browse homes below, or call Dr. Jan Duffy at{" "}
          <a href="tel:+17022221964" className="text-gold-600 underline-offset-4 hover:underline">
            702-222-1964
          </a>
          .
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-navy-700 text-cream-100 hover:bg-navy-800">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <a href="#schedule">Schedule a Call</a>
          </Button>
        </div>
      </main>
    </PublicPageShell>
  );
}
