"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    const dotEl  = dot  as HTMLDivElement;
    const ringEl = ring as HTMLDivElement;

    let mx = -100, my = -100, rx = -100, ry = -100, raf: number;
    dotEl.style.transform  = `translate(${mx}px,${my}px)`;
    ringEl.style.transform = `translate(${rx}px,${ry}px)`;

    function onMove(e: MouseEvent) {
      mx = e.clientX; my = e.clientY;
      dotEl.style.transform = `translate(${mx}px,${my}px)`;
    }
    function loop() {
      rx += (mx - rx) * 0.10; ry += (my - ry) * 0.10;
      ringEl.style.transform = `translate(${rx}px,${ry}px)`;
      raf = requestAnimationFrame(loop);
    }
    window.addEventListener("mousemove", onMove);
    loop();

    function grow()   { ringEl.classList.add("grow"); }
    function shrink() { ringEl.classList.remove("grow"); }
    function attach() {
      document.querySelectorAll<HTMLElement>("[data-cg]").forEach(el => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });
    }
    attach();
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  );
}
