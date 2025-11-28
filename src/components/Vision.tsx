import { motion } from "framer-motion";
import { CheckCircle2, Zap, Target, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Velocity",
    text: "We don't wait. We build. Our in-house dev team starts working on your MVP the moment the deal is signed."
  },
  {
    icon: Target,
    title: "Precision",
    text: "No bloat. We focus strictly on the features that validate your core hypothesis and get you to market."
  },
  {
    icon: Users,
    title: "Partnership",
    text: "We aren't a distant VC board. We are your technical co-founders, project managers, and biggest fans."
  }
];

const Vision = () => {
  return (
    <section id="vision" className="py-24 px-6 bg-secondary/5 border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            The New Way to <br />
            <span className="text-gradient">Launch Startups</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            The traditional venture model is broken for early-stage technical founders. You spend months fundraising, then months hiring, before writing a single line of code.
          </p>
          <p className="text-lg text-foreground font-medium mb-8">
            Metro Digitech flips the script. We provide the capital AND the code.
          </p>

          <div className="space-y-4">
            {["Zero recruitment delays", "Institutional-grade code quality", "Aligned equity incentives"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-purple w-6 h-6" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Cards Visual */}
        <div className="relative">
          {/* Abstract blobs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-cyan/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-magenta/20 rounded-full blur-3xl" />

          <div className="grid gap-6 relative z-10">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <Card className="p-6 border-l-4 border-l-brand-purple hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 font-display">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.text}</p>
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