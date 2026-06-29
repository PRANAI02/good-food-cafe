"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#dishes" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Reserve", href: "#reservation" },
  { label: "Location", href: "#location" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) {
          setActiveLink(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "glass-cream shadow-[0_4px_40px_rgba(44,74,46,0.12)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #2C4A2E 0%, #6B7B3A 100%)" }}
            >
              <Leaf size={18} color="#C9A84C" />
            </div>
            <div className="leading-none">
              <p
                className="text-[0.65rem] font-medium tracking-[0.15em] uppercase"
                style={{ color: "var(--olive)" }}
              >
                Nature&apos;s Basket
              </p>
              <p
                className="font-semibold text-sm tracking-wide"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--forest)",
                }}
              >
                The Good Food Cafe
              </p>
            </div>
          </motion.button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`nav-link text-sm font-medium transition-colors duration-300 ${
                    activeLink === link.href.replace("#", "")
                      ? "text-[var(--forest)]"
                      : "text-[var(--dark-mid)] hover:text-[var(--forest)]"
                  } ${activeLink === link.href.replace("#", "") ? "active" : ""}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://maps.app.goo.gl/tQUgFiwQteX2hpBv9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary ripple-btn text-sm py-2.5 px-5"
            >
              <span>Reserve a Table</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl"
            style={{ color: "var(--forest)" }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer — conditionally mounted so framer-motion initial state fires reliably */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[99] lg:hidden"
            style={{
              background: "rgba(245, 239, 224, 0.97)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="flex flex-col h-full px-8 pt-24 pb-12">
              <ul className="space-y-5 flex-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.055,
                      duration: 0.4,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-3xl font-medium w-full text-left"
                      style={{
                        fontFamily: "var(--font-playfair)",
                        color: "var(--forest)",
                      }}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.055 + 0.05, duration: 0.4 }}
                className="space-y-3"
              >
                <a
                  href="https://maps.app.goo.gl/tQUgFiwQteX2hpBv9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center block text-center"
                >
                  Reserve a Table
                </a>
                <a
                  href="https://maps.app.goo.gl/tQUgFiwQteX2hpBv9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center block text-center"
                >
                  Order Online
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
