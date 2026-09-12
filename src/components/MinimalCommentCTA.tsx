import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

interface MinimalCommentCTAProps {
  startFrame: number;
  keyword?: string;
}

export const MinimalCommentCTA: React.FC<MinimalCommentCTAProps> = ({
  startFrame,
  keyword = "MONEY",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;

  if (localFrame < 0) return null;

  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 16, stiffness: 100 },
  });

  const opacity = interpolate(enterSpring, [0, 1], [0, 1]);
  const translateY = interpolate(enterSpring, [0, 1], [30, 0]);
  const scale = interpolate(enterSpring, [0, 1], [0.9, 1]);

  const charsCount = Math.floor(
    interpolate(localFrame, [12, 12 + keyword.length * 4], [0, keyword.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const typedKeyword = keyword.slice(0, charsCount);
  const showCursor = localFrame >= 12 && Math.floor(localFrame / 8) % 2 === 0;

  const exitFrame = 95;
  const exitOpacity =
    localFrame > exitFrame
      ? interpolate(localFrame, [exitFrame, exitFrame + 15], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 1;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 330,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 46,
        opacity: opacity * exitOpacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          backgroundColor: "rgba(10, 15, 26, 0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          padding: "14px 28px",
          borderRadius: 36,
          border: "1.5px solid rgba(0, 240, 255, 0.4)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 240, 255, 0.2)",
        }}
      >
        {/* SVG Message Icon */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(0, 240, 255, 0.15)",
            border: "1px solid rgba(0, 240, 255, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>

        <span
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: 24,
            fontWeight: 800,
            fontFamily: "'Inter', system-ui, sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          Comment
        </span>

        {/* Keyword pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(0, 240, 255, 0.18)",
            border: "1.5px solid #00F0FF",
            borderRadius: 20,
            padding: "6px 18px",
            minWidth: 90,
            boxShadow: "0 0 16px rgba(0, 240, 255, 0.4)",
          }}
        >
          <span
            style={{
              color: "#00F0FF",
              fontSize: 24,
              fontWeight: 900,
              fontFamily: "'Inter', system-ui, sans-serif",
              letterSpacing: "0.06em",
            }}
          >
            {typedKeyword}
          </span>
          {showCursor && (
            <span
              style={{
                display: "inline-block",
                width: 2,
                height: 24,
                backgroundColor: "#00F0FF",
                marginLeft: 4,
                borderRadius: 1,
              }}
            />
          )}
        </div>

        {/* SVG Arrow Down */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>
    </div>
  );
};
