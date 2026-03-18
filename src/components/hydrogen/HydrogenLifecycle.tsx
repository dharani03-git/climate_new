import { motion } from "framer-motion";

const lifecyclePhases = [
    {
        phase: "Concept & Feasibility",
        year: "Phase 1",
        tasks: ["Technology evaluation", "Site selection & renewable mapping", "Preliminary economic modeling (LCOH)"],
        color: "from-emerald-500/20 to-emerald-500/5",
        borderColor: "border-emerald-500/30"
    },
    {
        phase: "Development & Engineering",
        year: "Phase 2",
        tasks: ["Permitting & regulatory compliance", "Infrastructure & plant design (FEED)", "Financing strategies & subsidies"],
        color: "from-cyan-500/20 to-cyan-500/5",
        borderColor: "border-cyan-500/30"
    },
    {
        phase: "Construction & Commissioning",
        year: "Phase 3",
        tasks: ["Project monitoring & EPC oversight", "Technology integration", "Safety compliance & HAZOP"],
        color: "from-blue-500/20 to-blue-500/5",
        borderColor: "border-blue-500/30"
    },
    {
        phase: "Operations & Offtake",
        year: "Phase 4",
        tasks: ["Performance optimization", "Asset management", "Hydrogen trading and offtake agreements"],
        color: "from-primary/20 to-primary/5",
        borderColor: "border-primary/30"
    }
];

const HydrogenLifecycle = () => {
    return (
        <section className="py-24 bg-background" id="lifecycle">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Project Lifecycle Support</h2>
                    <p className="text-muted-foreground text-lg">
                        End-to-end advisory guiding your hydrogen initiatives from conceptualization to commercial operation.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical line for mobile */}
                    <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-border/50 rounded-full" />

                    <div className="grid md:grid-cols-4 gap-8 md:gap-4 lg:gap-8">
                        {lifecyclePhases.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="relative pl-20 md:pl-0"
                            >
                                {/* Mobile timeline dot */}
                                <div className="md:hidden absolute left-[1.8rem] top-6 w-4 h-4 rounded-full bg-primary ring-4 ring-background border border-primary/30 z-10" />

                                {/* Desktop timeline line/connector */}
                                <div className="hidden md:block w-full h-1 bg-gradient-to-r from-border/80 to-transparent mb-8 mt-2 relative">
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_15px_rgba(var(--primary),0.5)] z-10" />
                                </div>

                                <h4 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">{item.year}</h4>
                                <h3 className="text-xl font-bold mb-4">{item.phase}</h3>

                                <ul className={`bg-gradient-to-b ${item.color} border ${item.borderColor} p-6 rounded-2xl space-y-3`}>
                                    {item.tasks.map((task, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                            <span className="text-primary mt-1">▹</span>
                                            {task}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HydrogenLifecycle;
