import type { Locale } from "@/lib/dictionaries";
import Header from "./Header";
import Hero from "./Hero";
import ScreenshotTiles from "./ScreenshotTiles";
import Problem from "./Problem";
import Solution from "./Solution";
import TimeSaver from "./TimeSaver";
import Process from "./Process";
import BeforeAfter from "./BeforeAfter";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { ProductSchema, FAQSchema, OrganizationSchema } from "./StructuredData";

export default function LandingPage({ locale }: { locale: Locale }) {
  return (
    <>
      <ProductSchema locale={locale} />
      <FAQSchema locale={locale} />
      <OrganizationSchema />
      <Header locale={locale} />
      <main>
        <Hero locale={locale} />
        <ScreenshotTiles locale={locale} />
        <Problem locale={locale} />
        <Solution locale={locale} />
        <TimeSaver locale={locale} />
        <Process locale={locale} />
        <BeforeAfter locale={locale} />
        <Features locale={locale} />
        <Testimonials locale={locale} />
        <Pricing locale={locale} />
        <FAQ locale={locale} />
      </main>
      <Footer locale={locale} />
      <ScrollToTop />
    </>
  );
}
