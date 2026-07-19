import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { loadFont } from "@remotion/google-fonts/Syne";
import { loadFont as loadBodyFont } from "@remotion/google-fonts/SpaceGrotesk";
import { IntroScene } from "./scenes/IntroScene";
import { WebsiteScene } from "./scenes/WebsiteScene";
import { CodeFlashScene } from "./scenes/CodeFlashScene";
import { SkillsFlashScene } from "./scenes/SkillsFlashScene";
import { FreelanceBannerScene } from "./scenes/FreelanceBannerScene";
import { NameRevealScene } from "./scenes/NameRevealScene";
import { staticFile } from "remotion";

const { fontFamily: displayFont } = loadFont("normal", { weights: ["700", "800"], subsets: ["latin"] });
const { fontFamily: bodyFont } = loadBodyFont("normal", { weights: ["400", "600"], subsets: ["latin"] });

const websites = [
  { image: staticFile("images/site-wedding1.png"), label: "AI Lawyer Chatbot", category: "AI & ML" },
  { image: staticFile("images/site-ecommerce.png"), label: "E-Commerce Platform", category: "FREELANCE" },
  { image: staticFile("images/site-aliza.png"), label: "Dr. Aliza Fatima — Wellness", category: "FREELANCE" },
  { image: staticFile("images/site-wedding2.png"), label: "Wedding Template 2", category: "WEDDING" },
  { image: staticFile("images/site-wedding3.png"), label: "Wedding Template 3", category: "WEDDING" },
];

export const MainVideo = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0c10" }}>
      <TransitionSeries>
        {/* Quick intro flash */}
        <TransitionSeries.Sequence durationInFrames={55}>
          <IntroScene displayFont={displayFont} bodyFont={bodyFont} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-left" })}
          timing={linearTiming({ durationInFrames: 8 })}
        />

        {/* Code flash — AI expertise */}
        <TransitionSeries.Sequence durationInFrames={40}>
          <CodeFlashScene displayFont={displayFont} bodyFont={bodyFont} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 6 })}
        />

        {/* Fast website cuts — 35 frames each */}
        {websites.slice(0, 2).map((site, i) => (
          <TransitionSeries.Sequence key={`site-${i}`} durationInFrames={35}>
            <WebsiteScene
              image={site.image}
              label={site.label}
              category={site.category}
              displayFont={displayFont}
              bodyFont={bodyFont}
              index={i}
            />
          </TransitionSeries.Sequence>
        ))}

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 6 })}
        />

        {/* Skills flash */}
        <TransitionSeries.Sequence durationInFrames={40}>
          <SkillsFlashScene displayFont={displayFont} bodyFont={bodyFont} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-left" })}
          timing={linearTiming({ durationInFrames: 6 })}
        />

        {/* Wedding templates — fast */}
        {websites.slice(2).map((site, i) => (
          <TransitionSeries.Sequence key={`wed-${i}`} durationInFrames={30}>
            <WebsiteScene
              image={site.image}
              label={site.label}
              category={site.category}
              displayFont={displayFont}
              bodyFont={bodyFont}
              index={i + 2}
            />
          </TransitionSeries.Sequence>
        ))}

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 6 })}
        />

        {/* Freelance banner */}
        <TransitionSeries.Sequence durationInFrames={42}>
          <FreelanceBannerScene displayFont={displayFont} bodyFont={bodyFont} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />

        {/* Grand name reveal finale */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <NameRevealScene displayFont={displayFont} bodyFont={bodyFont} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
