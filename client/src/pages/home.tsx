import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { LeadershipSection } from "@/components/leadership-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <LeadershipSection />
      </main>
      <Footer />
    </div>
  );
}
