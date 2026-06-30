"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.5, delay, ease: [0.22, 1, 0.36, 1] as any } }
});

const PopoverItem = ({ title, subtitle, href }: { title: string, subtitle: string, href?: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a 
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        display: 'block', 
        padding: '0.8rem', 
        borderRadius: '8px', 
        textDecoration: 'none', 
        color: 'inherit', 
        position: 'relative',
        cursor: href ? 'pointer' : 'default',
        margin: '0 -0.8rem' // negative margin to pull it to the edges of the padding
      }}
    >
      <div 
        style={{ 
          position: 'absolute', inset: 0, 
          background: isHovered ? 'rgba(255,255,255,0.06)' : 'transparent', 
          borderRadius: '8px',
          transition: 'background 0.2s ease'
        }} 
      />
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{ fontWeight: 500, color: '#fff', transition: 'color 0.2s ease' }}>{title}</p>
        {href && (
          <span 
            style={{ 
              fontSize: '1.2rem', lineHeight: 1,
              color: isHovered ? '#c8a96e' : 'rgba(255,255,255,0.2)',
              transform: isHovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
              transition: 'all 0.2s ease'
            }}
          >
            ↗
          </span>
        )}
      </div>
      <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.3rem', position: 'relative' }}>
        {subtitle}
      </p>
    </a>
  );
};

function useClickOutside(ref: React.RefObject<HTMLElement | null>, handler: () => void) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

function BirthdayPopover() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const isBirthday = now.getMonth() === 8 && now.getDate() === 4;
      
      if (isBirthday) {
        setDays(0);
        return;
      }

      let nextBday = new Date(now.getFullYear(), 8, 4); // September 4
      if (now.getTime() > nextBday.getTime()) {
        nextBday = new Date(now.getFullYear() + 1, 8, 4);
      }
      const diff = nextBday.getTime() - now.getTime();
      setDays(Math.ceil(diff / (1000 * 60 * 60 * 24)));
    };
    calc();
    const int = setInterval(calc, 60000);
    return () => clearInterval(int);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', fontFamily: 'var(--font-sans)', letterSpacing: 'normal', textTransform: 'none' }}>Born: 4 September 2007</p>
      <p style={{ color: '#c8a96e', fontWeight: 500, fontSize: '1.1rem', textShadow: '0 0 10px rgba(200,169,110,0.3)', fontFamily: 'var(--font-sans)', letterSpacing: 'normal', textTransform: 'none' }}>
        {days === 0 ? "It's my birthday! 🎉" : `${days} days to go 🎉`}
      </p>
    </div>
  );
}

const HeroPortrait = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="hero-portrait-wrapper" 
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '380px',
          aspectRatio: '4/5',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
          border: '1px solid rgba(255,255,255,0.05)',
          cursor: 'pointer',
          background: '#000',
          transform: isHovered ? 'scale(1.03)' : 'scale(1)',
          transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        {/* Base Image: Black and White */}
        <img 
          src="/portrait-2.jpg"
          alt="Tanmay Bhardwaj"
          loading="eager"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'grayscale(100%) contrast(1.1) brightness(0.9)',
            opacity: isHovered ? 0 : 1,
            transition: 'opacity 0.3s ease-out'
          }}
        />
        
        {/* Hover Image: Full Color (Instant Snap) */}
        <img 
          src="/portrait-3.png"
          alt="Tanmay Bhardwaj"
          loading="eager"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease-out'
          }}
        />
      </motion.div>
    </div>
  );
};

export default function Hero() {
  const [activePopover, setActivePopover] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useClickOutside(containerRef, () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActivePopover(null);
  });

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActivePopover(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActivePopover(null);
    }, 300);
  };

  const name1 = "Tanmay".split("");
  const name2 = "Bhardwaj".split("");
  
  const charAnim = {
    hidden: { opacity: 0, y: 50 },
    show: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 1.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as any }
    })
  };

  const popoverAnim: any = {
    hidden: { opacity: 0, x: "-50%", y: 6 },
    show: { opacity: 1, x: "-50%", y: 0, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, x: "-50%", y: 0, transition: { duration: 0.05, ease: "linear" } }
  };

  const afterName = (name1.length + name2.length) * 0.05 + 0.2;

  return (
    <section className="hero" aria-label="Hero" style={{ overflow: 'visible', zIndex: 10 }}>
      <div className="hero-grid">

        <div className="hero-identity">
          <motion.div initial="hidden" animate="show">
            <h1 className="hero-name" aria-label="Tanmay Bhardwaj">
              <span className="hero-name-line">
                {name1.map((char, i) => (
                  <motion.span key={i} custom={i} variants={charAnim} className="hero-char">{char}</motion.span>
                ))}
              </span>
              <span className="hero-name-line hero-name-line-2">
                {name2.map((char, i) => (
                  <motion.span key={i} custom={i + name1.length} variants={charAnim} className="hero-char">{char}</motion.span>
                ))}
              </span>
            </h1>
          </motion.div>

          {/* BIO STRIP (Now the small mono top text) */}
          <motion.div
            variants={fadeUp(afterName)}
            initial="hidden"
            animate="show"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.5)',
              marginBottom: '2rem'
            }}
          >
            <p>Curious enough to explore. Crazy enough to build.</p>
          </motion.div>

          {/* INTERACTIVE STRIP (Premium Glass Pill) */}
          <motion.div
            ref={containerRef}
            variants={fadeUp(afterName + 0.2)}
            initial="hidden"
            animate="show"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.6)',
              position: 'relative',
              zIndex: 50,
              flexWrap: 'wrap',
              background: 'rgba(15, 15, 15, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '0.8rem 2rem',
              borderRadius: '100px',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}
          >
            {/* 18 */}
            <div 
              className="strip-item-container"
              onMouseEnter={() => handleMouseEnter('18')}
              onMouseLeave={handleMouseLeave}
            >
              <span 
                className={`strip-item ${activePopover === '18' ? 'active' : ''}`} 
                style={{ 
                  color: activePopover === '18' ? '#fff' : 'inherit',
                  textShadow: activePopover === '18' ? '0 0 20px rgba(255,255,255,0.3)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                18
              </span>
              <AnimatePresence>
                {activePopover === '18' && (
                  <motion.div key="pop-18" className="glass-popover" variants={popoverAnim} initial="hidden" animate="show" exit="exit">
                    <BirthdayPopover />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.15)' }} />

            {/* 2 Ventures */}
            <div 
              className="strip-item-container"
              onMouseEnter={() => handleMouseEnter('ventures')}
              onMouseLeave={handleMouseLeave}
            >
              <span 
                className={`strip-item ${activePopover === 'ventures' ? 'active' : ''}`} 
                style={{ 
                  color: activePopover === 'ventures' ? '#fff' : 'inherit',
                  textShadow: activePopover === 'ventures' ? '0 0 20px rgba(255,255,255,0.3)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                2 Ventures
              </span>
              <AnimatePresence>
                {activePopover === 'ventures' && (
                  <motion.div key="pop-ventures" className="glass-popover" variants={popoverAnim} initial="hidden" animate="show" exit="exit" style={{ width: '280px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', fontFamily: 'var(--font-sans)', letterSpacing: 'normal', textTransform: 'none' }}>
                      <PopoverItem 
                        title="BuildYour.Company" 
                        subtitle="An elite ecosystem for ambitious founders." 
                        href="https://buildyour.company" 
                      />
                      <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.05)', margin: '0.4rem 0' }} />
                      <PopoverItem 
                        title="IndiaGotStartup" 
                        subtitle="Unified platform accelerating early-stage startups." 
                        href="https://indiagotstartup.com" 
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.15)' }} />

            {/* New Delhi */}
            <div 
              className="strip-item-container"
              onMouseEnter={() => handleMouseEnter('delhi')}
              onMouseLeave={handleMouseLeave}
            >
              <span 
                className={`strip-item ${activePopover === 'delhi' ? 'active' : ''}`} 
                style={{ 
                  color: activePopover === 'delhi' ? '#fff' : 'inherit',
                  textShadow: activePopover === 'delhi' ? '0 0 20px rgba(255,255,255,0.3)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                New Delhi
              </span>
              <AnimatePresence>
                {activePopover === 'delhi' && (
                  <motion.div key="pop-delhi" className="glass-popover" variants={popoverAnim} initial="hidden" animate="show" exit="exit" style={{ width: '240px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', fontFamily: 'var(--font-sans)', letterSpacing: 'normal', textTransform: 'none' }}>
                      <PopoverItem 
                        title="📍 New Delhi, India" 
                        subtitle="Building from India. Thinking globally." 
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.15)' }} />

            {/* Builder */}
            <div 
              className="strip-item-container"
              onMouseEnter={() => handleMouseEnter('builder')}
              onMouseLeave={handleMouseLeave}
            >
              <span 
                className={`strip-item ${activePopover === 'builder' ? 'active' : ''}`} 
                style={{ 
                  color: activePopover === 'builder' ? '#fff' : 'inherit',
                  textShadow: activePopover === 'builder' ? '0 0 20px rgba(255,255,255,0.3)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                Builder
              </span>
              <AnimatePresence>
                {activePopover === 'builder' && (
                  <motion.div key="pop-builder" className="glass-popover" variants={popoverAnim} initial="hidden" animate="show" exit="exit" style={{ width: '200px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0', fontFamily: 'var(--font-sans)', letterSpacing: 'normal', textTransform: 'none' }}>
                      <PopoverItem title="AI Products" subtitle="" />
                      <PopoverItem title="Startups" subtitle="" />
                      <PopoverItem title="Product Design" subtitle="" />
                      <PopoverItem title="Automation" subtitle="" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Hero Portrait on the Right */}        {/* Hero Portrait on the Right */}
        <HeroPortrait />
      </div>
    </section>
  );
}
