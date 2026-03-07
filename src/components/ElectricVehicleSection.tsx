import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Zap, BarChart3, TrendingUp, ShoppingCart, Leaf,
  Shield, Layers, Lightbulb, Cpu, ChevronRight, ArrowUpRight,
} from "lucide-react";

/* ─── Scroll-spy nav ────────────────────────────────────── */
const NAV_ITEMS = [
  { id: "ev-section", label: "Electric Vehicle", num: "00" },
  { id: "technical-engineering", label: "Technical & Engineering Advisory", num: "01" },
  { id: "financial-advisory", label: "Financial Advisory & Structuring", num: "02" },
  { id: "transaction-capital", label: "Transaction & Capital Markets", num: "03" },
  { id: "commercial-market", label: "Commercial & Market Strategy", num: "04" },
  { id: "green-energy", label: "Specialized Green Energy Advisory", num: "05" },
  { id: "regulatory-sustainability", label: "Regulatory, ESG & Sustainability", num: "06" },
  { id: "project-lifecycle", label: "Project Lifecycle Support", num: "07" },
  { id: "innovative-business-models", label: "Innovative Business Models", num: "08" },
  { id: "cross-cutting-capabilities", label: "Cross-Cutting Capabilities", num: "✦" },
];

/* ─── Reusable table ─────────────────────────────────────── */
type Row = Record<string, string>;

const SectionTable = ({
  id, num, title, description, icon: Icon, columns, rows,
}: {
  id: string; num: string; title: string; description?: string;
  icon?: React.ElementType; columns: string[]; rows: Row[];
}) => (
  <motion.div
    id={id}
    className="scroll-mt-28 mb-20"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
  >
    {/* Heading */}
    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-7">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
        {Icon ? <Icon className="w-5 h-5 text-primary" /> : (
          <span className="text-[11px] font-bold font-mono text-primary">{num}</span>
        )}
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-3 mb-1.5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 font-mono">
            Group {num}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">{title}</h3>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">{description}</p>
        )}
      </div>
    </div>

    {/* Table */}
    <div className="overflow-x-auto rounded-2xl border border-border/50 shadow-[0_4px_32px_hsl(220_18%_4%/0.6)]">
      <table className="w-full min-w-[620px]">
        <thead>
          <tr className="bg-primary/10 border-b border-primary/20">
            {columns.map((col, i) => (
              <th key={i} className="px-6 py-3.5 text-left text-xs font-bold uppercase tracking-widest text-primary whitespace-nowrap">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-card/80">
          {rows.map((row, ri) => (
            <tr key={ri} className={`border-b border-border/40 transition-colors hover:bg-primary/5 ${ri === rows.length - 1 ? "border-b-0" : ""}`}>
              {columns.map((col, ci) => (
                <td key={ci} className={`px-6 py-4 text-sm align-top leading-relaxed ${ci === 0 ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

/* ─── Data ───────────────────────────────────────────────── */
const evBusinessModels = [
  { "Business Model": "Energy-as-a-Service (EaaS)", "Description": "Subscription-based energy services without equipment ownership", "Application": "Corporate charging, fleet depots, workplace charging" },
  { "Business Model": "Virtual Power Plants (VPP)", "Description": "Aggregated decentralized energy resources (EVs + storage)", "Application": "Grid balancing, demand response, revenue stacking" },
  { "Business Model": "Vehicle-to-Grid (V2G)", "Description": "Bidirectional energy flow from EVs to grid", "Application": "Fleet vehicles as mobile storage assets" },
  { "Business Model": "Battery-as-a-Service (BaaS)", "Description": "Separated battery ownership from vehicle purchase", "Application": "Swappable batteries, reduced upfront EV costs" },
  { "Business Model": "Charging-as-a-Service (CaaS)", "Description": "Third-party ownership and operation of charging infrastructure", "Application": "Retail locations, multi-family dwellings" },
  { "Business Model": "Green Certificates / RECs", "Description": "Tradable environmental attributes for carbon offsetting", "Application": "Corporate sustainability goals" },
  { "Business Model": "Microgrids + P2P Trading", "Description": "Localized energy generation and direct trading", "Application": "Campus settings, residential communities" },
  { "Business Model": "Corporate PPAs for EV Fleets", "Description": "Long-term renewable energy contracts for charging", "Application": "Large fleet operators, logistics companies" },
];

const advisoryServices = [
  { category: "Strategic Advisory", detail: "Market entry, M&A, partnership structuring, ecosystem development" },
  { category: "Technical Engineering", detail: "Powertrain design, battery technology, charging systems, grid integration" },
  { category: "Financial & Economic Modeling", detail: "TCO analysis, incentive optimization, investment cases, risk management" },
  { category: "Regulatory & Policy", detail: "Compliance strategy, subsidy navigation, carbon credit optimization" },
  { category: "Supply Chain", detail: "Localization strategy, supplier diversification, resilience planning" },
  { category: "Digital & Data", detail: "Battery analytics, predictive maintenance, fleet management platforms, AI optimization" },
  { category: "Sustainability & ESG", detail: "Circular economy design, carbon footprint reduction, ESG reporting" },
];

const technicalData: Row[] = [
  { "Capability Category": "Project Development Engineering", "Core Offerings": "Feasibility studies, site assessment, resource evaluation, technology selection", "Key Deliverables": "Bankable engineering reports, development timelines, risk registers" },
  { "Capability Category": "Design & Engineering Management", "Core Offerings": "Conceptual design, detailed engineering, EPC specification, technology integration", "Key Deliverables": "Engineering designs, technical specifications, EPC RFPs" },
  { "Capability Category": "Construction Advisory", "Core Offerings": "Construction monitoring, quality assurance, schedule oversight, cost control", "Key Deliverables": "Independent Engineer reports, construction progress reports, milestone verification" },
  { "Capability Category": "Grid Integration & Interconnection", "Core Offerings": "Interconnection studies, transmission planning, grid impact assessment, utility coordination", "Key Deliverables": "Interconnection agreements, grid integration plans, curtailment analysis" },
  { "Capability Category": "Environmental & Permitting", "Core Offerings": "Environmental impact assessment, permitting strategy, regulatory compliance, ESG due diligence", "Key Deliverables": "EIA reports, permit applications, compliance roadmaps" },
  { "Capability Category": "Operational Readiness", "Core Offerings": "Commissioning planning, O&M strategy, performance testing, asset handover", "Key Deliverables": "Commissioning protocols, O&M manuals, performance test procedures" },
];

const financialData: Row[] = [
  { "Capability Category": "Financial Modeling & Analysis", "Core Offerings": "Probabilistic modeling, scenario analysis, sensitivity testing, optimization algorithms", "Key Deliverables": "Financial models, business cases, investment memos" },
  { "Capability Category": "Capital Stack Structuring", "Core Offerings": "Debt/equity optimization, hybrid instruments, subordinated financing, mezzanine structures", "Key Deliverables": "Capital structure recommendations, term sheets, waterfall models" },
  { "Capability Category": "Tax Optimization & Structuring", "Core Offerings": "Tax credit monetization (ITC, PTC, 45Q), depreciation strategies, partnership structures", "Key Deliverables": "Tax equity structures, partnership flip models, tax credit transfer agreements" },
  { "Capability Category": "Project Finance Advisory", "Core Offerings": "Non-recourse financing, limited recourse structures, construction-to-permanent loans, refinancing", "Key Deliverables": "Financing packages, lender presentations, credit memoranda" },
  { "Capability Category": "Risk Allocation & Mitigation", "Core Offerings": "EPC wrap structuring, political risk allocation, currency hedging, performance guarantees", "Key Deliverables": "Risk matrices, mitigation strategies, insurance programs" },
  { "Capability Category": "Green Finance Instruments", "Core Offerings": "Green bonds, sustainability-linked loans, transition finance, blended finance structures", "Key Deliverables": "Green bond frameworks, KPI-linked pricing models, DFI engagement strategies" },
];

const transactionData: Row[] = [
  { "Capability Category": "M&A Advisory", "Core Offerings": "Buy-side/sell-side execution, due diligence, valuation, negotiation support", "Key Deliverables": "Teaser documents, information memoranda, valuation models, SPA negotiation" },
  { "Capability Category": "Capital Raising", "Core Offerings": "Equity placement, debt syndication, private placements, public offerings", "Key Deliverables": "Investor presentations, roadshow materials, subscription agreements" },
  { "Capability Category": "Tax Equity Advisory", "Core Offerings": "Investor identification, structure optimization, partnership negotiation, portfolio aggregation", "Key Deliverables": "Tax equity term sheets, partnership agreements, portfolio strategies" },
  { "Capability Category": "Secondary Market Transactions", "Core Offerings": "Asset refinancing, portfolio sales, partial sell-downs, recapitalization", "Key Deliverables": "Asset valuations, market sounding, transaction execution" },
  { "Capability Category": "Development Capital", "Core Offerings": "Early-stage equity, venture capital, growth capital, project development funds", "Key Deliverables": "Pitch decks, development plans, investor matching" },
];

const commercialData: Row[] = [
  { "Capability Category": "Offtake Strategy", "Core Offerings": "PPA structuring, CfD negotiation, merchant optimization, corporate PPA advisory", "Key Deliverables": "PPA term sheets, offtake agreements, pricing strategies" },
  { "Capability Category": "Market Entry & Expansion", "Core Offerings": "Geographic expansion, regulatory navigation, competitive positioning, partnership development", "Key Deliverables": "Market entry strategies, regulatory roadmaps, JV structures" },
  { "Capability Category": "Revenue Optimization", "Core Offerings": "Merchant revenue modeling, ancillary services, capacity market participation, stacking strategies", "Key Deliverables": "Revenue models, market forecasts, trading strategies" },
  { "Capability Category": "Supply Chain & Procurement", "Core Offerings": "Equipment procurement, EPC selection, long-term service agreements, supply security", "Key Deliverables": "Procurement strategies, EPC evaluation matrices, LTA negotiations" },
  { "Capability Category": "Portfolio Management", "Core Offerings": "Asset optimization, performance benchmarking, strategic asset allocation, exit planning", "Key Deliverables": "Portfolio strategies, asset management plans, divestment roadmaps" },
];

const greenEnergyData: Row[] = [
  { "Capability Category": "Renewable Energy Projects", "Core Offerings": "Solar, wind, hydro, geothermal development, resource assessment, technology roadmaps", "Key Deliverables": "Resource reports, technology assessments, LCOE analysis" },
  { "Capability Category": "Energy Storage", "Core Offerings": "Battery storage optimization, hybrid systems, grid services, merchant modeling", "Key Deliverables": "Storage sizing studies, revenue stack models, integration plans" },
  { "Capability Category": "Green Hydrogen & e-Fuels", "Core Offerings": "Electrolyzer projects, hydrogen offtake, ammonia/methanol integration, industrial decarbonization", "Key Deliverables": "Hydrogen business models, offtake agreements, feasibility studies" },
  { "Capability Category": "Electric Mobility & Charging", "Core Offerings": "EV charging infrastructure, fleet electrification, V2G integration, charging network design", "Key Deliverables": "Charging strategies, fleet transition plans, grid impact studies" },
  { "Capability Category": "Grid Modernization", "Core Offerings": "Smart grid, microgrids, distributed energy resources, VPP aggregation, resilience planning", "Key Deliverables": "Grid modernization roadmaps, DER integration plans, resilience assessments" },
  { "Capability Category": "Circular Economy", "Core Offerings": "Battery recycling, material recovery, second-life applications, end-of-life value capture", "Key Deliverables": "Circular business models, recycling strategies, material flow analysis" },
];

const regulatoryData: Row[] = [
  { "Capability Category": "Policy & Regulatory Advisory", "Core Offerings": "Subsidy optimization, incentive navigation, regulatory compliance, legislative tracking", "Key Deliverables": "Regulatory impact assessments, compliance strategies, incentive applications" },
  { "Capability Category": "ESG Integration", "Core Offerings": "ESG strategy, sustainability reporting, impact measurement, stakeholder engagement", "Key Deliverables": "ESG frameworks, sustainability reports, impact metrics" },
  { "Capability Category": "Green Certification", "Core Offerings": "Green building certification, carbon accounting, renewable energy certificates, carbon credits", "Key Deliverables": "Certification documentation, carbon footprints, credit verification" },
  { "Capability Category": "Climate Risk & Resilience", "Core Offerings": "Physical risk assessment, transition risk analysis, TCFD reporting, adaptation strategies", "Key Deliverables": "Climate risk reports, resilience plans, disclosure frameworks" },
  { "Capability Category": "Sustainability-Linked Finance", "Core Offerings": "KPI development, performance targets, sustainability-linked pricing, green taxonomy alignment", "Key Deliverables": "SLL frameworks, KPI dashboards, taxonomy assessments" },
];

const lifecycleData: Row[] = [
  { "Phase": "Concept & Early Development", "Advisory Services": "Feasibility, site identification, resource assessment, preliminary economic analysis", "Key Activities": "Go/no-go decisions, development budgets, early partnerships" },
  { "Phase": "Pre-Construction Development", "Advisory Services": "Permitting, financing, EPC procurement, offtake negotiations, investment decision support", "Key Activities": "Financial close readiness, NTP issuance, construction contracts" },
  { "Phase": "Construction & Commissioning", "Advisory Services": "Construction monitoring, cost/schedule control, quality assurance, commissioning oversight", "Key Activities": "Mechanical completion, commercial operation, performance testing" },
  { "Phase": "Operations & Asset Management", "Advisory Services": "Performance optimization, O&M strategy, refinancing, asset life extension", "Key Activities": "Operational excellence, debt service, asset valuation" },
  { "Phase": "End-of-Life & Repowering", "Advisory Services": "Decommissioning planning, repowering economics, material recovery, site remediation", "Key Activities": "Repowering strategies, recycling contracts, site restoration" },
];

const innovativeData: Row[] = [
  { "Model Category": "Energy-as-a-Service (EaaS)", "Description": "Subscription-based energy solutions without capital ownership", "Advisory Focus": "Contract structuring, risk allocation, customer acquisition" },
  { "Model Category": "Infrastructure-as-a-Service", "Description": "Third-party ownership and operation of critical infrastructure", "Advisory Focus": "Concession models, availability payments, performance standards" },
  { "Model Category": "Corporate PPAs", "Description": "Long-term renewable energy contracts for corporate offtakers", "Advisory Focus": "PPA structuring, credit assessment, portfolio aggregation" },
  { "Model Category": "Virtual Power Plants (VPP)", "Description": "Aggregation of distributed energy resources for grid services", "Advisory Focus": "Aggregation platforms, dispatch optimization, revenue pooling" },
  { "Model Category": "Vehicle-to-Grid (V2G)", "Description": "Bidirectional energy flow from electric vehicles to grid", "Advisory Focus": "Technology integration, grid codes, revenue models" },
  { "Model Category": "Peer-to-Peer Energy Trading", "Description": "Direct energy transactions between prosumers", "Advisory Focus": "Platform development, regulatory frameworks, settlement systems" },
  { "Model Category": "Carbon-as-a-Service", "Description": "Subscription-based carbon reduction solutions", "Advisory Focus": "MRV measurement, reporting, and verification, credit issuance" },
];

const crossCuttingData: Row[] = [
  { "Capability": "Digital & Data Analytics", "Description": "AI/ML for predictive maintenance, performance optimization, market forecasting, risk modeling", "Application": "Digital twins, predictive analytics, algorithmic trading" },
  { "Capability": "Blockchain & Smart Contracts", "Description": "Automated settlements, transparent tracking, tokenization of assets", "Application": "REC tracking, carbon credit trading, peer-to-peer transactions" },
  { "Capability": "Geospatial Analysis", "Description": "Site selection, resource mapping, grid proximity analysis, environmental constraints", "Application": "GIS-based development tools, suitability scoring" },
  { "Capability": "Stakeholder Engagement", "Description": "Community consultation, indigenous rights, social license to operate, grievance mechanisms", "Application": "Social impact assessments, engagement plans, benefit-sharing agreements" },
];

/* ─── Main component ──────────────────────────────────────── */
const ElectricVehicleSection = () => {
  const [activeId, setActiveId] = useState("ev-section");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) setActiveId(entry.target.id); });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    NAV_ITEMS.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="offerings"
      ref={sectionRef}
      className="section-padding bg-secondary/30 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-grid-fine opacity-[0.4] pointer-events-none" />
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.div className="section-label mb-6 mx-auto" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Offerings
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
          >
            Electric Vehicle & Mobility —{" "}
            <span className="text-gradient-primary">Transform the Future of Transportation</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            End-to-end advisory across the full electric mobility and green energy ecosystem — from EV charging
            infrastructure and battery solutions to innovative business models and grid integration.
          </motion.p>
        </div>


        <motion.div
          className="mb-12 -mx-6 px-6 overflow-x-auto scrollbar-hide"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
        >
          <div className="flex gap-2 pb-1 min-w-max">
            {NAV_ITEMS.map(({ id, label, num }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${activeId === id
                  ? "bg-primary/15 text-primary border-primary/40 shadow-[0_0_12px_hsl(145_72%_50%/0.2)]"
                  : "bg-card/50 text-muted-foreground border-border/50 hover:text-foreground hover:border-border"
                  }`}
              >
                {num !== "✦" && <span className="text-[9px] font-mono opacity-60">{num}</span>}
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Content ── */}
        <div className="w-full">

          {/* Stats strip */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 p-6 rounded-2xl bg-card border border-border/50"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            {[
              { label: "Capability Groups", value: "10" },
              { label: "Business Models", value: "8+" },
              { label: "Service Categories", value: "50+" },
              { label: "Sectors Covered", value: "All" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-display font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* ═══ 00 — Electric Vehicle ═══ */}
          <motion.div
            id="ev-section"
            className="scroll-mt-28 mb-20"
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4 mb-7">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 font-mono block mb-1.5">Group 00</span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Electric Vehicle</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  Eight proven commercial structures powering the electric vehicle and clean energy ecosystem.
                </p>
              </div>
            </div>

            {/* EV Business Models table */}
            <div className="overflow-x-auto rounded-2xl border border-border/50 shadow-[0_4px_32px_hsl(220_18%_4%/0.6)] mb-10">
              <table className="w-full min-w-[620px]">
                <thead>
                  <tr className="bg-primary/10 border-b border-primary/20">
                    {["Business Model", "Description", "Application"].map((col, i) => (
                      <th key={i} className="px-6 py-3.5 text-left text-xs font-bold uppercase tracking-widest text-primary whitespace-nowrap">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-card/80">
                  {evBusinessModels.map((row, idx) => (
                    <tr key={idx} className={`border-b border-border/40 transition-colors hover:bg-primary/5 ${idx === evBusinessModels.length - 1 ? "border-b-0" : ""}`}>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground align-top leading-relaxed">{row["Business Model"]}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground align-top leading-relaxed">{row["Description"]}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground align-top leading-relaxed">{row["Application"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Key Advisory Services cards */}
            <h4 className="text-lg font-bold text-foreground mb-4">Key Advisory Service Categories</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advisoryServices.map((s, i) => (
                <motion.div
                  key={i}
                  className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 card-hover-lift"
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{s.category}</h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Capability Groups divider ── */}
          <div className="flex items-center gap-4 mb-14">
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
              Capability Groups
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-primary/30 to-transparent" />
          </div>

          {/* ═══ 01 — Technical & Engineering ═══ */}
          <SectionTable id="technical-engineering" num="01" title="Technical & Engineering Advisory"
            description="End-to-end engineering support from feasibility through to operational readiness — bridging technical design with commercial deployment."
            icon={Zap}
            columns={["Capability Category", "Core Offerings", "Key Deliverables"]}
            rows={technicalData}
          />

          {/* ═══ 02 — Financial Advisory ═══ */}
          <SectionTable id="financial-advisory" num="02" title="Financial Advisory & Structuring"
            description="We build the financial models and structures that make climate infrastructure bankable, defensible, and attractive to institutional capital."
            icon={BarChart3}
            columns={["Capability Category", "Core Offerings", "Key Deliverables"]}
            rows={financialData}
          />

          {/* ═══ 03 — Transaction & Capital ═══ */}
          <SectionTable id="transaction-capital" num="03" title="Transaction & Capital Markets"
            description="Facilitating investment flows into clean energy through M&A, capital raising, tax equity, and secondary market expertise."
            icon={TrendingUp}
            columns={["Capability Category", "Core Offerings", "Key Deliverables"]}
            rows={transactionData}
          />

          {/* ═══ 04 — Commercial & Market ═══ */}
          <SectionTable id="commercial-market" num="04" title="Commercial & Market Strategy"
            description="Positioning your assets and services for maximum commercial yield — from offtake to portfolio optimisation."
            icon={ShoppingCart}
            columns={["Capability Category", "Core Offerings", "Key Deliverables"]}
            rows={commercialData}
          />

          {/* ═══ 05 — Specialized Green Energy ═══ */}
          <SectionTable id="green-energy" num="05" title="Specialized Green Energy Advisory"
            description="Deep technical advisory across the full green energy technology stack — from solar and storage to hydrogen and grid modernisation."
            icon={Leaf}
            columns={["Capability Category", "Core Offerings", "Key Deliverables"]}
            rows={greenEnergyData}
          />

          {/* ═══ 06 — Regulatory, ESG & Sustainability ═══ */}
          <SectionTable id="regulatory-sustainability" num="06" title="Regulatory, ESG & Sustainability"
            description="Navigating disclosure requirements, certification standards, and climate risk frameworks with precision."
            icon={Shield}
            columns={["Capability Category", "Core Offerings", "Key Deliverables"]}
            rows={regulatoryData}
          />

          {/* ═══ 07 — Project Lifecycle ═══ */}
          <SectionTable id="project-lifecycle" num="07" title="Project Lifecycle Support"
            description="Continuous advisory presence from first concept through to decommissioning — ensuring value creation at every stage."
            icon={Layers}
            columns={["Phase", "Advisory Services", "Key Activities"]}
            rows={lifecycleData}
          />

          {/* ═══ 08 — Innovative Business Models ═══ */}
          <SectionTable id="innovative-business-models" num="08" title="Innovative Business Models"
            description="Designing and structuring next-generation revenue models that monetise clean energy assets in novel ways."
            icon={Lightbulb}
            columns={["Model Category", "Description", "Advisory Focus"]}
            rows={innovativeData}
          />

          {/* ── Cross-Cutting divider ── */}
          <div className="flex items-center gap-4 mb-14">
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
              Cross-Cutting
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-primary/30 to-transparent" />
          </div>

          {/* ═══ Cross-Cutting Capabilities ═══ */}
          <SectionTable id="cross-cutting-capabilities" num="✦" title="Cross-Cutting Capabilities"
            description="Digital, analytical, and engagement capabilities embedded across every group — amplifying every engagement."
            icon={Cpu}
            columns={["Capability", "Description", "Application"]}
            rows={crossCuttingData}
          />

          {/* Bottom CTA */}
          <motion.div
            className="mt-4 p-8 rounded-2xl border border-primary/25 bg-primary/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div>
              <p className="font-bold text-lg mb-1">Ready to start your EV & Mobility journey?</p>
              <p className="text-sm text-muted-foreground max-w-md">Talk to our specialists — we'll match you with the right advisory combination for your goals.</p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/25"
            >
              Get Expert Advice <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ElectricVehicleSection;
