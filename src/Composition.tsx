import React from "react";
import { OffthreadVideo, staticFile } from "remotion";
import { BlackFooterFade } from "./components/BlackFooterFade";
import { AppleLiquidCaptions } from "./components/AppleLiquidCaptions";
import { KineticHookTypography } from "./components/KineticHookTypography";
import { FollowCard } from "./components/FollowCard";
import {
  SejdaWebsiteReveal,
  DocumentVarietyCard,
  ExactFontMatchCard,
  FreeLimitBadge,
} from "./components/SejdaMotionGraphics";
import captionsData from "../public/captions.json";

export const PolishedReelVideo: React.FC = () => {
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
      {/* Layer 1: Source video - full frame 1080x1920 H.264 */}
      <OffthreadVideo
        src={staticFile("video_input.mp4")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1920,
          objectFit: "cover",
        }}
      />

      {/* Layer 2: Black footer vignette */}
      <BlackFooterFade height={450} />

      {/* Layer 3: Word-Level Synced Hinglish Captions (Bottom: 180px, Apple Liquid Glass style) */}
      <AppleLiquidCaptions captions={captionsData} />

      {/* Layer 4: Opening Hook Kinetic Typography (Frames 0 - 112 | 0.0s - 3.7s)
          After Effects style floating over open chest canvas (Y: 860px) - HEAD 100% UNBLOCKED */}
      <KineticHookTypography />

      {/* Layer 5: Short & Simple Motion Graphic Badges (Frames 112 - 575) */}
      <SejdaWebsiteReveal />
      <DocumentVarietyCard />
      <ExactFontMatchCard />
      <FreeLimitBadge />

      {/* Layer 6: Top-Right Follow Card (Frames 590 - 668 | 19.6s - 22.25s) */}
      <FollowCard
        startFrame={590}
        pageName="Code_baithak"
        handle="@code_baithak"
        avatarFileName="avatar.jpg"
      />
    </div>
  );
};
