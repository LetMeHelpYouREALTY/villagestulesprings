import { MessageCircle } from "lucide-react";

import { HEYBERKSHIRE_CONFIG } from "@/config/heyberkshire-config";

export function StickyContactButton() {
  return (
    <a
      href={HEYBERKSHIRE_CONFIG.phoneHref}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 p-4 text-white shadow-lg transition-all hover:scale-110 hover:bg-blue-700"
      aria-label={`Call ${HEYBERKSHIRE_CONFIG.agentName} at ${HEYBERKSHIRE_CONFIG.phoneDisplay}`}
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
