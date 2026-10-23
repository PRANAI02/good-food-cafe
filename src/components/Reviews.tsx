"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, BadgeCheck } from "lucide-react";

const reviews = [
  {
    name: "Priya Menon",
    rating: 5,
    date: "March 2025",
    text: "The Heritage Grain Bowl was unlike anything I've had in Bengaluru. Packed with quinoa, roasted veggies, and the most incredible tahini dressing. Everything tasted so fresh — you can tell the ingredients come straight from Nature's Basket shelves. Will definitely be back.",
    avatar: "PM",
    color: "#2C4A2E",
    dish: "Heritage Grain Bowl",
  },
  {
    name: "Rohan Sharma",
    rating: 5,
    date: "January 2025",
    text: "The pour-over coffee here is hands down the best in the city. Single origin Ethiopian beans, beautifully extracted. The barista clearly knows their craft. Paired it with the sourdough avocado toast — phenomenal combination. This place is a hidden gem on MG Road.",
    avatar: "RS",
    color: "#8B6914",
    dish: "Pour Over Coffee",
  },
  {
    name: "Ananya Krishnan",
    rating: 5,
    date: "February 2025",
    text: "I love that you can actually taste the quality difference here. The avocado toast on house-baked sourdough is simple but perfect — crunchy, creamy, perfectly seasoned. Staff was warm and genuinely knowledgeable about the menu. My new go-to cafe in Bengaluru.",
    avatar: "AK",
    color: "#6B7B3A",
    dish: "Avocado Toast",
  },
  {
    name: "Vikram Nair",
    rating: 5,
    date: "December 2024",
    text: "Came for the Mezze Platter with friends and was blown away. Generous portions, authentic hummus, beautiful baba ganoush, warm pita. The house-made labneh was silky smooth. Great spot for a relaxed lunch. The ambience is warm and unpretentious — exactly what MG Road needed.",
    avatar: "VN",
    color: "#2C4A2E",
    dish: "Mezze Platter",
  },
  {
    name: "Sneha Patel",
    rating: 5,
    date: "November 2024",
    text: "A rare find in Bengaluru — a cafe that actually cares about what goes on your plate. The smoothie bowl was vibrant and delicious, loaded with real fruit and zero artificial sweetness. Perfect for a healthy breakfast. The place has a calm, curated energy that I love.",
    avatar: "SP",
    color: "#8B6914",
    dish: "Smoothie Bowl",
  },
  {
    name: "Aditya Rao",
    rating: 5,
    date: "October 2024",
    text: "Came for the Artisan Club Sandwich and left converted. The sourdough bread is incredible — you can taste that it's slow-fermented. The fillings were fresh and generous. Tucked inside Nature's Basket it feels private and curated. Food quality is consistently excellent.",
    avatar: "AR",
    color: "#6B7B3A",
    dish: "Artisan Club Sandwich",
  },
  {
    name: "Meera Iyer",
    rating: 5,
    date: "September 2024",
    text: "The dark chocolate fondant completely won my heart. Warm, gooey, with the perfect vanilla gelato pairing — and it's made with Valrhona chocolate which you can genuinely taste. This is the kind of dessert you drive across the city for. A++",
    avatar: "MI",
    color: "#2C4A2E",
    dish: "Dark Chocolate Fondant",
  },
  {
    name: "Karan Joshi",
    rating: 5,
    date: "August 2024",
    text: "Location on MG Road is perfect. Tucked inside Nature's Basket so it feels private and curated. Loved the vibe — minimalist, warm, no pretension. The cold brew latte was exceptional, and the staff suggested the grain bowl pairing which was spot on. My new regular.",
    avatar: "KJ",
    color: "#8B6914",
    dish: "Cold Brew Latte",
  },
  {
    name: "Preethi Rajan",
    rating: 5,
    date: "July 2024",
    text: "Everything here feels intentional — from the menu design to the plating to the music. The barista made the best flat white I've had outside of specialty cafes in Bombay. The overnight oats bowl was filling and actually satisfying. Brilliant place, will keep coming back.",
    avatar: "PR",
    color: "#6B7B3A",
    dish: "Specialty Flat White",
  },
  {
    name: "Siddharth M",
    rating: 4,
    date: "June 2024",
    text: "Great working lunch spot. Quiet enough to focus, beautiful enough to feel you're treating yourself. The vegan Buddha bowl was filling and full of flavour — not the bland health food you usually expect. Slightly long wait times during lunch rush but absolutely worth it.",
    avatar: "SM",
    color: "#2C4A2E",
    dish: "Vegan Buddha Bowl",
  },
];

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div
      className="flex-shrink-0 w-[340px] sm:w-[360px] p-7 rounded-3xl flex flex-col gap-4"
      style={{
        background: "rgba(255,255,255,0.07)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(201,168,76,0.2)",
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="flex gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} size={13} fill="var(--gold)" color="var(--gold)" />
          ))}
          {Array.from({ length: 5 - review.rating }).map((_, i) => (
            <Star key={i} size={13} color="rgba(201,168,76,0.3)" />
          ))}
        </div>
        <Quote size={22} style={{ color: "var(--gold)", opacity: 0.5 }} />
      </div>

      {/* Dish tag */}
      <span
        className="inline-flex self-start text-[10px] font-medium tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
        style={{
          background: `${review.color}30`,
          color: "rgba(201,168,76,0.9)",
          border: "1px solid rgba(201,168,76,0.2)",
        }}
      >
        {review.dish}
      </span>

      {/* Review text */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{
          color: "rgba(255,255,255,0.82)",
          fontFamily: "var(--font-cormorant)",
          fontSize: "1.02rem",
          lineHeight: 1.75,
        }}
      >
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Reviewer */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0"
            style={{ background: review.color }}
          >
            {review.avatar}
          </div>
          <div>
            <p className="text-sm font-medium text-white leading-tight">{review.name}</p>
            <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              {review.date}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1" style={{ color: "rgba(201,168,76,0.7)" }}>
          <BadgeCheck size={14} />
          <span className="text-[10px] tracking-wide">Google</span>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const doubled = [...reviews, ...reviews];

  return (
    <section
      id="reviews"
      ref={ref}
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1A2E1B 0%, #0D1F0E 50%, #1A1A0A 100%)" }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--olive) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
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

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 px-6 sm:px-8 py-4 rounded-2xl"
            style={{
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.25)",
            }}
          >
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex gap-1 mb-1">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={18} fill="var(--gold)" color="var(--gold)" />
                ))}
              </div>
              <span className="text-white font-semibold text-lg">4.8 / 5</span>
            </div>
            <div className="hidden sm:block h-10 w-px bg-white/10" />
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-white font-semibold text-lg">177</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                Verified Google Reviews
              </span>
            </div>
            <div className="hidden sm:block h-10 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <BadgeCheck size={20} style={{ color: "var(--gold)" }} />
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                Google Verified
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousels — full-width, no padding */}
      <div className="overflow-hidden">
        <div className="reviews-track mb-5">
          {doubled.slice(0, 14).map((r, i) => (
            <ReviewCard key={`r1-${i}`} review={r} />
          ))}
        </div>
        <div
          className="reviews-track"
          style={{ animationDirection: "reverse", animationDuration: "60s" }}
        >
          {doubled.slice(4, 18).map((r, i) => (
            <ReviewCard key={`r2-${i}`} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
