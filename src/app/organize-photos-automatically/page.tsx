import type { Metadata } from "next";
import SEOPage from "@/components/SEOPage";

export const metadata: Metadata = {
  title: "Organize Photos Automatically — Photo Organizer",
  description: "Automatically organize your photos on Windows using EXIF metadata. Sort by date, location and event in just a few clicks.",
  alternates: { canonical: "/organize-photos-automatically" },
};

export default function Page() {
  return (
    <SEOPage
      locale="en"
      title="Organize your photos automatically on Windows"
      subtitle="No more manual sorting. Photo Organizer classifies your images in seconds using EXIF metadata."
      content="Got thousands of unsorted photos on your computer? Photo Organizer automatically analyzes the metadata of each image (date, location, device) and creates a clean, usable folder structure. No more spending hours sorting manually: select your folders, launch the process, and get a perfectly organized photo library. The software runs entirely locally — no photos are sent online. Compatible with iPhone, iPad and Mac exports to Windows."
      screenshot="/images/manager.png"
      screenshotAlt="Photo Organizer — automatic photo organization"
    />
  );
}
