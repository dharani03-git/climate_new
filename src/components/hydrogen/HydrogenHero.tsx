import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

const HydrogenHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
            {/* Background visual suggestions */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]" />
            </div>

            <div className="container px-4 md:px-6 z-10 mx-auto relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col space-y-8"
                    >
                        <div className="inline-flex px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium w-fit">
                            New Offering
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                            Hydrogen Fuel Advisory & <span className="text-primary">Infrastructure Services</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                            Strategic, technical, and financial advisory across the green hydrogen value chain—from production and storage to distribution and end-use applications.
                        </p>

                        <p className="text-base text-muted-foreground/80 leading-relaxed max-w-xl">
                            We support governments, utilities, industrial players, and investors in designing and implementing scalable hydrogen ecosystems aligned with global decarbonization targets and India's National Green Hydrogen Mission.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#solutions" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all gap-2">
                                Explore Hydrogen Solutions <ArrowRight className="w-5 h-5" />
                            </a>
                            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border bg-card/50 backdrop-blur text-foreground font-semibold hover:bg-card hover:border-primary/50 transition-all gap-2">
                                Talk to Our Experts <MessageSquare className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Abstract visual for ecosystem */}
                        <div className="relative rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-xl p-6 shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                            <img
                                src="/assets/hydrogen_hero_diagram.png"
                                alt="Hydrogen Ecosystem Flow"
                                className="relative z-10 w-full h-full rounded-xl object-cover shadow-[0_0_30px_rgba(34,197,94,0.1)] border border-primary/10 transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HydrogenHero;
