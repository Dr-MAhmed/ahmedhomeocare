import type { MetadataRoute } from "next";

// Ensure the robots metadata route is generated at build time for static export.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://ahmedhomeocare.vercel.app/sitemap.xml",
  };
}
