import React from "react";
import { OffthreadVideo, staticFile } from "remotion";
import { BlackFooterFade } from "./components/BlackFooterFade";
import { MinimalCaptions } from "./components/MinimalCaptions";
import { KineticHookTypography } from "./components/KineticHookTypography";
import { FollowCard } from "./components/FollowCard";
import {
  CoddyWebsiteBadge,
  InteractiveEditorBadge,
  CodingMadeEasyBadge,
  CommentLinkCTA,
} from "./components/CoddyMotionGraphics";
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

      {/* Layer 3: Word-Level Synced Hinglish Captions (Bottom: 190px) */}
      <MinimalCaptions captions={captionsData} />

      {/* Layer 4: Opening Hook Kinetic Typography (Frames 0 - 112 | 0.0s - 3.7s)
          Zero boxes, pure alpha floating directly in upper ceiling safe zone (Y: 75px) */}
      <KineticHookTypography />

      {/* Layer 5: Short & Simple Motion Graphic Badges (Frames 115 - 425) */}
      <CoddyWebsiteBadge />
      <InteractiveEditorBadge />
      <CodingMadeEasyBadge />

      {/* Layer 6: Outro Comment 'LINK' CTA (Frames 430 - 533) */}
      <CommentLinkCTA />

      {/* Layer 7: Top-Right Follow Card (Frames 440 - 533 | 14.6s - 17.75s) */}
      <FollowCard
        startFrame={440}
        pageName="Code_baithak"
        handle="@code_baithak"
        avatarFileName="avatar.jpg"
      />
    </div>
  );
};
