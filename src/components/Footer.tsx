"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Share2, Link, Send, MapPin, Clock, Phone, Heart, Check } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { useOpenStatus } from "@/lib/useOpenStatus";

const SITE_URL = "https://good-food-cafe.vercel.app";
const SHARE_TEXT =
  "The Good Food Cafe by Nature's Basket — artisan food & specialty coffee on MG Road, Bengaluru.";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Menu", href: "#dishes" },
  { label: "Reviews", href: "#reviews" },
  { label: "Reserve a Table", href: "#reservation" },
  { label: "Order Online", href: "#order" },
  { label: "Find Us", href: "#location" },
];

export default function Footer() {
  const { openReserve, openOrder } = useModal();
  const [copied, setCopied] = useState(false);
  const openStatus = useOpenStatus();
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: "The Good Food Cafe", text: SHARE_TEXT, url: SITE_URL });
      } catch {
        /* user dismissed the share sheet */
      }
    } else {
      handleCopy();
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SITE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <footer
      className="relative overflow-hidden pt-20 pb-8"
      style={{ background: "linear-gradient(135deg, #0D1A0E 0%, #1A1A0A 100%)" }}
    >
      {/* Accent glow */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, rgba(44,74,46,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #2C4A2E 0%, #6B7B3A 100%)" }}
              >
                <Leaf size={20} color="#C9A84C" />
              </div>
              <div>
                <p className="text-[0.6rem] font-medium tracking-[0.2em] uppercase text-[var(--olive)]">
                  Nature&apos;s Basket
                </p>
                <p
                  className="font-semibold text-sm text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  The Good Food Cafe
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{
                color: "rgba(255,255,255,0.45)",
                fontFamily: "var(--font-cormorant)",
                fontSize: "1rem",
              }}
            >
              Where gourmet meets everyday comfort. Artisan food, specialty coffee,
              and warm hospitality in the heart of MG Road.
            </p>

            {/* Share actions */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share this website"
                title="Share"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Share2 size={16} color="rgba(255,255,255,0.6)" />
              </button>
              <button
                type="button"
                onClick={handleCopy}
                aria-label="Copy website link"
                title={copied ? "Copied!" : "Copy link"}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
                style={{
                  background: copied ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.06)",
                  border: copied
                    ? "1px solid rgba(74,222,128,0.4)"
                    : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {copied ? (
                  <Check size={16} color="#4ade80" />
                ) : (
                  <Link size={16} color="rgba(255,255,255,0.6)" />
                )}
              </button>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${SITE_URL}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
                title="Share on WhatsApp"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Send size={16} color="rgba(255,255,255,0.6)" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p
              className="text-xs font-medium tracking-[0.2em] uppercase mb-6"
              style={{ color: "var(--gold)" }}
            >
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      if (link.label === "Reserve a Table") { openReserve(); return; }
                      if (link.label === "Order Online") { openOrder(); return; }
                      scrollTo(link.href);
                    }}
                    className="text-sm transition-colors text-left"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "white")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p
              className="text-xs font-medium tracking-[0.2em] uppercase mb-6"
              style={{ color: "var(--gold)" }}
            >
              Opening Hours
            </p>
            <div className="space-y-3">
              {[
                { day: "Mon – Fri", time: "8:00 AM – 10:00 PM" },
                { day: "Saturday", time: "8:00 AM – 10:30 PM" },
                { day: "Sunday", time: "9:00 AM – 10:00 PM" },
              ].map((h) => (
                <div key={h.day}>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {h.day}
                  </p>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {h.time}
                  </p>
                </div>
              ))}
              {openStatus && (
                <div
                  className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(44,74,46,0.4)", border: "1px solid rgba(44,74,46,0.6)" }}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      openStatus.isOpen ? "bg-green-400 animate-pulse" : "bg-red-400"
                    }`}
                  />
                  <span
                    className={`text-xs ${openStatus.isOpen ? "text-green-300" : "text-red-300"}`}
                  >
                    {openStatus.label}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-medium tracking-[0.2em] uppercase mb-6"
              style={{ color: "var(--gold)" }}
            >
              Contact & Location
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                  Nature&apos;s Basket Artisan Pantry<br />
                  1 MG Road, Sivanchetti Gardens<br />
                  Bengaluru – 560008
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} style={{ color: "var(--gold)" }} />
                <a
                  href="tel:+918050050555"
                  className="text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "white")}
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")
                  }
                >
                  +91 80500 50555
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} style={{ color: "var(--gold)" }} />
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Open 7 days a week
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/tQUgFiwQteX2hpBv9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-sm font-medium transition-all hover:gap-3"
                style={{ color: "var(--gold)" }}
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-8" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2025 The Good Food Cafe · Nature&apos;s Basket Artisan Pantry · All rights reserved
          </p>
          <p
            className="text-xs flex items-center gap-1"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Made with{" "}
            <Heart size={12} color="var(--gold)" fill="var(--gold)" />{" "}
            for food lovers in Bengaluru
          </p>
        </div>
      </div>
    </footer>
  );
}
