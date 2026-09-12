import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Img,
  staticFile,
} from "remotion";

interface DMNotificationProps {
  startFrame: number;
  handle?: string;
  message?: string;
  avatarFileName?: string;
}

export const DMNotification: React.FC<DMNotificationProps> = ({
  startFrame = 1125,
  handle = "@code_baithak",
  message = "Tool link bhej diya! Check your DM",
  avatarFileName = "avatar.jpg",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;

  if (localFrame < 0 || localFrame > 115) return null;

  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 16, stiffness: 90 },
  });
  const translateY = interpolate(enterSpring, [0, 1], [-100, 0]);
  const opacity = interpolate(enterSpring, [0, 1], [0, 1]);

  const exitProgress = interpolate(localFrame, [88, 110], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitEased = exitProgress * exitProgress;
  const exitY = interpolate(exitEased, [0, 1], [0, -120]);
  const exitOpacity = interpolate(exitEased, [0, 1], [1, 0]);

  const maxChars = message.length;
  const typedCount = Math.floor(
    interpolate(localFrame, [12, 12 + maxChars * 1.5], [0, maxChars], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const typedMessage = message.slice(0, typedCount);
  const dotPulse = Math.sin(localFrame * 0.15) * 0.3 + 0.7;

  return (
    <div
      style={{
        position: "absolute",
        top: 85,
        left: "50%",
        transform: `translateX(-50%) translateY(${translateY + exitY}px)`,
        opacity: opacity * exitOpacity,
        zIndex: 55,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          backgroundColor: "rgba(10, 12, 20, 0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          padding: "14px 26px 14px 16px",
          borderRadius: 44,
          border: "1.5px solid rgba(0, 149, 246, 0.35)",
          boxShadow:
            "0 18px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 149, 246, 0.2)",
          minWidth: 440,
          maxWidth: 720,
        }}
      >
        {/* Blue new-message dot */}
        <div
          style={{
            position: "absolute",
            top: -3,
            right: -3,
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: "#0095F6",
            boxShadow: "0 0 12px rgba(0, 149, 246, 0.8)",
            opacity: dotPulse,
          }}
        />

        {/* Avatar */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid rgba(0, 149, 246, 0.5)",
            flexShrink: 0,
          }}
        >
          <Img
            src={staticFile(avatarFileName)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: 800,
                fontFamily: "'Inter', system-ui, sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              {handle}
            </span>
            <span
              style={{
                color: "rgba(255, 255, 255, 0.4)",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              · now
            </span>
          </div>

          <span
            style={{
              color: "#38BDF8",
              fontSize: 16,
              fontWeight: 600,
              fontFamily: "'Inter', system-ui, sans-serif",
              letterSpacing: "-0.005em",
              whiteSpace: "nowrap",
            }}
          >
            {typedMessage}
            {typedCount < maxChars && (
              <span
                style={{
                  display: "inline-block",
                  width: 1.5,
                  height: 16,
                  backgroundColor: "#38BDF8",
                  marginLeft: 3,
                  verticalAlign: "middle",
                }}
              />
            )}
          </span>
        </div>

        {/* Custom Paperplane Send SVG */}
        <div
          style={{
            marginLeft: "auto",
            flexShrink: 0,
            paddingLeft: 10,
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0095F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" fill="rgba(0,149,246,0.2)" />
          </svg>
        </div>
      </div>
    </div>
  );
};
