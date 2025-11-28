import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Intense Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple via-brand-magenta to-brand-red opacity-10 animate-gradient-xy" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-brand-cyan rounded-full blur-[60px] opacity-40 animate-bounce delay-1000 duration-[3000ms]" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-brand-yellow rounded-full blur-[60px] opacity-40 animate-bounce duration-[4000ms]" />

      <motion.div 
        className="max-w-5xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        

        <h2 className="text-6xl md:text-8xl font-display font-bold mb-8 drop-shadow-sm">
          Ready to Board <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">The Metro?</span>
        </h2>
        
        <p className="text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          We are looking for ambitious people who need more than just a check. 
          If you have the vision, we have the engine to build it.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg"
            className="bg-brand-purple hover:bg-brand-purple/90 text-white px-12 py-8 text-xl font-bold glow-purple group rounded-2xl transition-transform hover:scale-105"
            onClick={() => navigate('/contact')}
          >
            <Mail className="mr-3 w-6 h-6" />
            Apply for Partnership
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;