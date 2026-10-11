import React from "react";
import {
  OffthreadVideo,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { BlackFooterFade } from "./components/BlackFooterFade";
import { MinimalCaptions } from "./components/MinimalCaptions";
import { AETopicMotionGraphics } from "./components/AETopicMotionGraphics";
import { AEMotionEssence } from "./components/AEMotionEssence";
import { FollowCard } from "./components/FollowCard";
import captionsData from "../public/captions.json";

export const PolishedReelVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // After Effects Dynamic Camera Punch-Zoom at splice boundaries to hide jump cuts seamlessly
  const getCameraScale = (): number => {
    // Seg 0: Clip 1 Hook (0 - 337)
    if (frame < 337) {
      return interpolate(frame, [0, 337], [1.0, 1.04]);
    }
    // Seg 1: Word to AI model (337 - 488)
    if (frame < 488) {
      const spr = spring({ frame: frame - 337, fps, config: { damping: 14, stiffness: 180 } });
      return interpolate(spr, [0, 1], [1.01, 1.055]);
    }
    // Seg 2: Converted into tokens (488 - 548)
    if (frame < 548) {
      return interpolate(frame, [488, 548], [1.015, 1.03]);
    }
    // Seg 3: Role of model & "The sun rises" (548 - 857)
    if (frame < 857) {
      const spr = spring({ frame: frame - 548, fps, config: { damping: 14, stiffness: 180 } });
      return interpolate(spr, [0, 1], [1.0, 1.05]);
    }
    // Seg 4: Predict "from" & 4-word context "East" (857 - 1429)
    if (frame < 1429) {
      return interpolate(frame, [857, 1429], [1.01, 1.045]);
    }
    // Seg 5: AI model just predicts the next word (1429 - 1483)
    if (frame < 1483) {
      const spr = spring({ frame: frame - 1429, fps, config: { damping: 14, stiffness: 180 } });
      return interpolate(spr, [0, 1], [1.02, 1.06]);
    }
    // Seg 6: Huge context & KV Caching (1483 - 1964)
    if (frame < 1964) {
      return interpolate(frame, [1483, 1964], [1.0, 1.045]);
    }
    // Seg 7: Fastest response (1964 - 2018)
    if (frame < 2018) {
      const spr = spring({ frame: frame - 1964, fps, config: { damping: 14, stiffness: 180 } });
      return interpolate(spr, [0, 1], [1.015, 1.06]);
    }
    // Seg 8: Answer part 1A (2018 - 2107)
    if (frame < 2107) {
      return interpolate(frame, [2018, 2107], [1.0, 1.03]);
    }
    // Seg 9: Sent as a single message at once (2107 - 2210)
    if (frame < 2210) {
      const spr = spring({ frame: frame - 2107, fps, config: { damping: 14, stiffness: 180 } });
      return interpolate(spr, [0, 1], [1.015, 1.055]);
    }
    // Seg 10: Server-triggered events & Outro (2210 - 2883)
    return interpolate(frame, [2210, 2883], [1.035, 1.0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  };

  const camScale = getCameraScale();

  return (
    <div
      style={{
        position: "relative",
        width: 1080,
        height: 1920,
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {/* Layer 1: Combined Rough-Cut Source Video (1080x1920) with AE Dynamic Camera Zoom Cuts */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${camScale})`,
          transformOrigin: "50% 38%",
        }}
      >
        <OffthreadVideo
          src={staticFile("video_input.mp4")}
          style={{
            width: 1080,
            height: 1920,
            objectFit: "cover",
          }}
        />
      </div>

      {/* Layer 2: Extended Black Footer Vignette for Footer-Up Explainer Diagrams */}
      <BlackFooterFade height={840} />

      {/* Layer 3: After Effects Ambient Motion Essence (Viewfinder Reticle, Crosshairs, Cut Shockwaves) */}
      <AEMotionEssence />

      {/* Layer 4: After Effects Explainer Motion Diagrams & Node Graphs (Footer-Up Zone) */}
      <AETopicMotionGraphics />

      {/* Layer 5: Word-Level Synced Captions */}
      <MinimalCaptions captions={captionsData} />

      {/* Layer 6: Top-Right Verified Follow Card (Frames 2730 - 2883 | 91.00s - 96.10s)
          Spoken: "And to get more such amazing videos, make sure you follow our channel Code Baithak." */}
      <FollowCard
        startFrame={2730}
        pageName="Code_baithak"
        handle="@code_baithak"
        avatarFileName="avatar.jpg"
      />
    </div>
  );
};
