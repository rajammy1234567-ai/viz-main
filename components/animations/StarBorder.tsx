"use client";

import React from "react";

interface StarBorderProps {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: string;
  thickness?: number;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  onClick?: () => void;
}

export function StarBorder({
  as: Component = "div",
  className = "",
  color = "rgba(37, 99, 235, 0.8)",
  speed = "5s",
  thickness = 1.5,
  backgroundColor = "#ffffff",
  textColor = "#0f172a",
  borderColor = "#e2e8f0",
  children,
  onClick,
  ...rest
}: StarBorderProps) {
  return (
    <Component
      onClick={onClick}
      className={`relative inline-block overflow-hidden rounded-2xl ${className}`}
      style={{
        padding: `${thickness}px`,
      }}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[60%] opacity-80 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 12%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="absolute w-[300%] h-[60%] opacity-80 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 12%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="relative z-10 w-full h-full rounded-[14px] flex items-center justify-center transition-colors"
        style={{ background: backgroundColor, color: textColor, border: `1px solid ${borderColor}` }}
      >
        {children}
      </div>
    </Component>
  );
}

export default StarBorder;
