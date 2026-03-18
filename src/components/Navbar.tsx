import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, ChevronDown, ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

/* ─── Offerings sub-items ─────────────────────────────────── */
const OFFERINGS_ITEMS = [
  { title: "Electric Vehicle", href: "/offerings#ev-section", description: "EV business models, advisory services, and key commercial structures." },
  { title: "Technical & Engineering Advisory", href: "/offerings#technical-engineering", description: "Feasibility, design, construction, grid integration & operational readiness." },
  { title: "Financial Advisory & Structuring", href: "/offerings#financial-advisory", description: "Financial modeling, capital stack, tax optimization & green finance." },
  { title: "Transaction & Capital Markets", href: "/offerings#transaction-capital", description: "M&A, capital raising, tax equity & secondary market transactions." },
  { title: "Commercial & Market Strategy", href: "/offerings#commercial-market", description: "Offtake strategy, market entry, revenue optimization & portfolio management." },
  { title: "Specialized Green Energy Advisory", href: "/offerings#green-energy", description: "Renewables, energy storage, hydrogen, EV charging & grid modernization." },
  { title: "Hydrogen Fuel Advisory & Services", href: "/offerings/hydrogen-services", description: "Strategic and technical advisory across the green hydrogen value chain." },
  { title: "Battery Technology & Fuel Cell Advisory", href: "/offerings#battery-advisory", description: "Advisory for advanced battery chemistries and fuel cell systems." },
  { title: "Regulatory, ESG & Sustainability", href: "/offerings#regulatory-sustainability", description: "Policy, ESG integration, green certification & climate risk management." },
  { title: "Project Lifecycle Support", href: "/offerings#project-lifecycle", description: "Advisory from concept and development through to end-of-life & repowering." },
  { title: "Innovative Business Models", href: "/offerings#innovative-business-models", description: "EaaS, VPPs, V2G, P2P trading, PPAs & carbon-as-a-service models." },
  { 
    title: "VCF for Climate Infrastructure", 
    href: "/offerings#vcf-section", 
    description: "Value capture financing for EVs, waste-to-energy, water, solar, and wind.",
    subItems: [
      { title: "VCF for Electric Vehicles", href: "/offerings/vcf-ev", description: "Financing models for EV charging infrastructure and mobility ecosystems." },
      { title: "VCF for Waste to Energy", href: "/offerings/vcf-waste-to-energy", description: "Capture value from waste processing and circular economy infrastructure." },
      { title: "VCF for Water Purification", href: "/offerings/vcf-water-purification", description: "Innovative financing for urban water treatment and purification plants." },
      { title: "VCF for Agri Solar", href: "/offerings/vcf-agri-solar", description: "Dual-use land systems combining solar generation with agricultural production." },
      { title: "VCF for Wind Mills", href: "/offerings/vcf-wind-energy", description: "Revenue capture from wind energy hubs and regional transmission." },
      { title: "Integrated VCF for Climate Projects", href: "/offerings/vcf-climate-financing", description: "Holistic frameworks combining multiple climate revenue streams." },
    ]
  },
  { title: "Cross-Cutting Capabilities", href: "/offerings#cross-cutting-capabilities", description: "Digital analytics, blockchain, geospatial analysis & stakeholder engagement." },
];

/* ─── Services sub-items ─────────────────────────────────── */
const SERVICES_ITEMS = [
  { title: "Strategic Advisory", href: "/#services", description: "Market entry, M&A advisory, partnership structuring, ecosystem development." },
  { title: "Technical Engineering", href: "/#services", description: "Powertrain design, battery technology, EV charging systems, grid integration." },
  { title: "Financial & Economic Modeling", href: "/#services", description: "TCO analysis, incentive optimisation, investment case development, risk management." },
  { title: "Regulatory & Policy", href: "/#services", description: "Compliance strategy, subsidy navigation, carbon credit optimisation." },
  { title: "Supply Chain", href: "/#services", description: "Localisation strategy, supplier diversification, supply chain resilience planning." },
  { title: "Digital & Data", href: "/#services", description: "Battery analytics, predictive maintenance, fleet platforms, AI-driven optimisation." },
  { title: "Sustainability & ESG", href: "/#services", description: "Circular economy design, carbon footprint reduction, ESG reporting and disclosure." },
];

/* ─── Other dropdown menus ────────────────────────────────── */
const OTHER_MENUS = [
  {
    title: "Capabilities",
    items: [
      { title: "Science-Based Targets (SBTi)", href: "/#capabilities", description: "Guide organisations through the SBTi target design and submission process." },
      { title: "Policy & Regulatory Navigation", href: "/#capabilities", description: "Navigate CSRD, SEC rules, and EU taxonomy." },
      { title: "Life Cycle Assessment (LCA)", href: "/#capabilities", description: "Quantify the full environmental impact of products and services." },
      { title: "Stakeholder Engagement", href: "/#capabilities", description: "Deliver impactful ESG briefings and engagement programs." },
      { title: "Clean Technology & Innovation", href: "/#capabilities", description: "Identify and deploy emerging clean technologies at scale." },
    ],
  },
  {
    title: "Solutions",
    items: [
      { title: "ClimateOS™", href: "/#solutions", description: "Integrated management platform for climate programme governance." },
      { title: "Carbon Intelligence Suite", href: "/#solutions", description: "AI-powered analytics for emissions and strategic insights." },
      { title: "Sustainability Reporting", href: "/#solutions", description: "Multi-framework reporting accelerator (GRI, TCFD, CSRD)." },
      { title: "Supply Chain Decarbonisation", href: "/#solutions", description: "Structured programme for Scope 3 supplier engagement." },
      { title: "Green Finance Readiness", href: "/#solutions", description: "Frameworks to unlock sustainability-linked finance." },
      { title: "Electric Vehicles", href: "/solutions/electric-vehicles", description: "Fleet electrification, charging infra, and V2G solutions." },
      { title: "Advanced Battery Solutions", href: "/solutions/fuel-cells", description: "Next-gen battery technologies and fuel cell systems." },
      { title: "Hydrogen Energy Solutions", href: "/solutions/hydrogen-fuels", description: "Green hydrogen production and industrial applications." },
    ],
  },
  {
    title: "Industries",
    items: [
      { title: "Energy & Utilities", href: "/#industries", description: "Accelerate the transition with portfolio decarbonisation." },
      { title: "Manufacturing", href: "/#industries", description: "Tackle hard-to-abate industrial emissions head-on." },
      { title: "Financial Services", href: "/#industries", description: "Align lending and investment with Paris Agreement goals." },
      { title: "Real Estate & Construction", href: "/#industries", description: "Drive net-zero buildings through whole-lifecycle carbon assessment." },
      { title: "Technology", href: "/#industries", description: "Achieve verified net-zero through credible scope-3 measurement." },
      { title: "Transport & Logistics", href: "/#industries", description: "Decarbonise fleets and build resilient supply chains." },
    ],
  },
  {
    title: "About",
    items: [
      { title: "Our Story", href: "/#about", description: "Bridging the gap between climate ambition and action." },
      { title: "Mission & Values", href: "/#about", description: "Turning ambition into verified, lasting impact." },
      { title: "Partners", href: "/#partners", description: "Global alliances for scale and specialist climate focus." },
      { title: "Contact Us", href: "/#contact", description: "Tell us about your climate goals — we'll respond within 24 hours." },
    ],
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (y / docH) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileLinks = [
    { label: "Offerings", href: "/offerings" },
    { label: "Services", href: "/#services" },
    { label: "Capabilities", href: "/#capabilities" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Industries", href: "/#industries" },
    { label: "Partners", href: "/#partners" },
    { label: "About Us", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 z-[60] h-[2px] bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 lg:px-14 transition-all duration-500",
          scrolled
            ? "py-3 bg-background/90 backdrop-blur-2xl border-b border-border/60 shadow-[0_4px_30px_hsl(145_72%_50%/0.05)]"
            : "py-5 bg-transparent"
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Back to Home Button (Visible only on subpages) */}
        {!isHomePage && (
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 group px-3 py-1.5 rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all text-xs font-semibold text-muted-foreground hover:text-primary mr-4"
          >
            <Home className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Back to Home</span>
          </motion.button>
        )}

        {/* Logo */}
        <a href="/" className="relative flex items-center gap-2 shrink-0 group">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="font-display text-lg font-bold text-foreground tracking-tight uppercase">
            Trustgrid<span className="text-primary">.in</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-2 items-center">

              {/* ── Offerings — 10-item dropdown ── */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10 focus:bg-transparent text-[15px] font-medium text-muted-foreground/90 hover:text-foreground data-[state=open]:text-primary transition-all duration-300 rounded-lg px-4 py-2">
                  Offerings
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[560px] gap-1.5 p-4 md:w-[720px] md:grid-cols-2 bg-card/95 backdrop-blur-xl border border-border/60 rounded-2xl shadow-2xl max-h-[75vh] overflow-y-auto">
                    {OFFERINGS_ITEMS.map((item) => (
                      <li key={item.title} className={cn("relative", item.subItems ? "md:col-span-2 group/vcf" : "")}>
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            className={cn(
                              "group flex flex-col select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all",
                              "hover:bg-primary/8 focus:bg-primary/8 border border-transparent hover:border-primary/20"
                            )}
                          >
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary flex-shrink-0 transition-colors" />
                              <span className="text-sm font-semibold leading-none group-hover:text-primary transition-colors">
                                {item.title}
                              </span>
                              {item.subItems && (
                                <ChevronDown className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-all group-hover:rotate-180" />
                              )}
                            </div>
                            <p className="pl-3.5 line-clamp-2 text-xs leading-snug text-muted-foreground group-hover:text-foreground/70 transition-colors">
                              {item.description}
                            </p>
                          </a>
                        </NavigationMenuLink>

                        {/* Nested Sub-items - Dropdown effect */}
                        {item.subItems && (
                          <div className="hidden group-hover/vcf:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pl-4 py-3 border-l-2 border-primary/10 ml-6 mt-1 animate-in fade-in slide-in-from-top-1 duration-200">
                            {item.subItems.map((sub) => (
                              <NavigationMenuLink key={sub.title} asChild>
                                <a
                                  href={sub.href}
                                  className="group flex flex-col select-none space-y-1 rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-primary/5 border border-transparent hover:border-primary/10"
                                >
                                  <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                    <span className="text-[13px] font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                      {sub.title}
                                    </span>
                                  </div>
                                  <p className="pl-3 text-[11px] leading-tight text-muted-foreground/60 group-hover:text-muted-foreground line-clamp-1">
                                    {sub.description}
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* ── Services dropdown ── */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10 focus:bg-transparent text-[15px] font-medium text-muted-foreground/90 hover:text-foreground data-[state=open]:text-primary transition-all duration-300 rounded-lg px-4 py-2">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[420px] gap-1.5 p-4 md:w-[560px] md:grid-cols-2 bg-card/95 backdrop-blur-xl border border-border/60 rounded-2xl shadow-2xl">
                    {SERVICES_ITEMS.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            className={cn(
                              "group flex flex-col select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all",
                              "hover:bg-primary/8 focus:bg-primary/8 border border-transparent hover:border-primary/20"
                            )}
                          >
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary flex-shrink-0 transition-colors" />
                              <span className="text-sm font-semibold leading-none group-hover:text-primary transition-colors">
                                {item.title}
                              </span>
                            </div>
                            <p className="pl-3.5 line-clamp-2 text-xs leading-snug text-muted-foreground group-hover:text-foreground/70 transition-colors">
                              {item.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* ── Other dropdown menus ── */}
              {OTHER_MENUS.map((menu) => (
                <NavigationMenuItem key={menu.title}>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10 focus:bg-transparent text-[15px] font-medium text-muted-foreground/90 hover:text-foreground data-[state=open]:text-primary transition-all duration-300 rounded-lg px-4 py-2">
                    {menu.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[440px] gap-2 p-4 md:w-[580px] md:grid-cols-2 bg-card/95 backdrop-blur-xl border border-border/60 rounded-2xl shadow-2xl">
                      {menu.items.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className={cn(
                                "group flex flex-col select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all",
                                "hover:bg-primary/8 focus:bg-primary/8 border border-transparent hover:border-primary/20"
                              )}
                            >
                              <div className="text-sm font-semibold leading-none group-hover:text-primary transition-colors">
                                {item.title}
                              </div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground group-hover:text-foreground/70 transition-colors">
                                {item.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      {menu.title === "Solutions" && (
                        <li className="md:col-span-2 mt-2 pt-2 border-t border-border/40">
                          <NavigationMenuLink asChild>
                            <a 
                              href="/solutions" 
                              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 text-primary font-bold text-sm transition-all group"
                            >
                              Explore All Technology Solutions 
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </NavigationMenuLink>
                        </li>
                      )}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))
              }

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold bg-primary text-primary-foreground hover:brightness-110 active:brightness-95 transition-all px-5 py-2.5 rounded-full shadow-lg shadow-primary/20"
          >
            Contact Us <span className="text-base">→</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5 text-foreground" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-5 h-5 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-40 w-72 lg:hidden bg-card/95 backdrop-blur-2xl border-l border-border/60 flex flex-col pt-24 pb-8 px-6 gap-2 shadow-2xl overflow-y-auto"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Navigation</p>
              {mobileLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/8 border border-transparent hover:border-primary/20 transition-all"
                  initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                  <span className="text-primary">→</span>
                </motion.a>
              ))}
              {/* Offerings sub-links on mobile */}
              <div className="mt-3 pt-3 border-t border-border/40">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-4 mb-2">Offerings</p>
                {OFFERINGS_ITEMS.map((item, i) => (
                  <div key={item.title}>
                    <motion.a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-lg text-xs transition-all",
                        "text-muted-foreground hover:text-primary hover:bg-primary/8"
                      )}
                      initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.35 + i * 0.04 }}
                    >
                      <span className="w-1 h-1 rounded-full flex-shrink-0 bg-primary/40" />
                      {item.title}
                    </motion.a>
                    {item.subItems && (
                      <div className="pl-8 my-1 flex flex-col gap-0.5">
                        {item.subItems.map((sub, j) => (
                          <motion.a
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 py-1.5 text-[10px] text-muted-foreground/80 hover:text-primary transition-all active:translate-x-1"
                            initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 + j * 0.02 }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full border border-primary/30 shrink-0" />
                            {sub.title}
                          </motion.a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Services sub-links on mobile */}
              <div className="mt-2 pt-2 border-t border-border/40">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-4 mb-2">Services</p>
                {SERVICES_ITEMS.map((item, i) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs text-muted-foreground hover:text-primary hover:bg-primary/8 transition-all"
                    initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.75 + i * 0.04 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                    {item.title}
                  </motion.a>
                ))}
              </div>
              <div className="mt-auto pt-6 border-t border-border/50">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/20"
                >
                  Contact Us →
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
