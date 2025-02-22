
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">Ferrari<span className="text-ferrari-red">IBM</span></div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-ferrari-red transition-colors">Home</Link>
            <Link to="/gallery" className="text-white hover:text-ferrari-red transition-colors">Gallery</Link>
            <Link to="/events" className="text-white hover:text-ferrari-red transition-colors">Events</Link>
            <button className="px-6 py-2 bg-ferrari-red text-white rounded hover:bg-red-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
