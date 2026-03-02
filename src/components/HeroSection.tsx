import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    headline: "Engineering the Net-Zero Economy",
    subheadline: "Where climate science meets infrastructure-grade execution",
    body: "We design, structure, and optimize renewable energy and climate assets for institutions, infrastructure funds, developers, AI data centers, and mobility platforms. From feasibility to financing to carbon monetization — we make climate infrastructure bankable.",
    cta: "Explore Our Capabilities",
    ctaHref: "#capabilities",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1920&q=80&auto=format",
  },
  {
    headline: "Climate Infrastructure Advisory",
    subheadline: "From concept to capital — making climate assets investment-ready",
    body: "We advise infrastructure funds, sovereign wealth vehicles, and development finance institutions on the full lifecycle of climate assets — from technical due diligence and project structuring to blended finance and green bond issuance.",
    cta: "See How We Advise",
    ctaHref: "#offerings",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80&auto=format",
  },
  {
    headline: "Energy Intelligence",
    subheadline: "Data-driven decisions for the energy transition",
    body: "Our Energy Intelligence platform transforms raw grid, market, and climate data into strategic decisions. We help energy developers, utilities, and investors optimize asset siting and forecast revenue under transition scenarios.",
    cta: "Explore Energy Intelligence",
    ctaHref: "#solutions",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80&auto=format",
  },
  {
    headline: "Digital Decarbonization",
    subheadline: "Sustainable infrastructure for the AI-powered world",
    body: "AI data centers consume enormous energy. We help hyperscalers, colocation operators, and digital infrastructure developers build genuinely low-carbon data centers — through renewable PPAs, on-site generation, and verified carbon removal strategies.",
    cta: "Learn About Digital Decarbonization",
    ctaHref: "#solutions",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&auto=format",
  },
  {
    headline: "Carbon Monetization",
    subheadline: "Turning decarbonization into a revenue stream",
    body: "We structure and originate carbon credits, renewable energy certificates, and nature-based credits that are credible, additional, and built for institutional buyers. From project development to registry issuance — we build the full carbon value chain.",
    cta: "See Carbon Monetization",
    ctaHref: "#offerings",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80&auto=format",
  },
  {
    headline: "Mobility & Transport Decarbonization",
    subheadline: "Electrifying the arteries of global commerce",
    body: "From EV charging infrastructure financing and fleet electrification strategy to hydrogen corridor development and maritime decarbonization — we help mobility platforms navigate the capital-intensive transition to zero-emission transport.",
    cta: "Explore Mobility Solutions",
    ctaHref: "#industries",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&q=80&auto=format",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const bgVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "8%" : "-8%", opacity: 0, scale: 1.05 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-8%" : "8%", opacity: 0, scale: 1.02 }),
  };

  return (
    <section className="relative w-full h-screen pt-20 flex flex-col">
      {/* ── Background images (absolute, behind everything) ── */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* ── Main content area (flex-grow, vertically centered) ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="max-w-3xl text-center flex flex-col items-center"
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-5 text-white">
                {slide.headline}
              </h1>

              <p className="text-lg md:text-xl text-white/75 font-medium italic mb-8">
                {slide.subheadline}
              </p>



              <a
                href={slide.ctaHref}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/25"
              >
                {slide.cta}
                <span className="text-lg">→</span>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Controls row (not overlapping content) ── */}
      <div className="relative z-20 px-6 md:px-12 lg:px-24 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-10 bg-primary" : "w-4 bg-white/25 hover:bg-white/45"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
            <span className="ml-3 text-xs text-white/35 font-mono">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/15 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/15 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Stats bar (at the very bottom, no overlap) ── */}
      <div className="relative z-20 border-t border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-5 grid grid-cols-3 gap-6">
          {[
            { value: "200+", label: "Clients Served Globally" },
            { value: "40M+", label: "Tonnes CO₂ Reduced" },
            { value: "98%", label: "Client Retention Rate" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-xl md:text-2xl font-display font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
