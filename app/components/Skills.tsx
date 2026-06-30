"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface BentoItem {
  label: string; size: string;
  big?: boolean;
}

const BENTO: BentoItem[] = [
  { label: "GTM Strategy",           size: "b-6-2", big: true },
  { label: "Funnel Optimization",    size: "b-4-2", big: true },
  { label: "Positioning",            size: "b-2-1" },
  { label: "Messaging",              size: "b-4-1" },
  { label: "Outbound Sales",         size: "b-3-1" },
  { label: "AI Products",            size: "b-4-1" },
  { label: "Community Building",     size: "b-4-2", big: true },
  { label: "Founder Ecosystems",     size: "b-4-2", big: true },
  { label: "Digital Marketing",      size: "b-4-1" },
  { label: "Growth Analytics",       size: "b-4-1" },
  { label: "Product Strategy",       size: "b-4-1" },
  { label: "Social Media Marketing", size: "b-8-1" },
  { label: "HubSpot",                size: "b-2-1" },
  { label: "Meta Ads",               size: "b-2-1" },
  { label: "LinkedIn",               size: "b-2-1" },
];

function BentoCard({ label, size, big }: BentoItem) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      className={`bento-card ${size}`}
      onMouseMove={e => {
        const r = e.currentTarget.getBoundingClientRect();
        setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      data-cg
    >
      <div
        className="c-light"
        style={{
          background: `radial-gradient(220px circle at ${mouse.x}px ${mouse.y}px, rgba(200,169,110,0.12), transparent 60%)`,
        }}
      />
      <span className={big ? "bento-big-label" : "bento-label"}>
        {label}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const headRef = useRef<HTMLDivElement>(null);
  const headVisible = useInView(headRef, { once: true, margin: "-10%" });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridVisible = useInView(gridRef, { once: true, margin: "-10%" });

  return (
    <section id="skills" className="section-wrap" aria-label="Skills and expertise">
      <motion.div
        ref={headRef}
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        animate={headVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        <span className="eyebrow">Skills</span>
        <h2 className="section-heading">Currently Obsessed With</h2>
      </motion.div>

      <motion.div
        ref={gridRef}
        className="bento-grid"
        initial={{ opacity: 0, y: 30 }}
        animate={gridVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.1 }}
        role="list"
        aria-label="Skills"
      >
        {BENTO.map(item => (
          <BentoCard key={item.label} {...item} />
        ))}
      </motion.div>
    </section>
  );
}
