import type { ReactNode } from "react";

import type { Metadata } from "next";

import { noindexMetadata } from "@/config/metadata-config";

export const metadata: Metadata = noindexMetadata;

export default function AuthLayout({ children }: { children: ReactNode }) {
  return children;
}
