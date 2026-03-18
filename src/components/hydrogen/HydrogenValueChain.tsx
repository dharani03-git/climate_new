import { motion } from "framer-motion";
import { ArrowRight, Zap, Droplets, Factory, Battery, Truck } from "lucide-react";

const chainSteps = [
    {
        icon: Zap,
        title: "Renewable Energy",
        description: "Solar, wind, and hydro power generate clean electricity.",
        color: "emerald"
    },
    {
        icon: Droplets,
        title: "Electrolyzers",
        description: "Water is split into hydrogen and oxygen using clean power.",
        color: "cyan"
    },
    {
        icon: Factory,
        title: "H2 Production",
        description: "Green hydrogen is safely captured and compressed.",
        color: "blue"
    },
    {
        icon: Battery,
        title: "Storage",
        description: "Hydrogen is stored in tanks, salt caverns, or as ammonia.",
        color: "indigo"
    },
    {
        icon: Truck,
        title: "Transportation",
        description: "Moved via pipelines, trucks, or ships to demand centers.",
        color: "purple"
    },
    {
        icon: Factory,
        title: "Applications",
        description: "Used in mobility, steel, chemicals, and power.",
        color: "primary"
    }
];

const HydrogenValueChain = () => {
    return (
        <section className="py-24 bg-card/30" id="value-chain">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Green Hydrogen Value Chain</h2>
                    <p className="text-muted-foreground text-lg">
                        From molecule generation to industrial application, we provide advisory across every stage of the green hydrogen ecosystem.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line for Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-primary/20 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
                        {chainSteps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="flex flex-col items-center text-center group"
                                >
                                    <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 shadow-xl group-hover:border-primary/50 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-primary/20 relative">
                                        <Icon className="w-8 h-8 text-primary" />
                                        {index < chainSteps.length - 1 && (
                                            <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center">
                                                <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HydrogenValueChain;
