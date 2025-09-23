import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

export default function MissionSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-gradient">ABOUT VIGIL</span>
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            WE CUT DOWN POLICE PAPERWORK TO SAVE TIME FOR WHAT MATTERS.
          </p>
        </motion.div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary mr-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">MISSION</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                At Vigil, our mission is to automate repetitive police paperwork using trusted AI tools, 
                giving officers more time to protect and serve their communities.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary mr-4">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">VISION</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We envision a future where law enforcement can fully focus on safety and service—freed from 
                redundant paperwork and empowered by AI that streamlines operations without compromising security or accountability.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-accent/10 text-accent mr-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">VALUES</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "INNOVATION", "SECURITY", "RESILIENCE", 
                  "EMPOWERMENT", "COLLABORATION", "EXPERTISE",
                  "TRANSPARENCY", "COMMITMENT", "TRUST", "INTEGRITY"
                ].map((value, index) => (
                  <motion.span
                    key={value}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="px-3 py-2 bg-muted/30 rounded-lg text-sm font-medium text-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors cursor-default"
                  >
                    {value}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Central circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30" />
              
              {/* Orbiting elements */}
              <div className="absolute inset-8 rounded-full border-2 border-primary/30 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full" />
              </div>
              
              <div className="absolute inset-16 rounded-full border-2 border-secondary/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-secondary rounded-full" />
              </div>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold hero-gradient mb-2">VIGIL</div>
                  <div className="text-sm text-muted-foreground">AI-POWERED</div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="absolute bottom-8 left-8 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/3 left-4 w-3 h-3 bg-primary/50 rounded-full animate-pulse delay-2000" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}