import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = [
  {
    heading: "Services",
    links: [
      { label: "Climate Strategy", href: "#offerings" },
      { label: "Carbon MRV", href: "#offerings" },
      { label: "ESG Advisory", href: "#offerings" },
      { label: "Green Finance", href: "#offerings" },
      { label: "Climate Risk", href: "#offerings" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "ClimateOS™", href: "#solutions" },
      { label: "Reporting Accelerator", href: "#solutions" },
      { label: "Supply Chain", href: "#solutions" },
      { label: "Green Finance Readiness", href: "#solutions" },
      { label: "Carbon Intelligence", href: "#solutions" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Energy & Utilities", href: "#industries" },
      { label: "Financial Services", href: "#industries" },
      { label: "Manufacturing", href: "#industries" },
      { label: "Technology", href: "#industries" },
      { label: "Transport", href: "#industries" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Partners", href: "#partners" },
      { label: "Careers", href: "#" },
      { label: "News & Insights", href: "#" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-primary/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Top section */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <a href="#" className="flex items-center gap-2 group w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="font-display font-bold text-lg uppercase text-foreground tracking-tight">
                Trustgrid<span className="text-primary">.in</span>
              </span>
            </a>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Accelerating the transition to a net-zero economy — one organisation at a time.
              Science-led. Impact-driven. Globally delivered.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter/X" },
                { icon: Github, label: "GitHub" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-card border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/8 transition-all group"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Climate Insights Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 text-xs px-3 py-2.5 rounded-xl bg-card border border-border/60 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
                <button className="px-4 py-2.5 rounded-xl bg-primary/15 text-primary border border-primary/25 hover:bg-primary/25 transition-all text-xs font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-0.5 inline-flex items-center gap-1 transition-all group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-60 -translate-x-1 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-border/40 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/70">
            © {currentYear} Trustgrid.in Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <a key={item} href="#" className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors">
                {item}
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/50">
            25 Green Lane, London EC2A 3AE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
