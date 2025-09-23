import { motion } from "framer-motion";
import { Brain, MessageCircle, FileText, Zap, Shield, Database } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Brain,
    title: "SMART EVIDENCE SUBMISSION",
    description: "Automatically extract and index data from images and documents, reducing manual entry and ensuring accuracy.",
    accentColor: "primary" as const
  },
  {
    icon: MessageCircle,
    title: "CONVERSATIONAL AI AGENT", 
    description: "Our AI chats with officers to collect key details and instantly creates complete, accurate reports.",
    accentColor: "secondary" as const
  },
  {
    icon: FileText,
    title: "INSTANT REPORT GENERATION",
    description: "Quickly compile and export detailed reports with built-in human oversight, ensuring compliance and precision.",
    accentColor: "accent" as const
  },
  {
    icon: Zap,
    title: "SMART DISPATCH & ALLOCATION",
    description: "Optimize emergency response times by leveraging real-time data with AI-powered insights.",
    accentColor: "primary" as const
  },
  {
    icon: Database,
    title: "AUTONOMOUS EVIDENCE MANAGEMENT",
    description: "Automatically organize, tag, and categorize evidence from reports, surveillance, and public data.",
    accentColor: "secondary" as const
  },
  {
    icon: Shield,
    title: "REAL-TIME CRIME ANALYTICS",
    description: "Continuously analyzes police reports and surveillance feeds to detect patterns and forecast hotspots.",
    accentColor: "accent" as const
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="hero-gradient">VIGIL SERVICES</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comprehensive AI-powered solutions designed to transform law enforcement workflows and enhance public safety.
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              accentColor={feature.accentColor}
            />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
}