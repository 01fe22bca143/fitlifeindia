
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar, Share2, Heart, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

// Mock blog post data (in a real app, this would come from an API)
const blogPosts = {
  "1": {
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
  },
  "2": {
    id: 2,
    title: "Home Workout Routine: No Gym, No Problem",
    content: `
    <p>Who says you need an expensive gym membership to stay fit? With some creativity and dedication, your home can become your personal fitness studio. Here's a complete guide to building muscle and staying healthy right from your living room.</p>

    <h2>The Reality of Home Workouts for Indians</h2>
    <p>Living in small apartments, dealing with nosy neighbors, and managing family schedules - we get it! But these challenges shouldn't stop you from achieving your fitness goals. This routine is designed specifically for Indian homes and lifestyles.</p>

    <h2>Complete Bodyweight Workout Routine</h2>

    <h3>Warm-up (5 minutes)</h3>
    <ul>
      <li>Arm circles - 30 seconds each direction</li>
      <li>Leg swings - 30 seconds each leg</li>
      <li>Jumping jacks - 1 minute</li>
      <li>High knees - 1 minute</li>
      <li>Body twists - 1 minute</li>
    </ul>

    <h3>Main Workout (25-30 minutes)</h3>
    <p><strong>Circuit 1 - Upper Body (repeat 3 times)</strong></p>
    <ul>
      <li>Push-ups - 10-15 reps</li>
      <li>Pike push-ups - 8-12 reps</li>
      <li>Tricep dips (using chair) - 10-15 reps</li>
      <li>Plank - 30-60 seconds</li>
    </ul>

    <p><strong>Circuit 2 - Lower Body (repeat 3 times)</strong></p>
    <ul>
      <li>Squats - 15-20 reps</li>
      <li>Lunges - 10 each leg</li>
      <li>Single-leg glute bridges - 12 each leg</li>
      <li>Wall sit - 30-45 seconds</li>
    </ul>

    <h2>Making It Work in Small Spaces</h2>
    <ul>
      <li>Use a yoga mat or towel to define your workout space</li>
      <li>Move furniture temporarily if needed</li>
      <li>Use stairs for step-ups and calf raises</li>
      <li>Water bottles can serve as light weights</li>
    </ul>

    <h2>Tips for Consistency</h2>
    <ul>
      <li>Start with 3 days per week</li>
      <li>Pick a time when you won't be disturbed</li>
      <li>Play energetic music to stay motivated</li>
      <li>Track your progress in a simple notebook</li>
      <li>Involve family members for accountability</li>
    </ul>

    <h2>Progression Strategy</h2>
    <p>Week 1-2: Focus on form and building the habit<br>
    Week 3-4: Increase repetitions by 2-3<br>
    Week 5-6: Add an extra circuit or extend plank time<br>
    Week 7+: Explore advanced variations</p>

    <h2>Cool Down (5 minutes)</h2>
    <ul>
      <li>Child's pose - 1 minute</li>
      <li>Forward fold - 1 minute</li>
      <li>Spinal twist - 30 seconds each side</li>
      <li>Deep breathing - 2 minutes</li>
    </ul>

    <p><strong>Remember:</strong> Consistency beats intensity. A 20-minute workout done regularly is far better than a 2-hour workout done once a week!</p>
    `,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
    category: "Fitness",
    readTime: "8 min read",
    author: "Arjun Patel",
    date: "December 7, 2024",
    tags: ["home-workout", "bodyweight", "fitness", "no-equipment"]
  },
  "3": {
    id: 3,
    title: "Healthy Indian Breakfast Ideas Under ₹50",
    content: `
    <p>Starting your day with a nutritious breakfast doesn't have to cost a fortune. Here are delicious, healthy Indian breakfast options that will fuel your morning for less than ₹50 per serving.</p>

    <h2>Why Breakfast Matters</h2>
    <p>After 10-12 hours of fasting, your body needs fuel to kickstart metabolism and brain function. A good breakfast sets the tone for your entire day, helping with concentration, energy levels, and weight management.</p>

    <h2>Budget-Friendly Breakfast Ideas</h2>

    <h3>1. Masala Oats Upma - ₹25</h3>
    <p><strong>Ingredients:</strong> 1/2 cup oats, mixed vegetables, spices<br>
    <strong>Nutrition:</strong> High fiber, protein, and vitamins<br>
    <strong>Prep time:</strong> 10 minutes</p>
    <p>Cook oats with mustard seeds, curry leaves, onions, and whatever vegetables you have. Add a squeeze of lemon for extra flavor!</p>

    <h3>2. Moong Dal Chilla - ₹30</h3>
    <p><strong>Ingredients:</strong> 1/2 cup soaked moong dal, spices, vegetables<br>
    <strong>Nutrition:</strong> 15g protein, folate, iron<br>
    <strong>Prep time:</strong> 15 minutes (plus soaking time)</p>
    <p>Blend soaked moong dal with ginger, green chilies, and spices. Make pancakes and stuff with vegetables.</p>

    <h3>3. Poha with Peanuts - ₹20</h3>
    <p><strong>Ingredients:</strong> 1 cup poha, peanuts, curry leaves, lemon<br>
    <strong>Nutrition:</strong> Iron, healthy fats, carbohydrates<br>
    <strong>Prep time:</strong> 12 minutes</p>
    <p>The classic maharashtrian breakfast - light, tasty, and incredibly affordable!</p>

    <h3>4. Banana Ragi Smoothie - ₹35</h3>
    <p><strong>Ingredients:</strong> 2 tbsp ragi flour, 1 banana, milk, jaggery<br>
    <strong>Nutrition:</strong> Calcium, protein, natural sugars<br>
    <strong>Prep time:</strong> 5 minutes</p>
    <p>Perfect for busy mornings - just blend and go!</p>

    <h3>5. Vegetable Daliya - ₹40</h3>
    <p><strong>Ingredients:</strong> 1/2 cup broken wheat, seasonal vegetables<br>
    <strong>Nutrition:</strong> High fiber, protein, vitamins<br>
    <strong>Prep time:</strong> 20 minutes</p>
    <p>A hearty, filling breakfast that will keep you satisfied till lunch.</p>

    <h2>Money-Saving Tips</h2>
    <ul>
      <li>Buy ingredients in bulk during sales</li>
      <li>Use seasonal vegetables for best prices</li>
      <li>Prep ingredients the night before</li>
      <li>Make larger batches and store for 2-3 days</li>
      <li>Use local/regional grains and pulses</li>
    </ul>

    <h2>Weekly Meal Prep Strategy</h2>
    <p><strong>Sunday prep:</strong></p>
    <ul>
      <li>Soak moong dal for the week</li>
      <li>Chop vegetables and store in containers</li>
      <li>Roast and store peanuts/nuts</li>
      <li>Prepare spice mixes</li>
    </ul>

    <h2>Nutritional Balance</h2>
    <p>Each breakfast should ideally include:</p>
    <ul>
      <li><strong>Protein:</strong> Dal, nuts, milk</li>
      <li><strong>Carbohydrates:</strong> Oats, poha, ragi</li>
      <li><strong>Fiber:</strong> Vegetables, whole grains</li>
      <li><strong>Healthy fats:</strong> Nuts, seeds</li>
    </ul>

    <p><strong>Pro tip:</strong> Rotate between these options throughout the week to ensure variety and prevent boredom. Your taste buds and wallet will thank you!</p>
    `,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop",
    category: "Recipes",
    readTime: "6 min read",
    author: "Meera Singh",
    date: "December 6, 2024",
    tags: ["breakfast", "budget", "healthy", "indian-recipes"]
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
      {/* FREE ACCESS Banner */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-4 text-center shadow-lg">
          <p className="font-bold text-lg">🎉 FREE ACCESS - All Content Available for Everyone! 🎉</p>
          <p className="text-sm opacity-90">No signup required, no paywalls - just valuable content!</p>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 py-4">
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
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                FREE ARTICLE
              </div>
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
                <span>Free Article</span>
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
              More Free Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.values(blogPosts).filter(relatedPost => relatedPost.id !== post.id).slice(0, 2).map((relatedPost) => (
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
                      <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                        FREE
                      </div>
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
