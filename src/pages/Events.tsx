import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Events from "@/components/Events";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Events />
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
