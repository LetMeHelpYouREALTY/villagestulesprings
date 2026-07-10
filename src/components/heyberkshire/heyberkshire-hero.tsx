import { HEYBERKSHIRE_CONFIG } from "@/config/heyberkshire-config";

export function HeyBerkshireHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(96,165,250,0.25), transparent 40%), radial-gradient(circle at 50% 100%, rgba(30,64,175,0.35), transparent 50%)",
        }}
      />
      <svg
        className="absolute inset-x-0 bottom-0 h-1/3 w-full text-slate-950/60"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,224 L120,208 C240,192 480,160 720,176 C960,192 1200,256 1320,272 L1440,288 L1440,320 L0,320 Z"
        />
      </svg>

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-6xl">
          Find Your Dream Home in
          <br />
          <span className="text-blue-400">Las Vegas &amp; Henderson</span>
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
          Expert real estate services with personalized attention. Your trusted partner for buying, selling, and
          investing in Southern Nevada.
        </p>

        <div className="realscout-wrapper mb-4">
          <div>
            <realscout-simple-search agent-encoded-id={HEYBERKSHIRE_CONFIG.realScoutAgentEncodedId} />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/90">
          <div className="flex items-center gap-2">
            <span className="font-semibold">500+</span>
            <span>Properties Sold</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Since 2008</span>
            <span>Serving Las Vegas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">4.9★</span>
            <span>Average Rating</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 transform animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-2">
          <div className="h-3 w-1 rounded-full bg-white/50" />
        </div>
      </div>
    </div>
  );
}
