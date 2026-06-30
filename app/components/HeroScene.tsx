"use client";
import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";

/* ─── Mouse tracking lives outside React ─── */
const mouse = { x: 0, y: 0 };
const smoothed = { x: 0, y: 0 };
let focusIntensity = 0; 

function trackMouse() {
  if (typeof window === "undefined") return;
  function onMove(e: MouseEvent) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    
    // Focus intensity based on cursor proximity to right side of screen
    const dist = Math.sqrt(Math.pow(mouse.x - 0.5, 2) + Math.pow(mouse.y, 2));
    const targetFocus = Math.max(0, 1 - (dist * 1.5));
    focusIntensity += (targetFocus - focusIntensity) * 0.08;
  }
  window.addEventListener("mousemove", onMove, { passive: true });
  return () => window.removeEventListener("mousemove", onMove);
}

import { MeshTransmissionMaterial } from "@react-three/drei";

/* ─── Portrait & Glass Unified Composition ─── */
function UnifiedHeroObject() {
  const group = useRef<THREE.Group>(null);
  const glassMat = useRef<any>(null);
  

  useFrame(({ clock, pointer }) => {
    const t = clock.elapsedTime;

    if (group.current) {
      group.current.rotation.x = t * 0.2;
      group.current.rotation.y = t * 0.3;
      
      const pointerX = (pointer.x * Math.PI) / 10;
      const pointerY = (pointer.y * Math.PI) / 10;
      
      group.current.rotation.y += (pointerX - group.current.rotation.y) * 0.1;
      group.current.rotation.x += (-pointerY - group.current.rotation.x) * 0.1;
    }

    if (glassMat.current) {
      // Hovering adds physical refraction and tilt to the glass ring
      glassMat.current.roughness = THREE.MathUtils.lerp(0.05, 0.01, focusIntensity);
      glassMat.current.transmission = 1.0;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Orbiting Glass Ring */}
      <mesh ref={group} scale={[1.2, 1.2, 1.2]}>
        <torusGeometry args={[2, 0.6, 64, 128]} />
        <MeshTransmissionMaterial
          ref={glassMat}
          backside={false}
          samples={4}
          resolution={256}
          transmission={1}
          roughness={0.05}
          thickness={1.5}
          ior={1.5}
          chromaticAberration={0.04}
          anisotropy={0.2}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color="#ffffff"
        />
      </mesh>
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 5, 4]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-2, -5, -4]} intensity={0.5} color="#c8a96e" />
    </>
  );
}

export default function HeroScene() {
  useEffect(() => {
    return trackMouse();
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 35 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} 
      dpr={[1, 2]} // Crisp rendering for the portrait
      style={{ background: "transparent" }}
    >
      <Lights />
      <Environment resolution={64} environmentIntensity={0.6}>
        <group rotation={[-Math.PI / 4, 0, 0]}>
          <Lightformer type="ring" intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer type="rect" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
        </group>
      </Environment>
      
      <Suspense fallback={null}>
        <UnifiedHeroObject />
      </Suspense>
    </Canvas>
  );
}
