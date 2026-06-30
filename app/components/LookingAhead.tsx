"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const quotes = [
  "Build products people remember, not just products people use.",
  "Simplicity is the ultimate sophistication.",
  "The best design is as little design as possible.",
  "How you do anything is how you do everything."
];

export default function LookingAhead() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      className="quiet-section" 
      aria-label="State of Mind" 
      style={{ 
        padding: "15vh 2rem", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        maxWidth: "1100px", 
        margin: "0 auto",
        position: 'relative'
      }}
    >
      <h2 style={{ 
        fontFamily: 'var(--font-sans)', 
        fontSize: '0.85rem', 
        fontWeight: 400, 
        color: 'rgba(255,255,255,0.4)', 
        marginBottom: '6rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        zIndex: 10
      }}>
        State of Mind
      </h2>

      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
        position: 'relative'
      }}>

        {/* 📚 Reading Widget (Left) */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          style={{ display: 'flex', justifyContent: 'flex-start', zIndex: 2 }}
        >
          <div style={{
            background: 'rgba(20, 20, 20, 0.6)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(200, 169, 110, 0.15)',
            borderRadius: '24px',
            padding: '2rem 3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '3rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
            position: 'relative'
          }}>
            {/* 3D Book */}
            <motion.div 
              whileHover={{ rotateY: -20, rotateX: 10, scale: 1.1, x: -10 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              style={{
                width: '120px',
                height: '180px',
                background: '#f2eee3',
                borderRadius: '3px 8px 8px 3px',
                boxShadow: '-6px 0 12px rgba(0,0,0,0.4) inset, 2px 0 5px rgba(255,255,255,0.8) inset, 10px 20px 30px rgba(0,0,0,0.6)',
                position: 'relative',
                transformStyle: 'preserve-3d',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem',
                marginTop: '-3rem', // Breaking out of container
                marginBottom: '-1rem'
              }}
            >
              <div style={{ position: 'absolute', left: '8px', top: 0, bottom: 0, width: '2px', background: 'rgba(0,0,0,0.1)' }} />
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: '#111', fontWeight: 600, textAlign: 'center', lineHeight: 1.2 }}>The<br/>Almanack<br/>of Naval<br/>Ravikant</span>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(200, 169, 110, 0.8)' }}>Currently Reading</span>
              <h3 style={{ fontSize: '1.4rem', color: '#fff', margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 400 }}>The Almanack of Naval Ravikant</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>Eric Jorgenson</p>
              
              <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)' }}>Synced from Kindle</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 💻 Workspace Widget (Right, Fixed Overlap) */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
          style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-2rem', zIndex: 1 }}
        >
          <div style={{
            background: 'rgba(15,15,15,0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            width: '100%',
            maxWidth: '350px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* macOS Header */}
            <div style={{ height: '28px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '6px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
              <div style={{ flex: 1 }} />
              <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)' }}>tools.app</span>
              <div style={{ flex: 1 }} />
            </div>

            {/* Application List */}
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              
              {/* Cursor */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.8rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Cursor Fake Logo */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polygon points="3 3 10.07 19.97 12.58 12.58 19.97 10.07 3 3"></polygon></svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 500 }}>Cursor</span>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>AI Code Editor</span>
                </div>
              </div>

              {/* Figma */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.8rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Figma Fake Logo */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5.5 5.5A3.5 3.5 0 0 1 9 2h3.5v7H9A3.5 3.5 0 0 1 5.5 5.5z" fill="#F24E1E"/><path d="M9 9h3.5v7H9a3.5 3.5 0 1 1 0-7z" fill="#A259FF"/><path d="M9 16h3.5v3.5a3.5 3.5 0 1 1-3.5-3.5z" fill="#0ACF83"/><path d="M12.5 2h3.5a3.5 3.5 0 1 1 0 7h-3.5V2z" fill="#FF7262"/><path d="M12.5 9h3.5a3.5 3.5 0 1 1 0 7h-3.5V9z" fill="#1ABCFE"/></svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 500 }}>Figma</span>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>Product Design</span>
                </div>
              </div>

              {/* Notion */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.8rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: '6px' }}>
                  {/* Notion Fake Logo */}
                  <span style={{ fontFamily: 'var(--font-serif)', color: '#000', fontWeight: 600, fontSize: '1.2rem' }}>N</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 500 }}>Notion</span>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>Systems & Brain</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* 🧠 Thinking Widget (Center, No Box) */}
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center', zIndex: 3, marginTop: '2rem' }}
        >
          <div style={{
            position: 'relative',
            maxWidth: '700px',
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            padding: '3rem 0'
          }}>
            <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(200, 169, 110, 0.8)' }}>Currently Thinking</span>
            <p style={{
              fontFamily: 'var(--font-serif), Georgia, serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              color: 'rgba(255,255,255,0.95)',
              margin: 0,
              lineHeight: 1.4,
              fontWeight: 300,
              textShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
              “How AI changes trust in fintech.”
            </p>
          </div>
        </motion.div>

        {/* Bottom Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4rem', marginTop: '2rem' }}>
          
          {/* 🎧 Soundtrack Widget (Left) */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.5 }}
            style={{ zIndex: 2 }}
          >
            <div style={{
              background: 'rgba(20,20,20,0.5)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
              flexDirection: 'column'
            }}>
              
              <div style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)' }}>Listening To</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', width: '100%' }}>
                <div style={{
                  width: '80px', height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2a2a2a 0%, #000 100%)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.5), inset 0 0 10px rgba(255,255,255,0.1)',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.1) 90deg, transparent 180deg, rgba(255,255,255,0.1) 270deg, transparent 360deg)' }}
                  />
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#111', border: '1px solid rgba(255,255,255,0.2)', zIndex: 1 }} />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span style={{ fontSize: '1rem', color: '#fff', fontWeight: 500 }}>Mimmi</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Ritviz</span>
                  
                  {/* CSS Waveform */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '20px', marginTop: '0.5rem' }}>
                    {[10, 16, 8, 20, 12, 18, 14, 8, 16, 10].map((h, i) => (
                      <motion.div 
                        key={i}
                        animate={{ height: [h, h*0.3, h] }}
                        transition={{ repeat: Infinity, duration: 1.5 + (i%3)*0.2, ease: "easeInOut", delay: i*0.1 }}
                        style={{ width: '2px', background: '#c8a96e', borderRadius: '1px' }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1DB954', boxShadow: '0 0 10px #1DB954' }} />
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)' }}>Synced from Spotify</span>
              </div>
            </div>
          </motion.div>

          {/* ☕ Daily Ritual (Coffee Cup) */}
          <div style={{ flex: '1 1 auto', display: 'flex', justifyContent: 'flex-end' }}>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
              style={{ zIndex: 4 }}
            >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}>
              {/* Creative CSS Coffee Cup */}
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Steam */}
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <motion.div animate={{ y: [0, -15], opacity: [0, 0.5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} style={{ width: '4px', height: '20px', background: 'rgba(255,255,255,0.4)', borderRadius: '4px', filter: 'blur(2px)' }} />
                  <motion.div animate={{ y: [0, -20], opacity: [0, 0.5, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 0.5 }} style={{ width: '4px', height: '25px', background: 'rgba(255,255,255,0.4)', borderRadius: '4px', filter: 'blur(2px)' }} />
                  <motion.div animate={{ y: [0, -15], opacity: [0, 0.5, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "linear", delay: 1 }} style={{ width: '4px', height: '15px', background: 'rgba(255,255,255,0.4)', borderRadius: '4px', filter: 'blur(2px)' }} />
                </div>
                {/* Cup Body */}
                <div style={{
                  width: '60px', height: '60px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  borderBottomLeftRadius: '24px',
                  borderBottomRightRadius: '24px',
                  position: 'relative',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                }}>
                  {/* Cup Handle */}
                  <div style={{
                    position: 'absolute', right: '-16px', top: '10px',
                    width: '20px', height: '30px',
                    border: '2px solid rgba(255,255,255,0.2)',
                    borderLeft: 'none',
                    borderRadius: '0 15px 15px 0',
                    zIndex: -1
                  }} />
                  {/* Coffee Inside */}
                  <div style={{ position: 'absolute', bottom: '2px', left: '2px', right: '2px', height: '40px', background: 'rgba(100, 70, 50, 0.8)', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }} />
                </div>
                {/* Saucer */}
                <div style={{ width: '80px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', marginTop: '5px' }} />
              </div>

              <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(200, 169, 110, 0.8)' }}>Fuel</span>
                <span style={{ fontSize: '1rem', color: '#fff', fontFamily: 'var(--font-serif)' }}>Cold Coffee</span>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Always.</span>
              </div>
            </div>
          </motion.div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
