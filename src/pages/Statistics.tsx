import Header from "@/components/Header";
import PlacementStats from "@/components/PlacementStats";
import Footer from "@/components/Footer";

const Statistics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PlacementStats />
      </main>
      <Footer />
    </div>
  );
};

export default Statistics;
