
const InnovationSection = () => {
  return (
    <section className="py-20 bg-ferrari-dark">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-ferrari-red font-medium">Accelerate with Innovation</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Pioneering the Future of Racing
            </h2>
            <p className="text-gray-300">
              Explore how Ferrari and IBM are revolutionizing the racing world
              with state-of-the-art technology and unparalleled collaboration.
            </p>
            <button className="px-8 py-3 bg-ferrari-red text-white rounded hover:bg-red-700 transition-colors">
              Get Started
            </button>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/f99af83a-2a19-4cf2-95b7-0cb51bada1c2.png"
              alt="Ferrari F1 Car"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
