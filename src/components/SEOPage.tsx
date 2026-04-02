"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import type { Locale } from "@/lib/dictionaries";
import { getDictionary } from "@/lib/dictionaries";

interface SEOPageProps {
  locale: Locale;
  title: string;
  subtitle: string;
  content: string;
  screenshot: string;
  screenshotAlt: string;
}

export default function SEOPage({ locale, title, subtitle, content, screenshot, screenshotAlt }: SEOPageProps) {
  const t = getDictionary(locale);

  return (
    <>
      <Header locale={locale} />
      <main className="pt-24 pb-20">
        <section className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{title}</h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 mb-12"
          >
            <Image src={screenshot} alt={screenshotAlt} width={1000} height={625} className="w-full h-auto" />
          </motion.div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12">
            <p>{content}</p>
          </div>

          <div className="text-center">
            <a
              href={`/${locale}#pricing`}
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/25"
            >
              {t.pricing.cta}
            </a>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
