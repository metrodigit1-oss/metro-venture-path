import Hero from "@/components/Hero";
import MetricsTicker from "@/components/MetricsTicker";
import ThreePillars from "@/components/ThreePillars";
import ProcessJourney from "@/components/ProcessJourney";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <MetricsTicker />
      <ThreePillars />
      <ProcessJourney />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
