import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const BASE_URL = "https://photorganizer.org";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Photo Organizer — Organisez automatiquement vos photos sur Windows",
    template: "%s | Photo Organizer",
  },
  description:
    "Triez et rangez automatiquement vos photos iPhone, iPad et Mac sur Windows grâce aux métadonnées. Licence à vie, paiement unique de 99€.",
  keywords: [
    "organiser photos automatiquement",
    "trier photos automatiquement",
    "organiser photos iphone windows",
    "logiciel tri photos",
    "photo organizer windows",
    "organize photos automatically",
    "sort photos by date",
    "organize iphone photos windows",
    "photo metadata organizer",
    "EXIF photo sorter",
  ],
  authors: [{ name: "Photo Organizer" }],
  creator: "Photo Organizer",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    siteName: "Photo Organizer",
    title: "Photo Organizer — Organisez automatiquement vos photos sur Windows",
    description:
      "Triez et rangez automatiquement vos photos iPhone, iPad et Mac sur Windows grâce aux métadonnées. Licence à vie, paiement unique de 99€.",
    url: BASE_URL,
    images: [
      {
        url: "/images/home.png",
        width: 1200,
        height: 750,
        alt: "Photo Organizer — Interface du logiciel de tri automatique de photos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Organizer — Organisez automatiquement vos photos sur Windows",
    description:
      "Triez vos photos iPhone, iPad et Mac sur Windows automatiquement. 99€ à vie.",
    images: ["/images/home.png"],
  },
  alternates: {
    canonical: `${BASE_URL}/fr`,
    languages: {
      fr: `${BASE_URL}/fr`,
      en: `${BASE_URL}/en`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.className} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">{children}</body>
    </html>
  );
}
