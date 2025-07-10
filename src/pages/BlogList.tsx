
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, User, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "10 Budget-Friendly Protein Sources Every Indian Should Know",
    excerpt: "Discover the complete guide to affordable protein options that will revolutionize your health without breaking your bank. From dal to innovative combinations.",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400&h=250&fit=crop",
    category: "Nutrition",
    readTime: "8 min read",
    author: "Priya Sharma",
    date: "Dec 8, 2024"
  },
  {
    id: 2,
    title: "Home Workout Routine: No Gym, No Problem",
    excerpt: "Complete 4-week transformation program you can do in your small apartment with zero equipment. Scientifically designed for maximum results.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    category: "Fitness",
    readTime: "12 min read",
    author: "Arjun Patel",
    date: "Dec 7, 2024"
  },
  {
    id: 3,
    title: "Healthy Indian Breakfast Ideas Under ₹50",
    excerpt: "15 power-packed breakfast recipes that will energize your mornings and save you thousands monthly. Complete with weekly meal plans.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop",
    category: "Recipes",
    readTime: "10 min read",
    author: "Meera Singh",
    date: "Dec 6, 2024"
  },
  {
    id: 4,
    title: "Mental Health and Fitness: The Indian Wellness Revolution",
    excerpt: "Ancient Indian practices meet modern science for complete wellness. Discover the 5-pillar system that's transforming lives across India.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    category: "Wellness",
    readTime: "15 min read",
    author: "Dr. Rajesh Kumar",
    date: "Dec 5, 2024"
  },
  {
    id: 5,
    title: "Street Food Makeover: Healthy Versions of Indian Favorites",
    excerpt: "Transform your favorite chaats and street foods into healthy powerhouses. 8 complete makeovers with 60% fewer calories but 100% authentic taste.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=250&fit=crop",
    category: "Recipes",
    readTime: "12 min read",
    author: "Chef Ananya",
    date: "Dec 4, 2024"
  },
  {
    id: 6,
    title: "Building Muscle on a Vegetarian Diet: Complete Guide",
    excerpt: "Everything you need to know about gaining serious muscle mass while following a vegetarian lifestyle. Includes 7-day meal plans and supplement guide.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    category: "Fitness",
    readTime: "18 min read",
    author: "Fitness Coach Rohit",
    date: "Dec 3, 2024"
  }
];

const categories = ["All", "Nutrition", "Fitness", "Recipes", "Wellness"];

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 pt-20">
      {/* FREE ACCESS Banner */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-4 text-center shadow-lg">
          <p className="font-bold text-lg">🎉 ALL CONTENT FREE - No Signup Required! 🎉</p>
          <p className="text-sm opacity-90">Premium quality fitness content, completely free for everyone!</p>
        </div>
      </div>

      {/* Header Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical fitness and nutrition advice designed specifically for young Indians who want to stay healthy without spending a fortune.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 bg-white/80"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2 flex-wrap">
                <Filter className="w-5 h-5 text-gray-500" />
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0"
                        : "border-2 border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/70 backdrop-blur-sm overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      FREE
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{post.date}</span>
                      <Link to={`/blog/${post.id}`}>
                        <Button 
                          size="sm"
                          className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 rounded-full px-6"
                        >
                          Read Free
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-gray-500">No articles found matching your search.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogList;
