import type { MetadataRoute } from "next";
import { SITE_URL, NAV_LINKS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = ["/", ...NAV_LINKS.filter((l) => l.href !== "/").map((l) => l.href)];

  return pages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "daily" : "monthly",
    priority: path === "/" ? 1.0 : 0.7,
  }));
}
