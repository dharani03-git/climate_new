import { motion } from "framer-motion";
export const SolutionBenefits = ({ benefits }: any) => (
  <section className="py-24 bg-card/30" id="benefits">
    <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
       <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">Implementation Benefits</h2>
       <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b: any, idx: number) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="p-8 rounded-3xl bg-background border border-border shadow-xl hover:border-primary/50 transition-colors">
               <h3 className="text-xl font-bold text-primary mb-3">{b.title}</h3>
               <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
       </div>
    </div>
  </section>
);