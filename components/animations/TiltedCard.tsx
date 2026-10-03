"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  glareOpacity?: number;
}

const springValues = {
  damping: 25,
  stiffness: 120,
  mass: 1.5,
};

export function TiltedCard({
  children,
  className = "",
  scaleOnHover = 1.03,
  rotateAmplitude = 10,
  glareOpacity = 0.15,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    const percentX = ((e.clientX - rect.left) / rect.width) * 100;
    const percentY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x: percentX, y: percentY, opacity: glareOpacity });
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  }

  return (
    <div
      ref={ref}
      className={`[perspective:1000px] ${className}`}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d] will-change-transform"
        style={{
          rotateX,
          rotateY,
          scale,
        }}
      >
        {children}
        {/* Dynamic Glare Overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.4), transparent 60%)`,
          }}
        />
      </motion.div>
    </div>
  );
}

export default TiltedCard;
