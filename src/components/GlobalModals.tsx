"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar, UtensilsCrossed, Phone, Map } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const RESERVE_OPTIONS = [
  {
    label: "Book on District",
    desc: "Reserve at The Good Food Cafe via District",
    href: "https://www.district.in/dining/bangalore/the-good-food-cafe-by-natures-basket-ulsoor-bangalore",
    bg: "linear-gradient(135deg, #2C4A2E 0%, #3A6140 100%)",
    color: "white",
  },
  {
    label: "Book on Swiggy Dineout",
    desc: "Reserve via Swiggy Dineout",
    href: "https://www.swiggy.com/restaurants/the-good-food-cafe-by-natures-basket-kensington-road-indiranagar-bangalore-973275/dineout",
    bg: "linear-gradient(135deg, #E8572A 0%, #C9401A 100%)",
    color: "white",
  },
  {
    label: "Open in Google Maps",
    desc: "Book directly from the Maps listing",
    href: "https://maps.app.goo.gl/tQUgFiwQteX2hpBv9",
    bg: "rgba(44,74,46,0.08)",
    color: "var(--forest)",
    border: "1.5px solid rgba(44,74,46,0.2)",
  },
  {
    label: "Call to Reserve",
    desc: "+91 80500 50555",
    href: "tel:+918050050555",
    bg: "rgba(44,74,46,0.08)",
    color: "var(--forest)",
    border: "1.5px solid rgba(44,74,46,0.2)",
  },
];

const ORDER_OPTIONS = [
  {
    label: "Order on Swiggy",
    desc: "Fast delivery from Swiggy",
    href: "https://www.swiggy.com/restaurants/the-good-food-cafe-by-natures-basket-kensington-road-indiranagar-bangalore-973275",
    bg: "linear-gradient(135deg, #FC8019 0%, #E06A10 100%)",
    color: "white",
  },
  {
    label: "Order on Zomato",
    desc: "Order from Zomato",
    href: "https://www.zomato.com/bangalore/the-good-food-cafe-by-natures-basket-ulsoor-bangalore/order",
    bg: "linear-gradient(135deg, #E23744 0%, #C72030 100%)",
    color: "white",
  },
];

function OptionButton({
  label,
  desc,
  href,
  bg,
  color,
  border,
}: (typeof RESERVE_OPTIONS)[0]) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl transition-all active:scale-98 hover:opacity-90"
      style={{ background: bg, color, border: border ?? "none" }}
    >
      <div className="flex-1 text-left">
        <p className="font-semibold text-sm" style={{ color }}>
          {label}
        </p>
        <p className="text-xs mt-0.5" style={{ color, opacity: 0.7 }}>
          {desc}
        </p>
      </div>
      <span className="text-lg opacity-60">→</span>
    </a>
  );
}

function Modal({
  open,
  onClose,
  title,
  subtitle,
  options,
  icon: Icon,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  options: typeof RESERVE_OPTIONS;
  icon: React.ElementType;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="w-full sm:max-w-sm mx-auto p-6 rounded-t-3xl sm:rounded-3xl"
            style={{
              background: "var(--cream-light)",
              boxShadow: "0 -20px 60px rgba(0,0,0,0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--forest), var(--olive))" }}
                >
                  <Icon size={18} color="var(--gold)" />
                </div>
                <div>
                  <p
                    className="font-bold text-base"
                    style={{ fontFamily: "var(--font-playfair)", color: "var(--forest)" }}
                  >
                    {title}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {subtitle}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "rgba(44,74,46,0.1)" }}
              >
                <X size={16} style={{ color: "var(--forest)" }} />
              </button>
            </div>

            {/* Divider */}
            <div className="h-px mb-5" style={{ background: "rgba(44,74,46,0.1)" }} />

            {/* Options */}
            <div className="flex flex-col gap-3">
              {options.map((opt) => (
                <OptionButton key={opt.label} {...opt} />
              ))}
            </div>

            {/* Bottom drag handle for mobile */}
            <div
              className="mt-5 mx-auto w-10 h-1 rounded-full sm:hidden"
              style={{ background: "rgba(44,74,46,0.2)" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function GlobalModals() {
  const { modal, close } = useModal();

  return (
    <>
      <Modal
        open={modal === "reserve"}
        onClose={close}
        title="Reserve a Table"
        subtitle="Choose how you'd like to book"
        options={RESERVE_OPTIONS}
        icon={Calendar}
      />
      <Modal
        open={modal === "order"}
        onClose={close}
        title="Order Online"
        subtitle="Pick your preferred delivery platform"
        options={ORDER_OPTIONS}
        icon={UtensilsCrossed}
      />
    </>
  );
}
