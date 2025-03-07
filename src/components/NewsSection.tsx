
const NewsCard = ({ image, category, title, description, date, author }: {
  image: string;
  category: string;
  title: string;
  description: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
}) => (
  <div className="bg-ferrari-gray rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
    <div className="h-48 relative">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-400">{date}</span>
        <span className="px-3 py-1 bg-ferrari-red text-white text-sm rounded">{category}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex items-center">
        <div>
          <p className="text-white font-medium">{author.name}</p>
          <p className="text-sm text-gray-400">{author.role}</p>
        </div>
      </div>
    </div>
  </div>
);

const NewsSection = () => {
  const news = [
    {
      image: "/lovable-uploads/342776c9-c778-42b2-80c5-7c4bb13f7ab5.png",
      category: "Technology",
      title: "Driving Innovation",
      description: "Discover how Ferrari and IBM are pushing the boundaries of what's possible in motorsport.",
      date: "Oct 10, 2023",
      author: {
        name: "Tech Journalist",
        role: "Tech Analyst"
      }
    },
    {
      image: "/lovable-uploads/e367f05f-879d-4e07-acd2-9339eda55cb2.png",
      category: "Formula 1",
      title: "The Future of Racing",
      description: "Explore the technological advancements shaping the future of Formula 1.",
      date: "Sep 22, 2023",
      author: {
        name: "F1 Expert",
        role: "F1 Analyst"
      }
    },
    {
      image: "/lovable-uploads/ee39c959-179b-4b95-8a43-bfb9e38a8aee.png",
      category: "Teamwork",
      title: "Behind the Scenes",
      description: "Get an exclusive look at the teamwork and strategy behind Ferrari's success.",
      date: "Aug 15, 2023",
      author: {
        name: "Sports Reporter",
        role: "F1 Correspondent"
      }
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">From the Pit Lane</h2>
          <p className="text-gray-300">
            Stay in the loop with the latest insights and stories from the Ferrari-IBM
            collaboration.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
