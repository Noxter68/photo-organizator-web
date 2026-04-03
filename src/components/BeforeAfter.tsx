"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Locale } from "@/lib/dictionaries";
import { getDictionary } from "@/lib/dictionaries";
import DotPattern from "./DotPattern";

export default function BeforeAfter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [showAfter, setShowAfter] = useState(false);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <DotPattern className="opacity-80" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.beforeAfter.title}</h2>
          <p className="mt-3 text-lg text-gray-600">{t.beforeAfter.subtitle}</p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-full p-1 border border-gray-200">
            <button
              onClick={() => setShowAfter(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                !showAfter
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/25"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t.beforeAfter.before}
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                showAfter
                  ? "bg-green-500 text-white shadow-lg shadow-green-500/25"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t.beforeAfter.after}
            </button>
          </div>
        </div>

        {/* Animated card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!showAfter ? (
              <motion.div
                key="before"
                initial={{ opacity: 0, scale: 0.95, rotateY: -5 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotateY: 5 }}
                transition={{ duration: 0.4 }}
              >
                <div className="rounded-2xl overflow-hidden border-2 border-red-200 shadow-2xl ring-1 ring-red-100">
                  <Image
                    src="/images/apple_messi.png"
                    alt={t.beforeAfter.beforeText}
                    width={1000}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="font-bold text-red-600 text-lg">{t.beforeAfter.beforeTitle}</h3>
                  <p className="text-gray-600 mt-1">{t.beforeAfter.beforeText}</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="after"
                initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotateY: -5 }}
                transition={{ duration: 0.4 }}
              >
                <div className="rounded-2xl overflow-hidden border-2 border-green-200 shadow-2xl ring-1 ring-green-100">
                  <Image
                    src="/images/photo_organizer_clean.png"
                    alt={t.beforeAfter.afterText}
                    width={1000}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="font-bold text-green-600 text-lg">{t.beforeAfter.afterTitle}</h3>
                  <p className="text-gray-600 mt-1">{t.beforeAfter.afterText}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#pricing"
            className="inline-block bg-blue-600 text-white px-8 py-3.5 rounded-full text-base font-semibold shadow-[0_8px_30px_rgb(37,99,235,0.35)] hover:shadow-[0_12px_40px_rgb(37,99,235,0.5)] hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
