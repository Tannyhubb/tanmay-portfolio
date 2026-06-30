"use client";
import { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export default function ProfileCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse position relative to center [-1, 1]
  const x = useSpring(0, { stiffness: 150, damping: 20 });
  const y = useSpring(0, { stiffness: 150, damping: 20 });

  // 3D rotation based on mouse
  const rotateX = useTransform(y, [-1, 1], [8, -8]);
  const rotateY = useTransform(x, [-1, 1], [-8, 8]);
  
  // Specular shine movement
  const shineX = useTransform(x, [-1, 1], [100, 0]);
  const shineY = useTransform(y, [-1, 1], [100, 0]);
  const shineOpacity = useTransform(y, [-1, 1], [0, 0.4]);

  // Dynamic gradient based on mouse
  const bgX = useTransform(x, [-1, 1], [70, 30]);
  const bgY = useTransform(y, [-1, 1], [70, 30]);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    
    // Normalize to [-1, 1]
    x.set((e.clientX - cx) / (rect.width / 2));
    y.set((e.clientY - cy) / (rect.height / 2));
  }

  function handleMouseLeave() {
    setHovered(false);
    x.set(0);
    y.set(0);
  }

  return (
    <div className="profile-wrap">
      <div className="profile-glow-ring" />
      
      <motion.div
        ref={ref}
        className="profile-card"
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Dynamic Specular Shine */}
        <motion.div
          className="profile-shine"
          style={{
            background: useTransform(
              () => `radial-gradient(circle at ${shineX.get()}% ${shineY.get()}%, rgba(255,255,255,1) 0%, transparent 40%)`
            ),
            opacity: shineOpacity,
            mixBlendMode: "overlay"
          }}
        />

        <div className="profile-photo">
          {/* Always-on ambient light */}
          <div className="profile-photo-ambient" />
          
          {/* Mouse-reactive dynamic gradient */}
          <motion.div
            className="profile-photo-bg"
            style={{
              background: useTransform(
                () => `radial-gradient(circle at ${bgX.get()}% ${bgY.get()}%, rgba(255,255,255,0.08) 0%, transparent 60%)`
              )
            }}
          />

          {/* Abstract geometric avatar representation instead of a photo */}
          <div className="profile-avatar-wrap">
             <motion.svg
                className="profile-avatar-svg"
                viewBox="0 0 100 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={hovered ? { y: -5 } : { y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
             >
                {/* Silhouette / Abstract structural form */}
                <path d="M50 20 L80 40 L80 80 L50 100 L20 80 L20 40 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <path d="M50 20 L50 60 L80 40" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <path d="M50 20 L50 60 L20 40" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <path d="M50 60 L50 100" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                
                {/* Core/Eye/Center */}
                <circle cx="50" cy="50" r="8" fill="rgba(200,169,110,0.1)" stroke="var(--gold)" strokeWidth="0.5"/>
             </motion.svg>
          </div>
          
          <div className="profile-photo-vignette" />

          {/* Floating particles */}
          <div className="profile-particles">
            <div className="profile-particle" style={{ width: '3px', height: '3px', left: '20%', top: '30%', animationDuration: '4s' }} />
            <div className="profile-particle" style={{ width: '2px', height: '2px', left: '70%', top: '20%', animationDuration: '5s', animationDelay: '1s' }} />
            <div className="profile-particle" style={{ width: '4px', height: '4px', left: '80%', top: '60%', animationDuration: '6s', animationDelay: '2s' }} />
            <div className="profile-particle" style={{ width: '2px', height: '2px', left: '30%', top: '70%', animationDuration: '4.5s', animationDelay: '0.5s' }} />
          </div>
        </div>

        <div className="profile-info">
          <div className="profile-info-name">Tanmay Bhardwaj</div>
          <div className="profile-info-role">Founder & Builder</div>
          <div className="profile-info-status">
            <div className="profile-status-dot" />
            Building in New Delhi
          </div>
        </div>
      </motion.div>
    </div>
  );
}
