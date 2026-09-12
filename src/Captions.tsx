import React from "react";
import { useCurrentFrame, useVideoConfig, spring, AbsoluteFill } from "remotion";
import captionsData from "./captions.json";

export interface CaptionWord {
  text: string;
  startMs: number;
  endMs: number;
  timestampMs: number;
}

// Adjust timestamps according to the jump cuts:
// Cut 1: 0 to 9340 ms (shift: 0)
// Cut 2: 10220 to 32400 ms (shift: -880 ms)
// Cut 3: 33540 to 40280 ms (shift: -880 - 1140 = -2020 ms)
// Cut 4: 41080 to 43460 ms (shift: -2020 - 800 = -2820 ms)
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

export const Captions: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentMs = (frame / fps) * 1000;

  // Find active word index
  const activeIndex = adjustedCaptions.findIndex(
    (c) => currentMs >= c.startMs && currentMs <= c.endMs + 150
  );

  if (activeIndex === -1) return null;

  // Show a group of 3-4 words centered on the active word
  const startIndex = Math.max(0, activeIndex - 1);
  const endIndex = Math.min(adjustedCaptions.length - 1, activeIndex + 2);
  const visibleWords = adjustedCaptions.slice(startIndex, endIndex + 1);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 420,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px 24px",
          backgroundColor: "rgba(10, 15, 30, 0.85)",
          padding: "24px 44px",
          borderRadius: 36,
          border: "3px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
          maxWidth: "88%",
          backdropFilter: "blur(12px)",
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
                fontSize: isActive ? 72 : 62,
                fontWeight: 900,
                color: isActive ? "#FFE600" : "#FFFFFF",
                textShadow: isActive
                  ? "0 0 24px rgba(255, 230, 0, 0.8), 0 4px 12px rgba(0,0,0,0.9)"
                  : "0 4px 10px rgba(0,0,0,0.8)",
                transform: `scale(${isActive ? Math.max(1, scale * 1.15) : 1})`,
                transition: "color 0.1s ease, transform 0.1s ease",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
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
