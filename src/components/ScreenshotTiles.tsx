"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Locale } from "@/lib/dictionaries";
import { getDictionary } from "@/lib/dictionaries";
import DotPattern from "./DotPattern";

export default function ScreenshotTiles({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <DotPattern className="opacity-80" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.screenshots.title}</h2>
          <p className="mt-4 text-gray-600 text-lg">{t.screenshots.subtitle}</p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {t.screenshots.items.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-16`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="md:w-3/5"
                >
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 ring-1 ring-black/5">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={800}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="md:w-2/5"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold text-sm mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed text-lg">{item.text}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
