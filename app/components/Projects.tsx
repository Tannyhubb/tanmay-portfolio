"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

function DashboardSkeleton() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', perspective: '1000px' }}>
      {/* Background grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.8 }} />
      
      {/* 3D Floating Glass Panel - Main */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotateX: [0, 2, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '10%', left: '8%', right: '35%', bottom: '25%', background: 'rgba(200,169,110,0.03)', backdropFilter: 'blur(12px)', border: '1px solid rgba(200,169,110,0.15)', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', padding: '1.2rem', display: 'flex', flexDirection: 'column' }}
      >
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(200,169,110,0.8)' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
        </div>
        {/* Animated Bar Chart */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.8rem', height: '100%', flex: 1 }}>
          {[40, 75, 50, 95, 65].map((h, i) => (
            <motion.div key={i} animate={{ height: [`${h}%`, `${h + 10}%`, `${h}%`] }} transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }} style={{ flex: 1, background: 'linear-gradient(to top, rgba(200,169,110,0.1), rgba(200,169,110,0.4))', borderRadius: '4px' }} />
          ))}
        </div>
      </motion.div>

      {/* Foreground Floating Glass Panel */}
      <motion.div 
        animate={{ y: [0, 15, 0], x: [0, -5, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{ position: 'absolute', bottom: '10%', right: '8%', width: '45%', height: '50%', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)', padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }} />
        <div style={{ width: '80%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }} />
        <div style={{ width: '60%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }} />
        
        {/* Scanning Line */}
        <div style={{ marginTop: 'auto', width: '100%', height: '40%', background: 'rgba(255,255,255,0.02)', borderRadius: '4px', position: 'relative', overflow: 'hidden' }}>
          <motion.div animate={{ top: ['0%', '100%', '0%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', left: 0, right: 0, height: '2px', background: '#c8a96e', boxShadow: '0 0 10px #c8a96e' }} />
          {/* Simulated Data stream */}
          <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} style={{ height: '4px', width: '40%', background: 'rgba(200,169,110,0.5)', borderRadius: '2px' }} />
            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} style={{ height: '4px', width: '60%', background: 'rgba(255,255,255,0.3)', borderRadius: '2px' }} />
            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, delay: 1, repeat: Infinity }} style={{ height: '4px', width: '30%', background: 'rgba(255,255,255,0.3)', borderRadius: '2px' }} />
          </div>
        </div>
      </motion.div>
      
      {/* Floating Status Badge */}
      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{ position: 'absolute', top: '15%', right: '15%', background: 'rgba(20,20,20,0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(200,169,110,0.3)', borderRadius: '30px', padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
      >
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c8a96e', boxShadow: '0 0 8px #c8a96e' }} />
        <span style={{ fontSize: '0.6rem', color: '#c8a96e', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>SYSTEM OPTIMAL</span>
      </motion.div>
    </div>
  );
}

function NetworkSkeleton() {
  const nodes = [
    { id: 1, cx: '50%', cy: '50%', r: 12 }, // core
    { id: 2, cx: '20%', cy: '25%', r: 6 },
    { id: 3, cx: '80%', cy: '30%', r: 8 },
    { id: 4, cx: '25%', cy: '75%', r: 7 },
    { id: 5, cx: '75%', cy: '70%', r: 9 },
    { id: 6, cx: '10%', cy: '50%', r: 4 },
    { id: 7, cx: '90%', cy: '60%', r: 5 }
  ];

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient background glow */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: '10%', left: '20%', right: '20%', bottom: '10%', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)', filter: 'blur(30px)' }} />
      
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        {/* Glowing Network Paths */}
        <path d="M 50% 50% L 20% 25% M 50% 50% L 80% 30% M 50% 50% L 25% 75% M 50% 50% L 75% 70% M 20% 25% L 10% 50% M 80% 30% L 90% 60% M 25% 75% L 10% 50% M 75% 70% L 90% 60%" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
        
        {/* Data Pulses on Paths */}
        <motion.path 
           d="M 50% 50% L 20% 25% M 50% 50% L 80% 30% M 50% 50% L 25% 75% M 50% 50% L 75% 70%" 
           stroke="rgba(255,255,255,0.8)" strokeWidth="2" fill="none"
           strokeDasharray="10 150"
           animate={{ strokeDashoffset: [160, 0] }}
           transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path 
           d="M 20% 25% L 10% 50% M 80% 30% L 90% 60% M 25% 75% L 10% 50% M 75% 70% L 90% 60%" 
           stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"
           strokeDasharray="8 100"
           animate={{ strokeDashoffset: [108, 0] }}
           transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 1 }}
        />
        
        {/* Premium Data Nodes */}
        {nodes.map((node, i) => (
          <g key={node.id}>
            {/* Dark glass socket */}
            <circle 
              cx={node.cx} cy={node.cy} r={node.r + 4} 
              fill="rgba(10,10,10,0.8)" 
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
            />
            {/* Glowing core */}
            <circle cx={node.cx} cy={node.cy} r={node.r > 6 ? 3 : 1.5} fill="#fff" />
            
            {/* Soft pulsing aura (much more subtle than expanding rings) */}
            <motion.circle 
              cx={node.cx} cy={node.cy} r={node.r + 12} 
              fill="rgba(255,255,255,0.08)" 
              filter="blur(6px)"
              animate={{ opacity: [0.2, 0.7, 0.2] }} 
              transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }} 
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

function AbstractCard({ color, href, children }: { color: string, href?: string, children: React.ReactNode }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLAnchorElement>(null);

  const Component = href ? motion.a : motion.div;

  return (
    <Component
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      ref={cardRef as any}
      onMouseMove={(e: any) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });

        // Calculate tilt
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
        const rotateY = ((x - centerX) / centerX) * 6;
        setRotate({ x: rotateX, y: rotateY });
      }}
      onMouseLeave={() => {
        setRotate({ x: 0, y: 0 });
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ 
        opacity: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
        rotateX: { duration: 0.4, ease: "easeOut" },
        rotateY: { duration: 0.4, ease: "easeOut" }
      }}
      style={{
        position: "relative", width: "100%", maxWidth: "500px", aspectRatio: "16/10",
        background: "rgba(255,255,255,0.015)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px", padding: "1.5rem",
        display: "flex", flexDirection: "column", gap: "1.5rem",
        overflow: "hidden",
        textDecoration: "none",
        color: "inherit",
        cursor: href ? "pointer" : "default",
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {/* Spotlight Effect */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.04), transparent 80%)`,
        transition: 'background 0.1s ease'
      }} />

      <div style={{ display: "flex", gap: "0.4rem", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "1rem", zIndex: 1 }}>
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: color, opacity: 0.8 }} />
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
      </div>
      <div style={{ flex: 1, position: "relative", display: "flex", flexDirection: "column", zIndex: 1 }}>
        {children}
      </div>
    </Component>
  );
}

export default function Projects() {
  return (
    <div className="projects-container">
      {/* BuildYour.Company */}
      <section className="project-reveal" aria-label="Project: BuildYour.Company">
        <div className="project-grid">
          <motion.div 
            className="project-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="project-title">BuildYour.<br/>Company</h2>
            <p className="project-desc" style={{ color: 'rgba(255,255,255,0.5)' }}>Most founders aren't lazy. They're unclear.</p>
            
            <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.2rem', flexWrap: 'wrap' }}>
              {["Startup Clarity", "Idea Diagnosis", "Blocker Resolution"].map((feature, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                  style={{
                    padding: '0.4rem 1rem',
                    borderRadius: '50px',
                    border: '1px solid rgba(200,169,110,0.2)',
                    color: '#c8a96e',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    background: 'rgba(200,169,110,0.05)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                  }}
                >
                  {feature}
                </motion.span>
              ))}
            </div>

            <p className="project-desc" style={{ marginTop: '1.2rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', maxWidth: '45ch' }}>
              Diagnose your startup before you build more. BYC studies your idea, product, market, and blockers through comprehensive discovery calls—then shows you exactly what to fix next.
            </p>

            <a href="https://buildyour.company" className="project-link" target="_blank" rel="noreferrer" style={{ marginTop: "2rem", display: "inline-block" }}>
              Get Free Diagnosis ↗
            </a>
          </motion.div>
          
          <div className="project-visual-wrapper" style={{ flexDirection: 'column', gap: '1.2rem', alignItems: 'flex-end' }}>
            <AbstractCard color="#c8a96e" href="https://buildyour.company">
              <DashboardSkeleton />
            </AbstractCard>
            <motion.p 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} viewport={{ once: true }}
              className="chapter-meta" style={{ color: "#c8a96e", marginRight: "1rem", letterSpacing: "0.2em" }}
            >
              Founder
            </motion.p>
          </div>
        </div>
      </section>

      {/* IndiaGotStartup */}
      <section className="project-reveal" aria-label="Project: IndiaGotStartup">
        <div className="project-grid">
          <motion.div 
            className="project-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="project-title">IndiaGot<br/>Startup</h2>
            <p className="project-desc" style={{ color: 'rgba(255,255,255,0.5)' }}>India's Startup Ecosystem</p>

            <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.2rem', flexWrap: 'wrap' }}>
              {["Startups", "Investors", "Incubators", "Grants"].map((feature, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                  style={{
                    padding: '0.4rem 1rem',
                    borderRadius: '50px',
                    border: '1px solid rgba(200,169,110,0.2)',
                    color: '#c8a96e',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    background: 'rgba(200,169,110,0.05)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                  }}
                >
                  {feature}
                </motion.span>
              ))}
            </div>

            <p className="project-desc" style={{ marginTop: '1.2rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', maxWidth: '45ch' }}>
              Discover startups, connect with founders, investors & opportunities. The master directory to find innovative companies, Angels, VCs, accelerators, and non-dilutive funding in the ecosystem.
            </p>

            <a href="https://indiagotstartup.com" className="project-link" target="_blank" rel="noreferrer" style={{ marginTop: "2rem", display: "inline-block" }}>
              Enter Ecosystem ↗
            </a>
          </motion.div>
          
          <div className="project-visual-wrapper" style={{ flexDirection: 'column', gap: '1.2rem', alignItems: 'flex-end' }}>
            <AbstractCard color="#ffffff" href="https://indiagotstartup.com">
              <NetworkSkeleton />
            </AbstractCard>
            <motion.p 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} viewport={{ once: true }}
              className="chapter-meta" style={{ color: "#c8a96e", marginRight: "1rem", letterSpacing: "0.2em" }}
            >
              Founder
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
}
