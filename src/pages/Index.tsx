
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InnovationSection from "@/components/InnovationSection";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="bg-ferrari-dark min-h-screen">
      <Navbar />
      <HeroSection />
      <InnovationSection />
      <NewsSection />
    </div>
  );
};

export default Index;
