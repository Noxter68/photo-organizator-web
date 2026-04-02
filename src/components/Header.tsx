"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Locale } from "@/lib/dictionaries";
import { getDictionary } from "@/lib/dictionaries";
import Link from "next/link";

export default function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [menuOpen, setMenuOpen] = useState(false);
  const otherLocale = locale === "fr" ? "en" : "fr";

  return (
    <>
      {/* Top badge bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white text-center py-1.5 text-sm font-medium">
        {t.nav.badge}
      </div>

      <header className="fixed top-8 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2 font-semibold text-lg text-gray-900">
            <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Photo Organizer
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition">{t.nav.features}</a>
            <a href="#process" className="hover:text-gray-900 transition">{t.nav.howItWorks}</a>
            <a href="#pricing" className="hover:text-gray-900 transition">{t.nav.pricing}</a>
            <a href="#faq" className="hover:text-gray-900 transition">{t.nav.faq}</a>
            <Link href={`/${otherLocale}`} className="hover:text-gray-900 transition uppercase font-medium">
              {otherLocale}
            </Link>
            <a
              href="#pricing"
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-[0_4px_14px_rgb(37,99,235,0.3)] hover:shadow-[0_6px_20px_rgb(37,99,235,0.45)] hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              {t.nav.buy}
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-b border-gray-100"
            >
              <div className="px-6 py-4 flex flex-col gap-4 text-sm text-gray-600">
                <a href="#features" onClick={() => setMenuOpen(false)}>{t.nav.features}</a>
                <a href="#process" onClick={() => setMenuOpen(false)}>{t.nav.howItWorks}</a>
                <a href="#pricing" onClick={() => setMenuOpen(false)}>{t.nav.pricing}</a>
                <a href="#faq" onClick={() => setMenuOpen(false)}>{t.nav.faq}</a>
                <Link href={`/${otherLocale}`} className="uppercase font-medium">{otherLocale}</Link>
                <a
                  href="#pricing"
                  className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.buy}
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
