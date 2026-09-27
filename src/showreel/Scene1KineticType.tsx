import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Scene1KineticType: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Primary Entrance Spring
  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 220, mass: 0.8 },
  });

  // Staggered letter springs for "ANNIE"
  const letters = ["A", "N", "N", "I", "E"];
  const letterSprings = letters.map((_, i) =>
    spring({
      frame: frame - i * 3,
      fps,
      config: { damping: 12, stiffness: 260 },
    })
  );

  // Subtitle reveal
  const subSpring = spring({
    frame: frame - 18,
    fps,
    config: { damping: 15, stiffness: 180 },
  });

  // Kinetic letterSpacing interpolation
  const tracking = interpolate(frame, [0, 45, 75], [60, 16, 28], {
    extrapolateRight: "clamp",
  });

  // Marquee scroll offsets
  const marqueeOffset1 = (frame * 6) % 1920;
  const marqueeOffset2 = (frame * -5) % 1920;

  // Glitch flash trigger (frames 0, 14, 28)
  const isGlitch = frame === 0 || frame === 1 || frame === 14 || frame === 28;
  const glitchX = isGlitch ? (frame % 2 === 0 ? 12 : -12) : 0;
  const rgbSplit = isGlitch ? 8 : 0;

  // Background grid scale & opacity
  const gridOpacity = interpolate(frame, [0, 20], [0, 0.45]);
  const radarRadius = interpolate(frame, [0, 60], [50, 1200]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#07090E",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Animated Coordinate Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0, 240, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          backgroundPosition: `${frame * 0.5}px ${frame * 0.5}px`,
          opacity: gridOpacity,
        }}
      />

      {/* Expanding Circular Shockwave Radar Ring */}
      <div
        style={{
          position: "absolute",
          width: radarRadius,
          height: radarRadius,
          borderRadius: "50%",
          border: "2px solid rgba(0, 240, 255, 0.35)",
          boxShadow: "0 0 30px rgba(0, 240, 255, 0.2)",
          opacity: interpolate(frame, [0, 40, 75], [0.8, 0.4, 0]),
          pointerEvents: "none",
        }}
      />

      {/* Top Background Kinetic Marquee */}
      <div
        style={{
          position: "absolute",
          top: "14%",
          width: "200%",
          left: `-${marqueeOffset1}px`,
          display: "flex",
          gap: 40,
          whiteSpace: "nowrap",
          fontSize: 16,
          fontWeight: 800,
          letterSpacing: 6,
          color: "rgba(255, 255, 255, 0.15)",
          textTransform: "uppercase",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <span>KINETIC TYPOGRAPHY • SPATIAL 3D • PROCEDURAL SHADERS • UI CHOREOGRAPHY • SOUND DESIGN • MOTION DIRECTION •</span>
        <span>KINETIC TYPOGRAPHY • SPATIAL 3D • PROCEDURAL SHADERS • UI CHOREOGRAPHY • SOUND DESIGN • MOTION DIRECTION •</span>
      </div>

      {/* Center Hero Name & Staggered Kinetic Typography */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `translateX(${glitchX}px) scale(${interpolate(titleSpring, [0, 1], [0.82, 1])})`,
        }}
      >
        {/* Animated Bounding Box */}
        <div
          style={{
            position: "absolute",
            inset: "-24px -40px",
            border: "1px dashed rgba(0, 240, 255, 0.4)",
            borderRadius: 8,
            opacity: subSpring,
          }}
        >
          {/* Dimension Tag */}
          <span
            style={{
              position: "absolute",
              top: -12,
              right: 20,
              backgroundColor: "#07090E",
              padding: "0 8px",
              fontSize: 10,
              color: "#00F0FF",
              fontFamily: "monospace",
              letterSpacing: 2,
            }}
          >
            BOUNDS: 980 × 240 [LOCKED]
          </span>
          {/* Crosshair corners */}
          <div style={{ position: "absolute", top: -6, left: -6, width: 12, height: 12, borderTop: "2px solid #FFE500", borderLeft: "2px solid #FFE500" }} />
          <div style={{ position: "absolute", bottom: -6, right: -6, width: 12, height: 12, borderBottom: "2px solid #FFE500", borderRight: "2px solid #FFE500" }} />
        </div>

        {/* Hero Letters "ANNIE" */}
        <div
          style={{
            display: "flex",
            letterSpacing: `${tracking}px`,
            fontSize: 148,
            fontWeight: 900,
            lineHeight: 1,
            color: "#FFFFFF",
            fontFamily: "'Inter', 'Impact', sans-serif",
            textShadow: rgbSplit > 0
              ? `-${rgbSplit}px 0 #00F0FF, ${rgbSplit}px 0 #FF0055, 0 0 40px rgba(255,255,255,0.6)`
              : "0 0 50px rgba(0, 240, 255, 0.35)",
          }}
        >
          {letters.map((char, index) => {
            const spr = letterSprings[index];
            const translateY = interpolate(spr, [0, 1], [100, 0]);
            const rot = interpolate(spr, [0, 1], [index % 2 === 0 ? -25 : 25, 0]);
            const opacity = interpolate(spr, [0, 0.3, 1], [0, 1, 1]);

            return (
              <span
                key={index}
                style={{
                  display: "inline-block",
                  transform: `translateY(${translateY}px) rotate(${rot}deg)`,
                  opacity,
                  background:
                    index === 2
                      ? "linear-gradient(135deg, #FFE500 0%, #FF9900 100%)"
                      : "linear-gradient(180deg, #FFFFFF 0%, #A5B4FC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {char}
              </span>
            );
          })}
        </div>

        {/* Subtitle / Role Tag */}
        <div
          style={{
            marginTop: 20,
            display: "flex",
            alignItems: "center",
            gap: 16,
            opacity: subSpring,
            transform: `translateY(${interpolate(subSpring, [0, 1], [30, 0])}px)`,
          }}
        >
          <div style={{ height: 2, width: 44, backgroundColor: "#00F0FF" }} />
          <span
            style={{
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: 8,
              color: "#E2E8F0",
              fontFamily: "'Inter', sans-serif",
              textTransform: "uppercase",
            }}
          >
            MOTION DESIGN SHOWREEL // 2026
          </span>
          <div style={{ height: 2, width: 44, backgroundColor: "#00F0FF" }} />
        </div>
      </div>

      {/* Bottom Background Kinetic Marquee in Opposite Direction */}
      <div
        style={{
          position: "absolute",
          bottom: "14%",
          width: "200%",
          left: `${marqueeOffset2}px`,
          display: "flex",
          gap: 40,
          whiteSpace: "nowrap",
          fontSize: 16,
          fontWeight: 800,
          letterSpacing: 6,
          color: "rgba(0, 240, 255, 0.2)",
          textTransform: "uppercase",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <span>HIGH IMPACT VISUALS • 60 FPS PRECISION • SPRING PHYSICS • VECTOR CHOREOGRAPHY • PROCEDURAL SYSTEMS •</span>
        <span>HIGH IMPACT VISUALS • 60 FPS PRECISION • SPRING PHYSICS • VECTOR CHOREOGRAPHY • PROCEDURAL SYSTEMS •</span>
      </div>
    </div>
  );
};
