import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

export const Background: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070B14",
        overflow: "hidden",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Radial atmospheric glows */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          left: "15%",
          width: "70vw",
          height: "60vh",
          background: "radial-gradient(circle, rgba(14, 116, 144, 0.15) 0%, rgba(3, 7, 18, 0) 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "10%",
          width: "60vw",
          height: "50vh",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(3, 7, 18, 0) 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle technical grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 80%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 80%, transparent 100%)",
        }}
      />

      {/* Corner crosshairs & avionics telemetry markers */}
      <div style={{ position: "absolute", top: 24, left: 28, color: "rgba(56, 189, 248, 0.4)", fontSize: 11, letterSpacing: "0.2em", fontFamily: "monospace" }}>
        + SYS: APU-GT // HONEYWELL 131-9A ARCHITECTURE
      </div>
      <div style={{ position: "absolute", top: 24, right: 28, color: "rgba(148, 163, 184, 0.4)", fontSize: 11, letterSpacing: "0.2em", fontFamily: "monospace" }}>
        FRAME: {String(frame).padStart(4, "0")} // 30 FPS HD
      </div>
      <div style={{ position: "absolute", bottom: 20, left: 28, color: "rgba(148, 163, 184, 0.3)", fontSize: 10, letterSpacing: "0.15em", fontFamily: "monospace" }}>
        SEC: ATA 49 // AUXILIARY POWER SYSTEM
      </div>
      <div style={{ position: "absolute", bottom: 20, right: 28, color: "rgba(56, 189, 248, 0.4)", fontSize: 10, letterSpacing: "0.15em", fontFamily: "monospace" }}>
        STATUS: NOMINAL ACTIVE
      </div>
    </AbsoluteFill>
  );
};
