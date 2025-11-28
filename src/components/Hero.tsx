import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-cityscape.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Metro Digitech cityscape representing startup journey" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Animated Metro Line */}
      <motion.div 
        className="absolute top-1/2 left-0 right-0 h-1 metro-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight">
            We Don't Just <br />
            <span className="text-gradient">Fund Ideas.</span><br />
            We Build Them.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Smart capital meets world-class development. <br />
            From napkin sketch to Series A—all on one platform.
          </p>

          {/* Split CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold glow-blue"
            >
              Pitch Your Idea
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-semibold"
            >
              <TrendingUp className="mr-2" />
              View Portfolio
            </Button>
          </div>

          {/* Metro Stations - Visual Journey Indicator */}
          <motion.div 
            className="mt-20 flex justify-center items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {[
              { name: "Seed", color: "venture-gold" },
              { name: "Build", color: "signal-green" },
              { name: "Scale", color: "metro-blue" }
            ].map((station, i) => (
              <motion.div 
                key={station.name}
                className="flex flex-col items-center gap-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4 + (i * 0.2), type: "spring" }}
              >
                <div className={`w-4 h-4 rounded-full bg-${station.color} animate-pulse-glow`} />
                <span className="text-sm font-display text-muted-foreground">{station.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.8 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-muted-foreground rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
