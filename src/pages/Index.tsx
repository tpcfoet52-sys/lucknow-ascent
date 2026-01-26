import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CompanyLogoStrip from "@/components/CompanyLogoStrip";
import DirectorMessage from "@/components/DirectorMessage";
import PlacementStats from "@/components/PlacementStats";
import RecruiterPortal from "@/components/RecruiterPortal";
import StudentCorner from "@/components/StudentCorner";
import PlacementGallery from "@/components/PlacementGallery";
import MediaPreview from "@/components/MediaPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CompanyLogoStrip />
        <section id="about">
          <DirectorMessage />
        </section>
        <section id="statistics">
          <PlacementStats />
        </section>
        <section id="recruiters">
          <RecruiterPortal />
        </section>
        <section id="students">
          <StudentCorner />
        </section>
        <section id="gallery">
          <PlacementGallery />
        </section>
        <section id="media">
          <MediaPreview />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Index;
