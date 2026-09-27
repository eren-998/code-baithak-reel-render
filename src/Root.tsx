import { Composition } from "remotion";
import { PolishedReelVideo } from "./Composition";
import { TalkingHeadComposition } from "./TalkingHeadComposition";
import { TalkingHeadLightComposition } from "./TalkingHeadLightComposition";
import { APUComposition } from "./apu/APUComposition";
import { CarouselSequence } from "./carousel/CarouselSequence";
import {
  Slide1Cover,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
} from "./carousel";
import { ShowreelMaster } from "./showreel/ShowreelMaster";

export const RemotionRoot = () => {
  return (
    <>
      {/* 15-Second Motion Designer Master Showreel */}
      <Composition
        id="AnnieShowreel"
        component={ShowreelMaster}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
      />
      {/* 6-Slide Jev AI Instagram Carousel */}
      <Composition id="CarouselSlide1" component={Slide1Cover} durationInFrames={1} fps={30} width={1080} height={1080} />
      <Composition id="CarouselSlide2" component={Slide2} durationInFrames={1} fps={30} width={1080} height={1080} />
      <Composition id="CarouselSlide3" component={Slide3} durationInFrames={1} fps={30} width={1080} height={1080} />
      <Composition id="CarouselSlide4" component={Slide4} durationInFrames={1} fps={30} width={1080} height={1080} />
      <Composition id="CarouselSlide5" component={Slide5} durationInFrames={1} fps={30} width={1080} height={1080} />
      <Composition id="CarouselSlide6" component={Slide6} durationInFrames={1} fps={30} width={1080} height={1080} />

      {/* Polished Reel Composition */}
      <Composition
        id="ReelPolish"
        component={PolishedReelVideo}
        durationInFrames={533}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* Aircraft APU Flowchart Explainer Video */}
      <Composition
        id="APUExplainer"
        component={APUComposition}
        durationInFrames={1385}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Ultra-Fast 720p Mobile-Optimized Composition */}
      <Composition
        id="TalkingHeadLight"
        component={TalkingHeadLightComposition}
        durationInFrames={1017}
        fps={25}
        width={720}
        height={1280}
      />

      {/* 1440p Master Composition */}
      <Composition
        id="TalkingHead"
        component={TalkingHeadComposition}
        durationInFrames={1218}
        fps={30}
        width={1440}
        height={2560}
      />
    </>
  );
};
