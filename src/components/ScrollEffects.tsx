"use client";

import { useEffect } from "react";

// Fades in `.reveal` elements on scroll and highlights the nav link for the
// section in view. Renders nothing.
export default function ScrollEffects() {
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add("in")),
      { threshold: .12 },
    );
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));

    const links = [...document.querySelectorAll(".links a")];
    const spy = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
    }), { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("section[id]").forEach(s => spy.observe(s));

    return () => { io.disconnect(); spy.disconnect(); };
  }, []);

  return null;
}
