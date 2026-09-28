import React, { useMemo } from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import captionsData from "../../public/captions.json";

export interface WordItem {
  word?: string;
  text?: string;
  startMs: number;
  endMs: number;
}

export interface CaptionItem {
  text: string;
  startMs: number;
  endMs: number;
  words?: WordItem[];
}

interface AppleLiquidCaptionsProps {
  captions?: CaptionItem[];
}

export const AppleLiquidCaptions: React.FC<AppleLiquidCaptionsProps> = ({
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

  // Gentle, smooth entrance for the pill (zero jitter / popping)
  const captionStartFrame = Math.floor((activeCaption.startMs / 1000) * fps);
  const localFrame = frame - captionStartFrame;

  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 18, stiffness: 140 },
  });

  const opacity = interpolate(enterSpring, [0, 1], [0, 1]);
  const translateY = interpolate(enterSpring, [0, 1], [14, 0]);

  const words = activeCaption.words || [];

  return (
    <div
      style={{
        position: "absolute",
        bottom: 180,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 40px",
        zIndex: 42,
        opacity,
        transform: `translateY(${translateY}px)`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          // Apple Liquid Glass Styling
          backgroundColor: "rgba(10, 15, 26, 0.72)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          padding: "14px 32px",
          borderRadius: 36,
          border: "1.5px solid rgba(255, 255, 255, 0.18)",
          boxShadow: "0 14px 40px rgba(0, 0, 0, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.25)",
          maxWidth: 920,
          display: "inline-flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          lineHeight: 1.4,
        }}
      >
        {words.map((w, idx) => {
          const wordText = w.word || w.text || "";
          const isWordActive =
            currentTimeMs >= w.startMs && currentTimeMs <= w.endMs;

          const isKeyTechWord = [
            "pdf",
            "sejda",
            "edit",
            "offer",
            "document",
            "bill",
            "free",
            "pro",
            "code_baithak",
            "google",
          ].some((term) => wordText.toLowerCase().includes(term));

          const activeColor = isKeyTechWord ? "#00F0FF" : "#FFE500";

          return (
            <span
              key={idx}
              style={{
                display: "inline-block",
                margin: "0 7px",
                color: isWordActive ? activeColor : "#FFFFFF",
                fontSize: 36,
                fontWeight: isWordActive ? 800 : 600,
                letterSpacing: "-0.015em",
                fontFamily:
                  "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                textShadow: isWordActive
                  ? `0 0 20px ${activeColor}, 0 2px 10px rgba(0, 0, 0, 0.95)`
                  : "0 2px 6px rgba(0, 0, 0, 0.8)",
                transform: isWordActive ? "scale(1.06)" : "scale(1)",
                transition: "color 0.08s ease, transform 0.08s ease",
              }}
            >
              {wordText}
            </span>
          );
        })}
      </div>
    </div>
  );
};
