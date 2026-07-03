import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { JourneySection } from "@/components/journey-section";
import { AboutSection } from "@/components/about-section";
import { LeadershipSection } from "@/components/leadership-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <JourneySection />
        <AboutSection />
        <LeadershipSection />
      </main>
      <Footer />
    </div>
  );
}
