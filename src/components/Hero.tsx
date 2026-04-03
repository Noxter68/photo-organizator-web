"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Locale } from "@/lib/dictionaries";
import { getDictionary } from "@/lib/dictionaries";
import DotPattern from "./DotPattern";

export default function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Dot grid background */}
      <DotPattern className="opacity-80" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-white/50 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {t.hero.badges.map((badge) => (
              <span
                key={badge}
                className="bg-white/80 backdrop-blur border border-blue-200 text-blue-700 text-xs font-medium px-4 py-1.5 rounded-full shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            {t.hero.title}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="group relative bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-[0_8px_30px_rgb(37,99,235,0.35)] hover:shadow-[0_12px_40px_rgb(37,99,235,0.5)] hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span className="relative z-10">{t.hero.cta}</span>
            </a>
            <a
              href="#process"
              className="border-2 border-gray-200 bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-medium shadow-sm hover:border-blue-300 hover:text-blue-600 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10 border border-gray-200 ring-1 ring-black/5">
            <Image
              src="/images/home.png"
              alt={locale === "fr" ? "Interface de Photo Organizer - écran d'accueil" : "Photo Organizer interface - home screen"}
              width={1200}
              height={750}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
