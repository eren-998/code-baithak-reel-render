import React from "react";
import { OffthreadVideo, staticFile } from "remotion";
import { MinimalCaptions } from "./components/MinimalCaptions";
import { FollowCard } from "./components/FollowCard";
import captionsData from "../public/captions.json";

export const PolishedReelVideo: React.FC = () => {
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
      {/* Layer 1: Cleaned 1920x1080 Video */}
      <OffthreadVideo
        src={staticFile("video_input.mp4")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          height: 1080,
          objectFit: "cover",
        }}
      />

      {/* Layer 2: Word-Level Synchronized Roman Hinglish Captions */}
      <MinimalCaptions captions={captionsData} />

      {/* Layer 3: Liquid Glass Follow Card (Top-Right, triggered at 56.5s / frame 1695) */}
      <FollowCard
        startFrame={1695}
        pageName="code_baithak"
        handle="@code_baithak"
        avatarFileName="avatar.jpg"
      />
    </div>
  );
};
