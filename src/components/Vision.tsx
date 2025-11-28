import { motion } from "framer-motion";
import { CheckCircle2, Zap, Target, Users, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Velocity",
    text: "We don't wait. We build. Our in-house dev team starts working on your MVP the moment the deal is signed.",
    color: "brand-yellow"
  },
  {
    icon: Target,
    title: "Precision",
    text: "No bloat. We focus strictly on the features that validate your core hypothesis and get you to market.",
    color: "brand-red"
  },
  {
    icon: Users,
    title: "Partnership",
    text: "We aren't a distant VC board. We are your technical co-founders, project managers, and biggest fans.",
    color: "brand-purple"
  }
];

const Vision = () => {
  return (
    <section id="vision" className="py-32 px-6 bg-gradient-to-b from-secondary/5 to-background border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-sm mb-6 border border-brand-cyan/20">
            THE NEW STANDARD
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">
            The New Way to <br />
            <span className="text-gradient-cyan drop-shadow-sm">Launch Startups</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            The traditional venture model is broken for early-stage technical founders. You spend months fundraising, then months hiring, before writing a single line of code.
          </p>
          <p className="text-xl text-foreground font-bold mb-8">
            Metro Digitech flips the script. We provide the capital AND the code.
          </p>

          <div className="space-y-5">
            {["Zero recruitment delays", "Institutional-grade code quality", "Aligned equity incentives"].map((item) => (
              <div key={item} className="flex items-center gap-4 group">
                <div className="bg-brand-purple/10 p-1 rounded-full group-hover:bg-brand-purple/20 transition-colors">
                  <CheckCircle2 className="text-brand-purple w-6 h-6" />
                </div>
                <span className="text-lg font-medium group-hover:text-brand-purple transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Cards Visual */}
        <div className="relative">
          {/* Abstract blobs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-cyan/20 rounded-full blur-[80px] animate-blob" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-magenta/20 rounded-full blur-[80px] animate-blob animation-delay-2000" />

          <div className="grid gap-6 relative z-10">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ x: -10 }}
              >
                <Card className={`p-8 border-l-8 border-l-\${feature.color} hover:shadow-[0_10px_30px_-10px_hsl(var(--\${feature.color})/0.3)] transition-all duration-300 glass-card`}>
                  <div className="flex items-start gap-6">
                    <div className={`bg-\${feature.color}/10 p-4 rounded-2xl`}>
                      <feature.icon className={`w-8 h-8 text-\${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 font-display flex items-center gap-2">
                        {feature.title}
                        <ArrowRight className={`w-4 h-4 text-\${feature.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                      </h3>
                      <p className="text-muted-foreground text-lg leading-snug">{feature.text}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;