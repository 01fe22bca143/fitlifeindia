
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Search, Dumbbell, Calculator } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-2 rounded-xl">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              FitLife India
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="relative text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="relative text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Blog
            </Link>
            <Link
              to="/diet-planner"
              className="relative text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full flex items-center gap-1"
            >
              <Calculator className="w-4 h-4" />
              Diet Planner
            </Link>
            <Link
              to="/about"
              className="relative text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="relative text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
          </div>

          {/* Search Bar and CTA - Hidden on homepage */}
          {!isHomePage && (
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 bg-white/80"
                />
              </div>
              <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Join Community
              </Button>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/diet-planner"
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium px-4 py-2 flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Calculator className="w-4 h-4" />
                Diet Planner
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              {!isHomePage && (
                <div className="px-4 pt-4 border-t border-gray-200">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="Search articles..."
                      className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-200 focus:border-orange-400 bg-white/80"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-2 rounded-full font-semibold">
                    Join Community
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
