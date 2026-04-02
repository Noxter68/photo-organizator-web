import type { Locale } from "@/lib/dictionaries";
import Header from "./Header";
import Footer from "./Footer";

export default function LegalLayout({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header locale={locale} />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 prose prose-gray prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-blue-600">
          {children}
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
