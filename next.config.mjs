/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],
  },
  async headers() {
    // RealScout: script loads from em.realscout.com; API calls go to www.realscout.com.
    // Calendly: widget.js from assets.calendly.com; iframe + API on calendly.com.
    // Cloudinary: images from res.cloudinary.com.
    // Google Maps: embeds from maps.google.com / www.google.com.
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://maps.googleapis.com https://assets.calendly.com https://calendly.com",
      "connect-src 'self' https://em.realscout.com https://www.realscout.com https://res.cloudinary.com https://api.cloudinary.com https://maps.googleapis.com https://calendly.com https://api.calendly.com https://assets.calendly.com",
      "img-src 'self' data: blob: https: https://res.cloudinary.com https://maps.gstatic.com https://maps.googleapis.com https://*.googleusercontent.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "frame-src 'self' https://www.google.com https://maps.google.com https://www.google.com/maps/ https://calendly.com https://assets.calendly.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://calendly.com",
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: csp,
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/default",
        permanent: false,
      },
      // Do not redirect www ↔ apex here. Vercel Domains already 307s
      // villagestulesprings.com → www.villagestulesprings.com. A Next.js
      // www → apex 308 against that 307 is ERR_TOO_MANY_REDIRECTS.
    ];
  },
};

export default nextConfig;
