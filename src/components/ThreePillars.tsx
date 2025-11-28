import { Card } from "@/components/ui/card";
import { Coins, Compass, Code2, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Coins,
    title: "Seed Capital",
    subtitle: "The Fuel",
    color: "brand-purple",
    description: "Smart money that understands tech. We invest $50K-$500K in pre-seed and seed rounds—but we also roll up our sleeves.",
    details: "Our investment committee moves fast. We don't just look at pitch decks; we look at GitHub repositories. We offer founder-friendly terms (SAFE or Convertible Note) designed to get you to your next milestone without giving up control.",
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
    details: "You get a dedicated Technical Product Manager (TPM) who acts as your CTO. They handle sprint planning, ticket grooming, and vendor management, ensuring every dollar spent goes directly into product value.",
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
    details: "Forget freelancing marketplaces. Our in-house engineering pod integrates with your team. We enforce strict code quality standards, automated testing, and scalable cloud architecture from day one.",
    features: [
      "Full-stack expertise",
      "CI/CD pipelines",
      "Security audits"
    ]
  }
];

const ThreePillars = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 px-6 relative bg-background overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-magenta/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            The <span className="text-gradient">Metro Line</span> to Success
          </h2>
          
          {/* Metro Line - Glowing */}
          <motion.div 
            className="hidden md:block h-1.5 metro-line mb-8 w-full max-w-[250px] mx-auto rounded-full shadow-[0_0_20px_hsl(var(--brand-purple))]"
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
              className="h-full"
            >
              <Card 
                className={`
                  relative p-8 h-full border-2 transition-all duration-500 flex flex-col rounded-3xl overflow-hidden
                  \${hoveredIndex === index 
                    ? \`border-\${pillar.color} shadow-[0_0_40px_-10px_hsl(var(--\${pillar.color})/0.4)] scale-105 z-10\` 
                    : 'border-border/50 bg-white/50 backdrop-blur-sm'
                  }
                `}
              >
                {/* Icon */}
                <div className={`
                  w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300
                  bg-\${pillar.color}/10 border-2 border-\${pillar.color}/20
                  \${hoveredIndex === index ? 'scale-110 rotate-3 border-' + pillar.color : ''}
                `}>
                  <pillar.icon className={`w-10 h-10 text-\${pillar.color}`} />
                </div>

                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-3xl font-display font-bold mb-1">
                    {pillar.title}
                  </h3>
                  <p className={`text-sm font-bold tracking-wider uppercase text-\${pillar.color}`}>
                    {pillar.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed font-medium">
                  {pillar.description}
                </p>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mb-6"
                    >
                      <p className="text-sm text-foreground/90 leading-relaxed bg-gradient-to-br from-white to-secondary/10 p-5 rounded-xl border border-secondary/20 shadow-inner">
                        {pillar.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-foreground/80">
                      <div className={`w-2 h-2 rounded-full bg-\${pillar.color} shadow-[0_0_10px_hsl(var(--\${pillar.color}))]`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Toggle Button */}
                <Button 
                  variant="ghost" 
                  className={`w-full justify-between group hover:bg-blue-700 rounded-xl`}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <span className="text-sm font-bold">
                    {expandedIndex === index ? "Show Less" : "Learn More"}
                  </span>
                  {expandedIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                  )}
                </Button>

                {/* Hover Effect Line - Bottom Glow */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1.5 bg-\${pillar.color}`}
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