import Header from "@/components/Header";
import DirectorMessage from "@/components/DirectorMessage";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <DirectorMessage />
      </main>
      <Footer />
    </div>
  );
};

export default About;
