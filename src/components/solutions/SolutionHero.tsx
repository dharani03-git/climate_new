import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export const SolutionHero = ({ title, subtitle, paragraph, ctaExplore, ctaContact }: any) => (
  <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 bg-grid-white/[0.02] bg-[length:32px_32px]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      </div>
      <div className="container px-4 md:px-6 z-10 mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col space-y-8 max-w-4xl mx-auto text-center">
              <div className="inline-flex mx-auto px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-semibold w-fit uppercase tracking-widest">
                  Clean Infrastructure
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                  {title}
              </h1>
              <p className="text-xl md:text-2xl text-foreground font-medium">
                  {subtitle}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  {paragraph}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                  <a href="#solutions" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 shadow-lg shadow-primary/20 transition-all gap-2">
                      {ctaExplore || "Explore Solutions"} <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-border bg-card/50 backdrop-blur text-foreground font-semibold hover:bg-card hover:border-primary/50 transition-all gap-2">
                      {ctaContact || "Contact Experts"} <MessageSquare className="w-5 h-5" />
                  </a>
              </div>
          </motion.div>
      </div>
  </section>
);