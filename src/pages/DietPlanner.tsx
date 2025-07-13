
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { motion } from "framer-motion";
import { Calculator, Target, Utensils, Dumbbell, Sparkles, Apple, Zap, Droplets, Heart } from "lucide-react";
import { toast } from "sonner";

const DietPlanner = () => {
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "",
    type: "",
    goal: ""
  });
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateRecommendations = () => {
    if (!formData.weight || !formData.height || !formData.age || !formData.gender || !formData.type || !formData.goal) {
      toast.error("Please fill in all fields");
      return;
    }

    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const age = parseFloat(formData.age);
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
    
    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr;
    if (formData.gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    // Calculate TDEE (Total Daily Energy Expenditure) - assuming moderately active
    const tdee = Math.round(bmr * 1.55);
    
    let calories;
    let macroProtein, macroCarbs, macroFat;
    
    if (formData.goal === "lose fat") {
      calories = Math.round(tdee * 0.8); // 20% deficit
      macroProtein = Math.round(weight * 2.2); // High protein for fat loss
      macroFat = Math.round(calories * 0.25 / 9); // 25% of calories from fat
      macroCarbs = Math.round((calories - (macroProtein * 4) - (macroFat * 9)) / 4);
    } else if (formData.goal === "gain muscle") {
      calories = Math.round(tdee * 1.15); // 15% surplus
      macroProtein = Math.round(weight * 2.5); // Very high protein for muscle gain
      macroFat = Math.round(calories * 0.25 / 9); // 25% of calories from fat
      macroCarbs = Math.round((calories - (macroProtein * 4) - (macroFat * 9)) / 4);
    } else { // maintain weight
      calories = tdee;
      macroProtein = Math.round(weight * 2.0); // Moderate protein for maintenance
      macroFat = Math.round(calories * 0.25 / 9); // 25% of calories from fat
      macroCarbs = Math.round((calories - (macroProtein * 4) - (macroFat * 9)) / 4);
    }

    const waterIntake = Math.round(weight * 35 / 1000 * 10) / 10; // 35ml per kg body weight

    const dietPlans = {
      veg: {
        "lose fat": {
          breakfast: [
            { food: "Oats upma with vegetables", quantity: "1 cup (80g dry oats)", calories: 300, protein: 12, carbs: 54, fat: 6 },
            { food: "Skimmed milk", quantity: "200ml", calories: 70, protein: 7, carbs: 10, fat: 0 },
            { food: "Mixed nuts", quantity: "10g (6-8 pieces)", calories: 60, protein: 2, carbs: 2, fat: 5 }
          ],
          lunch: [
            { food: "Brown rice", quantity: "3/4 cup cooked (120g)", calories: 130, protein: 3, carbs: 26, fat: 1 },
            { food: "Moong dal", quantity: "1 cup (150g)", calories: 180, protein: 12, carbs: 30, fat: 1 },
            { food: "Mixed vegetable curry", quantity: "1 cup (150g)", calories: 80, protein: 3, carbs: 15, fat: 2 },
            { food: "Cucumber salad", quantity: "1 cup (100g)", calories: 15, protein: 1, carbs: 3, fat: 0 }
          ],
          dinner: [
            { food: "Quinoa khichdi", quantity: "1 cup cooked (150g)", calories: 180, protein: 7, carbs: 32, fat: 3 },
            { food: "Paneer tikka", quantity: "80g", calories: 200, protein: 16, carbs: 3, fat: 14 },
            { food: "Palak soup", quantity: "1 bowl (200ml)", calories: 50, protein: 3, carbs: 8, fat: 1 }
          ],
          snacks: [
            { food: "Green tea", quantity: "2 cups", calories: 5, protein: 0, carbs: 1, fat: 0 },
            { food: "Roasted chana", quantity: "30g", calories: 105, protein: 6, carbs: 17, fat: 2 }
          ]
        },
        "gain muscle": {
          breakfast: [
            { food: "Banana protein smoothie", quantity: "2 bananas + 30g protein powder + 250ml milk", calories: 450, protein: 35, carbs: 58, fat: 8 },
            { food: "Whole wheat paratha with ghee", quantity: "2 medium + 2 tsp ghee", calories: 400, protein: 12, carbs: 52, fat: 18 },
            { food: "Almonds", quantity: "15 pieces (20g)", calories: 120, protein: 4, carbs: 4, fat: 10 }
          ],
          lunch: [
            { food: "Basmati rice", quantity: "1.5 cups cooked (240g)", calories: 270, protein: 5, carbs: 55, fat: 1 },
            { food: "Rajma curry with ghee", quantity: "1 cup + 1 tsp ghee", calories: 280, protein: 16, carbs: 40, fat: 8 },
            { food: "Paneer butter masala", quantity: "120g paneer", calories: 350, protein: 20, carbs: 10, fat: 26 },
            { food: "Whole wheat roti", quantity: "2 medium", calories: 160, protein: 6, carbs: 32, fat: 2 }
          ],
          dinner: [
            { food: "Vegetable biryani with ghee", quantity: "1.5 cups + 1 tsp ghee", calories: 480, protein: 12, carbs: 78, fat: 14 },
            { food: "Curd with fruits", quantity: "150g curd + 100g fruits", calories: 180, protein: 8, carbs: 25, fat: 5 },
            { food: "Milk with dates", quantity: "250ml + 2 dates", calories: 200, protein: 8, carbs: 32, fat: 8 }
          ],
          snacks: [
            { food: "Mixed dry fruits", quantity: "40g", calories: 240, protein: 6, carbs: 20, fat: 16 },
            { food: "Protein shake", quantity: "30g powder + 200ml milk", calories: 280, protein: 25, carbs: 20, fat: 6 }
          ]
        },
        "maintain weight": {
          breakfast: [
            { food: "Vegetable poha", quantity: "1 cup (120g)", calories: 200, protein: 5, carbs: 38, fat: 4 },
            { food: "Low fat milk", quantity: "200ml", calories: 100, protein: 6, carbs: 10, fat: 3 },
            { food: "Seasonal fruit", quantity: "1 medium (150g)", calories: 80, protein: 1, carbs: 20, fat: 0 }
          ],
          lunch: [
            { food: "Roti with dal", quantity: "2 rotis + 1 cup toor dal", calories: 320, protein: 16, carbs: 56, fat: 4 },
            { food: "Aloo gobi", quantity: "1 cup (150g)", calories: 120, protein: 3, carbs: 22, fat: 3 },
            { food: "Curd", quantity: "100g", calories: 60, protein: 4, carbs: 6, fat: 2 }
          ],
          dinner: [
            { food: "Rice with sambar", quantity: "1 cup rice + 1 cup sambar", calories: 280, protein: 10, carbs: 52, fat: 4 },
            { food: "Bhindi masala", quantity: "1 cup (120g)", calories: 90, protein: 3, carbs: 12, fat: 4 },
            { food: "Buttermilk", quantity: "200ml", calories: 50, protein: 2, carbs: 6, fat: 1 }
          ],
          snacks: [
            { food: "Evening tea with biscuits", quantity: "1 cup + 2 biscuits", calories: 120, protein: 2, carbs: 20, fat: 4 },
            { food: "Roasted peanuts", quantity: "20g", calories: 110, protein: 5, carbs: 4, fat: 9 }
          ]
        }
      },
      eggetarian: {
        "lose fat": {
          breakfast: [
            { food: "Egg white omelet with vegetables", quantity: "4 egg whites + vegetables", calories: 150, protein: 28, carbs: 6, fat: 2 },
            { food: "Whole wheat toast", quantity: "1 slice (30g)", calories: 80, protein: 3, carbs: 15, fat: 1 },
            { food: "Green tea", quantity: "1 cup", calories: 2, protein: 0, carbs: 0, fat: 0 }
          ],
          lunch: [
            { food: "Brown rice", quantity: "3/4 cup cooked (120g)", calories: 130, protein: 3, carbs: 26, fat: 1 },
            { food: "Dal with egg curry", quantity: "1 cup dal + 1 boiled egg", calories: 250, protein: 18, carbs: 30, fat: 6 },
            { food: "Mixed vegetables", quantity: "1 cup (150g)", calories: 80, protein: 3, carbs: 15, fat: 2 }
          ],
          dinner: [
            { food: "Egg fried quinoa", quantity: "1 cup quinoa + 1 egg", calories: 280, protein: 16, carbs: 35, fat: 8 },
            { food: "Vegetable soup", quantity: "1 bowl (200ml)", calories: 60, protein: 3, carbs: 10, fat: 1 }
          ],
          snacks: [
            { food: "Boiled egg", quantity: "1 whole egg", calories: 70, protein: 6, carbs: 1, fat: 5 },
            { food: "Fruit", quantity: "1 apple (150g)", calories: 80, protein: 0, carbs: 20, fat: 0 }
          ]
        },
        "gain muscle": {
          breakfast: [
            { food: "Egg paratha", quantity: "2 parathas + 2 whole eggs", calories: 520, protein: 24, carbs: 45, fat: 28 },
            { food: "Full fat milk", quantity: "250ml", calories: 150, protein: 8, carbs: 12, fat: 8 },
            { food: "Banana", quantity: "1 large (120g)", calories: 105, protein: 1, carbs: 27, fat: 0 }
          ],
          lunch: [
            { food: "Rice with egg curry", quantity: "1.5 cups rice + 2 eggs curry", calories: 520, protein: 25, carbs: 65, fat: 18 },
            { food: "Dal", quantity: "1 cup (200g)", calories: 180, protein: 12, carbs: 30, fat: 1 },
            { food: "Curd", quantity: "150g", calories: 90, protein: 6, carbs: 9, fat: 3 }
          ],
          dinner: [
            { food: "Egg biryani", quantity: "1.5 cups + 2 boiled eggs", calories: 580, protein: 28, carbs: 68, fat: 22 },
            { food: "Raita", quantity: "150g", calories: 80, protein: 4, carbs: 8, fat: 3 }
          ],
          snacks: [
            { food: "Egg sandwich", quantity: "2 bread + 1 egg", calories: 280, protein: 15, carbs: 28, fat: 12 },
            { food: "Protein shake", quantity: "30g powder + 250ml milk", calories: 300, protein: 28, carbs: 20, fat: 8 }
          ]
        },
        "maintain weight": {
          breakfast: [
            { food: "Egg sandwich", quantity: "2 bread + 1 egg", calories: 280, protein: 15, carbs: 28, fat: 12 },
            { food: "Low fat milk", quantity: "200ml", calories: 100, protein: 6, carbs: 10, fat: 3 },
            { food: "Orange juice", quantity: "150ml fresh", calories: 65, protein: 1, carbs: 16, fat: 0 }
          ],
          lunch: [
            { food: "Rice with egg curry", quantity: "1 cup rice + 1 egg curry", calories: 350, protein: 18, carbs: 45, fat: 12 },
            { food: "Dal", quantity: "3/4 cup (150g)", calories: 135, protein: 9, carbs: 22, fat: 1 },
            { food: "Vegetable sabzi", quantity: "1 cup (150g)", calories: 80, protein: 3, carbs: 15, fat: 2 }
          ],
          dinner: [
            { food: "Roti with egg curry", quantity: "2 rotis + 1 egg curry", calories: 320, protein: 18, carbs: 35, fat: 12 },
            { food: "Salad", quantity: "1 bowl (100g)", calories: 25, protein: 2, carbs: 5, fat: 0 }
          ],
          snacks: [
            { food: "Boiled egg with fruit", quantity: "1 egg + 1 fruit", calories: 150, protein: 6, carbs: 20, fat: 5 },
            { food: "Evening tea", quantity: "1 cup with milk", calories: 50, protein: 2, carbs: 6, fat: 2 }
          ]
        }
      },
      "non-veg": {
        "lose fat": {
          breakfast: [
            { food: "Egg white omelet", quantity: "4 egg whites + vegetables", calories: 150, protein: 28, carbs: 6, fat: 2 },
            { food: "Whole wheat toast", quantity: "1 slice (30g)", calories: 80, protein: 3, carbs: 15, fat: 1 },
            { food: "Green tea", quantity: "1 cup", calories: 2, protein: 0, carbs: 0, fat: 0 }
          ],
          lunch: [
            { food: "Grilled chicken breast", quantity: "120g", calories: 200, protein: 37, carbs: 0, fat: 4 },
            { food: "Brown rice", quantity: "1/2 cup cooked (80g)", calories: 90, protein: 2, carbs: 18, fat: 1 },
            { food: "Steamed vegetables", quantity: "1 cup (150g)", calories: 60, protein: 3, carbs: 12, fat: 0 }
          ],
          dinner: [
            { food: "Grilled fish (pomfret)", quantity: "120g fillet", calories: 180, protein: 32, carbs: 0, fat: 5 },
            { food: "Quinoa", quantity: "1/2 cup cooked (90g)", calories: 110, protein: 4, carbs: 20, fat: 2 },
            { food: "Green salad", quantity: "1 large bowl (100g)", calories: 25, protein: 2, carbs: 5, fat: 0 }
          ],
          snacks: [
            { food: "Boiled eggs", quantity: "2 whole eggs", calories: 140, protein: 12, carbs: 1, fat: 10 },
            { food: "Fruit", quantity: "1 apple (150g)", calories: 80, protein: 0, carbs: 20, fat: 0 }
          ]
        },
        "gain muscle": {
          breakfast: [
            { food: "Chicken paratha", quantity: "2 parathas + 80g chicken", calories: 580, protein: 35, carbs: 45, fat: 28 },
            { food: "Full fat milk", quantity: "250ml", calories: 150, protein: 8, carbs: 12, fat: 8 },
            { food: "Banana", quantity: "1 large (120g)", calories: 105, protein: 1, carbs: 27, fat: 0 }
          ],
          lunch: [
            { food: "Chicken biryani", quantity: "1.5 cups + 120g chicken", calories: 650, protein: 45, carbs: 70, fat: 20 },
            { food: "Dal", quantity: "1 cup (200g)", calories: 180, protein: 12, carbs: 30, fat: 1 },
            { food: "Curd", quantity: "150g", calories: 90, protein: 6, carbs: 9, fat: 3 }
          ],
          dinner: [
            { food: "Fish curry with rice", quantity: "120g fish + 1 cup rice", calories: 480, protein: 35, carbs: 45, fat: 18 },
            { food: "Mixed vegetables", quantity: "1 cup (150g)", calories: 120, protein: 4, carbs: 15, fat: 6 },
            { food: "Milk", quantity: "250ml", calories: 150, protein: 8, carbs: 12, fat: 8 }
          ],
          snacks: [
            { food: "Chicken sandwich", quantity: "2 bread + 80g chicken", calories: 380, protein: 28, carbs: 35, fat: 15 },
            { food: "Protein shake", quantity: "30g powder + 250ml milk", calories: 300, protein: 28, carbs: 20, fat: 8 }
          ]
        },
        "maintain weight": {
          breakfast: [
            { food: "Chicken sandwich", quantity: "2 bread + 60g chicken", calories: 320, protein: 22, carbs: 30, fat: 12 },
            { food: "Low fat milk", quantity: "200ml", calories: 100, protein: 6, carbs: 10, fat: 3 },
            { food: "Orange juice", quantity: "150ml fresh", calories: 65, protein: 1, carbs: 16, fat: 0 }
          ],
          lunch: [
            { food: "Chicken curry with rice", quantity: "100g chicken + 1 cup rice", calories: 400, protein: 28, carbs: 45, fat: 12 },
            { food: "Dal", quantity: "3/4 cup (150g)", calories: 135, protein: 9, carbs: 22, fat: 1 },
            { food: "Mixed vegetables", quantity: "1 cup (150g)", calories: 80, protein: 3, carbs: 15, fat: 2 }
          ],
          dinner: [
            { food: "Fish curry with roti", quantity: "100g fish + 2 rotis", calories: 380, protein: 25, carbs: 35, fat: 15 },
            { food: "Salad", quantity: "1 bowl (100g)", calories: 25, protein: 2, carbs: 5, fat: 0 }
          ],
          snacks: [
            { food: "Boiled egg with fruit", quantity: "1 egg + 1 fruit", calories: 150, protein: 6, carbs: 20, fat: 5 },
            { food: "Evening tea", quantity: "1 cup with milk", calories: 50, protein: 2, carbs: 6, fat: 2 }
          ]
        }
      }
    };

    const workoutPlans = {
      "lose fat": {
        strength: [
          { day: "Day 1 - Push (Chest, Shoulders, Triceps)", exercises: [
            { name: "Push-ups", sets: 3, reps: "12-15", rest: "60s" },
            { name: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", rest: "60s" },
            { name: "Tricep Dips", sets: 3, reps: "8-12", rest: "45s" },
            { name: "Incline Push-ups", sets: 2, reps: "10-12", rest: "60s" }
          ]},
          { day: "Day 2 - Pull (Back, Biceps)", exercises: [
            { name: "Pull-ups/Assisted Pull-ups", sets: 3, reps: "6-10", rest: "90s" },
            { name: "Dumbbell Rows", sets: 3, reps: "10-12", rest: "60s" },
            { name: "Bicep Curls", sets: 3, reps: "10-12", rest: "45s" },
            { name: "Face Pulls", sets: 3, reps: "12-15", rest: "45s" }
          ]},
          { day: "Day 3 - Legs", exercises: [
            { name: "Squats", sets: 4, reps: "15-20", rest: "90s" },
            { name: "Lunges", sets: 3, reps: "12 each leg", rest: "60s" },
            { name: "Calf Raises", sets: 3, reps: "15-20", rest: "45s" },
            { name: "Glute Bridges", sets: 3, reps: "15-20", rest: "45s" }
          ]}
        ],
        cardio: [
          { exercise: "Brisk Walking", duration: "45 minutes", intensity: "Moderate pace", frequency: "Daily" },
          { exercise: "Cycling", duration: "30 minutes", intensity: "Moderate to high", frequency: "4 times/week" },
          { exercise: "Jump Rope", duration: "15 minutes", intensity: "High intensity intervals", frequency: "3 times/week" }
        ]
      },
      "gain muscle": {
        strength: [
          { day: "Day 1 - Push (Chest, Shoulders, Triceps)", exercises: [
            { name: "Push-ups/Bench Press", sets: 4, reps: "8-10", rest: "2-3 min" },
            { name: "Overhead Press", sets: 4, reps: "8-10", rest: "2-3 min" },
            { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "90s" },
            { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60s" },
            { name: "Tricep Extensions", sets: 3, reps: "10-12", rest: "60s" },
            { name: "Diamond Push-ups", sets: 2, reps: "8-12", rest: "60s" }
          ]},
          { day: "Day 2 - Pull (Back, Biceps)", exercises: [
            { name: "Deadlifts", sets: 4, reps: "6-8", rest: "3 min" },
            { name: "Pull-ups/Lat Pulldowns", sets: 4, reps: "8-10", rest: "2 min" },
            { name: "Barbell/Dumbbell Rows", sets: 4, reps: "8-10", rest: "90s" },
            { name: "Face Pulls", sets: 3, reps: "12-15", rest: "60s" },
            { name: "Barbell Curls", sets: 3, reps: "10-12", rest: "60s" },
            { name: "Hammer Curls", sets: 3, reps: "10-12", rest: "60s" }
          ]},
          { day: "Day 3 - Legs (Quads, Hamstrings, Glutes)", exercises: [
            { name: "Squats", sets: 4, reps: "8-10", rest: "3 min" },
            { name: "Romanian Deadlifts", sets: 4, reps: "8-10", rest: "2-3 min" },
            { name: "Bulgarian Split Squats", sets: 3, reps: "10-12 each", rest: "90s" },
            { name: "Leg Press", sets: 3, reps: "12-15", rest: "90s" },
            { name: "Walking Lunges", sets: 3, reps: "12 each leg", rest: "60s" },
            { name: "Calf Raises", sets: 4, reps: "15-20", rest: "60s" }
          ]}
        ],
        cardio: [
          { exercise: "Light Cardio", duration: "15-20 minutes", intensity: "Low intensity", frequency: "Post-workout only" },
          { exercise: "Walking", duration: "30 minutes", intensity: "Moderate pace", frequency: "Rest days" }
        ]
      },
      "maintain weight": {
        strength: [
          { day: "Day 1 - Push", exercises: [
            { name: "Push-ups", sets: 3, reps: "10-15", rest: "60-90s" },
            { name: "Dumbbell Press", sets: 3, reps: "10-12", rest: "90s" },
            { name: "Shoulder Press", sets: 3, reps: "10-12", rest: "90s" },
            { name: "Tricep Dips", sets: 3, reps: "8-12", rest: "60s" }
          ]},
          { day: "Day 2 - Pull", exercises: [
            { name: "Pull-ups/Rows", sets: 3, reps: "8-12", rest: "90s" },
            { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "90s" },
            { name: "Bicep Curls", sets: 3, reps: "10-12", rest: "60s" },
            { name: "Face Pulls", sets: 3, reps: "12-15", rest: "60s" }
          ]},
          { day: "Day 3 - Legs", exercises: [
            { name: "Squats", sets: 3, reps: "12-15", rest: "90s" },
            { name: "Deadlifts", sets: 3, reps: "8-10", rest: "2 min" },
            { name: "Lunges", sets: 3, reps: "10 each leg", rest: "60s" },
            { name: "Calf Raises", sets: 3, reps: "15-20", rest: "45s" }
          ]}
        ],
        cardio: [
          { exercise: "Moderate Cardio", duration: "30 minutes", intensity: "Moderate pace", frequency: "4 times/week" },
          { exercise: "Yoga/Stretching", duration: "20 minutes", intensity: "Low intensity", frequency: "Daily" }
        ]
      }
    };

    const motivationalTips = {
      "lose fat": "💪 Remember: Fat loss is a marathon, not a sprint! Focus on creating sustainable habits. Small consistent changes lead to big results. You've got this!",
      "gain muscle": "🔥 Building muscle takes time and patience! Stay consistent with your workouts and nutrition. Progressive overload is key - gradually increase weights or reps!",
      "maintain weight": "⚖️ Balance is everything! You're maintaining a healthy lifestyle. Keep up the good work and listen to your body's needs!"
    };

    setRecommendations({
      bmi,
      bmr: Math.round(bmr),
      tdee,
      calories,
      protein: macroProtein,
      carbs: macroCarbs,
      fat: macroFat,
      waterIntake,
      diet: dietPlans[formData.type as keyof typeof dietPlans][formData.goal as keyof typeof dietPlans.veg],
      workout: workoutPlans[formData.goal as keyof typeof workoutPlans],
      motivationTip: motivationalTips[formData.goal as keyof typeof motivationalTips]
    });
    setShowResults(true);
    toast.success("Your personalized nutrition and fitness plan is ready! 🎉");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 pt-20">
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Professional Diet & Fitness Planner
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your personalized nutrition plan with detailed Indian meals and push-pull-legs workout routine
            </p>
          </motion.div>

          {!showResults ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-md">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                    <Calculator className="w-6 h-6 text-orange-500" />
                    Enter Your Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-2 block">
                        Age (years) *
                      </Label>
                      <Input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="Enter age"
                        className="rounded-xl border-2 border-gray-200 focus:border-orange-400"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-2 block">
                        Weight (kg) *
                      </Label>
                      <Input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        placeholder="Enter weight"
                        className="rounded-xl border-2 border-gray-200 focus:border-orange-400"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-2 block">
                        Height (cm) *
                      </Label>
                      <Input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleInputChange}
                        placeholder="Enter height"
                        className="rounded-xl border-2 border-gray-200 focus:border-orange-400"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-4 block">
                      Gender *
                    </Label>
                    <RadioGroup
                      value={formData.gender}
                      onValueChange={(value) => handleRadioChange("gender", value)}
                      className="flex gap-8"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-4 block">
                      Food Preference *
                    </Label>
                    <RadioGroup
                      value={formData.type}
                      onValueChange={(value) => handleRadioChange("type", value)}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="veg" id="veg" />
                        <Label htmlFor="veg">Vegetarian</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="eggetarian" id="eggetarian" />
                        <Label htmlFor="eggetarian">Eggetarian</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="non-veg" id="non-veg" />
                        <Label htmlFor="non-veg">Non-Vegetarian</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-4 block">
                      Fitness Goal *
                    </Label>
                    <RadioGroup
                      value={formData.goal}
                      onValueChange={(value) => handleRadioChange("goal", value)}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="lose fat" id="lose-fat" />
                        <Label htmlFor="lose-fat">Lose Fat</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="gain muscle" id="gain-muscle" />
                        <Label htmlFor="gain-muscle">Gain Muscle</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="maintain weight" id="maintain-weight" />
                        <Label htmlFor="maintain-weight">Maintain Weight</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    onClick={generateRecommendations}
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate My Professional Plan
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <Button
                  onClick={() => setShowResults(false)}
                  variant="outline"
                  className="mb-4"
                >
                  ← Back to Form
                </Button>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-xl">
                    <h3 className="text-sm font-medium">BMI</h3>
                    <p className="text-2xl font-bold">{recommendations.bmi}</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl">
                    <h3 className="text-sm font-medium">Daily Calories</h3>
                    <p className="text-2xl font-bold">{recommendations.calories}</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl">
                    <h3 className="text-sm font-medium">Protein</h3>
                    <p className="text-2xl font-bold">{recommendations.protein}g</p>
                  </div>
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-4 rounded-xl">
                    <h3 className="text-sm font-medium">Carbs</h3>
                    <p className="text-2xl font-bold">{recommendations.carbs}g</p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-xl">
                    <h3 className="text-sm font-medium">Water</h3>
                    <p className="text-2xl font-bold">{recommendations.waterIntake}L</p>
                  </div>
                </div>
              </div>

              {/* Motivation Tip */}
              <Card className="border-0 shadow-xl bg-gradient-to-r from-yellow-50 to-orange-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Heart className="w-8 h-8 text-red-500" />
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2">Your Daily Motivation</h4>
                      <p className="text-gray-700">{recommendations.motivationTip}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-8">
                {/* Diet Plan */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-green-700">
                      <Utensils className="w-6 h-6" />
                      Your Detailed Nutrition Plan
                    </CardTitle>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="bg-white/70 px-4 py-2 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">BMR: {recommendations.bmr} cal</span>
                      </div>
                      <div className="bg-white/70 px-4 py-2 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">TDEE: {recommendations.tdee} cal</span>
                      </div>
                      <div className="bg-white/70 px-4 py-2 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">Fat: {recommendations.fat}g</span>
                      </div>
                      <div className="bg-white/70 px-4 py-2 rounded-lg flex items-center gap-1">
                        <Droplets className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium text-gray-700">Water: {recommendations.waterIntake}L/day</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {Object.entries(recommendations.diet).map(([meal, foods]: [string, any]) => (
                      <div key={meal} className="bg-white/70 p-6 rounded-xl">
                        <h4 className="font-bold capitalize text-green-800 mb-4 text-lg flex items-center gap-2">
                          <Apple className="w-5 h-5" />
                          {meal}
                        </h4>
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Food Item</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Calories</TableHead>
                                <TableHead>Protein (g)</TableHead>
                                <TableHead>Carbs (g)</TableHead>
                                <TableHead>Fat (g)</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {foods.map((food: any, index: number) => (
                                <TableRow key={index}>
                                  <TableCell className="font-medium">{food.food}</TableCell>
                                  <TableCell className="text-sm text-gray-600">{food.quantity}</TableCell>
                                  <TableCell>{food.calories}</TableCell>
                                  <TableCell>{food.protein}</TableCell>
                                  <TableCell>{food.carbs}</TableCell>
                                  <TableCell>{food.fat}</TableCell>
                                </TableRow>
                              ))}
                              <TableRow className="bg-green-100">
                                <TableCell className="font-bold">Total</TableCell>
                                <TableCell className="font-bold">-</TableCell>
                                <TableCell className="font-bold">
                                  {foods.reduce((sum: number, food: any) => sum + food.calories, 0)}
                                </TableCell>
                                <TableCell className="font-bold">
                                  {foods.reduce((sum: number, food: any) => sum + food.protein, 0)}
                                </TableCell>
                                <TableCell className="font-bold">
                                  {foods.reduce((sum: number, food: any) => sum + food.carbs, 0)}
                                </TableCell>
                                <TableCell className="font-bold">
                                  {foods.reduce((sum: number, food: any) => sum + food.fat, 0)}
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Workout Plan */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-blue-700">
                      <Dumbbell className="w-6 h-6" />
                      Your Push-Pull-Legs Workout Plan
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {recommendations.workout.strength && recommendations.workout.strength.map((day: any, index: number) => (
                      <div key={index} className="bg-white/70 p-6 rounded-xl">
                        <h4 className="font-bold text-blue-800 mb-4 text-lg flex items-center gap-2">
                          <Zap className="w-5 h-5" />
                          {day.day}
                        </h4>
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Exercise</TableHead>
                                <TableHead>Sets</TableHead>
                                <TableHead>Reps</TableHead>
                                <TableHead>Rest</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {day.exercises.map((exercise: any, exerciseIndex: number) => (
                                <TableRow key={exerciseIndex}>
                                  <TableCell className="font-medium">{exercise.name}</TableCell>
                                  <TableCell>{exercise.sets}</TableCell>
                                  <TableCell>{exercise.reps}</TableCell>
                                  <TableCell>{exercise.rest}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </div>
                    ))}

                    {recommendations.workout.cardio && (
                      <div className="bg-white/70 p-6 rounded-xl">
                        <h4 className="font-bold text-blue-800 mb-4 text-lg">Cardio Recommendations</h4>
                        <div className="space-y-3">
                          {recommendations.workout.cardio.map((cardio: any, index: number) => (
                            <div key={index} className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                              <div>
                                <span className="font-medium text-lg">{cardio.exercise}</span>
                                <p className="text-sm text-gray-600">{cardio.duration} - {cardio.intensity}</p>
                              </div>
                              <span className="text-sm font-medium bg-blue-200 px-3 py-1 rounded-full">{cardio.frequency}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DietPlanner;
