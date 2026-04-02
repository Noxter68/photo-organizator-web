export type Locale = "fr" | "en";

export const dictionaries = {
  fr: {
    meta: {
      title: "Photo Organizer — Organisez automatiquement vos photos sur Windows",
      description:
        "Triez et rangez automatiquement vos photos iPhone, iPad et Mac sur Windows grâce aux métadonnées. Licence à vie, paiement unique de 99€.",
    },
    nav: {
      features: "Fonctionnalités",
      howItWorks: "Comment ça marche",
      pricing: "Tarif",
      faq: "FAQ",
      buy: "Acheter maintenant",
      badge: "Vos photos, enfin organisées.",
    },
    hero: {
      title: "Organisez automatiquement vos photos, même depuis un iPhone vers Windows",
      subtitle:
        "Ne perdez plus vos albums et vos souvenirs dans des dossiers chaotiques. Le logiciel trie et range vos images automatiquement grâce aux métadonnées.",
      cta: "Acheter — 99€ à vie",
      ctaSecondary: "Voir comment ça fonctionne",
      badges: ["Paiement unique 99€", "Licence à vie", "100% local", "iPhone → Windows"],
    },
    screenshots: {
      title: "Un logiciel conçu pour être simple",
      subtitle: "Découvrez l'interface claire et intuitive de Photo Organizer",
      items: [
        {
          src: "/images/scan.png",
          alt: "Configuration du scan automatique",
          title: "Sélectionnez vos dossiers",
          text: "Choisissez simplement le dossier source et la destination. Le logiciel s'occupe du reste.",
        },
        {
          src: "/images/result.png",
          alt: "Résultat de l'organisation — catégories détectées",
          title: "Visualisez le résultat avant de valider",
          text: "Avant de lancer le tri, le logiciel vous montre exactement combien de fichiers et dossiers seront créés.",
        },
        {
          src: "/images/manager.png",
          alt: "Gestionnaire de fichiers organisés par date et lieu",
          title: "Explorez vos photos organisées",
          text: "Le gestionnaire intégré vous permet de naviguer dans votre photothèque triée par date, lieu et événement.",
        },
        {
          src: "/images/viewer.png",
          alt: "Visionneuse de photos intégrée",
          title: "Visionnez vos souvenirs instantanément",
          text: "Pas besoin d'ouvrir un autre logiciel. La visionneuse intégrée affiche vos photos en plein écran.",
        },
      ],
    },
    problem: {
      title: "Vous reconnaissez ce chaos ?",
      subtitle: "C'est ce qui arrive quand vos photos quittent l'écosystème Apple.",
      text: "Quand vous transférez vos photos depuis un iPhone, iPad ou Mac vers Windows, l'organisation que vous aviez soigneusement créée disparaît. Résultat : des milliers de fichiers en vrac, impossibles à exploiter.",
      painPoints: [
        {
          icon: "chaos",
          title: "Des milliers de photos en vrac",
          text: "Vos souvenirs se retrouvent éparpillés dans des dossiers cryptiques et illisibles.",
        },
        {
          icon: "album",
          title: "Albums Apple perdus",
          text: "Les albums créés sur iPhone, iPad ou Mac ne sont pas conservés sur Windows.",
        },
        {
          icon: "search",
          title: "Impossible de retrouver un souvenir",
          text: "Chercher une photo précise dans ce chaos ? Bonne chance.",
        },
        {
          icon: "time",
          title: "Des heures perdues à trier",
          text: "Le tri manuel prend des heures, voire des jours entiers de votre temps.",
        },
      ],
    },
    solution: {
      title: "Retrouvez une photothèque propre, sans effort",
      features: [
        {
          title: "Tri automatique par métadonnées",
          text: "Le logiciel lit les données EXIF de chaque photo pour les classer intelligemment.",
        },
        {
          title: "Organisation par date",
          text: "Vos photos sont rangées par année, mois et événement automatiquement.",
        },
        {
          title: "Compatible iPhone → Windows",
          text: "Conçu spécialement pour les utilisateurs qui migrent depuis l'écosystème Apple.",
        },
        {
          title: "Traitement 100% local",
          text: "Aucune photo n'est envoyée en ligne. Tout reste sur votre ordinateur.",
        },
      ],
    },
    timeSaver: {
      title: "Arrêtez de perdre du temps",
      subtitle: "Des heures de tri manuel remplacées par quelques minutes",
      text: "On passe tous des heures à trier nos photos manuellement, à déplacer des fichiers un par un. Avec Photo Organizer, des milliers de photos sont classées automatiquement en quelques minutes. Et grâce au gestionnaire intégré, vous pouvez ensuite affiner le tri encore plus rapidement.",
      stats: [
        { value: "5 000+", label: "photos triées en minutes" },
        { value: "10x", label: "plus rapide que le tri manuel" },
        { value: "0", label: "photo envoyée en ligne" },
      ],
    },
    process: {
      title: "Trois étapes. C'est tout.",
      subtitle:
        "Choisissez vos dossiers, lancez le traitement, récupérez une bibliothèque photo propre et rangée.",
      steps: [
        {
          step: "1",
          title: "Sélectionnez vos dossiers",
          text: "Choisissez le dossier source contenant vos photos et le dossier de destination.",
        },
        {
          step: "2",
          title: "Lancez le tri",
          text: "Le logiciel analyse les métadonnées et organise vos fichiers automatiquement.",
        },
        {
          step: "3",
          title: "Récupérez une structure propre",
          text: "Vos photos sont maintenant classées dans des dossiers clairs et exploitables.",
        },
      ],
    },
    beforeAfter: {
      title: "Le résultat parle de lui-même",
      subtitle: "Voyez la différence en un coup d'œil",
      before: "Avant",
      after: "Après",
      beforeTitle: "Le chaos de vos exports Apple",
      afterTitle: "Une photothèque claire et organisée",
      beforeText: "Des dizaines de dossiers cryptiques (202301_a, 202302_b...), impossibles à naviguer",
      afterText: "Des dossiers clairs, nommés par date et par lieu, avec aperçus de vos photos",
    },
    features: {
      title: "Tout ce qu'il vous faut",
      subtitle: "Des fonctionnalités pensées pour vous simplifier la vie",
      items: [
        { title: "Tri automatique", text: "Organisation par métadonnées EXIF en un clic" },
        { title: "Organisation par date", text: "Classement par année, mois et jour automatique" },
        { title: "iPhone → Windows", text: "Parfait pour les exports Apple Photos" },
        { title: "100% local", text: "Aucun envoi de données en ligne" },
        { title: "Gain de temps énorme", text: "Des heures de tri en quelques secondes" },
        { title: "Simple et rapide", text: "Trois clics suffisent pour tout organiser" },
      ],
    },
    pricing: {
      title: "Un seul paiement, à vie",
      subtitle: "Pas d'abonnement. Pas de frais cachés. Téléchargement immédiat.",
      price: "99",
      currency: "€",
      period: "à vie",
      cta: "Acheter et télécharger",
      guarantee: "Satisfait ou remboursé",
      perks: [
        "Licence à vie",
        "Mises à jour incluses",
        "Aucun abonnement",
        "Téléchargement immédiat",
        "Support par email",
      ],
    },
    faq: {
      title: "Questions fréquentes",
      items: [
        {
          q: "Est-ce que ça fonctionne avec les photos iPhone sur Windows ?",
          a: "Oui, c'est même le cas d'usage principal. Le logiciel est conçu pour organiser les photos exportées depuis un iPhone, iPad ou Mac sur un PC Windows.",
        },
        {
          q: "Est-ce que mes albums iPhone sont conservés ?",
          a: "Le logiciel utilise les métadonnées (date, lieu, etc.) pour recréer une structure de dossiers claire. Les noms d'albums Apple ne sont pas directement transférables, mais l'organisation retrouvée est souvent meilleure.",
        },
        {
          q: "Est-ce que le logiciel envoie mes photos en ligne ?",
          a: "Non. Tout le traitement se fait localement sur votre ordinateur. Aucune photo n'est uploadée nulle part.",
        },
        {
          q: "Est-ce que ça fonctionne avec beaucoup d'images ?",
          a: "Oui, le logiciel est optimisé pour traiter des milliers de photos rapidement.",
        },
        {
          q: "Est-ce que ça marche aussi avec des photos venant d'iPad ou de Mac ?",
          a: "Absolument. Toute photo avec des métadonnées EXIF sera organisée correctement, quelle que soit sa source Apple.",
        },
        {
          q: "Comment récupérer le téléchargement après paiement ?",
          a: "Après le paiement, vous êtes redirigé vers une page de confirmation avec un bouton de téléchargement. Vous recevez aussi un email de confirmation.",
        },
        {
          q: "Est-ce que la licence est à vie ?",
          a: "Oui. Vous payez une seule fois 99€ et vous pouvez utiliser le logiciel indéfiniment, mises à jour incluses.",
        },
      ],
    },
    footer: {
      tagline: "Organisez vos photos automatiquement.",
      description: "Le logiciel qui transforme le chaos de vos photos en une bibliothèque parfaitement organisée.",
      product: "Produit",
      company: "Entreprise",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
      contact: "Contact",
      copyright: "Tous droits réservés.",
    },
  },
  en: {
    meta: {
      title: "Photo Organizer — Automatically Organize Your Photos on Windows",
      description:
        "Automatically sort and organize your iPhone, iPad and Mac photos on Windows using metadata. Lifetime license, one-time payment of $99.",
    },
    nav: {
      features: "Features",
      howItWorks: "How it works",
      pricing: "Pricing",
      faq: "FAQ",
      buy: "Buy now",
      badge: "Your photos, finally organized.",
    },
    hero: {
      title: "Automatically organize your photos, even from iPhone to Windows",
      subtitle:
        "Stop losing your albums and memories in chaotic folders. The software sorts and organizes your images automatically using metadata.",
      cta: "Buy — $99 lifetime",
      ctaSecondary: "See how it works",
      badges: ["One-time $99", "Lifetime license", "100% local", "iPhone → Windows"],
    },
    screenshots: {
      title: "Software designed to be simple",
      subtitle: "Discover the clean and intuitive Photo Organizer interface",
      items: [
        {
          src: "/images/scan.png",
          alt: "Auto scan configuration",
          title: "Select your folders",
          text: "Simply choose your source folder and destination. The software takes care of the rest.",
        },
        {
          src: "/images/result.png",
          alt: "Organization result — detected categories",
          title: "Preview the result before validating",
          text: "Before launching the sort, the software shows you exactly how many files and folders will be created.",
        },
        {
          src: "/images/manager.png",
          alt: "File manager organized by date and location",
          title: "Explore your organized photos",
          text: "The built-in manager lets you browse your photo library sorted by date, location and event.",
        },
        {
          src: "/images/viewer.png",
          alt: "Built-in photo viewer",
          title: "View your memories instantly",
          text: "No need to open another app. The built-in viewer displays your photos in full screen.",
        },
      ],
    },
    problem: {
      title: "Sound familiar?",
      subtitle: "This is what happens when your photos leave the Apple ecosystem.",
      text: "When you transfer photos from iPhone, iPad or Mac to Windows, the organization you carefully created disappears. Result: thousands of scattered files, impossible to use.",
      painPoints: [
        {
          icon: "chaos",
          title: "Thousands of scattered photos",
          text: "Your memories end up scattered across cryptic, unreadable folders.",
        },
        {
          icon: "album",
          title: "Apple albums lost",
          text: "Albums created on iPhone, iPad or Mac are not preserved on Windows.",
        },
        {
          icon: "search",
          title: "Can't find a memory",
          text: "Looking for a specific photo in this chaos? Good luck.",
        },
        {
          icon: "time",
          title: "Hours wasted sorting",
          text: "Manual sorting takes hours, even entire days of your time.",
        },
      ],
    },
    solution: {
      title: "Get a clean photo library, effortlessly",
      features: [
        {
          title: "Automatic metadata sorting",
          text: "The software reads EXIF data from each photo to organize them intelligently.",
        },
        {
          title: "Date-based organization",
          text: "Your photos are sorted by year, month and event automatically.",
        },
        {
          title: "iPhone → Windows compatible",
          text: "Specially designed for users migrating from the Apple ecosystem.",
        },
        {
          title: "100% local processing",
          text: "No photos are sent online. Everything stays on your computer.",
        },
      ],
    },
    timeSaver: {
      title: "Stop wasting time",
      subtitle: "Hours of manual sorting replaced by a few minutes",
      text: "We all spend hours manually sorting photos, moving files one by one. With Photo Organizer, thousands of photos are automatically classified in minutes. And with the built-in manager, you can refine the sort even faster.",
      stats: [
        { value: "5,000+", label: "photos sorted in minutes" },
        { value: "10x", label: "faster than manual sorting" },
        { value: "0", label: "photos sent online" },
      ],
    },
    process: {
      title: "Three steps. That's it.",
      subtitle:
        "Choose your folders, launch the process, and get a clean, organized photo library.",
      steps: [
        {
          step: "1",
          title: "Select your folders",
          text: "Choose the source folder containing your photos and the destination folder.",
        },
        {
          step: "2",
          title: "Launch the sort",
          text: "The software analyzes metadata and organizes your files automatically.",
        },
        {
          step: "3",
          title: "Get a clean structure",
          text: "Your photos are now sorted into clear, usable folders.",
        },
      ],
    },
    beforeAfter: {
      title: "The result speaks for itself",
      subtitle: "See the difference at a glance",
      before: "Before",
      after: "After",
      beforeTitle: "Your Apple export chaos",
      afterTitle: "A clean, organized photo library",
      beforeText: "Dozens of cryptic folders (202301_a, 202302_b...), impossible to navigate",
      afterText: "Clear folders, named by date and location, with photo previews",
    },
    features: {
      title: "Everything you need",
      subtitle: "Features designed to simplify your life",
      items: [
        { title: "Auto sorting", text: "EXIF metadata organization in one click" },
        { title: "Date organization", text: "Automatic sorting by year, month and day" },
        { title: "iPhone → Windows", text: "Perfect for Apple Photos exports" },
        { title: "100% local", text: "No data sent online" },
        { title: "Huge time savings", text: "Hours of sorting in just seconds" },
        { title: "Simple and fast", text: "Three clicks to organize everything" },
      ],
    },
    pricing: {
      title: "One payment, for life",
      subtitle: "No subscription. No hidden fees. Instant download.",
      price: "99",
      currency: "$",
      period: "lifetime",
      cta: "Buy and download",
      guarantee: "Money-back guarantee",
      perks: [
        "Lifetime license",
        "Updates included",
        "No subscription",
        "Instant download",
        "Email support",
      ],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "Does it work with iPhone photos on Windows?",
          a: "Yes, that's actually the main use case. The software is designed to organize photos exported from iPhone, iPad or Mac on a Windows PC.",
        },
        {
          q: "Are my iPhone albums preserved?",
          a: "The software uses metadata (date, location, etc.) to recreate a clear folder structure. Apple album names aren't directly transferable, but the resulting organization is often better.",
        },
        {
          q: "Does the software send my photos online?",
          a: "No. All processing happens locally on your computer. No photos are uploaded anywhere.",
        },
        {
          q: "Does it work with a lot of images?",
          a: "Yes, the software is optimized to process thousands of photos quickly.",
        },
        {
          q: "Does it also work with photos from iPad or Mac?",
          a: "Absolutely. Any photo with EXIF metadata will be organized correctly, regardless of its Apple source.",
        },
        {
          q: "How do I get the download after payment?",
          a: "After payment, you're redirected to a confirmation page with a download button. You also receive a confirmation email.",
        },
        {
          q: "Is the license really lifetime?",
          a: "Yes. You pay once $99 and you can use the software indefinitely, updates included.",
        },
      ],
    },
    footer: {
      tagline: "Organize your photos automatically.",
      description: "The software that transforms your photo chaos into a perfectly organized library.",
      product: "Product",
      company: "Company",
      legal: "Legal notice",
      privacy: "Privacy policy",
      contact: "Contact",
      copyright: "All rights reserved.",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
