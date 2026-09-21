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
  startFrame = 3100,
  pageName = "Code_baithak",
  handle = "@code_baithak",
  avatarFileName = "avatar.jpg",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;

  if (localFrame < 0) return null;

  // Slide in from right edge with bouncy elastic spring
  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 12, stiffness: 95 },
  });

  const translateX = interpolate(enterSpring, [0, 1], [350, 0]);
  const opacity = interpolate(enterSpring, [0, 1], [0, 1]);
  const scale = interpolate(enterSpring, [0, 1], [0.85, 1]);

  const pulseSpring = spring({
    frame: localFrame - 15,
    fps,
    config: { damping: 10, stiffness: 150 },
  });
  const buttonScale = interpolate(pulseSpring, [0, 1], [0.8, 1]);

  return (
    <div
      style={{
        position: "absolute",
        top: 100,
        right: 40,
        zIndex: 60,
        opacity,
        transform: `translateX(${translateX}px) scale(${scale})`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          backgroundColor: "rgba(10, 15, 26, 0.95)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          padding: "14px 26px 14px 14px",
          borderRadius: 60,
          border: "2px solid rgba(255, 255, 255, 0.28)",
          boxShadow:
            "0 24px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 149, 246, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.3)",
        }}
      >
        {/* Avatar with Instagram Gradient Ring (Enlarged to 70px) */}
        <div
          style={{
            position: "relative",
            width: 70,
            height: 70,
            borderRadius: "50%",
            background:
              "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            padding: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 20px rgba(220, 39, 67, 0.45)",
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
              border: "2.5px solid #0a0f1a",
            }}
          />
        </div>

        {/* Page Name + Handle */}
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: 24,
                fontWeight: 900,
                letterSpacing: "-0.01em",
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              {pageName}
            </span>
            {/* Verified Badge */}
            <svg
              width="22"
              height="22"
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
              fontSize: 16,
              fontWeight: 800,
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
            width: 1.5,
            height: 38,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            margin: "0 6px",
          }}
        />

        {/* Follow Button (Enlarged) */}
        <div
          style={{
            background: "linear-gradient(135deg, #0095F6 0%, #0066CC 100%)",
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: 900,
            padding: "11px 22px",
            borderRadius: 28,
            boxShadow: "0 6px 22px rgba(0, 149, 246, 0.5)",
            display: "flex",
            alignItems: "center",
            gap: 6,
            letterSpacing: "0.02em",
            fontFamily: "'Inter', system-ui, sans-serif",
            transform: `scale(${buttonScale})`,
          }}
        >
          <span style={{ fontSize: 18, lineHeight: 1, fontWeight: 900 }}>+</span>{" "}
          Follow
        </div>
      </div>
    </div>
  );
};
