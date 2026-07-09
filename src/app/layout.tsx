import { ReactNode } from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { Toaster } from "@/components/ui/sonner";
import { APP_CONFIG } from "@/config/app-config";
import { homePageMetadata } from "@/config/metadata-config";
import { getPreference } from "@/server/server-actions";
import { PreferencesStoreProvider } from "@/stores/preferences/preferences-provider";
import { THEME_MODE_VALUES, THEME_PRESET_VALUES, type ThemePreset, type ThemeMode } from "@/types/preferences/theme";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} min-h-screen antialiased`}>
        <PreferencesStoreProvider themeMode={themeMode} themePreset={themePreset}>
          {children}
          <Toaster />
        </PreferencesStoreProvider>
        {/* Loaded once globally: RealScout widgets rely on these custom elements
            being defined before use, and the script must not be loaded more than once. */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
