import { motion } from "framer-motion";
import { Search, Map, BarChart, ShieldAlert, GraduationCap, Settings } from "lucide-react";

const services = [
    {
        icon: Search,
        title: "Feasibility Studies",
        description: "Assess technical, economic, and environmental viability of hydrogen production, storage, and distribution projects.",
        deliverables: ["Techno-economic models", "Site assessments", "Levelized Cost of Hydrogen (LCOH)"]
    },
    {
        icon: Map,
        title: "Strategy & Market Intelligence",
        description: "Develop hydrogen roadmaps, policy alignment strategies, market entry frameworks, and ecosystem development plans.",
        deliverables: ["Market entry roadmaps", "Competitor analysis", "Policy alignment frameworks"]
    },
    {
        icon: BarChart,
        title: "Technical & Financial Due Diligence",
        description: "Evaluate hydrogen projects across the value chain including electrolyzers, infrastructure, and industrial applications.",
        deliverables: ["Risk assessments", "Bankability reports", "Technology evaluations"]
    },
    {
        icon: ShieldAlert,
        title: "Safety & Risk Consulting",
        description: "Hazardous area classification, hydrogen safety assessments, regulatory compliance, and risk mitigation planning.",
        deliverables: ["HAZOP studies", "Safety regulations compliance", "Risk mitigation plans"]
    },
    {
        icon: GraduationCap,
        title: "Training & Certification",
        description: "Workforce training programs for hydrogen operations, safety handling, and certification programs for industry personnel.",
        deliverables: ["Safety training workshops", "Operational handbooks", "Certification mapping"]
    },
    {
        icon: Settings,
        title: "Project Optimization",
        description: "Operational improvements, performance benchmarking, and cost reduction strategies for hydrogen projects.",
        deliverables: ["Performance benchmarking", "O&M strategy", "Lifecycle cost reduction"]
    }
];

const HydrogenServices = () => {
    return (
        <section className="py-24 bg-background" id="services">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Core Hydrogen Advisory Services</h2>
                    <p className="text-muted-foreground text-lg max-w-3xl">
                        Our specialized advisory services help you de-risk investments and scale operations across the expanding hydrogen economy.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative rounded-3xl border border-border/50 bg-card/20 p-8 hover:bg-card/50 hover:border-primary/30 transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 transition-all duration-500 group-hover:scale-110" />

                                <Icon className="w-10 h-10 text-primary mb-6" />

                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <div>
                                    <h4 className="text-xs font-semibold text-foreground/80 uppercase tracking-wider mb-3">Key Deliverables</h4>
                                    <ul className="space-y-2">
                                        {service.deliverables.map((item, j) => (
                                            <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HydrogenServices;
