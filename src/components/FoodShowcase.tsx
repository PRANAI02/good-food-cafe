"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const showcase = [
  {
    name: "Morning Ritual",
    sub: "Our hand-crafted pour over, every dawn.",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=90&fit=crop",
    color: "#2C4A2E",
  },
  {
    name: "Garden Fresh",
    sub: "Vegetables harvested within 24 hours of serving.",
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=900&q=90&fit=crop",
    color: "#6B7B3A",
  },
  {
    name: "Artisan Baked",
    sub: "Slow-fermented sourdough, baked every morning.",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=90&fit=crop",
    color: "#8B6914",
  },
  {
    name: "Sweet Indulgence",
    sub: "Valrhona chocolate, handcrafted to perfection.",
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900&q=90&fit=crop",
    color: "#2C4A2E",
  },
];

/* ─── Mobile: simple vertical stack ─── */
function MobileShowcase() {
  return (
    <section className="md:hidden">
      {showcase.map((item, i) => (
        <div
          key={item.name}
          className="relative h-[70vw] min-h-[280px] overflow-hidden"
          style={{ background: "#0D1F0E" }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
          </motion.div>
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${item.color}CC 0%, rgba(0,0,0,0.55) 100%)`,
            }}
          />
          {/* Counter */}
          <div className="absolute top-5 right-5 text-right">
            <span
              className="text-5xl font-bold leading-none opacity-20 select-none text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              0{i + 1}
            </span>
          </div>
          {/* Text */}
          <motion.div
            className="absolute bottom-8 left-6 z-10 max-w-xs"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          >
            <p
              className="text-[11px] tracking-[0.25em] uppercase mb-2"
              style={{ color: "rgba(201,168,76,0.9)" }}
            >
              {item.sub}
            </p>
            <h2
              className="text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {item.name}
            </h2>
            <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-[var(--gold)] to-transparent" />
          </motion.div>
        </div>
      ))}
    </section>
  );
}

/* ─── Desktop: GSAP horizontal pin ─── */
function DesktopShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const items = containerRef.current.querySelectorAll(".showcase-item");
    const totalWidth = (items.length - 1) * 100; // vw units
    const pinDuration = totalWidth * 10;          // px

    containerRef.current.style.height = `${pinDuration + window.innerHeight}px`;

    const ctx = gsap.context(() => {
      gsap.to(wrapperRef.current, {
        x: `-${totalWidth}vw`,
        ease: "none",
        scrollTrigger: {
          // The inner viewport div is already pinned via CSS `sticky`,
          // so GSAP doesn't need its own pin here — adding one causes a
          // rendering glitch where the two pinning mechanisms hand off.
          trigger: containerRef.current,
          start: "top top",
          end: `+=${pinDuration}`,
          scrub: 1.2,
        },
      });

      const step = pinDuration / (items.length - 1);
      items.forEach((item, i) => {
        const img    = item.querySelector(".showcase-img");
        const text   = item.querySelector(".showcase-text");
        const circle = item.querySelector(".showcase-circle");

        if (i > 0) {
          // Scale-only reveal — no opacity:0, no rotationY (Safari 3D causes blank slides)
          gsap.fromTo(img,
            { scale: 1.12 },
            { scale: 1, ease: "power2.out",
              scrollTrigger: {
                trigger: containerRef.current,
                start: `top+=${(i - 0.5) * step} top`,
                end:   `top+=${i * step} top`,
                scrub: 1,
              },
            }
          );
          gsap.fromTo(text,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8,
              scrollTrigger: {
                trigger: containerRef.current,
                start: `top+=${(i - 0.3) * step} top`,
                end:   `top+=${i * step} top`,
                scrub: 1,
              },
            }
          );
        }

        gsap.fromTo(circle,
          { scale: 0 },
          { scale: 1, duration: 0.6, ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top+=${Math.max(0, i - 0.4) * step} top`,
              end:   `top+=${i * step} top`,
              scrub: 1,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative hidden md:block" ref={containerRef}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
          <span
            className="text-xs font-medium tracking-[0.25em] uppercase"
            style={{ color: "var(--gold)" }}
          >
            Scroll to Explore
          </span>
        </div>

        <div ref={wrapperRef} className="flex h-screen" style={{ width: `${showcase.length * 100}vw` }}>
          {showcase.map((item, i) => (
            <div
              key={item.name}
              className="showcase-item relative w-screen h-screen flex-shrink-0 overflow-hidden"
              style={{ background: "#0D1F0E" }}
            >
              <div className="showcase-img absolute inset-0">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={i === 0}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}CC 0%, rgba(0,0,0,0.5) 100%)`,
                  }}
                />
              </div>

              <div className="absolute top-12 right-12 z-10 text-right">
                <span
                  className="text-[5rem] font-bold leading-none opacity-20 select-none"
                  style={{ color: "white", fontFamily: "var(--font-playfair)" }}
                >
                  0{i + 1}
                </span>
                <span className="block text-xs text-white/40 tracking-[0.2em] uppercase -mt-4">
                  / 0{showcase.length}
                </span>
              </div>

              <div
                className="showcase-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/10 pointer-events-none"
                style={{ transform: "translate(-50%, -50%) scale(0)" }}
              />

              <div className="showcase-text absolute bottom-20 left-16 z-10 max-w-lg">
                <p
                  className="text-sm tracking-[0.3em] uppercase mb-4"
                  style={{ color: "rgba(201,168,76,0.9)" }}
                >
                  {item.sub}
                </p>
                <h2
                  className="text-6xl lg:text-8xl font-bold text-white leading-none"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.name}
                </h2>
                <div className="mt-6 h-0.5 w-24 bg-gradient-to-r from-[var(--gold)] to-transparent" />
              </div>

              {i < showcase.length - 1 && (
                <div className="absolute right-8 bottom-1/2 translate-y-1/2 z-10 flex flex-col items-center gap-2 text-white/30">
                  <div className="h-16 w-px bg-gradient-to-b from-transparent to-white/40" />
                  <span className="text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center mt-2">
                    Next
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FoodShowcase() {
  return (
    <>
      <MobileShowcase />
      <DesktopShowcase />
    </>
  );
}
