"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone, Navigation, ExternalLink } from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 10:00 PM" },
  { day: "Saturday", time: "8:00 AM – 10:30 PM" },
  { day: "Sunday", time: "9:00 AM – 10:00 PM" },
];

export default function Location() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" ref={ref} className="relative py-28 lg:py-36 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, var(--cream-light) 0%, rgba(44,74,46,0.04) 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
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
              Find Us
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
            Visit Us in{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              Bengaluru
            </span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Address card */}
            <div
              className="p-7 rounded-3xl"
              style={{
                background: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(44,74,46,0.1)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 10px 40px rgba(44,74,46,0.08)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, var(--forest), var(--olive))" }}
                >
                  <MapPin size={20} color="var(--gold)" />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "var(--forest)" }}>
                    Address
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    The Good Food Cafe<br />
                    Nature&apos;s Basket Artisan Pantry<br />
                    1 MG Road, Sivanchetti Gardens<br />
                    Bengaluru, Karnataka – 560008
                  </p>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div
              className="p-7 rounded-3xl"
              style={{
                background: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(44,74,46,0.1)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 10px 40px rgba(44,74,46,0.08)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, var(--forest), var(--olive))" }}
                >
                  <Clock size={20} color="var(--gold)" />
                </div>
                <p className="font-semibold" style={{ color: "var(--forest)" }}>
                  Opening Hours
                </p>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                      {h.day}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--forest)" }}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://maps.app.goo.gl/tQUgFiwQteX2hpBv9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-medium text-white ripple-btn transition-all hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, var(--forest), var(--olive))",
                }}
              >
                <Navigation size={16} />
                Directions
              </a>
              <a
                href="tel:+918040400000"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-medium transition-all hover:bg-[var(--forest)] hover:text-white"
                style={{
                  border: "1.5px solid var(--forest)",
                  color: "var(--forest)",
                }}
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div
              className="relative h-[450px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden"
              style={{
                boxShadow: "0 30px 80px rgba(44,74,46,0.2)",
                border: "1px solid rgba(44,74,46,0.1)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9892060506!2d77.59778071527!3d12.97499529085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167c1cf52b59%3A0x6e0f8ddc9c6c3e75!2sNature's%20Basket%20Artisan%20Pantry%2C%20MG%20Road!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "saturate(1.1) contrast(0.95)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Good Food Cafe location on Google Maps"
              />

              {/* Map overlay card */}
              <div
                className="absolute bottom-5 left-5 p-4 rounded-2xl"
                style={{
                  background: "rgba(245,239,224,0.95)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                }}
              >
                <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--forest)" }}>
                  The Good Food Cafe
                </p>
                <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>
                  MG Road, Bengaluru
                </p>
                <a
                  href="https://maps.app.goo.gl/tQUgFiwQteX2hpBv9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-medium"
                  style={{ color: "var(--olive)" }}
                >
                  Open in Maps <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
