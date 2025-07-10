
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              FitLife India
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Search & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full hover:bg-orange-50"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 rounded-full px-6"
            >
              Join Free
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-md rounded-2xl mt-2 p-4 shadow-xl border border-white/20"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium py-2 px-4 rounded-xl transition-colors ${
                    isActive(item.path)
                      ? "text-orange-600 bg-orange-50"
                      : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-3 pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 rounded-full hover:bg-orange-50"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0 rounded-full"
                >
                  Join Free
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
