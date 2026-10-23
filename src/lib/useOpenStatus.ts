"use client";

import { useEffect, useState } from "react";

// Weekly opening hours in IST, minutes since midnight. Index 0 = Sunday.
const WEEKLY_HOURS: Record<number, { open: number; close: number }> = {
  0: { open: 9 * 60, close: 22 * 60 }, // Sunday 9 AM – 10 PM
  1: { open: 8 * 60, close: 22 * 60 },
  2: { open: 8 * 60, close: 22 * 60 },
  3: { open: 8 * 60, close: 22 * 60 },
  4: { open: 8 * 60, close: 22 * 60 },
  5: { open: 8 * 60, close: 22 * 60 }, // Mon–Fri 8 AM – 10 PM
  6: { open: 8 * 60, close: 22 * 60 + 30 }, // Saturday 8 AM – 10:30 PM
};

function formatTime(mins: number) {
  const h24 = Math.floor(mins / 60);
  const m = mins % 60;
  const suffix = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return m === 0 ? `${h12} ${suffix}` : `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
}

export interface OpenStatus {
  isOpen: boolean;
  label: string;
}

// Computed on the client only (returns null during SSR/first paint) so the
// badge never hydrates with a stale server-rendered open/closed state.
export function useOpenStatus(): OpenStatus | null {
  const [status, setStatus] = useState<OpenStatus | null>(null);

  useEffect(() => {
    const compute = () => {
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
        hourCycle: "h23",
      }).formatToParts(new Date());
      const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
      const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
      const minutes = parseInt(get("hour"), 10) * 60 + parseInt(get("minute"), 10);
      const today = WEEKLY_HOURS[day];

      if (minutes >= today.open && minutes < today.close) {
        setStatus({ isOpen: true, label: `Open Now · Closes ${formatTime(today.close)}` });
      } else if (minutes < today.open) {
        setStatus({ isOpen: false, label: `Closed · Opens ${formatTime(today.open)}` });
      } else {
        const tomorrow = WEEKLY_HOURS[(day + 1) % 7];
        setStatus({
          isOpen: false,
          label: `Closed · Opens ${formatTime(tomorrow.open)} tomorrow`,
        });
      }
    };
    compute();
    const id = setInterval(compute, 60_000);
    return () => clearInterval(id);
  }, []);

  return status;
}
