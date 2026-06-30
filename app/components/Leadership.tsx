"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ROLES = [
  {
    role: "Founder",
    title: "BuildYour.Company",
    org: "2024 — Present",
  },
  {
    role: "General Secretary",
    title: "Turing Community",
    org: "SGT University",
  }
];

function LeadershipCard({ role, title, org, index }: { role: string; title: string; org: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, { once: true, margin: "-10%" });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      className="leadership-card"
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
          background: `radial-gradient(300px circle at ${mouse.x}px ${mouse.y}px, rgba(200,169,110,0.08), transparent 50%)`,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <span className="lc-role">{role}</span>
        <h3 className="lc-title">{title}</h3>
      </div>
      <div style={{ position: "relative", zIndex: 1, marginTop: "auto" }}>
        <span className="lc-org">{org}</span>
      </div>
    </motion.div>
  );
}

export default function Leadership() {
  const headRef = useRef<HTMLDivElement>(null);
  const headVisible = useInView(headRef, { once: true, margin: "-10%" });

  return (
    <section className="section-wrap" aria-label="Leadership">
      <motion.div
        ref={headRef}
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        animate={headVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        <span className="eyebrow">Leadership</span>
        <h2 className="section-heading">Beyond the Resume</h2>
        <p className="section-sub">Leading communities and building platforms for others to succeed.</p>
      </motion.div>

      <div className="leadership-grid">
        {ROLES.map((role, i) => (
          <LeadershipCard key={role.title} {...role} index={i} />
        ))}
      </div>
    </section>
  );
}
