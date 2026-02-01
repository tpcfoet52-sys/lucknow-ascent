import PlacementStats from "@/components/PlacementStats";
import RecruiterPortal from "@/components/RecruiterPortal";
import PlacementGallery from "@/components/PlacementGallery";
import ConnectWithUs from "@/components/ConnectWithUs";
import Footer from "@/components/Footer";

const PlacementRecords = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">

            <main className="flex-grow pt-20">
                <PlacementStats />
                <RecruiterPortal />
                <PlacementGallery />
            </main>
            <ConnectWithUs />
            <Footer />
        </div>
    );
};

export default PlacementRecords;
