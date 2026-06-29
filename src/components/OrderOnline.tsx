"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, Clock, Star, Truck } from "lucide-react";

const highlights = [
  { icon: Clock, label: "30 Min Delivery", desc: "Fresh to your door" },
  { icon: Star, label: "Same Great Quality", desc: "Packaged with care" },
  { icon: Truck, label: "MG Road & Nearby", desc: "Delivery zone" },
];

export default function OrderOnline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="order" ref={ref} className="relative py-28 lg:py-36 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, var(--cream-light) 0%, rgba(44,74,46,0.06) 50%, var(--cream-light) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div
              className="relative h-[480px] rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 40px 100px rgba(44,74,46,0.2)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=85&fit=crop"
                alt="Food delivery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating order card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 p-5 rounded-2xl glass-cream"
              style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.12)", minWidth: "180px" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "var(--forest)" }}>
                Order Delivered
              </p>
              <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
                Heritage Grain Bowl
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: "var(--forest)" }}
                >
                  <ShoppingBag size={12} color="white" />
                </div>
                <span className="text-xs font-medium" style={{ color: "var(--olive)" }}>
                  Delivered in 28 mins ✓
                </span>
              </div>
            </motion.div>

            {/* Floating food image */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-8 -left-8 w-28 h-28 rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.2)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80&fit=crop"
                alt="Food"
                fill
                className="object-cover"
                sizes="112px"
              />
            </motion.div>
          </motion.div>

          {/* Text side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
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
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "var(--forest)",
              }}
            >
              Good food,{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>
                delivered
              </span>{" "}
              to you
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://maps.app.goo.gl/tQUgFiwQteX2hpBv9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary ripple-btn"
              >
                <ShoppingBag size={18} />
                <span>Order Online</span>
              </a>
              <a
                href="https://maps.app.goo.gl/tQUgFiwQteX2hpBv9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View on Maps
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
