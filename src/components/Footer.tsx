
import { Link } from "react-router-dom";
import { Dumbbell, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-2 rounded-xl">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">FitLife India</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering young Indians to achieve their fitness goals with affordable, 
              practical advice that fits their lifestyle and budget.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Blog", path: "/blog" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-gray-300 hover:text-orange-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-pink-400">Categories</h3>
            <div className="space-y-2">
              {[
                "Fitness Tips",
                "Healthy Recipes",
                "Budget Nutrition",
                "Home Workouts",
                "Meal Planning",
              ].map((category) => (
                <div
                  key={category}
                  className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 FitLife India. Made with <Heart className="w-4 h-4 inline text-red-500" /> for young Indians.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
