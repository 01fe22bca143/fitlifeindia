import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar, Play } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "10 Budget-Friendly Protein Sources Every Indian Should Know",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Protein is the building block of life, but many Indians struggle to get enough of it without spending a fortune. Here's your complete guide to affordable protein sources that will transform your health without breaking your bank.</p>
        
        <div class="bg-gradient-to-r from-orange-100 to-pink-100 p-6 rounded-xl border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-orange-800 mb-3">1. Dal (Lentils) - The Protein Powerhouse</h3>
          <p class="text-gray-700">At just ₹80-120 per kg, dal provides 20-25g protein per 100g. Mix different dals like moong, masoor, and chana for a complete amino acid profile.</p>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">2. Eggs - Nature's Perfect Protein</h3>
          <p class="text-gray-700">One egg costs ₹5-6 and provides 6g high-quality protein. Eat 2-3 eggs daily for affordable muscle building.</p>
        </div>
        
        <div class="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl border-l-4 border-purple-500">
          <h3 class="text-xl font-bold text-purple-800 mb-3">3. Paneer - Homemade vs Store-bought</h3>
          <p class="text-gray-700">Make paneer at home for ₹200/kg vs ₹400+ in stores. 100g provides 18g protein plus calcium.</p>
        </div>
        
        <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-yellow-800 mb-3">Weekly Protein Plan (₹500 Budget)</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>2kg Mixed Dal: ₹200</li>
            <li>30 Eggs: ₹180</li>
            <li>500g Paneer ingredients: ₹120</li>
          </ul>
          <p class="mt-3 font-semibold text-yellow-800">Total protein per day: 60-80g for ₹70/day</p>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&h=400&fit=crop",
    category: "Nutrition",
    readTime: "8 min read",
    author: "Priya Sharma",
    date: "Dec 8, 2024"
  },
  {
    id: 2,
    title: "Home Workout Routine: No Gym, No Problem",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Transform your body in 4 weeks with this scientifically designed home workout program. No equipment needed, just dedication and consistency.</p>
        
        <div class="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-xl border-l-4 border-red-500">
          <h3 class="text-xl font-bold text-red-800 mb-3">Week 1-2: Foundation Building</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Day 1: Upper Body</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700">
                <li>Push-ups: 3 sets of 8-12 reps</li>
                <li>Pike push-ups: 3 sets of 5-8 reps</li>
                <li>Tricep dips (chair): 3 sets of 8-10 reps</li>
                <li>Plank: 3 sets of 30-45 seconds</li>
              </ul>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Day 2: Lower Body</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700">
                <li>Bodyweight squats: 3 sets of 15-20 reps</li>
                <li>Lunges: 3 sets of 10 per leg</li>
                <li>Single-leg glute bridges: 3 sets of 12 per leg</li>
                <li>Wall sit: 3 sets of 30-45 seconds</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Week 3-4: Intensity Boost</h3>
          <p class="text-gray-700">Increase reps by 20% and add jump variations to existing exercises.</p>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
    category: "Fitness",
    readTime: "12 min read",
    author: "Arjun Patel",
    date: "Dec 7, 2024"
  },
  {
    id: 3,
    title: "Healthy Indian Breakfast Ideas Under ₹50",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Start your day right with these 15 power-packed breakfast recipes that cost less than ₹50 and provide sustained energy throughout the morning.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-xl border-l-4 border-yellow-500">
            <h3 class="text-lg font-bold text-yellow-800 mb-2">Protein-Rich Moong Dal Chilla (₹25)</h3>
            <p class="text-sm text-gray-600 mb-2"><strong>Ingredients:</strong> 1 cup moong dal, onions, tomatoes, spices</p>
            <p class="text-sm text-gray-600 mb-2"><strong>Nutrition:</strong> 20g protein, 300 calories</p>
            <p class="text-gray-700">Soak dal overnight, grind into batter, add veggies and cook like pancakes.</p>
          </div>
          
          <div class="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-xl border-l-4 border-green-500">
            <h3 class="text-lg font-bold text-green-800 mb-2">Oats Upma with Vegetables (₹30)</h3>
            <p class="text-sm text-gray-600 mb-2"><strong>Ingredients:</strong> 1 cup oats, mixed vegetables, mustard seeds</p>
            <p class="text-sm text-gray-600 mb-2"><strong>Nutrition:</strong> 12g protein, 250 calories, high fiber</p>
            <p class="text-gray-700">Roast oats, sauté with veggies and spices for a South Indian twist.</p>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-l-4 border-purple-500">
          <h3 class="text-xl font-bold text-purple-800 mb-3">Monthly Cost Breakdown</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Moong dal (2kg): ₹200</li>
            <li>Oats (1kg): ₹150</li>
            <li>Vegetables: ₹300</li>
            <li>Spices: ₹100</li>
          </ul>
          <p class="mt-3 font-bold text-lg text-purple-800">Total: ₹750 for 30 healthy breakfasts (₹25/day)</p>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=400&fit=crop",
    category: "Recipes",
    readTime: "10 min read",
    author: "Meera Singh",
    date: "Dec 6, 2024"
  },
  {
    id: 4,
    title: "Mental Health and Fitness: The Indian Wellness Revolution",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Discover the powerful connection between physical fitness and mental well-being through ancient Indian practices combined with modern science.</p>
        
        <div class="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl border-l-4 border-indigo-500">
          <h3 class="text-xl font-bold text-indigo-800 mb-3">The 5-Pillar Indian Wellness System</h3>
          
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Pillar 1: Pranayama (Breathing Techniques)</h4>
              <p class="text-gray-700">Practice Anulom Vilom for 10 minutes daily to reduce stress hormones by 40%.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Pillar 2: Yoga Asanas for Mental Clarity</h4>
              <p class="text-gray-700">Child's pose, downward dog, and warrior poses release tension and improve focus.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Pillar 3: Meditation and Mindfulness</h4>
              <p class="text-gray-700">Start with 5 minutes of Vipassana meditation daily.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Scientific Evidence</h3>
          <p class="text-gray-700">Studies show yoga reduces depression by 50% and anxiety by 60%.</p>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    category: "Wellness",
    readTime: "15 min read",
    author: "Dr. Rajesh Kumar",
    date: "Dec 5, 2024"
  },
  {
    id: 5,
    title: "Street Food Makeover: Healthy Versions of Indian Favorites",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Love street food but hate the guilt? Here are 8 healthy makeovers of popular Indian street foods with 60% fewer calories.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-xl border-l-4 border-orange-500">
            <h3 class="text-lg font-bold text-orange-800 mb-2">Baked Samosa (Instead of Fried)</h3>
            <p class="text-sm text-gray-600 mb-2"><strong>Original:</strong> 350 calories, 20g fat</p>
            <p class="text-sm text-gray-600 mb-2"><strong>Healthy version:</strong> 180 calories, 5g fat</p>
            <p class="text-gray-700">Use whole wheat flour, bake at 180°C for 25 minutes.</p>
          </div>
          
          <div class="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-xl border-l-4 border-yellow-500">
            <h3 class="text-lg font-bold text-yellow-800 mb-2">Air-Fried Pakoras</h3>
            <p class="text-gray-700">Cut oil by 80% using an air fryer or oven-baking method.</p>
          </div>
          
          <div class="bg-gradient-to-br from-green-100 to-teal-100 p-6 rounded-xl border-l-4 border-green-500">
            <h3 class="text-lg font-bold text-green-800 mb-2">Grilled Corn Chaat</h3>
            <p class="text-gray-700">Skip the butter, add lime, chaat masala, and fresh herbs.</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl border-l-4 border-purple-500">
            <h3 class="text-lg font-bold text-purple-800 mb-2">Quinoa Bhel Puri</h3>
            <p class="text-gray-700">Replace puffed rice with quinoa for extra protein.</p>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-blue-800 mb-3">Weekly Street Food Schedule</h3>
          <div class="grid grid-cols-2 gap-4">
            <p class="text-gray-700"><strong>Monday:</strong> Baked samosas</p>
            <p class="text-gray-700"><strong>Wednesday:</strong> Quinoa bhel</p>
            <p class="text-gray-700"><strong>Friday:</strong> Grilled corn chaat</p>
            <p class="text-gray-700"><strong>Sunday:</strong> Air-fried pakoras</p>
          </div>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=400&fit=crop",
    category: "Recipes",
    readTime: "12 min read",
    author: "Chef Ananya",
    date: "Dec 4, 2024"
  },
  {
    id: 6,
    title: "Building Muscle on a Vegetarian Diet: Complete Guide",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Gain serious muscle mass while following a vegetarian lifestyle with this comprehensive guide including 7-day meal plans.</p>
        
        <div class="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Vegetarian Protein Powerhouses</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Paneer:</p>
              <p class="text-sm text-gray-600">18g protein per 100g</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Tofu:</p>
              <p class="text-sm text-gray-600">15g protein per 100g</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Greek yogurt:</p>
              <p class="text-sm text-gray-600">20g protein per 100g</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Quinoa:</p>
              <p class="text-sm text-gray-600">14g protein per 100g</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-blue-800 mb-3">Day 1 Sample Meal Plan</h3>
          <div class="space-y-3">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Breakfast:</p>
              <p class="text-gray-700">Protein smoothie with banana, oats, and peanut butter</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Lunch:</p>
              <p class="text-gray-700">Quinoa pulao with paneer and vegetables</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Dinner:</p>
              <p class="text-gray-700">Dal makhani with brown rice</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-orange-800 mb-3">Expected Results</h3>
          <p class="text-gray-700 text-lg">Gain 0.5-1kg muscle per month with consistent diet and training.</p>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
    category: "Fitness",
    readTime: "18 min read",
    author: "Fitness Coach Rohit",
    date: "Dec 3, 2024"
  },
  {
    id: 7,
    title: "Student's Guide to 15-Minute Healthy Meals",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Quick, nutritious recipes perfect for college students and working professionals. Cook healthy meals in under 15 minutes with ingredients under ₹100.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-xl border-l-4 border-yellow-500">
            <h3 class="text-lg font-bold text-yellow-800 mb-2">Veggie Maggi Upgrade (8 minutes)</h3>
            <p class="text-gray-700">Add eggs, spinach, and carrots to instant noodles for protein and vitamins.</p>
          </div>
          
          <div class="bg-gradient-to-br from-green-100 to-teal-100 p-6 rounded-xl border-l-4 border-green-500">
            <h3 class="text-lg font-bold text-green-800 mb-2">Microwave Poha (5 minutes)</h3>
            <p class="text-gray-700">Heat poha with water, add vegetables and spices in microwave.</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl border-l-4 border-purple-500">
            <h3 class="text-lg font-bold text-purple-800 mb-2">Bread Pizza (10 minutes)</h3>
            <p class="text-gray-700">Whole wheat bread + tomato sauce + cheese + vegetables in oven.</p>
          </div>
          
          <div class="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-xl border-l-4 border-blue-500">
            <h3 class="text-lg font-bold text-blue-800 mb-2">Dal Rice Express (12 minutes)</h3>
            <p class="text-gray-700">Pressure cook moong dal and rice together with vegetables.</p>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-orange-800 mb-3">Shopping List (Weekly - ₹500)</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Eggs (30): ₹180</li>
            <li>Bread (4 loaves): ₹80</li>
            <li>Vegetables: ₹150</li>
            <li>Dal/Rice: ₹90</li>
          </ul>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop",
    category: "Recipes",
    readTime: "9 min read",
    author: "Chef Kavya",
    date: "Dec 2, 2024"
  },
  {
    id: 8,
    title: "Sleep Better, Live Better: Indian Sleep Optimization",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Transform your sleep quality with traditional Indian practices combined with modern sleep science.</p>
        
        <div class="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl border-l-4 border-indigo-500">
          <h3 class="text-xl font-bold text-indigo-800 mb-3">Ancient Ayurvedic Sleep Wisdom</h3>
          
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Follow Your Circadian Rhythm</h4>
              <p class="text-gray-700">Sleep by 10 PM and wake at 6 AM for optimal hormone production.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Evening Rituals</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700">
                <li>Warm milk with turmeric and cardamom</li>
                <li>Oil massage on feet (coconut or sesame)</li>
                <li>Pranayama breathing exercises</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">4-Week Sleep Challenge</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Week 1:</p>
              <p class="text-sm text-gray-600">Fix sleep timing</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Week 2:</p>
              <p class="text-sm text-gray-600">Create evening routine</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Week 3:</p>
              <p class="text-sm text-gray-600">Optimize bedroom</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Week 4:</p>
              <p class="text-sm text-gray-600">Track and adjust</p>
            </div>
          </div>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=400&fit=crop",
    category: "Wellness",
    readTime: "11 min read",
    author: "Dr. Meera Patel",
    date: "Dec 1, 2024"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || ""));

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 pt-20 flex items-center justify-center">
        <p className="text-xl text-gray-600">Article not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <motion.div 
              className="relative h-96 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0">
                    {post.category}
                  </Badge>
                </motion.div>
              </div>
              <motion.div 
                className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                FREE
              </motion.div>
            </motion.div>
            
            <CardHeader className="pb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <CardTitle className="text-3xl font-bold text-gray-800 leading-tight">
                  {post.title}
                </CardTitle>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-6 text-sm text-gray-500 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </motion.div>
            </CardHeader>
            
            <CardContent className="prose prose-lg max-w-none">
              <motion.div 
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              />
            </CardContent>
          </Card>

          {/* Expert Fitness Tips Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <Card className="overflow-hidden shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <Play className="w-6 h-6 text-red-500" />
                  Expert Fitness Tips Video
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/ml6cT4AZdqI"
                    title="Fitness Tips for Beginners"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                  ></iframe>
                </div>
                <p className="mt-4 text-gray-600">
                  Watch this expert-recommended fitness routine that complements the article above. 
                  Perfect for beginners looking to start their fitness journey at home.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
