import { motion } from "framer-motion";
import { 
  FlaskConical, 
  Truck, 
  Factory, 
  Database, 
  Battery, 
  Cpu, 
  Zap, 
  Activity,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Link } from "react-router-dom";

const hydrogenBlocks = [
  {
    title: "Green Hydrogen Production",
    description: "Renewable-powered electrolysis systems producing hydrogen without carbon emissions.",
    icon: FlaskConical,
    applications: ["Industrial hydrogen supply", "Energy storage", "Synthetic fuel production"],
    link: "/solutions/hydrogen-fuels"
  },
  {
    title: "Hydrogen Mobility Infrastructure",
    description: "Hydrogen fuel cell systems powering heavy-duty transport.",
    icon: Truck,
    applications: ["Hydrogen trucks and buses", "Rail transport", "Maritime fuel solutions"],
    link: "/solutions/hydrogen-fuels"
  },
  {
    title: "Hydrogen Industrial Decarbonization",
    description: "Hydrogen replacing fossil fuels in high-temperature industrial processes.",
    icon: Factory,
    applications: ["Steel manufacturing", "Chemical production", "Fertilizer industry"],
    link: "/solutions/hydrogen-fuels"
  },
  {
    title: "Hydrogen Energy Storage",
    description: "Hydrogen used for long-duration energy storage to stabilize renewable energy systems.",
    icon: Database,
    applications: ["Grid balancing", "Renewable energy storage", "Backup power systems"],
    link: "/solutions/hydrogen-fuels"
  }
];

const batteryBlocks = [
  {
    title: "Lithium-Ion Battery Systems",
    description: "High-energy density batteries widely used in EVs and energy storage systems.",
    icon: Battery,
    applications: ["electric vehicles", "grid-scale storage", "distributed energy systems"],
    link: "/solutions/fuel-cells"
  },
  {
    title: "Sodium-Ion Battery Systems",
    description: "Emerging battery technology offering cost advantages and reduced dependence on rare minerals.",
    icon: Zap,
    applications: ["stationary energy storage", "grid resilience systems", "large-scale renewable integration"],
    link: "/solutions/fuel-cells"
  },
  {
    title: "Solid-State Batteries",
    description: "Next-generation batteries offering improved safety, higher energy density, and longer lifecycle.",
    icon: Cpu,
    applications: ["next-generation EVs", "aerospace systems", "portable power systems"],
    link: "/solutions/fuel-cells"
  },
  {
    title: "Fuel Cell Energy Systems",
    description: "Fuel cells generate electricity using hydrogen or other fuels with high efficiency and zero emissions.",
    icon: Activity,
    applications: ["hydrogen vehicles", "backup power systems", "microgrid energy systems"],
    link: "/solutions/fuel-cells"
  }
];

const SolutionGrid = ({ title, description, blocks }: { title: string, description: string, blocks: any[] }) => (
  <div className="mb-24">
    <div className="max-w-3xl mb-12">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <motion.p 
        className="text-lg text-muted-foreground leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {description}
      </motion.p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {blocks.map((block, idx) => (
        <motion.div
          key={block.title}
          className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 card-hover-lift"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
            <block.icon className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{block.title}</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">{block.description}</p>
          
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-3">Applications</h4>
            <div className="flex flex-wrap gap-2">
              {block.applications.map((app: string) => (
                <span key={app} className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[11px] font-medium text-muted-foreground">
                  {app}
                </span>
              ))}
            </div>
          </div>

          <Link to={block.link} className="inline-flex items-center gap-2 text-sm font-bold text-primary group/btn transition-all">
            Explore Technology <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
);

const SolutionsOverviewPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24 px-4 md:px-8 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20 text-center mx-auto">
            <motion.div 
              className="section-label mb-6 mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Technology Solutions
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Building Resilient <span className="text-gradient-primary">Clean Energy Ecosystems</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Our specialized solutions integrate production, storage, distribution, and end-use applications to accelerate the global energy transition.
            </motion.p>
          </div>

          <SolutionGrid 
            title="Hydrogen Energy Solutions"
            description="Hydrogen technologies provide scalable pathways for decarbonizing heavy industry, transport, and power systems. Our hydrogen solutions integrate production, storage, distribution, and end-use applications to build resilient clean energy ecosystems."
            blocks={hydrogenBlocks}
          />

          <SolutionGrid 
            title="Advanced Battery & Fuel Cell Solutions"
            description="Battery and fuel cell technologies enable the next generation of clean energy infrastructure, supporting electrified mobility, grid stability, and renewable energy integration."
            blocks={batteryBlocks}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsOverviewPage;
