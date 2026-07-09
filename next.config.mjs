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
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com",
      "connect-src 'self' https://www.realscout.com https://em.realscout.com",
      "img-src 'self' data: https:",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data: https:",
      "frame-src 'self' https://www.realscout.com https://em.realscout.com",
    ].join("; ");

    return [
      {
        source: "/(.*)",
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
    ];
  },
};

export default nextConfig;
