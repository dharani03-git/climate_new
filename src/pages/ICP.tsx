import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ChevronRight, Target, CheckCircle, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const icpProfiles = [
    {
        id: "infrastructure-funds",
        tab: "Infrastructure Funds & Institutional Investors",
        shortTab: "Infrastructure Funds",
        whoTheyAre:
            "Senior investment directors, portfolio managers, and ESG teams at infrastructure funds, pension funds, sovereign wealth funds, and development finance institutions managing or deploying capital into real assets and climate-aligned portfolios.",
        painPoints: [
            "Lack of credible, bankable climate project pipeline aligned with fund mandate",
            "Insufficient in-house technical expertise to evaluate climate asset risk and return",
            "Growing LP pressure and regulatory obligations to demonstrate Paris alignment",
            "Difficulty quantifying and reporting climate impact credibly to stakeholders",
            "Fragmented data on carbon credits, RECs, and nature-based project quality",
        ],
        howWeHelp: [
            "Pipeline origination and bankability assessment for renewable and climate assets",
            "Technical due diligence support and co-investment structuring",
            "Portfolio-level TCFD and Paris alignment reporting frameworks",
            "Carbon and REC market strategy and origination",
            "Impact measurement and verification for investor reporting",
        ],
        desiredOutcome:
            "A climate-credible portfolio that outperforms peers, satisfies LP mandates, and is positioned to capture long-term value in the low-carbon economy — with verified impact data that holds up to regulatory and public scrutiny.",
    },
    {
        id: "renewable-developers",
        tab: "Renewable Energy Developers",
        shortTab: "Renewable Developers",
        whoTheyAre:
            "Project development teams, technical directors, and CEOs at independent power producers, renewable energy developers, and clean energy platforms developing solar, wind, storage, green hydrogen, or hybrid energy projects across emerging and developed markets.",
        painPoints: [
            "Difficulty securing project finance for first-of-kind or complex renewable structures",
            "Gaps in climate data, grid analysis, and energy yield modelling for bankability",
            "Challenges navigating carbon market structures and monetizing environmental attributes",
            "Regulatory complexity across multiple jurisdictions slowing project timelines",
            "Limited capacity for ESG reporting and sustainability narrative for off-takers",
        ],
        howWeHelp: [
            "Feasibility-to-finance advisory for renewable energy and storage projects",
            "Carbon credit origination, validation, and registry issuance support",
            "Renewable energy certificate (REC) structuring and market placement",
            "PPA structuring and off-taker engagement strategy",
            "Investor-ready project documentation and climate impact narrative",
        ],
        desiredOutcome:
            "Shovel-ready, financeable projects with diversified revenue streams — renewable energy sales, carbon credits, and RECs — and a clear path to financial close with institutional capital partners.",
    },
    {
        id: "ai-data-centers",
        tab: "AI Data Centers & Hyperscale Operators",
        shortTab: "AI Data Centers",
        whoTheyAre:
            "Heads of sustainability, infrastructure directors, and CFOs at hyperscale cloud providers, AI infrastructure companies, and co-location operators managing or developing large-scale data center portfolios with significant and growing energy consumption footprints.",
        painPoints: [
            "Rapidly escalating energy demand creating reputational and regulatory exposure",
            "Difficulty sourcing sufficient credible renewable energy to match consumption",
            "Carbon neutrality and net-zero commitments under scrutiny from customers and investors",
            "Lack of transparent, auditable methodology for Scope 2 and Scope 3 reporting",
            "Rising cost of carbon and pressure to go beyond offsets to real reduction",
        ],
        howWeHelp: [
            "24/7 clean energy matching strategy and PPA portfolio design",
            "On-site solar, battery storage, and backup power feasibility studies",
            "Credible carbon removal strategy beyond low-quality offset purchasing",
            "Scope 1, 2 & 3 measurement framework and third-party assured reporting",
            "Green data center certification and customer-facing sustainability narrative",
        ],
        desiredOutcome:
            "A verifiably clean data center operation with a defensible, auditable net-zero claim — backed by real energy infrastructure, quality carbon removal, and transparent reporting that satisfies enterprise customers, regulators, and investors.",
    },
    {
        id: "mobility-logistics",
        tab: "Mobility Platforms & Logistics Operators",
        shortTab: "Mobility & Logistics",
        whoTheyAre:
            "Heads of fleet, sustainability directors, and operations executives at logistics companies, ride-hailing platforms, urban mobility operators, port authorities, and shipping companies facing decarbonization pressure from regulators, customers, and investors.",
        painPoints: [
            "Complex, capital-intensive fleet electrification journey with unclear ROI timelines",
            "Charging infrastructure gaps limiting EV transition viability at scale",
            "Evolving emissions regulations (FuelEU, IMO 2030, CSRD) creating compliance uncertainty",
            "Difficulty building a credible, costed Scope 1 decarbonization roadmap",
            "Supplier and customer pressure to demonstrate supply chain emissions reductions",
        ],
        howWeHelp: [
            "Fleet electrification strategy, total-cost-of-ownership modelling, and transition roadmap",
            "EV charging infrastructure siting, structuring, and financing advisory",
            "Hydrogen and alternative fuel corridor feasibility for heavy-duty and maritime use",
            "Regulatory compliance strategy for FuelEU, IMO, and CSRD",
            "Scope 1 & 3 reduction programme design and reporting framework",
        ],
        desiredOutcome:
            "A clear, commercially viable path to zero-emission operations — with a financed infrastructure transition plan, regulatory compliance roadmap, and a credible net-zero narrative that protects and grows customer relationships.",
    },
    {
        id: "corporate-esg",
        tab: "Corporate Sustainability & ESG Leaders",
        shortTab: "Corporate ESG Leaders",
        whoTheyAre:
            "Chief Sustainability Officers, heads of ESG, and sustainability directors at large and mid-cap corporates in energy, manufacturing, financial services, real estate, and consumer sectors — accountable to board, investors, and regulators for climate performance.",
        painPoints: [
            "Setting ambitious net-zero targets without a credible, costed delivery roadmap",
            "Proliferating mandatory disclosure obligations (CSRD, TCFD, SEC) creating reporting overload",
            "Scope 3 emissions data gaps making full value chain accounting unreliable",
            "Risk of greenwashing accusations undermining brand and investor trust",
            "Insufficient budget or internal capability to execute against stated climate ambitions",
        ],
        howWeHelp: [
            "Net-zero strategy design with science-based targets and implementation roadmap",
            "Integrated ESG disclosure across CSRD, TCFD, CDP, and GRI frameworks",
            "Scope 3 measurement programme and supplier engagement strategy",
            "Greenwashing risk audit and credibility review of existing claims",
            "ClimateOS™ platform deployment for ongoing emissions tracking and reporting",
        ],
        desiredOutcome:
            "A board-level-approved, publicly disclosed, and verifiably credible net-zero strategy — with the internal systems, data quality, and reporting infrastructure to sustain it year after year and withstand investor, regulator, and media scrutiny.",
    },
    {
        id: "governments-dfi",
        tab: "Governments & Development Finance Institutions",
        shortTab: "Governments & DFIs",
        whoTheyAre:
            "Ministers, senior civil servants, and programme directors at national governments, multilateral development banks, and development finance institutions designing or funding low-carbon infrastructure programmes, climate finance mechanisms, and just transition initiatives.",
        painPoints: [
            "Translating national NDC commitments into investable project pipelines",
            "Structuring blended finance mechanisms that can catalyse private capital at scale",
            "Limited technical capacity to evaluate and de-risk climate infrastructure proposals",
            "Pressure to demonstrate measurable climate impact and additionality to donors",
            "Balancing just transition objectives with economic development priorities",
        ],
        howWeHelp: [
            "NDC implementation planning and climate finance architecture design",
            "Blended finance instrument structuring and concessional capital deployment strategy",
            "Project pipeline origination, technical due diligence, and bankability support",
            "Climate impact measurement, MRV framework design, and results reporting",
            "Just transition planning and stakeholder engagement facilitation",
        ],
        desiredOutcome:
            "A credible, investable national climate programme — with a proven pipeline of bankable projects, a functioning climate finance architecture, and a measured, reportable impact trail that satisfies both domestic constituents and international climate finance partners.",
    },
    {
        id: "nature-land",
        tab: "Nature & Land-Use Asset Owners",
        shortTab: "Nature Asset Owners",
        whoTheyAre:
            "Landowners, conservation organisations, agribusiness executives, and impact investors managing forests, agricultural land, wetlands, or blue carbon ecosystems with potential to generate nature-based carbon credits, biodiversity credits, or ecosystem service payments.",
        painPoints: [
            "Uncertainty about how to monetize land assets through carbon and biodiversity markets",
            "Lack of technical expertise to design credible, additional, and verifiable carbon projects",
            "Concerns about reputational risk from low-quality voluntary carbon market involvement",
            "Difficulty attracting institutional-grade buyers for nature-based carbon credits",
            "Complex legal, community, and regulatory considerations for project registration",
        ],
        howWeHelp: [
            "Nature-based carbon project feasibility, design, and validation support",
            "Registry selection and methodology guidance (Verra VCS, Gold Standard, ART TREES)",
            "Carbon credit origination, buyer identification, and offtake agreement structuring",
            "Biodiversity credit and ecosystem service payment programme design",
            "Community engagement frameworks and free prior informed consent (FPIC) processes",
        ],
        desiredOutcome:
            "A fully validated, registry-issued nature-based carbon project generating credible, institutionally-tradeable credits — backed by rigorous science, community partnership, and transparent monitoring — that delivers both financial returns and genuine climate and biodiversity impact.",
    },
];

const ICPPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const profile = icpProfiles[activeIndex];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8 text-xs text-primary font-medium uppercase tracking-widest">
                            <Target className="w-3.5 h-3.5" /> Ideal Customer Profiles
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl">
                            We Work With the Organisations Building the{" "}
                            <span className="text-gradient-primary">Net-Zero Economy</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                            Our work is most impactful when it meets the right organisation at the right moment.
                            If you are deploying capital, developing infrastructure, managing energy, or accountable
                            for your organisation's climate performance — you are who we built Trustgrid.in for.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Tabs + Content */}
            <section className="px-6 md:px-12 lg:px-24 pb-24">
                <div className="max-w-7xl mx-auto">
                    {/* Tab navigation */}
                    <div className="border-b border-border/50 mb-12 overflow-x-auto scrollbar-hide">
                        <div className="flex gap-1 min-w-max">
                            {icpProfiles.map((p, i) => (
                                <button
                                    key={p.id}
                                    onClick={() => setActiveIndex(i)}
                                    className={`px-5 py-3.5 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${i === activeIndex
                                        ? "border-primary text-primary"
                                        : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                                        }`}
                                >
                                    <span className="text-xs text-primary/50 mr-2 font-mono">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    {p.shortTab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Active Profile */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={profile.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                                {/* Who They Are */}
                                <div className="lg:col-span-3">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                        {profile.tab}
                                    </h2>
                                    <div className="p-6 rounded-2xl bg-card border border-border/50">
                                        <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-3">
                                            Who They Are
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed text-base">
                                            {profile.whoTheyAre}
                                        </p>
                                    </div>
                                </div>

                                {/* Pain Points */}
                                <div className="lg:col-span-1">
                                    <div className="p-6 rounded-2xl bg-card border border-border/50 h-full">
                                        <div className="flex items-center gap-2 mb-5">
                                            <AlertTriangle className="w-4 h-4 text-amber-400" />
                                            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                                                Core Pain Points
                                            </p>
                                        </div>
                                        <ul className="space-y-4">
                                            {profile.painPoints.map((point, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center text-xs font-bold mt-0.5">
                                                        {i + 1}
                                                    </span>
                                                    <span className="text-sm text-muted-foreground leading-relaxed">
                                                        {point}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* How We Help */}
                                <div className="lg:col-span-1">
                                    <div className="p-6 rounded-2xl bg-card border border-primary/20 h-full">
                                        <div className="flex items-center gap-2 mb-5">
                                            <CheckCircle className="w-4 h-4 text-primary" />
                                            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                                                How Trustgrid.in Helps
                                            </p>
                                        </div>
                                        <ul className="space-y-4">
                                            {profile.howWeHelp.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm text-foreground/80 leading-relaxed">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Desired Outcome */}
                                <div className="lg:col-span-1">
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 h-full flex flex-col justify-between">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                                                Desired Outcome
                                            </p>
                                            <p className="text-foreground leading-relaxed">
                                                {profile.desiredOutcome}
                                            </p>
                                        </div>
                                        <a
                                            href="#contact"
                                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:brightness-110 transition-all"
                                        >
                                            Discuss This With Us <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Closing CTA */}
                    <motion.div
                        className="mt-20 p-10 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xl md:text-2xl font-semibold mb-3">
                            Don't see your organisation here?
                        </p>
                        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                            If you are working on any dimension of climate action — at any scale — there is likely
                            a way we can help. Get in touch and tell us about your challenge.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all shadow-lg shadow-primary/20"
                        >
                            Start a Conversation <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ICPPage;
