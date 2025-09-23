import { motion } from "framer-motion";
import { Shield, Zap, Eye } from "lucide-react";
import FeatureCard from "./FeatureCard";

interface FeaturesSectionProps {
  onFeatureClick?: (featureId: string) => void;
}

const features = [
  {
    id: "intelligent-monitoring",
    icon: Shield,
    title: "Intelligent Monitoring",
    description: "AI-powered surveillance and threat detection systems that provide real-time analysis and alerts.",
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-600"
  },
  {
    id: "automated-workflows", 
    icon: Zap,
    title: "Automated Workflows",
    description: "Streamline operations with intelligent process automation and smart resource allocation.",
    gradient: "bg-gradient-to-br from-blue-500 to-indigo-600"
  },
  {
    id: "real-time-insights",
    icon: Eye,
    title: "Real-time Insights",
    description: "Advanced analytics and reporting with predictive capabilities for data-driven decisions.",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-600"
  }
];

export default function FeaturesSection({ onFeatureClick }: FeaturesSectionProps) {
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
            <span className="hero-gradient">VIGIL SOLUTIONS</span>
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
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              gradient={feature.gradient}
              delay={index * 0.2}
              onClick={() => onFeatureClick?.(feature.id)}
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