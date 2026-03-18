import { motion } from "framer-motion";

const infrastructureCapabilities = [
    {
        title: "Electrolyzer Project Development",
        description: "Site selection, technology sizing (PEM, Alkaline, SOEC), balance of plant design, and power sourcing optimization.",
    },
    {
        title: "Hydrogen Storage Design",
        description: "Engineering solutions for compressed gas storage, cryogenic liquid hydrogen, and chemical carriers like ammonia/LOHC.",
    },
    {
        title: "Hydrogen Transportation Networks",
        description: "Pipeline routing, material compatibility assessments, and multimodal logistics planning for hydrogen transport.",
    },
    {
        title: "Refueling Infrastructure",
        description: "Design and deployment strategies for high-pressure hydrogen refueling stations (HRS) for heavy-duty mobility.",
    },
    {
        title: "Industrial Integration",
        description: "Brownfield conversion, capturing off-gas streams, and retrofitting burners and industrial heating processes for H2.",
    },
    {
        title: "Hydrogen Export Hubs",
        description: "Feasibility and master planning for coastal export terminals targeting international green mobility markets.",
    }
];

const HydrogenInfrastructure = () => {
    return (
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden" id="infrastructure">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 rounded-l-[100px] blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-700/40 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Hydrogen Infrastructure Advisory</h2>
                        <p className="text-primary-foreground/80 text-lg">
                            Building the physical backbone of the hydrogen economy, from giga-scale production plants to last-mile refueling solutions.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {infrastructureCapabilities.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                                0{idx + 1}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-primary-foreground/70 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HydrogenInfrastructure;
