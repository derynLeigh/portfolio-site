"use client";

import { useEffect, useRef } from "react";

// Orbiting skill chips plus a core that leans toward the cursor.
export default function Orbit({ skills }: { skills: string[] }) {
  const orbit = useRef<HTMLDivElement>(null);
  const core = useRef<HTMLDivElement>(null);
  const chips = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const o = orbit.current!, c = core.current!;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let t = 0, frame = 0;

    const tick = () => {
      const R = o.offsetWidth / 2;
      chips.current.forEach((chip, k) => {
        if (!chip) return;
        const outer = k % 2 === 0, r = outer ? R : R * .64;
        const a = (k / skills.length) * Math.PI * 2 + t * (outer ? 1 : -1.4);
        chip.style.transform = `translate(calc(${Math.cos(a) * r}px - 50%), calc(${Math.sin(a) * r}px - 50%))`;
      });
      if (!still) { t += .0025; frame = requestAnimationFrame(tick); }
    };
    tick();

    const lean = (e: PointerEvent) => {
      const b = o.getBoundingClientRect();
      const dx = e.clientX - (b.left + b.width / 2), dy = e.clientY - (b.top + b.height / 2);
      const d = Math.hypot(dx, dy) || 1, m = Math.min(d / 12, b.width * .06);
      c.style.transform = `translate(${dx / d * m}px, ${dy / d * m}px)`;
    };
    addEventListener("pointermove", lean);

    return () => { cancelAnimationFrame(frame); removeEventListener("pointermove", lean); };
  }, [skills]);

  return (
    <div className="orbit" ref={orbit} aria-hidden="true">
      <div className="ring" /><div className="ring r2" /><div className="ring r3" />
      <div className="core" ref={core} />
      {skills.map((s, k) => (
        <span key={s} className="chip" ref={el => { chips.current[k] = el; }}>{s}</span>
      ))}
    </div>
  );
}
