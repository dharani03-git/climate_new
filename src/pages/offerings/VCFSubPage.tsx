import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { vcfSubPagesData } from "@/data/vcfSubData";
import { useEffect } from "react";

const VCFSubPage = () => {
  const { slug } = useParams();
  const data = vcfSubPagesData[slug as keyof typeof vcfSubPagesData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) return <Navigate to="/404" />;

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-background overflow-hidden border-b border-border/50">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-6 uppercase tracking-widest"
              >
                VCF for Climate Infrastructure
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
              >
                {data.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground leading-relaxed mb-8"
              >
                {data.description}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Details Grid */}
        <section className="py-24 bg-background/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column: Applications & Value Streams */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-card/40 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-border/60 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                     <Icon className="w-6 h-6" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-foreground mb-6 italic">Core Focus Areas</h2>
                  
                  <div className="space-y-8">
                     {'applications' in data && data.applications && (
                       <div>
                         <h3 className="text-sm font-bold uppercase tracking-wider text-primary/70 mb-4">Applications</h3>
                         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                           {data.applications.map((app, i) => (
                             <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                               <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                               {app}
                             </li>
                           ))}
                         </ul>
                       </div>
                     )}

                     {'valueStreams' in data && data.valueStreams && (
                       <div>
                         <h3 className="text-sm font-bold uppercase tracking-wider text-primary/70 mb-4">Value Streams</h3>
                         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                           {data.valueStreams.map((stream, i) => (
                             <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                               <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                               {stream}
                             </li>
                           ))}
                         </ul>
                       </div>
                     )}

                     {'advisorySupport' in data && data.advisorySupport && (
                       <div>
                         <h3 className="text-sm font-bold uppercase tracking-wider text-primary/70 mb-4">Advisory Support</h3>
                         <ul className="space-y-4">
                           {data.advisorySupport.map((support, i) => (
                             <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-border/40">
                               <div className="w-2 h-2 rounded-full bg-primary/60 shrink-0 mt-1.5" />
                               <span className="text-sm font-medium text-foreground/90">{support}</span>
                             </li>
                           ))}
                         </ul>
                       </div>
                     )}
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">Implementation Benefits</h2>
                <div className="space-y-6">
                  {('benefits' in data ? data.benefits : []).map((benefit, i) => (
                    <div key={i} className="group p-6 rounded-3xl bg-card/30 border border-border/60 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md">
                      <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs">0{i+1}</span>
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed pl-10">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto rounded-[3rem] bg-card p-12 md:p-16 text-center relative overflow-hidden shadow-2xl border border-border/60"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
              <div className="relative z-10 text-white">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Unlock Climate Infrastructure Financing
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
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
      </main>

      <Footer />
    </div>
  );
};

export default VCFSubPage;
