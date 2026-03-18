import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

const HydrogenCTA = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-card/5 border-t border-border/50" id="contact">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary/5" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 hover:bg-primary/30 transition-colors duration-1000 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto bg-card/60 backdrop-blur-2xl border border-primary/20 rounded-[3rem] p-10 md:p-16 text-center shadow-2xl shadow-primary/10"
                >
                    <div className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-bold tracking-wide uppercase mb-6">
                        Accelerate Transition
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                        Build the Hydrogen Economy
                    </h2>

                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                        Partner with experts to design scalable hydrogen infrastructure, unlock green hydrogen investment opportunities, and accelerate industrial decarbonization.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a
                            href="#contact-form"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 shadow-xl shadow-primary/25 transition-all gap-2 text-lg"
                        >
                            Request Advisory Consultation <ArrowRight className="w-5 h-5" />
                        </a>

                        <a
                            href="/docs/hydrogen-strategy-brief.pdf"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border-2 border-primary/30 text-foreground font-semibold hover:bg-primary/5 hover:border-primary/60 transition-all gap-2 text-lg"
                        >
                            Download Strategy Brief <FileText className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HydrogenCTA;
