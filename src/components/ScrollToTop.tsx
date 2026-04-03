"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -6, 0],
            transition: {
              opacity: { duration: 0.3 },
              y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
            },
          }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-12 h-12 rounded-full bg-white border-2 border-blue-600 text-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] cursor-pointer transition-shadow duration-200 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-6 6m6-6l6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
