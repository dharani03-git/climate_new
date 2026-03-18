import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionOverview } from "@/components/solutions/SolutionOverview";
import { SolutionSolutions } from "@/components/solutions/SolutionSolutions";
import { SolutionIndustryApps } from "@/components/solutions/SolutionIndustryApps";
import { SolutionServices } from "@/components/solutions/SolutionServices";
import { SolutionInfrastructure } from "@/components/solutions/SolutionInfrastructure";
import { SolutionBenefits } from "@/components/solutions/SolutionBenefits";
import { SolutionLifecycle } from "@/components/solutions/SolutionLifecycle";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { solutionDataConfig } from "@/data/solutionsData";

const SolutionPage = () => {
  const { slug } = useParams();
  const data = solutionDataConfig[slug as keyof typeof solutionDataConfig];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) return <Navigate to="/404" />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <SolutionHero {...data.hero} />
        <SolutionOverview {...data.overview} />
        <SolutionSolutions solutions={data.keySolutions} />
        <SolutionIndustryApps applications={data.industryApplications} />
        <SolutionServices services={data.advisoryServices} />
        <SolutionInfrastructure infrastructure={data.infrastructureDevelopment} />
        <SolutionBenefits benefits={data.implementationBenefits} />
        <SolutionLifecycle lifecycle={data.projectLifecycle} />
        <SolutionCTA />
      </main>
      <Footer />
    </div>
  );
};
export default SolutionPage;