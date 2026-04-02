"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Locale } from "@/lib/dictionaries";
import { getDictionary } from "@/lib/dictionaries";
import DotPattern from "./DotPattern";

const iconMap: Record<string, React.ReactNode> = {
  chaos: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
    </svg>
  ),
  album: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21zM10.5 8.25a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" />
    </svg>
  ),
  search: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  time: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function Problem({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <DotPattern className="opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/90 via-gray-50/95 to-gray-50/90 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: screenshot of chaos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden border-2 border-red-200/60 shadow-xl ring-1 ring-red-100">
              <Image
                src="/images/apple_messi.png"
                alt={locale === "fr" ? "Dossiers photos en désordre après export Apple" : "Messy photo folders after Apple export"}
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 text-red-500 text-sm font-medium">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              {locale === "fr" ? "Un export Apple typique sur Windows" : "A typical Apple export on Windows"}
            </div>
          </motion.div>

          {/* Right: text + pain points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              {locale === "fr" ? "Le problème" : "The problem"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {t.problem.title}
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">{t.problem.subtitle}</p>

            <div className="mt-8 space-y-4">
              {t.problem.painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4 items-start bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
                    {iconMap[point.icon]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{point.title}</h3>
                    <p className="text-gray-500 text-sm mt-0.5">{point.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
