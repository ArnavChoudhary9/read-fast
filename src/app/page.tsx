'use client';

import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen animated-gradient relative">
      <div
        className="relative"
        onMouseMove={isHovered ? handleMouseMove : undefined}
      >
        <button
          className="rounded-full border font-thin text-3xl bg-transparent px-6 py-3 hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden border-white text-white relative z-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
        >
          Test

          {isHovered && (
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "150px",
                height: "150px",
                background: `radial-gradient(circle, rgba(255, 182, 193, 1) 0%, rgba(0, 255, 255, 0.1) 50%)`,
                transform: `translate(-50%, -50%)`,
                top: `${position.y}px`,
                left: `${position.x}px`,
                zIndex: -1,
              }}
            />
          )}
        </button>
      </div>
    </div>
  );
}
