import { BentoGrid } from "@/components/bento-grid";
import { HeroSection } from "@/components/hero-section";
import { VenturesCard } from "@/components/ventures-card";
import { HardwareCard } from "@/components/hardware-card";
import { ResearchCard } from "@/components/research-card";
import { PlayCard } from "@/components/play-card";

export default function Home() {
  return (
    <main className="min-h-screen py-8 md:py-16">
      <BentoGrid>
        {/* Hero - 2x2 span */}
        <HeroSection />

        {/* Ventures (Knyte) - 2x2 span */}
        <VenturesCard />

        {/* Hardware Lab - 1x2 span */}
        <HardwareCard />

        {/* Research - 1x2 span */}
        <ResearchCard />

        {/* Play (Easter Egg) - 1x1 span */}
        <PlayCard />
      </BentoGrid>
    </main>
  );
}
