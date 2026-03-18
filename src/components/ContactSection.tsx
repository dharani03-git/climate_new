import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, Globe, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { submitContactForm, trackBehavior } from "@/lib/analytics";

const helpOptions = [
    "Climate Strategy & Net-Zero Roadmapping",
    "Carbon Measurement, Reporting & Verification",
    "ESG Governance & Disclosure",
    "Green Finance & Sustainable Investment",
    "Climate Risk Assessment",
    "Technology Platforms & Solutions",
    "Partnership Enquiry",
    "Other",
];

const contactDetails = [
    { icon: MapPin, label: "Headquarters", value: "25 Green Lane, London EC2A 3AE, United Kingdom" },
    { icon: Mail, label: "Email", value: "hello@trustgrid.in" },
    { icon: Phone, label: "Phone", value: "+44 20 7123 4567" },
    { icon: Globe, label: "Global Offices", value: "London · New York · Singapore · Nairobi · Sydney" },
    { icon: Clock, label: "Response Time", value: "We respond to all enquiries within 24 business hours" },
];

const ContactSection = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        organisation: "",
        helpWith: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await submitContactForm({
                name: `${formData.firstName} ${formData.lastName}`.trim(),
                email: formData.email,
                company: formData.organisation,
                serviceInterest: formData.helpWith,
                message: formData.message,
                status: "New lead"
            });
            trackBehavior('Form', 'Contact Form Submitted', 'Success');
        } catch (error) {
            console.error("Error submitting form", error);
            trackBehavior('Form', 'Contact Form Error', 'Failed to submit');
        } finally {
            setSubmitting(false);
            setSubmitted(true);
        }
    };

    const inputClass =
        "w-full px-4 py-3 rounded-xl bg-background/60 border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300 text-sm backdrop-blur-sm hover:border-border/80";

    return (
        <section id="contact" className="section-padding bg-secondary/20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-primary/5 blur-[120px] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="section-label mb-6">Contact Us</div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.05] tracking-tight">
                            Let's Build Your{" "}
                            <span className="text-gradient-primary">Climate Future Together</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                            Whether you are taking your first steps on the sustainability journey or accelerating an
                            established programme, our team is ready to help. Tell us about your goals and challenges
                            — and we'll connect you with the right expert within 24 hours.
                        </p>

                        <div className="space-y-5">
                            {contactDetails.map((detail, i) => (
                                <motion.div
                                    key={detail.label}
                                    className="flex items-start gap-4 group"
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15 + i * 0.07 }}
                                >
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                        <detail.icon className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">
                                            {detail.label}
                                        </p>
                                        <p className="text-foreground text-sm">{detail.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Trust signals */}
                        <div className="mt-10 pt-8 border-t border-border/40 flex flex-wrap gap-4">
                            {["ISO 27001 Compliant", "GDPR Secure", "24h Response", "No Spam"].map((badge) => (
                                <span key={badge} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border/60 text-xs text-muted-foreground">
                                    <CheckCircle2 className="w-3 h-3 text-primary" />
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="relative p-8 rounded-2xl bg-card border border-border/50">
                            {/* Glow behind form */}
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/15 via-transparent to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-md pointer-events-none" />

                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center py-16 text-center gap-5"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                                            className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center"
                                        >
                                            <CheckCircle2 className="w-10 h-10 text-primary" />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                                                Thank you for reaching out. One of our climate experts will respond to your
                                                enquiry within 24 business hours.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => { setSubmitted(false); setFormData({ firstName: "", lastName: "", email: "", organisation: "", helpWith: "", message: "" }); }}
                                            className="text-sm text-primary font-semibold hover:underline underline-offset-4"
                                        >
                                            Send another message →
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        className="space-y-5"
                                        onSubmit={handleSubmit}
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs font-semibold mb-1.5 text-muted-foreground uppercase tracking-wider">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    required
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    placeholder="Maya"
                                                    className={inputClass}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold mb-1.5 text-muted-foreground uppercase tracking-wider">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    required
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    placeholder="Patel"
                                                    className={inputClass}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold mb-1.5 text-muted-foreground uppercase tracking-wider">
                                                Work Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="maya@yourcompany.com"
                                                className={inputClass}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold mb-1.5 text-muted-foreground uppercase tracking-wider">
                                                Organisation
                                            </label>
                                            <input
                                                type="text"
                                                name="organisation"
                                                value={formData.organisation}
                                                onChange={handleChange}
                                                placeholder="Your Company Ltd."
                                                className={inputClass}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold mb-1.5 text-muted-foreground uppercase tracking-wider">
                                                How Can We Help?
                                            </label>
                                            <div className="relative">
                                                <select
                                                    name="helpWith"
                                                    value={formData.helpWith}
                                                    onChange={handleChange}
                                                    className={inputClass + " appearance-none pr-10"}
                                                >
                                                    <option value="" disabled>Select a service area...</option>
                                                    {helpOptions.map((option) => (
                                                        <option key={option} value={option}>{option}</option>
                                                    ))}
                                                </select>
                                                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">▾</div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold mb-1.5 text-muted-foreground uppercase tracking-wider">
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={5}
                                                placeholder="Tell us about your climate goals and challenges..."
                                                className={inputClass + " resize-none"}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="w-full flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {submitting ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message <Send className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>
                                        <p className="text-center text-xs text-muted-foreground/60">
                                            By submitting, you agree to our privacy policy. We never share your data.
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
