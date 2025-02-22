
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/d9470d9e-b485-4645-a3c5-eda96dcd312e.png"
          alt="Ferrari F1 Car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 pt-20 z-10 text-center">
        <p className="text-ferrari-red mb-4 tracking-wider animate-fade-in">Join us for the latest updates from the track</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
          Unleashing Innovation on the Fast Track
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up">
          Dive into the thrilling world of Formula 1 with Ferrari and IBM's groundbreaking
          partnership, where cutting-edge technology meets racing excellence.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button className="bg-ferrari-red hover:bg-red-700 text-white px-8 py-6">
            Explore Our Journey
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
