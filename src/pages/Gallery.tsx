import Header from "@/components/Header";
import PlacementGallery from "@/components/PlacementGallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PlacementGallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
