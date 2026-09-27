import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Scene4VectorMorph: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Primary spring entrance
  const mainSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 220, mass: 0.8 },
  });

  // Rotation angles for nested geometry
  const spin1 = frame * 2.2;
  const spin2 = -frame * 1.6;
  const spin3 = frame * 3.4;

  // Expanding radius pulse
  const pulseScale = 1 + Math.sin(frame * 0.15) * 0.08;

  // Array of radial spokes/petals
  const spokes = Array.from({ length: 16 }, (_, i) => i * (360 / 16));

  // Dynamic stroke dashoffset
  const dashOffset = interpolate(frame, [0, 80], [600, 0]);

  // Text rotation
  const textAngle = frame * 1.2;

  // Radial particles
  const particles = Array.from({ length: 24 }, (_, i) => {
    const angle = (i * 360) / 24;
    const rad = (angle * Math.PI) / 180;
    const dist = interpolate(frame, [0, 80], [100, 750 + (i % 4) * 120]);
    const x = Math.cos(rad) * dist;
    const y = Math.sin(rad) * dist;
    const alpha = interpolate(frame, [0, 20, 70, 80], [0, 1, 0.8, 0]);
    return { x, y, alpha, color: i % 2 === 0 ? "#00F0FF" : "#FFE500" };
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#080612",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Chromatic Waves */}
      <div
        style={{
          position: "absolute",
          width: 1200,
          height: 1200,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 0, 127, 0.22) 0%, rgba(0, 240, 255, 0.12) 50%, transparent 75%)",
          filter: "blur(90px)",
        }}
      />

      {/* Floating Radial Particle Streaks */}
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: p.color,
            boxShadow: `0 0 12px ${p.color}`,
            transform: `translate(${p.x}px, ${p.y}px)`,
            opacity: p.alpha,
          }}
        />
      ))}

      {/* Center Dynamic SVG Vector Kaleidoscope & Orbitals */}
      <div
        style={{
          position: "relative",
          width: 800,
          height: 800,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${mainSpring * pulseScale})`,
        }}
      >
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none">
          <defs>
            <linearGradient id="vectorGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE500" />
              <stop offset="50%" stopColor="#FF007F" />
              <stop offset="100%" stopColor="#00F0FF" />
            </linearGradient>
            <linearGradient id="vectorGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00FF9D" />
              <stop offset="100%" stopColor="#BD00FF" />
            </linearGradient>
          </defs>

          {/* Outer Concentric Tick Circle */}
          <g transform={`rotate(${spin1} 400 400)`}>
            <circle
              cx="400"
              cy="400"
              r="340"
              stroke="rgba(0, 240, 255, 0.4)"
              strokeWidth="2"
              strokeDasharray="4 16"
            />
            <circle
              cx="400"
              cy="400"
              r="320"
              stroke="#00F0FF"
              strokeWidth="1.5"
              strokeDasharray="80 120"
              strokeDashoffset={dashOffset}
            />
          </g>

          {/* Reverse Rotating Gear Ring */}
          <g transform={`rotate(${spin2} 400 400)`}>
            <circle
              cx="400"
              cy="400"
              r="270"
              stroke="url(#vectorGrad1)"
              strokeWidth="3"
              strokeDasharray="30 10 10 10"
            />
            {spokes.map((deg, i) => (
              <line
                key={i}
                x1="400"
                y1="150"
                x2="400"
                y2="190"
                stroke="url(#vectorGrad1)"
                strokeWidth="2.5"
                transform={`rotate(${deg} 400 400)`}
              />
            ))}
          </g>

          {/* Inner Hypnotic Sine Wave Flower */}
          <g transform={`rotate(${spin3} 400 400)`}>
            {Array.from({ length: 8 }).map((_, i) => {
              const rot = i * 45;
              return (
                <ellipse
                  key={i}
                  cx="400"
                  cy="400"
                  rx="160"
                  ry="70"
                  stroke="url(#vectorGrad2)"
                  strokeWidth="2"
                  fill="rgba(189, 0, 255, 0.04)"
                  transform={`rotate(${rot} 400 400)`}
                />
              );
            })}
          </g>

          {/* Center Glowing Core */}
          <circle cx="400" cy="400" r="54" fill="#07090E" stroke="#FFE500" strokeWidth="3" />
          <circle cx="400" cy="400" r="30" fill="url(#vectorGrad1)" filter="drop-shadow(0 0 16px #FF007F)" />
        </svg>

        {/* Circular Kinetic Rotating Text */}
        <div
          style={{
            position: "absolute",
            width: 440,
            height: 440,
            borderRadius: "50%",
            transform: `rotate(${textAngle}deg)`,
            pointerEvents: "none",
          }}
        >
          <svg viewBox="0 0 500 500" width="100%" height="100%">
            <path
              id="textCirclePath"
              d="M 250, 250 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
              fill="none"
            />
            <text fill="#FFFFFF" fontSize="14" fontWeight="800" letterSpacing="4" fontFamily="'Inter', sans-serif">
              <textPath href="#textCirclePath" startOffset="0%">
                PRECISION VECTOR CHOREOGRAPHY • SPRING OSCILLATION • PROCEDURAL RIGS •
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* Floating Section Labels */}
      <div
        style={{
          position: "absolute",
          top: "16%",
          left: "10%",
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        <span style={{ fontSize: 13, color: "#FFE500", letterSpacing: 3, fontWeight: 700 }}>
          [04] VECTOR ARCHITECTURE
        </span>
        <h2 style={{ fontSize: 32, color: "#FFFFFF", fontWeight: 900, margin: "6px 0 0 0" }}>
          COMPUTATIONAL GEOMETRY
        </h2>
        <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
          Infinite resolution SVG morphing with synchronized harmonic ratios
        </span>
      </div>

      {/* Bottom Metrics Pill */}
      <div
        style={{
          position: "absolute",
          bottom: "16%",
          right: "10%",
          padding: "16px 28px",
          background: "rgba(10, 15, 26, 0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 229, 0, 0.4)",
          borderRadius: 16,
          boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
        }}
      >
        <div style={{ fontSize: 11, color: "#FFE500", letterSpacing: 2, fontWeight: 700, fontFamily: "monospace" }}>
          HARMONIC RATIO: 1.618 (GOLDEN RATIO)
        </div>
        <div style={{ fontSize: 20, color: "#FFFFFF", fontWeight: 800, marginTop: 4 }}>
          Zero Aliasing • Pure Code
        </div>
      </div>
    </div>
  );
};
