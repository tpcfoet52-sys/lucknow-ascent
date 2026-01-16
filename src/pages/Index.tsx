import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
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
