import type { Metadata } from "next";
import SEOPage from "@/components/SEOPage";

export const metadata: Metadata = {
  title: "Organiser ses photos automatiquement — Photo Organizer",
  description: "Découvrez comment organiser automatiquement vos photos sur Windows grâce aux métadonnées EXIF. Tri par date, lieu et événement en quelques clics.",
  alternates: { canonical: "/organiser-photos-automatiquement" },
};

export default function Page() {
  return (
    <SEOPage
      locale="fr"
      title="Organiser ses photos automatiquement sur Windows"
      subtitle="Fini le tri manuel. Photo Organizer classe vos images en quelques secondes grâce aux métadonnées EXIF."
      content="Vous avez des milliers de photos en vrac sur votre ordinateur ? Photo Organizer analyse automatiquement les métadonnées de chaque image (date, lieu, appareil) et crée une arborescence de dossiers claire et exploitable. Plus besoin de passer des heures à trier manuellement : sélectionnez vos dossiers, lancez le traitement, et récupérez une photothèque parfaitement organisée. Le logiciel fonctionne entièrement en local — aucune photo n'est envoyée en ligne. Compatible avec les exports iPhone, iPad et Mac vers Windows."
      screenshot="/images/manager.png"
      screenshotAlt="Photo Organizer — organisation automatique des photos"
    />
  );
}
