import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  delay?: number;
  onClick?: () => void;
}

export default function FeatureCard({ title, description, icon: Icon, gradient, delay = 0, onClick }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group"
      onClick={onClick}
    >
      <div className="glass-card rounded-2xl p-8 h-full hover:shadow-glow transition-all duration-500 hover:-translate-y-2 cursor-pointer">
        <div className={`inline-flex p-4 rounded-2xl ${gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        {onClick && (
          <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm font-medium">Learn More</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>
    </motion.div>
  );
}