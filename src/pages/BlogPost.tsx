
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar, Share2, Heart, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

// Mock blog post data (in a real app, this would come from an API)
const blogPosts = {
  1: {
    id: 1,
    title: "10 Budget-Friendly Protein Sources Every Indian Should Know",
    content: `
    <p>Protein is essential for building and maintaining muscle mass, but many people think they need expensive supplements or imported foods to meet their protein goals. The truth is, India has some of the most affordable and nutritious protein sources available right at your local market.</p>

    <h2>Why Protein Matters for Indians</h2>
    <p>As young Indians, we're often dealing with busy schedules, limited budgets, and family meals that might not always be protein-optimized. Whether you're a student, working professional, or someone just starting their fitness journey, understanding affordable protein sources can transform your health without breaking your bank.</p>

    <h2>Top 10 Budget-Friendly Protein Sources</h2>

    <h3>1. Dal (Lentils) - ₹80-120 per kg</h3>
    <p>The ultimate Indian protein powerhouse! One cup of cooked dal provides about 15-18g of protein. Mix different types of dal throughout the week:</p>
    <ul>
      <li>Moong dal - easily digestible, perfect post-workout</li>
      <li>Chana dal - highest protein content among pulses</li>
      <li>Masoor dal - cooks quickly, great for busy schedules</li>
    </ul>

    <h3>2. Eggs - ₹5-7 per piece</h3>
    <p>At just ₹5-7 per egg, you get 6g of complete protein plus essential vitamins. Hard-boiled eggs make perfect snacks, and you can prepare a week's worth in advance.</p>

    <h3>3. Peanuts - ₹100-150 per kg</h3>
    <p>100g of peanuts contains 25g protein! Buy them raw and roast at home with some salt and turmeric for a healthy, crunchy snack.</p>

    <h3>4. Paneer - ₹300-400 per kg</h3>
    <p>While seemingly expensive, a small piece (100g) gives you 18g protein. Make it last longer by adding it to dal or making paneer bhurji with lots of vegetables.</p>

    <h3>5. Chicken (if non-vegetarian) - ₹180-250 per kg</h3>
    <p>Chicken breast is the leanest option, but thighs are cheaper and still protein-rich. One medium chicken breast provides about 25g protein.</p>

    <h2>Smart Shopping Tips</h2>
    <ul>
      <li>Buy dal in bulk during sales - they last for months</li>
      <li>Choose local brands over premium ones</li>
      <li>Visit wholesale markets for better prices</li>
      <li>Combine incomplete proteins (rice + dal) to make complete proteins</li>
    </ul>

    <h2>Sample Budget Meal Plan</h2>
    <p><strong>Breakfast:</strong> 2 eggs with roti (12g protein) - ₹15<br>
    <strong>Lunch:</strong> Dal rice with vegetables (15g protein) - ₹25<br>
    <strong>Snack:</strong> Handful of peanuts (8g protein) - ₹10<br>
    <strong>Dinner:</strong> Paneer sabzi with roti (20g protein) - ₹40</p>
    <p><strong>Total: 55g protein for just ₹90 per day!</strong></p>

    <h2>Final Thoughts</h2>
    <p>Meeting your protein goals doesn't require expensive supplements or imported foods. With smart shopping and meal planning, you can easily get 1.5-2g protein per kg of body weight using affordable Indian ingredients. Start with these basics, and your body will thank you!</p>
    `,
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&h=400&fit=crop",
    category: "Nutrition",
    readTime: "5 min read",
    author: "Priya Sharma",
    date: "December 8, 2024",
    tags: ["protein", "budget", "nutrition", "indian-food"]
  }
};

const relatedPosts = [
  {
    id: 2,
    title: "Home Workout Routine: No Gym, No Problem",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    category: "Fitness"
  },
  {
    id: 3,
    title: "Healthy Indian Breakfast Ideas Under ₹50",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
    category: "Recipes"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 pt-20">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/blog">
          <Button variant="ghost" className="mb-6 hover:bg-orange-50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Featured Image */}
          <div className="relative mb-8 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0 mb-4">
                {post.category}
              </Badge>
            </div>
          </div>

          {/* Article Meta */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-orange-500" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-pink-500" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-500" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-500" />
                <span>Article</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <Button 
                size="sm" 
                variant="outline"
                className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 rounded-full"
              >
                <Heart className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-full"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-md mb-12">
            <CardContent className="p-8 md:p-12">
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-gray-800 prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:bg-gradient-to-r prose-h2:from-orange-600 prose-h2:to-purple-600 prose-h2:bg-clip-text prose-h2:text-transparent
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-orange-600
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-ul:text-gray-700 prose-ul:mb-6
                  prose-li:mb-2
                  prose-strong:text-gray-800"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>

          {/* Tags */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg mb-12">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="outline"
                  className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 border-orange-200 hover:bg-orange-200 cursor-pointer"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-lg">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0 text-xs">
                        {relatedPost.category}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;
