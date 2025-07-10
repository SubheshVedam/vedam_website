/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placehold.co", "https://placehold.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "ozuzizemngdbzejrptqh.supabase.co",
      },
    ],
  },
};
export default nextConfig;
