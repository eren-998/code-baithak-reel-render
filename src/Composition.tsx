import React from "react";
import {
  OffthreadVideo,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { MinimalCaptions } from "./components/MinimalCaptions";
import { FollowCard } from "./components/FollowCard";
import { Act1ChaatShop } from "./samosa/Act1ChaatShop";
import { Act2HelperBridge } from "./samosa/Act2HelperBridge";
import { Act3DatabaseBottleneck } from "./samosa/Act3DatabaseBottleneck";
import { Act4RedisRamAndOutro } from "./samosa/Act4RedisRamAndOutro";
import captionsData from "../public/captions.json";

export const PolishedReelVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Dynamic 50/50 split-screen swap schedule:
  // Swap 1 (frame 354 / 11.80s): Facecam moves TOP, Animation moves BOTTOM
  // Swap 2 (frame 598 / 19.95s): Animation moves TOP, Facecam moves BOTTOM
  // Swap 3 (frame 1044 / 34.80s): Facecam moves TOP, Animation moves BOTTOM
  // Swap 4 (frame 1235 / 41.15s): Animation moves TOP, Facecam moves BOTTOM
  const swap1 = spring({
    frame: Math.max(0, frame - 354),
    fps,
    config: { damping: 16, stiffness: 110 },
  });
  const swap2 = spring({
    frame: Math.max(0, frame - 598),
    fps,
    config: { damping: 16, stiffness: 110 },
  });
  const swap3 = spring({
    frame: Math.max(0, frame - 1044),
    fps,
    config: { damping: 16, stiffness: 110 },
  });
  const swap4 = spring({
    frame: Math.max(0, frame - 1235),
    fps,
    config: { damping: 16, stiffness: 110 },
  });

  // Net progress: 0 = Animation TOP (y=0) & Facecam BOTTOM (y=960)
  //               1 = Animation BOTTOM (y=960) & Facecam TOP (y=0)
  const swapProgress =
    (swap1 ? (frame >= 354 ? swap1 : 0) : 0) -
    (swap2 ? (frame >= 598 ? swap2 : 0) : 0) +
    (swap3 ? (frame >= 1044 ? swap3 : 0) : 0) -
    (swap4 ? (frame >= 1235 ? swap4 : 0) : 0);

  const clampedSwap = Math.max(0, Math.min(1, swapProgress));

  const animationTopY = interpolate(clampedSwap, [0, 1], [0, 960]);
  const facecamTopY = interpolate(clampedSwap, [0, 1], [960, 0]);

  return (
    <div
      style={{
        position: "relative",
        width: 1080,
        height: 1920,
        backgroundColor: "#070A12",
        overflow: "hidden",
      }}
    >
      {/* PANEL A: 50% 2D CREATIVE ANIMATION STAGE (1080x960) */}
      <div
        style={{
          position: "absolute",
          top: animationTopY,
          left: 0,
          width: 1080,
          height: 960,
          overflow: "hidden",
          zIndex: 20,
          backgroundColor: "#0B0F19",
        }}
      >
        {frame < 354 && <Act1ChaatShop />}
        {frame >= 354 && frame < 598 && <Act2HelperBridge />}
        {frame >= 598 && frame < 968 && <Act3DatabaseBottleneck />}
        {frame >= 968 && <Act4RedisRamAndOutro />}
      </div>

      {/* PANEL B: 50% SPEAKER FACECAM STAGE (1080x960) */}
      <div
        style={{
          position: "absolute",
          top: facecamTopY,
          left: 0,
          width: 1080,
          height: 960,
          overflow: "hidden",
          zIndex: 15,
          backgroundColor: "#000000",
        }}
      >
        <OffthreadVideo
          src={staticFile("video_input.mp4")}
          style={{
            position: "absolute",
            top: -320,
            left: 0,
            width: 1080,
            height: 1920,
            objectFit: "cover",
          }}
        />
        {/* Subtle top/bottom edge vignette inside facecam panel */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(7,10,18,0.35) 0%, rgba(7,10,18,0) 16%, rgba(7,10,18,0) 84%, rgba(7,10,18,0.45) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* GLOWING 50/50 SEAM DIVIDER LINE AT Y = 960 */}
      <div
        style={{
          position: "absolute",
          top: 958,
          left: 0,
          width: 1080,
          height: 4,
          background:
            "linear-gradient(90deg, rgba(255,229,0,0.15) 0%, rgba(255,229,0,0.85) 50%, rgba(255,229,0,0.15) 100%)",
          boxShadow: "0 0 20px rgba(255, 229, 0, 0.5)",
          zIndex: 45,
          pointerEvents: "none",
        }}
      />

      {/* CENTER-SEAM SYNCHRONIZED ROMAN HINGLISH CAPTIONS */}
      <MinimalCaptions captions={captionsData} />

      {/* LIQUID GLASS FOLLOW CARD (Triggered at 49.5s / frame 1485) */}
      <FollowCard
        startFrame={1485}
        pageName="code_baithak"
        handle="@code_baithak"
        avatarFileName="avatar.jpg"
      />
    </div>
  );
};
