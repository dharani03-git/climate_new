import { motion } from "framer-motion";
export const SolutionLifecycle = ({ lifecycle }: any) => (
  <section className="py-24 bg-background border-t border-border/50" id="lifecycle">
    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
       <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center">Project Lifecycle Support</h2>
       <div className="grid md:grid-cols-5 gap-4">
          {lifecycle.map((stage: any, idx: number) => (
            <div key={idx} className="relative pt-6">
               <div className="hidden md:block w-full h-1 bg-border absolute top-0 left-0">
                  <div className="absolute top-[50%] -translate-y-1/2 left-4 w-4 h-4 bg-primary rounded-full outline outline-4 outline-background" />
               </div>
               <h4 className="text-primary font-bold text-sm uppercase tracking-wider mt-4 md:mt-6 mb-2">{stage.stage}</h4>
               <ul className="space-y-2">
                 {stage.services.map((s: string, i: number) => (
                   <li key={i} className="text-xs text-muted-foreground">• {s}</li>
                 ))}
               </ul>
            </div>
          ))}
       </div>
    </div>
  </section>
);