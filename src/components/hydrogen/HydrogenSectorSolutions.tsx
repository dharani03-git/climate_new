import { motion } from "framer-motion";
import { Zap, Truck, Anvil, Beaker, Network } from "lucide-react";

const sectors = [
    {
        icon: Zap,
        title: "Power Generation & Energy Storage",
        solutions: ["Grid integration of electrolyzers", "Fuel cells for backup power", "Energy arbitrage through hydrogen storage"],
        benefits: "Grid decarbonization and renewable energy storage."
    },
    {
        icon: Truck,
        title: "Transportation",
        solutions: ["Hydrogen fuel for heavy trucks, buses, trains, and ships", "Hydrogen refueling networks", "Hydrogen pipelines"],
        benefits: "Low-emission mobility for hard-to-abate transport sectors."
    },
    {
        icon: Anvil,
        title: "Steel & Metals",
        solutions: ["Hydrogen-based direct reduction processes", "Hydrogen-compatible industrial infrastructure"],
        benefits: "Low-carbon steel production and industrial decarbonization."
    },
    {
        icon: Beaker,
        title: "Chemicals & Fertilizers",
        solutions: ["Green ammonia production", "Green methanol synthesis", "Hydrogen as feedstock"],
        benefits: "Zero-carbon alternatives to grey hydrogen."
    },
    {
        icon: Network,
        title: "Other Industries",
        solutions: ["Glass manufacturing", "Pharmaceutical plants", "Telecom infrastructure"],
        benefits: "Process heat, cooling, and reliable backup power."
    }
];

const HydrogenSectorSolutions = () => {
    return (
        <section className="py-24 bg-card/10" id="sector-solutions">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Hydrogen Solutions by Sector</h2>
                    <p className="text-muted-foreground text-lg">
                        We tailor decarbonization pathways across diverse industrial and energy sectors leveraging green hydrogen.
                    </p>
                </div>

                <div className="overflow-x-auto pb-6">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-border/50 bg-card/30">
                                <th className="py-5 px-6 font-semibold text-foreground/80 rounded-tl-xl w-1/4">Sector</th>
                                <th className="py-5 px-6 font-semibold text-foreground/80 w-1/2">Key Hydrogen Solutions</th>
                                <th className="py-5 px-6 font-semibold text-foreground/80 rounded-tr-xl w-1/4">Benefits</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/30">
                            {sectors.map((sector, idx) => {
                                const Icon = sector.icon;
                                return (
                                    <tr key={idx} className="hover:bg-primary/5 transition-colors group">
                                        <td className="py-6 px-6 font-medium align-top">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                                                    <Icon className="w-5 h-5 text-primary" />
                                                </div>
                                                <span className="text-base">{sector.title}</span>
                                            </div>
                                        </td>
                                        <td className="py-6 px-6 align-top">
                                            <ul className="space-y-2">
                                                {sector.solutions.map((sol, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                                        <span className="text-primary mt-1 text-sm">▹</span>
                                                        {sol}
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td className="py-6 px-6 align-top">
                                            <div className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-3 py-2 rounded-lg text-sm leading-relaxed">
                                                {sector.benefits}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default HydrogenSectorSolutions;
