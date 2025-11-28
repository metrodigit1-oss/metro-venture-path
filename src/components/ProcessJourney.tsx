import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, FileText, Hammer, LineChart, Trophy } from "lucide-react";

const stations = [
  {
    icon: Lightbulb,
    title: "Idea Stage",
    description: "You have a vision. We validate it with market research and technical feasibility analysis.",
    details: "Validation sprints to ensure product-market fit before writing a line of code.",
    color: "brand-yellow"
  },
  {
    icon: FileText,
    title: "Investment Round",
    description: "Smart capital injection. $50K-$500K in exchange for equity—plus our expertise.",
    details: "Fast due diligence process focusing on founder capability and market size.",
    color: "brand-purple"
  },
  {
    icon: Hammer,
    title: "MVP Development",
    description: "6-12 week sprints to build your minimum viable product. Agile, transparent, on-time.",
    details: "Weekly demos and continuous deployment so you always see progress.",
    color: "brand-magenta"
  },
  {
    icon: LineChart,
    title: "Market Launch",
    description: "Beta testing, user feedback, iteration. We help you find product-market fit.",
    details: "Analytics implementation and user behavior tracking to guide iteration.",
    color: "brand-cyan"
  },
  {
    icon: Trophy,
    title: "Scale & Exit",
    description: "Series A prep, growth hacking, or acquisition. We've been here before.",
    details: "Introduction to downstream VCs and strategic acquisition partners.",
    color: "brand-red"
  }
];

const ProcessJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-32 px-6 bg-gradient-to-b from-background to-secondary/5 overflow-hidden" ref={containerRef}>
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Your Journey, <span className="text-gradient">Station by Station</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From napkin sketch to product launch—here's the Metro Line.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Metro Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2">
            <motion.div 
              className="w-full metro-line origin-top"
              style={{ height: lineProgress }}
            />
          </div>

          {/* Stations */}
          <div className="space-y-24">
            {stations.map((station, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={station.title}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Content Side */}
                  <div className="flex-1 w-full pl-12 md:pl-0">
                    <div className={`bg-card border border-border p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-l-${station.color} md:border-l-border md:${isEven ? `border-r-4 border-r-${station.color}` : `border-l-4 border-l-${station.color}`}`}>
                      <h3 className="text-2xl font-display font-bold mb-3 flex items-center gap-3">
                        {station.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {station.description}
                      </p>
                      <p className="text-sm font-medium text-foreground/80 bg-secondary/50 p-3 rounded-lg">
                        {station.details}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div 
                      className={`w-12 h-12 rounded-full bg-background border-4 border-${station.color} flex items-center justify-center shadow-[0_0_20px_-5px_var(--${station.color})]`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <station.icon className={`w-5 h-5 text-${station.color}`} />
                    </motion.div>
                  </div>

                  {/* Empty Side for layout balance */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessJourney;