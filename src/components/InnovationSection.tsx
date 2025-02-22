
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
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-ferrari-red/20 via-ferrari-gray to-black">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,0,0,0.4)_0%,transparent_60%)]" />
              <div className="absolute inset-0 bg-[conic-gradient(from_45deg_at_center,rgba(0,0,0,0.8)_0%,transparent_60%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
