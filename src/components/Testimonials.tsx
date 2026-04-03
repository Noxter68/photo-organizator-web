"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Locale } from "@/lib/dictionaries";
import { getDictionary } from "@/lib/dictionaries";
import DotPattern from "./DotPattern";

const DURATION = 6000;

export default function Testimonials({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const items = t.testimonials.items;

  const goTo = useCallback((index: number) => {
    setActive(index);
    setProgress(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActive((a) => (a + 1) % items.length);
          return 0;
        }
        return prev + 100 / (DURATION / 50);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [items.length]);

  const item = items[active];

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <DotPattern className="opacity-80" />
      <div className="relative max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16"
        >
          {t.testimonials.title}
        </motion.h2>

        {/* Testimonial content */}
        <div className="relative min-h-55 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full"
            >
              <div className="text-center max-w-2xl mx-auto">
                {/* Quote icon */}
                <svg className="w-10 h-10 text-blue-100 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                </svg>

                {/* Text */}
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </p>

                {/* Author */}
                <p className="mt-8 text-sm font-semibold text-gray-900">
                  {item.name}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="relative h-1.5 rounded-full overflow-hidden cursor-pointer transition-all duration-300"
              style={{ width: i === active ? 48 : 24 }}
              aria-label={`Testimonial ${i + 1}`}
            >
              <div className="absolute inset-0 bg-gray-200 rounded-full" />
              {i === active && (
                <motion.div
                  className="absolute inset-y-0 left-0 bg-blue-600 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              )}
              {i < active && (
                <div className="absolute inset-0 bg-blue-600 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
