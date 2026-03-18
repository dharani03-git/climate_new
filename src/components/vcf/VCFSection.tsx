import { motion } from "framer-motion";
import { ArrowRight, FileText, CheckCircle2 } from "lucide-react";
import { vcfData } from "@/data/vcfData";

export const VCFHero = () => (
  <section className="relative py-24 bg-background overflow-hidden border-b border-border/50">
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-6 uppercase tracking-widest"
      >
        Innovative Financing
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
      >
        Value Capture Financing (VCF) for <br className="hidden md:block" />
        <span className="text-gradient-primary">Climate Infrastructure</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
      >
        Bridging the climate funding gap through innovative mechanisms that capture 
        the economic value created by green infrastructure projects to reinvest in 
        sustainable development.
      </motion.p>
    </div>
  </section>
);

const VCFCard = ({ item, index }: { item: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-card/40 backdrop-blur-xl rounded-[2rem] border border-border/60 p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:border-primary/40 group"
  >
    <div className="flex flex-col h-full">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
        <item.icon className="w-7 h-7" />
      </div>
      
      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
        {item.title}
      </h3>
      
      <p className="text-muted-foreground mb-8 leading-relaxed">
        {item.description}
      </p>
      
      <div className="space-y-6 mb-8 flex-grow">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-4">Key Solutions</h4>
          <ul className="space-y-3">
            {item.solutions.map((sol: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{sol}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-4">Applications</h4>
          <div className="flex flex-wrap gap-2">
            {item.applications.map((app: string, i: number) => (
              <span key={i} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-medium text-primary">
                {app}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-4">Benefits</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {item.benefits.map((benefit: any, i: number) => (
              <div key={i} className="bg-white/5 rounded-xl p-3 border border-border/40 group-hover:bg-primary/5 transition-colors">
                <p className="text-[13px] font-bold text-foreground mb-1 leading-tight">{benefit.title}</p>
                <p className="text-[11px] text-muted-foreground leading-tight">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export const VCFSection = () => (
  <div id="vcf-section" className="scroll-mt-28 bg-background py-24 border-b border-border/50">
    <VCFHero />
    <div className="container mx-auto px-4 md:px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {vcfData.map((item, index) => (
          <VCFCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
    <VCFCTA />
  </div>
);

export const VCFCTA = () => (
  <section className="py-24 bg-background relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto rounded-[3rem] bg-card p-12 md:p-20 text-center relative overflow-hidden shadow-2xl border border-border/60"
      >
        {/* Abstract Background Element */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] opacity-5 bg-cover bg-center" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Unlock Climate Infrastructure Financing
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Partner with experts to structure scalable financing mechanisms for climate infrastructure projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
              Request Advisory Consultation <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 rounded-full border border-border bg-card/60 text-foreground font-semibold hover:bg-card transition-all flex items-center justify-center gap-2">
              Download Financing Framework <FileText className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default VCFSection;
