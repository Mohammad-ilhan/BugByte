import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";

// Faster paced: ~14 seconds at 30fps
// Intro 55 + CodeFlash 40 + 2 sites 70 + Skills 40 + 3 weddings 90 + Freelance 42 + NameReveal 120
// Minus transitions: ~6 transitions * ~7avg = 42 frames overlap
// Total ≈ 415 frames
export const RemotionRoot = () => (
  <Composition
    id="main"
    component={MainVideo}
    durationInFrames={420}
    fps={30}
    width={1920}
    height={1080}
  />
);
