"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Heart, Award, Coffee, Zap, Sun } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Farm-Fresh Ingredients",
    desc: "Produce sourced from verified organic farms and delivered daily, never frozen.",
    color: "#2C4A2E",
    delay: 0,
  },
  {
    icon: Heart,
    title: "Healthy Choices",
    desc: "Every dish is designed with nutritional balance in mind. Good food should feel good.",
    color: "#6B7B3A",
    delay: 0.08,
  },
  {
    icon: Award,
    title: "Artisan Pantry",
    desc: "Access to Nature's Basket's curated selection of premium global ingredients.",
    color: "#8B6914",
    delay: 0.16,
  },
  {
    icon: Coffee,
    title: "Specialty Coffee",
    desc: "Single-origin beans roasted locally. Pour-overs, cold brew, and classic espresso.",
    color: "#2C4A2E",
    delay: 0.24,
  },
  {
    icon: Zap,
    title: "Swift Service",
    desc: "Quick preparation without compromising quality. Your time is as valuable as your food.",
    color: "#6B7B3A",
    delay: 0.32,
  },
  {
    icon: Sun,
    title: "Warm Ambience",
    desc: "A curated space that invites you to slow down, connect, and truly savour.",
    color: "#8B6914",
    delay: 0.4,
  },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Left accent */}
      <div
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--olive) 0%, transparent 70%)" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: heading */}
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
                The Difference
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold mb-8 leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "var(--forest)",
              }}
            >
              Why guests keep{" "}
              <span
                className="italic"
                style={{ color: "var(--gold)" }}
              >
                coming back
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.2rem",
              }}
            >
              We don&apos;t just serve food. We craft experiences — for the health-
              conscious professional, the weekend explorer, the lunch with friends
              that becomes a memory.
            </motion.p>

            {/* Big stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="mt-12 flex flex-row items-end gap-4 p-6 sm:p-8 rounded-3xl w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, var(--forest) 0%, #1A2E1B 100%)",
                boxShadow: "0 30px 80px rgba(44,74,46,0.25)",
              }}
            >
              <div className="flex-1 sm:flex-none">
                <p
                  className="text-5xl sm:text-6xl font-bold text-white leading-none"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  4.8
                  <span style={{ color: "var(--gold)" }}>★</span>
                </p>
                <p className="text-white/60 text-sm mt-2">Average Google Rating</p>
              </div>
              <div className="h-14 w-px bg-white/20 flex-shrink-0" />
              <div className="flex-1 sm:flex-none">
                <p
                  className="text-4xl font-bold text-white leading-none"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  177
                </p>
                <p className="text-white/60 text-sm mt-2">Google Reviews</p>
              </div>
            </motion.div>
          </div>

          {/* Right: features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: f.delay + 0.2,
                  duration: 0.7,
                  ease: [0.23, 1, 0.32, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="p-6 rounded-3xl group cursor-default"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(44,74,46,0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 30px rgba(44,74,46,0.06)",
                }}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${f.color} 0%, ${f.color}AA 100%)`,
                  }}
                >
                  <f.icon size={20} color="#C9A84C" />
                </motion.div>
                <h3
                  className="font-semibold text-base mb-2"
                  style={{ color: "var(--forest)" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {f.desc}
                </p>

                {/* Hover accent */}
                <div
                  className="h-0.5 mt-4 rounded-full transition-all duration-500 w-0 group-hover:w-full"
                  style={{ background: `linear-gradient(90deg, ${f.color}, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
