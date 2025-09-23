import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <footer className="bg-card/30 border-t border-border/50 py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 blinking-dots opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="hero-gradient">LET'S SUPPORT OUR</span>
                <br />
                <span className="text-foreground">MEN AND WOMEN IN BLUE</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Our team leverages AI agents to streamline police workflows. We help agencies enhance 
                public safety, reduce paperwork, and stay ahead in an ever-changing environment.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-4 group cursor-pointer"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">DROP US A LINE</h3>
                  <p className="text-muted-foreground">Shoot us an email, and we'll get back to you as soon as possible!</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center space-x-4 group cursor-pointer"
              >
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">GIVE US A CALL</h3>
                  <p className="text-muted-foreground">Call us, and let's talk about how we can support your agency's needs.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card rounded-2xl p-8 text-center"
          >
            <div className="space-y-6">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground">
                Ready to Transform Your Workflow?
              </h3>
              
              <p className="text-muted-foreground">
                Schedule a personalized demo and see how Vigil can revolutionize your agency's operations.
              </p>
              
              <Button variant="hero" size="lg" className="group w-full">
                <MessageSquare className="mr-2 h-5 w-5" />
                REQUEST A DEMO
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-border/30 mt-12 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-2xl font-bold text-primary">VIGIL</div>
            <div className="text-sm text-muted-foreground">
              © 2024 Vigil. Empowering law enforcement through AI innovation.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}