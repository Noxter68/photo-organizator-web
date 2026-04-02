import type { Metadata } from "next";
import SEOPage from "@/components/SEOPage";

export const metadata: Metadata = {
  title: "Photo Metadata Organizer for Windows — Photo Organizer",
  description: "Organize photos using EXIF metadata on Windows. Automatic sorting by date, location and camera. Lifetime license, one-time payment.",
  alternates: { canonical: "/photo-metadata-organizer" },
};

export default function Page() {
  return (
    <SEOPage
      locale="en"
      title="Photo metadata organizer for Windows"
      subtitle="Harness the power of EXIF metadata to bring order to your photo collection."
      content="Every digital photo carries invisible metadata: the date it was taken, the GPS location, the camera model, and more. Photo Organizer reads this EXIF data and uses it to automatically create a clean, logical folder structure on your Windows PC. Whether you're dealing with thousands of photos from an iPhone export or years of accumulated images, the software handles it quickly and reliably. No cloud upload, no subscription — just a one-time payment for a lifetime license."
      screenshot="/images/home.png"
      screenshotAlt="Photo Organizer — metadata-based photo organization"
    />
  );
}
