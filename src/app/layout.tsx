import { ReactNode } from "react";

import type { Metadata } from "next";
import { Inter, Jost, Playfair_Display } from "next/font/google";

import { RealScoutScript } from "@/components/realscout-script";
import { Toaster } from "@/components/ui/sonner";
import { homePageMetadata } from "@/config/metadata-config";
import { getPreference } from "@/server/server-actions";
import { PreferencesStoreProvider } from "@/stores/preferences/preferences-provider";
import { THEME_MODE_VALUES, THEME_PRESET_VALUES, type ThemePreset, type ThemeMode } from "@/types/preferences/theme";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const luxurySerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-luxury-serif",
  display: "swap",
});
const luxurySans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-luxury-sans",
  display: "swap",
});

// Use the centralized metadata configuration
export const metadata: Metadata = homePageMetadata;

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const themeMode = await getPreference<ThemeMode>("theme_mode", THEME_MODE_VALUES, "light");
  const themePreset = await getPreference<ThemePreset>("theme_preset", THEME_PRESET_VALUES, "default");

  return (
    <html
      lang="en"
      className={themeMode === "dark" ? "dark" : ""}
      data-theme-preset={themePreset}
      suppressHydrationWarning
    >
      <body className={`${inter.className} ${luxurySerif.variable} ${luxurySans.variable} min-h-screen antialiased`}>
        <RealScoutScript />
        <PreferencesStoreProvider themeMode={themeMode} themePreset={themePreset}>
          {children}
          <Toaster />
        </PreferencesStoreProvider>
      </body>
    </html>
  );
}
