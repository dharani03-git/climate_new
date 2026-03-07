import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/**
 * A summary section for the home page linking to the full detailed Offerings page.
 */
const ElectricVehicleSection = () => {
  return (
    <section
      id="offerings"
      className="section-padding bg-secondary/30 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-grid-fine opacity-[0.4] pointer-events-none" />
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Section header ── */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.div
            className="section-label mb-6 mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Offerings Directory
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Electric Vehicle & Mobility —{" "}
            <span className="text-gradient-primary">
              Transform the Future of Transportation
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            End-to-end advisory across the full electric mobility and green energy
            ecosystem — from EV charging infrastructure and battery solutions to
            innovative business models and grid integration.
          </motion.p>
        </div>

        {/* Stats strip */}
        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 p-6 rounded-2xl bg-card border border-border/50 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            { label: "Capability Groups", value: "10" },
            { label: "Business Models", value: "8+" },
            { label: "Service Categories", value: "50+" },
            { label: "Sectors Covered", value: "All" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-display font-bold text-primary">
                {s.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Explore CTA */}
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/offerings"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/10 text-primary font-bold hover:bg-primary hover:text-primary-foreground border border-primary/30 transition-all duration-300 shadow-[0_0_20px_hsl(145_72%_50%/0.15)] hover:shadow-[0_0_30px_hsl(145_72%_50%/0.3)]"
          >
            <span>Explore Full Offerings Directory</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ElectricVehicleSection;
