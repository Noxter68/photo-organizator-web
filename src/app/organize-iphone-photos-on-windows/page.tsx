import type { Metadata } from "next";
import SEOPage from "@/components/SEOPage";

export const metadata: Metadata = {
  title: "Organize iPhone Photos on Windows — Photo Organizer",
  description: "Recover the organization of your iPhone photos on Windows. Photo Organizer rebuilds a clean structure from your Apple exports.",
  alternates: { canonical: "/organize-iphone-photos-on-windows" },
};

export default function Page() {
  return (
    <SEOPage
      locale="en"
      title="Organize your iPhone photos on Windows"
      subtitle="When your Apple albums get lost on PC, Photo Organizer rebuilds a clean structure automatically."
      content="Moving from the Apple ecosystem (iPhone, iPad, Mac) to Windows often means losing your photo album organization. Folders become cryptic name sequences, and finding a specific memory becomes a nightmare. Photo Organizer solves this by analyzing the EXIF metadata of each image to automatically recreate a folder structure by date, location and event. Processing is 100% local and handles thousands of images in seconds."
      screenshot="/images/result.png"
      screenshotAlt="Photo Organizer — iPhone photos organization on Windows"
    />
  );
}
