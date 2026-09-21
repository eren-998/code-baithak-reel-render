import React from "react";
import { OffthreadVideo, staticFile } from "remotion";
import { BlackFooterFade } from "./components/BlackFooterFade";
import { MinimalCaptions } from "./components/MinimalCaptions";
import { KineticHookTypography } from "./components/KineticHookTypography";
import { FollowCard } from "./components/FollowCard";
import { SaveThisReelCTA } from "./components/SaveThisReelCTA";
import { TechnicalMotionEssence } from "./components/TechnicalMotionEssence";
import {
  AIConsultantCard,
  AIIntegrationClaimCard,
  DevWhitewashAlertCard,
  LogicalShiftOpportunityCard,
  MarketRelevantTechStackCard,
  Part2RoadmapTeaserCard,
  StayAIRelevantBanner,
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

      {/* Layer 3: Word-Level Synced Hinglish Captions (Bottom: 190px, active after hook at frame 140) */}
      <MinimalCaptions captions={captionsData} />

      {/* Layer 4: Opening Hook Kinetic Typography (Frames 0 - 140 | 0.0s - 4.7s)
          Massive, bold, multi-colored, pure alpha transparency directly over raw footage */}
      <KineticHookTypography />

      {/* Layer 5: Technical Motion Essence Micro-Chips (Bottom: 285px) */}
      <TechnicalMotionEssence />

      {/* Layer 6: Upper Hero Motion Graphics Cards */}
      {/* 1. AI Consultant & Google Search (Frames 240 - 450 | ~8.0s - 15.0s) */}
      <AIConsultantCard />

      {/* 2. Bring Any Product ➔ AI Integrated + WHAT?! punch (Frames 780 - 1020 | ~26.0s - 34.0s) */}
      <AIIntegrationClaimCard />

      {/* 3. Dev Whitewash Extinction Alert (Frames 1080 - 1410 | ~36.0s - 47.0s) */}
      <DevWhitewashAlertCard />

      {/* 4. The Logical Move: Companies Need AI Builders (Frames 1500 - 1950 | ~50.0s - 65.0s) */}
      <LogicalShiftOpportunityCard />

      {/* 5. Future-Proof Tech Stack Grid (Frames 2040 - 2400 | ~68.0s - 80.0s) */}
      <MarketRelevantTechStackCard />

      {/* 6. Part 2 A-to-Z AI Developer Roadmap Teaser (Frames 2490 - 2760 | ~83.0s - 92.0s) */}
      <Part2RoadmapTeaserCard />

      {/* 7. Save This Reel Interactive CTA (Frames 2760 - 2950 | ~92.0s - 98.3s) */}
      <SaveThisReelCTA
        startFrame={2760}
        endFrame={2950}
        subtitle="Part 2 A-to-Z Roadmap dropping next!"
      />

      {/* 8. Outro Banner: Stay AI Relevant (Frames 2950 - 3230 | ~98.3s - 107.7s) */}
      <StayAIRelevantBanner />

      {/* Layer 7: Verified Top-Right Follow Card for @code_baithak (Frames 3100 - 3230 | ~103.3s - 107.7s) */}
      <FollowCard
        startFrame={3100}
        pageName="Code_baithak"
        handle="@code_baithak"
        avatarFileName="avatar.jpg"
      />
    </div>
  );
};
