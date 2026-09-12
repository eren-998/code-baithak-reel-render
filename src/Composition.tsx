import React from "react";
import { OffthreadVideo, staticFile } from "remotion";
import { BlackFooterFade } from "./components/BlackFooterFade";
import { MinimalCaptions } from "./components/MinimalCaptions";
import { FollowCard } from "./components/FollowCard";
import { MinimalCommentCTA } from "./components/MinimalCommentCTA";
import {
  HeroContentCreatorCard,
  HeroMonetizeQuestionCard,
  HeroOfferingsCard,
  HeroSkillsListCard,
  HeroRevenueCard,
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

      {/* Layer 3: Word-Level Synced Bold Hinglish Captions */}
      <MinimalCaptions captions={captionsData} />

      {/* Layer 4: Prominent Hero Motion Graphics */}
      <HeroContentCreatorCard />
      <HeroMonetizeQuestionCard />
      <HeroOfferingsCard />
      <HeroSkillsListCard />
      <HeroRevenueCard />
      <MinimalCommentCTA startFrame={1075} keyword="MONEY" />

      {/* Layer 5: Code_baithak Follow Card (Top-Right) */}
      <FollowCard
        startFrame={1300}
        pageName="Code_baithak"
        handle="@code_baithak"
        avatarFileName="avatar.jpg"
      />
    </div>
  );
};
