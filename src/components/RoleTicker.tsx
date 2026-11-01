"use client";

import { useEffect, useRef } from "react";

const ROW = 44;

// Rotating role chip. The last role repeats the first, so after reaching it
// we jump back to the top with transitions off and the loop looks seamless.
export default function RoleTicker({ roles }: { roles: string[] }) {
  const ul = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = ul.current!;
    let i = 0;
    let reset: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      i++;
      el.style.transform = `translateY(${-ROW * i}px)`;
      if (i === roles.length - 1) reset = setTimeout(() => {
        el.style.transition = "none"; i = 0; el.style.transform = "none";
        requestAnimationFrame(() => requestAnimationFrame(() => (el.style.transition = "")));
      }, 650);
    }, 2200);
    return () => { clearInterval(id); clearTimeout(reset); };
  }, [roles.length]);

  return (
    <div className="roles" aria-live="polite">
      <ul ref={ul}>{roles.map((r, k) => <li key={k}>{r}</li>)}</ul>
    </div>
  );
}
