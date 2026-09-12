import React, { useMemo } from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import captionsData from "../../public/captions.json";

export interface WordItem {
  word: string;
  startMs: number;
  endMs: number;
}

export interface CaptionItem {
  text: string;
  startMs: number;
  endMs: number;
  words?: WordItem[];
}

interface MinimalCaptionsProps {
  captions?: CaptionItem[];
}

export const MinimalCaptions: React.FC<MinimalCaptionsProps> = ({
  captions = captionsData as CaptionItem[],
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentTimeMs = (frame / fps) * 1000;

  const activeCaption = useMemo(() => {
    return captions.find(
      (item) => currentTimeMs >= item.startMs && currentTimeMs <= item.endMs
    );
  }, [captions, currentTimeMs]);

  if (!activeCaption) return null;

  // Local spring entrance for the pill
  const captionStartFrame = Math.floor((activeCaption.startMs / 1000) * fps);
  const localFrame = frame - captionStartFrame;

  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 16, stiffness: 140 },
  });

  const opacity = interpolate(enterSpring, [0, 1], [0, 1]);
  const translateY = interpolate(enterSpring, [0, 1], [15, 0]);
  const scale = interpolate(enterSpring, [0, 1], [0.94, 1]);

  const words = activeCaption.words || [];

  return (
    <div
      style={{
        position: "absolute",
        bottom: 190,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 40px",
        zIndex: 42,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(10, 15, 26, 0.72)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          padding: "16px 36px",
          borderRadius: 32,
          border: "1.5px solid rgba(255, 255, 255, 0.18)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
          maxWidth: 960,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "12px",
          rowGap: "8px",
          textAlign: "center",
        }}
      >
        {words.length > 0 ? (
          words.map((w, idx) => {
            const isWordActive =
              currentTimeMs >= w.startMs && currentTimeMs <= w.endMs;

            return (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  color: isWordActive ? "#FFE500" : "#FFFFFF",
                  fontSize: 40,
                  fontWeight: isWordActive ? 900 : 800,
                  letterSpacing: "-0.02em",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  textShadow: isWordActive
                    ? "0 0 25px rgba(255, 229, 0, 0.85), 0 2px 8px rgba(0, 0, 0, 0.8)"
                    : "0 2px 6px rgba(0, 0, 0, 0.7)",
                  transform: isWordActive ? "scale(1.12)" : "scale(1)",
                  transition: "color 0.08s ease, transform 0.08s ease",
                }}
              >
                {w.word}
              </span>
            );
          })
        ) : (
          <span
            style={{
              color: "#FFFFFF",
              fontSize: 40,
              fontWeight: 800,
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            {activeCaption.text}
          </span>
        )}
      </div>
    </div>
  );
};
