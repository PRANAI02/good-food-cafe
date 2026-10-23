"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, Clock, Star, Truck } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const highlights = [
  { icon: Clock, label: "30 Min Delivery", desc: "Fresh to your door, still warm" },
  { icon: Star, label: "Same Great Quality", desc: "Packaged to preserve every flavour" },
  { icon: Truck, label: "MG Road & Nearby", desc: "Delivery zone across Bengaluru CBD" },
];

export default function OrderOnline() {
  const { openReserve, openOrder } = useModal();
  return (
    <section id="order" className="relative z-0 py-28 lg:py-36 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--cream-light) 0%, rgba(44,74,46,0.06) 50%, var(--cream-light) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div
              className="relative h-[420px] lg:h-[520px] rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 40px 100px rgba(44,74,46,0.2)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=85&fit=crop"
                alt="Artisan food bowl"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/60 via-transparent to-transparent" />
            </div>

            {/* Floating food image */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-8 -left-4 sm:-left-8 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.2)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80&fit=crop"
                alt="Fresh salad"
                fill
                className="object-cover"
                sizes="112px"
              />
            </motion.div>
          </motion.div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="divider" />
              <span
                className="text-xs font-medium tracking-[0.25em] uppercase"
                style={{ color: "var(--olive)" }}
              >
                Order Online
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--forest)" }}
            >
              Good food,{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>
                delivered
              </span>{" "}
              to you
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed mb-10"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.2rem",
              }}
            >
              Can&apos;t make it in? We bring the artisan experience right to your door.
              Every dish is packaged to preserve freshness and flavour.
            </motion.p>

            {/* Highlights */}
            <div className="space-y-4 mb-10">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, var(--forest) 0%, var(--olive) 100%)",
                    }}
                  >
                    <h.icon size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "var(--forest)" }}>
                      {h.label}
                    </p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {h.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                type="button"
                onClick={openOrder}
                className="btn-primary ripple-btn"
              >
                <ShoppingBag size={18} />
                <span>Order Online</span>
              </button>
              <button
                type="button"
                onClick={openReserve}
                className="btn-secondary"
              >
                Reserve a Table
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
