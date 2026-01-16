import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CompanyLogoStrip from "@/components/CompanyLogoStrip";
import PlacementStats from "@/components/PlacementStats";
import DirectorMessage from "@/components/DirectorMessage";
import RecruiterPortal from "@/components/RecruiterPortal";
import StudentCorner from "@/components/StudentCorner";
import PlacementGallery from "@/components/PlacementGallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CompanyLogoStrip />
        <PlacementStats />
        <DirectorMessage />
        <RecruiterPortal />
        <StudentCorner />
        <PlacementGallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
