"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const NOW = [
  {
    label: "Building",
    title: "BuildYour.Company",
    detail: "Scaling the GTM diagnostics engine and expanding the execution map capabilities.",
  },
  {
    label: "Learning",
    title: "Advanced Framer Motion",
    detail: "Studying physics-based UI interactions and spring animations for web applications.",
  },
  {
    label: "Reading",
    title: "High Growth Handbook",
    detail: "By Elad Gil. Understanding how to scale companies effectively.",
  }
];

function NowCard({ label, title, detail, index }: { label: string; title: string; detail: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, { once: true, margin: "-10%" });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      className="now-card"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 70, damping: 20, delay: index * 0.1 }}
      onMouseMove={e => {
        const r = e.currentTarget.getBoundingClientRect();
        setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
    >
      <div
        className="c-light"
        style={{
          background: `radial-gradient(280px circle at ${mouse.x}px ${mouse.y}px, rgba(200,169,110,0.1), transparent 50%)`,
        }}
      />
      <div style={{ position: "relative", zIndex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <span className="now-card-label">{label}</span>
        <h3 className="now-card-title">{title}</h3>
      </div>
      <div style={{ position: "relative", zIndex: 1, marginTop: "auto" }}>
        <p className="now-card-detail">{detail}</p>
      </div>
    </motion.div>
  );
}

export default function Now() {
  const headRef = useRef<HTMLDivElement>(null);
  const headVisible = useInView(headRef, { once: true, margin: "-10%" });

  return (
    <section className="section-wrap" aria-label="What I'm doing now">
      <motion.div
        ref={headRef}
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        animate={headVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        <span className="eyebrow">Status</span>
        <h2 className="section-heading">Now</h2>
        <p className="section-sub">What I'm focused on at this exact moment.</p>
      </motion.div>

      <div className="now-grid">
        {NOW.map((item, i) => (
          <NowCard key={item.label} {...item} index={i} />
        ))}
      </div>
    </section>
  );
}
