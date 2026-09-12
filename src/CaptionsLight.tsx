import React from "react";
import { useCurrentFrame, useVideoConfig, spring, AbsoluteFill } from "remotion";
import captionsData from "./captions.json";

export interface CaptionWord {
  text: string;
  startMs: number;
  endMs: number;
  timestampMs: number;
}

// Map word timestamps to the pre-cut timeline:
const adjustTime = (ms: number): number => {
  if (ms <= 9340) return ms;
  if (ms <= 32400) return ms - 880;
  if (ms <= 40280) return ms - 2020;
  return ms - 2820;
};

const adjustedCaptions: CaptionWord[] = (captionsData as CaptionWord[]).map((c) => ({
  ...c,
  startMs: adjustTime(c.startMs),
  endMs: adjustTime(c.endMs),
}));

export const CaptionsLight: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentMs = (frame / fps) * 1000;

  // Active word index
  const activeIndex = adjustedCaptions.findIndex(
    (c) => currentMs >= c.startMs && currentMs <= c.endMs + 120
  );

  if (activeIndex === -1) return null;

  // Show 3 words at a time for optimal mobile reading
  const startIndex = Math.max(0, activeIndex - 1);
  const endIndex = Math.min(adjustedCaptions.length - 1, activeIndex + 1);
  const visibleWords = adjustedCaptions.slice(startIndex, endIndex + 1);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 220,
        pointerEvents: "none",
        translate: "-363px 334.2px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px 16px",
          backgroundColor: "rgba(15, 23, 42, 0.88)",
          padding: "16px 28px",
          borderRadius: 24,
          border: "2px solid rgba(56, 189, 248, 0.4)",
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.6)",
          maxWidth: "88%",
        }}
      >
        {visibleWords.map((wordObj, i) => {
          const isActive = startIndex + i === activeIndex;
          const scale = isActive
            ? spring({
                frame: frame - (wordObj.startMs / 1000) * fps,
                fps,
                config: { damping: 12, stiffness: 200 },
              })
            : 1;

          return (
            <span
              key={`${wordObj.startMs}-${i}`}
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: isActive ? 44 : 36,
                fontWeight: 900,
                color: isActive ? "#FFE600" : "#FFFFFF",
                textShadow: isActive
                  ? "0 0 16px rgba(255, 230, 0, 0.8)"
                  : "0 2px 8px rgba(0,0,0,0.8)",
                transform: `scale(${isActive ? Math.max(1, scale * 1.12) : 1})`,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                transition: "color 0.08s ease",
              }}
            >
              {wordObj.text}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
