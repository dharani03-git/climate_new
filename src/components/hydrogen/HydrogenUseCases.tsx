import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const useCases = [
    {
        title: "Decentralized Hydrogen Production",
        description: "Electrolyzers for remote sites such as telecom towers, military bases, and off-grid communities. Eliminates diesel dependency and provides autonomous reliable power.",
        image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80&w=800",
        tag: "Remote Power"
    },
    {
        title: "Industrial Hydrogen Blending",
        description: "Blending green hydrogen in refineries, steel plants, and chemical facilities to reduce scope 1 emissions without overhauling existing legacy infrastructure immediately.",
        image: "https://images.unsplash.com/photo-1542382103-e84b901614fd?auto=format&fit=crop&q=80&w=800",
        tag: "Heavy Industry"
    },
    {
        title: "Hydrogen Mobility Pilots",
        description: "Hydrogen-powered heavy machinery, long-haul trucks, and e-fuels integration such as green methanol for aviation and maritime decarbonization.",
        image: "https://images.unsplash.com/photo-1620021305417-681530e62858?auto=format&fit=crop&q=80&w=800",
        tag: "Mobility"
    }
];

const HydrogenUseCases = () => {
    return (
        <section className="py-24 bg-background border-t border-border/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Strategic Hydrogen Use Cases</h2>
                        <p className="text-muted-foreground text-lg">
                            Driving scalable decarbonization where electrification falls short.
                        </p>
                    </div>
                    <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl text-primary max-w-sm">
                        <div className="text-2xl font-bold mb-1">~221 MTPA</div>
                        <p className="text-sm font-medium">Emissions reduction potential in India's industrial sector by 2050 through green hydrogen adoption.</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {useCases.map((useCase, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group rounded-3xl overflow-hidden border border-border/60 bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0" />
                                <img
                                    src={useCase.image}
                                    alt={useCase.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 z-20 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold border border-white/10 uppercase tracking-wider text-primary">
                                    {useCase.tag}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {useCase.description}
                                </p>
                                <div className="flex items-center gap-2 text-sm font-bold text-primary group-hover:translate-x-2 transition-transform cursor-pointer w-fit">
                                    Explore Implementation <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HydrogenUseCases;
