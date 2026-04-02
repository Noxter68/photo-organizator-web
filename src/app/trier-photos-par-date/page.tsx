import type { Metadata } from "next";
import SEOPage from "@/components/SEOPage";

export const metadata: Metadata = {
  title: "Trier ses photos par date automatiquement — Photo Organizer",
  description: "Triez automatiquement vos photos par date grâce aux métadonnées EXIF. Créez des dossiers par année, mois et jour en un clic.",
  alternates: { canonical: "/trier-photos-par-date" },
};

export default function Page() {
  return (
    <SEOPage
      locale="fr"
      title="Trier vos photos par date automatiquement"
      subtitle="Créez une arborescence par année, mois et jour en quelques secondes, sans effort."
      content="Photo Organizer lit la date de prise de vue inscrite dans les métadonnées EXIF de chaque photo et crée automatiquement une structure de dossiers chronologique. Année, mois, jour — vous retrouvez instantanément n'importe quel souvenir. Le logiciel gère les formats les plus courants (JPEG, PNG, HEIC, RAW) et traite des milliers d'images rapidement. Tout se fait en local sur votre ordinateur, sans aucun envoi de données en ligne."
      screenshot="/images/scan.png"
      screenshotAlt="Photo Organizer — tri des photos par date"
    />
  );
}
