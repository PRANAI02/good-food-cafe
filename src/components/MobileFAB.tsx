"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ShoppingBag } from "lucide-react";

export default function MobileFAB() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="mobile-fab lg:hidden"
        >
          <a
            href="https://maps.app.goo.gl/tQUgFiwQteX2hpBv9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-white px-3 py-1.5 rounded-full"
            style={{ background: "linear-gradient(135deg, var(--gold), var(--wood))" }}
          >
            <Calendar size={13} />
            Reserve
          </a>
          <a
            href="https://maps.app.goo.gl/tQUgFiwQteX2hpBv9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-white px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <ShoppingBag size={13} />
            Order
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
