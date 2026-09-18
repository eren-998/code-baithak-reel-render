import React from "react";
import { OffthreadVideo, staticFile } from "remotion";
import { BlackFooterFade } from "./components/BlackFooterFade";
import { MinimalCaptions } from "./components/MinimalCaptions";
import { FollowCard } from "./components/FollowCard";
import { SaveThisReelCTA } from "./components/SaveThisReelCTA";
import { TechnicalMotionEssence } from "./components/TechnicalMotionEssence";
import {
  JWTHookCard,
  GenZEpisodeIntro,
  HeaderCard,
  PayloadCard,
  PayloadWarningCard,
  SignatureCard,
  RecapDiagramCard,
} from "./components/MotionGraphics";
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
      {/* Layer 1: Source video - full frame 1080x1920 */}
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

      {/* Layer 4: Technical Motion Essence Micro-Chips (Bottom: 285px) */}
      <TechnicalMotionEssence />

      {/* Layer 5: Upper Hero Motion Graphics (Above Face: top 90px - 340px) */}
      {/* Hook: 0-8s → JWT = 3 Components 🔥 */}
      <JWTHookCard />

      {/* Gen Z Episode 17 Intro: 9.3s - 15.5s → Stylish kinetic typography & streak */}
      <GenZEpisodeIntro />

      {/* Header section: 16.2s - 23.7s → HEADER → HOW? + Algorithm highlight */}
      <HeaderCard />

      {/* Payload section: 23.8s - 32.5s → PAYLOAD → WHAT? + User claims data */}
      <PayloadCard />

      {/* Warning: 32.6s - 41.0s → ENCODED ≠ ENCRYPTED + ❌ Passwords in Payload */}
      <PayloadWarningCard />

      {/* Signature section: 41.2s - 49.2s → SIGNATURE → AUTHENTIC? 🔐 + Tamper check */}
      <SignatureCard />

      {/* Recap diagram: 49.2s - 56.5s → Fast cuts 3-part summary */}
      <RecapDiagramCard />

      {/* Layer 6: Save This Reel CTA (Replaces Comment CTA) at ~56.5s */}
      <SaveThisReelCTA startFrame={1695} />

      {/* Layer 7: Follow Card for @code_baithak at ~58.0s */}
      <FollowCard
        startFrame={1740}
        pageName="Code_baithak"
        handle="@code_baithak"
        avatarFileName="avatar.jpg"
      />
    </div>
  );
};
