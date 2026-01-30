import StudentCorner from "@/components/StudentCorner";

import Footer from "@/components/Footer";

const Students = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">

            <main className="flex-grow pt-20">
                <StudentCorner />
            </main>
            <Footer />
        </div>
    );
};

export default Students;
