import React from "react";
import { OffthreadVideo, staticFile } from "remotion";
import { BlackFooterFade } from "./components/BlackFooterFade";
import { MinimalCaptions } from "./components/MinimalCaptions";
import { IntroHookKinetic } from "./components/IntroHookKinetic";
import { MinimalCommentCTA } from "./components/MinimalCommentCTA";
import { FollowCard } from "./components/FollowCard";
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
      {/* Layer 1: Source video - OffthreadVideo for frame-perfect sync (1080x1920 full frame) */}
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

      {/* Layer 3: Word-Level Synced Hinglish Captions (Bottom: 210px, stops completely during question) */}
      <MinimalCaptions captions={captionsData} />

      {/* Layer 4: Opening Hook Kinetic Typography (Skill: remotion-intro-hook)
          Zero boxes/cards, floating text on chest (Y: 1040px) - FACE 100% UNBLOCKED */}
      <IntroHookKinetic />

      {/* Layer 5: Comment CTA Pill (Frames 455 - 550 | 15.2s - 18.3s)
          Spoken: "video ke comment section mein likh dena DETAIL" */}
      <MinimalCommentCTA startFrame={455} keyword="DETAIL" />

      {/* Layer 6: Top-Right Verified Follow Card (Frames 665 - 794 | 22.2s - 26.47s)
          Spoken: "channel Code Baithak ko follow kar lena tab tak" */}
      <FollowCard
        startFrame={665}
        pageName="Code_baithak"
        handle="@code_baithak"
        avatarFileName="avatar.jpg"
      />
    </div>
  );
};
