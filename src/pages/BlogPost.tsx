import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "10 Budget-Friendly Protein Sources Every Indian Should Know",
    content: `
      <p>Protein is the building block of life, but many Indians struggle to get enough of it without spending a fortune. Here's your complete guide to affordable protein sources that will transform your health without breaking your bank.</p>
      
      <h3>1. Dal (Lentils) - The Protein Powerhouse</h3>
      <p>At just ₹80-120 per kg, dal provides 20-25g protein per 100g. Mix different dals like moong, masoor, and chana for a complete amino acid profile.</p>
      
      <h3>2. Eggs - Nature's Perfect Protein</h3>
      <p>One egg costs ₹5-6 and provides 6g high-quality protein. Eat 2-3 eggs daily for affordable muscle building.</p>
      
      <h3>3. Paneer - Homemade vs Store-bought</h3>
      <p>Make paneer at home for ₹200/kg vs ₹400+ in stores. 100g provides 18g protein plus calcium.</p>
      
      <h3>4. Rajma and Chickpeas</h3>
      <p>₹100-150/kg, these legumes provide 15-20g protein per 100g when cooked. Perfect for curries and salads.</p>
      
      <h3>5. Chicken (When on Sale)</h3>
      <p>Buy in bulk during sales at ₹150-200/kg. 100g provides 25g protein. Store properly and use within 2 days.</p>
      
      <h3>Weekly Protein Plan (₹500 Budget)</h3>
      <ul>
        <li>2kg Mixed Dal: ₹200</li>
        <li>30 Eggs: ₹180</li>
        <li>500g Paneer ingredients: ₹120</li>
      </ul>
      <p>Total protein per day: 60-80g for ₹70/day</p>
      
      <h3>Pro Tips for Maximum Savings</h3>
      <p>• Buy in bulk during festivals</p>
      <p>• Soak lentils overnight to reduce cooking time</p>
      <p>• Combine incomplete proteins (rice + dal) for better absorption</p>
      <p>• Make protein smoothies with milk powder</p>
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
      <p>Transform your body in 4 weeks with this scientifically designed home workout program. No equipment needed, just dedication and consistency.</p>
      
      <h3>Week 1-2: Foundation Building</h3>
      <p><strong>Day 1: Upper Body</strong></p>
      <ul>
        <li>Push-ups: 3 sets of 8-12 reps</li>
        <li>Pike push-ups: 3 sets of 5-8 reps</li>
        <li>Tricep dips (chair): 3 sets of 8-10 reps</li>
        <li>Plank: 3 sets of 30-45 seconds</li>
      </ul>
      
      <p><strong>Day 2: Lower Body</strong></p>
      <ul>
        <li>Bodyweight squats: 3 sets of 15-20 reps</li>
        <li>Lunges: 3 sets of 10 per leg</li>
        <li>Single-leg glute bridges: 3 sets of 12 per leg</li>
        <li>Wall sit: 3 sets of 30-45 seconds</li>
      </ul>
      
      <h3>Week 3-4: Intensity Boost</h3>
      <p>Increase reps by 20% and add jump variations to existing exercises.</p>
      
      <h3>Nutrition Support</h3>
      <p>• Eat protein within 30 minutes post-workout</p>
      <p>• Stay hydrated with 3-4 liters water daily</p>
      <p>• Get 7-8 hours sleep for recovery</p>
      
      <h3>Progress Tracking</h3>
      <p>Take photos and measurements weekly. Focus on how you feel rather than just weight.</p>
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
      <p>Start your day right with these 15 power-packed breakfast recipes that cost less than ₹50 and provide sustained energy throughout the morning.</p>
      
      <h3>1. Protein-Rich Moong Dal Chilla (₹25)</h3>
      <p><strong>Ingredients:</strong> 1 cup moong dal, onions, tomatoes, spices</p>
      <p><strong>Nutrition:</strong> 20g protein, 300 calories</p>
      <p>Soak dal overnight, grind into batter, add veggies and cook like pancakes.</p>
      
      <h3>2. Oats Upma with Vegetables (₹30)</h3>
      <p><strong>Ingredients:</strong> 1 cup oats, mixed vegetables, mustard seeds</p>
      <p><strong>Nutrition:</strong> 12g protein, 250 calories, high fiber</p>
      <p>Roast oats, sauté with veggies and spices for a South Indian twist.</p>
      
      <h3>3. Besan Cheela with Spinach (₹20)</h3>
      <p><strong>Ingredients:</strong> Gram flour, spinach, turmeric, chili</p>
      <p><strong>Nutrition:</strong> 15g protein, rich in iron</p>
      
      <h3>4. Quinoa Poha (₹40)</h3>
      <p>Replace rice poha with quinoa for double the protein content.</p>
      
      <h3>5. Sprouted Mung Salad (₹25)</h3>
      <p>High in protein and enzymes, perfect for digestion.</p>
      
      <h3>Weekly Meal Prep Strategy</h3>
      <p>• Soak lentils and sprouts on Sunday</p>
      <p>• Pre-cut vegetables for 3 days</p>
      <p>• Make batter in batches</p>
      
      <h3>Cost Breakdown (Monthly)</h3>
      <ul>
        <li>Moong dal (2kg): ₹200</li>
        <li>Oats (1kg): ₹150</li>
        <li>Vegetables: ₹300</li>
        <li>Spices: ₹100</li>
      </ul>
      <p><strong>Total: ₹750 for 30 healthy breakfasts (₹25/day)</strong></p>
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
      <p>Discover the powerful connection between physical fitness and mental well-being through ancient Indian practices combined with modern science.</p>
      
      <h3>The 5-Pillar Indian Wellness System</h3>
      
      <h3>Pillar 1: Pranayama (Breathing Techniques)</h3>
      <p>Practice Anulom Vilom for 10 minutes daily to reduce stress hormones by 40%.</p>
      
      <h3>Pillar 2: Yoga Asanas for Mental Clarity</h3>
      <p>Child's pose, downward dog, and warrior poses release tension and improve focus.</p>
      
      <h3>Pillar 3: Meditation and Mindfulness</h3>
      <p>Start with 5 minutes of Vipassana meditation daily.</p>
      
      <h3>Pillar 4: Ayurvedic Nutrition</h3>
      <p>Eat according to your dosha for optimal mental health.</p>
      
      <h3>Pillar 5: Physical Activity</h3>
      <p>Regular exercise increases endorphins and reduces anxiety.</p>
      
      <h3>Scientific Evidence</h3>
      <p>Studies show yoga reduces depression by 50% and anxiety by 60%.</p>
      
      <h3>Daily Routine for Mental Wellness</h3>
      <p>Morning: 10 min pranayama + 20 min yoga</p>
      <p>Evening: 30 min walk + 10 min meditation</p>
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
      <p>Love street food but hate the guilt? Here are 8 healthy makeovers of popular Indian street foods with 60% fewer calories.</p>
      
      <h3>1. Baked Samosa (Instead of Fried)</h3>
      <p><strong>Original:</strong> 350 calories, 20g fat</p>
      <p><strong>Healthy version:</strong> 180 calories, 5g fat</p>
      <p>Use whole wheat flour, bake at 180°C for 25 minutes.</p>
      
      <h3>2. Air-Fried Pakoras</h3>
      <p>Cut oil by 80% using an air fryer or oven-baking method.</p>
      
      <h3>3. Grilled Corn Chaat</h3>
      <p>Skip the butter, add lime, chaat masala, and fresh herbs.</p>
      
      <h3>4. Quinoa Bhel Puri</h3>
      <p>Replace puffed rice with quinoa for extra protein.</p>
      
      <h3>5. Baked Aloo Tikki</h3>
      <p>Pan-sear with minimal oil instead of deep frying.</p>
      
      <h3>Healthy Chutneys</h3>
      <p>• Mint-coriander without oil</p>
      <p>• Tamarind date chutney with jaggery</p>
      
      <h3>Weekly Street Food Schedule</h3>
      <p>Monday: Baked samosas</p>
      <p>Wednesday: Quinoa bhel</p>
      <p>Friday: Grilled corn chaat</p>
      <p>Sunday: Air-fried pakoras</p>
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
      <p>Gain serious muscle mass while following a vegetarian lifestyle with this comprehensive guide including 7-day meal plans.</p>
      
      <h3>Vegetarian Protein Powerhouses</h3>
      <p><strong>Paneer:</strong> 18g protein per 100g</p>
      <p><strong>Tofu:</strong> 15g protein per 100g</p>
      <p><strong>Greek yogurt:</strong> 20g protein per 100g</p>
      <p><strong>Quinoa:</strong> 14g protein per 100g</p>
      
      <h3>7-Day Muscle Building Meal Plan</h3>
      
      <h3>Day 1 Sample</h3>
      <p><strong>Breakfast:</strong> Protein smoothie with banana, oats, and peanut butter</p>
      <p><strong>Lunch:</strong> Quinoa pulao with paneer and vegetables</p>
      <p><strong>Dinner:</strong> Dal makhani with brown rice</p>
      <p><strong>Snacks:</strong> Roasted chickpeas, Greek yogurt</p>
      
      <h3>Supplement Guide</h3>
      <p>• Whey protein (if lacto-vegetarian): 25g post-workout</p>
      <p>• Creatine monohydrate: 5g daily</p>
      <p>• Vitamin B12: 1000mcg weekly</p>
      
      <h3>Workout Schedule</h3>
      <p>3 days strength training + 2 days cardio + 2 rest days</p>
      
      <h3>Expected Results</h3>
      <p>Gain 0.5-1kg muscle per month with consistent diet and training.</p>
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
      <p>Quick, nutritious recipes perfect for college students and working professionals. Cook healthy meals in under 15 minutes with ingredients under ₹100.</p>
      
      <h3>5 Super Quick Recipes</h3>
      
      <h3>1. Veggie Maggi Upgrade (8 minutes)</h3>
      <p>Add eggs, spinach, and carrots to instant noodles for protein and vitamins.</p>
      
      <h3>2. Microwave Poha (5 minutes)</h3>
      <p>Heat poha with water, add vegetables and spices in microwave.</p>
      
      <h3>3. Bread Pizza (10 minutes)</h3>
      <p>Whole wheat bread + tomato sauce + cheese + vegetables in oven.</p>
      
      <h3>4. Dal Rice Express (12 minutes)</h3>
      <p>Pressure cook moong dal and rice together with vegetables.</p>
      
      <h3>5. Smoothie Bowl (3 minutes)</h3>
      <p>Blend fruits with yogurt, top with nuts and seeds.</p>
      
      <h3>Shopping List (Weekly - ₹500)</h3>
      <ul>
        <li>Eggs (30): ₹180</li>
        <li>Bread (4 loaves): ₹80</li>
        <li>Vegetables: ₹150</li>
        <li>Dal/Rice: ₹90</li>
      </ul>
      
      <h3>Meal Prep Hacks</h3>
      <p>• Pre-cut vegetables on Sunday</p>
      <p>• Cook rice in bulk</p>
      <p>• Keep boiled eggs ready</p>
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
      <p>Transform your sleep quality with traditional Indian practices combined with modern sleep science.</p>
      
      <h3>Ancient Ayurvedic Sleep Wisdom</h3>
      
      <h3>1. Follow Your Circadian Rhythm</h3>
      <p>Sleep by 10 PM and wake at 6 AM for optimal hormone production.</p>
      
      <h3>2. Evening Rituals</h3>
      <p>• Warm milk with turmeric and cardamom</p>
      <p>• Oil massage on feet (coconut or sesame)</p>
      <p>• Pranayama breathing exercises</p>
      
      <h3>3. Bedroom Optimization</h3>
      <p>• Temperature: 18-22°C</p>
      <p>• No screens 1 hour before bed</p>
      <p>• Use essential oils like lavender</p>
      
      <h3>Modern Sleep Science</h3>
      <p>Studies show Indians who follow traditional sleep patterns have 40% better sleep quality.</p>
      
      <h3>Sleep-Inducing Foods</h3>
      <p>• Almonds (magnesium)</p>
      <p>• Cherries (natural melatonin)</p>
      <p>• Chamomile tea</p>
      
      <h3>4-Week Sleep Challenge</h3>
      <p>Week 1: Fix sleep timing</p>
      <p>Week 2: Create evening routine</p>
      <p>Week 3: Optimize bedroom</p>
      <p>Week 4: Track and adjust</p>
    `,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=400&fit=crop",
    category: "Wellness",
    readTime: "11 min read",
    author: "Dr. Meera Patel",
    date: "Dec 1, 2024"
  },
  {
    id: 9,
    title: "Water Therapy: The Indian Way to Weight Loss",
    content: `
      <p>Discover how proper hydration combined with traditional Indian water therapy can accelerate weight loss naturally.</p>
      
      <h3>Traditional Indian Water Therapy</h3>
      
      <h3>1. Morning Water Ritual</h3>
      <p>Drink 1 liter of room temperature water immediately after waking up.</p>
      
      <h3>2. Copper Water Benefits</h3>
      <p>Store water in copper vessel overnight for antimicrobial properties.</p>
      
      <h3>3. Timing Chart</h3>
      <ul>
        <li>6 AM: 2 glasses (empty stomach)</li>
        <li>30 min before meals: 1 glass</li>
        <li>2 hours after meals: 1 glass</li>
        <li>Before bed: 1 glass</li>
      </ul>
      
      <h3>Flavored Water Combinations</h3>
      <p>• Lemon + mint + cucumber</p>
      <p>• Ginger + lemon + honey</p>
      <p>• Fennel seed water</p>
      <p>• Ajwain water for digestion</p>
      
      <h3>Weight Loss Science</h3>
      <p>Proper hydration boosts metabolism by 30% and reduces hunger by 40%.</p>
      
      <h3>30-Day Water Challenge</h3>
      <p>Follow the timing chart and track your weight loss journey.</p>
    `,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
    category: "Weight Loss",
    readTime: "7 min read",
    author: "Nutritionist Ravi",
    date: "Nov 30, 2024"
  },
  {
    id: 10,
    title: "Desk Job Detox: 5-Minute Office Exercises",
    content: `
      <p>Combat sitting disease with these discrete office exercises that improve posture, reduce back pain, and boost energy.</p>
      
      <h3>The Sitting Problem</h3>
      <p>Average Indian office worker sits 8-10 hours daily, leading to:</p>
      <ul>
        <li>Lower back pain (80% of workers)</li>
        <li>Neck strain (65% of workers)</li>
        <li>Reduced metabolism</li>
        <li>Poor circulation</li>
      </ul>
      
      <h3>5-Minute Desk Workout</h3>
      
      <h3>1. Neck and Shoulder Relief (1 minute)</h3>
      <p>• Neck rolls: 5 each direction</p>
      <p>• Shoulder shrugs: 10 reps</p>
      <p>• Shoulder blade squeezes: 10 reps</p>
      
      <h3>2. Core Activation (1 minute)</h3>
      <p>• Seated leg lifts: 10 per leg</p>
      <p>• Seated Russian twists: 15 reps</p>
      
      <h3>3. Lower Body (1 minute)</h3>
      <p>• Ankle circles: 10 each direction</p>
      <p>• Calf raises: 15 reps</p>
      
      <h3>Hourly Movement Reminders</h3>
      <p>Set phone alarm every hour for 2-minute breaks.</p>
      
      <h3>Ergonomic Setup</h3>
      <p>• Monitor at eye level</p>
      <p>• Feet flat on floor</p>
      <p>• Back supported</p>
    `,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
    category: "Fitness",
    readTime: "6 min read",
    author: "Physiotherapist Sana",
    date: "Nov 29, 2024"
  },
  {
    id: 11,
    title: "Indian Superfoods on a Shoestring Budget",
    content: `
      <p>Discover 12 powerful Indian superfoods that cost less than ₹20 each and can boost immunity, energy, and health without expensive supplements.</p>
      
      <h3>12 Budget Superfoods</h3>
      
      <h3>1. Turmeric (₹15/100g)</h3>
      <p>Anti-inflammatory powerhouse. Use in milk, curries, and face masks.</p>
      
      <h3>2. Ginger (₹10/100g)</h3>
      <p>Boosts immunity and aids digestion. Make ginger tea daily.</p>
      
      <h3>3. Garlic (₹20/100g)</h3>
      <p>Natural antibiotic. Eat 2-3 cloves raw daily for maximum benefits.</p>
      
      <h3>4. Amla (₹15/100g)</h3>
      <p>Vitamin C powerhouse. One amla = 20 oranges worth of Vitamin C.</p>
      
      <h3>5. Methi Seeds (₹18/100g)</h3>
      <p>Controls blood sugar. Soak overnight and eat on empty stomach.</p>
      
      <h3>6. Tulsi (₹10/packet)</h3>
      <p>Adaptogen herb. Make fresh tea for stress relief.</p>
      
      <h3>Daily Superfood Routine</h3>
      <p>Morning: Amla juice + tulsi tea</p>
      <p>Afternoon: Turmeric latte</p>
      <p>Evening: Ginger tea with methi seeds</p>
      
      <h3>Monthly Cost Breakdown</h3>
      <p>Total for all 12 superfoods: ₹200/month</p>
      <p>That's just ₹6.60 per day for premium nutrition!</p>
    `,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop",
    category: "Nutrition",
    readTime: "13 min read",
    author: "Ayurveda Expert Priya",
    date: "Nov 28, 2024"
  },
  {
    id: 12,
    title: "Stress-Free Cooking: One-Pot Indian Meals",
    content: `
      <p>Master the art of one-pot cooking with these 10 nutritious Indian recipes that save time, reduce dishes, and maintain authentic flavors.</p>
      
      <h3>Benefits of One-Pot Cooking</h3>
      <ul>
        <li>Saves 50% cooking time</li>
        <li>Minimal cleanup</li>
        <li>Better nutrient retention</li>
        <li>Perfect for busy schedules</li>
      </ul>
      
      <h3>10 One-Pot Wonders</h3>
      
      <h3>1. Dal Khichdi (20 minutes)</h3>
      <p>Rice + moong dal + vegetables cooked together. Complete meal with ghee.</p>
      
      <h3>2. Vegetable Biryani (25 minutes)</p>
      <p>Layer rice, vegetables, and spices in pressure cooker.</p>
      
      <h3>3. Rajma Rice (30 minutes)</h3>
      <p>Kidney beans and rice cooked together with Indian spices.</p>
      
      <h3>4. Chicken Curry Rice (35 minutes)</h3>
      <p>For non-vegetarians: chicken + rice + vegetables in one pot.</p>
      
      <h3>Essential Equipment</h3>
      <p>• Pressure cooker or Instant Pot</p>
      <p>• Heavy-bottomed pan</p>
      <p>• Good quality rice</p>
      
      <h3>Weekly Meal Planning</h3>
      <p>Sunday: Prep vegetables and spices</p>
      <p>Cook 2-3 one-pot meals weekly and freeze portions.</p>
    `,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=400&fit=crop",
    category: "Recipes",
    readTime: "14 min read",
    author: "Home Chef Anjali",
    date: "Nov 27, 2024"
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
            <div className="relative h-96 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0">
                  {post.category}
                </Badge>
              </div>
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                FREE
              </div>
            </div>
            
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl font-bold text-gray-800 leading-tight">
                {post.title}
              </CardTitle>
              
              <div className="flex items-center gap-6 text-sm text-gray-500 mt-4">
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
              </div>
            </CardHeader>
            
            <CardContent className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="text-gray-700 leading-relaxed"
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
