import { motion } from "framer-motion";
import { Quote, CheckCircle2 } from "lucide-react";

const values = [
    {
        title: "Science First",
        description:
            "Every recommendation we make is rooted in the latest climate research and IPCC-aligned decarbonisation pathways. We never oversimplify the science to make it more commercially comfortable.",
        icon: "🔬",
    },
    {
        title: "Commercial Rigour",
        description:
            "We design sustainability strategies to create measurable business value — because climate action that ignores financial reality will never reach the scale the world needs.",
        icon: "📊",
    },
    {
        title: "Radical Transparency",
        description:
            "We say what is true, not what is comfortable. We call out greenwashing — including our own — and are open about uncertainties, trade-offs, and limitations in everything we do.",
        icon: "🔍",
    },
    {
        title: "Lasting Impact",
        description:
            "We measure our success not by the volume of reports we deliver, but by tonnes of carbon reduced, funds mobilised, and sustainable value created for our clients and the communities they operate in.",
        icon: "🌱",
    },
];

const milestones = [
    { year: "2015", event: "Founded by climate scientists & strategists at COP21, Paris" },
    { year: "2017", event: "Reached 50 clients across 10 countries" },
    { year: "2019", event: "Launched ClimateOS™ platform — first version deployed" },
    { year: "2021", event: "Crossed 100M tonnes CO₂ advisory scope globally" },
    { year: "2023", event: "Expanded to 30 countries; team grows to 80+ specialists" },
    { year: "2025", event: "Named Top 10 Climate Advisory Firm by GreenBiz 2025" },
];

const AboutSection = () => {
    return (
        <section id="about" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 blur-[130px] rounded-l-full pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute inset-0 bg-grid-fine opacity-[0.5] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Intro grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="section-label mb-6">About Us</div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.05] tracking-tight">
                            We Are{" "}
                            <span className="text-gradient-primary">Trustgrid.in</span>
                        </h2>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-4 mt-10">
                            {[
                                { value: "200+", label: "Organisations" },
                                { value: "30", label: "Countries" },
                                { value: "80+", label: "Specialists" },
                            ].map((stat) => (
                                <div key={stat.label} className="p-4 rounded-xl bg-card border border-border/50 text-center group hover:border-primary/40 transition-all">
                                    <p className="text-2xl font-display font-bold text-primary">{stat.value}</p>
                                    <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="space-y-5 text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p>
                            Trustgrid.in was founded by climate scientists and business strategists who believed
                            something radical: that sustainability and commercial success are not just compatible —
                            they are inseparable. Frustrated by the gap between climate ambition and climate action in
                            the corporate world, our founders set out to build a firm that bridged science, strategy,
                            and execution in a way that had never been done before.
                        </p>
                        <p>
                            Since our founding, we have worked with over 200 organisations across 30 countries, helping
                            them navigate the most complex and consequential challenge of our era. We don't believe in
                            tick-box sustainability. We believe in deep, transformative, science-led change that unlocks
                            real business value.
                        </p>
                        <p>
                            Today, our team of 80+ specialists — spanning climate science, corporate finance, policy,
                            engineering, data analytics, and communications — brings unparalleled depth and breadth to
                            every engagement.
                        </p>
                    </motion.div>
                </div>

                {/* Mission banner */}
                <motion.div
                    className="relative p-10 rounded-2xl border border-primary/30 overflow-hidden mb-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
                    <div className="absolute -left-12 -top-12 w-48 h-48 bg-primary/8 rounded-full blur-[60px]" />
                    <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-cyan-500/8 rounded-full blur-[60px]" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.06] pointer-events-none" />

                    <div className="relative z-10">
                        <p className="section-label mx-auto mb-5">Our Mission</p>
                        <p className="text-xl md:text-2xl lg:text-3xl font-bold max-w-3xl mx-auto leading-relaxed">
                            "To accelerate the transition to a net-zero economy by equipping organisations with the
                            strategy, capability, and tools to turn climate ambition into{" "}
                            <span className="text-gradient-primary">verified, lasting impact.</span>"
                        </p>
                    </div>
                </motion.div>

                {/* Values grid */}
                <div className="mb-20">
                    <motion.h3
                        className="text-3xl font-bold mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Core Values
                    </motion.h3>
                    <motion.p
                        className="text-muted-foreground mb-10 max-w-lg"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                    >
                        The principles that guide every client engagement and every internal decision.
                    </motion.p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                className="group flex gap-5 p-7 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-400 cursor-default card-hover-lift"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="text-3xl flex-shrink-0 mt-0.5">{value.icon}</div>
                                <div>
                                    <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                        {value.title}
                                    </h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Timeline */}
                <div className="mb-20">
                    <motion.h3
                        className="text-3xl font-bold mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Journey
                    </motion.h3>
                    <div className="relative">
                        {/* Line */}
                        <div className="absolute left-[72px] md:left-1/2 top-0 bottom-0 w-px bg-border/60 -translate-x-px" />
                        <div className="space-y-10">
                            {milestones.map((m, i) => (
                                <motion.div
                                    key={m.year}
                                    className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:gap-0`}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                >
                                    {/* Year bubble — mobile left aligned */}
                                    <div className={`shrink-0 w-[72px] md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8 md:order-2"}`}>
                                        <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-bold font-display">
                                            {m.year}
                                        </span>
                                    </div>

                                    {/* Dot */}
                                    <div className="absolute left-[68px] md:left-1/2 -translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10" />

                                    {/* Content */}
                                    <div className={`flex-1 md:w-1/2 ${i % 2 === 0 ? "md:pl-8" : "md:pr-8 md:order-1 md:text-right"}`}>
                                        <p className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                                            <CheckCircle2 className={`w-4 h-4 text-primary flex-shrink-0 mt-0.5 ${i % 2 !== 0 ? "md:order-2" : ""}`} />
                                            {m.event}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Founder Quote */}
                <motion.div
                    className="relative p-10 rounded-2xl bg-surface-elevated border border-border/50 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full blur-[40px]" />
                    <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/15" />
                    <blockquote className="pl-6 text-xl md:text-2xl font-semibold leading-relaxed mb-6 relative z-10">
                        "The question is no longer whether businesses need to act on climate — it's how fast and how
                        ambitiously. We exist to make that answer{" "}
                        <span className="text-gradient-primary">possible for every organisation we work with.</span>"
                    </blockquote>
                    <div className="pl-6 flex items-center gap-4 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">MP</div>
                        <p className="text-muted-foreground font-medium">
                            Dr. Maya Patel — <span className="text-foreground">Founder & CEO, Trustgrid.in</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
