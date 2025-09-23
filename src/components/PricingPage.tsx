import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import Navigation from "@/components/Navigation";
import DemoRequestModal from "@/components/DemoRequestModal";
import ContactModal from "@/components/ContactModal";
import { 
  ArrowLeft, 
  Check, 
  Star, 
  Users, 
  Shield, 
  Zap, 
  Building, 
  Crown,
  ArrowRight
} from "lucide-react";

interface PricingPageProps {
  onBack: () => void;
}

export default function PricingPage({ onBack }: PricingPageProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small departments getting started with AI automation",
      icon: Users,
      monthlyPrice: 299,
      annualPrice: 2390, // 2 months free
      features: [
        "Up to 50 users",
        "Basic AI monitoring",
        "Standard reporting",
        "Email support",
        "Basic integrations",
        "Mobile app access",
        "Standard security"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      description: "Ideal for medium-sized organizations with advanced needs",
      icon: Shield,
      monthlyPrice: 599,
      annualPrice: 4792, // 2 months free
      features: [
        "Up to 200 users",
        "Advanced AI monitoring",
        "Custom reporting",
        "Priority support",
        "Advanced integrations",
        "Mobile app access",
        "Enhanced security",
        "Workflow automation",
        "Real-time analytics",
        "Custom dashboards"
      ],
      popular: true,
      cta: "Request Demo"
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large organizations and agencies",
      icon: Crown,
      monthlyPrice: null,
      annualPrice: null,
      features: [
        "Unlimited users",
        "Full AI suite",
        "White-label reporting",
        "Dedicated support",
        "Custom integrations",
        "Multi-tenant architecture",
        "Enterprise security",
        "Advanced automation",
        "Predictive analytics",
        "Custom development",
        "SLA guarantees",
        "Training included"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const addOns = [
    {
      name: "Advanced Analytics",
      description: "Predictive insights and custom reporting",
      price: 99
    },
    {
      name: "Extended Support",
      description: "24/7 phone and chat support",
      price: 199
    },
    {
      name: "Custom Integrations",
      description: "Bespoke API integrations and connectors",
      price: 299
    },
    {
      name: "Training Program",
      description: "Comprehensive user training and certification",
      price: 399
    }
  ];

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
                Back to Home
              </Button>
              
              <h1 className="text-4xl md:text-6xl font-bold hero-gradient mb-6">
                Choose Your Plan
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Flexible pricing options designed to scale with your organization
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <span className={isAnnual ? "text-muted-foreground" : "text-foreground font-medium"}>
                  Monthly
                </span>
                <Switch
                  checked={isAnnual}
                  onCheckedChange={setIsAnnual}
                  className="data-[state=checked]:bg-primary"
                />
                <span className={isAnnual ? "text-foreground font-medium" : "text-muted-foreground"}>
                  Annual
                </span>
                <Badge variant="secondary" className="ml-2">
                  Save 20%
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => {
                const Icon = plan.icon;
                const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
                
                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground">
                          <Star className="w-3 h-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <Card className={`glass-card h-full ${plan.popular ? 'border-primary/50 ring-1 ring-primary/20' : ''}`}>
                      <CardHeader className="text-center pb-8">
                        <div className="mx-auto p-3 rounded-full bg-gradient-to-br from-primary to-secondary w-fit mb-4">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {plan.description}
                        </CardDescription>
                        <div className="pt-4">
                          {price ? (
                            <>
                              <div className="text-4xl font-bold hero-gradient">
                                ${price.toLocaleString()}
                              </div>
                              <p className="text-muted-foreground text-sm">
                                per {isAnnual ? 'year' : 'month'}
                              </p>
                              {isAnnual && (
                                <p className="text-primary text-sm font-medium">
                                  2 months free!
                                </p>
                              )}
                            </>
                          ) : (
                            <div className="text-4xl font-bold hero-gradient">
                              Custom
                            </div>
                          )}
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-3">
                              <Check className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="pt-4">
                          {plan.name === "Enterprise" ? (
                            <ContactModal>
                              <Button variant="hero" className="w-full">
                                {plan.cta}
                                <ArrowRight className="ml-2 w-4 h-4" />
                              </Button>
                            </ContactModal>
                          ) : (
                            <DemoRequestModal>
                              <Button 
                                variant={plan.popular ? "hero" : "hero-outline"} 
                                className="w-full"
                              >
                                {plan.cta}
                                <ArrowRight className="ml-2 w-4 h-4" />
                              </Button>
                            </DemoRequestModal>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Add-ons */}
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
                Enhance Your Plan
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Optional add-ons to further customize your VIGIL experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {addOns.map((addOn, index) => (
                <motion.div
                  key={addOn.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card h-full">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold mb-2">{addOn.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {addOn.description}
                      </p>
                      <div className="text-2xl font-bold hero-gradient">
                        ${addOn.price}
                        <span className="text-sm text-muted-foreground font-normal">
                          /month
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
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
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  question: "Can I change my plan at any time?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly."
                },
                {
                  question: "Is there a free trial available?",
                  answer: "We offer a 30-day free trial for all plans. No credit card required to start your trial."
                },
                {
                  question: "What's included in the setup and training?",
                  answer: "All plans include basic setup assistance. Professional and Enterprise plans include comprehensive training programs and dedicated onboarding support."
                },
                {
                  question: "How does billing work for annual plans?",
                  answer: "Annual plans are billed upfront and include a 20% discount. You can cancel at any time and receive a prorated refund for unused months."
                },
                {
                  question: "Can I integrate VIGIL with my existing systems?",
                  answer: "Yes, VIGIL offers extensive integration capabilities. Professional plans include standard integrations, while Enterprise plans include custom integration development."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Join hundreds of organizations already using VIGIL to transform their operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <DemoRequestModal>
                  <Button variant="hero" size="lg">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 w-4 h-4" />
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