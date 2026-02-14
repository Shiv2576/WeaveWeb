import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Shield,
  WifiOff,
  FolderClosed,
  Zap,
  FileStack,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section className="bg-white py-8 md:py-16 lg:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="mx-auto grid gap-6 md:gap-8 lg:grid-cols-2">
          {/* First Feature Card - Offline First */}
          <FeatureCard>
            <CardHeader className="pb-4 md:pb-3">
              <CardHeading
                icon={WifiOff}
                title="Offline First"
                description="Works completely without internet. Convert images to PDF anywhere, anytime."
              />
            </CardHeader>

            <div className="relative border-t border-dashed">
              <div
                aria-hidden
                className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,var(--color-blue-600),var(--color-white)_100%)]"
              />
              <div className="aspect-76/59 p-1 px-4 sm:px-6">
                <div className="relative w-full h-full min-h-[200px] md:min-h-[250px]">
                  <Image
                    src="/mobile2.avif"
                    alt="Mobile app offline feature"
                    fill
                    className="object-contain object-bottom"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Second Feature Card - Zero Ads, Private */}
          <FeatureCard>
            <CardHeader className="pb-4 md:pb-3">
              <CardHeading
                icon={Shield}
                title="100% Private & Ad-Free"
                description="No tracking, no ads, no data collection. Your files never leave your device."
              />
            </CardHeader>

            <CardContent className="p-4 md:p-6">
              <div className="mask-radial-at-right mask-radial-from-75% mask-radial-[75%_75%] relative">
                <div className="aspect-76/59 overflow-hidden rounded-lg border">
                  <div className="relative w-full h-full min-h-[200px] md:min-h-[250px]">
                    <Image
                      src="/mobile3.avif"
                      alt="Mobile app privacy feature"
                      fill
                      className="object-contain object-bottom"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </FeatureCard>

          {/* Third Feature Card - Additional Features */}
          <FeatureCard className="p-4 md:p-6 lg:col-span-2">
            <p className="mx-auto my-4 md:my-6 max-w-md text-balance text-center text-lg sm:text-xl md:text-2xl font-semibold">
              Fast, secure, and intuitive image-to-PDF conversion with powerful
              features.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 overflow-x-auto pb-2 -mx-4 px-4 md:px-0 md:mx-0 md:pb-0">
              <CircularUI
                label="Multi-Image PDF"
                circles={[
                  { pattern: "border" },
                  { pattern: "border" },
                  { pattern: "border" },
                ]}
                icon={FileStack}
              />

              <CircularUI
                label="Secure Storage"
                circles={[{ pattern: "primary" }, { pattern: "border" }]}
                icon={FolderClosed}
              />

              <CircularUI
                label="Lightning Fast"
                circles={[{ pattern: "blue" }, { pattern: "none" }]}
                icon={Zap}
              />

              <CircularUI
                label="No Internet"
                circles={[{ pattern: "primary" }, { pattern: "none" }]}
                icon={WifiOff}
                className="hidden xs:block"
              />
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card
    className={cn(
      "group relative rounded-none shadow-zinc-950/5 overflow-hidden",
      className,
    )}
  >
    <CardDecorator />
    {children}
  </Card>
);

const CardDecorator = () => (
  <>
    <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
    <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
    <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
    <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
  </>
);

interface CardHeadingProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
  <div className="p-4 md:p-6">
    <span className="text-muted-foreground flex items-center gap-2 text-sm md:text-base">
      <Icon className="size-4 md:size-5" />
      {title}
    </span>
    <p className="mt-4 md:mt-6 lg:mt-8 text-lg md:text-xl lg:text-2xl font-semibold">
      {description}
    </p>
  </div>
);

interface CircleConfig {
  pattern: "none" | "border" | "primary" | "blue";
}

interface CircularUIProps {
  label: string;
  circles: CircleConfig[];
  icon?: LucideIcon;
  className?: string;
}

const CircularUI = ({
  label,
  circles,
  icon: Icon,
  className,
}: CircularUIProps) => (
  <div className={cn("flex-shrink-0", className)}>
    <div className="bg-linear-to-b from-border size-fit rounded-2xl to-transparent p-px">
      <div className="bg-linear-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-3 md:-space-x-4 rounded-[15px] p-3 md:p-4">
        {circles.map((circle, i) => (
          <div
            key={i}
            className={cn(
              "size-6 md:size-7 lg:size-8 rounded-full border flex items-center justify-center",
              {
                "border-primary": circle.pattern === "none",
                "border-primary bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_4px)]":
                  circle.pattern === "border",
                "border-primary bg-background bg-[repeating-linear-gradient(-45deg,var(--color-primary),var(--color-primary)_1px,transparent_1px,transparent_4px)]":
                  circle.pattern === "primary",
                "bg-background z-1 border-blue-500 bg-[repeating-linear-gradient(-45deg,var(--color-blue-500),var(--color-blue-500)_1px,transparent_1px,transparent_4px)]":
                  circle.pattern === "blue",
              },
            )}
          >
            {Icon && i === 0 && (
              <Icon className="size-3 md:size-4 text-foreground" />
            )}
          </div>
        ))}
      </div>
    </div>
    <span className="text-muted-foreground mt-1.5 block text-center text-xs md:text-sm">
      {label}
    </span>
  </div>
);
