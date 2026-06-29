"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
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

export default function FoodShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const items = containerRef.current.querySelectorAll(".showcase-item");
    const totalWidth = (items.length - 1) * 100; // vw units: 300
    const pinDuration = totalWidth * 10; // px: 3000

    // Set section height = pin duration + 1 viewport so there's no dead scroll
    containerRef.current.style.height = `${pinDuration + window.innerHeight}px`;

    const ctx = gsap.context(() => {
      // Horizontal pin + scroll
      gsap.to(wrapperRef.current, {
        x: `-${totalWidth}vw`,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${pinDuration}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Each item animations
      const step = pinDuration / (items.length - 1); // px per slide transition
      items.forEach((item, i) => {
        const img = item.querySelector(".showcase-img");
        const text = item.querySelector(".showcase-text");
        const circle = item.querySelector(".showcase-circle");

        if (i > 0) {
          gsap.fromTo(
            img,
            { scale: 1.3, opacity: 0, rotationY: 15 },
            {
              scale: 1,
              opacity: 1,
              rotationY: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: containerRef.current,
                start: `top+=${(i - 0.5) * step} top`,
                end: `top+=${i * step} top`,
                scrub: 1,
              },
            }
          );

          gsap.fromTo(
            text,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              scrollTrigger: {
                trigger: containerRef.current,
                start: `top+=${(i - 0.3) * step} top`,
                end: `top+=${i * step} top`,
                scrub: 1,
              },
            }
          );
        }

        // Scale circle on reveal
        gsap.fromTo(
          circle,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top+=${Math.max(0, i - 0.4) * step} top`,
              end: `top+=${i * step} top`,
              scrub: 1,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative" ref={containerRef}>
      {/* Background label */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Section header - visible only at very top */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 text-center">
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
              {/* Full BG image */}
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

              {/* Counter */}
              <div className="absolute top-12 right-12 z-10 text-right">
                <span
                  className="text-[5rem] font-bold leading-none opacity-20 select-none"
                  style={{
                    color: "white",
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  0{i + 1}
                </span>
                <span className="block text-xs text-white/40 tracking-[0.2em] uppercase -mt-4">
                  / 0{showcase.length}
                </span>
              </div>

              {/* Center circle decoration */}
              <div
                className="showcase-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/10 pointer-events-none"
                style={{ transform: "translate(-50%, -50%) scale(0)" }}
              />

              {/* Text */}
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

                {/* Line */}
                <div className="mt-6 h-0.5 w-24 bg-gradient-to-r from-[var(--gold)] to-transparent" />
              </div>

              {/* Scroll hint */}
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
