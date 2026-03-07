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
      image: "/finance_buildings.png",
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
      image: "/climate_analytics.png",
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
      image: "/sustainability.png",
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



        {/* Dynamic Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const hasImage = !!service.image;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                className={`group relative overflow-hidden rounded-2xl border border-border/40 transition-all duration-400 scroll-mt-32 flex flex-col ${hasImage
                    ? "lg:col-span-2 md:col-span-2 col-span-1 min-h-[400px]"
                    : "col-span-1 bg-card/40 hover:bg-card hover:border-primary/40 min-h-[300px]"
                  }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                {/* Background Image Effect for Featured Cards */}
                {hasImage && (
                  <>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-black/30" />
                  </>
                )}

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full p-8">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-3xl" aria-hidden>
                      {service.emoji}
                    </span>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border ${hasImage
                          ? "bg-primary/20 text-primary-foreground border-primary/30"
                          : "bg-primary/5 text-primary border-primary/10"
                        }`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Key Activities Grid (Smaller nested list) */}
                  <div className="grid grid-cols-1 gap-2 mt-auto">
                    {service.keyActivities.slice(0, 3).map((activity, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5 opacity-80" />
                        <span className="text-xs text-muted-foreground/90">{activity}</span>
                      </div>
                    ))}
                  </div>

                  {/* Subtle link arrow */}
                  <div className="absolute top-8 right-8 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </motion.div>
            );
          })}
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
