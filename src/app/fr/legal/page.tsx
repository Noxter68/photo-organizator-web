import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Mentions légales — Photo Organizer",
  description: "Mentions légales du site Photo Organizer.",
  robots: { index: false, follow: false },
};

export default function LegalFR() {
  return (
    <LegalLayout locale="fr">
      <h1>Mentions légales</h1>
      <p><em>Dernière mise à jour : avril 2026</em></p>

      <h2>Éditeur du site</h2>
      <p>
        Le site <strong>photorganizer.org</strong> est édité par :<br />
        Photo Organizer<br />
        Email : <a href="mailto:contact@photorganizer.org">contact@photorganizer.org</a>
      </p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par :<br />
        Vercel Inc.<br />
        440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
        Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble du contenu de ce site (textes, images, captures d&apos;écran, logo, design)
        est la propriété exclusive de Photo Organizer et est protégé par les lois
        françaises et internationales relatives à la propriété intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, modification ou exploitation totale ou partielle
        du contenu de ce site, par quelque procédé que ce soit, sans autorisation écrite préalable,
        est strictement interdite.
      </p>

      <h2>Responsabilité</h2>
      <p>
        L&apos;éditeur s&apos;efforce de fournir des informations aussi précises que possible.
        Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes ou des
        carences dans la mise à jour de ces informations.
      </p>
      <p>
        Le logiciel Photo Organizer est fourni « en l&apos;état ». L&apos;éditeur ne garantit pas
        l&apos;absence de bugs ou d&apos;erreurs et ne saurait être tenu responsable de tout dommage
        direct ou indirect résultant de l&apos;utilisation du logiciel.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Pour toute information relative au traitement de vos données personnelles,
        veuillez consulter notre{" "}
        <a href="/fr/privacy">politique de confidentialité</a>.
      </p>

      <h2>Paiement</h2>
      <p>
        Les paiements sont traités de manière sécurisée par{" "}
        <a href="https://stripe.com" target="_blank" rel="noopener noreferrer">Stripe</a>.
        Aucune donnée bancaire n&apos;est stockée sur nos serveurs.
      </p>
      <p>
        Le prix du logiciel est un paiement unique. Aucun abonnement ni frais récurrent
        ne sera prélevé. Toutes les ventes sont définitives et non remboursables.
      </p>

      <h2>Droit applicable</h2>
      <p>
        Les présentes mentions légales sont soumises au droit français. En cas de litige,
        les tribunaux français seront seuls compétents.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question concernant ces mentions légales :<br />
        <a href="mailto:contact@photorganizer.org">contact@photorganizer.org</a>
      </p>
    </LegalLayout>
  );
}
