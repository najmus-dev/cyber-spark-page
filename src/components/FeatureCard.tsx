import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  accentColor: "primary" | "secondary" | "accent";
}

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  index, 
  accentColor 
}: FeatureCardProps) {
  const colorClasses = {
    primary: "text-primary group-hover:glow-primary",
    secondary: "text-secondary group-hover:glow-secondary", 
    accent: "text-accent"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <div className="glass-card rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-500">
        {/* Icon */}
        <div className={`inline-flex p-4 rounded-xl mb-6 bg-card/50 ${colorClasses[accentColor]} transition-all duration-300`}>
          <Icon className="w-8 h-8" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
}