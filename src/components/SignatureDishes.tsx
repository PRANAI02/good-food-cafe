"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const dishes = [
  {
    name: "Heritage Grain Bowl",
    description:
      "Warm quinoa and farro with roasted root vegetables, avocado crème, toasted pepitas, and a tangy tahini drizzle.",
    tag: "Signature",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=85&fit=crop",
    price: "₹495",
    badge: "Chef's Favourite",
    color: "#2C4A2E",
  },
  {
    name: "Artisan Club Sandwich",
    description:
      "Triple-decker sourdough with slow-roasted chicken, smoked bacon, heirloom tomatoes, baby arugula, and house aioli.",
    tag: "Bestseller",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=85&fit=crop",
    price: "₹425",
    badge: "Most Ordered",
    color: "#8B6914",
  },
  {
    name: "Mezze Platter",
    description:
      "Stone-baked pita, house-made hummus, baba ganoush, olive tapenade, pickled vegetables, and labneh with za'atar.",
    tag: "Sharing",
    img: "https://images.unsplash.com/photo-1561626423-a51b45aef0a1?w=600&q=85&fit=crop",
    price: "₹595",
    badge: "Perfect for Two",
    color: "#6B7B3A",
  },
  {
    name: "Signature Pour Over",
    description:
      "Single-origin Ethiopian Yirgacheffe, slow-drip extracted for 4 minutes, revealing notes of blueberry, jasmine, and dark chocolate.",
    tag: "Beverages",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=85&fit=crop",
    price: "₹295",
    badge: "Barista Craft",
    color: "#2C4A2E",
  },
  {
    name: "Forest Berry Smoothie Bowl",
    description:
      "Blended açaí, wild blueberries, and dragon fruit topped with house granola, fresh fruits, and bee pollen.",
    tag: "Breakfast",
    img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=85&fit=crop",
    price: "₹375",
    badge: "Vegan",
    color: "#6B7B3A",
  },
  {
    name: "Dark Chocolate Fondant",
    description:
      "Warm Valrhona dark chocolate cake with a lava center, served with Madagascan vanilla gelato and micro herbs.",
    tag: "Desserts",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=85&fit=crop",
    price: "₹345",
    badge: "Indulge",
    color: "#8B6914",
  },
];

function DishCard({ dish, index }: { dish: (typeof dishes)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: hovered ? "transform 0.1s ease" : "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
      }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={dish.img}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Badge */}
        <div
          className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg text-[11px] font-semibold text-white tracking-wide"
          style={{
            background: `linear-gradient(135deg, ${dish.color} 0%, ${dish.color}CC 100%)`,
            boxShadow: `0 4px 16px ${dish.color}66, inset 0 1px 0 rgba(255,255,255,0.25)`,
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          {dish.badge}
        </div>

        {/* Tag */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-lg glass-dark text-[11px] font-medium text-white tracking-wide">
          {dish.tag}
        </div>

        {/* Price on image */}
        <div className="absolute bottom-4 right-4">
          <span
            className="text-2xl font-bold"
            style={{ color: "var(--gold-light)", fontFamily: "var(--font-playfair)" }}
          >
            {dish.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className="p-6"
        style={{
          background: "var(--cream-light)",
          borderTop: `3px solid ${dish.color}`,
        }}
      >
        <h3
          className="text-xl font-semibold mb-2"
          style={{ color: "var(--forest)", fontFamily: "var(--font-playfair)" }}
        >
          {dish.name}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {dish.description}
        </p>

        {/* Hover glow line */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="h-0.5 mt-4 rounded-full origin-left"
          style={{ background: `linear-gradient(90deg, ${dish.color}, transparent)` }}
        />
      </div>

      {/* Glow effect */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ boxShadow: `0 0 60px ${dish.color}33` }}
      />
    </motion.div>
  );
}

export default function SignatureDishes() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dishes" className="relative z-0 py-28 lg:py-36">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--cream-light) 0%, rgba(44,74,46,0.04) 50%, var(--cream-light) 100%)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="divider" />
            <span
              className="text-xs font-medium tracking-[0.25em] uppercase"
              style={{ color: "var(--olive)" }}
            >
              Carefully Crafted
            </span>
            <div className="divider" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold mb-5"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--forest)",
            }}
          >
            Signature{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              Creations
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-xl mx-auto"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.2rem",
            }}
          >
            Each dish tells a story — of the farmer who grew it, the hands that
            made it, and the moment you savour it.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {dishes.map((dish, i) => (
            <DishCard key={dish.name} dish={dish} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://maps.app.goo.gl/tQUgFiwQteX2hpBv9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
