"use client";

import { useEffect, useState } from "react";

// Cycles the root font size; every font size is in rem, so the whole page follows.
const SIZES = [
  { value: "", label: "normal" },
  { value: "lg", label: "large" },
  { value: "xl", label: "extra large" },
];

export default function TextSizeToggle() {
  const [i, setI] = useState(0);

  // The saved size is applied before paint by the script in layout.tsx; sync the label to it.
  useEffect(() => {
    setI(Math.max(0, SIZES.findIndex(s => s.value === (document.documentElement.dataset.text ?? ""))));
  }, []);

  const cycle = () => {
    const next = (i + 1) % SIZES.length, { value } = SIZES[next];
    const root = document.documentElement;
    if (value) root.dataset.text = value; else delete root.dataset.text;
    try { if (value) localStorage.setItem("text", value); else localStorage.removeItem("text"); } catch {}
    setI(next);
  };

  return (
    <button className="btn icon-btn" aria-label={`Text size: ${SIZES[i].label}. Change text size`} title="Text size" onClick={cycle}>
      Aa
    </button>
  );
}
