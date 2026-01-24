import Header from "@/components/Header";
import RecruiterPortal from "@/components/RecruiterPortal";
import CompanyLogoStrip from "@/components/CompanyLogoStrip";
import Footer from "@/components/Footer";

const Recruiters = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <RecruiterPortal />
        <CompanyLogoStrip />
      </main>
      <Footer />
    </div>
  );
};

export default Recruiters;
