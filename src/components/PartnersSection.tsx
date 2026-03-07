import { motion } from "framer-motion";
import { Globe, Cpu, BookOpen, ArrowRight, Sparkles } from "lucide-react";

const partnerCategories = [
    {
        title: "Strategic Alliances",
        description:
            "We maintain strategic alliances with leading global management consultancies and sustainability networks that extend our geographic reach and enhance our ability to deliver outcomes at the scale our clients require.",
        icon: Globe,
        color: "from-emerald-500/10 to-transparent",
        iconColor: "text-emerald-400",
        iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    },
    {
        title: "Technology Partners",
        description:
            "Our technology partner ecosystem includes leading climate data providers, IoT emissions monitoring platforms, AI analytics companies, and enterprise sustainability software vendors — all integrated within ClimateOS™.",
        icon: Cpu,
        color: "from-cyan-500/10 to-transparent",
        iconColor: "text-cyan-400",
        iconBg: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
    },
    {
        title: "Research & Academic Partners",
        description:
            "We maintain formal research partnerships with universities, climate institutes, and IPCC-affiliated research centres — ensuring our work is always grounded in the most current climate science.",
        icon: BookOpen,
        color: "from-violet-500/10 to-transparent",
        iconColor: "text-violet-400",
        iconBg: "bg-violet-500/10 group-hover:bg-violet-500/20",
    },
];

const logos = [
    "UNEP FI", "World Resources Institute", "Climate Group", "Carbon Disclosure Project",
    "Rocky Mountain Institute", "Bezos Earth Fund", "GFANZ", "Science Based Targets",
];

const PartnersSection = () => {
    return (
        <section id="partners" className="section-padding bg-secondary/20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.06] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute inset-x-0 top-0 h-[350px] bg-gradient-to-b from-primary/4 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        className="section-label mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Sparkles className="w-3 h-3" /> Partners
                    </motion.div>
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.05] tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                    >
                        Powerful Partnerships for{" "}
                        <span className="text-gradient-primary">Greater Climate Impact</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        No single organisation can solve climate change alone. We collaborate with a carefully
                        selected global ecosystem of research institutions, technology companies, financial
                        partners, and sustainability networks.
                    </motion.p>
                </div>

                {/* Partner category cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {partnerCategories.map((partner, index) => (
                        <motion.div
                            key={partner.title}
                            className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-400 overflow-hidden cursor-default card-hover-lift"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                            <div className="relative z-10">
                                <div className={`w-12 h-12 rounded-xl ${partner.iconBg} flex items-center justify-center mb-6 transition-all duration-400`}>
                                    <partner.icon className={`w-6 h-6 ${partner.iconColor} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                                    {partner.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/75 transition-colors duration-300">
                                    {partner.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Scrolling logo strip */}
                <motion.div
                    className="mb-10 py-6 border-y border-border/40 overflow-hidden relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
                        {[...logos, ...logos].map((logo, i) => (
                            <span key={i} className="text-sm font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors shrink-0">
                                {logo}
                            </span>
                        ))}
                    </div>
                    {/* Fade edges */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
                </motion.div>

                {/* Become a Partner CTA */}
                <motion.div
                    className="relative p-10 rounded-2xl overflow-hidden border border-primary/25"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.06] pointer-events-none" />
                    <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-primary/10 rounded-full blur-[80px]" />

                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div>
                            <div className="section-label mb-4">Become a Partner</div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-3">Let's Create More Impact Together</h3>
                            <p className="text-muted-foreground max-w-lg leading-relaxed">
                                Whether you are a technology provider, specialist consultancy, financial institution,
                                or research organisation, we would love to explore how we might create more impact together.
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-primary/25"
                        >
                            Get in Touch <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </div>

            <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default PartnersSection;
