import HeroSection from "@/components/HeroSection";
import CompanyLogoStrip from "@/components/CompanyLogoStrip";
import DirectorMessage from "@/components/DirectorMessage";
import SkillDevelopment from "@/components/SkillDevelopment";
import TPCTeamPreview from "@/components/TPCTeamPreview";
import MediaPreview from "@/components/MediaPreview";
import Footer from "@/components/Footer";

import ConnectWithUs from "@/components/ConnectWithUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header removed from here as it is now in App.tsx */}
      <main>
        <HeroSection />
        <CompanyLogoStrip />
        <section id="about">
          <DirectorMessage />
        </section>
        <SkillDevelopment />
        <TPCTeamPreview />
        <section id="media">
          <MediaPreview />
        </section>
        <section id="contact">
          <ConnectWithUs />
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Index;