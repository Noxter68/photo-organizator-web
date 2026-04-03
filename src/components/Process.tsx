"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Locale } from "@/lib/dictionaries";
import { getDictionary } from "@/lib/dictionaries";
import DotPattern from "./DotPattern";

const stepImages = [
  "/images/scan.png",
  "/images/result.png",
  "/images/organization_completed.png",
];

export default function Process({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section id="process" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <DotPattern className="opacity-80" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.process.title}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t.process.subtitle}</p>
        </div>

        <div className="space-y-16 md:space-y-20">
          {t.process.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="max-w-4xl mx-auto"
            >
              {/* Large screenshot */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 ring-1 ring-black/5 mb-6">
                <Image
                  src={stepImages[i]}
                  alt={step.title}
                  width={1000}
                  height={625}
                  className="w-full h-auto"
                />
              </div>

              {/* Step info below */}
              <div className="flex items-start gap-4 max-w-xl mx-auto">
                <div className="shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl flex items-center justify-center shadow-lg shadow-blue-600/25">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-1 text-gray-600 text-lg">{step.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
