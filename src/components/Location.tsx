"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation, ExternalLink, Train } from "lucide-react";
import { useOpenStatus } from "@/lib/useOpenStatus";

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 10:00 PM" },
  { day: "Saturday", time: "8:00 AM – 10:30 PM" },
  { day: "Sunday", time: "9:00 AM – 10:00 PM" },
];

const landmarks = [
  { icon: Train, label: "MG Road Metro", note: "3-min walk" },
  { icon: MapPin, label: "UB City Mall", note: "5-min walk" },
  { icon: MapPin, label: "Cubbon Park", note: "8-min walk" },
];

export default function Location() {
  const openStatus = useOpenStatus();
  return (
    <section id="location" className="relative z-0 py-28 lg:py-36 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ background: "linear-gradient(180deg, var(--cream-light) 0%, rgba(44,74,46,0.04) 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
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

          <h2
            className="text-4xl lg:text-6xl font-bold"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--forest)" }}
          >
            Visit Us in{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              Bengaluru
            </span>
          </h2>

          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-cormorant)", fontSize: "1.15rem", lineHeight: 1.7 }}
          >
            Inside Nature&apos;s Basket Artisan Pantry, 1 MG Road — accessible by metro, just steps from the heart of Bengaluru.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Address */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(44,74,46,0.1)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 30px rgba(44,74,46,0.07)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, var(--forest), var(--olive))" }}
                >
                  <MapPin size={18} color="var(--gold)" />
                </div>
                <div>
                  <p className="font-semibold mb-2" style={{ color: "var(--forest)" }}>
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

            {/* Hours */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(44,74,46,0.1)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 30px rgba(44,74,46,0.07)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, var(--forest), var(--olive))" }}
                >
                  <Clock size={18} color="var(--gold)" />
                </div>
                <p className="font-semibold" style={{ color: "var(--forest)" }}>
                  Opening Hours
                </p>
              </div>
              <div className="space-y-2.5">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between gap-4">
                    <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                      {h.day}
                    </span>
                    <span className="text-sm font-medium whitespace-nowrap" style={{ color: "var(--forest)" }}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              {openStatus && (
                <div
                  className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(44,74,46,0.1)", border: "1px solid rgba(44,74,46,0.2)" }}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      openStatus.isOpen ? "bg-green-500 animate-pulse" : "bg-red-400"
                    }`}
                  />
                  <span className="text-xs font-medium" style={{ color: "var(--forest)" }}>
                    {openStatus.label}
                  </span>
                </div>
              )}
            </div>

            {/* Nearby landmarks */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(44,74,46,0.1)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 30px rgba(44,74,46,0.07)",
              }}
            >
              <p className="font-semibold mb-4" style={{ color: "var(--forest)" }}>
                Nearby Landmarks
              </p>
              <div className="space-y-3">
                {landmarks.map((l) => (
                  <div key={l.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <l.icon size={15} style={{ color: "var(--olive)" }} />
                      <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                        {l.label}
                      </span>
                    </div>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(44,74,46,0.1)", color: "var(--forest)" }}
                    >
                      {l.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://maps.app.goo.gl/tQUgFiwQteX2hpBv9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-medium text-white ripple-btn transition-all hover:opacity-90 active:scale-95"
                style={{ background: "linear-gradient(135deg, var(--forest), var(--olive))" }}
              >
                <Navigation size={15} />
                Directions
              </a>
              <a
                href="tel:+918050050555"
                className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-medium transition-all hover:bg-[var(--forest)] hover:text-white active:scale-95"
                style={{ border: "1.5px solid var(--forest)", color: "var(--forest)" }}
              >
                <Phone size={15} />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div
              className="relative h-[420px] sm:h-[480px] lg:h-full min-h-[440px] rounded-3xl overflow-hidden"
              style={{
                boxShadow: "0 30px 80px rgba(44,74,46,0.18)",
                border: "1px solid rgba(44,74,46,0.1)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9892060506!2d77.59778071527!3d12.97499529085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167c1cf52b59%3A0x6e0f8ddc9c6c3e75!2sNature's%20Basket%20Artisan%20Pantry%2C%20MG%20Road!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "saturate(1.15) contrast(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Good Food Cafe location"
              />

              {/* Map card overlay */}
              <div
                className="absolute bottom-5 left-5 right-5 sm:right-auto p-4 rounded-2xl"
                style={{
                  background: "rgba(245,239,224,0.97)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  maxWidth: "240px",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, var(--forest), var(--olive))" }}
                  >
                    <MapPin size={12} color="var(--gold)" />
                  </div>
                  <p className="text-sm font-semibold" style={{ color: "var(--forest)" }}>
                    The Good Food Cafe
                  </p>
                </div>
                <p className="text-xs mb-2 pl-8" style={{ color: "var(--text-muted)" }}>
                  1 MG Road, Bengaluru
                </p>
                <a
                  href="https://maps.app.goo.gl/tQUgFiwQteX2hpBv9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-medium pl-8 transition-colors"
                  style={{ color: "var(--olive)" }}
                >
                  Open in Maps <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
