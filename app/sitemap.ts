import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

const staticRoutes = ["", "/about", "/projects", "/blog", "/get-involved", "/donate", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/donate" || route === "/get-involved" ? 0.85 : 0.75,
  })) satisfies MetadataRoute.Sitemap;

  const blogEntries = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: "monthly",
    priority: post.featured ? 0.8 : 0.65,
  })) satisfies MetadataRoute.Sitemap;

  return [...staticEntries, ...blogEntries];
}
