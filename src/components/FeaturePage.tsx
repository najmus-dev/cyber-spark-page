import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import DemoRequestModal from "@/components/DemoRequestModal";
import ContactModal from "@/components/ContactModal";
import { 
  ArrowLeft, 
  Shield, 
  Zap, 
  Eye, 
  Database, 
  Lock, 
  Users, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star
} from "lucide-react";

interface FeaturePageProps {
  feature: {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<any>;
    gradient: string;
  };
  onBack: () => void;
}

export default function FeaturePage({ feature, onBack }: FeaturePageProps) {
  const Icon = feature.icon;

  const featureDetails = {
    "intelligent-monitoring": {
      subtitle: "Real-time AI-powered surveillance and threat detection",
      benefits: [
        "24/7 automated monitoring with intelligent alerts",
        "Advanced pattern recognition for anomaly detection",
        "Integration with existing security infrastructure",
        "Predictive analytics for proactive threat prevention",
        "Real-time incident response coordination"
      ],
      capabilities: [
        { name: "Threat Detection Accuracy", value: "99.7%" },
        { name: "False Positive Reduction", value: "85%" },
        { name: "Response Time Improvement", value: "75%" },
        { name: "Coverage Area", value: "Unlimited" }
      ],
      useCases: [
        "Perimeter security monitoring",
        "Crowd behavior analysis",
        "Suspicious activity detection",
        "Emergency response coordination",
        "Evidence collection and analysis"
      ]
    },
    "automated-workflows": {
      subtitle: "Streamline operations with intelligent process automation",
      benefits: [
        "Reduce manual tasks by up to 80%",
        "Standardize procedures across departments",
        "Eliminate human error in routine processes",
        "Accelerate case processing and reporting",
        "Seamless integration with existing systems"
      ],
      capabilities: [
        { name: "Process Automation", value: "300+" },
        { name: "Efficiency Increase", value: "80%" },
        { name: "Error Reduction", value: "95%" },
        { name: "Time Savings", value: "40hrs/week" }
      ],
      useCases: [
        "Report generation and filing",
        "Evidence management workflows",
        "Resource allocation optimization",
        "Compliance monitoring",
        "Inter-agency communication"
      ]
    },
    "real-time-insights": {
      subtitle: "Advanced analytics and reporting for data-driven decisions",
      benefits: [
        "Real-time dashboards with actionable insights",
        "Predictive analytics for resource planning",
        "Custom reporting for stakeholders",
        "Performance metrics and KPI tracking",
        "Historical trend analysis"
      ],
      capabilities: [
        { name: "Data Processing Speed", value: "Real-time" },
        { name: "Predictive Accuracy", value: "94%" },
        { name: "Report Generation", value: "Instant" },
        { name: "Data Sources", value: "200+" }
      ],
      useCases: [
        "Crime pattern analysis",
        "Resource deployment optimization",
        "Performance evaluation",
        "Budget planning and allocation",
        "Strategic decision support"
      ]
    }
  };

  const details = featureDetails[feature.id as keyof typeof featureDetails];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 blinking-dots opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="mb-8 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Features
              </Button>
              
              <div className={`inline-flex p-4 rounded-2xl ${feature.gradient} mb-6`}>
                <Icon className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold hero-gradient mb-6">
                {feature.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {details?.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <DemoRequestModal>
                  <Button variant="hero" size="lg">
                    Request Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </DemoRequestModal>
                <ContactModal>
                  <Button variant="hero-outline" size="lg">
                    Learn More
                  </Button>
                </ContactModal>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold hero-gradient mb-4">
                Key Benefits
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover how this feature transforms your operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {details?.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card h-full">
                    <CardContent className="p-6">
                      <CheckCircle className="w-8 h-8 text-primary mb-4" />
                      <p className="text-foreground">{benefit}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold hero-gradient mb-4">
                Proven Performance
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real metrics from our deployed solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {details?.capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <div className="text-3xl md:text-4xl font-bold hero-gradient mb-2">
                        {capability.value}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {capability.name}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold hero-gradient mb-4">
                Real-World Applications
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how organizations are using this feature
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {details?.useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-card h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <p className="text-foreground font-medium">{useCase}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold hero-gradient mb-6">
                Ready to Experience {feature.title}?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                See how this powerful feature can transform your organization's operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <DemoRequestModal>
                  <Button variant="hero" size="lg">
                    Schedule Your Demo
                    <Star className="ml-2 w-4 h-4" />
                  </Button>
                </DemoRequestModal>
                <ContactModal>
                  <Button variant="hero-outline" size="lg">
                    Contact Sales
                  </Button>
                </ContactModal>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}