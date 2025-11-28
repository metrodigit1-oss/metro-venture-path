import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, FileText, Hammer, LineChart, Trophy } from "lucide-react";

const stations = [
  {
    icon: Lightbulb,
    title: "Idea Stage",
    description: "You have a vision. We validate it with market research and technical feasibility analysis.",
    color: "brand-yellow"
  },
  {
    icon: FileText,
    title: "Investment Round",
    description: "Smart capital injection. $50K-$500K in exchange for equity—plus our expertise.",
    color: "brand-purple"
  },
  {
    icon: Hammer,
    title: "MVP Development",
    description: "6-12 week sprints to build your minimum viable product. Agile, transparent, on-time.",
    color: "brand-magenta"
  },
  {
    icon: LineChart,
    title: "Market Launch",
    description: "Beta testing, user feedback, iteration. We help you find product-market fit.",
    color: "brand-cyan"
  },
  {
    icon: Trophy,
    title: "Scale & Exit",
    description: "Series A prep, growth hacking, or acquisition. We've been here before.",
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
    <section id="process" className="py-32 px-6 bg-gradient-soft" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
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
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-border">
            <motion.div 
              className="w-full metro-line origin-top"
              style={{ height: lineProgress }}
            />
          </div>

          {/* Stations */}
          <div className="space-y-16">
            {stations.map((station, index) => (
              <motion.div
                key={station.title}
                className="relative pl-24"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Station Dot */}
                <motion.div 
                  className={`absolute left-4 top-2 w-9 h-9 rounded-full bg-${station.color} border-4 border-background flex items-center justify-center`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: index * 0.1 + 0.2 }}
                >
                  <station.icon className="w-4 h-4 text-background" />
                </motion.div>

                {/* Content Card */}
                <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl p-6 hover:border-muted-foreground transition-colors">
                  <h3 className="text-2xl font-display font-bold mb-3">
                    {station.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {station.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessJourney;
