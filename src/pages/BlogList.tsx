
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
    author: "Nutritionist Team",
    date: "Dec 8, 2024"
  },
  {
    id: 2,
    title: "Home Workout Routine: No Gym, No Problem",
    excerpt: "Complete 4-week transformation program you can do in your small apartment with zero equipment. Scientifically designed for maximum results.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    category: "Fitness",
    readTime: "12 min read",
    author: "Fitness Team",
    date: "Dec 7, 2024"
  },
  {
    id: 3,
    title: "Healthy Indian Breakfast Ideas Under ₹50",
    excerpt: "15 power-packed breakfast recipes that will energize your mornings and save you thousands monthly. Complete with weekly meal plans.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop",
    category: "Recipes",
    readTime: "10 min read",
    author: "Recipe Team",
    date: "Dec 6, 2024"
  },
  {
    id: 4,
    title: "Mental Health and Fitness: The Indian Wellness Revolution",
    excerpt: "Ancient Indian practices meet modern science for complete wellness. Discover the 5-pillar system that's transforming lives across India.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    category: "Wellness",
    readTime: "15 min read",
    author: "Wellness Team",
    date: "Dec 5, 2024"
  },
  {
    id: 5,
    title: "Street Food Makeover: Healthy Versions of Indian Favorites",
    excerpt: "Transform your favorite chaats and street foods into healthy powerhouses. 8 complete makeovers with 60% fewer calories but 100% authentic taste.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=250&fit=crop",
    category: "Recipes",
    readTime: "12 min read",
    author: "Recipe Team",
    date: "Dec 4, 2024"
  },
  {
    id: 6,
    title: "Building Muscle on a Vegetarian Diet: Complete Guide",
    excerpt: "Everything you need to know about gaining serious muscle mass while following a vegetarian lifestyle. Includes 7-day meal plans and supplement guide.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    category: "Fitness",
    readTime: "18 min read",
    author: "Fitness Team",
    date: "Dec 3, 2024"
  },
  {
    id: 7,
    title: "Student's Guide to 15-Minute Healthy Meals",
    excerpt: "Quick, nutritious recipes perfect for college students and working professionals. Cook healthy meals in under 15 minutes with ingredients under ₹100.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=250&fit=crop",
    category: "Recipes",
    readTime: "9 min read",
    author: "Recipe Team",
    date: "Dec 2, 2024"
  },
  {
    id: 8,
    title: "Sleep Better, Live Better: Indian Sleep Optimization",
    excerpt: "Ancient Ayurvedic wisdom meets modern sleep science. Transform your sleep quality with traditional Indian practices and scientific techniques.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=250&fit=crop",
    category: "Wellness",
    readTime: "11 min read",
    author: "Wellness Team",
    date: "Dec 1, 2024"
  },
  {
    id: 9,
    title: "Water Therapy: The Indian Way to Weight Loss",
    excerpt: "Discover how proper hydration combined with traditional Indian water therapy can accelerate weight loss. Includes timing charts and flavor combinations.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop",
    category: "Weight Loss",
    readTime: "7 min read",
    author: "Wellness Team",
    date: "Nov 30, 2024"
  },
  {
    id: 10,
    title: "Desk Job Detox: 5-Minute Office Exercises",
    excerpt: "Combat sitting disease with these discrete office exercises. Improve posture, reduce back pain, and boost energy without leaving your desk.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=250&fit=crop",
    category: "Fitness",
    readTime: "6 min read",
    author: "Fitness Team",
    date: "Nov 29, 2024"
  },
  {
    id: 11,
    title: "Indian Superfoods on a Shoestring Budget",
    excerpt: "Discover 12 powerful Indian superfoods that cost less than ₹20 each. Boost immunity, energy, and health without expensive supplements.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop",
    category: "Nutrition",
    readTime: "13 min read",
    author: "Nutritionist Team",
    date: "Nov 28, 2024"
  },
  {
    id: 12,
    title: "Stress-Free Cooking: One-Pot Indian Meals",
    excerpt: "Master the art of one-pot cooking with these 10 nutritious Indian recipes. Save time, reduce dishes, and maintain authentic flavors.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=250&fit=crop",
    category: "Recipes",
    readTime: "14 min read",
    author: "Recipe Team",
    date: "Nov 27, 2024"
  },
  // 200 Healthy Recipes
  {
    id: 13,
    title: "200 Healthy Indian Recipes Collection",
    excerpt: "Complete collection of 200 nutritious Indian recipes for every meal. From traditional dal to modern fusion dishes, all budget-friendly and delicious.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=250&fit=crop",
    category: "Recipes",
    readTime: "45 min read",
    author: "Recipe Team",
    date: "Nov 26, 2024"
  },
  {
    id: 14,
    title: "Breakfast Recipes: 50 Healthy Indian Morning Meals",
    excerpt: "Start your day right with 50 nutritious breakfast recipes. From poha variations to healthy parathas, energize your mornings the Indian way.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop",
    category: "Recipes",
    readTime: "25 min read",
    author: "Recipe Team",
    date: "Nov 25, 2024"
  },
  {
    id: 15,
    title: "Lunch Box Recipes: 40 Office-Friendly Meals",
    excerpt: "Pack healthy, tasty lunches with these 40 office-friendly recipes. Keep your meals interesting and nutritious throughout the work week.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=250&fit=crop",
    category: "Recipes",
    readTime: "20 min read",
    author: "Recipe Team",
    date: "Nov 24, 2024"
  },
  {
    id: 16,
    title: "Dinner Delights: 50 Light Evening Meals",
    excerpt: "End your day with these 50 light, healthy dinner recipes. Perfect for weight management and better sleep quality.",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=250&fit=crop",
    category: "Recipes",
    readTime: "30 min read",
    author: "Recipe Team",
    date: "Nov 23, 2024"
  },
  {
    id: 17,
    title: "Snack Attack: 60 Healthy Indian Snacks",
    excerpt: "Beat hunger pangs with 60 healthy snack recipes. From roasted chana to homemade energy bars, snack smart and stay energized.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
    category: "Recipes",
    readTime: "35 min read",
    author: "Recipe Team",
    date: "Nov 22, 2024"
  },
  // 50 Workout Plans
  {
    id: 18,
    title: "50 Complete Workout Plans for Every Fitness Level",
    excerpt: "Comprehensive collection of 50 workout plans. From beginner home routines to advanced strength training, find your perfect fitness match.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    category: "Fitness",
    readTime: "40 min read",
    author: "Fitness Team",
    date: "Nov 21, 2024"
  },
  {
    id: 19,
    title: "Beginner's Fitness Journey: 10 Starter Workout Plans",
    excerpt: "Start your fitness journey with these 10 beginner-friendly workout plans. Build strength, endurance, and confidence from day one.",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=400&h=250&fit=crop",
    category: "Fitness",
    readTime: "15 min read",
    author: "Fitness Team",
    date: "Nov 20, 2024"
  },
  {
    id: 20,
    title: "HIIT Workouts Collection: 15 High-Intensity Plans",
    excerpt: "Burn maximum calories in minimum time with these 15 HIIT workout plans. Perfect for busy schedules and quick results.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=250&fit=crop",
    category: "Fitness",
    readTime: "18 min read",
    author: "Fitness Team",
    date: "Nov 19, 2024"
  },
  {
    id: 21,
    title: "Strength Training: 15 Muscle Building Programs",
    excerpt: "Build serious muscle with these 15 strength training programs. Progressive overload techniques for maximum muscle growth.",
    image: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=400&h=250&fit=crop",
    category: "Fitness",
    readTime: "22 min read",
    author: "Fitness Team",
    date: "Nov 18, 2024"
  },
  {
    id: 22,
    title: "Yoga & Flexibility: 10 Complete Yoga Sequences",
    excerpt: "Improve flexibility, balance, and mental well-being with these 10 complete yoga sequences designed for Indian practitioners.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
    category: "Fitness",
    readTime: "25 min read",
    author: "Fitness Team",
    date: "Nov 17, 2024"
  },
  // Additional diverse topics
  {
    id: 23,
    title: "Seasonal Eating: Monsoon Health Guide",
    excerpt: "Navigate monsoon season with this complete health guide. Boost immunity, prevent infections, and enjoy seasonal foods safely.",
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=400&h=250&fit=crop",
    category: "Wellness",
    readTime: "12 min read",
    author: "Wellness Team",
    date: "Nov 16, 2024"
  },
  {
    id: 24,
    title: "Pregnancy Nutrition: Indian Diet for Expecting Mothers",
    excerpt: "Complete nutrition guide for Indian expecting mothers. Traditional foods that support healthy pregnancy and baby development.",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400&h=250&fit=crop",
    category: "Nutrition",
    readTime: "20 min read",
    author: "Nutritionist Team",
    date: "Nov 15, 2024"
  },
  {
    id: 25,
    title: "Children's Nutrition: Healthy Eating for Indian Kids",
    excerpt: "Ensure your children get proper nutrition with these child-friendly Indian recipes and feeding strategies for growing minds and bodies.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop",
    category: "Nutrition",
    readTime: "16 min read",
    author: "Nutritionist Team",
    date: "Nov 14, 2024"
  },
  {
    id: 26,
    title: "Senior Fitness: Exercise Plans for Older Adults",
    excerpt: "Safe, effective exercise plans designed specifically for senior citizens. Maintain mobility, strength, and independence with age.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    category: "Fitness",
    readTime: "14 min read",
    author: "Fitness Team",
    date: "Nov 13, 2024"
  },
  {
    id: 27,
    title: "Diabetes Management: Indian Diet & Exercise Guide",
    excerpt: "Comprehensive guide to managing diabetes through traditional Indian foods and targeted exercises. Control blood sugar naturally.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop",
    category: "Wellness",
    readTime: "18 min read",
    author: "Wellness Team",
    date: "Nov 12, 2024"
  },
  {
    id: 28,
    title: "Heart Health: Cardio-Friendly Indian Recipes",
    excerpt: "Protect your heart with these cardio-friendly Indian recipes. Lower cholesterol and improve heart health with traditional ingredients.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop",
    category: "Nutrition",
    readTime: "15 min read",
    author: "Nutritionist Team",
    date: "Nov 11, 2024"
  }
];

const categories = ["All", "Nutrition", "Fitness", "Recipes", "Wellness", "Weight Loss"];

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
