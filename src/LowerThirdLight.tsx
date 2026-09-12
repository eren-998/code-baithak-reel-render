import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate, AbsoluteFill } from "remotion";

export const LowerThirdLight: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

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
  const slideX = interpolate(introSpring, [0, 1], [-80, 0]);

  if (opacity <= 0.01) return null;

  return (
    <AbsoluteFill style={{ pointerEvents: "none", paddingLeft: 50, paddingTop: 120 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          opacity,
          transform: `translateX(${slideX}px)`,
        }}
      >
        <div
          style={{
            width: 70,
            height: 70,
            borderRadius: 18,
            backgroundColor: "#FF3366",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFF",
            fontSize: 32,
            fontWeight: 900,
            fontFamily: "sans-serif",
          }}
        >
          CB
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(15, 23, 42, 0.95)",
            padding: "12px 24px",
            borderRadius: 16,
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <span
            style={{
              fontSize: 28,
              fontWeight: 900,
              color: "#38BDF8",
              fontFamily: "sans-serif",
              textTransform: "uppercase",
            }}
          >
            Access Token vs Refresh Token
          </span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#CBD5E1",
              fontFamily: "sans-serif",
            }}
          >
            @CodeBetter
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
