import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { JourneySection } from "@/components/journey-section";
import { AboutSection } from "@/components/about-section";
import { LeadershipSection } from "@/components/leadership-section";
import { usePageTitle } from "@/hooks/use-page-title";

export default function Home() {
  usePageTitle();
  return (
    <div className="min-h-screen">
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
