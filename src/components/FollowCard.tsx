import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Img,
  staticFile,
} from "remotion";

interface FollowCardProps {
  startFrame: number;
  pageName?: string;
  handle?: string;
  avatarFileName?: string;
}

export const FollowCard: React.FC<FollowCardProps> = ({
  startFrame = 816,
  pageName = "code_baithak",
  handle = "@code_baithak",
  avatarFileName = "avatar.jpg",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;

  if (localFrame < 0) return null;

  // Slide in from top-right with spring
  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const translateX = interpolate(enterSpring, [0, 1], [280, 0]);
  const opacity = interpolate(enterSpring, [0, 1], [0, 1]);
  const scale = interpolate(enterSpring, [0, 1], [0.85, 1]);

  const pulseSpring = spring({
    frame: Math.max(0, localFrame - 15),
    fps,
    config: { damping: 10, stiffness: 150 },
  });
  const buttonScale = interpolate(pulseSpring, [0, 1], [0.85, 1]);

  return (
    <div
      style={{
        position: "absolute",
        top: 42,
        right: 40,
        zIndex: 50,
        opacity,
        transform: `translateX(${translateX}px) scale(${scale})`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          backgroundColor: "rgba(10, 15, 26, 0.85)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          padding: "14px 24px 14px 14px",
          borderRadius: 50,
          border: "1.5px solid rgba(255, 255, 255, 0.18)",
          boxShadow:
            "0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.25)",
        }}
      >
        {/* Avatar with Instagram Gradient Ring */}
        <div
          style={{
            position: "relative",
            width: 58,
            height: 58,
            borderRadius: "50%",
            background:
              "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            padding: 2.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 14px rgba(220, 39, 67, 0.35)",
            flexShrink: 0,
          }}
        >
          <Img
            src={staticFile(avatarFileName)}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #0a0f1a",
            }}
          />
        </div>

        {/* Page Name + Handle */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "-0.01em",
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              {pageName}
            </span>
            {/* Verified Badge */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                fill="#0095F6"
              />
              <path
                d="M10.0002 15.1702L6.83018 12.0002L5.41016 13.4102L10.0002 18.0002L19.0002 9.00016L17.5902 7.59016L10.0002 15.1702Z"
                fill="white"
              />
            </svg>
          </div>
          <span
            style={{
              color: "#0095F6",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "0.01em",
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            {handle}
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 1,
            height: 32,
            backgroundColor: "rgba(255, 255, 255, 0.16)",
            margin: "0 4px",
          }}
        />

        {/* Follow Button */}
        <div
          style={{
            background: "linear-gradient(135deg, #0095F6 0%, #0077E6 100%)",
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: 700,
            padding: "9px 18px",
            borderRadius: 24,
            boxShadow: "0 4px 16px rgba(0, 149, 246, 0.35)",
            display: "flex",
            alignItems: "center",
            gap: 4,
            letterSpacing: "0.02em",
            fontFamily: "'Inter', system-ui, sans-serif",
            transform: `scale(${buttonScale})`,
          }}
        >
          <span style={{ fontSize: 17, lineHeight: 1, fontWeight: 800 }}>+</span>{" "}
          Follow
        </div>
      </div>
    </div>
  );
};
