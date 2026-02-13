import StudentCorner from "@/components/StudentCorner";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

const Students = () => {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
            <PageBackground />

            <main className="flex-grow pt-20 relative z-10">
                <StudentCorner />
            </main>
            <Footer />
        </div>
    );
};

export default Students;
