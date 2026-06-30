"use client";

import { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  sub?: string;
}

interface TimelineGroup {
  year: string;
  entries: TimelineEntry[];
}

const TIMELINE: TimelineGroup[] = [
  {
    year: "2021–22",
    entries: [
      { title: "Richmond Global School", sub: "CBSE Class XII · New Delhi" },
    ],
  },
  {
    year: "2023",
    entries: [
      { title: "B.Tech CSE — SGT University + Kalvium", sub: "Computer Science & Engineering" },
      { title: "General Secretary", sub: "600-student technology body" },
      { title: "District Tennis", sub: "Representative" },
    ],
  },
  {
    year: "2024",
    entries: [
      { title: "Volunteer — FIRST Robotics Competition" },
      { title: "Founded BuildYour.Company", sub: "AI-powered GTM diagnosis · Revenue-generating" },
      { title: "Founded IndiaGotStartup", sub: "India's founder ecosystem platform · Revenue-generating" },
      { title: "NGO Volunteer — Pehchan Street School" },
    ],
  },
  {
    year: "2025",
    entries: [
      { title: "Digital Skills — Accenture", sub: "Certification" },
      { title: "Social Media Marketing — HubSpot Academy", sub: "Certification" },
    ],
  },
];

interface EntryProps {
  entry: TimelineEntry;
  index: number;
}

function Entry({ entry, index }: EntryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`timeline-entry ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <p className="timeline-entry-title">{entry.title}</p>
      {entry.sub && <p className="timeline-entry-sub">{entry.sub}</p>}
    </div>
  );
}

export default function Timeline() {
  const headRef = useRef<HTMLDivElement>(null);
  const [headVisible, setHeadVisible] = useState(false);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setHeadVisible(true); obs.disconnect(); }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="timeline" className="timeline" aria-label="Timeline">
      <div
        ref={headRef}
        className={`timeline-header reveal ${headVisible ? "visible" : ""}`}
      >
        <span className="eyebrow">The journey</span>
        <h2 className="timeline-heading" style={{ marginTop: "0.75rem" }}>
          How it happened
        </h2>
      </div>

      <div className="timeline-track" aria-label="Timeline of events">
        {TIMELINE.map((group) => (
          <div key={group.year}>
            <div className="timeline-year">
              <span className="timeline-year-label">{group.year}</span>
            </div>
            <div className="timeline-entries">
              {group.entries.map((entry, i) => (
                <Entry key={entry.title} entry={entry} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
