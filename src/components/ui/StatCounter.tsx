"use client";
import { useEffect, useRef, useState } from "react";

export function StatCounter({ value, label, dark = false }: { value: string; label: string; dark?: boolean }) {
  const [shown, setShown] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  const match = value.match(/^([\d.]+)(.*)$/);
  const end = match ? parseFloat(match[1]) : 0;
  const sfx = match ? match[2] : value;

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const steps = 60; const dur = 1600; const step = end / steps;
        let cur = 0;
        const iv = setInterval(() => {
          cur += step;
          if (cur >= end) { setShown(end % 1 ? end.toFixed(1) : String(Math.round(end))); clearInterval(iv); }
          else setShown(cur % 1 ? cur.toFixed(1) : String(Math.round(cur)));
        }, dur / steps);
      }
    }, { threshold: 0.6 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-black text-4xl md:text-5xl text-brand-700 leading-none tabular-nums">{shown}{sfx}</div>
      <div className={`font-medium text-sm mt-2 ${dark ? "text-slate-300" : "text-gray-700"}`}>{label}</div>
    </div>
  );
}
