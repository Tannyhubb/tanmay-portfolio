"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CATEGORIES = [
  {
    title: "Education",
    items: [
      {
        year: "2026 — Present",
        title: "B.Tech Computer Science Engineering",
        sub: "HT University · Artificial Intelligence & Future Technologies (AIFT) in collaboration with Calvium",
      },
      {
        year: "2023 — 2025",
        title: "High School (PCM)",
        sub: "Richmond Global School",
      },
      {
        year: "2023",
        title: "Class 10",
        sub: "Richmond Global School",
      },
    ],
  },
  {
    title: "Experience & Community",
    items: [
      {
        year: "2024",
        title: "Judge Assistant (National Level)",
        sub: "FIRST Robotics Competition",
      },
      {
        year: "2026",
        title: "NGO Volunteer",
        sub: "Pehchaan Street School",
      },
    ],
  },
  {
    title: "Sports",
    items: [
      {
        year: "2022",
        title: "District Tennis Player",
        sub: "Representative",
      },
    ],
  },
];

function CategoryBlock({ cat, index }: { cat: typeof CATEGORIES[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      className="jcat"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 70, damping: 20, delay: index * 0.1 }}
    >
      <h3 className="jcat-heading">{cat.title}</h3>
      <div className="jcat-items">
        {cat.items.map((item) => (
          <div key={item.title} className="jcat-item">
            <span className="jcat-year">{item.year}</span>
            <div>
              <span className="jcat-title">{item.title}</span>
              {item.sub && <span className="jcat-sub">{item.sub}</span>}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Journey() {
  const headRef = useRef<HTMLDivElement>(null);
  const headVisible = useInView(headRef, { once: true, margin: "-10%" });

  return (
    <section id="journey" className="section-wrap" aria-label="Journey">
      <motion.div
        ref={headRef}
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        animate={headVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        <span className="eyebrow">Timeline</span>
        <h2 className="section-heading">The Journey So Far</h2>
      </motion.div>

      <div className="journey-categories">
        {CATEGORIES.map((cat, i) => (
          <CategoryBlock key={cat.title} cat={cat} index={i} />
        ))}
      </div>
    </section>
  );
}
