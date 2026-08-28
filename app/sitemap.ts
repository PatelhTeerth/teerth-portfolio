import type { MetadataRoute } from "next";
import { projectDetails } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!baseUrl) {
    return [];
  }

  const projectUrls = Object.keys(projectDetails).map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
