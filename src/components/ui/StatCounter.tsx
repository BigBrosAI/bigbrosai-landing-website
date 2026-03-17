"use client";
import { useCallback, useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: string;
  label: string;
  dark?: boolean;
};

export function StatCounter({ value, label, dark = false }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const match = value.match(/^([\d,.]+)(.*)$/);
  const rawNumber = match ? match[1] : "0";
  const suffix = match ? match[2] : value;

  const end = Number(rawNumber.replace(/,/g, "")) || 0;
  const decimalPlaces = (rawNumber.split(".")[1] || "").length;
  const useGrouping = rawNumber.includes(",");

  const formatValue = useCallback(
    (n: number) => {
      const clamped = Math.min(n, end);

      if (useGrouping) {
        return new Intl.NumberFormat("en-US", {
          maximumFractionDigits: 0,
        }).format(Math.round(clamped));
      }

      if (decimalPlaces > 0) {
        return clamped.toFixed(decimalPlaces);
      }

      return String(Math.round(clamped));
    },
    [end, useGrouping, decimalPlaces]
  );

  const [shown, setShown] = useState(formatValue(0));

  useEffect(() => {
    done.current = false;
    setShown(formatValue(0));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done.current) return;

        done.current = true;
        const steps = 60;
        const duration = 1600;
        const step = end / steps;
        let current = 0;

        timerRef.current = setInterval(() => {
          current += step;

          if (current >= end) {
            setShown(formatValue(end));
            if (timerRef.current) clearInterval(timerRef.current);
            timerRef.current = null;
            return;
          }

          setShown(formatValue(current));
        }, duration / steps);
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [end, formatValue]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-black text-4xl md:text-5xl text-brand-700 leading-none tabular-nums">
        {shown}
        {suffix}
      </div>
      <div className={`font-medium text-sm mt-2 ${dark ? "text-slate-300" : "text-gray-700"}`}>
        {label}
      </div>
    </div>
  );
}
