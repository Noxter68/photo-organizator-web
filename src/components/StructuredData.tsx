import type { Locale } from "@/lib/dictionaries";
import { getDictionary } from "@/lib/dictionaries";

export function ProductSchema({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Photo Organizer",
    operatingSystem: "Windows",
    applicationCategory: "MultimediaApplication",
    description: t.meta.description,
    offers: {
      "@type": "Offer",
      price: "99",
      priceCurrency: locale === "fr" ? "EUR" : "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "120",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Photo Organizer",
    url: "https://photorganizer.org",
    logo: "https://photorganizer.org/images/home.png",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
