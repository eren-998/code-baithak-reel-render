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
    if (frame < 116) {
      return interpolate(frame, [0, 116], [1.0, 1.035]);
    }
    if (frame < 183) {
      const spr = spring({ frame: frame - 116, fps, config: { damping: 14, stiffness: 180 } });
      return interpolate(spr, [0, 1], [1.02, 1.065]);
    }
    if (frame < 231) {
      return interpolate(frame, [183, 231], [1.01, 1.03]);
    }
    if (frame < 310) {
      const spr = spring({ frame: frame - 231, fps, config: { damping: 14, stiffness: 180 } });
      return interpolate(spr, [0, 1], [1.01, 1.065]);
    }
    if (frame < 418) {
      return interpolate(frame, [310, 418], [1.0, 1.035]);
    }
    if (frame < 513) {
      const spr = spring({ frame: frame - 418, fps, config: { damping: 14, stiffness: 180 } });
      return interpolate(spr, [0, 1], [1.01, 1.065]);
    }
    if (frame < 591) {
      return interpolate(frame, [513, 591], [1.0, 1.03]);
    }
    if (frame < 674) {
      const spr = spring({ frame: frame - 591, fps, config: { damping: 14, stiffness: 180 } });
      return interpolate(spr, [0, 1], [1.01, 1.065]);
    }
    if (frame < 772) {
      return interpolate(frame, [674, 772], [1.0, 1.035]);
    }
    return interpolate(frame, [772, 869], [1.055, 1.0], {
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
      {/* Layer 1: Rough-Cut Source Video (1080x1920) with AE Dynamic Camera Zoom Cuts */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${camScale})`,
          transformOrigin: "50% 42%",
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

      {/* Layer 2: Black footer vignette */}
      <BlackFooterFade height={480} />

      {/* Layer 3: After Effects Ambient Motion Essence (Viewfinder Reticle, Crosshairs, Cut Shockwaves) */}
      <AEMotionEssence />

      {/* Layer 4: After Effects Topic Motion Graphics & Kinetic Typography (Zero Web Boxes) */}
      <AETopicMotionGraphics />

      {/* Layer 5: Word-Level Synced Roman Hinglish Captions */}
      <MinimalCaptions captions={captionsData} />

      {/* Layer 6: Top-Right Verified Follow Card (Frames 772 - 869 | 25.74s - 29.02s)
          Spoken: "apne bhai ke channel Code Baithak ko follow kar sakte hain!" */}
      <FollowCard
        startFrame={772}
        pageName="Code_baithak"
        handle="@code_baithak"
        avatarFileName="avatar.jpg"
      />
    </div>
  );
};
