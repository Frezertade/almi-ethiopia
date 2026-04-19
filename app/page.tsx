import HeroSection from "@/components/hero-section";
import MissionSection from "@/components/mission-section";
import FocusAreas from "@/components/focus-areas";
import ImpactStats from "@/components/impact-stats";
import CTASection from "@/components/cta-section";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <FocusAreas />
      <ImpactStats />
      <CTASection />
      <Newsletter />
    </>
  );
}
