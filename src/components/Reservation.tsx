"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function Reservation() {
  const { openReserve } = useModal();
  return (
    <section id="reservation" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&fit=crop"
          alt="Restaurant dining"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(44,74,46,0.93) 0%, rgba(26,26,26,0.88) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--gold)]" />
              <span
                className="text-xs font-medium tracking-[0.25em] uppercase"
                style={{ color: "var(--gold)" }}
              >
                Reserve Your Table
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Save your{" "}
              <span
                className="italic"
                style={{
                  background: "linear-gradient(135deg, var(--gold), var(--wood))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                perfect table
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg mb-10 leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem" }}
            >
              Whether it&apos;s a quiet breakfast, a working lunch, or a celebratory
              dinner — secure your seat at The Good Food Cafe and let us take care
              of the rest.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {[
                { icon: Clock,  label: "Hours",    value: "Mon – Sun: 8:00 AM – 10:00 PM" },
                { icon: MapPin, label: "Location", value: "Nature's Basket, 1 MG Road, Bengaluru – 560008" },
                { icon: Phone,  label: "Phone",    value: "+91 80500 50555" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(201,168,76,0.2)", border: "1px solid rgba(201,168,76,0.3)" }}
                  >
                    <item.icon size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p className="text-xs tracking-wide text-white/40 uppercase mb-0.5">{item.label}</p>
                    <p className="text-white/85 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          >
            <div
              className="p-8 lg:p-10 rounded-3xl"
              style={{
                background: "rgba(245,239,224,0.08)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(201,168,76,0.25)",
                boxShadow: "0 40px 100px rgba(0,0,0,0.3)",
              }}
            >
              <div className="text-center mb-8">
                <div
                  className="inline-flex w-16 h-16 rounded-2xl items-center justify-center mb-4"
                  style={{ background: "linear-gradient(135deg, var(--gold) 0%, var(--wood) 100%)" }}
                >
                  <Calendar size={28} color="white" />
                </div>
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Make a Reservation
                </h3>
                <p className="text-white/50 text-sm">Tap below to book via Google Maps</p>
              </div>

              <div className="space-y-4">
                <button
                  type="button"
                  onClick={openReserve}
                  className="btn-gold w-full justify-center ripple-btn flex"
                >
                  <Calendar size={18} />
                  <span>Reserve a Table</span>
                </button>
                <a
                  href="tel:+918050050555"
                  className="btn-outline w-full justify-center text-sm font-medium"
                >
                  <Phone size={16} />
                  <span>Call to Reserve</span>
                </a>
              </div>

              <p className="text-center text-white/30 text-xs mt-6">
                Walk-ins welcome · No reservation fee
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
