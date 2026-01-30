import ConnectWithUs from "@/components/ConnectWithUs";

import Footer from "@/components/Footer";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">

            <main className="flex-grow pt-20">
                <ConnectWithUs />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
