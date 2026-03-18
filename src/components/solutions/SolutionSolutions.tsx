import { motion } from "framer-motion";
export const SolutionSolutions = ({ solutions }: any) => (
  <section className="py-24 bg-background" id="solutions">
    <div className="container mx-auto px-4 md:px-6">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Key Solutions Offered</h2>
        <p className="text-muted-foreground text-lg max-w-3xl">Comprehensive advisory tailored to your project goals.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((sol: any, i: number) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group rounded-3xl border border-border/50 bg-card/30 p-8 hover:bg-card hover:border-primary/50 transition-all duration-300">
             <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 text-lg font-bold">0{i+1}</div>
             <h3 className="text-xl font-bold mb-3 text-foreground">{sol.name}</h3>
             <p className="text-muted-foreground text-sm leading-relaxed mb-6">{sol.description}</p>
             <div>
                <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-widest mb-3">Application Areas</h4>
                <ul className="space-y-2">
                  {sol.applications.map((app: string, j: number) => <li key={j} className="text-xs text-muted-foreground flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60" />{app}</li>)}
                </ul>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);