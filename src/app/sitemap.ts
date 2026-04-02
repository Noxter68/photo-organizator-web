import type { MetadataRoute } from "next";

const BASE_URL = "https://photorganizer.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Main pages
    { url: `${BASE_URL}/fr`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/en`, changeFrequency: "weekly", priority: 1.0 },

    // FR SEO pages
    { url: `${BASE_URL}/organiser-photos-automatiquement`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/organiser-photos-iphone-windows`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/trier-photos-par-date`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/reconstruire-albums-iphone-windows`, changeFrequency: "monthly", priority: 0.8 },

    // EN SEO pages
    { url: `${BASE_URL}/organize-photos-automatically`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/organize-iphone-photos-on-windows`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/sort-photos-by-date`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/photo-metadata-organizer`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
