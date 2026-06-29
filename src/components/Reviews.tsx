"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya Menon",
    rating: 5,
    date: "March 2025",
    text: "Absolutely stunning cafe! The Heritage Grain Bowl was unlike anything I've had in Bengaluru. The ingredients were so fresh and the presentation was Instagram-worthy. Will definitely be back.",
    avatar: "PM",
    color: "#2C4A2E",
  },
  {
    name: "Rohan Sharma",
    rating: 5,
    date: "January 2025",
    text: "The pour over coffee here is hands down the best in the city. Single origin Ethiopian beans, beautifully extracted. The barista clearly knows their craft. This place is a hidden gem.",
    avatar: "RS",
    color: "#8B6914",
  },
  {
    name: "Ananya Krishnan",
    rating: 5,
    date: "February 2025",
    text: "I love that the ingredients are directly sourced from Nature's Basket — you can truly taste the quality difference. The sourdough toast with avocado smash is my go-to. Highly recommend!",
    avatar: "AK",
    color: "#6B7B3A",
  },
  {
    name: "Vikram Nair",
    rating: 4,
    date: "December 2024",
    text: "The Mezze Platter was incredible — generous portions, authentic flavours. The house hummus is silky smooth. Great spot for a relaxed lunch. The ambience is warm and inviting.",
    avatar: "VN",
    color: "#2C4A2E",
  },
  {
    name: "Sneha Patel",
    rating: 5,
    date: "November 2024",
    text: "A rare find in Bengaluru — a cafe that actually cares about what goes on your plate. The smoothie bowl was vibrant and delicious. Perfect for a healthy breakfast or brunch.",
    avatar: "SP",
    color: "#8B6914",
  },
  {
    name: "Aditya Rao",
    rating: 5,
    date: "October 2024",
    text: "Came for the coffee, stayed for the food. The Artisan Club Sandwich on fresh sourdough was phenomenal. Service was prompt and the staff genuinely passionate about their menu.",
    avatar: "AR",
    color: "#6B7B3A",
  },
  {
    name: "Meera Iyer",
    rating: 5,
    date: "September 2024",
    text: "The dark chocolate fondant completely won my heart. Warm, gooey, with the perfect vanilla gelato pairing. This is the kind of dessert you drive across the city for. A++",
    avatar: "MI",
    color: "#2C4A2E",
  },
  {
    name: "Karan Joshi",
    rating: 4,
    date: "August 2024",
    text: "Location on MG Road is perfect. Tucked inside Nature's Basket so it feels private and curated. Loved the vibe — minimalist, warm, no pretension. Food quality is consistently excellent.",
    avatar: "KJ",
    color: "#8B6914",
  },
];

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div
      className="flex-shrink-0 w-[340px] p-7 rounded-3xl"
      style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(201,168,76,0.2)",
      }}
    >
      {/* Quote icon */}
      <div className="flex items-start justify-between mb-5">
        <Quote size={28} style={{ color: "var(--gold)", opacity: 0.7 }} />
        <div className="flex gap-1">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" />
          ))}
          {Array.from({ length: 5 - review.rating }).map((_, i) => (
            <Star key={i} size={14} color="rgba(201,168,76,0.3)" />
          ))}
        </div>
      </div>

      {/* Review text */}
      <p
        className="text-sm leading-relaxed mb-6"
        style={{
          color: "rgba(255,255,255,0.85)",
          fontFamily: "var(--font-cormorant)",
          fontSize: "1.05rem",
          lineHeight: 1.7,
        }}
      >
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Reviewer */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold"
          style={{ background: review.color }}
        >
          {review.avatar}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{review.name}</p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
            {review.date} · Google Review
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const doubled = [...reviews, ...reviews];

  return (
    <section
      id="reviews"
      ref={ref}
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1A2E1B 0%, #0D1F0E 50%, #1A1A0A 100%)" }}
    >
      {/* Background circles */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--olive) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <span
              className="text-xs font-medium tracking-[0.25em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              What Guests Say
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--gold)]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Loved by{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, var(--gold), var(--wood))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Every Guest
            </span>
          </motion.h2>

          {/* Overall rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.3)",
            }}
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} fill="var(--gold)" color="var(--gold)" />
              ))}
            </div>
            <span className="text-white font-medium">4.5</span>
            <span style={{ color: "rgba(255,255,255,0.5)" }} className="text-sm">
              · 200+ Google Reviews
            </span>
          </motion.div>
        </div>
      </div>

      {/* Carousel - no padding */}
      <div className="overflow-hidden">
        {/* Row 1 */}
        <div className="reviews-track mb-5">
          {doubled.slice(0, 10).map((r, i) => (
            <ReviewCard key={`r1-${i}`} review={r} />
          ))}
        </div>

        {/* Row 2 - reversed */}
        <div
          className="reviews-track"
          style={{ animationDirection: "reverse", animationDuration: "55s" }}
        >
          {doubled.slice(3, 13).map((r, i) => (
            <ReviewCard key={`r2-${i}`} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
