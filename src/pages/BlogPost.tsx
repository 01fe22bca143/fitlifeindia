
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar, Share2, Heart, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

// Enhanced blog post data with more unique and engaging content
const blogPosts = {
  "1": {
    id: 1,
    title: "10 Budget-Friendly Protein Sources Every Indian Should Know",
    content: `
    <div class="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl mb-8 border-l-4 border-green-500">
      <h2 class="text-2xl font-bold text-green-800 mb-3">💡 Quick Facts</h2>
      <p class="text-green-700">Did you know? Indians consume only 0.6g protein per kg body weight daily, while the recommended amount is 1.5-2g! This comprehensive guide will change that forever.</p>
    </div>

    <p class="text-lg leading-relaxed mb-6">Protein is the building block of life, yet most young Indians struggle to meet their daily protein requirements due to misconceptions about cost and availability. This isn't just about building muscles – adequate protein intake boosts immunity, improves brain function, and keeps you energized throughout your busy day.</p>

    <h2 class="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">🇮🇳 The Indian Protein Crisis</h2>
    <div class="bg-red-50 p-6 rounded-xl mb-6 border border-red-200">
      <h3 class="text-xl font-semibold text-red-800 mb-3">Shocking Statistics:</h3>
      <ul class="space-y-2 text-red-700">
        <li>• 73% of Indian diets are protein deficient</li>
        <li>• Average Indian consumes only 47g protein daily (should be 60-80g)</li>
        <li>• Protein deficiency leads to hair loss, fatigue, and poor immunity</li>
        <li>• Young adults are most affected due to lifestyle changes</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">🥇 Top 10 Protein Powerhouses</h2>

    <div class="grid gap-6 mb-8">
      <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
        <h3 class="text-2xl font-bold text-orange-800 mb-3">1. Dal (Lentils) - The Indian Superfood 🌟</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-semibold text-orange-700">💰 Cost: ₹80-120/kg</p>
            <p class="font-semibold text-orange-700">🏋️ Protein: 15-18g per cup</p>
          </div>
          <div>
            <p class="font-semibold text-orange-700">⏰ Prep time: 15-30 mins</p>
            <p class="font-semibold text-orange-700">🔥 Calories: 230 per cup</p>
          </div>
        </div>
        <p class="text-gray-700 mb-3">The ultimate Indian protein champion! Different varieties offer unique benefits:</p>
        <ul class="space-y-2 text-gray-700">
          <li><strong>Moong Dal:</strong> Easiest to digest, perfect post-workout recovery</li>
          <li><strong>Chana Dal:</strong> Highest protein (22g/100g), great for muscle building</li>
          <li><strong>Masoor Dal:</strong> Quick cooking, rich in folate and iron</li>
          <li><strong>Toor Dal:</strong> Balanced amino acids, perfect for daily consumption</li>
        </ul>
        <div class="bg-orange-100 p-4 rounded-lg mt-4">
          <p class="font-semibold text-orange-800">💡 Pro Tip: Mix 2-3 types of dal to get complete amino acid profile!</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
        <h3 class="text-2xl font-bold text-blue-800 mb-3">2. Eggs - Nature's Perfect Protein 🥚</h3>
        <div class="grid md:grid-cols-3 gap-4 mb-4">
          <div>
            <p class="font-semibold text-blue-700">💰 Cost: ₹5-7 per egg</p>
            <p class="font-semibold text-blue-700">🏋️ Protein: 6g per egg</p>
          </div>
          <div>
            <p class="font-semibold text-blue-700">⭐ Biological Value: 100</p>
            <p class="font-semibold text-blue-700">🧠 Choline: 147mg</p>
          </div>
          <div>
            <p class="font-semibold text-blue-700">💪 Leucine: 537mg</p>
            <p class="font-semibold text-blue-700">🔥 Calories: 70 per egg</p>
          </div>
        </div>
        <div class="bg-blue-100 p-4 rounded-lg">
          <h4 class="font-semibold text-blue-800 mb-2">🍳 5 Ways to Maximize Egg Benefits:</h4>
          <ol class="list-decimal list-inside space-y-1 text-blue-700">
            <li>Eat whole eggs (yolk contains vitamins A, D, E, K)</li>
            <li>Have 2-3 eggs post-workout for muscle recovery</li>
            <li>Boil a dozen on Sunday for week-long snacks</li>
            <li>Add turmeric while cooking for anti-inflammatory benefits</li>
            <li>Pair with spinach for iron absorption</li>
          </ol>
        </div>
      </div>

      <div class="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border border-green-200">
        <h3 class="text-2xl font-bold text-green-800 mb-3">3. Peanuts - The Pocket Rocket 🥜</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-semibold text-green-700">💰 Cost: ₹100-150/kg</p>
            <p class="font-semibold text-green-700">🏋️ Protein: 25g per 100g</p>
          </div>
          <div>
            <p class="font-semibold text-green-700">❤️ Heart-healthy fats: 49g</p>
            <p class="font-semibold text-green-700">⚡ Energy: 567 calories</p>
          </div>
        </div>
        <div class="bg-green-100 p-4 rounded-lg">
          <h4 class="font-semibold text-green-800 mb-2">🌟 Peanut Power Recipe:</h4>
          <p class="text-green-700">Roast 1 cup peanuts with 1 tsp turmeric, pinch of salt, and chat masala. Store in airtight container. Perfect pre/post-workout snack!</p>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-2xl mb-8 border border-indigo-200">
      <h2 class="text-3xl font-bold text-indigo-800 mb-6">📊 Complete Protein Comparison Chart</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-indigo-200">
              <th class="text-left p-3 font-bold text-indigo-900">Protein Source</th>
              <th class="text-left p-3 font-bold text-indigo-900">Cost/100g</th>
              <th class="text-left p-3 font-bold text-indigo-900">Protein/100g</th>
              <th class="text-left p-3 font-bold text-indigo-900">Quality Score</th>
            </tr>
          </thead>
          <tbody class="text-indigo-800">
            <tr class="border-b border-indigo-100">
              <td class="p-3 font-semibold">Moong Dal</td>
              <td class="p-3">₹12-15</td>
              <td class="p-3">24g</td>
              <td class="p-3">⭐⭐⭐⭐</td>
            </tr>
            <tr class="border-b border-indigo-100 bg-indigo-50">
              <td class="p-3 font-semibold">Eggs</td>
              <td class="p-3">₹35-45</td>
              <td class="p-3">13g</td>
              <td class="p-3">⭐⭐⭐⭐⭐</td>
            </tr>
            <tr class="border-b border-indigo-100">
              <td class="p-3 font-semibold">Peanuts</td>
              <td class="p-3">₹10-15</td>
              <td class="p-3">26g</td>
              <td class="p-3">⭐⭐⭐⭐</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="bg-gradient-to-r from-pink-100 to-red-100 p-8 rounded-2xl mb-8 border border-pink-200">
      <h2 class="text-3xl font-bold text-pink-800 mb-6">🍽️ Sample High-Protein Day (₹120 total)</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-bold text-pink-700 mb-2">🌅 Breakfast (7 AM)</h4>
            <p class="text-pink-600">2 boiled eggs + 1 slice brown bread</p>
            <p class="text-sm text-pink-500">Protein: 14g | Cost: ₹20</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-bold text-pink-700 mb-2">🥪 Mid-Morning (10 AM)</h4>
            <p class="text-pink-600">Handful of roasted peanuts (30g)</p>
            <p class="text-sm text-pink-500">Protein: 8g | Cost: ₹10</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-bold text-pink-700 mb-2">🍛 Lunch (1 PM)</h4>
            <p class="text-pink-600">1 cup dal + 2 rotis + sabzi</p>
            <p class="text-sm text-pink-500">Protein: 20g | Cost: ₹40</p>
          </div>
        </div>
        <div class="space-y-4">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-bold text-pink-700 mb-2">🥤 Evening (4 PM)</h4>
            <p class="text-pink-600">Sprouted moong chaat (1 cup)</p>
            <p class="text-sm text-pink-500">Protein: 12g | Cost: ₹15</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-bold text-pink-700 mb-2">🌙 Dinner (8 PM)</h4>
            <p class="text-pink-600">Paneer bhurji (100g) + 2 rotis</p>
            <p class="text-sm text-pink-500">Protein: 22g | Cost: ₹35</p>
          </div>
          <div class="bg-gradient-to-r from-green-400 to-blue-400 text-white p-4 rounded-lg text-center">
            <h4 class="font-bold text-xl">Total: 76g Protein</h4>
            <p class="text-sm opacity-90">Perfect for 60-70kg person!</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-2xl mb-8 border border-yellow-200">
      <h2 class="text-3xl font-bold text-yellow-800 mb-6">🎯 Action Plan: Your 30-Day Protein Transformation</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-xl shadow-sm">
          <h3 class="text-xl font-bold text-yellow-700 mb-4">Week 1-2: Foundation</h3>
          <ul class="space-y-2 text-yellow-600">
            <li>✅ Add 2 eggs daily</li>
            <li>✅ Include dal in lunch/dinner</li>
            <li>✅ Snack on 30g peanuts</li>
            <li>✅ Track protein intake</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm">
          <h3 class="text-xl font-bold text-yellow-700 mb-4">Week 3-4: Optimization</h3>
          <ul class="space-y-2 text-yellow-600">
            <li>✅ Mix different dal varieties</li>
            <li>✅ Add paneer 3x/week</li>
            <li>✅ Try sprouted legumes</li>
            <li>✅ Increase portion sizes</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm">
          <h3 class="text-xl font-bold text-yellow-700 mb-4">Beyond: Mastery</h3>
          <ul class="space-y-2 text-yellow-600">
            <li>✅ 1.5-2g protein/kg body weight</li>
            <li>✅ Meal prep on Sundays</li>
            <li>✅ Share knowledge with friends</li>
            <li>✅ Enjoy better health & energy!</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl text-center">
      <h2 class="text-3xl font-bold mb-4">🚀 Ready to Transform Your Health?</h2>
      <p class="text-xl mb-6">Meeting your protein goals doesn't require expensive supplements or imported foods. With smart shopping and meal planning, you can easily achieve optimal protein intake using affordable Indian ingredients.</p>
      <p class="text-lg font-semibold">Start today, and your future self will thank you! 💪</p>
    </div>
    `,
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&h=400&fit=crop",
    category: "Nutrition",
    readTime: "8 min read",
    author: "Priya Sharma",
    date: "December 8, 2024",
    tags: ["protein", "budget", "nutrition", "indian-food", "health"]
  },
  "2": {
    id: 2,
    title: "Home Workout Routine: No Gym, No Problem",
    content: `
    <div class="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl mb-8 border-l-4 border-blue-500">
      <h2 class="text-2xl font-bold text-blue-800 mb-3">💪 Transform Your Body at Home</h2>
      <p class="text-blue-700">This scientifically-designed workout routine has helped over 10,000+ Indians achieve their fitness goals without stepping foot in a gym!</p>
    </div>

    <p class="text-lg leading-relaxed mb-6">Forget expensive gym memberships and crowded fitness centers. Your home is about to become the most powerful fitness studio you've ever experienced. This comprehensive guide will transform not just your body, but your entire relationship with fitness.</p>

    <h2 class="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-6">🏠 The Home Fitness Revolution</h2>
    
    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="bg-green-50 p-6 rounded-xl border border-green-200">
        <h3 class="text-xl font-bold text-green-800 mb-4">✅ Why Home Workouts Win</h3>
        <ul class="space-y-2 text-green-700">
          <li>• Save ₹2000-5000/month on gym fees</li>
          <li>• No commute time (extra 1-2 hours daily)</li>
          <li>• Work out anytime, even at midnight</li>
          <li>• No judgment from others</li>
          <li>• Family can join you</li>
          <li>• Perfect music control</li>
        </ul>
      </div>
      <div class="bg-red-50 p-6 rounded-xl border border-red-200">
        <h3 class="text-xl font-bold text-red-800 mb-4">❌ Common Myths Busted</h3>
        <ul class="space-y-2 text-red-700">
          <li>• "You need equipment to build muscle" ❌</li>
          <li>• "Home workouts are less effective" ❌</li>
          <li>• "You need 2+ hours to see results" ❌</li>
          <li>• "Bodyweight can't replace weights" ❌</li>
          <li>• "You need a big space" ❌</li>
          <li>• "It's hard to stay motivated" ❌</li>
        </ul>
      </div>
    </div>

    <h2 class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">🔥 The Complete 4-Week Transformation Program</h2>

    <div class="bg-gradient-to-r from-indigo-100 to-blue-100 p-8 rounded-2xl mb-8 border border-indigo-200">
      <h3 class="text-2xl font-bold text-indigo-800 mb-6">Week 1-2: Foundation Building 🏗️</h3>
      
      <div class="grid md:grid-cols-3 gap-6 mb-6">
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <h4 class="font-bold text-indigo-700 mb-3">🔥 Warm-up (5 mins)</h4>
          <ul class="space-y-1 text-indigo-600 text-sm">
            <li>• Arm circles: 30s each way</li>
            <li>• Leg swings: 30s each leg</li>
            <li>• Jumping jacks: 1 min</li>
            <li>• High knees: 1 min</li>
            <li>• Body twists: 1 min</li>
          </ul>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <h4 class="font-bold text-indigo-700 mb-3">💪 Upper Body Circuit</h4>
          <ul class="space-y-1 text-indigo-600 text-sm">
            <li>• Push-ups: 8-12 reps</li>
            <li>• Pike push-ups: 6-10 reps</li>
            <li>• Tricep dips: 8-12 reps</li>
            <li>• Plank: 20-45 seconds</li>
            <li>• Rest: 60-90 seconds</li>
          </ul>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <h4 class="font-bold text-indigo-700 mb-3">🦵 Lower Body Circuit</h4>
          <ul class="space-y-1 text-indigo-600 text-sm">
            <li>• Squats: 12-18 reps</li>
            <li>• Lunges: 8-12 each leg</li>
            <li>• Glute bridges: 12-18 reps</li>
            <li>• Wall sit: 20-40 seconds</li>
            <li>• Rest: 60-90 seconds</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-indigo-200 p-4 rounded-lg">
        <p class="font-semibold text-indigo-800">📅 Schedule: 3 days/week (Mon, Wed, Fri) | Focus: Learning proper form and building habit</p>
      </div>
    </div>

    <div class="bg-gradient-to-r from-green-100 to-teal-100 p-8 rounded-2xl mb-8 border border-green-200">
      <h3 class="text-2xl font-bold text-green-800 mb-6">Week 3-4: Strength & Endurance 💥</h3>
      
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h4 class="font-bold text-green-700 mb-4">🔥 Advanced Upper Body</h4>
          <div class="space-y-3">
            <div class="border-b border-green-100 pb-2">
              <h5 class="font-semibold text-green-600">Diamond Push-ups</h5>
              <p class="text-sm text-green-500">10-15 reps | Targets triceps intensely</p>
            </div>
            <div class="border-b border-green-100 pb-2">
              <h5 class="font-semibold text-green-600">Archer Push-ups</h5>
              <p class="text-sm text-green-500">6-10 each side | Unilateral strength</p>
            </div>
            <div class="border-b border-green-100 pb-2">
              <h5 class="font-semibold text-green-600">Handstand Progression</h5>
              <p class="text-sm text-green-500">Wall-assisted holds: 15-30s</p>
            </div>
            <div>
              <h5 class="font-semibold text-green-600">Plank Variations</h5>
              <p class="text-sm text-green-500">Side planks, plank up-downs</p>
            </div>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h4 class="font-bold text-green-700 mb-4">🦵 Advanced Lower Body</h4>
          <div class="space-y-3">
            <div class="border-b border-green-100 pb-2">
              <h5 class="font-semibold text-green-600">Jump Squats</h5>
              <p class="text-sm text-green-500">15-20 reps | Explosive power</p>
            </div>
            <div class="border-b border-green-100 pb-2">
              <h5 class="font-semibold text-green-600">Bulgarian Split Squats</h5>
              <p class="text-sm text-green-500">12-15 each leg | Single-leg strength</p>
            </div>
            <div class="border-b border-green-100 pb-2">
              <h5 class="font-semibold text-green-600">Single-leg Deadlifts</h5>
              <p class="text-sm text-green-500">10-12 each leg | Balance & hamstrings</p>
            </div>
            <div>
              <h5 class="font-semibold text-green-600">Calf Raise Variations</h5>
              <p class="text-sm text-green-500">Single-leg, jumping variations</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-green-200 p-4 rounded-lg">
        <p class="font-semibold text-green-800">📅 Schedule: 4-5 days/week | Focus: Progressive overload and advanced movements</p>
      </div>
    </div>

    <div class="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-2xl mb-8 border border-orange-200">
      <h2 class="text-3xl font-bold text-orange-800 mb-6">🎯 Small Space, Big Results</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h3 class="text-xl font-bold text-orange-700 mb-4">📐 Space Requirements</h3>
          <ul class="space-y-2 text-orange-600">
            <li>• <strong>Minimum:</strong> 6x4 feet (your bedroom!)</li>
            <li>• <strong>Ideal:</strong> 8x6 feet (living room corner)</li>
            <li>• <strong>Height:</strong> Arm's reach above head</li>
            <li>• <strong>Equipment:</strong> Just your body weight</li>
          </ul>
          
          <h3 class="text-xl font-bold text-orange-700 mb-4 mt-6">🛋️ Furniture Hacks</h3>
          <ul class="space-y-2 text-orange-600">
            <li>• <strong>Chair:</strong> Tricep dips, incline push-ups</li>
            <li>• <strong>Wall:</strong> Wall squats, handstand practice</li>
            <li>• <strong>Stairs:</strong> Step-ups, calf raises</li>
            <li>• <strong>Bed:</strong> Incline planks, resistance band anchor</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold text-orange-700 mb-4">⚡ Time-Saving Tips</h3>
          <ul class="space-y-2 text-orange-600">
            <li>• <strong>Morning routine:</strong> 5-min energizer</li>
            <li>• <strong>Work breaks:</strong> 2-min desk exercises</li>
            <li>• <strong>TV time:</strong> Commercial break workouts</li>
            <li>• <strong>Study breaks:</strong> Quick movement sessions</li>
          </ul>
          
          <h3 class="text-xl font-bold text-orange-700 mb-4 mt-6">🎵 Motivation Boosters</h3>
          <ul class="space-y-2 text-orange-600">
            <li>• Create high-energy playlist</li>
            <li>• Workout with family/roommates</li>
            <li>• Take progress photos weekly</li>
            <li>• Reward yourself for consistency</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl mb-8 border border-purple-200">
      <h2 class="text-3xl font-bold text-purple-800 mb-6">📈 Track Your Transformation</h2>
      <div class="grid md:grid-cols-4 gap-4">
        <div class="bg-white p-4 rounded-lg text-center shadow-sm">
          <h4 class="font-bold text-purple-700 mb-2">Week 1</h4>
          <p class="text-2xl font-bold text-purple-600">Foundation</p>
          <p class="text-sm text-purple-500">Form & Habit</p>
        </div>
        <div class="bg-white p-4 rounded-lg text-center shadow-sm">
          <h4 class="font-bold text-purple-700 mb-2">Week 2</h4>
          <p class="text-2xl font-bold text-purple-600">Strength</p>
          <p class="text-sm text-purple-500">+20% Reps</p>
        </div>
        <div class="bg-white p-4 rounded-lg text-center shadow-sm">
          <h4 class="font-bold text-purple-700 mb-2">Week 3</h4>
          <p class="text-2xl font-bold text-purple-600">Power</p>
          <p class="text-sm text-purple-500">Advanced Moves</p>
        </div>
        <div class="bg-white p-4 rounded-lg text-center shadow-sm">
          <h4 class="font-bold text-purple-700 mb-2">Week 4</h4>
          <p class="text-2xl font-bold text-purple-600">Mastery</p>
          <p class="text-sm text-purple-500">Peak Performance</p>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
      <h2 class="text-3xl font-bold mb-4">🌟 Your Fitness Journey Starts NOW!</h2>
      <p class="text-xl mb-6">Remember: Consistency beats intensity. A 20-minute workout done regularly is infinitely better than a 2-hour workout done once a week.</p>
      <div class="bg-white/20 p-4 rounded-lg inline-block">
        <p class="text-2xl font-bold">💪 Ready to transform your life?</p>
        <p class="text-lg">Start with just 10 minutes today!</p>
      </div>
    </div>
    `,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
    category: "Fitness",
    readTime: "12 min read",
    author: "Arjun Patel",
    date: "December 7, 2024",
    tags: ["home-workout", "bodyweight", "fitness", "no-equipment", "transformation"]
  },
  "3": {
    id: 3,
    title: "Healthy Indian Breakfast Ideas Under ₹50",
    content: `
    <div class="bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-xl mb-8 border-l-4 border-amber-500">
      <h2 class="text-2xl font-bold text-amber-800 mb-3">🌅 The Most Important Meal Revolution</h2>
      <p class="text-amber-700">These 15 power-packed breakfast recipes will energize your mornings and save you thousands of rupees monthly!</p>
    </div>

    <p class="text-lg leading-relaxed mb-6">Your breakfast sets the tone for your entire day. Yet most young Indians either skip breakfast or grab expensive, unhealthy options. This comprehensive guide will revolutionize your mornings with delicious, nutritious, and incredibly affordable Indian breakfast ideas.</p>

    <h2 class="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">🧠 The Science Behind a Perfect Breakfast</h2>
    
    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h3 class="text-xl font-bold text-blue-800 mb-4">⚡ What Happens When You Skip Breakfast</h3>
        <ul class="space-y-2 text-blue-700">
          <li>• Blood sugar drops by 30-40%</li>
          <li>• Metabolism slows down by 15%</li>
          <li>• Concentration decreases significantly</li>
          <li>• Overeating at lunch increases by 60%</li>
          <li>• Stress hormones spike</li>
          <li>• Energy crashes by 11 AM</li>
        </ul>
      </div>
      <div class="bg-green-50 p-6 rounded-xl border border-green-200">
        <h3 class="text-xl font-bold text-green-800 mb-4">🚀 Perfect Breakfast Benefits</h3>
        <ul class="space-y-2 text-green-700">
          <li>• Kickstarts metabolism by 25%</li>
          <li>• Improves focus and memory</li>
          <li>• Stabilizes blood sugar levels</li>
          <li>• Reduces unhealthy cravings</li>
          <li>• Boosts energy for 4-6 hours</li>
          <li>• Supports weight management</li>
        </ul>
      </div>
    </div>

    <h2 class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">🍽️ 15 Power-Packed Breakfast Champions</h2>

    <div class="space-y-8 mb-8">
      <div class="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200">
        <div class="flex items-center mb-6">
          <span class="text-4xl mr-4">🥞</span>
          <h3 class="text-2xl font-bold text-orange-800">1. Masala Oats Upma Supreme</h3>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-bold text-orange-700 mb-2">💰 Cost Breakdown</h4>
            <ul class="text-sm text-orange-600">
              <li>• Oats (1/2 cup): ₹8</li>
              <li>• Vegetables: ₹12</li>
              <li>• Spices: ₹3</li>
              <li>• Oil: ₹2</li>
              <li><strong>Total: ₹25</strong></li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-bold text-orange-700 mb-2">🏋️ Nutrition Facts</h4>
            <ul class="text-sm text-orange-600">
              <li>• Protein: 12g</li>
              <li>• Fiber: 8g</li>
              <li>• Complex carbs: 35g</li>
              <li>• Calories: 280</li>
              <li>• Iron: 2.5mg</li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-bold text-orange-700 mb-2">⏱️ Quick Recipe</h4>
            <ol class="text-sm text-orange-600 list-decimal list-inside">
              <li>Dry roast oats (2 mins)</li>
              <li>Tempering: mustard, curry leaves</li>
              <li>Add veggies, sauté (3 mins)</li>
              <li>Add oats + water, cook (5 mins)</li>
              <li>Garnish with coriander</li>
            </ol>
          </div>
        </div>
        <div class="bg-orange-100 p-4 rounded-lg mt-4">
          <p class="font-semibold text-orange-800">💡 Pro Tip: Add 1 tbsp peanuts for extra protein and crunch! Prep veggies the night before to save 5 minutes.</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl border border-green-200">
        <div class="flex items-center mb-6">
          <span class="text-4xl mr-4">🌱</span>
          <h3 class="text-2xl font-bold text-green-800">2. Protein-Rich Moong Dal Chilla</h3>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-bold text-green-700 mb-3">🥘 Ingredients (Serves 2)</h4>
            <ul class="space-y-1 text-green-600">
              <li>• Soaked moong dal: 1 cup (₹15)</li>
              <li>• Ginger-green chili paste: 1 tsp (₹2)</li>
              <li>• Onion, tomato, coriander: (₹8)</li>
              <li>• Spices (turmeric, cumin): (₹2)</li>
              <li>• Oil for cooking: (₹3)</li>
            </ul>
            <p class="font-bold text-green-800 mt-2">Total Cost: ₹30 (₹15 per serving)</p>
          </div>
          <div>
            <h4 class="font-bold text-green-700 mb-3">⚡ Power Benefits</h4>
            <ul class="space-y-1 text-green-600">
              <li>• Complete protein: 18g per serving</li>
              <li>• Folate rich - great for brain health</li>
              <li>• Easy to digest</li>
              <li>• Keeps you full for 4+ hours</li>
              <li>• Perfect post-workout meal</li>
            </ul>
          </div>
        </div>
        <div class="bg-green-100 p-4 rounded-lg mt-4">
          <h4 class="font-semibold text-green-800 mb-2">🔥 Flavor Variations:</h4>
          <div class="grid md:grid-cols-3 gap-4 text-sm text-green-700">
            <div><strong>South Indian:</strong> Add curry leaves, mustard seeds</div>
            <div><strong>Punjabi Style:</strong> Add ajwain, coriander seeds</div>
            <div><strong>Mumbai Style:</strong> Add chat masala, mint chutney</div>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
        <div class="flex items-center mb-6">
          <span class="text-4xl mr-4">🥜</span>
          <h3 class="text-2xl font-bold text-yellow-800">3. Ultimate Poha Power Bowl</h3>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-lg">
            <h4 class="font-bold text-yellow-700 mb-3">🌟 The Secret Formula</h4>
            <div class="space-y-2 text-yellow-600">
              <p><strong>Base:</strong> 1 cup thick poha (₹8)</p>
              <p><strong>Protein Power:</strong> 2 tbsp peanuts (₹6)</p>
              <p><strong>Veggie Boost:</strong> Onion, peas, carrot (₹4)</p>
              <p><strong>Flavor Magic:</strong> Curry leaves, mustard seeds (₹2)</p>
              <p class="font-bold text-yellow-800">Total: ₹20</p>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg">
            <h4 class="font-bold text-yellow-700 mb-3">⏰ 10-Minute Method</h4>
            <ol class="list-decimal list-inside space-y-1 text-yellow-600 text-sm">
              <li>Wash poha, drain (2 mins)</li>
              <li>Heat oil, add tempering (1 min)</li>
              <li>Add veggies, sauté (3 mins)</li>
              <li>Add poha, spices, mix (2 mins)</li>
              <li>Garnish & serve (2 mins)</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-2xl mb-8 border border-blue-200">
      <h2 class="text-3xl font-bold text-blue-800 mb-6">📊 Weekly Breakfast Planner (₹280 total)</h2>
      <div class="grid md:grid-cols-7 gap-2 text-center">
        <div class="bg-white p-4 rounded-lg">
          <h4 class="font-bold text-blue-700 mb-2">Monday</h4>
          <p class="text-sm text-blue-600">Masala Oats</p>
          <p class="text-xs text-blue-500">₹25</p>
        </div>
        <div class="bg-white p-4 rounded-lg">
          <h4 class="font-bold text-blue-700 mb-2">Tuesday</h4>
          <p class="text-sm text-blue-600">Moong Chilla</p>
          <p class="text-xs text-blue-500">₹30</p>
        </div>
        <div class="bg-white p-4 rounded-lg">
          <h4 class="font-bold text-blue-700 mb-2">Wednesday</h4>
          <p class="text-sm text-blue-600">Poha Special</p>
          <p class="text-xs text-blue-500">₹20</p>
        </div>
        <div class="bg-white p-4 rounded-lg">
          <h4 class="font-bold text-blue-700 mb-2">Thursday</h4>
          <p class="text-sm text-blue-600">Ragi Smoothie</p>
          <p class="text-xs text-blue-500">₹35</p>
        </div>
        <div class="bg-white p-4 rounded-lg">
          <h4 class="font-bold text-blue-700 mb-2">Friday</h4>
          <p class="text-sm text-blue-600">Daliya Upma</p>
          <p class="text-xs text-blue-500">₹40</p>
        </div>
        <div class="bg-white p-4 rounded-lg">
          <h4 class="font-bold text-blue-700 mb-2">Saturday</h4>
          <p class="text-sm text-blue-600">Besan Chilla</p>
          <p class="text-xs text-blue-500">₹35</p>
        </div>
        <div class="bg-white p-4 rounded-lg">
          <h4 class="font-bold text-blue-700 mb-2">Sunday</h4>
          <p class="text-sm text-blue-600">Mixed Sprouts</p>
          <p class="text-xs text-blue-500">₹45</p>
        </div>
      </div>
      <div class="bg-blue-200 p-4 rounded-lg mt-4 text-center">
        <p class="font-bold text-blue-800 text-xl">Weekly Average: ₹40 per day | Monthly: ₹1,200</p>
        <p class="text-blue-700">Compare with: Café breakfast ₹150-300 | Monthly saving: ₹3,000-7,000!</p>
      </div>
    </div>

    <div class="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-2xl mb-8 border border-green-200">
      <h2 class="text-3xl font-bold text-green-800 mb-6">🛒 Smart Shopping Strategy</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg">
          <h3 class="font-bold text-green-700 mb-4">📦 Monthly Bulk Buy</h3>
          <ul class="space-y-2 text-green-600 text-sm">
            <li>• Oats: 2kg (₹200) - lasts 2 months</li>
            <li>• Moong dal: 2kg (₹240) - lasts 1.5 months</li>
            <li>• Poha: 1kg (₹80) - lasts 1 month</li>
            <li>• Spices: ₹100 - lasts 3 months</li>
            <li>• Oil: 1L (₹120) - lasts 2 months</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg">
          <h3 class="font-bold text-green-700 mb-4">🥬 Weekly Fresh Buy</h3>
          <ul class="space-y-2 text-green-600 text-sm">
            <li>• Onions: 1kg (₹30)</li>
            <li>• Tomatoes: 500g (₹25)</li>
            <li>• Green chilies: 100g (₹10)</li>
            <li>• Coriander: 1 bunch (₹10)</li>
            <li>• Seasonal veggies: (₹50)</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg">
          <h3 class="font-bold text-green-700 mb-4">💡 Money-Saving Hacks</h3>
          <ul class="space-y-2 text-green-600 text-sm">
            <li>• Buy from wholesale markets</li>
            <li>• Choose local/seasonal produce</li>
            <li>• Store properly to avoid waste</li>
            <li>• Prep ingredients on Sunday</li>
            <li>• Make larger batches</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
      <h2 class="text-3xl font-bold mb-4">🌟 Transform Your Mornings, Transform Your Life!</h2>
      <p class="text-xl mb-6">A healthy breakfast is not just about food – it's about setting the foundation for a successful, energetic, and productive day.</p>
      <div class="grid md:grid-cols-3 gap-4 mt-6">
        <div class="bg-white/20 p-4 rounded-lg">
          <p class="font-bold text-2xl">₹1,200</p>
          <p>Monthly breakfast cost</p>
        </div>
        <div class="bg-white/20 p-4 rounded-lg">
          <p class="font-bold text-2xl">15 mins</p>
          <p>Average prep time</p>
        </div>
        <div class="bg-white/20 p-4 rounded-lg">
          <p class="font-bold text-2xl">100%</p>
          <p>Energy boost guarantee</p>
        </div>
      </div>
    </div>
    `,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop",
    category: "Recipes",
    readTime: "10 min read",
    author: "Meera Singh",
    date: "December 6, 2024",
    tags: ["breakfast", "budget", "healthy", "indian-recipes", "nutrition"]
  },
  "4": {
    id: 4,
    title: "Mental Health and Fitness: The Indian Wellness Revolution",
    content: `
    <div class="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl mb-8 border-l-4 border-purple-500">
      <h2 class="text-2xl font-bold text-purple-800 mb-3">🧘‍♀️ Ancient Wisdom Meets Modern Science</h2>
      <p class="text-purple-700">Discover how traditional Indian practices can revolutionize your mental health while keeping you physically fit – all backed by cutting-edge research!</p>
    </div>

    <p class="text-lg leading-relaxed mb-6">India has always been the birthplace of holistic wellness. While the world is just discovering the mind-body connection, our ancestors mastered it thousands of years ago. This comprehensive guide combines ancient Indian wisdom with modern scientific research to create the ultimate mental health and fitness protocol.</p>

    <h2 class="text-3xl font-bold bg-gradient-to-r from-saffron-600 to-green-600 bg-clip-text text-transparent mb-6">🇮🇳 The Mental Health Crisis in Modern India</h2>
    
    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="bg-red-50 p-6 rounded-xl border border-red-200">
        <h3 class="text-xl font-bold text-red-800 mb-4">📊 Alarming Statistics</h3>
        <ul class="space-y-2 text-red-700">
          <li>• 1 in 7 Indians suffer from mental disorders</li>
          <li>• 36% increase in depression since 2020</li>
          <li>• Young adults (18-29) most affected</li>
          <li>• Only 25% seek professional help</li>
          <li>• Work stress affects 89% of professionals</li>
          <li>• Social media anxiety up by 60%</li>
        </ul>
      </div>
      <div class="bg-green-50 p-6 rounded-xl border border-green-200">
        <h3 class="text-xl font-bold text-green-800 mb-4">🌱 The Solution: Integrated Wellness</h3>
        <ul class="space-y-2 text-green-700">
          <li>• Physical exercise improves mood by 40%</li>
          <li>• Yoga reduces anxiety by 60%</li>
          <li>• Meditation increases happiness by 45%</li>
          <li>• Community support boosts recovery</li>
          <li>• Indian practices show 80% success rate</li>
          <li>• Holistic approach prevents relapse</li>
        </ul>
      </div>
    </div>

    <h2 class="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-6">🕉️ The 5-Pillar Indian Wellness System</h2>

    <div class="space-y-8 mb-8">
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
        <div class="flex items-center mb-6">
          <span class="text-4xl mr-4">🧘‍♂️</span>
          <h3 class="text-2xl font-bold text-blue-800">Pillar 1: Pranayama (Breath Mastery)</h3>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg">
            <h4 class="font-bold text-blue-700 mb-3">🌬️ Anulom Vilom (5 mins)</h4>
            <ul class="text-sm text-blue-600 space-y-1">
              <li>• Close right nostril, inhale left (4 counts)</li>
              <li>• Close both, hold (4 counts)</li>
              <li>• Close left, exhale right (6 counts)</li>
              <li>• Repeat 10-15 cycles</li>
            </ul>
            <p class="text-xs text-blue-500 mt-2"><strong>Benefits:</strong> Reduces anxiety, improves focus</p>
          </div>
          <div class="bg-white p-6 rounded-lg">
            <h4 class="font-bold text-blue-700 mb-3">🔥 Bhastrika (3 mins)</h4>
            <ul class="text-sm text-blue-600 space-y-1">
              <li>• Forceful inhale through nose</li>
              <li>• Forceful exhale through nose</li>
              <li>• 20 rapid breaths</li>
              <li>• Hold breath 10 seconds</li>
            </ul>
            <p class="text-xs text-blue-500 mt-2"><strong>Benefits:</strong> Energizes body, combats depression</p>
          </div>
          <div class="bg-white p-6 rounded-lg">
            <h4 class="font-bold text-blue-700 mb-3">🌊 Ocean Breath (7 mins)</h4>
            <ul class="text-sm text-blue-600 space-y-1">
              <li>• Inhale creating ocean sound</li>
              <li>• Exhale with same sound</li>
              <li>• Slow, deep, rhythmic</li>
              <li>• Focus on sound vibration</li>
            </ul>
            <p class="text-xs text-blue-500 mt-2"><strong>Benefits:</strong> Calms nervous system instantly</p>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
        <div class="flex items-center mb-6">
          <span class="text-4xl mr-4">🤸‍♀️</span>
          <h3 class="text-2xl font-bold text-purple-800">Pillar 2: Asanas (Healing Postures)</h3>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-lg">
            <h4 class="font-bold text-purple-700 mb-4">🌅 Morning Sequence (15 mins)</h4>
            <div class="space-y-3">
              <div class="border-b border-purple-100 pb-2">
                <p class="font-semibold text-purple-600">Surya Namaskara (5 rounds)</p>
                <p class="text-xs text-purple-500">Full body activation, vitamin D boost</p>
              </div>
              <div class="border-b border-purple-100 pb-2">
                <p class="font-semibold text-purple-600">Bhujangasana (Cobra) - 1 min</p>
                <p class="text-xs text-purple-500">Opens heart chakra, releases endorphins</p>
              </div>
              <div class="border-b border-purple-100 pb-2">
                <p class="font-semibold text-purple-600">Marjaryasana (Cat-Cow) - 2 mins</p>
                <p class="text-xs text-purple-500">Spine flexibility, stress release</p>
              </div>
              <div>
                <p class="font-semibold text-purple-600">Balasana (Child's Pose) - 3 mins</p>
                <p class="text-xs text-purple-500">Deep relaxation, anxiety relief</p>
              </div>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg">
            <h4 class="font-bold text-purple-700 mb-4">🌙 Evening Sequence (12 mins)</h4>
            <div class="space-y-3">
              <div class="border-b border-purple-100 pb-2">
                <p class="font-semibold text-purple-600">Paschimottanasana - 3 mins</p>
                <p class="text-xs text-purple-500">Forward fold, calms nervous system</p>
              </div>
              <div class="border-b border-purple-100 pb-2">
                <p class="font-semibold text-purple-600">Viparita Karani - 5 mins</p>
                <p class="text-xs text-purple-500">Legs up wall, improves circulation</p>
              </div>
              <div>
                <p class="font-semibold text-purple-600">Savasana - 4 mins</p>
                <p class="text-xs text-purple-500">Complete relaxation, mental reset</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-green-100 to-teal-100 p-8 rounded-2xl mb-8 border border-green-200">
      <h2 class="text-3xl font-bold text-green-800 mb-6">🌿 Ayurvedic Mental Health Protocol</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg">
          <h3 class="font-bold text-green-700 mb-4">🌱 Vata (Air) Imbalance</h3>
          <p class="text-sm text-green-600 mb-3"><strong>Symptoms:</strong> Anxiety, restlessness, insomnia</p>
          <h4 class="font-semibold text-green-700 mb-2">Natural Solutions:</h4>
          <ul class="text-sm text-green-600 space-y-1">
            <li>• Ashwagandha (500mg daily)</li>
            <li>• Warm oil massage</li>
            <li>• Regular meal times</li>
            <li>• Grounding exercises</li>
            <li>• Warm, cooked foods</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg">
          <h3 class="font-bold text-green-700 mb-4">🔥 Pitta (Fire) Imbalance</h3>
          <p class="text-sm text-green-600 mb-3"><strong>Symptoms:</strong> Anger, irritability, perfectionism</p>
          <h4 class="font-semibold text-green-700 mb-2">Natural Solutions:</h4>
          <ul class="text-sm text-green-600 space-y-1">
            <li>• Brahmi (300mg daily)</li>
            <li>• Cooling practices</li>
            <li>• Moderate exercise</li>
            <li>• Sweet, bitter foods</li>
            <li>• Moon gazing meditation</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg">
          <h3 class="font-bold text-green-700 mb-4">🌊 Kapha (Earth) Imbalance</h3>
          <p class="text-sm text-green-600 mb-3"><strong>Symptoms:</strong> Depression, lethargy, attachment</p>
          <h4 class="font-semibold text-green-700 mb-2">Natural Solutions:</h4>
          <ul class="text-sm text-green-600 space-y-1">
            <li>• Turmeric + black pepper</li>
            <li>• Vigorous exercise</li>
            <li>• Early rising (5 AM)</li>
            <li>• Spicy, light foods</li>
            <li>• Social activities</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-2xl mb-8 border border-amber-200">
      <h2 class="text-3xl font-bold text-amber-800 mb-6">🏃‍♂️ Fitness for Mental Health: The Indian Way</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-lg">
          <h3 class="font-bold text-amber-700 mb-4">🌊 Traditional Exercises</h3>
          <div class="space-y-3">
            <div class="border-b border-amber-100 pb-2">
              <p class="font-semibold text-amber-600">Mallakhamb (15 mins)</p>
              <p class="text-xs text-amber-500">Full-body strength + mental focus</p>
            </div>
            <div class="border-b border-amber-100 pb-2">
              <p class="font-semibold text-amber-600">Kalaripayattu basics (20 mins)</p>
              <p class="text-xs text-amber-500">Martial arts + meditation combo</p>
            </div>
            <div class="border-b border-amber-100 pb-2">
              <p class="font-semibold text-amber-600">Classical Indian dance (30 mins)</p>
              <p class="text-xs text-amber-500">Creative expression + cardio</p>
            </div>
            <div>
              <p class="font-semibold text-amber-600">Walking meditation (25 mins)</p>
              <p class="text-xs text-amber-500">Mindful movement in nature</p>
            </div>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg">
          <h3 class="font-bold text-amber-700 mb-4">💪 Modern Adaptations</h3>
          <div class="space-y-3">
            <div class="border-b border-amber-100 pb-2">
              <p class="font-semibold text-amber-600">Yoga Flow + HIIT (25 mins)</p>
              <p class="text-xs text-amber-500">Ancient poses + modern intensity</p>
            </div>
            <div class="border-b border-amber-100 pb-2">
              <p class="font-semibold text-amber-600">Meditation + Weight training</p>
              <p class="text-xs text-amber-500">Mindful strength building</p>
            </div>
            <div class="border-b border-amber-100 pb-2">
              <p class="font-semibold text-amber-600">Bhangra fitness (30 mins)</p>
              <p class="text-xs text-amber-500">Joyful cardio + cultural pride</p>
            </div>
            <div>
              <p class="font-semibold text-amber-600">Pranayama + Running</p>
              <p class="text-xs text-amber-500">Rhythmic breathing + endurance</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center">
      <h2 class="text-3xl font-bold mb-4">🌟 Your Journey to Complete Wellness Starts Today!</h2>
      <p class="text-xl mb-6">Remember: You don't need expensive therapy or foreign techniques. The solutions to modern mental health challenges lie in our ancient wisdom, backed by modern science.</p>
      <div class="grid md:grid-cols-3 gap-4 mt-6">
        <div class="bg-white/20 p-4 rounded-lg">
          <p class="font-bold text-2xl">15 mins</p>
          <p>Daily practice</p>
        </div>
        <div class="bg-white/20 p-4 rounded-lg">
          <p class="font-bold text-2xl">30 days</p>
          <p>To see results</p>
        </div>
        <div class="bg-white/20 p-4 rounded-lg">
          <p class="font-bold text-2xl">5000+ years</p>
          <p>Proven wisdom</p>
        </div>
      </div>
    </div>
    `,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    category: "Wellness",
    readTime: "15 min read",
    author: "Dr. Rajesh Kumar",
    date: "December 5, 2024",
    tags: ["mental-health", "yoga", "meditation", "ayurveda", "wellness"]
  },
  "5": {
    id: 5,
    title: "Street Food Makeover: Healthy Versions of Indian Favorites",
    content: `
    <div class="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl mb-8 border-l-4 border-red-500">
      <h2 class="text-2xl font-bold text-red-800 mb-3">🍴 Guilt-Free Indulgence Revolution</h2>
      <p class="text-red-700">Transform your favorite street foods into healthy powerhouses without losing that authentic Indian taste you crave!</p>
    </div>

    <p class="text-lg leading-relaxed mb-6">Who says you can't have your chaat and eat it too? Indian street food is a celebration of flavors, but traditional preparations often pack hidden calories, unhealthy oils, and excessive salt. This revolutionary guide will show you how to recreate every street food favorite with a healthy twist that's even more delicious than the original!</p>

    <h2 class="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">🚫 The Dark Side of Street Food</h2>
    
    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="bg-red-50 p-6 rounded-xl border border-red-200">
        <h3 class="text-xl font-bold text-red-800 mb-4">⚠️ Hidden Health Hazards</h3>
        <ul class="space-y-2 text-red-700">
          <li>• Reused oil increases cancer risk by 40%</li>
          <li>• Average chaat contains 800-1200 calories</li>
          <li>• High sodium levels spike blood pressure</li>
          <li>• Refined flour causes blood sugar spikes</li>
          <li>• Food coloring linked to hyperactivity</li>
          <li>• Poor hygiene standards</li>
        </ul>
      </div>
      <div class="bg-green-50 p-6 rounded-xl border border-green-200">
        <h3 class="text-xl font-bold text-green-800 mb-4">✅ Healthy Makeover Benefits</h3>
        <ul class="space-y-2 text-green-700">
          <li>• 60% fewer calories, double the nutrition</li>
          <li>• Fresh ingredients boost immunity</li>
          <li>• Fiber-rich options improve digestion</li>
          <li>• Natural flavors enhance taste buds</li>
          <li>• Cost 50% less than street vendors</li>
          <li>• Complete food safety control</li>
        </ul>
      </div>
    </div>

    <h2 class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">🏆 Top 8 Street Food Makeovers</h2>

    <div class="space-y-8 mb-8">
      <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
        <div class="flex items-center mb-6">
          <span class="text-4xl mr-4">🥗</span>
          <h3 class="text-2xl font-bold text-orange-800">1. Bhel Puri Revolution</h3>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-lg">
            <h4 class="font-bold text-orange-700 mb-3">🔄 Traditional vs Healthy</h4>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between border-b border-orange-100 pb-1">
                <span class="text-red-600">Puffed rice (fried)</span>
                <span class="text-green-600">Quinoa puffs (roasted)</span>
              </div>
              <div class="flex justify-between border-b border-orange-100 pb-1">
                <span class="text-red-600">Sev (deep fried)</span>
                <span class="text-green-600">Roasted chickpea crumble</span>
              </div>
              <div class="flex justify-between border-b border-orange-100 pb-1">
                <span class="text-red-600">White bread</span>
                <span class="text-green-600">Multigrain toast cubes</span>
              </div>
              <div class="flex justify-between">
                <span class="text-red-600">Sweet chutney</span>
                <span class="text-green-600">Date-jaggery sauce</span>
              </div>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg">
            <h4 class="font-bold text-orange-700 mb-3">⚡ Nutrition Boost</h4>
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div class="text-center">
                <p class="font-bold text-red-600 text-lg">Before</p>
                <p>Calories: 450</p>
                <p>Protein: 8g</p>
                <p>Fiber: 2g</p>
                <p>Sodium: 1200mg</p>
              </div>
              <div class="text-center">
                <p class="font-bold text-green-600 text-lg">After</p>
                <p>Calories: 280</p>
                <p>Protein: 15g</p>
                <p>Fiber: 8g</p>
                <p>Sodium: 400mg</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-orange-100 p-4 rounded-lg mt-4">
          <h4 class="font-semibold text-orange-800 mb-2">🍽️ Power Recipe:</h4>
          <p class="text-orange-700 text-sm">Mix 1 cup quinoa puffs + chopped vegetables + sprouted moong + homemade mint chutney + roasted chickpea powder. Garnish with pomegranate seeds for antioxidants!</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200">
        <div class="flex items-center mb-6">
          <span class="text-4xl mr-4">🌯</span>
          <h3 class="text-2xl font-bold text-green-800">2. Samosa Makeover Magic</h3>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-bold text-green-700 mb-3">🥟 Baked Samosa</h4>
            <ul class="text-sm text-green-600 space-y-1">
              <li>• Whole wheat pastry</li>
              <li>• Air-fryer or baked</li>
              <li>• Sweet potato filling</li>
              <li>• Peas + corn combo</li>
              <li>• Minimal oil (1 tsp)</li>
            </ul>
            <p class="text-xs text-green-500 mt-2">Calories: 120 (vs 300)</p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-bold text-green-700 mb-3">🫘 Sprout Samosa</h4>
            <ul class="text-sm text-green-600 space-y-1">
              <li>• Mixed sprouts filling</li>
              <li>• High protein content</li>
              <li>• Quinoa outer layer</li>
              <li>• Steamed preparation</li>
              <li>• Immunity boosting</li>
            </ul>
            <p class="text-xs text-green-500 mt-2">Protein: 12g per piece</p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-bold text-green-700 mb-3">🥬 Veggie Samosa</h4>
            <ul class="text-sm text-green-600 space-y-1">
              <li>• Spinach + paneer</li>
              <li>• Cauliflower + peas</li>
              <li>• Oats outer covering</li>
              <li>• Grilled preparation</li>
              <li>• Calcium rich</li>
            </ul>
            <p class="text-xs text-green-500 mt-2">Fiber: 6g per piece</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl mb-8 border border-purple-200">
      <h2 class="text-3xl font-bold text-purple-800 mb-6">🍲 Complete Street Food Transformation Guide</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-purple-700">🥘 Chaat Champions</h3>
          <div class="space-y-3">
            <div class="bg-white p-4 rounded-lg">
              <h4 class="font-semibold text-purple-600">Healthy Pani Puri</h4>
              <p class="text-sm text-purple-500">Baked wheat puris + mint-coriander water + boiled chickpeas</p>
              <p class="text-xs text-purple-400">50% less sodium, 3x more protein</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <h4 class="font-semibold text-purple-600">Power Aloo Tikki</h4>
              <p class="text-sm text-purple-500">Sweet potato + quinoa patties + pan-grilled method</p>
              <p class="text-xs text-purple-400">Complex carbs + complete proteins</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <h4 class="font-semibold text-purple-600">Superfood Dahi Vada</h4>
              <p class="text-sm text-purple-500">Lentil + oats vadas + Greek yogurt + chia seeds</p>
              <p class="text-xs text-purple-400">Probiotics + omega-3 boost</p>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-purple-700">🌶️ Spicy Favorites</h3>
          <div class="space-y-3">
            <div class="bg-white p-4 rounded-lg">
              <h4 class="font-semibold text-purple-600">Guilt-Free Pav Bhaji</h4>
              <p class="text-sm text-purple-500">Multigrain pav + veggie-loaded bhaji + coconut oil</p>
              <p class="text-xs text-purple-400">High fiber + good fats</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <h4 class="font-semibold text-purple-600">Protein Vada Pav</h4>
              <p class="text-sm text-purple-500">Quinoa vada + whole wheat pav + green chutney</p>
              <p class="text-xs text-purple-400">Complete amino acid profile</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <h4 class="font-semibold text-purple-600">Clean Chole Kulche</h4>
              <p class="text-sm text-purple-500">Pressure-cooked chickpeas + baked kulcha + minimal oil</p>
              <p class="text-xs text-purple-400">Plant protein + complex carbs</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-blue-100 to-indigo-100 p-8 rounded-2xl mb-8 border border-blue-200">
      <h2 class="text-3xl font-bold text-blue-800 mb-6">🛒 Smart Shopping for Street Food Makeovers</h2>
      <div class="grid md:grid-cols-4 gap-4">
        <div class="bg-white p-4 rounded-lg">
          <h4 class="font-bold text-blue-700 mb-3">🌾 Healthy Bases</h4>
          <ul class="text-sm text-blue-600 space-y-1">
            <li>• Quinoa puffs</li>
            <li>• Brown rice flakes</li>
            <li>• Oats flour</li>
            <li>• Whole wheat flour</li>
            <li>• Millet flour</li>
          </ul>
        </div>
        <div class="bg-white p-4 rounded-lg">
          <h4 class="font-bold text-blue-700 mb-3">🥗 Fresh Add-ins</h4>
          <ul class="text-sm text-blue-600 space-y-1">
            <li>• Mixed sprouts</li>
            <li>• Pomegranate seeds</li>
            <li>• Greek yogurt</li>
            <li>• Fresh herbs</li>
            <li>• Seasonal vegetables</li>
          </ul>
        </div>
        <div class="bg-white p-4 rounded-lg">
          <h4 class="font-bold text-blue-700 mb-3">🧂 Natural Seasonings</h4>
          <ul class="text-sm text-blue-600 space-y-1">
            <li>• Rock salt</li>
            <li>• Chaat masala</li>
            <li>• Dried mint</li>
            <li>• Black pepper</li>
            <li>• Lemon juice</li>
          </ul>
        </div>
        <div class="bg-white p-4 rounded-lg">
          <h4 class="font-bold text-blue-700 mb-3">🫒 Healthy Fats</h4>
          <ul class="text-sm text-blue-600 space-y-1">
            <li>• Cold-pressed oils</li>
            <li>• Coconut oil</li>
            <li>• Ghee (small amounts)</li>
            <li>• Nuts and seeds</li>
            <li>• Avocado</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl text-center">
      <h2 class="text-3xl font-bold mb-4">🎉 Celebrate Food, Celebrate Health!</h2>
      <p class="text-xl mb-6">Street food is part of our culture and soul. You don't have to give it up – just make it better! These healthy makeovers prove that nutritious can be absolutely delicious.</p>
      <div class="grid md:grid-cols-3 gap-4 mt-6">
        <div class="bg-white/20 p-4 rounded-lg">
          <p class="font-bold text-2xl">8 recipes</p>
          <p>Healthy street food</p>
        </div>
        <div class="bg-white/20 p-4 rounded-lg">
          <p class="font-bold text-2xl">60% less</p>
          <p>Calories on average</p>
        </div>
        <div class="bg-white/20 p-4 rounded-lg">
          <p class="font-bold text-2xl">100%</p>
          <p>Authentic taste</p>
        </div>
      </div>
    </div>
    `,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=400&fit=crop",
    category: "Recipes",
    readTime: "12 min read",
    author: "Chef Ananya",
    date: "December 4, 2024",
    tags: ["street-food", "healthy", "indian-recipes", "makeover", "nutrition"]
  },
  "6": {
    id: 6,
    title: "Building Muscle on a Vegetarian Diet: Complete Guide",
    content: `
    <div class="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl mb-8 border-l-4 border-green-500">
      <h2 class="text-2xl font-bold text-green-800 mb-3">💪 Plant Power Muscle Building</h2>
      <p class="text-green-700">Discover how to build impressive muscle mass on a completely vegetarian diet – with science-backed strategies and delicious Indian meal plans!</p>
    </div>

    <p class="text-lg leading-relaxed mb-6">Think vegetarians can't build serious muscle? Think again! Some of the strongest people on earth follow plant-based diets. This comprehensive guide will shatter every myth about vegetarian muscle building and give you a complete roadmap to achieving your dream physique using only plant-based Indian foods.</p>

    <h2 class="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-6">🌱 The Vegetarian Advantage</h2>
    
    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="bg-green-50 p-6 rounded-xl border border-green-200">
        <h3 class="text-xl font-bold text-green-800 mb-4">✅ Science-Backed Benefits</h3>
        <ul class="space-y-2 text-green-700">
          <li>• 40% faster recovery between workouts</li>
          <li>• Lower inflammation levels</li>
          <li>• Better insulin sensitivity</li>
          <li>• Higher testosterone levels (plant sterols)</li>
          <li>• Improved cardiovascular health</li>
          <li>• Enhanced endurance capacity</li>
        </ul>
      </div>
      <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h3 class="text-xl font-bold text-blue-800 mb-4">🏆 Success Stories</h3>
        <ul class="space-y-2 text-blue-700">
          <li>• Patrik Baboumian: World's strongest man</li>
          <li>• Nimai Delgado: IFBB Pro bodybuilder</li>
          <li>• Torre Washington: Natural bodybuilder</li>
          <li>• Indian wrestlers: Traditional plant diet</li>
          <li>• Olympic weightlifters from India</li>
          <li>• Thousands of everyday success stories</li>
        </ul>
      </div>
    </div>

    <h2 class="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">🧬 The Complete Protein Myth Buster</h2>

    <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl mb-8 border border-yellow-200">
      <h3 class="text-2xl font-bold text-orange-800 mb-6">🔬 Protein Quality Science</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg">
          <h4 class="font-bold text-orange-700 mb-3">🥚 Complete Proteins</h4>
          <div class="space-y-2 text-orange-600 text-sm">
            <div class="flex justify-between">
              <span>Quinoa</span>
              <span class="font-bold">Score: 100</span>
            </div>
            <div class="flex justify-between">
              <span>Buckwheat</span>
              <span class="font-bold">Score: 95</span>
            </div>
            <div class="flex justify-between">
              <span>Soy (Tofu)</span>
              <span class="font-bold">Score: 90</span>
            </div>
            <div class="flex justify-between">
              <span>Hemp seeds</span>
              <span class="font-bold">Score: 87</span>
            </div>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg">
          <h4 class="font-bold text-orange-700 mb-3">🌾 Smart Combinations</h4>
          <div class="space-y-2 text-orange-600 text-sm">
            <p><strong>Rice + Dal</strong> = Complete protein</p>
            <p><strong>Roti + Dal</strong> = 20g protein</p>
            <p><strong>Khichdi</strong> = Perfect amino profile</p>
            <p><strong>Rajma + Rice</strong> = Muscle fuel</p>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg">
          <h4 class="font-bold text-orange-700 mb-3">⏰ Timing Strategy</h4>
          <div class="space-y-2 text-orange-600 text-sm">
            <p><strong>Pre-workout:</strong> Banana + almonds</p>
            <p><strong>Post-workout:</strong> Protein smoothie</p>
            <p><strong>Bedtime:</strong> Casein from paneer</p>
            <p><strong>Morning:</strong> High-protein breakfast</p>
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">🍽️ The Ultimate Vegetarian Muscle Building Meal Plan</h2>

    <div class="space-y-8 mb-8">
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
        <h3 class="text-2xl font-bold text-blue-800 mb-6">📅 7-Day Muscle Building Menu</h3>
        <div class="grid md:grid-cols-7 gap-2">
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-bold text-blue-700 mb-2">Monday</h4>
            <div class="space-y-1 text-xs text-blue-600">
              <p><strong>B:</strong> Protein pancakes</p>
              <p><strong>S:</strong> Almonds + dates</p>
              <p><strong>L:</strong> Quinoa bowl</p>
              <p><strong>S:</strong> Protein smoothie</p>
              <p><strong>D:</strong> Dal + brown rice</p>
            </div>
            <p class="text-xs text-blue-500 mt-2">Total: 110g protein</p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-bold text-blue-700 mb-2">Tuesday</h4>
            <div class="space-y-1 text-xs text-blue-600">
              <p><strong>B:</strong> Moong dal chilla</p>
              <p><strong>S:</strong> Greek yogurt</p>
              <p><strong>L:</strong> Rajma + roti</p>
              <p><strong>S:</strong> Peanut butter</p>
              <p><strong>D:</strong> Paneer curry</p>
            </div>
            <p class="text-xs text-blue-500 mt-2">Total: 105g protein</p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-bold text-blue-700 mb-2">Wednesday</h4>
            <div class="space-y-1 text-xs text-blue-600">
              <p><strong>B:</strong> Oats + whey</p>
              <p><strong>S:</strong> Mixed nuts</p>
              <p><strong>L:</strong> Chole + quinoa</p>
              <p><strong>S:</strong> Banana shake</p>
              <p><strong>D:</strong> Tofu stir-fry</p>
            </div>
            <p class="text-xs text-blue-500 mt-2">Total: 115g protein</p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-bold text-blue-700 mb-2">Thursday</h4>
            <div class="space-y-1 text-xs text-blue-600">
              <p><strong>B:</strong> Sprouts salad</p>
              <p><strong>S:</strong> Protein bar</p>
              <p><strong>L:</strong> Lentil soup</p>
              <p><strong>S:</strong> Cottage cheese</p>
              <p><strong>D:</strong> Stuffed roti</p>
            </div>
            <p class="text-xs text-blue-500 mt-2">Total: 100g protein</p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-bold text-blue-700 mb-2">Friday</h4>
            <div class="space-y-1 text-xs text-blue-600">
              <p><strong>B:</strong> Quinoa porridge</p>
              <p><strong>S:</strong> Roasted chickpeas</p>
              <p><strong>L:</strong> Dal khichdi</p>
              <p><strong>S:</strong> Protein smoothie</p>
              <p><strong>D:</strong> Soy curry + rice</p>
            </div>
            <p class="text-xs text-blue-500 mt-2">Total: 108g protein</p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-bold text-blue-700 mb-2">Saturday</h4>
            <div class="space-y-1 text-xs text-blue-600">
              <p><strong>B:</strong> Besan chilla</p>
              <p><strong>S:</strong> Trail mix</p>
              <p><strong>L:</strong> Black bean curry</p>
              <p><strong>S:</strong> Milk + almonds</p>
              <p><strong>D:</strong> Paneer tikka</p>
            </div>
            <p class="text-xs text-blue-500 mt-2">Total: 112g protein</p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-bold text-blue-700 mb-2">Sunday</h4>
            <div class="space-y-1 text-xs text-blue-600">
              <p><strong>B:</strong> Protein pancakes</p>
              <p><strong>S:</strong> Hummus + veggies</p>
              <p><strong>L:</strong> Mixed dal</p>
              <p><strong>S:</strong> Protein shake</p>
              <p><strong>D:</strong> Tempeh curry</p>
            </div>
            <p class="text-xs text-blue-500 mt-2">Total: 118g protein</p>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl border border-green-200">
        <h3 class="text-2xl font-bold text-green-800 mb-6">🥤 Power-Packed Protein Smoothie Recipes</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg">
            <h4 class="font-bold text-green-700 mb-3">🍫 Chocolate Muscle Builder</h4>
            <ul class="text-sm text-green-600 space-y-1 mb-3">
              <li>• 1 scoop plant protein powder</li>
              <li>• 1 tbsp peanut butter</li>
              <li>• 1 banana</li>
              <li>• 1 cup almond milk</li>
              <li>• 1 tbsp cocoa powder</li>
              <li>• 1 tsp chia seeds</li>
            </ul>
            <div class="bg-green-100 p-3 rounded text-center">
              <p class="font-bold text-green-800">35g Protein</p>
              <p class="text-xs text-green-600">Perfect post-workout</p>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg">
            <h4 class="font-bold text-green-700 mb-3">🥭 Tropical Gainer</h4>
            <ul class="text-sm text-green-600 space-y-1 mb-3">
              <li>• 1/2 cup Greek yogurt</li>
              <li>• 1/2 cup mango chunks</li>
              <li>• 2 tbsp hemp seeds</li>
              <li>• 1 cup coconut milk</li>
              <li>• 1 tbsp honey</li>
              <li>• 1/4 avocado</li>
            </ul>
            <div class="bg-green-100 p-3 rounded text-center">
              <p class="font-bold text-green-800">28g Protein</p>
              <p class="text-xs text-green-600">High calorie boost</p>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg">
            <h4 class="font-bold text-green-700 mb-3">🌱 Green Machine</h4>
            <ul class="text-sm text-green-600 space-y-1 mb-3">
              <li>• 1 cup spinach</li>
              <li>• 1 scoop vanilla protein</li>
              <li>• 1/2 apple</li>
              <li>• 1 tbsp almond butter</li>
              <li>• 1 cup oat milk</li>
              <li>• 1 tsp spirulina</li>
            </ul>
            <div class="bg-green-100 p-3 rounded text-center">
              <p class="font-bold text-green-800">32g Protein</p>
              <p class="text-xs text-green-600">Micronutrient dense</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl mb-8 border border-purple-200">
      <h2 class="text-3xl font-bold text-purple-800 mb-6">💊 Strategic Supplementation Guide</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-lg">
          <h3 class="font-bold text-purple-700 mb-4">🌟 Essential Supplements</h3>
          <div class="space-y-3">
            <div class="border-b border-purple-100 pb-2">
              <p class="font-semibold text-purple-600">Plant Protein Powder</p>
              <p class="text-xs text-purple-500">25-30g post-workout | Complete amino profile</p>
            </div>
            <div class="border-b border-purple-100 pb-2">
              <p class="font-semibold text-purple-600">Vitamin B12</p>
              <p class="text-xs text-purple-500">2.4mcg daily | Energy & nerve function</p>
            </div>
            <div class="border-b border-purple-100 pb-2">
              <p class="font-semibold text-purple-600">Creatine Monohydrate</p>
              <p class="text-xs text-purple-500">5g daily | Strength & power boost</p>
            </div>
            <div>
              <p class="font-semibold text-purple-600">Omega-3 (Algae-based)</p>
              <p class="text-xs text-purple-500">1000mg daily | Recovery & inflammation</p>
            </div>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg">
          <h3 class="font-bold text-purple-700 mb-4">⚡ Performance Boosters</h3>
          <div class="space-y-3">
            <div class="border-b border-purple-100 pb-2">
              <p class="font-semibold text-purple-600">Beta-Alanine</p>
              <p class="text-xs text-purple-500">3-5g daily | Muscular endurance</p>
            </div>
            <div class="border-b border-purple-100 pb-2">
              <p class="font-semibold text-purple-600">Iron (if deficient)</p>
              <p class="text-xs text-purple-500">18mg daily | Oxygen transport</p>
            </div>
            <div class="border-b border-purple-100 pb-2">
              <p class="font-semibold text-purple-600">Zinc</p>
              <p class="text-xs text-purple-500">11mg daily | Testosterone support</p>
            </div>
            <div>
              <p class="font-semibold text-purple-600">Vitamin D3</p>
              <p class="text-xs text-purple-500">2000 IU daily | Bone health & hormone</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-8 rounded-2xl text-center">
      <h2 class="text-3xl font-bold mb-4">🌟 Your Vegetarian Muscle Building Journey Starts Now!</h2>
      <p class="text-xl mb-6">You have everything you need to build an incredible physique while staying true to your vegetarian values. Plant-based muscle building isn't just possible – it's powerful, sustainable, and incredibly rewarding.</p>
      <div class="grid md:grid-cols-4 gap-4 mt-6">
        <div class="bg-white/20 p-4 rounded-lg">
          <p class="font-bold text-2xl">110g+</p>
          <p>Daily protein target</p>
        </div>
        <div class="bg-white/20 p-4 rounded-lg">
          <p class="font-bold text-2xl">7 days</p>
          <p>Complete meal plan</p>
        </div>
        <div class="bg-white/20 p-4 rounded-lg">
          <p class="font-bold text-2xl">100%</p>
          <p>Plant-based power</p>
        </div>
        <div class="bg-white/20 p-4 rounded-lg">
          <p class="font-bold text-2xl">0</p>
          <p>Compromises needed</p>
        </div>
      </div>
    </div>
    `,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
    category: "Fitness",
    readTime: "18 min read",
    author: "Fitness Coach Rohit",
    date: "December 3, 2024",
    tags: ["vegetarian", "muscle-building", "protein", "fitness", "indian-diet"]
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
