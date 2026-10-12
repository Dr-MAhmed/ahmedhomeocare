import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static-first so the initial website can be hosted on a free static host.
  // Add server features only when a real need (e.g. secure admin/auth) is defined.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
