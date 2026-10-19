import React from "react";
import { OffthreadVideo, staticFile } from "remotion";
import { BlackFooterFade } from "./components/BlackFooterFade";
import { MinimalCaptions } from "./components/MinimalCaptions";
import { PythonLazyImportOverlays } from "./components/PythonLazyImportOverlays";
import { FollowCard } from "./components/FollowCard";
import captionsData from "../public/captions.json";

export const PolishedReelVideo: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: 1080,
        height: 1920,
        backgroundColor: "#000000",
        overflow: "hidden",
      }}
    >
      {/* Layer 1: Cleaned 1080x1920 Vertical Video */}
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

      {/* Layer 2: Bottom Vignette for Caption Readability */}
      <BlackFooterFade height={450} />

      {/* Layer 3: Minimal Top-Third Overlay Cards (Ref_anlyze_vid.mp4 style) */}
      <PythonLazyImportOverlays />

      {/* Layer 4: Word-Level Synchronized Roman Hinglish Captions */}
      <MinimalCaptions captions={captionsData} />

      {/* Layer 5: Liquid Glass Follow Card (Top-Right, triggered at 27.2s / frame 816) */}
      <FollowCard
        startFrame={816}
        pageName="code_baithak"
        handle="@code_baithak"
        avatarFileName="avatar.jpg"
      />
    </div>
  );
};
