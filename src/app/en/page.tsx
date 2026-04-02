import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import LandingPage from "@/components/LandingPage";

const t = getDictionary("en");

export const metadata: Metadata = {
  title: t.meta.title,
  description: t.meta.description,
  alternates: {
    canonical: "/en",
    languages: { en: "/en", fr: "/fr" },
  },
  openGraph: {
    title: t.meta.title,
    description: t.meta.description,
    locale: "en_US",
    alternateLocale: "fr_FR",
    images: [{ url: "/images/home.png", width: 1200, height: 750, alt: "Photo Organizer" }],
  },
};

export default function EnPage() {
  return <LandingPage locale="en" />;
}
