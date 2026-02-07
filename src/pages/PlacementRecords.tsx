import PlacementStats from "@/components/PlacementStats";
import CompaniesVisited from "@/components/CompaniesVisited";
import RecruiterPortal from "@/components/RecruiterPortal";
import GateQualifiers from "@/components/GateQualifiers";
import PlacementGallery from "@/components/PlacementGallery";
import Footer from "@/components/Footer";

const PlacementRecords = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">

            <main className="flex-grow pt-20">
                <PlacementStats />
                <CompaniesVisited />
                <RecruiterPortal />
                <GateQualifiers />
                <PlacementGallery />
            </main>
            <Footer />
        </div>
    );
};

export default PlacementRecords;
