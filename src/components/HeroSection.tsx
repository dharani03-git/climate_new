import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";

const slides = [
  {
    headline: "Engineering the Net-Zero Economy",
    subheadline: "Where climate science meets infrastructure-grade execution",
    cta: "Explore Our Capabilities",
    ctaHref: "#capabilities",
    accent: "hsl(145 72% 50%)",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1920&q=80&auto=format",
  },
  {
    headline: "Climate Infrastructure Advisory",
    subheadline: "From concept to capital — making climate assets investment-ready",
    cta: "See How We Advise",
    ctaHref: "#offerings",
    accent: "hsl(170 70% 48%)",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80&auto=format",
  },
  {
    headline: "Energy Intelligence",
    subheadline: "Data-driven decisions for the energy transition",
    cta: "Explore Energy Intelligence",
    ctaHref: "#solutions",
    accent: "hsl(190 80% 50%)",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80&auto=format",
  },
  {
    headline: "Digital Decarbonization",
    subheadline: "Sustainable infrastructure for the AI-powered world",
    cta: "Learn About Digital Decarbonization",
    ctaHref: "#solutions",
    accent: "hsl(155 65% 48%)",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&auto=format",
  },
  {
    headline: "Carbon Monetization",
    subheadline: "Turning decarbonization into a revenue stream",
    cta: "See Carbon Monetization",
    ctaHref: "#offerings",
    accent: "hsl(145 72% 50%)",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80&auto=format",
  },
  {
    headline: "Mobility & Transport Decarbonization",
    subheadline: "Electrifying the arteries of global commerce",
    cta: "Explore Mobility Solutions",
    ctaHref: "#industries",
    accent: "hsl(180 75% 45%)",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&q=80&auto=format",
  },
];

const stats = [
  { value: "200+", label: "Clients Served Globally", suffix: "" },
  { value: "40M+", label: "Tonnes CO₂ Reduced", suffix: "" },
  { value: "98%", label: "Client Retention Rate", suffix: "" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next, isAutoPlaying]);

  const slide = slides[current];

  const bgVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "6%" : "-6%", opacity: 0, scale: 1.06 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-4%" : "4%", opacity: 0, scale: 1.02 }),
  };

  return (
    <section className="relative w-full min-h-screen pt-20 flex flex-col">
      {/* ── Background images ── */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Layered cinematic overlays */}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          {/* Coloured vignette from slide accent */}
          <motion.div
            className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse at 30% 60%, ${slide.accent}18, transparent 70%)` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Floating decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-[100px] pointer-events-none z-0"
        style={{ background: `${slide.accent}15` }} />
      <div className="absolute bottom-1/3 left-1/5 w-48 h-48 rounded-full blur-[80px] pointer-events-none z-0"
        style={{ background: `${slide.accent}10` }} />

      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl text-center flex flex-col items-center"
            >
              {/* Slide counter badge */}
              <motion.div
                className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 backdrop-blur-sm border border-white/15 text-white/60 text-xs font-mono"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {String(current + 1).padStart(2, "0")} of {String(slides.length).padStart(2, "0")}
              </motion.div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.93] tracking-tight mb-6 text-white"
                style={{ textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}>
                {slide.headline}
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-white/70 font-light italic mb-10 max-w-2xl leading-relaxed">
                {slide.subheadline}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={slide.ctaHref}
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold font-display transition-all duration-300 shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, hsl(145 72% 50%), hsl(170 65% 48%))`,
                    color: "hsl(220 20% 7%)",
                    boxShadow: `0 8px 32px ${slide.accent}40`,
                  }}
                >
                  {slide.cta}
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-medium text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/12 hover:border-white/35 transition-all"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Controls row ── */}
      <div className="relative z-20 px-6 md:px-12 lg:px-24 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); setIsAutoPlaying(false); }}
                className={`rounded-full transition-all duration-500 ${i === current
                  ? "w-8 h-2 bg-primary shadow-[0_0_10px_hsl(145_72%_50%/0.6)]"
                  : "w-2 h-2 bg-white/25 hover:bg-white/50"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrow controls */}
          <div className="flex gap-2">
            <button
              onClick={() => { prev(); setIsAutoPlaying(false); }}
              className="w-11 h-11 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/15 hover:border-white/30 hover:scale-110 active:scale-95 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => { next(); setIsAutoPlaying(false); }}
              className="w-11 h-11 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/15 hover:border-white/30 hover:scale-110 active:scale-95 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="relative z-20 border-t border-white/8">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-7 grid grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="group cursor-default flex flex-col items-start"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary group-hover:neon-text transition-all"
                style={{ textShadow: "0 0 20px hsl(145 72% 50% / 0.4)" }}>
                {stat.value}
              </p>
              <p className="text-[11px] md:text-xs text-white/50 uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-28 right-8 z-20 flex flex-col items-center gap-1.5 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <p className="text-[10px] uppercase tracking-widest rotate-90 mb-2">Scroll</p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3 h-3" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
