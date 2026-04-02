import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import LandingPage from "@/components/LandingPage";

const t = getDictionary("fr");

export const metadata: Metadata = {
  title: t.meta.title,
  description: t.meta.description,
  alternates: {
    canonical: "/fr",
    languages: { en: "/en", fr: "/fr" },
  },
  openGraph: {
    title: t.meta.title,
    description: t.meta.description,
    locale: "fr_FR",
    alternateLocale: "en_US",
    images: [{ url: "/images/home.png", width: 1200, height: 750, alt: "Photo Organizer" }],
  },
};

export default function FrPage() {
  return <LandingPage locale="fr" />;
}
