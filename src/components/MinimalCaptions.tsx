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

  // Local spring entrance for the caption group
  const captionStartFrame = Math.floor((activeCaption.startMs / 1000) * fps);
  const localFrame = frame - captionStartFrame;

  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 14, stiffness: 180 },
  });

  const opacity = interpolate(enterSpring, [0, 1], [0, 1]);
  const translateY = interpolate(enterSpring, [0, 1], [18, 0]);
  const scale = interpolate(enterSpring, [0, 1], [0.92, 1]);

  const words = activeCaption.words || [];

  return (
    <div
      style={{
        position: "absolute",
        bottom: 210,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 36px",
        zIndex: 42,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(8, 12, 22, 0.55)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          padding: "12px 26px",
          borderRadius: 30,
          border: "1.5px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 10px 35px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
          maxWidth: 860,
          display: "inline-flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "10px",
          rowGap: "6px",
          textAlign: "center",
        }}
      >
        {words.length > 0 ? (
          words.map((w, idx) => {
            const isWordActive =
              currentTimeMs >= w.startMs && currentTimeMs <= w.endMs;

            const wordStartFrame = Math.floor((w.startMs / 1000) * fps);
            const wordLocalFrame = Math.max(0, frame - wordStartFrame);

            // After Effects style elastic pop per word
            const wordPopSpring = spring({
              frame: wordLocalFrame,
              fps,
              config: { damping: 10, stiffness: 220 },
            });

            const wordScale = isWordActive
              ? interpolate(wordPopSpring, [0, 1], [0.95, 1.16])
              : 1;

            const wordY = isWordActive
              ? interpolate(wordPopSpring, [0, 1], [3, -2])
              : 0;

            const isKeyTechWord = ["AI", "Google", "developer", "developers", "product", "automate", "automation", "whitewash", "CodeBaithak", "SAVE"].some(
              (term) => w.word.toLowerCase().includes(term.toLowerCase())
            );

            const activeColor = isKeyTechWord ? "#00F0FF" : "#FFE600";

            return (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  color: isWordActive ? activeColor : "#FFFFFF",
                  fontSize: 38,
                  fontWeight: isWordActive ? 900 : 800,
                  letterSpacing: "-0.02em",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  textShadow: isWordActive
                    ? `0 0 25px ${activeColor}, 0 2px 10px rgba(0, 0, 0, 0.95)`
                    : "0 2px 8px rgba(0, 0, 0, 0.8)",
                  transform: `translateY(${wordY}px) scale(${wordScale})`,
                  transition: "color 0.06s ease",
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
              fontSize: 42,
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
