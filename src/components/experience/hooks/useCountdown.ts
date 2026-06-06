"use client";

import { useEffect, useState } from "react";

export type CountdownUnit = {
  label: string;
  value: string;
};

const initialCountdownUnits: CountdownUnit[] = [
  { label: "Days", value: "00" },
  { label: "Hours", value: "00" },
  { label: "Min", value: "00" }
];

export function useCountdown(targetIso: string): CountdownUnit[] {
  const [remaining, setRemaining] = useState(initialCountdownUnits);

  useEffect(() => {
    const interval = window.setInterval(() => setRemaining(getCountdownUnits(targetIso)), 1000);
    return () => window.clearInterval(interval);
  }, [targetIso]);

  return remaining;
}

function getCountdownUnits(targetIso: string): CountdownUnit[] {
  const distance = Math.max(0, new Date(targetIso).getTime() - Date.now());
  const days = Math.floor(distance / 86_400_000);
  const hours = Math.floor((distance % 86_400_000) / 3_600_000);
  const minutes = Math.floor((distance % 3_600_000) / 60_000);

  return [
    { label: "Days", value: String(days).padStart(2, "0") },
    { label: "Hours", value: String(hours).padStart(2, "0") },
    { label: "Min", value: String(minutes).padStart(2, "0") }
  ];
}
