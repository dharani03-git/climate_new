import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
export const SolutionServices = ({ services }: any) => (
  <section className="py-24 bg-background" id="advisory-services">
    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
       <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Advisory Services</h2>
             <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
               We deliver specialized consulting and comprehensive advisory across the entire project development lifecycle.
             </p>
             <ul className="space-y-4">
                {services.map((service: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{service}</span>
                  </li>
                ))}
             </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden shadow-2xl bg-card border border-border p-8 h-full min-h-[400px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800')] opacity-5 bg-cover bg-center" />
              <div className="relative z-10 flex flex-col justify-center h-full">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">End-to-End Consulting</h3>
                  <p className="text-muted-foreground">From initial viability studies to final operational monitoring, our consulting team guarantees maximum return on sustainability investments through rigorous analytical frameworks.</p>
              </div>
          </motion.div>
       </div>
    </div>
  </section>
);