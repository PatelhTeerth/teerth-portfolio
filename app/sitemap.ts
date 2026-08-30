import type { MetadataRoute } from "next";
import { projectDetails } from "@/data/projects";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = Object.keys(projectDetails).map((slug) => ({
    url: `${SITE_URL}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
