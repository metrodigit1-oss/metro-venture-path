import { motion } from "framer-motion";
import { TrendingUp, Code, Rocket } from "lucide-react";

const metrics = [
  { icon: TrendingUp, label: "Total Valuation Created", value: "$180M+", color: "brand-purple" },
  { icon: Code, label: "Lines of Code Written", value: "2.4M+", color: "brand-magenta" },
  { icon: Rocket, label: "Projects Launched", value: "47", color: "brand-red" },
  { icon: TrendingUp, label: "Average Exit Multiple", value: "8.2x", color: "brand-cyan" },
];

const MetricsTicker = () => {
  return (
    <section className="py-20 border-y border-border bg-gradient-to-r from-brand-purple/5 via-brand-magenta/5 to-brand-red/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className={`w-12 h-12 rounded-xl bg-${metric.color}/10 border border-${metric.color} flex items-center justify-center`}>
                  <metric.icon className={`w-6 h-6 text-${metric.color}`} />
                </div>
              </div>
              <motion.div 
                className={`text-4xl md:text-5xl font-display font-bold mb-2 text-${metric.color}`}
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.2 }}
              >
                {metric.value}
              </motion.div>
              <div className="text-sm text-muted-foreground">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsTicker;
