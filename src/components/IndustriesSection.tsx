import { motion } from "framer-motion";
import { Zap, Factory, TrendingUp, Building2, Leaf, Cpu, Truck, Heart } from "lucide-react";

const industries = [
    {
        title: "Energy & Utilities",
        description:
            "Accelerate the energy transition with strategic portfolio decarbonisation, renewables integration planning, grid flexibility solutions, and expert navigation of an evolving regulatory landscape.",
        icon: Zap,
        tag: "Transition",
    },
    {
        title: "Manufacturing",
        description:
            "Tackle hard-to-abate industrial emissions with process electrification, green hydrogen feasibility studies, circular economy strategies, and supply chain decarbonisation programmes.",
        icon: Factory,
        tag: "Industrial",
    },
    {
        title: "Financial Services",
        description:
            "Align your lending and investment portfolio with Paris Agreement goals, quantify and manage climate-related financial risk under TCFD, and lead on sustainable finance product innovation.",
        icon: TrendingUp,
        tag: "Finance",
    },
    {
        title: "Real Estate & Construction",
        description:
            "Drive net-zero buildings through whole-lifecycle carbon assessment, cost-optimised retrofit roadmaps, green building certification support, and climate-resilient design advisory.",
        icon: Building2,
        tag: "Buildings",
    },
    {
        title: "Agriculture & Food Systems",
        description:
            "Transform land use practices, measure and reduce agricultural emissions, build regenerative farming programmes, and develop credible nature-based carbon projects.",
        icon: Leaf,
        tag: "Nature",
    },
    {
        title: "Technology",
        description:
            "Go beyond carbon neutrality marketing claims — achieve verified net-zero through credible scope-3 measurement, substantiated reduction initiatives, and high-quality carbon removal.",
        icon: Cpu,
        tag: "Digital",
    },
    {
        title: "Transport & Logistics",
        description:
            "Decarbonise fleets through EV transition planning, low-carbon fuel feasibility, route optimisation, and modal shift analysis. Build climate-resilient supply chains for the future.",
        icon: Truck,
        tag: "Mobility",
    },
    {
        title: "Healthcare",
        description:
            "Support healthcare systems and life sciences companies in reducing their environmental footprint — covering facilities, procurement, supply chain, and clinical operations.",
        icon: Heart,
        tag: "Health",
    },
];

const IndustriesSection = () => {
    return (
        <section id="industries" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/4 blur-[120px] rounded-br-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/4 blur-[100px] rounded-tl-full pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        className="section-label mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Industries
                    </motion.div>
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.05] tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                    >
                        Serving Every Industry on the{" "}
                        <span className="text-gradient-primary">Path to Net Zero</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        No two industries face the same climate challenges. Our sector-specific expertise means
                        we move fast, speak your language, and deliver solutions grounded in your commercial
                        reality — not generic sustainability frameworks.
                    </motion.p>
                </div>

                {/* Industry Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.title}
                            className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-400 overflow-hidden cursor-default"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -6 }}
                        >
                            {/* Hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                            {/* Top accent line */}
                            <div className="absolute top-0 left-6 right-6 h-[1px] bg-primary/0 group-hover:bg-primary/40 transition-all duration-400 rounded-full" />

                            <div className="relative z-10">
                                {/* Tag pill */}
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-primary/8 text-primary border border-primary/15 mb-4">
                                    {industry.tag}
                                </span>

                                {/* Icon */}
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(145_72%_50%/0.2)] transition-all duration-400">
                                    <industry.icon className="w-5 h-5 text-primary" />
                                </div>

                                <h3 className="text-base font-bold mb-2.5 group-hover:text-primary transition-colors leading-snug">
                                    {industry.title}
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                                    {industry.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Industry coverage note */}
                <motion.div
                    className="mt-12 flex flex-wrap items-center gap-3 justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-sm text-muted-foreground">Don't see your sector?</p>
                    <a href="#contact" className="text-sm text-primary font-semibold hover:underline underline-offset-4 transition-all">
                        We likely cover it — get in touch →
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default IndustriesSection;
