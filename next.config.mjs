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
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://maps.googleapis.com https://api.mapbox.com https://assets.calendly.com https://calendly.com",
      "connect-src 'self' https://em.realscout.com https://www.realscout.com https://res.cloudinary.com https://api.cloudinary.com https://maps.googleapis.com https://api.mapbox.com https://events.mapbox.com https://calendly.com https://api.calendly.com https://assets.calendly.com",
      "img-src 'self' data: blob: https: https://res.cloudinary.com https://maps.gstatic.com https://maps.googleapis.com https://*.googleusercontent.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com https://em.realscout.com https://www.realscout.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "frame-src 'self' https://www.google.com https://maps.google.com https://www.google.com/maps/ https://calendly.com https://assets.calendly.com https://www.youtube.com https://www.youtube-nocookie.com https://www.realscout.com https://em.realscout.com",
      "worker-src 'self' blob: https://em.realscout.com https://www.realscout.com",
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
      {
        source: "/listings",
        destination: "/heartland-cottages",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.villagestulesprings.com" }],
        destination: "https://villagestulesprings.com/",
        permanent: true,
      },
      {
        // Keep /sitemap.xml and /robots.txt on the requested host so GSC
        // URL-prefix properties (www vs apex) only see same-host <loc> URLs.
        source: "/:path((?!sitemap\\.xml|robots\\.txt).*)",
        has: [{ type: "host", value: "www.villagestulesprings.com" }],
        destination: "https://villagestulesprings.com/:path",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
