import { motion } from "framer-motion";
import { Monitor, Brain, FileText, Link, DollarSign, ArrowUpRight } from "lucide-react";

const solutions = [
    {
        title: "ClimateOS™",
        subtitle: "Integrated Management Platform",
        description:
            "ClimateOS™ is our end-to-end digital platform for managing your entire climate programme in one place. Connect your data sources, track Scope 1, 2, and 3 emissions in real time, run scenario models, manage disclosure workflows, and engage your supply chain — all within a single, audit-ready environment. Built for sustainability teams that need both rigour and agility.",
        icon: Monitor,
        badge: "Flagship Platform",
        badgeColor: "bg-primary/15 text-primary border-primary/25",
        featured: true,
    },
    {
        title: "Carbon Intelligence Suite",
        subtitle: "AI-Powered Analytics",
        description:
            "AI-powered analytics that transform your emissions data into strategic insight. Identify reduction opportunities, model the cost of inaction, and benchmark against peers. Designed for sustainability, finance, and operations teams who need answers — not more data.",
        icon: Brain,
        badge: "Analytics",
        badgeColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
        featured: false,
    },
    {
        title: "Sustainability Reporting Accelerator",
        subtitle: "Multi-Framework Reporting",
        description:
            "Streamline mandatory and voluntary sustainability reporting across multiple frameworks. Our accelerator integrates GRI, CDP, TCFD, CSRD, and SASB into a single guided workflow — cutting reporting time by up to 60% and generating assurance-ready outputs.",
        icon: FileText,
        badge: "Reporting",
        badgeColor: "bg-violet-500/15 text-violet-400 border-violet-500/25",
        featured: false,
    },
    {
        title: "Supply Chain Decarbonisation",
        subtitle: "Scope 3 Engagement",
        description:
            "A structured programme to engage, educate, and activate your supplier network on climate action. We help suppliers measure their footprint, set science-based targets, and implement verified reduction initiatives — delivering measurable Scope 3 reductions.",
        icon: Link,
        badge: "Programme",
        badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/25",
        featured: false,
    },
    {
        title: "Green Finance Readiness",
        subtitle: "Sustainable Finance Access",
        description:
            "Prepare your organisation to unlock sustainability-linked finance. We develop green finance frameworks, identify eligible lending instruments and grant opportunities, build the data infrastructure required by lenders and investors, and support you through independent assurance.",
        icon: DollarSign,
        badge: "Finance",
        badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
        featured: false,
    },
];

const SolutionsSection = () => {
    const featured = solutions.find((s) => s.featured)!;
    const rest = solutions.filter((s) => !s.featured);

    return (
        <section id="solutions" className="section-padding bg-secondary/20 relative overflow-hidden">
            {/* Background decor */}
            <div className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-primary/5 blur-[120px] rounded-tl-full pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        className="section-label mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Platforms & Programmes
                    </motion.div>
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.05] tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                    >
                        Purpose-Built Sustainability{" "}
                        <span className="text-gradient-primary">Platforms and Programmes</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Beyond advisory services, we deliver proprietary platforms and structured programmes that
                        operationalise climate action at scale — turning strategy into measurable, auditable progress.
                    </motion.p>
                </div>

                {/* Featured card */}
                <motion.div
                    className="group relative p-8 md:p-10 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-400 overflow-hidden mb-6 cursor-default"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4 }}
                >
                    {/* Featured gradient & scan line */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-60" />
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />
                    {/* Glow orb */}
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/8 rounded-full blur-[60px] group-hover:bg-primary/15 transition-all duration-500" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/25 group-hover:shadow-[0_0_30px_hsl(145_72%_50%/0.3)] transition-all duration-400">
                                <featured.icon className="w-8 h-8 text-primary" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                                    {featured.title}
                                </h3>
                                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${featured.badgeColor}`}>
                                    {featured.badge}
                                </span>
                            </div>
                            <p className="text-sm text-primary/70 font-semibold mb-4 uppercase tracking-wider">
                                {featured.subtitle}
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-5">{featured.description}</p>
                            <a href="#contact" className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                                Request a Demo <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Rest of cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {rest.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            className="group relative p-7 rounded-2xl border border-border/50 bg-card hover:border-primary/40 transition-all duration-400 overflow-hidden cursor-default card-hover-lift"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                            <div className="relative z-10 flex gap-5 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-400">
                                    <solution.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                            {solution.title}
                                        </h3>
                                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${solution.badgeColor}`}>
                                            {solution.badge}
                                        </span>
                                    </div>
                                    <p className="text-xs text-primary/65 font-semibold mb-3 uppercase tracking-wider">
                                        {solution.subtitle}
                                    </p>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
