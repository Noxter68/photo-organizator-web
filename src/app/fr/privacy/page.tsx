import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Photo Organizer",
  description: "Politique de confidentialité du site et du logiciel Photo Organizer.",
  robots: { index: false, follow: false },
};

export default function PrivacyFR() {
  return (
    <LegalLayout locale="fr">
      <h1>Politique de confidentialité</h1>
      <p><em>Dernière mise à jour : avril 2026</em></p>

      <p>
        Chez Photo Organizer, nous prenons la protection de vos données personnelles très au sérieux.
        Cette politique décrit quelles données nous collectons, pourquoi et comment nous les utilisons.
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        Photo Organizer<br />
        Email : <a href="mailto:contact@photorganizer.org">contact@photorganizer.org</a>
      </p>

      <h2>2. Données collectées</h2>
      <h3>Lors de l&apos;achat</h3>
      <p>Quand vous effectuez un achat, les données suivantes sont collectées via Stripe :</p>
      <ul>
        <li>Adresse email</li>
        <li>Informations de paiement (traitées exclusivement par Stripe, jamais stockées sur nos serveurs)</li>
        <li>Adresse IP (à des fins de sécurité)</li>
      </ul>

      <h3>Lors de la visite du site</h3>
      <p>Nous ne collectons aucune donnée personnelle lors de la simple navigation sur le site. Aucun cookie de tracking, aucun outil d&apos;analyse tiers n&apos;est utilisé.</p>

      <h3>Lors de l&apos;utilisation du logiciel</h3>
      <p>
        Le logiciel Photo Organizer fonctionne <strong>entièrement en local</strong> sur votre ordinateur.
        Aucune photo, aucune donnée de fichier et aucune information personnelle n&apos;est envoyée vers nos serveurs
        ou tout autre serveur tiers. Le traitement des images se fait exclusivement sur votre machine.
      </p>

      <h2>3. Finalité du traitement</h2>
      <p>Les données collectées lors de l&apos;achat sont utilisées uniquement pour :</p>
      <ul>
        <li>Traiter votre commande et délivrer votre licence</li>
        <li>Vous envoyer un email de confirmation avec les informations de téléchargement</li>
        <li>Assurer le support client si vous nous contactez</li>
      </ul>

      <h2>4. Base légale du traitement</h2>
      <p>
        Le traitement de vos données repose sur l&apos;exécution du contrat de vente (article 6.1.b du RGPD)
        et sur votre consentement pour les communications par email.
      </p>

      <h2>5. Durée de conservation</h2>
      <p>
        Vos données d&apos;achat sont conservées pendant la durée nécessaire à la gestion de votre licence
        et au respect de nos obligations légales et comptables (maximum 10 ans pour les données de facturation).
      </p>

      <h2>6. Partage des données</h2>
      <p>Vos données ne sont jamais vendues ni partagées à des fins commerciales. Elles peuvent être transmises à :</p>
      <ul>
        <li><strong>Stripe</strong> — pour le traitement sécurisé des paiements (<a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">politique de confidentialité Stripe</a>)</li>
        <li><strong>Resend</strong> — pour l&apos;envoi d&apos;emails transactionnels</li>
      </ul>

      <h2>7. Vos droits</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul>
        <li><strong>Droit d&apos;accès</strong> — obtenir une copie de vos données personnelles</li>
        <li><strong>Droit de rectification</strong> — corriger des données inexactes</li>
        <li><strong>Droit à l&apos;effacement</strong> — demander la suppression de vos données</li>
        <li><strong>Droit à la portabilité</strong> — recevoir vos données dans un format structuré</li>
        <li><strong>Droit d&apos;opposition</strong> — vous opposer au traitement de vos données</li>
      </ul>
      <p>
        Pour exercer l&apos;un de ces droits, contactez-nous à{" "}
        <a href="mailto:contact@photorganizer.org">contact@photorganizer.org</a>.
        Nous répondrons dans un délai de 30 jours.
      </p>

      <h2>8. Sécurité</h2>
      <p>
        Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger
        vos données contre tout accès non autorisé, modification, divulgation ou destruction.
        Les paiements sont traités via Stripe qui est certifié PCI DSS niveau 1.
      </p>

      <h2>9. Cookies</h2>
      <p>
        Ce site n&apos;utilise aucun cookie de tracking ni de publicité.
        Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.
      </p>

      <h2>10. Modifications</h2>
      <p>
        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
        Toute modification sera publiée sur cette page avec une date de mise à jour.
      </p>

      <h2>11. Contact</h2>
      <p>
        Pour toute question relative à cette politique :<br />
        <a href="mailto:contact@photorganizer.org">contact@photorganizer.org</a>
      </p>
    </LegalLayout>
  );
}
