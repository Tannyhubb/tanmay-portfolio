"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 60, damping: 20 }
    }
  };

  return (
    <section id="about" className="philosophy">
      <motion.div 
        ref={ref}
        className="philosophy-inner"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.div variants={item}>
          <span className="eyebrow" style={{ marginBottom: '2rem' }}>The Principle</span>
        </motion.div>
        
        <motion.h2 variants={item} className="philosophy-line">
          I don't just write code.
        </motion.h2>
        <motion.h2 variants={item} className="philosophy-line philosophy-line-dim">
          I design systems that scale,
        </motion.h2>
        <motion.h2 variants={item} className="philosophy-line philosophy-line-gold">
          and build products that sell.
        </motion.h2>
      </motion.div>
    </section>
  );
}
