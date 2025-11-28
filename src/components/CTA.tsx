import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-brand-purple/5 to-transparent opacity-50" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-magenta/10 rounded-full blur-[100px]" />
      </div>
      
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Accepting Founders for 2025 Cohort</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Ready to Board <br />
          <span className="text-gradient">The Metro?</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          We are looking for ambitious founders who need more than just a check. 
          If you have the vision, we have the engine to build it.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-semibold glow-purple group rounded-full"
          >
            <Mail className="mr-2 w-5 h-5" />
            Apply for Partnership
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-border hover:border-primary/50 px-10 py-7 text-lg rounded-full"
          >
            Schedule a Discovery Call
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;