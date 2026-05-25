/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },

  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },

  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },

  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },

  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },

  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },

  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';

      script-src 'self' 'unsafe-inline'
        https://www.googletagmanager.com
        https://www.google-analytics.com
        https://www.clarity.ms
        https://track.nopaperforms.com;

      style-src 'self' 'unsafe-inline' https:;

      img-src 'self' data: blob: https:;

      media-src 'self' blob: https:;

      connect-src 'self' https:;

      font-src 'self' data: https:;

      frame-src 'self' https:;
    `
      .replace(/\n/g, "")
      .trim(),
  },
];

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "ozuzizemngdbzejrptqh.supabase.co",
      },

      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
