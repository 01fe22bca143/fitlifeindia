import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowLeft, Heart, Share2, Bookmark } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = {
  1: {
    id: 1,
    title: "10 Budget-Friendly Protein Sources Every Indian Should Know",
    content: `
      <p>Discover the complete guide to affordable protein options that will revolutionize your health without breaking your bank. From dal to innovative combinations.</p>
      <ul>
        <li>Dal and legumes</li>
        <li>Eggs and dairy</li>
        <li>Paneer and tofu</li>
        <li>Sprouted grains</li>
        <li>Mixed nuts and seeds</li>
      </ul>
      <p>Learn how to combine these sources for maximum benefit.</p>
    `,
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&h=400&fit=crop",
    category: "Nutrition",
    readTime: "8 min read",
    author: "Priya Sharma",
    date: "Dec 8, 2024"
  },
  2: {
    id: 2,
    title: "Home Workout Routine: No Gym, No Problem",
    content: `
      <p>Complete 4-week transformation program you can do in your small apartment with zero equipment. Scientifically designed for maximum results.</p>
      <ol>
        <li>Week 1: Bodyweight basics</li>
        <li>Week 2: Strength and endurance</li>
        <li>Week 3: HIIT and cardio</li>
        <li>Week 4: Flexibility and recovery</li>
      </ol>
      <p>Includes video tutorials and progress tracking.</p>
    `,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
    category: "Fitness",
    readTime: "12 min read",
    author: "Arjun Patel",
    date: "Dec 7, 2024"
  },
  3: {
    id: 3,
    title: "Healthy Indian Breakfast Ideas Under ₹50",
    content: `
      <p>15 power-packed breakfast recipes that will energize your mornings and save you thousands monthly. Complete with weekly meal plans.</p>
      <ul>
        <li>Poha with peanuts and veggies</li>
        <li>Vegetable upma with rava</li>
        <li>Besan chilla with coriander chutney</li>
        <li>Oats idli with sambar</li>
        <li>Moong dal cheela with tomato chutney</li>
      </ul>
      <p>All recipes are budget-friendly and easy to prepare.</p>
    `,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=400&fit=crop",
    category: "Recipes",
    readTime: "10 min read",
    author: "Meera Singh",
    date: "Dec 6, 2024"
  },
  4: {
    id: 4,
    title: "Mental Health and Fitness: The Indian Wellness Revolution",
    content: `
      <p>Ancient Indian practices meet modern science for complete wellness. Discover the 5-pillar system that's transforming lives across India.</p>
      <ol>
        <li>Meditation and mindfulness</li>
        <li>Yoga and physical activity</li>
        <li>Balanced nutrition</li>
        <li>Community and support</li>
        <li>Sleep and recovery</li>
      </ol>
      <p>Includes expert interviews and success stories.</p>
    `,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    category: "Wellness",
    readTime: "15 min read",
    author: "Dr. Rajesh Kumar",
    date: "Dec 5, 2024"
  },
  5: {
    id: 5,
    title: "Street Food Makeover: Healthy Versions of Indian Favorites",
    content: `
      <p>Transform your favorite chaats and street foods into healthy powerhouses. 8 complete makeovers with 60% fewer calories but 100% authentic taste.</p>
      <ul>
        <li>Bhel puri with roasted puffed rice</li>
        <li>Grilled paneer tikka instead of fried pakoras</li>
        <li>Sprouted moong salad chaat</li>
        <li>Low-oil samosas with whole wheat</li>
      </ul>
      <p>Includes nutritional breakdown and cooking tips.</p>
    `,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=400&fit=crop",
    category: "Recipes",
    readTime: "12 min read",
    author: "Chef Ananya",
    date: "Dec 4, 2024"
  },
  6: {
    id: 6,
    title: "Building Muscle on a Vegetarian Diet: Complete Guide",
    content: `
      <p>Everything you need to know about gaining serious muscle mass while following a vegetarian lifestyle. Includes 7-day meal plans and supplement guide.</p>
      <ul>
        <li>High-protein vegetarian foods</li>
        <li>Effective workout routines</li>
        <li>Supplement recommendations</li>
        <li>Recovery and rest strategies</li>
      </ul>
      <p>Includes success stories and expert advice.</p>
    `,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
    category: "Fitness",
    readTime: "18 min read",
    author: "Fitness Coach Rohit",
    date: "Dec 3, 2024"
  },
  7: {
    id: 7,
    title: "Student's Guide to 15-Minute Healthy Meals",
    content: `
      <div class="space-y-6">
        <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-2">🎓 FREE Student Nutrition Guide</h3>
          <p class="text-green-700">Complete meal planning system designed for students and working professionals on tight schedules and budgets!</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-orange-200 pb-2">The Student Struggle is Real</h2>
        <p class="text-gray-700 leading-relaxed">Between classes, assignments, part-time jobs, and social life, cooking healthy meals seems impossible. But what if I told you that you can prepare nutritious, delicious meals in just 15 minutes with ingredients costing less than ₹100?</p>

        <div class="bg-blue-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-blue-800 mb-4">🍳 5 Super Quick Recipes</h3>
          
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">1. Protein-Packed Egg Bhurji (5 mins)</h4>
              <p class="text-sm text-gray-600 mb-2">Cost: ₹25 | Protein: 18g</p>
              <p class="text-gray-700">2 eggs + onion + tomato + spices. Scramble and serve with bread.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">2. Quick Dal Tadka (12 mins)</h4>
              <p class="text-sm text-gray-600 mb-2">Cost: ₹30 | Fiber: 15g</p>
              <p class="text-gray-700">Pressure cook moong dal (8 mins) + quick tadka. Serve with rice.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">3. Vegetable Maggi Upgrade (10 mins)</h4>
              <p class="text-sm text-gray-600 mb-2">Cost: ₹40 | Added Nutrition: 200%</p>
              <p class="text-gray-700">Add mixed vegetables, egg, and paneer to regular Maggi.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">4. Instant Oats Upma (8 mins)</h4>
              <p class="text-sm text-gray-600 mb-2">Cost: ₹35 | Fiber: 12g</p>
              <p class="text-gray-700">Oats + vegetables + spices. Healthy alternative to rava upma.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">5. Chickpea Salad Bowl (5 mins)</h4>
              <p class="text-sm text-gray-600 mb-2">Cost: ₹45 | Protein: 15g</p>
              <p class="text-gray-700">Canned chickpeas + cucumber + tomato + lemon + chat masala.</p>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-orange-200 pb-2">Smart Shopping for Students</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-yellow-50 p-6 rounded-xl">
            <h3 class="text-lg font-bold text-yellow-800 mb-3">🛒 Essential Pantry (₹500/month)</h3>
            <ul class="text-yellow-700 space-y-1">
              <li>• Oats, rice, moong dal</li>
              <li>• Eggs (30 pieces)</li>
              <li>• Basic spices & oil</li>
              <li>• Seasonal vegetables</li>
              <li>• Onions, tomatoes, ginger</li>
            </ul>
          </div>
          
          <div class="bg-purple-50 p-6 rounded-xl">
            <h3 class="text-lg font-bold text-purple-800 mb-3">⏰ Time-Saving Hacks</h3>
            <ul class="text-purple-700 space-y-1">
              <li>• Pre-chop vegetables on Sunday</li>
              <li>• Use pressure cooker for dal</li>
              <li>• Keep ginger-garlic paste ready</li>
              <li>• Batch cook rice</li>
              <li>• Use microwave for vegetables</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📱 Student Success Formula</h3>
          <div class="grid md:grid-cols-3 gap-4 text-center">
            <div class="bg-white p-4 rounded-lg">
              <div class="text-2xl mb-2">⚡</div>
              <h4 class="font-bold">Quick Prep</h4>
              <p class="text-sm text-gray-600">Max 15 minutes</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-2xl mb-2">💰</div>
              <h4 class="font-bold">Budget Friendly</h4>
              <p class="text-sm text-gray-600">Under ₹100/meal</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-2xl mb-2">🥗</div>
              <h4 class="font-bold">Nutritious</h4>
              <p class="text-sm text-gray-600">Balanced nutrition</p>
            </div>
          </div>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop",
    category: "Recipes",
    readTime: "9 min read",
    author: "Chef Kavya",
    date: "Dec 2, 2024"
  },

  8: {
    id: 8,
    title: "Sleep Better, Live Better: Indian Sleep Optimization",
    content: `
      <div class="space-y-6">
        <div class="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500">
          <h3 class="text-xl font-bold text-indigo-800 mb-2">🌙 FREE Sleep Transformation Guide</h3>
          <p class="text-indigo-700">Ancient Ayurvedic wisdom meets modern sleep science for the perfect night's rest!</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-orange-200 pb-2">The Indian Sleep Crisis</h2>
        <p class="text-gray-700 leading-relaxed">Did you know that 93% of Indians don't get quality sleep? In our 24/7 work culture, sleep has become a luxury. But our ancestors knew the secret to restorative sleep through Ayurveda and traditional practices.</p>

        <div class="bg-purple-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-purple-800 mb-4">🕘 The Perfect Indian Sleep Schedule</h3>
          
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">6:00 PM - Evening Wind Down</h4>
              <p class="text-gray-700">Light dinner with warm milk and turmeric. Avoid heavy foods.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">8:00 PM - Digital Sunset</h4>
              <p class="text-gray-700">Switch off all screens. Practice gentle yoga or meditation.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">9:30 PM - Ayurvedic Preparation</h4>
              <p class="text-gray-700">Warm oil massage on feet, chamomile tea, and breathing exercises.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">10:00 PM - Sleep Time</h4>
              <p class="text-gray-700">Room temperature 22-24°C, complete darkness, and silence.</p>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-orange-200 pb-2">Ancient Sleep Remedies That Work</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-green-50 p-6 rounded-xl">
            <h3 class="text-lg font-bold text-green-800 mb-3">🌿 Ayurvedic Sleep Tonics</h3>
            <ul class="text-green-700 space-y-2">
              <li><strong>Golden Milk:</strong> Turmeric + warm milk + honey</li>
              <li><strong>Brahmi Tea:</strong> Improves sleep quality naturally</li>
              <li><strong>Ashwagandha:</strong> Reduces cortisol and stress</li>
              <li><strong>Jatamansi Oil:</strong> Forehead massage before bed</li>
            </ul>
          </div>
          
          <div class="bg-blue-50 p-6 rounded-xl">
            <h3 class="text-lg font-bold text-blue-800 mb-3">🧘 Traditional Practices</h3>
            <ul class="text-blue-700 space-y-2">
              <li><strong>Pranayama:</strong> 4-7-8 breathing technique</li>
              <li><strong>Yoga Nidra:</strong> 20-minute guided meditation</li>
              <li><strong>Marma Points:</strong> Pressure points for relaxation</li>
              <li><strong>Mantra Chanting:</strong> "Om" or "So Hum" repetition</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📊 Sleep Quality Metrics</h3>
          <div class="grid md:grid-cols-4 gap-4 text-center">
            <div class="bg-white p-4 rounded-lg">
              <div class="text-3xl font-bold text-purple-600">7-8</div>
              <p class="text-sm text-gray-600">Hours optimal sleep</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-3xl font-bold text-blue-600">15</div>
              <p class="text-sm text-gray-600">Minutes to fall asleep</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-3xl font-bold text-green-600">22-24°C</div>
              <p class="text-sm text-gray-600">Room temperature</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-3xl font-bold text-orange-600">30</div>
              <p class="text-sm text-gray-600">Days to see results</p>
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
  },

  9: {
    id: 9,
    title: "Water Therapy: The Indian Way to Weight Loss",
    content: `
      <div class="space-y-6">
        <div class="bg-cyan-50 p-6 rounded-xl border-l-4 border-cyan-500">
          <h3 class="text-xl font-bold text-cyan-800 mb-2">💧 FREE Water Therapy System</h3>
          <p class="text-cyan-700">Traditional Indian water therapy combined with modern science for natural weight loss!</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-orange-200 pb-2">The Ancient Science of Water</h2>
        <p class="text-gray-700 leading-relaxed">In Ayurveda, water isn't just H2O - it's medicine. Our ancestors understood that proper hydration timing, temperature, and quantity could transform health and accelerate weight loss naturally.</p>

        <div class="bg-blue-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-blue-800 mb-4">🕐 The Perfect Water Schedule</h3>
          
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">5:30 AM - Morning Detox (2 glasses)</h4>
              <p class="text-gray-700">Room temperature water on empty stomach. Flushes toxins and kickstarts metabolism.</p>
              <span class="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Burns 100 calories</span>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">30 mins before meals (1 glass)</h4>
              <p class="text-gray-700">Suppresses appetite naturally. Reduces calorie intake by 13%.</p>
              <span class="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Appetite Control</span>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">2 hours after meals (1 glass)</h4>
              <p class="text-gray-700">Aids digestion and prevents bloating. Optimal nutrient absorption.</p>
              <span class="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Digestive Health</span>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">Before workout (1 glass)</h4>
              <p class="text-gray-700">Prevents dehydration and improves exercise performance by 15%.</p>
              <span class="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Performance Boost</span>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-orange-200 pb-2">Indian Water Infusions for Weight Loss</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-yellow-50 p-6 rounded-xl">
            <h3 class="text-lg font-bold text-yellow-800 mb-3">🌶️ Spiced Water Combinations</h3>
            <ul class="text-yellow-700 space-y-2">
              <li><strong>Jeera Water:</strong> Boosts metabolism by 25%</li>
              <li><strong>Lemon-Ginger:</strong> Burns belly fat effectively</li>
              <li><strong>Cinnamon Water:</strong> Controls blood sugar</li>
              <li><strong>Fenugreek Water:</strong> Reduces cravings</li>
            </ul>
          </div>
          
          <div class="bg-green-50 p-6 rounded-xl">
            <h3 class="text-lg font-bold text-green-800 mb-3">🍃 Herbal Infusions</h3>
            <ul class="text-green-700 space-y-2">
              <li><strong>Tulsi Water:</strong> Reduces stress eating</li>
              <li><strong>Mint Water:</strong> Improves digestion</li>
              <li><strong>Fennel Water:</strong> Natural diuretic</li>
              <li><strong>Green Tea:</strong> Antioxidant powerhouse</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-cyan-100 to-blue-100 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📈 Expected Results</h3>
          <div class="grid md:grid-cols-3 gap-4 text-center">
            <div class="bg-white p-4 rounded-lg">
              <div class="text-3xl font-bold text-cyan-600">Week 1</div>
              <p class="text-sm text-gray-600">Reduced bloating, better digestion</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-3xl font-bold text-blue-600">Week 2-3</div>
              <p class="text-sm text-gray-600">2-3 kg weight loss, clearer skin</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-3xl font-bold text-purple-600">Month 1</div>
              <p class="text-sm text-gray-600">5-7 kg loss, increased energy</p>
            </div>
          </div>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
    category: "Weight Loss",
    readTime: "7 min read",
    author: "Nutritionist Ravi",
    date: "Nov 30, 2024"
  },

  10: {
    id: 10,
    title: "Desk Job Detox: 5-Minute Office Exercises",
    content: `
      <div class="space-y-6">
        <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
          <h3 class="text-xl font-bold text-red-800 mb-2">💼 FREE Office Fitness System</h3>
          <p class="text-red-700">Combat sitting disease with discrete exercises you can do at your desk without anyone noticing!</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-orange-200 pb-2">The Sitting Epidemic</h2>
        <p class="text-gray-700 leading-relaxed">Sitting for 8+ hours daily increases death risk by 60%. But these discrete 5-minute exercises every 2 hours can reverse the damage and boost your energy instantly.</p>

        <div class="bg-orange-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-orange-800 mb-4">🪑 Discrete Desk Exercises</h3>
          
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">1. Seated Spinal Twist (1 min)</h4>
              <p class="text-gray-700">Sit tall, place right hand on left knee, twist gently. Hold 30 sec each side.</p>
              <span class="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Back Pain Relief</span>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">2. Ankle Circles & Calf Raises (1 min)</h4>
              <p class="text-gray-700">Lift feet slightly, rotate ankles 10 times each direction. Raise heels 15 times.</p>
              <span class="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Blood Circulation</span>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">3. Shoulder Blade Squeezes (1 min)</h4>
              <p class="text-gray-700">Pull shoulder blades together, hold 5 seconds. Repeat 12 times.</p>
              <span class="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Posture Fix</span>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">4. Seated Marching (1 min)</h4>
              <p class="text-gray-700">Lift knees alternately while seated. Keep core engaged.</p>
              <span class="inline-block bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Core Activation</span>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">5. Neck Stretches (1 min)</h4>
              <p class="text-gray-700">Gently tilt head to each side, forward and back. Hold 10 seconds each.</p>
              <span class="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Neck Tension</span>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-800 mb-4">⏰ The 2-Hour Rule</h3>
          <div class="grid md:grid-cols-4 gap-4 text-center">
            <div class="bg-white p-4 rounded-lg">
              <div class="text-2xl mb-2">🕐</div>
              <h4 class="font-bold text-gray-800">Every 2 Hours</h4>
              <p class="text-sm text-gray-600">Set phone reminder</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-2xl mb-2">⚡</div>
              <h4 class="font-bold text-gray-800">5 Minutes</h4>
              <p class="text-sm text-gray-600">Complete routine</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-2xl mb-2">👥</div>
              <h4 class="font-bold text-gray-800">Discrete</h4>
              <p class="text-sm text-gray-600">No one will notice</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-2xl mb-2">💪</div>
              <h4 class="font-bold text-gray-800">Instant Energy</h4>
              <p class="text-sm text-gray-600">Feel the difference</p>
            </div>
          </div>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
    category: "Fitness",
    readTime: "6 min read",
    author: "Physiotherapist Sana",
    date: "Nov 29, 2024"
  },

  11: {
    id: 11,
    title: "Indian Superfoods on a Shoestring Budget",
    content: `
      <div class="space-y-6">
        <div class="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
          <h3 class="text-xl font-bold text-emerald-800 mb-2">🌿 FREE Superfood Guide</h3>
          <p class="text-emerald-700">Discover 12 powerful Indian superfoods that cost less than ₹20 each and outperform expensive supplements!</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-orange-200 pb-2">Why Indian Superfoods?</h2>
        <p class="text-gray-700 leading-relaxed">While quinoa costs ₹400/kg, our native millets cost ₹60/kg and provide superior nutrition. Indian superfoods have been scientifically proven more effective than many expensive imported alternatives.</p>

        <div class="bg-green-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-green-800 mb-4">🥗 Top 12 Budget Superfoods</h3>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">1. Turmeric (₹10/100g)</h4>
              <p class="text-gray-700 text-sm">Anti-inflammatory power stronger than ibuprofen</p>
              <span class="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Immunity Booster</span>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">2. Moringa Leaves (₹15/100g)</h4>
              <p class="text-gray-700 text-sm">7x more Vitamin C than oranges</p>
              <span class="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Vitamin Powerhouse</span>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">3. Ragi (Finger Millet) (₹20/kg)</h4>
              <p class="text-gray-700 text-sm">10x more calcium than wheat</p>
              <span class="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Bone Health</span>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">4. Amla (₹8/100g)</h4>
              <p class="text-gray-700 text-sm">20x more Vitamin C than lemon</p>
              <span class="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Antioxidant King</span>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">5. Methi Seeds (₹12/100g)</h4>
              <p class="text-gray-700 text-sm">Reduces blood sugar by 25%</p>
              <span class="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Diabetes Control</span>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">6. Coconut Oil (₹18/100ml)</h4>
              <p class="text-gray-700 text-sm">Medium-chain fatty acids for brain health</p>
              <span class="inline-block bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs">Brain Food</span>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-orange-200 pb-2">Daily Superfood Integration</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-yellow-50 p-6 rounded-xl">
            <h3 class="text-lg font-bold text-yellow-800 mb-3">🌅 Morning Routine</h3>
            <ul class="text-yellow-700 space-y-1">
              <li>• Turmeric + warm water</li>
              <li>• Amla juice (fresh/powder)</li>
              <li>• Ragi porridge with jaggery</li>
              <li>• Soaked methi seeds</li>
            </ul>
          </div>
          
          <div class="bg-blue-50 p-6 rounded-xl">
            <h3 class="text-lg font-bold text-blue-800 mb-3">🍽️ Meal Integration</h3>
            <ul class="text-blue-700 space-y-1">
              <li>• Cook with coconut oil</li>
              <li>• Add moringa to dal</li>
              <li>• Sprinkle flax seeds on food</li>
              <li>• Use jaggery instead of sugar</li>
            </ul>
          </div>
          
          <div class="bg-purple-50 p-6 rounded-xl">
            <h3 class="text-lg font-bold text-purple-800 mb-3">🌙 Evening Boost</h3>
            <ul class="text-purple-700 space-y-1">
              <li>• Golden milk with turmeric</li>
              <li>• Handful of soaked almonds</li>
              <li>• Ginger-honey tea</li>
              <li>• Tulsi leaves infusion</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-800 mb-4">💰 Monthly Superfood Budget</h3>
          <div class="grid md:grid-cols-4 gap-4 text-center">
            <div class="bg-white p-4 rounded-lg">
              <div class="text-3xl font-bold text-green-600">₹300</div>
              <p class="text-sm text-gray-600">Total monthly cost</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-3xl font-bold text-blue-600">₹10</div>
              <p class="text-sm text-gray-600">Per day cost</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-3xl font-bold text-purple-600">12</div>
              <p class="text-sm text-gray-600">Different superfoods</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-3xl font-bold text-yellow-600">100%</div>
              <p class="text-sm text-gray-600">Natural & organic</p>
            </div>
          </div>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop",
    category: "Nutrition",
    readTime: "13 min read",
    author: "Ayurveda Expert Priya",
    date: "Nov 28, 2024"
  },

  12: {
    id: 12,
    title: "Stress-Free Cooking: One-Pot Indian Meals",
    content: `
      <div class="space-y-6">
        <div class="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
          <h3 class="text-xl font-bold text-amber-800 mb-2">🍲 FREE One-Pot Mastery</h3>
          <p class="text-amber-700">Master 10 nutritious one-pot Indian meals that save time, reduce dishes, and maintain authentic flavors!</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-orange-200 pb-2">The One-Pot Revolution</h2>
        <p class="text-gray-700 leading-relaxed">Traditional Indian cooking was originally one-pot based - think khichdi, pulao, and biryani. These complete meals provide balanced nutrition, require minimal cleanup, and can feed a family for under ₹100.</p>

        <div class="bg-orange-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-orange-800 mb-4">🥘 10 Complete One-Pot Meals</h3>
          
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">1. Protein Dal Khichdi</h4>
              <p class="text-gray-700 text-sm">Rice + moong dal + vegetables + spices | 25g protein</p>
              <span class="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs">₹40 | 30 mins</span>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">2. Vegetable Biryani</h4>
              <p class="text-gray-700 text-sm">Basmati rice + mixed vegetables + whole spices | Complete meal</p>
              <span class="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">₹60 | 45 mins</span>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">3. Rajma Rice Bowl</h4>
              <p class="text-gray-700 text-sm">Kidney beans + rice + onion-tomato base | High fiber</p>
              <span class="inline-block bg-red-100 text-red-800 px-2 py-1 rounded text-xs">₹45 | 35 mins</span>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">4. Chicken Pulao</h4>
              <p class="text-gray-700 text-sm">Basmati rice + chicken + whole spices | 30g protein</p>
              <span class="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">₹80 | 40 mins</span>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800">5. Mixed Dal Tadka Rice</h4>
              <p class="text-gray-700 text-sm">3 dals + rice + tempering | Complete amino acids</p>
              <span class="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">₹35 | 25 mins</span>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-orange-200 pb-2">One-Pot Success Formula</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-green-50 p-6 rounded-xl">
            <h3 class="text-lg font-bold text-green-800 mb-3">🔥 Heat Management</h3>
            <ul class="text-green-700 space-y-1">
              <li>• Start with high heat for tempering</li>
              <li>• Medium heat for sautéing</li>
              <li>• Low heat for slow cooking</li>
              <li>• Use heavy-bottom pot</li>
            </ul>
          </div>
          
          <div class="bg-blue-50 p-6 rounded-xl">
            <h3 class="text-lg font-bold text-blue-800 mb-3">💧 Water Ratios</h3>
            <ul class="text-blue-700 space-y-1">
              <li>• Rice: 1:2 water ratio</li>
              <li>• Dal: 1:3 water ratio</li>
              <li>• Combined: 1:2.5 ratio</li>
              <li>• Adjust for desired consistency</li>
            </ul>
          </div>
          
          <div class="bg-purple-50 p-6 rounded-xl">
            <h3 class="text-lg font-bold text-purple-800 mb-3">⏰ Timing Tips</h3>
            <ul class="text-purple-700 space-y-1">
              <li>• Soak rice/dal for 15 mins</li>
              <li>• Layer ingredients properly</li>
              <li>• Don't open lid while cooking</li>
              <li>• Let it rest for 5 mins</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📊 One-Pot Benefits</h3>
          <div class="grid md:grid-cols-4 gap-4 text-center">
            <div class="bg-white p-4 rounded-lg">
              <div class="text-3xl font-bold text-amber-600">75%</div>
              <p class="text-sm text-gray-600">Less cleanup time</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-3xl font-bold text-orange-600">50%</div>
              <p class="text-sm text-gray-600">Less cooking time</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-3xl font-bold text-red-600">₹50</div>
              <p class="text-sm text-gray-600">Average meal cost</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-3xl font-bold text-green-600">100%</div>
              <p class="text-sm text-gray-600">Nutritionally complete</p>
            </div>
          </div>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=400&fit=crop",
    category: "Recipes",
    readTime: "14 min read",
    author: "Home Chef Anjali",
    date: "Nov 27, 2024"
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <p className="text-xl text-gray-600">Sorry, the article you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg my-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link to="/blog" className="inline-flex items-center text-orange-600 hover:underline mb-6">
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to Blog
        </Link>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0 mb-4 inline-block">
          {post.category}
        </Badge>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

        <div className="flex items-center gap-6 text-gray-500 mb-8">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{post.readTime}</span>
          </div>
          <div className="text-sm">{post.date}</div>
        </div>

        <article
          className="prose max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-10 flex gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Like
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            Share
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Bookmark className="w-5 h-5" />
            Save
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogPost;
