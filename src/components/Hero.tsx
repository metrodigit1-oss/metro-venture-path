import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Sprout, Hammer, Flag, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";
import cityscape from "@/assets/hero-cityscape.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const stations = [
    { name: "Seed", color: "brand-purple", icon: Sprout },
    { name: "Build", color: "brand-magenta", icon: Hammer },
    { name: "Scale", color: "brand-red", icon: Maximize2 },
    { name: "Exit", color: "brand-yellow", icon: Flag }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={cityscape} 
          alt="Metro Cityscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        <div className="absolute inset-0 bg-brand-purple/10 mix-blend-overlay" />
      </div>

      {/* Animated Metro Line */}
      <motion.div 
        className="absolute top-1/2 left-0 right-0 h-1 metro-line z-10 opacity-50 mt-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
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
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light">
            Smart capital meets world-class development. <br />
            We are the co-founder you've been waiting for—from napkin sketch to Series A.
          </p>

          {/* Split CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold glow-purple shadow-xl"
              onClick={() => navigate('/contact')}
            >
              Pitch Your Idea
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary/20 text-foreground hover:bg-primary/5 px-8 py-6 text-lg font-semibold backdrop-blur-sm"
              onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <TrendingUp className="mr-2" />
              Our Philosophy
            </Button>
          </div>

          {/* Metro Stations - Visual Journey Indicator */}
          <motion.div 
            className="mt-20 flex justify-center items-center gap-8 md:gap-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {stations.map((station, i) => (
              <motion.div 
                key={station.name}
                className="flex flex-col items-center gap-3 group cursor-pointer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4 + (i * 0.2), type: "spring" }}
              >
                <div className={`w-14 h-14 rounded-full bg-background border-[3px] border-\${station.color} flex items-center justify-center shadow-lg z-10 relative group-hover:scale-110 transition-transform duration-300 ring-4 ring-background`}>
                  <station.icon className={`w-6 h-6 text-\${station.color}`} />
                </div>
                <span className={`text-sm font-display font-bold tracking-widest uppercase text-muted-foreground group-hover:text-\${station.color} transition-colors`}>
                  {station.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;