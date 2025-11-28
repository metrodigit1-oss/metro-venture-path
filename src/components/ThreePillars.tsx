import { Card } from "@/components/ui/card";
import { Coins, Compass, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const pillars = [
  {
    icon: Coins,
    title: "Seed Capital",
    subtitle: "The Fuel",
    color: "brand-purple",
    description: "Smart money that understands tech. We invest $50K-$500K in pre-seed and seed rounds—but we also roll up our sleeves.",
    features: [
      "Equity + Dev Resources",
      "6-12 month runway",
      "Strategic guidance"
    ]
  },
  {
    icon: Compass,
    title: "Project Management",
    subtitle: "The Navigation",
    color: "brand-magenta",
    description: "We translate investor capital into shippable code. No bloat, no delays—just the straightest line to your MVP.",
    features: [
      "Agile sprint planning",
      "Real-time dashboards",
      "Risk mitigation"
    ]
  },
  {
    icon: Code2,
    title: "Development",
    subtitle: "The Engine",
    color: "brand-red",
    description: "World-class engineers building production-ready products. React, Python, AWS—whatever scales your vision.",
    features: [
      "Full-stack expertise",
      "CI/CD pipelines",
      "Security audits"
    ]
  }
];

const ThreePillars = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 px-6 relative bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            The <span className="text-gradient">Metro Line</span> to Success
          </h2>
          
          {/* Metro Line */}
          <motion.div 
            className="hidden md:block h-1 metro-line mb-8 w-full max-w-[200px] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.2 }}
          />

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three integrated services. One seamless journey. <br />
            From idea to exit, we're with you every station of the way.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card 
                className={`
                  relative p-8 h-full border-2 transition-all duration-500
                  \${hoveredIndex === index 
                    ? \`border-\${pillar.color} shadow-2xl scale-105\` 
                    : 'border-border hover:border-muted-foreground'
                  }
                `}
              >
                {/* Icon */}
                <div className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                  bg-\${pillar.color}/10 border-2 border-\${pillar.color}
                  \${hoveredIndex === index ? 'animate-pulse-glow' : ''}
                `}>
                  <pillar.icon className={`w-8 h-8 text-\${pillar.color}`} />
                </div>

                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-3xl font-display font-bold mb-1">
                    {pillar.title}
                  </h3>
                  <p className={`text-sm font-semibold text-\${pillar.color}`}>
                    {pillar.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-\${pillar.color}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-\${pillar.color}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;