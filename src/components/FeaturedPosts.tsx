import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const featuredPosts = [
  {
    id: 1,
    title: "10 Budget-Friendly Protein Sources Every Indian Should Know",
    excerpt: "Discover the complete guide to affordable protein options that will revolutionize your health without breaking your bank. From dal to innovative combinations.",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400&h=250&fit=crop",
    category: "Nutrition",
    readTime: "8 min read",
    author: "Priya Sharma"
  },
  {
    id: 2,
    title: "Home Workout Routine: No Gym, No Problem",
    excerpt: "Complete 4-week transformation program you can do in your small apartment with zero equipment. Scientifically designed for maximum results.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    category: "Fitness",
    readTime: "12 min read",
    author: "Arjun Patel"
  },
  {
    id: 3,
    title: "Healthy Indian Breakfast Ideas Under ₹50",
    excerpt: "15 power-packed breakfast recipes that will energize your mornings and save you thousands monthly. Complete with weekly meal plans.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=250&fit=crop",
    category: "Recipes",
    readTime: "10 min read",
    author: "Meera Singh"
  }
];

const FeaturedPosts = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Handpicked content to kickstart your fitness journey without breaking the bank
          </p>
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-3 inline-block shadow-lg">
            <p className="font-bold">🎉 ALL ARTICLES ARE 100% FREE! 🎉</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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
                  
                  <Link to={`/blog/${post.id}`}>
                    <Button 
                      variant="ghost" 
                      className="w-full group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-300"
                    >
                      Read Free
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="/blog">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-6 text-lg font-semibold rounded-full"
            >
              View All Free Articles
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
