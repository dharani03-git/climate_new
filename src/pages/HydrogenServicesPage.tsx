import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HydrogenHero from "@/components/hydrogen/HydrogenHero";
import HydrogenValueChain from "@/components/hydrogen/HydrogenValueChain";
import HydrogenServices from "@/components/hydrogen/HydrogenServices";
import HydrogenSectorSolutions from "@/components/hydrogen/HydrogenSectorSolutions";
import HydrogenUseCases from "@/components/hydrogen/HydrogenUseCases";
import HydrogenInfrastructure from "@/components/hydrogen/HydrogenInfrastructure";
import HydrogenPolicy from "@/components/hydrogen/HydrogenPolicy";
import HydrogenLifecycle from "@/components/hydrogen/HydrogenLifecycle";
import HydrogenCTA from "@/components/hydrogen/HydrogenCTA";

const HydrogenServicesPage = () => {
    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-20"> {/* Add padding top to account for fixed navbar */}
                <HydrogenHero />
                <HydrogenValueChain />
                <HydrogenServices />
                <HydrogenSectorSolutions />
                <HydrogenUseCases />
                <HydrogenInfrastructure />
                <HydrogenPolicy />
                <HydrogenLifecycle />
                <HydrogenCTA />
            </main>

            <Footer />
        </div>
    );
};

export default HydrogenServicesPage;
