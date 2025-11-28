import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import ThreePillars from "@/components/ThreePillars";
import ProcessJourney from "@/components/ProcessJourney";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Vision />
      <ThreePillars />
      <ProcessJourney />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;