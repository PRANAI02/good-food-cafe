"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Calendar, ShoppingBag } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 180]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Title words stagger
      gsap.fromTo(
        ".hero-word",
        { y: 120, opacity: 0, rotateX: 45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.08,
          duration: 1.2,
          ease: "power4.out",
          delay: 0.3,
        }
      );

      // Subtitle
      gsap.fromTo(
        ".hero-sub",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1.0 }
      );

      // Buttons
      gsap.fromTo(
        ".hero-btn",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          delay: 1.3,
        }
      );

      // Floating food items
      gsap.fromTo(
        ".hero-food",
        { scale: 0, opacity: 0, rotation: -15 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          stagger: 0.2,
          duration: 1.4,
          ease: "elastic.out(1, 0.5)",
          delay: 0.8,
        }
      );

      // Scroll-driven scale on food bubbles
      gsap.to(".hero-food", {
        scale: 0.85,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, containerRef);

    // Mouse parallax
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const dx = (clientX / innerWidth - 0.5) * 20;
      const dy = (clientY / innerHeight - 0.5) * 20;
      gsap.to(".parallax-layer-1", { x: dx * 0.6, y: dy * 0.6, duration: 1.2, ease: "power2.out" });
      gsap.to(".parallax-layer-2", { x: dx * 1.2, y: dy * 1.2, duration: 1.2, ease: "power2.out" });
      gsap.to(".parallax-layer-3", { x: dx * 1.8, y: dy * 1.8, duration: 1.2, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div
        ref={bgRef}
        style={{ y: bgY }}
        className="absolute inset-0 scale-110"
      >
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85&fit=crop"
          alt="The Good Food Cafe ambience"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-[var(--forest)] opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(44,74,46,0.7) 0%, rgba(26,26,26,0.5) 50%, rgba(139,105,20,0.3) 100%)",
          }}
        />
      </motion.div>

      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          opacity: 0.5,
        }}
      />

      {/* Floating food images */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {/* Salad bowl - top left */}
        <div
          className="hero-food parallax-layer-3 absolute top-[18%] left-[8%] w-28 h-28 lg:w-40 lg:h-40 rounded-full overflow-hidden floating"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=320&q=80&fit=crop"
            alt="Fresh salad"
            fill
            className="object-cover"
            sizes="160px"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-full ring-2 ring-[rgba(201,168,76,0.4)]" />
        </div>

        {/* Coffee - bottom left */}
        <div
          className="hero-food parallax-layer-2 absolute bottom-[22%] left-[6%] w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden floating-slow"
          style={{
            animationDelay: "1.5s",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=280&q=80&fit=crop"
            alt="Artisan coffee"
            fill
            className="object-cover"
            sizes="128px"
          />
          <div className="absolute inset-0 rounded-full ring-2 ring-[rgba(201,168,76,0.4)]" />
        </div>

        {/* Croissant - top right */}
        <div
          className="hero-food parallax-layer-3 absolute top-[20%] right-[8%] w-28 h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden floating-right"
          style={{
            animationDelay: "0.8s",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&q=80&fit=crop"
            alt="Artisan croissant"
            fill
            className="object-cover"
            sizes="144px"
          />
          <div className="absolute inset-0 rounded-full ring-2 ring-[rgba(201,168,76,0.4)]" />
        </div>

        {/* Pasta - bottom right */}
        <div
          className="hero-food parallax-layer-1 absolute bottom-[25%] right-[5%] w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden floating"
          style={{
            animationDelay: "2s",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=280&q=80&fit=crop"
            alt="Pasta dish"
            fill
            className="object-cover"
            sizes="128px"
          />
          <div className="absolute inset-0 rounded-full ring-2 ring-[rgba(201,168,76,0.4)]" />
        </div>
      </div>

      {/* Hero content */}
      <motion.div
        style={{ opacity }}
        className="relative z-30 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full glass"
          style={{ border: "1px solid rgba(201,168,76,0.4)" }}
        >
          <span
            className="text-xs font-medium tracking-[0.2em] uppercase"
            style={{ color: "var(--gold)" }}
          >
            Nature&apos;s Basket Artisan Pantry
          </span>
          <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
          <span
            className="text-xs font-medium tracking-[0.2em] uppercase"
            style={{ color: "var(--gold)" }}
          >
            MG Road, Bengaluru
          </span>
        </motion.div>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-[1.08] tracking-tight overflow-hidden"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="block overflow-hidden">
            <span className="hero-word inline-block">Where</span>{" "}
            <span className="hero-word inline-block italic" style={{ color: "var(--gold-light)" }}>
              Gourmet
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-word inline-block">Meets</span>{" "}
            <span className="hero-word inline-block">Everyday</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-word inline-block">Comfort</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="hero-sub text-lg lg:text-xl text-white/75 mb-7 max-w-xl mx-auto leading-relaxed font-light"
          style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem" }}
        >
          Fresh ingredients. Artisan recipes. A cafe experience that redefines
          everyday dining.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://maps.app.goo.gl/tQUgFiwQteX2hpBv9"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn btn-gold ripple-btn text-sm font-medium"
          >
            <Calendar size={16} />
            <span>Reserve a Table</span>
          </a>
          <a
            href="https://maps.app.goo.gl/tQUgFiwQteX2hpBv9"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn glass ripple-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white"
            style={{ border: "1.5px solid rgba(255,255,255,0.4)" }}
          >
            <ShoppingBag size={16} />
            <span>Order Online</span>
          </a>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex items-center justify-center gap-8 mt-8"
        >
          {[
            { num: "4.5★", label: "Google Rating" },
            { num: "500+", label: "Happy Customers" },
            { num: "100%", label: "Fresh Ingredients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-2xl font-bold"
                style={{ color: "var(--gold)", fontFamily: "var(--font-playfair)" }}
              >
                {stat.num}
              </p>
              <p className="text-xs text-white/60 tracking-wide mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
