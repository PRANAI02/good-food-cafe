"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&q=85&fit=crop",
    alt: "Plated dish",
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=85&fit=crop",
    alt: "Food spread",
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=600&q=85&fit=crop",
    alt: "Cafe interior",
    aspect: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85&fit=crop",
    alt: "Chef preparation",
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=85&fit=crop",
    alt: "Artisan coffee",
    aspect: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=85&fit=crop",
    alt: "Salad bowl",
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85&fit=crop",
    alt: "Pizza artisan",
    aspect: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=85&fit=crop",
    alt: "Pancakes",
    aspect: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=85&fit=crop",
    alt: "Smoothie bowl",
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=85&fit=crop",
    alt: "Interior ambience",
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=85&fit=crop",
    alt: "Dessert",
    aspect: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?w=600&q=85&fit=crop",
    alt: "Croissants",
    aspect: "normal",
  },
];

const heightMap: Record<string, string> = {
  tall: "h-80",
  wide: "h-52",
  normal: "h-64",
};

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-28 lg:py-36">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, var(--cream-light) 0%, rgba(44,74,46,0.03) 50%, var(--cream-light) 100%)",
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
              Visual Stories
            </span>
            <div className="divider" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--forest)",
            }}
          >
            A Feast for the{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              Eyes
            </span>
          </motion.h2>
        </div>

        {/* Masonry grid */}
        <div className="masonry">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="masonry-item group relative cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setLightbox(photo.src)}
            >
              <div
                className={`relative ${heightMap[photo.aspect]} overflow-hidden rounded-2xl`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(44,74,46,0.6)" }}
                >
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                    <ZoomIn size={20} color="white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lightbox-overlay"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-4xl mx-4 aspect-video rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={lightbox} alt="Gallery" fill className="object-cover" sizes="100vw" />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
