"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Leaf, Heart, Award, Coffee } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Farm to Table",
    text: "Every ingredient is sourced from trusted farmers and artisan producers, arriving fresh daily.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    text: "Our chefs craft each dish with the same care and passion that Nature's Basket brings to its products.",
  },
  {
    icon: Award,
    title: "Artisan Quality",
    text: "Inspired by the finest European patisseries and modern health-forward cuisine.",
  },
  {
    icon: Coffee,
    title: "Premium Coffee",
    text: "Specialty single-origin beans, expertly pulled by our trained baristas every morning.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="about" ref={ref} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at right, var(--forest) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Top tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="divider" />
          <span
            className="text-xs font-medium tracking-[0.25em] uppercase"
            style={{ color: "var(--olive)" }}
          >
            Our Story
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text side */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold mb-8 leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "var(--forest)",
              }}
            >
              A sanctuary for{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>
                conscious
              </span>{" "}
              eaters
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg leading-relaxed mb-6"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.2rem",
              }}
            >
              Nestled within Nature&apos;s Basket Artisan Pantry on the iconic MG Road,
              The Good Food Cafe is more than a meal — it&apos;s an experience. Born
              from a simple belief: that everyday food should be extraordinary.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base leading-relaxed mb-10"
              style={{ color: "var(--text-muted)" }}
            >
              We source the finest seasonal produce, artisan cheeses, cold-pressed
              oils, and specialty grains — the same ingredients that line the shelves
              of Nature&apos;s Basket — and transform them into dishes that nourish both
              body and soul. From our slow-roasted grain bowls to single-origin pour-overs,
              every bite and every sip is intentional.
            </motion.p>

            {/* Value grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-5"
            >
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="p-5 rounded-2xl"
                  style={{
                    background: "rgba(44,74,46,0.06)",
                    border: "1px solid rgba(44,74,46,0.12)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                    style={{
                      background: "linear-gradient(135deg, var(--forest), var(--olive))",
                    }}
                  >
                    <v.icon size={16} color="#C9A84C" />
                  </div>
                  <h3
                    className="font-semibold text-sm mb-1"
                    style={{ color: "var(--forest)" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {v.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            {/* Main large image */}
            <div
              className="relative h-[500px] rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 40px 100px rgba(44,74,46,0.2)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=85&fit=crop"
                alt="The Good Food Cafe interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom right, transparent 50%, rgba(44,74,46,0.3) 100%)",
                }}
              />
            </div>

            {/* Floating card - ingredients */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-8 p-5 rounded-2xl glass-cream"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
            >
              <div className="relative w-[140px] h-[90px] rounded-xl overflow-hidden mb-3">
                <Image
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=200&q=80&fit=crop"
                  alt="Fresh ingredients"
                  fill
                  className="object-cover"
                  sizes="140px"
                />
              </div>
              <p className="text-xs font-semibold" style={{ color: "var(--forest)" }}>
                Fresh Daily
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                Farm-sourced ingredients
              </p>
            </motion.div>

            {/* Badge */}
            <div
              className="absolute -top-5 -right-5 w-24 h-24 rounded-full flex flex-col items-center justify-center text-center"
              style={{
                background: "linear-gradient(135deg, var(--gold) 0%, var(--wood) 100%)",
                boxShadow: "0 15px 40px rgba(201,168,76,0.4)",
              }}
            >
              <span className="text-white text-lg font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                2019
              </span>
              <span className="text-white/80 text-[10px] tracking-wide">Est.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
