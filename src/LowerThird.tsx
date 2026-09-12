import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate, AbsoluteFill } from "remotion";

export const LowerThird: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring (frames 0 - 150, i.e. first 5 seconds)
  const introSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const fadeOut = interpolate(frame, [120, 150], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = Math.min(introSpring, fadeOut);
  const slideX = interpolate(introSpring, [0, 1], [-100, 0]);

  if (opacity <= 0.01) return null;

  return (
    <AbsoluteFill style={{ pointerEvents: "none", paddingLeft: 80, paddingTop: 180 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          opacity,
          transform: `translateX(${slideX}px)`,
        }}
      >
        {/* Channel Icon Badge */}
        <div
          style={{
            width: 90,
            height: 90,
            borderRadius: 24,
            background: "linear-gradient(135deg, #FF3366, #FF6600)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFF",
            fontSize: 44,
            fontWeight: 900,
            boxShadow: "0 10px 30px rgba(255,51,102,0.5)",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          CB
        </div>

        {/* Title details */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(15, 23, 42, 0.9)",
            padding: "16px 32px",
            borderRadius: 20,
            border: "2px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
            backdropFilter: "blur(10px)",
          }}
        >
          <span
            style={{
              fontSize: 40,
              fontWeight: 900,
              color: "#38BDF8",
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Access Token vs Refresh Token
          </span>
          <span
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#94A3B8",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Subscribe to @CodeBetter
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
