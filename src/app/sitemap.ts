import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";

const BASE_URL = "https://www.rupmilanjewellers.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/catalogue`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const productPages: MetadataRoute.Sitemap = getAllProducts().map((p) => ({
    url: `${BASE_URL}/${p.jewelleryType}/${p.slug}/${p.tagNumber.replace("#", "")}`,
    lastModified: p.dateAdded ? new Date(p.dateAdded) : undefined,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...productPages];
}
