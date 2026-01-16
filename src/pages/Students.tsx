import Header from "@/components/Header";
import StudentCorner from "@/components/StudentCorner";
import Footer from "@/components/Footer";

const Students = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <StudentCorner />
      </main>
      <Footer />
    </div>
  );
};

export default Students;
