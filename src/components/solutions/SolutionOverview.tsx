import { motion } from "framer-motion";
export const SolutionOverview = ({ howItWorks, whyItMatters, globalTrends, indiaRelevance }: any) => (
  <section className="py-24 bg-card/20 border-b border-border/50" id="overview">
    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Technology Overview</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
           <h3 className="text-xl font-bold mb-3 text-primary flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> How it Works</h3>
           <p className="text-muted-foreground leading-relaxed mb-8">{howItWorks}</p>
           
           <h3 className="text-xl font-bold mb-3 text-primary flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> Why it Matters</h3>
           <p className="text-muted-foreground leading-relaxed">{whyItMatters}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
           <div className="bg-card p-8 rounded-3xl border border-border shadow-2xl">
              <h3 className="text-lg font-bold mb-3 text-foreground opacity-90 border-b border-border pb-2">Global Adoption Trends</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{globalTrends}</p>
              
              <h3 className="text-lg font-bold mb-3 text-foreground opacity-90 border-b border-border pb-2">Relevance to India Context</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{indiaRelevance}</p>
           </div>
        </motion.div>
      </div>
    </div>
  </section>
);