import type { ReactNode } from "react";

import { Playfair_Display } from "next/font/google";

import "@/styles/luxury.css";

import { SiteFooter } from "@/components/luxury/site-footer";
import { SiteHeader } from "@/components/luxury/site-header";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export default function ExternalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`luxury-site ${playfair.variable} font-sans`}>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
