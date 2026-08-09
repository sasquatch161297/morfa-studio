import type { MetadataRoute } from "next";
import { collections, products } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://morfa.studio";
  const staticRoutes = ["", "/collections", "/objects", "/journal", "/studio", "/contact", "/editions"];
  return [...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "monthly" as const : "yearly" as const, priority: route === "" ? 1 : .7 })), ...collections.map(({ slug }) => ({ url: `${base}/collections/${slug}`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: .8 })), ...products.map(({ slug }) => ({ url: `${base}/objects/${slug}`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: .8 }))];
}
