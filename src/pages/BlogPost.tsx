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
  },
  {
    id: 9,
    title: "Water Therapy: The Indian Way to Weight Loss",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Discover how proper hydration combined with traditional Indian water therapy can accelerate weight loss and boost metabolism by 30%.</p>
        
        <div class="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-blue-800 mb-3">The Ancient Indian Water Ritual</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Morning Water Therapy</h4>
              <p class="text-gray-700">Drink 2-3 glasses of lukewarm water immediately after waking up. This ancient practice flushes toxins and kickstarts metabolism.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Copper Vessel Benefits</h4>
              <p class="text-gray-700">Store water overnight in copper vessels for natural purification and mineral enrichment.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Flavored Water Combinations</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Lemon-Mint Water:</p>
              <p class="text-sm text-gray-600">Boosts vitamin C, aids digestion</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Cucumber-Ginger:</p>
              <p class="text-sm text-gray-600">Reduces bloating, anti-inflammatory</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Cumin Water:</p>
              <p class="text-sm text-gray-600">Improves metabolism, burns fat</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Ajwain Water:</p>
              <p class="text-sm text-gray-600">Reduces water retention</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-yellow-800 mb-3">Expected Results in 30 Days</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>2-4 kg weight loss</li>
            <li>Clearer skin and better digestion</li>
            <li>Increased energy levels</li>
            <li>Reduced bloating and water retention</li>
          </ul>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
    category: "Weight Loss",
    readTime: "7 min read",
    author: "Dr. Ayurvedic Wellness",
    date: "Nov 30, 2024"
  },
  {
    id: 10,
    title: "Desk Job Detox: 5-Minute Office Exercises",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Combat sitting disease with these discrete office exercises that improve posture, reduce back pain, and boost energy without leaving your desk.</p>
        
        <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-l-4 border-purple-500">
          <h3 class="text-xl font-bold text-purple-800 mb-3">The 5-Exercise Desk Routine</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">1. Neck Rolls (30 seconds)</h4>
              <p class="text-gray-700">Slowly roll your neck in circles to release tension from hours of screen time.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">2. Shoulder Blade Squeezes (1 minute)</h4>
              <p class="text-gray-700">Pull shoulder blades together, hold for 3 seconds, repeat 20 times.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">3. Seated Spinal Twist (1 minute)</h4>
              <p class="text-gray-700">Twist your torso left and right while keeping hips facing forward.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-orange-800 mb-3">Hourly Movement Reminders</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Every Hour:</p>
              <p class="text-sm text-gray-600">Stand and stretch for 2 minutes</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Every 2 Hours:</p>
              <p class="text-sm text-gray-600">Walk to water cooler or restroom</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Results After 2 Weeks</h3>
          <p class="text-gray-700">Significantly reduced back pain, improved posture, and 25% increase in afternoon energy levels.</p>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=400&fit=crop",
    category: "Fitness",
    readTime: "6 min read",
    author: "Corporate Wellness Expert",
    date: "Nov 29, 2024"
  },
  {
    id: 11,
    title: "Indian Superfoods on a Shoestring Budget",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Discover 12 powerful Indian superfoods that cost less than ₹20 each and can boost immunity, energy, and health without expensive supplements.</p>
        
        <div class="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Budget Superfoods List</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Turmeric (₹15/100g):</p>
              <p class="text-sm text-gray-600">Anti-inflammatory, immunity booster</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Ginger (₹12/100g):</p>
              <p class="text-sm text-gray-600">Digestive aid, cold fighter</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Garlic (₹18/100g):</p>
              <p class="text-sm text-gray-600">Heart health, antibacterial</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Amla (₹10/100g):</p>
              <p class="text-sm text-gray-600">Vitamin C powerhouse</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-yellow-800 mb-3">Daily Superfood Routine</h3>
          <div class="space-y-3">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Morning:</p>
              <p class="text-gray-700">Turmeric milk + amla juice</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Afternoon:</p>
              <p class="text-gray-700">Ginger tea + handful of nuts</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Evening:</p>
              <p class="text-gray-700">Garlic in cooking + green leafy vegetables</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-blue-800 mb-3">Monthly Cost vs Supplements</h3>
          <p class="text-gray-700 text-lg">Natural superfoods: ₹300/month vs Supplements: ₹2000+/month</p>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop",
    category: "Nutrition",
    readTime: "13 min read",
    author: "Nutrition Expert",
    date: "Nov 28, 2024"
  },
  {
    id: 12,
    title: "Stress-Free Cooking: One-Pot Indian Meals",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Master the art of one-pot cooking with these 10 nutritious Indian recipes that save time, reduce dishes, and maintain authentic flavors.</p>
        
        <div class="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-xl border-l-4 border-red-500">
          <h3 class="text-xl font-bold text-red-800 mb-3">Top 5 One-Pot Meals</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">1. Dal Khichdi with Vegetables</h4>
              <p class="text-gray-700">Rice + dal + vegetables cooked together. Complete protein, minimal cleanup.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">2. Biryani in Pressure Cooker</h4>
              <p class="text-gray-700">Layer rice, marinated vegetables/paneer, cook for 15 minutes.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">3. Sambar Rice</h4>
              <p class="text-gray-700">Tamil comfort food - lentils, vegetables, and rice in tangy tamarind broth.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Time-Saving Tips</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Prep vegetables on Sunday for entire week</li>
            <li>Use frozen mixed vegetables when fresh ones run out</li>
            <li>Cook extra portions for next day lunch</li>
            <li>Keep basic spice mixes ready (garam masala, sambhar powder)</li>
          </ul>
        </div>
        
        <div class="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl border-l-4 border-purple-500">
          <h3 class="text-xl font-bold text-purple-800 mb-3">Weekly Meal Plan</h3>
          <p class="text-gray-700">Save 2+ hours weekly and ₹500 monthly with strategic one-pot cooking.</p>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=400&fit=crop",
    category: "Recipes",
    readTime: "14 min read",
    author: "Efficient Cooking Expert",
    date: "Nov 27, 2024"
  },
  {
    id: 13,
    title: "200 Healthy Indian Recipes Collection",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">The ultimate collection of 200 nutritious Indian recipes for every meal, season, and occasion. From traditional dal to modern fusion dishes, all budget-friendly and delicious.</p>
        
        <div class="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-orange-800 mb-3">Recipe Categories Breakdown</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Breakfast: 50 recipes</p>
              <p class="text-sm text-gray-600">Poha, upma, dosa variations, healthy parathas</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Lunch: 70 recipes</p>
              <p class="text-sm text-gray-600">Rice dishes, dal varieties, sabzi combinations</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Dinner: 50 recipes</p>
              <p class="text-sm text-gray-600">Light meals, soups, one-pot dinners</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Snacks: 30 recipes</p>
              <p class="text-sm text-gray-600">Healthy chaats, roasted snacks, energy bars</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Special Recipe Features</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Regional Specialties</h4>
              <p class="text-gray-700">South Indian, Gujarati, Punjabi, Bengali, and Maharashtrian cuisines covered.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Dietary Preferences</h4>
              <p class="text-gray-700">Vegan, gluten-free, low-calorie, and high-protein options available.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-l-4 border-purple-500">
          <h3 class="text-xl font-bold text-purple-800 mb-3">Cooking Tips Included</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Ingredient substitutions for dietary restrictions</li>
            <li>Time-saving preparation techniques</li>
            <li>Storage and reheating instructions</li>
            <li>Nutritional information for each recipe</li>
          </ul>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=400&fit=crop",
    category: "Recipes",
    readTime: "45 min read",
    author: "Master Chef Team",
    date: "Nov 26, 2024"
  },
  {
    id: 14,
    title: "Breakfast Recipes: 50 Healthy Indian Morning Meals",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Start your day right with 50 nutritious breakfast recipes that combine traditional Indian flavors with modern health consciousness.</p>
        
        <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-yellow-800 mb-3">Quick Breakfast Options (Under 15 minutes)</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Protein-Rich Poha (8 minutes)</h4>
              <p class="text-gray-700">Add peanuts, peas, and scrambled eggs to traditional poha for extra protein.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Masala Oats Upma (10 minutes)</h4>
              <p class="text-gray-700">Steel-cut oats with Indian tempering and vegetables.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Besan Chilla (12 minutes)</h4>
              <p class="text-gray-700">High-protein gram flour pancakes with vegetables.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Weekend Special Breakfasts</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Stuffed Parathas:</p>
              <p class="text-sm text-gray-600">Aloo, gobi, paneer, mooli variations</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">South Indian:</p>
              <p class="text-sm text-gray-600">Dosa, idli, uttapam with healthy chutneys</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Bengali Style:</p>
              <p class="text-sm text-gray-600">Luchi with aloo dum (weekend treat)</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Gujarati Thali:</p>
              <p class="text-sm text-gray-600">Dhokla, thepla, buttermilk</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-blue-800 mb-3">Nutritional Benefits</h3>
          <p class="text-gray-700 text-lg">Each recipe provides 15-25g protein, essential vitamins, and sustained energy for 4-5 hours.</p>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop",
    category: "Recipes",
    readTime: "25 min read",
    author: "Breakfast Specialist",
    date: "Nov 25, 2024"
  },
  {
    id: 15,
    title: "Lunch Box Recipes: 40 Office-Friendly Meals",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Pack healthy, tasty lunches with these 40 office-friendly recipes that stay fresh, travel well, and keep your meals interesting throughout the work week.</p>
        
        <div class="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Week 1: North Indian Favorites</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Monday: Rajma Rice</h4>
              <p class="text-gray-700">Protein-rich kidney beans with jeera rice and pickle.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Tuesday: Chole with Roti</h4>
              <p class="text-gray-700">Spiced chickpeas with whole wheat roti and onion salad.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Wednesday: Dal Makhani with Rice</h4>
              <p class="text-gray-700">Creamy lentils (made healthy) with brown rice.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-orange-800 mb-3">Packing Tips for Freshness</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Use leak-proof containers with separate compartments</li>
            <li>Pack wet and dry items separately</li>
            <li>Add lemon juice to prevent oxidation</li>
            <li>Freeze water bottles to keep lunch cool</li>
            <li>Pack fresh fruits and nuts for mid-day snacking</li>
          </ul>
        </div>
        
        <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-l-4 border-purple-500">
          <h3 class="text-xl font-bold text-purple-800 mb-3">Cost Analysis</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Homemade Lunch:</p>
              <p class="text-sm text-gray-600">₹40-60 per meal</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Office Canteen:</p>
              <p class="text-sm text-gray-600">₹80-120 per meal</p>
            </div>
          </div>
          <p class="mt-3 font-bold text-purple-800">Monthly Savings: ₹1200-1800</p>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=400&fit=crop",
    category: "Recipes",
    readTime: "20 min read",
    author: "Office Meal Expert",
    date: "Nov 24, 2024"
  },
  {
    id: 16,
    title: "Dinner Delights: 50 Light Evening Meals",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">End your day with these 50 light, healthy dinner recipes perfect for weight management, better digestion, and quality sleep.</p>
        
        <div class="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl border-l-4 border-indigo-500">
          <h3 class="text-xl font-bold text-indigo-800 mb-3">Light Dinner Principles</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Timing Matters</h4>
              <p class="text-gray-700">Eat dinner 3 hours before bed for better digestion and sleep quality.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Portion Control</h4>
              <p class="text-gray-700">Fill half your plate with vegetables, quarter with protein, quarter with carbs.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Top 10 Light Dinner Options</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Vegetable Soup:</p>
              <p class="text-sm text-gray-600">Mixed vegetable with clear broth</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Salad Bowl:</p>
              <p class="text-sm text-gray-600">Sprouts, cucumber, tomato with yogurt</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Moong Dal Khichdi:</p>
              <p class="text-sm text-gray-600">Easy to digest comfort food</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Grilled Paneer:</p>
              <p class="text-sm text-gray-600">With mint chutney and salad</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-yellow-800 mb-3">Weekly Dinner Plan</h3>
          <p class="text-gray-700">Rotate between soups, salads, khichdi, and light curries for variety without compromising health goals.</p>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&h=400&fit=crop",
    category: "Recipes",
    readTime: "30 min read",
    author: "Dinner Specialist",
    date: "Nov 23, 2024"
  },
  {
    id: 17,
    title: "Snack Attack: 60 Healthy Indian Snacks",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Beat hunger pangs with 60 healthy snack recipes that are nutritious, satisfying, and distinctly Indian in flavor.</p>
        
        <div class="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-orange-800 mb-3">Categories of Healthy Snacks</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Roasted Snacks (15):</p>
              <p class="text-sm text-gray-600">Chana, peanuts, makhana variations</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Fresh Snacks (15):</p>
              <p class="text-sm text-gray-600">Fruit chaats, sprout salads</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Steamed Snacks (15):</p>
              <p class="text-sm text-gray-600">Dhokla, idli, modak varieties</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Energy Bars (15):</p>
              <p class="text-sm text-gray-600">Date-nut, sesame, coconut bars</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Top 5 Office-Friendly Snacks</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">1. Roasted Makhana Mix</h4>
              <p class="text-gray-700">Low calorie, high protein, crunchy fox nuts with spices.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">2. Trail Mix Indian Style</h4>
              <p class="text-gray-700">Almonds, raisins, roasted chana, and coconut flakes.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-l-4 border-purple-500">
          <h3 class="text-xl font-bold text-purple-800 mb-3">Snacking Schedule</h3>
          <p class="text-gray-700">Mid-morning and evening snacks to maintain energy levels and prevent overeating at main meals.</p>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
    category: "Recipes",
    readTime: "35 min read",
    author: "Healthy Snacking Expert",
    date: "Nov 22, 2024"
  },
  {
    id: 18,
    title: "50 Complete Workout Plans for Every Fitness Level",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Comprehensive collection of 50 workout plans designed for every fitness level, from absolute beginners to advanced athletes.</p>
        
        <div class="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-blue-800 mb-3">Workout Plan Categories</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Beginner (15 plans):</p>
              <p class="text-sm text-gray-600">0-6 months experience</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Intermediate (20 plans):</p>
              <p class="text-sm text-gray-600">6-18 months experience</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Advanced (10 plans):</p>
              <p class="text-sm text-gray-600">18+ months experience</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Specialized (5 plans):</p>
              <p class="text-sm text-gray-600">Sports-specific training</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Sample Beginner Plan: Week 1</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Day 1: Full Body Introduction</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700">
                <li>Bodyweight squats: 2 sets of 8-10</li>
                <li>Wall push-ups: 2 sets of 5-8</li>
                <li>Plank hold: 2 sets of 15-20 seconds</li>
                <li>Walking in place: 5 minutes</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-l-4 border-purple-500">
          <h3 class="text-xl font-bold text-purple-800 mb-3">Progressive Overload System</h3>
          <p class="text-gray-700">Each plan includes weekly progression guidelines to ensure continuous improvement and prevent plateaus.</p>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
    category: "Fitness",
    readTime: "40 min read",
    author: "Fitness Program Director",
    date: "Nov 21, 2024"
  },
  {
    id: 19,
    title: "Beginner's Fitness Journey: 10 Starter Workout Plans",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Perfect starting point for absolute beginners with 10 carefully designed workout plans that build strength, endurance, and confidence from day one.</p>
        
        <div class="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Your First 30 Days</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Week 1-2: Foundation</h4>
              <p class="text-gray-700">Focus on form, breathing, and establishing routine. 3 days per week, 20 minutes each.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Week 3-4: Building</h4>
              <p class="text-gray-700">Increase duration to 25-30 minutes, add more exercises, improve strength.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-yellow-800 mb-3">Essential Beginner Exercises</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Upper Body:</p>
              <p class="text-sm text-gray-600">Wall push-ups, arm circles, shoulder shrugs</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Lower Body:</p>
              <p class="text-sm text-gray-600">Bodyweight squats, calf raises, leg swings</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Core:</p>
              <p class="text-sm text-gray-600">Modified planks, seated twists, leg raises</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Cardio:</p>
              <p class="text-sm text-gray-600">Marching in place, step-ups, gentle dancing</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-blue-800 mb-3">Success Tracking</h3>
          <p class="text-gray-700">Simple progress markers: increased reps, longer planks, less rest time needed, and improved energy throughout the day.</p>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&h=400&fit=crop",
    category: "Fitness",
    readTime: "15 min read",
    author: "Beginner Fitness Specialist",
    date: "Nov 20, 2024"
  },
  {
    id: 20,
    title: "HIIT Workouts Collection: 15 High-Intensity Plans",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Burn maximum calories in minimum time with these 15 scientifically designed HIIT workout plans perfect for busy schedules and quick results.</p>
        
        <div class="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-xl border-l-4 border-red-500">
          <h3 class="text-xl font-bold text-red-800 mb-3">HIIT Fundamentals</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Work-to-Rest Ratios</h4>
              <p class="text-gray-700">Beginner: 1:2 (30 sec work, 60 sec rest)</p>
              <p class="text-gray-700">Intermediate: 1:1 (45 sec work, 45 sec rest)</p>
              <p class="text-gray-700">Advanced: 2:1 (40 sec work, 20 sec rest)</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Frequency Guidelines</h4>
              <p class="text-gray-700">Maximum 3 HIIT sessions per week with at least 48 hours recovery between sessions.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-orange-800 mb-3">Top 5 HIIT Workouts</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">1. Tabata Classic (4 minutes)</h4>
              <p class="text-gray-700">20 seconds max effort, 10 seconds rest, 8 rounds total.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">2. Full Body Burner (15 minutes)</h4>
              <p class="text-gray-700">6 exercises, 45 seconds each, 15 seconds rest, 3 rounds.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Expected Benefits</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Burn calories for up to 24 hours post-workout</li>
            <li>Improve cardiovascular fitness by 15% in 8 weeks</li>
            <li>Increase metabolic rate by 10-15%</li>
            <li>Build lean muscle while burning fat</li>
          </ul>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=400&fit=crop",
    category: "Fitness",
    readTime: "18 min read",
    author: "HIIT Specialist",
    date: "Nov 19, 2024"
  },
  {
    id: 21,
    title: "Strength Training: 15 Muscle Building Programs",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Build serious muscle with these 15 progressive strength training programs using scientific principles of muscle growth and progressive overload.</p>
        
        <div class="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl border-l-4 border-purple-500">
          <h3 class="text-xl font-bold text-purple-800 mb-3">Program Categories</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Bodyweight (5 programs):</p>
              <p class="text-sm text-gray-600">No equipment needed</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Minimal Equipment (5):</p>
              <p class="text-sm text-gray-600">Dumbbells/resistance bands</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Full Gym (5 programs):</p>
              <p class="text-sm text-gray-600">Complete gym access</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Progressive Overload Principles</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Week 1-2: Adaptation</h4>
              <p class="text-gray-700">Focus on form, 3 sets of 8-10 reps, moderate intensity.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Week 3-4: Progressive Load</h4>
              <p class="text-gray-700">Increase reps to 10-12 or add resistance.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Week 5-6: Intensity Boost</h4>
              <p class="text-gray-700">Add additional sets or reduce rest time.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-orange-800 mb-3">Muscle Growth Timeline</h3>
          <p class="text-gray-700 text-lg">Expect visible muscle growth in 6-8 weeks with consistent training and proper nutrition.</p>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=800&h=400&fit=crop",
    category: "Fitness",
    readTime: "22 min read",
    author: "Strength Training Coach",
    date: "Nov 18, 2024"
  },
  {
    id: 22,
    title: "Yoga & Flexibility: 10 Complete Yoga Sequences",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Improve flexibility, balance, and mental well-being with these 10 complete yoga sequences designed specifically for Indian practitioners.</p>
        
        <div class="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl border-l-4 border-indigo-500">
          <h3 class="text-xl font-bold text-indigo-800 mb-3">Traditional Yoga Styles Covered</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Hatha Yoga (3 sequences)</h4>
              <p class="text-gray-700">Gentle, beginner-friendly poses focusing on alignment and breathing.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Vinyasa Flow (4 sequences)</h4>
              <p class="text-gray-700">Dynamic sequences linking breath with movement.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Restorative Yoga (3 sequences)</h4>
              <p class="text-gray-700">Relaxing poses for stress relief and flexibility.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Essential Asanas (Poses)</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Sun Salutation:</p>
              <p class="text-sm text-gray-600">Complete body warm-up sequence</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Warrior Poses:</p>
              <p class="text-sm text-gray-600">Strength and stability</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Seated Twists:</p>
              <p class="text-sm text-gray-600">Spinal mobility and digestion</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Balancing Poses:</p>
              <p class="text-sm text-gray-600">Focus and core strength</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-yellow-800 mb-3">Mind-Body Benefits</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Increased flexibility by 35% in 8 weeks</li>
            <li>Reduced stress and anxiety levels</li>
            <li>Improved sleep quality and duration</li>
            <li>Better posture and reduced back pain</li>
            <li>Enhanced mental clarity and focus</li>
          </ul>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop",
    category: "Fitness",
    readTime: "25 min read",
    author: "Certified Yoga Instructor",
    date: "Nov 17, 2024"
  },
  {
    id: 23,
    title: "Seasonal Eating: Monsoon Health Guide",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Navigate monsoon season with this complete health guide that boosts immunity, prevents infections, and helps you enjoy seasonal foods safely.</p>
        
        <div class="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-blue-800 mb-3">Monsoon Dietary Guidelines</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Foods to Embrace</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700">
                <li>Warm, cooked foods over raw salads</li>
                <li>Ginger, turmeric, and black pepper for immunity</li>
                <li>Light, easy-to-digest meals</li>
                <li>Herbal teas and warm water</li>
              </ul>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Foods to Avoid</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700">
                <li>Street food and outside water</li>
                <li>Raw vegetables and uncooked foods</li>
                <li>Excessive dairy and heavy meals</li>
                <li>Cold drinks and ice cream</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Immunity-Boosting Recipes</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Golden Milk (Haldi Doodh)</h4>
              <p class="text-gray-700">Turmeric, ginger, black pepper in warm milk before bed.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Monsoon Soup</h4>
              <p class="text-gray-700">Clear vegetable broth with ginger, garlic, and coriander.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-yellow-800 mb-3">Monsoon Health Tips</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Keep feet dry and wear breathable footwear</li>
            <li>Use mosquito repellents and nets</li>
            <li>Maintain personal hygiene rigorously</li>
            <li>Stay hydrated with warm beverages</li>
          </ul>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=800&h=400&fit=crop",
    category: "Wellness",
    readTime: "12 min read",
    author: "Seasonal Health Expert",
    date: "Nov 16, 2024"
  },
  {
    id: 24,
    title: "Pregnancy Nutrition: Indian Diet for Expecting Mothers",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Complete nutrition guide for Indian expecting mothers featuring traditional foods that support healthy pregnancy and baby development.</p>
        
        <div class="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-xl border-l-4 border-pink-500">
          <h3 class="text-xl font-bold text-pink-800 mb-3">Trimester-wise Nutrition</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">First Trimester (0-3 months)</h4>
              <p class="text-gray-700">Focus on folic acid-rich foods: spinach, methi, rajma, and fortified cereals.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Second Trimester (3-6 months)</h4>
              <p class="text-gray-700">Increase protein and calcium: paneer, dahi, ragi, and seasonal fruits.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Third Trimester (6-9 months)</h4>
              <p class="text-gray-700">Iron-rich foods and smaller, frequent meals: dates, jaggery, leafy greens.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Traditional Pregnancy Foods</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Ghee and Nuts:</p>
              <p class="text-sm text-gray-600">Brain development, healthy fats</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Ragi Porridge:</p>
              <p class="text-sm text-gray-600">Calcium for bone development</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Coconut Water:</p>
              <p class="text-sm text-gray-600">Hydration and electrolytes</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Fresh Fruits:</p>
              <p class="text-sm text-gray-600">Vitamins and natural sugars</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-orange-800 mb-3">Foods to Limit or Avoid</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>High mercury fish and raw seafood</li>
            <li>Unpasteurized dairy products</li>
            <li>Excessive caffeine and artificial sweeteners</li>
            <li>Unwashed fruits and vegetables</li>
          </ul>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&h=400&fit=crop",
    category: "Nutrition",
    readTime: "20 min read",
    author: "Prenatal Nutrition Specialist",
    date: "Nov 15, 2024"
  },
  {
    id: 25,
    title: "Children's Nutrition: Healthy Eating for Indian Kids",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Ensure your children get proper nutrition with these child-friendly Indian recipes and feeding strategies for growing minds and bodies.</p>
        
        <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-yellow-800 mb-3">Age-Appropriate Nutrition</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Toddlers (1-3 years)</h4>
              <p class="text-gray-700">Mashed dal-rice, fruit purees, soft rotis, and finger foods for self-feeding.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Preschoolers (3-5 years)</h4>
              <p class="text-gray-700">Colorful meals, hidden vegetable recipes, and interactive meal preparation.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">School-age (5-12 years)</h4>
              <p class="text-gray-700">Balanced tiffin boxes, after-school snacks, and building healthy eating habits.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Kid-Friendly Recipe Makeovers</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Veggie Pizza:</p>
              <p class="text-sm text-gray-600">Whole wheat base with hidden vegetables</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Colorful Parathas:</p>
              <p class="text-sm text-gray-600">Beetroot, spinach, carrot variations</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Fruit Smoothies:</p>
              <p class="text-sm text-gray-600">With hidden spinach and protein powder</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Healthy Ladoos:</p>
              <p class="text-sm text-gray-600">Date-nut energy balls</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-blue-800 mb-3">Dealing with Picky Eaters</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Involve kids in meal planning and preparation</li>
            <li>Make food visually appealing with colors and shapes</li>
            <li>Offer choices between healthy options</li>
            <li>Be patient and consistent with new foods</li>
          </ul>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop",
    category: "Nutrition",
    readTime: "16 min read",
    author: "Pediatric Nutritionist",
    date: "Nov 14, 2024"
  },
  {
    id: 26,
    title: "Senior Fitness: Exercise Plans for Older Adults",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Safe, effective exercise plans designed specifically for senior citizens to maintain mobility, strength, and independence with age.</p>
        
        <div class="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl border-l-4 border-purple-500">
          <h3 class="text-xl font-bold text-purple-800 mb-3">Senior Fitness Priorities</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Balance and Fall Prevention</h4>
              <p class="text-gray-700">Single-leg stands, heel-to-toe walking, and tai chi movements.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Strength Maintenance</h4>
              <p class="text-gray-700">Chair exercises, resistance bands, and light weights for bone health.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Flexibility and Mobility</h4>
              <p class="text-gray-700">Gentle stretching, joint movements, and range-of-motion exercises.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Chair-Based Exercise Routine</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">5-Minute Warm-up</h4>
              <p class="text-gray-700">Seated marching, arm circles, and gentle neck rolls.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">15-Minute Strength Circuit</h4>
              <p class="text-gray-700">Chair stands, seated rows, leg extensions, and arm raises.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">5-Minute Cool-down</h4>
              <p class="text-gray-700">Deep breathing and gentle stretches.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-orange-800 mb-3">Health Benefits</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Reduced risk of falls by 40%</li>
            <li>Maintained bone density and muscle mass</li>
            <li>Improved cardiovascular health</li>
            <li>Better mood and cognitive function</li>
            <li>Enhanced independence in daily activities</li>
          </ul>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
    category: "Fitness",
    readTime: "14 min read",
    author: "Senior Fitness Specialist",
    date: "Nov 13, 2024"
  },
  {
    id: 27,
    title: "Diabetes Management: Indian Diet & Exercise Guide",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Comprehensive guide to managing diabetes through traditional Indian foods and targeted exercises that help control blood sugar naturally.</p>
        
        <div class="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-blue-800 mb-3">Diabetes-Friendly Indian Foods</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Low Glycemic Index Options</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700">
                <li>Brown rice, quinoa, and millets over white rice</li>
                <li>Whole wheat rotis with fiber-rich vegetables</li>
                <li>Moong dal, masoor dal, and chana dal</li>
                <li>Green leafy vegetables and bitter gourd</li>
              </ul>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Portion Control Strategy</h4>
              <p class="text-gray-700">Use the plate method: 1/2 vegetables, 1/4 protein, 1/4 complex carbs.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Exercise for Blood Sugar Control</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Post-meal Walks:</p>
              <p class="text-sm text-gray-600">15 minutes after each meal</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Resistance Training:</p>
              <p class="text-sm text-gray-600">3 times per week for muscle health</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Yoga Practice:</p>
              <p class="text-sm text-gray-600">Stress reduction and flexibility</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Swimming/Cycling:</p>
              <p class="text-sm text-gray-600">Joint-friendly cardio options</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-yellow-800 mb-3">Sample Daily Meal Plan</h3>
          <div class="space-y-3">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Breakfast:</p>
              <p class="text-gray-700">Vegetable daliya with nuts and seeds</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Mid-morning:</p>
              <p class="text-gray-700">Handful of almonds or cucumber slices</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Lunch:</p>
              <p class="text-gray-700">Quinoa with dal, sabzi, and salad</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Evening:</p>
              <p class="text-gray-700">Green tea with roasted chana</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Dinner:</p>
              <p class="text-gray-700">Grilled paneer with vegetables and millet roti</p>
            </div>
          </div>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
    category: "Wellness",
    readTime: "18 min read",
    author: "Diabetes Care Specialist",
    date: "Nov 12, 2024"
  },
  {
    id: 28,
    title: "Heart Health: Cardio-Friendly Indian Recipes",
    content: `
      <div class="space-y-6">
        <p class="text-lg font-medium text-gray-800">Protect your heart with these cardio-friendly Indian recipes that lower cholesterol, reduce blood pressure, and improve heart health using traditional ingredients.</p>
        
        <div class="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-xl border-l-4 border-red-500">
          <h3 class="text-xl font-bold text-red-800 mb-3">Omega-3 Rich Foods</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Heart-Healthy Indian Ingredients</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700">
                <li>Walnuts, flax seeds, and chia seeds</li>
                <li>Fish like mackerel, sardines, and salmon</li>
                <li>Mustard oil in moderation</li>
              </ul>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Antioxidant Powerhouses</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700">
                <li>Turmeric, ginger, and garlic</li>
                <li>Green tea and amla</li>
                <li>Dark leafy greens and colorful vegetables</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-800 mb-3">Heart-Healthy Recipe Collection</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Oats Idli with Vegetable Sambar</h4>
              <p class="text-gray-700">Steamed oats idli with fiber-rich sambar loaded with vegetables.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Quinoa Khichdi with Ghee</h4>
              <p class="text-gray-700">Complete protein meal with moderate healthy fats.</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-bold text-gray-800 mb-2">Grilled Fish Curry (Coastal Style)</h4>
              <p class="text-gray-700">Coconut-based curry with minimal oil and maximum flavor.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-blue-800 mb-3">Lifestyle Modifications</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Reduce Sodium:</p>
              <p class="text-sm text-gray-600">Use herbs and spices instead of salt</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Cooking Methods:</p>
              <p class="text-sm text-gray-600">Steam, grill, bake instead of deep frying</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Portion Sizes:</p>
              <p class="text-sm text-gray-600">Smaller, frequent meals</p>
            </div>
            <div class="bg-white p-3 rounded-lg">
              <p class="font-semibold text-gray-800">Stay Active:</p>
              <p class="text-sm text-gray-600">30 minutes daily physical activity</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-orange-800 mb-3">Expected Heart Health Benefits</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>10-15% reduction in bad cholesterol within 8 weeks</li>
            <li>Improved blood pressure control</li>
            <li>Better circulation and reduced inflammation</li>
            <li>Enhanced energy and reduced fatigue</li>
          </ul>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop",
    category: "Nutrition",
    readTime: "15 min read",
    author: "Cardiac Nutritionist",
    date: "Nov 11, 2024"
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
