import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const policies = [
    "India National Green Hydrogen Mission",
    "Hydrogen Purchase Obligations (HPO)",
    "Export Opportunities & Certifications (e.g., CertifHy)",
    "Government Subsidies and PLI Schemes",
    "Carbon Credit Mechanisms and VCMs"
];

const HydrogenPolicy = () => {
    return (
        <section className="py-24 bg-card/20" id="policy-regulatory">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Policy & Regulatory Alignment</h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            The hydrogen policy landscape is evolving rapidly. We guide developers, off-takers, and investors through complex regulatory frameworks to ensure compliance, maximize subsidies, and secure long-term offtake agreements.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {policies.map((policy, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                    <span className="text-foreground font-medium">{policy}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="p-6 bg-card border border-border/50 rounded-2xl shadow-lg border-l-4 border-l-primary">
                            <p className="text-sm font-semibold text-foreground/80">
                                "Our advisory services help organizations navigate policy frameworks precisely to unlock the $2.5 billion incentive corpus under India's PLI schemes for electrolyzer manufacturing and green hydrogen production."
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-primary/20"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1577908953926-72433bb0a149?auto=format&fit=crop&q=80&w=800"
                            alt="Policy meeting and document review"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col justify-end p-8">
                            <div className="bg-primary/20 backdrop-blur-md border border-primary/30 p-4 rounded-xl max-w-sm">
                                <h4 className="text-primary font-bold mb-1">Strategic Advantage</h4>
                                <p className="text-sm text-foreground/90">Stay ahead of policy mandates with our predictive regulatory mapping and market intelligence.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HydrogenPolicy;
