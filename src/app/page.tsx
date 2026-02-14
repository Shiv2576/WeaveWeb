import { HeroHeader } from "../components/header";
import HeroSection from "../components/hero-section";
import Features from "@/components/features-10";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <HeroHeader />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
}
