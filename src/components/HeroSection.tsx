"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Globe3D from "./Globe3D";
import DemoRequestModal from "./DemoRequestModal";
import ContactModal from "./ContactModal";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background with blinking dots */}
      <div className="absolute inset-0 blinking-dots" />
      
      {/* Additional floating particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-primary/50 rounded-full animate-pulse delay-2000" />
        <div className="absolute bottom-20 right-40 w-1 h-1 bg-secondary/50 rounded-full animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold text-primary mb-2">VIGIL</h1>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="hero-gradient">
              AUTOMATING GOVERNMENT
            </span>
            <br />
            <span className="hero-gradient">
              WORKFLOWS.
            </span>
            <br />
            <span className="text-foreground">
              AT SCALE.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
          >
            WE EMPOWER YOU TO STREAMLINE EVERY WORKFLOW, SO YOU CAN FOCUS ON IMPACT, NOT PAPERWORK
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <DemoRequestModal>
              <Button variant="hero" size="xl" className="group">
                REQUEST A DEMO
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </DemoRequestModal>
            
            <ContactModal>
              <Button variant="hero-outline" size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                ABOUT VIGIL
              </Button>
            </ContactModal>
          </motion.div>
        </motion.div>

        {/* Right side - 3D Globe */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative h-[500px] lg:h-[600px]"
        >
          <Globe3D />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}