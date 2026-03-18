import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
export const SolutionCTA = () => (
  <section className="py-24 relative overflow-hidden bg-card/5 border-t border-border/50">
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto bg-card/80 backdrop-blur-2xl border border-primary/20 rounded-[3rem] p-10 md:p-16 text-center shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Accelerate the Energy Transition</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Partner with experts to design and deploy scalable clean energy infrastructure and technologies.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 shadow-xl gap-2 flex items-center justify-center"><ArrowRight className="w-5 h-5"/> Request Consultation</a>
          <a href="/docs/solutions-overview.pdf" className="px-8 py-4 rounded-full border-2 border-primary/30 text-foreground font-semibold hover:bg-primary/5 hover:border-primary/60 gap-2 flex items-center justify-center"><FileText className="w-5 h-5"/> Download Solutions Overview</a>
        </div>
      </motion.div>
    </div>
  </section>
);