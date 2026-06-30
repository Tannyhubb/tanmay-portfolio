"use client";

import { useState } from "react";
import { useReveal } from "@/app/hooks";

export default function About() {
  const [eyebrowRef, eyebrowVisible] = useReveal();
  const [bioRef, bioVisible] = useReveal();
  const [statsRef, statsVisible] = useReveal();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -7, y: dx * 9 });
  }

  function onMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <section id="about" className="about" aria-label="About">
      <div className="about-grid">
        {/* ── Photo column ── */}
        <div className="about-photo-col">
          <div
            className="about-photo-card glass"
            data-cursor-grow
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
              transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
            aria-label="Photo of Tanmay Bhardwaj"
            role="img"
          >
            {/*
              TO ADD YOUR PHOTO:
              Replace the placeholder below with:
              <Image src="/photo.jpg" fill alt="Tanmay Bhardwaj" style={{ objectFit: "cover" }} />
              and place photo.jpg in /public/
            */}
            <div className="about-photo-placeholder">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                aria-hidden
              >
                <circle cx="12" cy="9" r="4.5" />
                <path d="M3.5 21c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5" />
              </svg>
            </div>
          </div>
          <p className="about-photo-label">New Delhi, India</p>
        </div>

        {/* ── Text column ── */}
        <div className="about-text-col">
          <div
            ref={eyebrowRef as React.RefObject<HTMLDivElement>}
            className={`reveal ${eyebrowVisible ? "visible" : ""}`}
          >
            <span className="eyebrow">Who I am</span>
          </div>

          <div
            ref={bioRef as React.RefObject<HTMLDivElement>}
            className={`reveal ${bioVisible ? "visible" : ""}`}
            style={{ transitionDelay: "90ms" }}
          >
            <p className="about-bio">
              New Delhi-based founder working at the intersection of GTM strategy
              and technology. I started with a simple belief: most products don't
              fail because of engineering — they fail because of go-to-market.
              Everything I build is an attempt to fix that.
            </p>
            <p className="about-bio" style={{ marginTop: "1.1rem" }}>
              At 18, while most people were figuring out career paths, I was
              building revenue-generating companies. Not side projects. Real
              businesses with real customers paying real money.
            </p>
          </div>

          <div
            ref={statsRef as React.RefObject<HTMLDivElement>}
            className={`about-stats reveal ${statsVisible ? "visible" : ""}`}
            style={{ transitionDelay: "180ms" }}
          >
            <div className="stat">
              <span className="stat-number">02</span>
              <span className="stat-label">Companies Founded</span>
            </div>
            <div className="stat-divider" aria-hidden />
            <div className="stat">
              <span className="stat-number">₹+</span>
              <span className="stat-label">Revenue Generating</span>
            </div>
            <div className="stat-divider" aria-hidden />
            <div className="stat">
              <span className="stat-number">18</span>
              <span className="stat-label">Age When Started</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
