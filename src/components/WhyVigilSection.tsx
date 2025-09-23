import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, Users, Clock, Award } from "lucide-react";

const whyChooseItems = [
  {
    icon: Shield,
    title: "ENTERPRISE SECURITY",
    description: "Bank-level encryption and compliance with law enforcement data protection standards.",
    color: "primary"
  },
  {
    icon: Zap,
    title: "LIGHTNING FAST",
    description: "Process reports 10x faster with our AI-powered automation technology.",
    color: "secondary"
  },
  {
    icon: Users,
    title: "24/7 SUPPORT",
    description: "Dedicated support team available around the clock for mission-critical operations.",
    color: "accent"
  },
  {
    icon: Clock,
    title: "INSTANT DEPLOYMENT",
    description: "Get up and running in minutes, not months. No complex installations required.",
    color: "primary"
  },
  {
    icon: Award,
    title: "PROVEN RESULTS",
    description: "Trusted by 500+ law enforcement agencies with 99.9% satisfaction rate.",
    color: "secondary"
  }
];

const benefits = [
  "Reduce paperwork time by up to 85%",
  "Improve report accuracy and compliance",
  "Enhance officer productivity and satisfaction",
  "Streamline evidence management workflows",
  "Real-time analytics and insights",
  "Seamless integration with existing systems"
];

export default function WhyVigilSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-gradient">WHY CHOOSE VIGIL?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The most advanced AI platform designed specifically for law enforcement workflows.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Features */}
          <div className="space-y-8">
            {whyChooseItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 group"
              >
                <div className={`p-3 rounded-xl bg-${item.color}/10 text-${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              <span className="hero-gradient">TRANSFORM YOUR OPERATIONS</span>
            </h3>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="pt-6 border-t border-border/30"
            >
              <Button variant="hero" size="lg" className="w-full group">
                SEE VIGIL IN ACTION
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Free demo • No commitment • See results instantly
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20 p-8 glass-card rounded-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to revolutionize your department?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of law enforcement agencies already using Vigil to streamline operations and enhance public safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              START FREE TRIAL
            </Button>
            <Button variant="hero-outline" size="lg">
              SCHEDULE DEMO
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}