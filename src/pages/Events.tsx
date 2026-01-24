import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Events from "@/components/Events";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container-narrow py-6">

        </div>
        <Events />
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
