import type { Locale } from "@/lib/dictionaries";
import { getDictionary } from "@/lib/dictionaries";
import Link from "next/link";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-semibold text-lg">Photo Organizer</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="font-semibold text-sm text-gray-300 uppercase tracking-wider mb-4">{t.footer.product}</h3>
            <nav className="flex flex-col gap-2.5 text-sm text-gray-400">
              <a href="#features" className="hover:text-white transition">{t.nav.features}</a>
              <a href="#process" className="hover:text-white transition">{t.nav.howItWorks}</a>
              <a href="#pricing" className="hover:text-white transition">{t.nav.pricing}</a>
              <a href="#faq" className="hover:text-white transition">{t.nav.faq}</a>
            </nav>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-semibold text-sm text-gray-300 uppercase tracking-wider mb-4">{t.footer.company}</h3>
            <nav className="flex flex-col gap-2.5 text-sm text-gray-400">
              <a href="mailto:contact@photorganizer.org" className="hover:text-white transition">{t.footer.contact}</a>
              <Link href={`/${locale}/legal`} className="hover:text-white transition">{t.footer.legal}</Link>
              <Link href={`/${locale}/privacy`} className="hover:text-white transition">{t.footer.privacy}</Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} Photo Organizer. {t.footer.copyright}</span>
          <div className="flex items-center gap-4">
            <Link href="/fr" className={`hover:text-white transition ${locale === "fr" ? "text-white" : ""}`}>FR</Link>
            <Link href="/en" className={`hover:text-white transition ${locale === "en" ? "text-white" : ""}`}>EN</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
