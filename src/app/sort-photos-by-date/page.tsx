import type { Metadata } from "next";
import SEOPage from "@/components/SEOPage";

export const metadata: Metadata = {
  title: "Sort Photos by Date Automatically — Photo Organizer",
  description: "Automatically sort your photos by date using EXIF metadata. Create folders by year, month and day in one click.",
  alternates: { canonical: "/sort-photos-by-date" },
};

export default function Page() {
  return (
    <SEOPage
      locale="en"
      title="Sort your photos by date automatically"
      subtitle="Create a folder structure by year, month and day in seconds, effortlessly."
      content="Photo Organizer reads the capture date stored in each photo's EXIF metadata and automatically creates a chronological folder structure. Year, month, day — you can instantly find any memory. The software handles the most common formats (JPEG, PNG, HEIC, RAW) and processes thousands of images quickly. Everything happens locally on your computer, with no data sent online."
      screenshot="/images/scan.png"
      screenshotAlt="Photo Organizer — sort photos by date"
    />
  );
}
