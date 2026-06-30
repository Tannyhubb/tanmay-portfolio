"use client";
import { motion } from "framer-motion";

function EducationTimeline() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '1000px', margin: '0 auto', padding: "8rem var(--pad)" }}
    >
      <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c8a96e', marginBottom: '4rem', textAlign: 'center' }}>
        01. Education
      </h2>

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '6rem', width: '100%', maxWidth: '700px', paddingLeft: '2.5rem', paddingRight: '1rem' }}>
        


        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          style={{ position: 'relative', textAlign: 'left' }}
        >
          {/* Animated Connector Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            style={{ 
              position: 'absolute', left: '-2.5rem', marginLeft: '14px', top: '14px', bottom: 'calc(-6rem - 14px)', width: '2px', 
              background: 'linear-gradient(to bottom, #c8a96e 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
              transformOrigin: 'top'
            }} 
          />
          <div style={{ position: 'absolute', left: '-2.5rem', top: '14px', width: '10px', height: '10px', borderRadius: '50%', background: '#c8a96e', marginLeft: '10px' }} />
          <span className="chapter-meta" style={{ display: 'block', marginBottom: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>2025</span>
          <h3 className="chapter-title" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: '-0.02em' }}>
            <a href="https://www.google.com/search?q=Richmond+Global+School" target="_blank" rel="noopener noreferrer" className="knowledge-link">
              Richmond Global School
            </a>
          </h3>
          <p className="chapter-desc" style={{ marginTop: '0.8rem', color: 'rgba(255,255,255,0.5)', maxWidth: '50ch', lineHeight: 1.5 }}>
            Class 12 (PCM). Learned how to reverse-engineer hard problems.
          </p>
        </motion.div>

        {/* Milestone 2 */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          style={{ position: 'relative', textAlign: 'left' }}
        >
          <div style={{ position: 'absolute', left: '-2.5rem', top: '14px', width: '10px', height: '10px', borderRadius: '50%', background: '#fff', marginLeft: '10px' }} />
          <span className="chapter-meta" style={{ display: 'block', marginBottom: '0.8rem', color: '#c8a96e' }}>Started 2026</span>
          <h3 className="chapter-title" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#fff", letterSpacing: '-0.03em' }}>
            <a href="https://sgtuniversity.ac.in/" target="_blank" rel="noopener noreferrer" className="knowledge-link">
              SGT University
            </a>
          </h3>
          <p className="chapter-desc" style={{ marginTop: '0.8rem', color: 'rgba(255,255,255,0.5)', maxWidth: '50ch', lineHeight: 1.5 }}>
            B.Tech Artificial Intelligence &amp; Digital Technologies <span style={{ fontSize: '0.9em', color: 'rgba(255,255,255,0.4)' }}>(with <a href="https://kalvium.com/" target="_blank" rel="noopener noreferrer" className="knowledge-link" style={{ color: '#c8a96e' }}>Kalvium</a>)</span>.<br/>
            Figuring out how to actually ship AI products, not just talk about them.
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
}

function CommunityTimeline() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '1000px', margin: '0 auto', padding: "8rem var(--pad)" }}
    >
      <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c8a96e', marginBottom: '4rem', textAlign: 'center' }}>
        02. Community &amp; Volunteering
      </h2>

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '5rem', width: '100%', maxWidth: '700px', paddingLeft: '2.5rem', paddingRight: '1rem' }}>
        


        {/* Milestone 1 */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          style={{ position: 'relative', textAlign: 'left' }}
        >
          {/* Animated Connector Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            style={{ 
              position: 'absolute', left: '-2.5rem', marginLeft: '14px', top: '14px', bottom: 'calc(-5rem - 14px)', width: '2px', 
              background: 'linear-gradient(to bottom, rgba(200,169,110,0.5) 0%, rgba(255,255,255,0.1) 100%)',
              transformOrigin: 'top'
            }} 
          />
          <div style={{ position: 'absolute', left: '-2.5rem', top: '14px', width: '8px', height: '8px', borderRadius: '50%', background: '#c8a96e', marginLeft: '11px' }} />
          <h3 className="chapter-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            <a href="https://pehchaanstreetschool.org/" target="_blank" rel="noopener noreferrer" className="knowledge-link">
              Pehchaan Street School
            </a>
          </h3>
          <span className="chapter-meta" style={{ display: 'block', color: 'rgba(255,255,255,0.6)' }}>NGO Volunteer</span>
          <p className="chapter-desc" style={{ marginTop: '0.8rem', color: 'rgba(255,255,255,0.5)', maxWidth: '50ch', lineHeight: 1.5 }}>
            Realized you can&apos;t build good things if you don&apos;t understand people.
          </p>
        </motion.div>

        {/* Milestone 2 */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          style={{ position: 'relative', textAlign: 'left' }}
        >
          <div style={{ position: 'absolute', left: '-2.5rem', top: '14px', width: '8px', height: '8px', borderRadius: '50%', background: '#fff', marginLeft: '11px' }} />
          <h3 className="chapter-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#fff", letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            <a href="https://www.firstinspires.org/robotics/frc" target="_blank" rel="noopener noreferrer" className="knowledge-link">
              FIRST Robotics Competition
            </a>
          </h3>
          <span className="chapter-meta" style={{ display: 'block', color: 'rgba(255,255,255,0.6)' }}>National-Level Volunteer</span>
          <p className="chapter-desc" style={{ marginTop: '0.8rem', color: 'rgba(255,255,255,0.5)', maxWidth: '50ch', lineHeight: 1.5 }}>
            Learned how to ship when everything is on fire.
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
}

function LeadershipTimeline() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '1000px', margin: '0 auto', padding: "8rem var(--pad)" }}
    >
      <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c8a96e', marginBottom: '4rem', textAlign: 'center' }}>
        03. Leadership &amp; Achievements
      </h2>

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '5rem', width: '100%', maxWidth: '700px', paddingLeft: '3rem', paddingRight: '1rem' }}>
        


        {/* Milestone 1 */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          style={{ position: 'relative', textAlign: 'left' }}
        >
          {/* Animated Connector Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            style={{ 
              position: 'absolute', left: '-2.5rem', marginLeft: '14px', top: '14px', bottom: 'calc(-5rem - 14px)', width: '2px', 
              background: 'linear-gradient(to bottom, rgba(200,169,110,0.5) 0%, rgba(255,255,255,0.1) 100%)',
              transformOrigin: 'top'
            }} 
          />
          <div style={{ position: 'absolute', left: '-2.5rem', top: '14px', width: '8px', height: '8px', borderRadius: '50%', background: '#c8a96e', marginLeft: '11px' }} />
          <span className="chapter-meta" style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.6)' }}>2023</span>
          <h3 className="chapter-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            District Level Tennis Player
          </h3>
          <p className="chapter-desc" style={{ marginTop: '0.8rem', color: 'rgba(255,255,255,0.5)', maxWidth: '50ch', lineHeight: 1.5 }}>
            Realized that consistency compounds way faster than talent.
          </p>
        </motion.div>

        {/* Milestone 2 */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          style={{ position: 'relative', textAlign: 'left' }}
        >
          <div style={{ position: 'absolute', left: '-2.5rem', top: '14px', width: '8px', height: '8px', borderRadius: '50%', background: '#fff', marginLeft: '11px' }} />
          <span className="chapter-meta" style={{ display: 'block', marginBottom: '0.5rem', color: '#c8a96e' }}>
            <a href="https://sgtuniversity.ac.in/" target="_blank" rel="noopener noreferrer" className="knowledge-link">SGT University</a>
          </span>
          <h3 className="chapter-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#fff", letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            General Secretary — <a href="https://www.google.com/search?q=Turing+Community+SGT+University" target="_blank" rel="noopener noreferrer" className="knowledge-link">Turing Community</a>
          </h3>
          <p className="chapter-desc" style={{ marginTop: '0.8rem', color: 'rgba(255,255,255,0.5)', maxWidth: '50ch', lineHeight: 1.5 }}>
            Figured out how to get smart people moving in the same direction.
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default function Chapters() {
  return (
    <section aria-label="My Journey" style={{ position: "relative", width: "100%", padding: "4rem 0" }}>
      <div style={{
        position: "absolute", inset: 0, zIndex: -1, pointerEvents: "none",
        background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(200,169,110,0.015) 0%, transparent 80%)"
      }} />
      <EducationTimeline />
      <CommunityTimeline />
      <LeadershipTimeline />
    </section>
  );
}
