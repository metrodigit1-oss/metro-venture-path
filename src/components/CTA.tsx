import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Ready to Board <br />
          <span className="text-gradient">The Metro?</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Whether you're a founder with an idea or an investor seeking returns, 
          let's build something extraordinary together.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-semibold glow-blue group"
          >
            <Mail className="mr-2" />
            Start Your Application
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-muted-foreground hover:bg-muted px-10 py-7 text-lg"
          >
            Schedule a Call
          </Button>
        </div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-16 pt-12 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground mb-6">Trusted by founders from</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {['Y Combinator', 'Techstars', '500 Startups', 'AngelList'].map((name) => (
              <span key={name} className="text-lg font-semibold">{name}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;
