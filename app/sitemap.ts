import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://izmanualtherapy.co.uk";
  return [
    "",
    "/about",
    "/services",
    "/contact",
    "/book",
    "/privacy-policy",
    "/terms",
    "/gdpr",
  ].map((path) => ({ url: `${baseUrl}${path}`, changefreq: "weekly", priority: 0.8 }));
}
