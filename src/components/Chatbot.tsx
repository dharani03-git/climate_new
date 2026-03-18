import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  Minus,
  Maximize2
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const BOT_NAME = "Trustgrid Advisor";
const COMPANY_NAME = "Trustgrid.in";

// Knowledge Graph
const KNOWLEDGE = {
    founding: "2015 by climate scientists and strategists at COP21, Paris",
    mission: "To accelerate the transition to a net-zero economy by equipping organisations with the strategy, capability, and tools to turn climate ambition into verified, lasting impact.",
    stats: {
      orgs: "200+",
      countries: "30",
      specialists: "80+",
      experience: "15+ years"
    },
    locations: ["Mumbai", "London", "Global presence in 30+ countries"],
    coreOfferings: [
      { title: "Climate Strategy & Net-Zero Roadmapping", description: "Science-aligned net-zero strategies that are practical and financeable." },
      { title: "Carbon MRV (Measurement, Reporting & Verification)", description: "GHG Protocol aligned Scope 1, 2, and 3 emissions inventories." },
      { title: "ESG Governance & Disclosure", description: "Embedding ESG into governance and navigating mandatory disclosures (TCFD, CSRD, GRI)." },
      { title: "Green Finance Access", description: "Sustainability-linked loans, green bonds, and climate funds." },
      { title: "Climate Risk Assessment", description: "TCFD-aligned scenario analysis and physical/transition risk modeling." }
    ],
    capabilities: [
      "Climate Data & Advanced Analytics (AI-powered modelling)",
      "Science-Based Targets (SBTi) 1.5°C alignment",
      "Policy & Regulatory Navigation (CSRD, SEC, EU Taxonomy)",
      "Life Cycle Assessment (LCA) ISO 14040/14044 compliant",
      "Clean Technology & Innovation (Hydrogen, CCS, Renewables)"
    ],
    solutions: [
      { name: "ClimateOS™", type: "Flagship Platform", description: "End-to-end digital platform for managing climate programmes, Scope 3 tracking, and audit-ready reporting." },
      { name: "Carbon Intelligence Suite", type: "AI Analytics", description: "Strategic insights from emissions data to identify reduction opportunities." },
      { name: "Sustainability Reporting Accelerator", type: "Software", description: "Cuts reporting time by 60% for GRI, CDP, TCFD, CSRD." }
    ],
    industries: [
      "Energy & Utilities (Grid flexibility, Renewables)",
      "Manufacturing (Electrification, Hydrogen)",
      "Financial Services (TCFD risk, Sustainable Finance)",
      "Real Estate & Construction (Net-zero buildings)",
      "Transport & Logistics (EV transition, Fleet decarbonisation)"
    ],
    uniqueFramework: "ClimateOS™ platform and Value Capture Financing (VCF) methodology"
};

type Message = {
    id: string;
    text: string;
    sender: "bot" | "user";
    timestamp: Date;
};

type LeadStep = "NAME" | "PHONE" | "EMAIL" | "COMPLETED" | "NONE";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState("");
    const [leadStep, setLeadStep] = useState<LeadStep>("NONE");
    const [leadData, setLeadData] = useState({ name: "", phone: "", email: "" });
    const [isTyping, setIsTyping] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);
    const [greetingMessage, setGreetingMessage] = useState("");
    const location = useLocation();
    const scrollRef = useRef<HTMLDivElement>(null);

    // Initial greeting based on page context
    useEffect(() => {
        if (messages.length === 0) {
            let greeting = "";
            const path = location.pathname;

            if (path === "/") {
                greeting = `Welcome to ${COMPANY_NAME}. I'm ${BOT_NAME}. What brings you to our exploration of climate action today?`;
            } else if (path.includes("/solutions") || path.includes("/offerings")) {
                greeting = `I see you're looking at our technical solutions. Are you curious how our custom methodologies specifically solve grid integration or commercial feasibility challenges?`;
            } else if (path.includes("/contact")) {
                greeting = `High-level goals deserve a high-level consultation. Shall we set up a brief strategy call to discuss your proposal?`;
            } else {
                greeting = `Hello! I'm ${BOT_NAME} from ${COMPANY_NAME}. How can we help you bridge the gap between climate ambition and action today?`;
            }

            setMessages([{
                id: "initial",
                text: greeting,
                sender: "bot",
                timestamp: new Date()
            }]);
        }
    }, [location.pathname, messages.length]);

    // Popup greeting bubble
    useEffect(() => {
        const hasVisited = localStorage.getItem("trustgrid_visited");
        
        let message = "";
        if (!hasVisited) {
            const newVisitorMessages = [
                "Hi, welcome! 👋",
                "How can I help you? 😊"
            ];
            message = newVisitorMessages[Math.floor(Math.random() * newVisitorMessages.length)];
        } else {
            const returnVisitorMessages = [
                "Welcome back!! 🌟",
                "Nice to see you again! 👋"
            ];
            message = returnVisitorMessages[Math.floor(Math.random() * returnVisitorMessages.length)];
        }
        
        setGreetingMessage(message);

        const timer = setTimeout(() => {
            setShowGreeting(true);
            if (!hasVisited) {
                localStorage.setItem("trustgrid_visited", "true");
            }
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setShowGreeting(false);
        }
    }, [isOpen]);

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const addMessage = (text: string, sender: "bot" | "user") => {
        const newMessage: Message = {
            id: Math.random().toString(36).substring(7),
            text,
            sender,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, newMessage]);
    };

    const handleSend = async () => {
        if (!inputText.trim()) return;

        const userText = inputText.trim();
        addMessage(userText, "user");
        setInputText("");
        setIsTyping(true);

        // Simulate thinking
        setTimeout(() => {
            processResponse(userText);
            setIsTyping(false);
        }, 1000);
    };

    const processResponse = (userInput: string) => {
        const input = userInput.toLowerCase();

        // Lead Capture Steps
        if (leadStep === "NAME") {
            setLeadData(prev => ({ ...prev, name: userInput }));
            setLeadStep("PHONE");
            addMessage(`Nice to meet you, ${userInput}! And what's the best phone number for us to reach you at?`, "bot");
            return;
        }

        if (leadStep === "PHONE") {
            setLeadData(prev => ({ ...prev, phone: userInput }));
            setLeadStep("EMAIL");
            addMessage(`Thanks. And what's your best email address the team can send the proposal details to?`, "bot");
            return;
        }

        if (leadStep === "EMAIL") {
            setLeadData(prev => ({ ...prev, email: userInput }));
            setLeadStep("COMPLETED");
            addMessage(`Excellent. I've shared these details directly with our senior management team. They'll be in touch on the number you provided. Shall we continue our discussion?`, "bot");
            return;
        }

        // Sales Psychology Objections
        if (input.includes("price") || input.includes("cost") || input.includes("expensive") || input.includes("budget")) {
            addMessage(`I understand budget is key. Our clients find that ${KNOWLEDGE.uniqueFramework} actually reduces long-term operational costs by aligning science with commercial rigour. Let’s get an expert to show you the ROI.`, "bot");
            triggerPivot();
            return;
        }

        if (input.includes("compare") || input.includes("competitor") || input.includes("better than")) {
            addMessage("Many of our clients were with traditional consultancies before. They moved to us for our unique blend of climate science and business strategy. Shall we show you the difference?", "bot");
            return;
        }

        // Complex queries or high intent triggers pivot
        if (input.includes("how") || input.includes("solve") || input.includes("implement") || input.includes("start")) {
            triggerPivot();
            return;
        }

        // Generic knowledge responses
        if (input.includes("service") || input.includes("offer")) {
            const acts = KNOWLEDGE.coreOfferings.map(o => o.title).join(", ");
            addMessage(`We provide end-to-end support across: ${acts}. Which of these is most relevant to your current climate goals?`, "bot");
            return;
        }

        if (input.includes("capabilit")) {
            addMessage(`Our deeply specialized capabilities include: ${KNOWLEDGE.capabilities.join(", ")}. Which area holds the most potential for your organization?`, "bot");
            return;
        }

        if (input.includes("solution") || input.includes("platform") || input.includes("software")) {
            const sols = KNOWLEDGE.solutions.map(s => `${s.name} (${s.type})`).join(", ");
            addMessage(`We offer powerful technology platforms: ${sols}. Would you like a demo of our flagship ClimateOS™ platform?`, "bot");
            return;
        }

        if (input.includes("industr") || input.includes("sector") || input.includes("client")) {
            addMessage(`We serve a wide range of industries including: ${KNOWLEDGE.industries.join(", ")}. And if you don't see your sector, we likely cover it anyway. What industry are you in?`, "bot");
            return;
        }

        if (input.includes("found") || input.includes("who are you")) {
            addMessage(`${COMPANY_NAME} was founded in ${KNOWLEDGE.founding}. We are a team of ${KNOWLEDGE.stats.specialists} specialists across ${KNOWLEDGE.stats.countries} countries.`, "bot");
            return;
        }

        // Default fallback
        addMessage("That's a valid point. Honestly, for a project of this scale, a 5-minute chat with one of our specialists would be much more helpful than me typing here. Can I get your first name?", "bot");
        setLeadStep("NAME");
    };

    const triggerPivot = () => {
        addMessage(`Honestly, for a project of this scale, a 5-minute chat with one of our specialists would be much more helpful than me typing here. Can I get your first name?`, "bot");
        setLeadStep("NAME");
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] font-sans flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 50, scale: 0.8, filter: "blur(10px)" }}
                        className="mb-4 w-[380px] h-[550px] bg-card/95 backdrop-blur-2xl border border-border/80 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent p-5 border-b border-border/60 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30">
                                        <Bot size={22} />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-card rounded-full" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-foreground leading-none">{BOT_NAME}</h3>
                                    <p className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        Senior Consultant • Online
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-muted-foreground/60"><Minus size={16} /></button>
                                <button 
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-all text-muted-foreground/60"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div 
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-5 scrollbar-hide space-y-4"
                        >
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10, x: msg.sender === "user" ? 10 : -10 }}
                                    animate={{ opacity: 1, y: 0, x: 0 }}
                                    className={cn(
                                        "flex gap-3 max-w-[85%]",
                                        msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                                    )}
                                >
                                    {msg.sender === "bot" && (
                                        <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Bot size={16} />
                                        </div>
                                    )}
                                    <div className={cn(
                                        "p-3.5 rounded-2xl text-sm leading-relaxed",
                                        msg.sender === "user" 
                                            ? "bg-primary text-primary-foreground rounded-tr-none shadow-lg shadow-primary/10"
                                            : "bg-muted/50 border border-border/40 text-foreground rounded-tl-none"
                                    )}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex gap-3 mr-auto items-center"
                                >
                                    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Bot size={16} />
                                    </div>
                                    <div className="flex gap-1.5 bg-muted/50 px-4 py-2.5 rounded-2xl rounded-tl-none border border-border/40">
                                        <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                        <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" />
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Footer / Input */}
                        <div className="p-4 bg-background/50 border-t border-border/40">
                            <form 
                                className="relative flex items-center gap-2"
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                            >
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder={leadStep !== "NONE" ? "Type your response..." : "Ask about our services..."}
                                    className="w-full bg-muted/30 border border-border/40 rounded-2xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputText.trim()}
                                    className="absolute right-1.5 w-9 h-9 flex items-center justify-center rounded-xl bg-primary text-primary-foreground disabled:opacity-50 disabled:bg-muted transition-all active:scale-90"
                                >
                                    <Send size={18} />
                                </button>
                            </form>
                            <p className="text-[10px] text-center text-muted-foreground/40 mt-3 font-medium uppercase tracking-[0.1em]">
                                Powered by {COMPANY_NAME} Intelligence
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Greeting Tooltip */}
            <AnimatePresence>
                {!isOpen && showGreeting && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="absolute bottom-1 right-[76px] w-[300px] bg-[#12141a] shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 rounded-2xl p-4 flex gap-3 items-center cursor-pointer hover:border-primary/40 hover:shadow-[0_10px_40px_rgba(0,0,0,0.7)] transition-all group z-50"
                        onClick={() => setIsOpen(true)}
                    >
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                            <Bot className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                            <p className="text-[13.5px] font-medium leading-snug text-white/90 group-hover:text-primary transition-colors pr-5">
                                {greetingMessage}
                            </p>
                        </div>
                        <button 
                            className="absolute top-2 right-2 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-colors p-1.5 z-10"
                            onClick={(e) => { e.stopPropagation(); setShowGreeting(false); }}
                            aria-label="Dismiss greeting message"
                        >
                            <X className="w-3.5 h-3.5" />
                        </button>
                        
                        {/* Right-pointing Triangle Tail */}
                        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-[#12141a] border-t border-r border-white/10 transform rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Trigger Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "group relative w-16 h-16 rounded-3xl flex items-center justify-center shadow-[0_10px_40px_rgba(var(--primary-rgb),0.4)] transition-all active:scale-95 overflow-hidden",
                    isOpen ? "bg-white text-primary border border-primary/20" : "bg-primary text-primary-foreground"
                )}
                whileHover={{ y: -4, scale: 1.05 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="close" className="absolute inset-0 flex items-center justify-center" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                            <X size={28} />
                        </motion.div>
                    ) : (
                        <motion.div key="chat" className="absolute inset-0 flex items-center justify-center" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                            <MessageSquare size={28} />
                        </motion.div>
                    )}
                </AnimatePresence>
                
                {/* Notification Ping */}
                {!isOpen && (
                    <span className="absolute top-3 right-3 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
                    </span>
                )}
            </motion.button>
        </div>
    );
};

export default Chatbot;
