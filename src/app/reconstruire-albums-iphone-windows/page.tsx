import type { Metadata } from "next";
import SEOPage from "@/components/SEOPage";

export const metadata: Metadata = {
  title: "Reconstruire ses albums iPhone sur Windows — Photo Organizer",
  description: "Retrouvez l'organisation de vos albums iPhone perdus après un transfert vers Windows. Photo Organizer reconstruit automatiquement une structure exploitable.",
  alternates: { canonical: "/reconstruire-albums-iphone-windows" },
};

export default function Page() {
  return (
    <SEOPage
      locale="fr"
      title="Reconstruire vos albums iPhone sur Windows"
      subtitle="Vos albums Apple ont disparu après le transfert ? Photo Organizer les reconstruit automatiquement."
      content="Quand vous transférez vos photos depuis un iPhone, iPad ou Mac vers un PC Windows, les albums que vous aviez soigneusement créés dans l'application Photos disparaissent souvent. Vous vous retrouvez avec des milliers d'images dans un seul dossier, sans aucune organisation. Photo Organizer analyse les métadonnées de chaque photo (date, localisation GPS, appareil) et reconstruit une arborescence de dossiers claire. Ce n'est pas une copie exacte de vos albums Apple, mais le résultat est souvent plus clair et plus pratique à naviguer."
      screenshot="/images/organization_completed.png"
      screenshotAlt="Photo Organizer — reconstruction des albums iPhone sur Windows"
    />
  );
}
