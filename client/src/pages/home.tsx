import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { WorkSection } from "@/components/work-section";
import { JourneySection } from "@/components/journey-section";
import { ContactSection } from "@/components/contact-section";
import { usePageTitle } from "@/hooks/use-page-title";

export default function Home() {
  usePageTitle();
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <WorkSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
