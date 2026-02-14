import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import {
  SiNvidia,
  SiGithub,
  SiNike,
  SiLaravel,
  SiOpenai,
  SiAdidas,
  SiAnthropic,
} from "react-icons/si";

export const LogoCloud = () => {
  return (
    <section className="bg-background pb-16 md:pb-32">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">Powering the best teams</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              {/* Nvidia */}
              <div className="flex items-center justify-center">
                <SiNvidia className="h-5 w-auto text-foreground/70 hover:text-foreground transition-colors" />
              </div>

              {/* Adidas */}
              <div className="flex items-center justify-center">
                <SiAdidas className="h-5 w-auto text-foreground/70 hover:text-foreground transition-colors" />
              </div>

              {/* GitHub */}
              <div className="flex items-center justify-center">
                <SiGithub className="h-5 w-auto text-foreground/70 hover:text-foreground transition-colors" />
              </div>

              {/* Nike */}
              <div className="flex items-center justify-center">
                <SiNike className="h-5 w-auto text-foreground/70 hover:text-foreground transition-colors" />
              </div>

              {/* Anthropic */}
              <div className="flex items-center justify-center">
                <SiAnthropic className="h-5 w-auto text-foreground/70 hover:text-foreground transition-colors" />
              </div>

              {/* Laravel */}
              <div className="flex items-center justify-center">
                <SiLaravel className="h-5 w-auto text-foreground/70 hover:text-foreground transition-colors" />
              </div>

              {/* OpenAI */}
              <div className="flex items-center justify-center">
                <SiOpenai className="h-6 w-auto text-foreground/70 hover:text-foreground transition-colors" />
              </div>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
