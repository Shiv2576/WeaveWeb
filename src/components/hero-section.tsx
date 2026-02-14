import { Mail, SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "./header";
import { LogoCloud } from "./logo-cloud";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <HeroHeader />

      <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
        <section>
          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="text-balance text-5xl font-medium md:text-6xl"
              >
                Welcome to Weave
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-6 max-w-2xl text-pretty text-lg"
              >
                An offline-first Expo (React Native) app for fast image-to-PDF
                conversion. 100% private, zero ads, with secure in-app storage —
                fully functional without internet.
              </TextEffect>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  item: transitionVariants.item,
                }}
                className="mt-12"
              >
                <a
                  href="https://www.mediafire.com/file/jp7y5urnlmfnvd1/WeaveMobile.apk/file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto max-w-sm block group"
                >
                  <div className="bg-background relative flex items-center justify-between rounded-[calc(var(--radius)+0.5rem)] border p-2 pl-4 shadow shadow-zinc-950/5 hover:shadow-md transition-all duration-300 hover:border-primary/50">
                    <div className="flex items-center gap-3">
                      {/* Android SVG icon */}
                      <svg
                        className="size-6 text-foreground/70 group-hover:text-primary transition-colors"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-label="Android app"
                      >
                        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997 0-.5512.4482-.9997.9993-.9997.5512 0 .9993.4485.9993.9997 0 .5511-.4481.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997 0-.5512.4482-.9997.9993-.9997.5512 0 .9993.4485.9993.9997 0 .5511-.4481.9997-.9993.9997m11.863-6.1365l2.054-3.5556c.1585-.2743.0646-.6237-.2097-.7822-.2741-.1585-.6235-.0646-.782.2097l-2.075 3.5939c-1.2663-.574-2.657-.925-4.128-.925-1.471 0-2.8617.351-4.128.925L6.573 5.0768c-.1585-.2743-.5079-.3682-.782-.2097-.2743.1585-.3682.5079-.2097.7822l2.054 3.5556c-1.7077 1.153-2.842 2.911-2.842 4.8345v.083c0 .4142.3358.75.75.75h13.342c.4142 0 .75-.3358.75-.75v-.083c0-1.9235-1.1343-3.6815-2.842-4.8345" />
                      </svg>

                      <div className="flex flex-col">
                        <span className="text-sm font-medium leading-tight">
                          WeaveMobile.apk
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Download APK • 62.5 MB
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Download
                      </span>
                      {/* Download arrow SVG */}
                      <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                        <svg
                          aria-label="Download"
                          className="size-4 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>

                <div
                  aria-hidden
                  className="bg-radial from-primary/50 dark:from-primary/25 relative mx-auto mt-32 max-w-2xl to-transparent to-55% text-left"
                >
                  <div className="bg-background border-border/50 absolute inset-0 mx-auto w-80 -translate-x-3 -translate-y-12 rounded-[2rem] border p-2 [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:-translate-x-6">
                    <div className="relative h-96 overflow-hidden rounded-[1.5rem] border p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] before:opacity-50"></div>
                  </div>
                  <div className="bg-muted dark:bg-background/50 border-border/50 mx-auto w-80 translate-x-4 rounded-[2rem] border p-2 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:translate-x-8">
                    <div className="bg-background space-y-2 overflow-hidden rounded-[1.5rem] border p-2 shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl">
                      <AppComponent />

                      <div className="bg-muted rounded-[1rem] p-4 pb-16 dark:bg-white/5"></div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mix-blend-overlay [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-5"></div>
                </div>
              </AnimatedGroup>
            </div>
          </div>
        </section>
        <LogoCloud />
      </main>
    </>
  );
}

const AppComponent = () => {
  return (
    <div className="relative space-y-2">
      {/* Front Image */}
      <div className="relative rounded-xl overflow-hidden shadow-xl h-68">
        <img
          src="/appImage1.jpeg"
          alt="Front card"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};
