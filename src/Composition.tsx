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
import { MinimalMotionEssence, REATopicMotionGraphics } from "./components/REAMotionGraphics";
import { FollowCard } from "./components/FollowCard";
import captionsData from "../public/captions.json";

export const PolishedReelVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Subtle camera punch-zoom at splice cuts (f368, f480, f535, f712, f750) to smooth jump cuts
  const getCameraScale = (): number => {
    if (frame < 368) {
      return interpolate(frame, [0, 368], [1.0, 1.03]);
    }
    if (frame < 480) {
      const spr = spring({ frame: frame - 368, fps, config: { damping: 14, stiffness: 180 } });
      return interpolate(spr, [0, 1], [1.01, 1.045]);
    }
    if (frame < 535) {
      return interpolate(frame, [480, 535], [1.01, 1.025]);
    }
    if (frame < 712) {
      const spr = spring({ frame: frame - 535, fps, config: { damping: 14, stiffness: 180 } });
      return interpolate(spr, [0, 1], [1.0, 1.04]);
    }
    if (frame < 750) {
      return interpolate(frame, [712, 750], [1.015, 1.03]);
    }
    return interpolate(frame, [750, 876], [1.035, 1.0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  };

  const camScale = getCameraScale();

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        backgroundColor: "#000000",
        overflow: "hidden",
      }}
    >
      {/* Layer 1: Full Uncropped Talking-Head Video (1920x1080) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${camScale})`,
          transformOrigin: "62% 45%",
        }}
      >
        <OffthreadVideo
          src={staticFile("video_input.mp4")}
          style={{
            width: 1920,
            height: 1080,
            objectFit: "cover",
          }}
        />
      </div>

      {/* Layer 2: Simple & Minimal Motion Essence (Top-Left Reticle, Telemetry, Cut Shockwaves) */}
      <MinimalMotionEssence />

      {/* Layer 3: Strong Hook Typography + Temporary GitHub Repo Overlay + Topic Overlays + Kinetic Comment "REA" CTA */}
      <REATopicMotionGraphics />

      {/* Layer 4: Word-Level Synced Roman Hinglish Captions */}
      <MinimalCaptions captions={captionsData} />

      {/* Layer 5: Enlarged Verified Follow Card in the Left Motion-Graphics Zone (Frames 792 - 876 | 26.40s - 29.20s) */}
      <FollowCard
        startFrame={792}
        pageName="Code_baithak"
        handle="@code_baithak"
        avatarFileName="avatar.jpg"
      />
    </div>
  );
};
