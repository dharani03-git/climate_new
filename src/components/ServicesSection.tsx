import { motion } from "framer-motion";
import { CheckCircle, ArrowUpRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: "strategic-advisory",
      title: "Strategic Advisory",
      tag: "Strategy",
      emoji: "🧭",
      description:
        "Market entry strategy, M&A advisory, partnership structuring, ecosystem development. We help organisations identify the right markets, structure the right partnerships, and build the commercial frameworks needed to compete and grow in the energy transition economy.",
      keyActivities: [
        "Market entry and expansion strategy",
        "Mergers & acquisitions advisory",
        "Partnership and ecosystem structuring",
        "Commercial framework development",
        "Competitive positioning analysis",
      ],
    },
    {
      id: "technical-engineering-service",
      title: "Technical Engineering",
      tag: "Engineering",
      emoji: "⚙️",
      description:
        "Powertrain design, battery technology advisory, EV charging systems, grid integration. Our engineering team bridges the gap between technical feasibility and commercial deployment — from component-level design to full system integration.",
      keyActivities: [
        "Powertrain and battery system design",
        "EV charging infrastructure design and optimization",
        "Grid integration and interconnection planning",
        "Technical feasibility studies",
        "System integration and deployment",
      ],
    },
    {
      id: "financial-economic-modeling",
      title: "Financial & Economic Modeling",
      tag: "Finance",
      emoji: "📊",
      description:
        "Total cost of ownership (TCO) analysis, incentive optimisation, investment case development, risk management. We build the financial models that make climate infrastructure bankable and investment decisions defensible.",
      keyActivities: [
        "Total cost of ownership (TCO) analysis",
        "Incentive and subsidy optimization",
        "Investment case development and modeling",
        "Financial scenario and sensitivity analysis",
        "Risk assessment and mitigation strategy",
      ],
    },
    {
      id: "regulatory-policy",
      title: "Regulatory & Policy",
      tag: "Policy",
      emoji: "⚖️",
      description:
        "Compliance strategy, subsidy and incentive navigation, carbon credit optimisation. We track the evolving policy landscape across jurisdictions and translate regulatory complexity into clear, actionable compliance roadmaps for our clients.",
      keyActivities: [
        "Regulatory compliance strategy development",
        "Policy landscape tracking and analysis",
        "Subsidy and incentive program navigation",
        "Carbon credit and offset optimization",
        "Compliance roadmap creation",
      ],
    },
    {
      id: "supply-chain-service",
      title: "Supply Chain",
      tag: "Operations",
      emoji: "🔗",
      description:
        "Localisation strategy, supplier diversification, supply chain resilience planning. We help clients build robust, future-proof supply chains that reduce dependency risk and align with domestic content and sustainability requirements.",
      keyActivities: [
        "Localization strategy and planning",
        "Supplier diversification and sourcing",
        "Supply chain resilience assessment",
        "Risk mitigation and contingency planning",
        "Domestic content and sustainability alignment",
      ],
    },
    {
      id: "digital-data-service",
      title: "Digital & Data",
      tag: "Technology",
      emoji: "💡",
      description:
        "Battery analytics, predictive maintenance, fleet management platforms, AI-driven optimisation. We integrate data intelligence into every layer of climate infrastructure — turning operational data into performance gains and cost savings.",
      keyActivities: [
        "Battery performance analytics and monitoring",
        "Predictive maintenance systems",
        "Fleet management platform implementation",
        "AI-driven optimization algorithms",
        "Real-time operational data integration",
      ],
    },
    {
      id: "sustainability-esg-service",
      title: "Sustainability & ESG",
      tag: "ESG",
      emoji: "🌿",
      description:
        "Circular economy design, carbon footprint reduction, ESG reporting and disclosure. We help organisations move beyond compliance to build sustainability programmes that create measurable value and credibility with investors, regulators, and customers.",
      keyActivities: [
        "Circular economy business model design",
        "Carbon footprint reduction strategy",
        "ESG reporting and disclosure frameworks",
        "Sustainability certification and audit support",
        "Stakeholder engagement and communication",
      ],
    },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-fine opacity-[0.5] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Centered */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.div
            className="section-label mb-6 mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Expertise Across the{" "}
            <span className="text-gradient-primary">Energy Transition</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We provide comprehensive advisory services spanning strategy, technology, finance,
            policy, supply chain, data analytics, and sustainability — helping organisations
            navigate the energy transition with confidence and credibility.
          </motion.p>
        </div>

        {/* Climate Image Banner */}
        <motion.div
          className="w-full mb-14 rounded-2xl overflow-hidden relative h-48 md:h-64 shadow-[0_8px_40px_hsl(145_72%_50%/0.15)]"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <img
            src="/green_energy.png"
            alt="Green Energy — Solar farm and wind turbines"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white/80 text-sm font-mono uppercase tracking-[0.3em]">
              Powering the Net-Zero Economy
            </p>
          </div>
        </motion.div>

        {/* Services list */}
        <div className="space-y-1">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/50 hover:bg-card hover:border-primary/35 transition-all duration-400 scroll-mt-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.04, duration: 0.5 }}
            >
              {/* Left accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary/0 group-hover:bg-primary/60 transition-all duration-400 rounded-l-full" />

              {/* Summary row (always visible) */}
              <div className="flex flex-wrap items-center gap-4 px-8 py-6">
                <span className="text-2xl" aria-hidden>{service.emoji}</span>
                <div className="flex-1 min-w-[200px]">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{service.title}</h3>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/8 text-primary border border-primary/15">
                      {service.tag}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 max-w-2xl leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
              </div>

              {/* Key activities (revealed on hover via max-h transition) */}
              <div className="max-h-0 group-hover:max-h-80 overflow-hidden transition-[max-height] duration-500 ease-in-out">
                <div className="px-8 pb-6 pt-0 border-t border-border/30">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary/80 mb-4 pt-5">
                    Key Activities
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {service.keyActivities.map((activity, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 px-4 py-3 rounded-xl bg-background/50 border border-border/40 hover:border-primary/30 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground leading-relaxed">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-5">
            Need a bespoke combination of these services?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/25"
          >
            Talk to Our Team <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
