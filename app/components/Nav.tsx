"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { label: "Work",    id: "work"    },
  { label: "Contact", id: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} aria-label="Main navigation">
      <motion.span
        className="nav-mono"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        TB
      </motion.span>
      <motion.div
        className="nav-links"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {LINKS.map(l => (
          <motion.button
            key={l.id}
            className="nav-btn"
            data-cg
            onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            aria-label={`Go to ${l.label}`}
          >
            {l.label}
          </motion.button>
        ))}
      </motion.div>
    </nav>
  );
}
