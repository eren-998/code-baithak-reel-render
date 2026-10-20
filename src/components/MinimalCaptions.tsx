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

  // Local spring entrance for the caption group (damping 18, stiffness 120)
  const captionStartFrame = Math.floor((activeCaption.startMs / 1000) * fps);
  const localFrame = Math.max(0, frame - captionStartFrame);

  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 18, stiffness: 120 },
  });

  const opacity = interpolate(enterSpring, [0, 1], [0, 1]);
  const translateY = interpolate(enterSpring, [0, 1], [12, 0]);

  const words = activeCaption.words || [];

  return (
    <div
      style={{
        position: "absolute",
        bottom: 52,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 50px",
        zIndex: 40,
        opacity,
        transform: `translateY(${translateY}px)`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          padding: "14px 32px",
          borderRadius: 28,
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          maxWidth: 920,
          display: "inline-flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "10px",
          rowGap: "4px",
          textAlign: "center",
        }}
      >
        {words.length > 0 ? (
          words.map((w, idx) => {
            const label = w.word ?? w.text ?? "";
            const isWordActive =
              currentTimeMs >= w.startMs && currentTimeMs <= w.endMs;

            const wordStartFrame = Math.floor((w.startMs / 1000) * fps);
            const wordLocalFrame = Math.max(0, frame - wordStartFrame);

            const wordPopSpring = spring({
              frame: wordLocalFrame,
              fps,
              config: { damping: 14, stiffness: 200 },
            });

            const wordScale = isWordActive
              ? interpolate(wordPopSpring, [0, 1], [0.96, 1.08])
              : 1;

            return (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  color: isWordActive ? "#FFE500" : "#FFFFFF",
                  fontSize: 36,
                  fontWeight: 800,
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  textShadow: isWordActive
                    ? "0 0 18px rgba(255, 229, 0, 0.55), 0 2px 8px rgba(0, 0, 0, 0.8)"
                    : "0 2px 8px rgba(0, 0, 0, 0.6)",
                  transform: `scale(${wordScale})`,
                }}
              >
                {label}
              </span>
            );
          })
        ) : (
          <span
            style={{
              color: "#FFFFFF",
              fontSize: 36,
              fontWeight: 800,
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.6)",
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
