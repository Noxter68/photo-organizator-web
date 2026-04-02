"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback, Suspense } from "react";
import { motion } from "framer-motion";

const DOWNLOAD_URL =
  "https://pub-018a4c6e8b7f4368a8d4ed0714e0041f.r2.dev/PhotoOrganizer_Setup.exe";

const texts = {
  fr: {
    title: "Paiement confirmé !",
    subtitle: "Merci pour votre achat. Vous pouvez maintenant télécharger Photo Organizer.",
    download: "Télécharger Photo Organizer",
    email: "Un email de confirmation avec votre licence vous a été envoyé.",
    back: "Retour à l'accueil",
    redirecting: "Téléchargement lancé ! Redirection en cours...",
    invalid: "Session invalide",
    invalidText: "Cette page est accessible uniquement après un paiement valide.",
  },
  en: {
    title: "Payment confirmed!",
    subtitle: "Thank you for your purchase. You can now download Photo Organizer.",
    download: "Download Photo Organizer",
    email: "A confirmation email with your license has been sent to you.",
    back: "Back to homepage",
    redirecting: "Download started! Redirecting...",
    invalid: "Invalid session",
    invalidText: "This page is only accessible after a valid payment.",
  },
};

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const lang = searchParams.get("lang") === "en" ? "en" : "fr";
  const t = texts[lang];

  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      return;
    }
    setVerified(true);
    setLoading(false);
  }, [sessionId]);

  const handleDownload = useCallback(() => {
    setDownloaded(true);

    // Redirect to homepage after 3s — the browser handles the .exe download
    // in the background even after navigation
    setTimeout(() => {
      window.location.href = `/${lang}`;
    }, 3000);
  }, [lang]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!sessionId || !verified) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">{t.invalid}</h1>
          <p className="mt-4 text-gray-600">{t.invalidText}</p>
          <a href={`/${lang}`} className="mt-6 inline-block text-blue-600 hover:underline">
            {t.back}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-green-50 to-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full text-center"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
        <p className="mt-4 text-lg text-gray-600">{t.subtitle}</p>

        {!downloaded ? (
          <a
            href={DOWNLOAD_URL}
            onClick={handleDownload}
            className="mt-8 inline-block bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold cursor-pointer shadow-[0_8px_30px_rgb(37,99,235,0.35)] hover:shadow-[0_12px_40px_rgb(37,99,235,0.5)] hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            {t.download}
          </a>
        ) : (
          <div className="mt-8 flex items-center justify-center gap-3 text-green-600 font-medium">
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {t.redirecting}
          </div>
        )}

        <p className="mt-6 text-sm text-gray-500">{t.email}</p>
      </motion.div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full" />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
