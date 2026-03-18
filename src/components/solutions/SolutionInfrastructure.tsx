import { motion } from "framer-motion";
export const SolutionInfrastructure = ({ infrastructure }: any) => (
  <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden" id="infrastructure">
    <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Infrastructure Development</h2>
        <p className="text-primary-foreground/80 text-lg">Managing complex infrastructure projects through robust execution strategies.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {infrastructure.map((item: any, idx: number) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6">
             <h3 className="text-lg font-bold mb-3">{item.title}</h3>
             <p className="text-primary-foreground/80 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);