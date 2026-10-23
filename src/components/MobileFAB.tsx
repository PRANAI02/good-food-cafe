"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ShoppingBag } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function MobileFAB() {
  const [visible, setVisible] = useState(false);
  const { openReserve, openOrder } = useModal();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mobile-fab-wrapper lg:hidden">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="mobile-fab"
          >
            <button
              type="button"
              onClick={openReserve}
              className="fab-btn fab-btn-gold active:scale-95"
            >
              <Calendar size={13} />
              Reserve
            </button>
            <button
              type="button"
              onClick={openOrder}
              className="fab-btn fab-btn-outline active:scale-95"
            >
              <ShoppingBag size={13} />
              Order
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
