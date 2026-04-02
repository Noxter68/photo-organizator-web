import type { Metadata } from "next";
import SEOPage from "@/components/SEOPage";

export const metadata: Metadata = {
  title: "Organiser photos iPhone sur Windows — Photo Organizer",
  description: "Retrouvez l'organisation de vos photos iPhone sur Windows. Photo Organizer reconstruit une structure claire à partir de vos exports Apple.",
  alternates: { canonical: "/organiser-photos-iphone-windows" },
};

export default function Page() {
  return (
    <SEOPage
      locale="fr"
      title="Organiser vos photos iPhone sur Windows"
      subtitle="Quand vos albums Apple se perdent sur PC, Photo Organizer reconstruit une structure claire automatiquement."
      content="Le passage de l'écosystème Apple (iPhone, iPad, Mac) vers Windows entraîne souvent la perte de l'organisation de vos albums photos. Les dossiers deviennent des suites de noms cryptiques, et retrouver un souvenir précis devient un cauchemar. Photo Organizer résout ce problème en analysant les métadonnées EXIF de chaque image pour recréer automatiquement une arborescence par date, lieu et événement. Le traitement est 100% local et prend en charge des milliers d'images en quelques secondes."
      screenshot="/images/result.png"
      screenshotAlt="Photo Organizer — organisation des photos iPhone sur Windows"
    />
  );
}
