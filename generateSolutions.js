import fs from 'fs';
import path from 'path';

const basePath = 'src/components/solutions';
const pagesPath = 'src/pages/solutions';
const dataPath = 'src/data';

[basePath, pagesPath, dataPath].forEach(dir => {
    fs.mkdirSync(path.join(process.cwd(), dir), { recursive: true });
});

// Write the Data Array (We will leave writing the massive data content for the LLM natively)
// But wait, the LLM will just use write_to_file for data.

const files = {
    [`${basePath}/SolutionHero.tsx`]: `import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export const SolutionHero = ({ title, subtitle, paragraph, ctaExplore, ctaContact }: any) => (
  <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 bg-grid-white/[0.02] bg-[length:32px_32px]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      </div>
      <div className="container px-4 md:px-6 z-10 mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col space-y-8 max-w-4xl mx-auto text-center">
              <div className="inline-flex mx-auto px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-semibold w-fit uppercase tracking-widest">
                  Clean Infrastructure
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                  {title}
              </h1>
              <p className="text-xl md:text-2xl text-foreground font-medium">
                  {subtitle}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  {paragraph}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                  <a href="#solutions" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 shadow-lg shadow-primary/20 transition-all gap-2">
                      {ctaExplore || "Explore Solutions"} <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-border bg-card/50 backdrop-blur text-foreground font-semibold hover:bg-card hover:border-primary/50 transition-all gap-2">
                      {ctaContact || "Contact Experts"} <MessageSquare className="w-5 h-5" />
                  </a>
              </div>
          </motion.div>
      </div>
  </section>
);`,

    [`${basePath}/SolutionOverview.tsx`]: `import { motion } from "framer-motion";
export const SolutionOverview = ({ howItWorks, whyItMatters, globalTrends, indiaRelevance }: any) => (
  <section className="py-24 bg-card/20 border-b border-border/50" id="overview">
    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Technology Overview</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
           <h3 className="text-xl font-bold mb-3 text-primary flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> How it Works</h3>
           <p className="text-muted-foreground leading-relaxed mb-8">{howItWorks}</p>
           
           <h3 className="text-xl font-bold mb-3 text-primary flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> Why it Matters</h3>
           <p className="text-muted-foreground leading-relaxed">{whyItMatters}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
           <div className="bg-card p-8 rounded-3xl border border-border shadow-2xl">
              <h3 className="text-lg font-bold mb-3 text-foreground opacity-90 border-b border-border pb-2">Global Adoption Trends</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{globalTrends}</p>
              
              <h3 className="text-lg font-bold mb-3 text-foreground opacity-90 border-b border-border pb-2">Relevance to India Context</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{indiaRelevance}</p>
           </div>
        </motion.div>
      </div>
    </div>
  </section>
);`,

    [`${basePath}/SolutionSolutions.tsx`]: `import { motion } from "framer-motion";
export const SolutionSolutions = ({ solutions }: any) => (
  <section className="py-24 bg-background" id="solutions">
    <div className="container mx-auto px-4 md:px-6">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Key Solutions Offered</h2>
        <p className="text-muted-foreground text-lg max-w-3xl">Comprehensive advisory tailored to your project goals.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((sol: any, i: number) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group rounded-3xl border border-border/50 bg-card/30 p-8 hover:bg-card hover:border-primary/50 transition-all duration-300">
             <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 text-lg font-bold">0{i+1}</div>
             <h3 className="text-xl font-bold mb-3 text-foreground">{sol.name}</h3>
             <p className="text-muted-foreground text-sm leading-relaxed mb-6">{sol.description}</p>
             <div>
                <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-widest mb-3">Application Areas</h4>
                <ul className="space-y-2">
                  {sol.applications.map((app: string, j: number) => <li key={j} className="text-xs text-muted-foreground flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60" />{app}</li>)}
                </ul>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);`,

    [`${basePath}/SolutionIndustryApps.tsx`]: `import { motion } from "framer-motion";
export const SolutionIndustryApps = ({ applications }: any) => (
  <section className="py-24 bg-card/20" id="applications">
    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Industry Applications</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Scaling clean technology interventions across the broader economy.</p>
      </div>
      <div className="overflow-x-auto pb-6">
        <table className="w-full text-left border-collapse min-w-[800px] border border-border/50 rounded-2xl overflow-hidden block md:table">
          <thead>
            <tr className="bg-card/50 border-b border-border/50">
              <th className="py-5 px-6 font-semibold text-foreground/80 w-1/4">Sector</th>
              <th className="py-5 px-6 font-semibold text-foreground/80 w-1/2">Technology Use Case</th>
              <th className="py-5 px-6 font-semibold text-foreground/80 w-1/4">Benefits</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30 bg-card/30">
            {applications.map((app: any, idx: number) => (
              <tr key={idx} className="hover:bg-primary/5 transition-colors">
                <td className="py-6 px-6 font-medium text-foreground">{app.sector}</td>
                <td className="py-6 px-6 text-muted-foreground text-sm leading-relaxed">{app.useCase}</td>
                <td className="py-6 px-6"><div className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-3 py-2 rounded-lg text-xs leading-relaxed font-medium">{app.benefits}</div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);`,

    [`${basePath}/SolutionServices.tsx`]: `import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
export const SolutionServices = ({ services }: any) => (
  <section className="py-24 bg-background" id="advisory-services">
    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
       <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Advisory Services</h2>
             <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
               We deliver specialized consulting and comprehensive advisory across the entire project development lifecycle.
             </p>
             <ul className="space-y-4">
                {services.map((service: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{service}</span>
                  </li>
                ))}
             </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden shadow-2xl bg-card border border-border p-8 h-full min-h-[400px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800')] opacity-5 bg-cover bg-center" />
              <div className="relative z-10 flex flex-col justify-center h-full">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">End-to-End Consulting</h3>
                  <p className="text-muted-foreground">From initial viability studies to final operational monitoring, our consulting team guarantees maximum return on sustainability investments through rigorous analytical frameworks.</p>
              </div>
          </motion.div>
       </div>
    </div>
  </section>
);`,

    [`${basePath}/SolutionInfrastructure.tsx`]: `import { motion } from "framer-motion";
export const SolutionInfrastructure = ({ infrastructure }: any) => (
  <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden" id="infrastructure">
    <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Infrastructure Development</h2>
        <p className="text-primary-foreground/80 text-lg">Managing complex infrastructure projects through robust execution strategies.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {infrastructure.map((item: any, idx: number) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6">
             <h3 className="text-lg font-bold mb-3">{item.title}</h3>
             <p className="text-primary-foreground/80 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);`,

    [`${basePath}/SolutionBenefits.tsx`]: `import { motion } from "framer-motion";
export const SolutionBenefits = ({ benefits }: any) => (
  <section className="py-24 bg-card/30" id="benefits">
    <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
       <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">Implementation Benefits</h2>
       <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b: any, idx: number) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="p-8 rounded-3xl bg-background border border-border shadow-xl hover:border-primary/50 transition-colors">
               <h3 className="text-xl font-bold text-primary mb-3">{b.title}</h3>
               <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
       </div>
    </div>
  </section>
);`,

    [`${basePath}/SolutionLifecycle.tsx`]: `import { motion } from "framer-motion";
export const SolutionLifecycle = ({ lifecycle }: any) => (
  <section className="py-24 bg-background border-t border-border/50" id="lifecycle">
    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
       <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center">Project Lifecycle Support</h2>
       <div className="grid md:grid-cols-5 gap-4">
          {lifecycle.map((stage: any, idx: number) => (
            <div key={idx} className="relative pt-6">
               <div className="hidden md:block w-full h-1 bg-border absolute top-0 left-0">
                  <div className="absolute top-[50%] -translate-y-1/2 left-4 w-4 h-4 bg-primary rounded-full outline outline-4 outline-background" />
               </div>
               <h4 className="text-primary font-bold text-sm uppercase tracking-wider mt-4 md:mt-6 mb-2">{stage.stage}</h4>
               <ul className="space-y-2">
                 {stage.services.map((s: string, i: number) => (
                   <li key={i} className="text-xs text-muted-foreground">• {s}</li>
                 ))}
               </ul>
            </div>
          ))}
       </div>
    </div>
  </section>
);`,

    [`${basePath}/SolutionCTA.tsx`]: `import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
export const SolutionCTA = () => (
  <section className="py-24 relative overflow-hidden bg-card/5 border-t border-border/50">
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto bg-card/80 backdrop-blur-2xl border border-primary/20 rounded-[3rem] p-10 md:p-16 text-center shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Accelerate the Energy Transition</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Partner with experts to design and deploy scalable clean energy infrastructure and technologies.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 shadow-xl gap-2 flex items-center justify-center"><ArrowRight className="w-5 h-5"/> Request Consultation</a>
          <a href="/docs/solutions-overview.pdf" className="px-8 py-4 rounded-full border-2 border-primary/30 text-foreground font-semibold hover:bg-primary/5 hover:border-primary/60 gap-2 flex items-center justify-center"><FileText className="w-5 h-5"/> Download Solutions Overview</a>
        </div>
      </motion.div>
    </div>
  </section>
);`,

    [`${pagesPath}/SolutionPage.tsx`]: `import { useEffect, useState } from "react";
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
export default SolutionPage;`
};

for (const [path, content] of Object.entries(files)) {
    fs.writeFileSync(path, content);
}
console.log("Components written");
