import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
  { title: "Electric Vehicle", href: "#ev-section", description: "EV business models, advisory services, and key commercial structures." },
  { title: "Technical & Engineering Advisory", href: "#technical-engineering", description: "Feasibility, design, construction, grid integration & operational readiness." },
  { title: "Financial Advisory & Structuring", href: "#financial-advisory", description: "Financial modeling, capital stack, tax optimization & green finance." },
  { title: "Transaction & Capital Markets", href: "#transaction-capital", description: "M&A, capital raising, tax equity & secondary market transactions." },
  { title: "Commercial & Market Strategy", href: "#commercial-market", description: "Offtake strategy, market entry, revenue optimization & portfolio management." },
  { title: "Specialized Green Energy Advisory", href: "#green-energy", description: "Renewables, energy storage, hydrogen, EV charging & grid modernization." },
  { title: "Regulatory, ESG & Sustainability", href: "#regulatory-sustainability", description: "Policy, ESG integration, green certification & climate risk management." },
  { title: "Project Lifecycle Support", href: "#project-lifecycle", description: "Advisory from concept and development through to end-of-life & repowering." },
  { title: "Innovative Business Models", href: "#innovative-business-models", description: "EaaS, VPPs, V2G, P2P trading, PPAs & carbon-as-a-service models." },
  { title: "Cross-Cutting Capabilities", href: "#cross-cutting-capabilities", description: "Digital analytics, blockchain, geospatial analysis & stakeholder engagement." },
];

/* ─── Services sub-items ─────────────────────────────────── */
const SERVICES_ITEMS = [
  { title: "Strategic Advisory", href: "#strategic-advisory", description: "Market entry, M&A advisory, partnership structuring, ecosystem development." },
  { title: "Technical Engineering", href: "#technical-engineering-service", description: "Powertrain design, battery technology, EV charging systems, grid integration." },
  { title: "Financial & Economic Modeling", href: "#financial-economic-modeling", description: "TCO analysis, incentive optimisation, investment case development, risk management." },
  { title: "Regulatory & Policy", href: "#regulatory-policy", description: "Compliance strategy, subsidy navigation, carbon credit optimisation." },
  { title: "Supply Chain", href: "#supply-chain-service", description: "Localisation strategy, supplier diversification, supply chain resilience planning." },
  { title: "Digital & Data", href: "#digital-data-service", description: "Battery analytics, predictive maintenance, fleet platforms, AI-driven optimisation." },
  { title: "Sustainability & ESG", href: "#sustainability-esg-service", description: "Circular economy design, carbon footprint reduction, ESG reporting and disclosure." },
];

/* ─── Other dropdown menus ────────────────────────────────── */
const OTHER_MENUS = [
  {
    title: "Capabilities",
    items: [
      { title: "Science-Based Targets (SBTi)", href: "#capabilities", description: "Guide organisations through the SBTi target design and submission process." },
      { title: "Policy & Regulatory Navigation", href: "#capabilities", description: "Navigate CSRD, SEC rules, and EU taxonomy." },
      { title: "Life Cycle Assessment (LCA)", href: "#capabilities", description: "Quantify the full environmental impact of products and services." },
      { title: "Stakeholder Engagement", href: "#capabilities", description: "Deliver impactful ESG briefings and engagement programs." },
      { title: "Clean Technology & Innovation", href: "#capabilities", description: "Identify and deploy emerging clean technologies at scale." },
    ],
  },
  {
    title: "Solutions",
    items: [
      { title: "ClimateOS™ Platform", href: "#solutions", description: "Integrated management for your entire climate programme." },
      { title: "Carbon Intelligence Suite", href: "#solutions", description: "AI-powered analytics for strategic emissions insight." },
      { title: "Reporting Accelerator", href: "#solutions", description: "Streamline mandatory and voluntary sustainability reporting." },
      { title: "Supply Chain Decarbonisation", href: "#solutions", description: "Activate your supplier network on climate action." },
      { title: "Green Finance Readiness", href: "#solutions", description: "Unlock sustainability-linked finance opportunities." },
    ],
  },
  {
    title: "Industries",
    items: [
      { title: "Energy & Utilities", href: "#industries", description: "Accelerate the transition with portfolio decarbonisation." },
      { title: "Manufacturing", href: "#industries", description: "Tackle hard-to-abate industrial emissions head-on." },
      { title: "Financial Services", href: "#industries", description: "Align lending and investment with Paris Agreement goals." },
      { title: "Real Estate & Construction", href: "#industries", description: "Drive net-zero buildings through whole-lifecycle carbon assessment." },
      { title: "Technology", href: "#industries", description: "Achieve verified net-zero through credible scope-3 measurement." },
      { title: "Transport & Logistics", href: "#industries", description: "Decarbonise fleets and build resilient supply chains." },
    ],
  },
  {
    title: "About",
    items: [
      { title: "Our Story", href: "#about", description: "Bridging the gap between climate ambition and action." },
      { title: "Mission & Values", href: "#about", description: "Turning ambition into verified, lasting impact." },
      { title: "Partners", href: "#partners", description: "Global alliances for scale and specialist climate focus." },
      { title: "Contact Us", href: "#contact", description: "Tell us about your climate goals — we'll respond within 24 hours." },
    ],
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    { label: "Offerings", href: "#offerings" },
    { label: "Services", href: "#services" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Solutions", href: "#solutions" },
    { label: "Industries", href: "#industries" },
    { label: "Partners", href: "#partners" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
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
        {/* Logo */}
        <a href="#" className="relative flex items-center gap-2 shrink-0 group">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="font-display text-lg font-bold text-foreground tracking-tight uppercase">
            Nexus Climate <span className="text-primary">Craft</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-1 flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-0 items-center">

              {/* ── Offerings — 10-item dropdown ── */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 data-[state=open]:bg-white/5 focus:bg-transparent text-muted-foreground hover:text-foreground data-[state=open]:text-primary transition-colors text-sm font-medium rounded-lg px-3 py-2">
                  Offerings
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[560px] gap-1.5 p-4 md:w-[720px] md:grid-cols-2 bg-card/95 backdrop-blur-xl border border-border/60 rounded-2xl shadow-2xl max-h-[75vh] overflow-y-auto">
                    {OFFERINGS_ITEMS.map((item) => (
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

              {/* ── Services dropdown ── */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 data-[state=open]:bg-white/5 focus:bg-transparent text-muted-foreground hover:text-foreground data-[state=open]:text-primary transition-colors text-sm font-medium rounded-lg px-3 py-2">
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
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 data-[state=open]:bg-white/5 focus:bg-transparent text-muted-foreground hover:text-foreground data-[state=open]:text-primary transition-colors text-[13px] font-medium rounded-lg px-2.5 py-1.5">
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
            className="xl:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all"
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
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm xl:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-40 w-72 xl:hidden bg-card/95 backdrop-blur-2xl border-l border-border/60 flex flex-col pt-24 pb-8 px-6 gap-2 shadow-2xl overflow-y-auto"
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
                  <motion.a
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs text-muted-foreground hover:text-primary hover:bg-primary/8 transition-all"
                    initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.35 + i * 0.04 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                    {item.title}
                  </motion.a>
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
