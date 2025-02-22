
const NewsCard = ({ image, date, category, title, description, author }: {
  image: string;
  date: string;
  category: string;
  title: string;
  description: string;
  author: {
    name: string;
    role: string;
  };
}) => (
  <div className="bg-ferrari-gray rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-400">{date}</span>
        <span className="px-3 py-1 bg-ferrari-red text-white text-sm rounded">{category}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex items-center">
        <div className="ml-3">
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
      image: "/lovable-uploads/11e8a49b-74e4-49aa-a157-d86c92d1f2f8.png",
      date: "Oct 10, 2023",
      category: "Technology",
      title: "Driving Innovation",
      description: "Discover how Ferrari and IBM are pushing the boundaries of what's possible in motorsport.",
      author: {
        name: "Tech Journalist",
        role: "Tech Analyst"
      }
    },
    {
      image: "/lovable-uploads/94958975-3adf-484b-88a3-8ac67c1b4012.png",
      date: "Sep 22, 2023",
      category: "Formula 1",
      title: "The Future of Racing",
      description: "Explore the technological advancements shaping the future of Formula 1.",
      author: {
        name: "F1 Expert",
        role: "F1 Analyst"
      }
    },
    {
      image: "/lovable-uploads/e9346594-1f5a-4058-b079-31f93481c85c.png",
      date: "Aug 15, 2023",
      category: "Teamwork",
      title: "Behind the Scenes",
      description: "Get an exclusive look at the teamwork and strategy behind Ferrari's success.",
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
