import { motion } from "framer-motion";
export const SolutionIndustryApps = ({ applications }: any) => (
  <section className="py-24 bg-card/20" id="applications">
    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Industry Applications</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Scaling clean technology interventions across the broader economy.</p>
      </div>
      <div className="overflow-x-auto pb-6">
        <table className="w-full text-left border-collapse min-w-[800px] border border-border/50 rounded-2xl overflow-hidden block md:table">
          <thead>
            <tr className="bg-card/50 border-b border-border/50">
              <th className="py-5 px-6 font-semibold text-foreground/80 w-1/4">Sector</th>
              <th className="py-5 px-6 font-semibold text-foreground/80 w-1/2">Technology Use Case</th>
              <th className="py-5 px-6 font-semibold text-foreground/80 w-1/4">Benefits</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30 bg-card/30">
            {applications.map((app: any, idx: number) => (
              <tr key={idx} className="hover:bg-primary/5 transition-colors">
                <td className="py-6 px-6 font-medium text-foreground">{app.sector}</td>
                <td className="py-6 px-6 text-muted-foreground text-sm leading-relaxed">{app.useCase}</td>
                <td className="py-6 px-6"><div className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-3 py-2 rounded-lg text-xs leading-relaxed font-medium">{app.benefits}</div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);