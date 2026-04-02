"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Locale } from "@/lib/dictionaries";
import { getDictionary } from "@/lib/dictionaries";
import DotPattern from "./DotPattern";

export default function Pricing({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setLoading(false);
    }
  }

  return (
    <section id="pricing" className="relative py-20 md:py-28 overflow-hidden">
      <DotPattern className="opacity-25" />
      <div className="absolute inset-0 bg-white/85 pointer-events-none" />
      <div className="relative max-w-md mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl bg-white border border-gray-200 shadow-xl overflow-hidden"
        >
          {/* Top gradient accent */}
          <div className="h-1.5 bg-linear-to-r from-blue-500 via-blue-600 to-indigo-600" />

          <div className="p-8">

            <h2 className="text-2xl font-bold text-gray-900 text-center">{t.pricing.title}</h2>
            <p className="mt-2 text-gray-500 text-sm text-center">{t.pricing.subtitle}</p>

            {/* Price */}
            <div className="mt-6 flex items-baseline justify-center gap-1">
              {locale === "en" && <span className="text-2xl font-bold text-gray-900">{t.pricing.currency}</span>}
              <span className="text-5xl font-extrabold text-gray-900">{t.pricing.price}</span>
              {locale === "fr" && <span className="text-2xl font-bold text-gray-900">{t.pricing.currency}</span>}
              <span className="text-gray-400 ml-1">/ {t.pricing.period}</span>
            </div>

            {/* Perks */}
            <ul className="mt-6 space-y-2.5">
              {t.pricing.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {perk}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="mt-8 w-full bg-blue-600 text-white py-3.5 rounded-xl text-base font-semibold cursor-pointer shadow-[0_8px_30px_rgb(37,99,235,0.35)] hover:shadow-[0_12px_40px_rgb(37,99,235,0.5)] hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {loading ? "..." : t.pricing.cta}
            </button>

            <p className="mt-4 text-center text-xs text-gray-400">
              {locale === "fr" ? "Paiement sécurisé par Stripe" : "Secure payment via Stripe"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
