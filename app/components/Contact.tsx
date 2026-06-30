"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="contact-section" aria-label="Contact" style={{ 
      padding: "20vh 2rem 5vh", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center",
      maxWidth: "1000px", 
      margin: "0 auto",
      minHeight: "80vh",
      justifyContent: "space-between"
    }}>
      
      {/* Spacer to push content to middle */}
      <div style={{ flex: 1 }} />

      {/* Cinematic Centerpiece */}
      <motion.div 
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            fontFamily: 'var(--font-serif), Georgia, serif',
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            color: 'rgba(255,255,255,0.6)',
            textAlign: 'center',
            margin: 0
          }}
        >
          The best conversations usually begin with curiosity.
        </motion.p>

        {/* Minimal CTA */}
        <motion.a 
          href="https://calendly.com/tanmaybhardwaj4444/30min"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
          style={{
            padding: '1rem 2.5rem',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '2px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            fontWeight: 400,
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            textDecoration: 'none',
            background: 'transparent',
            transition: 'background 0.5s ease, border-color 0.5s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
          }}
        >
          Grab 30 Minutes
        </motion.a>
      </motion.div>

      {/* Spacer to push content to middle */}
      <div style={{ flex: 1 }} />
      
      {/* Ultra-Minimal Footer */}
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.5 }}
        style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.03)',
          flexWrap: 'wrap',
          gap: '2rem'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', width: '100%' }}>
          {[
            { label: 'Email', href: 'mailto:work@buildyour.company' },
            { label: 'Instagram', href: 'https://www.instagram.com/tanmaybhardwaj_/' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tanmay-bhardwaj-gtm' },
            { label: 'X (Twitter)', href: 'https://x.com/TanmayBhardwajj' }
          ].map((link, i) => (
            <motion.a 
              key={i}
              href={link.href}
              target={link.label === 'Email' ? "_self" : "_blank"}
              rel={link.label === 'Email' ? undefined : "noreferrer"}
              whileHover={{ y: -2, background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}
              transition={{ duration: 0.2 }}
              style={{ 
                padding: '0.6rem 1.2rem',
                borderRadius: '100px',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.02)',
                fontSize: "0.75rem", 
                color: "rgba(255,255,255,0.5)", 
                textDecoration: "none", 
                textTransform: "uppercase", 
                letterSpacing: "0.15em", 
                fontFamily: 'var(--font-mono)', 
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
