"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Locale } from "@/lib/dictionaries";
import { getDictionary } from "@/lib/dictionaries";

export default function TimeSaver({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide backdrop-blur">
              {locale === "fr" ? "Gain de temps" : "Time savings"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">{t.timeSaver.title}</h2>
            <p className="mt-2 text-blue-200 text-lg">{t.timeSaver.subtitle}</p>
            <p className="mt-6 text-blue-100 leading-relaxed text-lg">{t.timeSaver.text}</p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {t.timeSaver.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="text-center bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10"
                >
                  <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                  <div className="text-xs text-blue-200 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
          >
            <Image
              src="/images/progress.png"
              alt={locale === "fr" ? "Scan en cours avec Photo Organizer" : "Photo Organizer scan in progress"}
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
