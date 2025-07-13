import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { motion } from "framer-motion";
import { Calculator, Target, Utensils, Dumbbell, Sparkles, Apple, Zap } from "lucide-react";
import { toast } from "sonner";

const DietPlanner = () => {
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    age: "",
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
    if (!formData.weight || !formData.height || !formData.age || !formData.type || !formData.goal) {
      toast.error("Please fill in all fields");
      return;
    }

    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const age = parseFloat(formData.age);
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
    
    // Calculate BMR using Mifflin-St Jeor Equation (more accurate)
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // for males (simplified)
    const tdee = Math.round(bmr * 1.6); // moderately active lifestyle
    
    let calories;
    if (formData.goal === "weight loss") {
      calories = Math.round(tdee - 500); // 500 calorie deficit
    } else if (formData.goal === "weight gain") {
      calories = Math.round(tdee + 500); // 500 calorie surplus
    } else {
      calories = tdee;
    }

    const protein = Math.round(weight * 2.2); // 2.2g per kg for active individuals
    const fat = Math.round(calories * 0.25 / 9); // 25% of calories from fat
    const carbs = Math.round((calories - (protein * 4) - (fat * 9)) / 4);

    const dietPlans = {
      veg: {
        "weight loss": {
          breakfast: [
            { food: "Oats with mixed berries", quantity: "1 cup (80g) + 1/2 cup berries", calories: 280, protein: 9, carbs: 50, fat: 6 },
            { food: "Green tea", quantity: "1 cup (240ml)", calories: 2, protein: 0, carbs: 0, fat: 0 },
            { food: "Almonds", quantity: "10 pieces (14g)", calories: 82, protein: 3, carbs: 3, fat: 7 }
          ],
          lunch: [
            { food: "Brown rice", quantity: "3/4 cup cooked (150g)", calories: 165, protein: 4, carbs: 34, fat: 1 },
            { food: "Dal (moong)", quantity: "1 cup (200g)", calories: 212, protein: 14, carbs: 38, fat: 1 },
            { food: "Mixed vegetable curry", quantity: "1 cup (150g)", calories: 95, protein: 3, carbs: 18, fat: 2 },
            { food: "Green salad with lemon", quantity: "1 large bowl (100g)", calories: 25, protein: 2, carbs: 5, fat: 0 }
          ],
          dinner: [
            { food: "Quinoa salad", quantity: "3/4 cup cooked (140g)", calories: 165, protein: 6, carbs: 30, fat: 3 },
            { food: "Grilled paneer", quantity: "80g", calories: 212, protein: 15, carbs: 3, fat: 16 },
            { food: "Vegetable soup", quantity: "1 bowl (250ml)", calories: 65, protein: 2, carbs: 12, fat: 1 }
          ],
          snacks: [
            { food: "Apple with peanut butter", quantity: "1 medium apple + 1 tbsp PB", calories: 180, protein: 4, carbs: 25, fat: 8 },
            { food: "Greek yogurt", quantity: "100g plain", calories: 100, protein: 10, carbs: 6, fat: 4 }
          ]
        },
        "weight gain": {
          breakfast: [
            { food: "Banana protein smoothie", quantity: "2 bananas + 1 scoop protein + 250ml milk", calories: 420, protein: 28, carbs: 55, fat: 8 },
            { food: "Whole wheat paratha with ghee", quantity: "2 medium parathas + 2 tsp ghee", calories: 380, protein: 10, carbs: 50, fat: 16 },
            { food: "Full fat milk", quantity: "250ml", calories: 150, protein: 8, carbs: 12, fat: 8 }
          ],
          lunch: [
            { food: "Basmati rice", quantity: "1.5 cups cooked (300g)", calories: 330, protein: 6, carbs: 68, fat: 1 },
            { food: "Dal with ghee", quantity: "1 cup dal + 1 tsp ghee", calories: 250, protein: 14, carbs: 35, fat: 6 },
            { food: "Paneer butter masala", quantity: "150g paneer in gravy", calories: 420, protein: 25, carbs: 15, fat: 30 },
            { food: "Whole wheat roti", quantity: "2 medium rotis", calories: 160, protein: 6, carbs: 32, fat: 2 }
          ],
          dinner: [
            { food: "Vegetable biryani", quantity: "1.5 cups (300g)", calories: 450, protein: 12, carbs: 75, fat: 12 },
            { food: "Raita with fruits", quantity: "1 cup (200g)", calories: 140, protein: 6, carbs: 18, fat: 5 },
            { food: "Kheer", quantity: "1 small bowl (100g)", calories: 180, protein: 5, carbs: 30, fat: 5 }
          ],
          snacks: [
            { food: "Mixed dry fruits", quantity: "40g handful", calories: 240, protein: 6, carbs: 20, fat: 16 },
            { food: "Protein shake with banana", quantity: "1 scoop + 1 banana + 200ml milk", calories: 320, protein: 25, carbs: 35, fat: 6 }
          ]
        },
        "maintenance": {
          breakfast: [
            { food: "Vegetable poha", quantity: "1 cup (150g)", calories: 220, protein: 6, carbs: 40, fat: 5 },
            { food: "Low fat milk", quantity: "200ml", calories: 100, protein: 6, carbs: 10, fat: 3 },
            { food: "Seasonal fruits", quantity: "1 medium fruit (150g)", calories: 80, protein: 1, carbs: 20, fat: 0 }
          ],
          lunch: [
            { food: "Whole wheat roti with dal", quantity: "2 rotis + 1 cup dal", calories: 292, protein: 16, carbs: 52, fat: 4 },
            { food: "Vegetable curry", quantity: "1 cup (150g)", calories: 120, protein: 4, carbs: 20, fat: 4 },
            { food: "Curd", quantity: "150g", calories: 90, protein: 6, carbs: 9, fat: 3 }
          ],
          dinner: [
            { food: "Rice with sambar", quantity: "1 cup rice + 1 cup sambar", calories: 280, protein: 10, carbs: 52, fat: 4 },
            { food: "Stir-fried vegetables", quantity: "1 cup (120g)", calories: 80, protein: 3, carbs: 12, fat: 3 },
            { food: "Buttermilk", quantity: "1 glass (200ml)", calories: 50, protein: 2, carbs: 6, fat: 1 }
          ],
          snacks: [
            { food: "Fruits with nuts", quantity: "1 fruit + 10 almonds", calories: 140, protein: 5, carbs: 20, fat: 6 },
            { food: "Herbal tea", quantity: "1 cup (240ml)", calories: 5, protein: 0, carbs: 1, fat: 0 }
          ]
        }
      },
      "non veg": {
        "weight loss": {
          breakfast: [
            { food: "Egg white omelet", quantity: "4 egg whites + vegetables", calories: 140, protein: 28, carbs: 4, fat: 1 },
            { food: "Whole wheat toast", quantity: "1 slice (25g)", calories: 80, protein: 3, carbs: 15, fat: 1 },
            { food: "Green tea", quantity: "1 cup (240ml)", calories: 2, protein: 0, carbs: 0, fat: 0 }
          ],
          lunch: [
            { food: "Grilled chicken breast", quantity: "120g", calories: 200, protein: 37, carbs: 0, fat: 4 },
            { food: "Brown rice", quantity: "1/2 cup cooked (100g)", calories: 110, protein: 2, carbs: 22, fat: 1 },
            { food: "Steamed vegetables", quantity: "1 cup (150g)", calories: 60, protein: 3, carbs: 12, fat: 0 }
          ],
          dinner: [
            { food: "Grilled fish (salmon)", quantity: "120g fillet", calories: 240, protein: 35, carbs: 0, fat: 10 },
            { food: "Quinoa", quantity: "1/2 cup cooked (90g)", calories: 110, protein: 4, carbs: 20, fat: 2 },
            { food: "Green salad", quantity: "1 large bowl (100g)", calories: 25, protein: 2, carbs: 5, fat: 0 }
          ],
          snacks: [
            { food: "Boiled eggs", quantity: "2 whole eggs", calories: 140, protein: 12, carbs: 1, fat: 10 },
            { food: "Fruits", quantity: "1 medium apple (150g)", calories: 80, protein: 0, carbs: 20, fat: 0 }
          ]
        },
        "weight gain": {
          breakfast: [
            { food: "Egg paratha", quantity: "2 parathas with 2 eggs", calories: 520, protein: 22, carbs: 45, fat: 28 },
            { food: "Full fat milk", quantity: "250ml", calories: 150, protein: 8, carbs: 12, fat: 8 },
            { food: "Banana", quantity: "1 large (120g)", calories: 105, protein: 1, carbs: 27, fat: 0 }
          ],
          lunch: [
            { food: "Chicken curry with rice", quantity: "150g chicken + 1.5 cups rice", calories: 580, protein: 40, carbs: 65, fat: 15 },
            { food: "Dal", quantity: "1 cup (200g)", calories: 180, protein: 12, carbs: 30, fat: 1 },
            { food: "Curd", quantity: "150g", calories: 90, protein: 6, carbs: 9, fat: 3 }
          ],
          dinner: [
            { food: "Fish curry with roti", quantity: "120g fish + 3 rotis", calories: 500, protein: 35, carbs: 48, fat: 18 },
            { food: "Vegetable stir-fry", quantity: "1 cup (150g)", calories: 120, protein: 4, carbs: 15, fat: 6 },
            { food: "Milk", quantity: "250ml", calories: 150, protein: 8, carbs: 12, fat: 8 }
          ],
          snacks: [
            { food: "Protein shake with peanut butter", quantity: "1 scoop + 2 tbsp PB + 250ml milk", calories: 420, protein: 30, carbs: 25, fat: 22 },
            { food: "Chicken sandwich", quantity: "2 slices bread + 80g chicken", calories: 380, protein: 28, carbs: 35, fat: 15 }
          ]
        },
        "maintenance": {
          breakfast: [
            { food: "Egg sandwich", quantity: "2 eggs + 2 slices bread", calories: 340, protein: 20, carbs: 30, fat: 16 },
            { food: "Low fat milk", quantity: "200ml", calories: 100, protein: 6, carbs: 10, fat: 3 },
            { food: "Orange juice", quantity: "150ml fresh", calories: 65, protein: 1, carbs: 16, fat: 0 }
          ],
          lunch: [
            { food: "Chicken with rice", quantity: "100g chicken + 1 cup rice", calories: 380, protein: 28, carbs: 45, fat: 8 },
            { food: "Dal", quantity: "3/4 cup (150g)", calories: 135, protein: 9, carbs: 22, fat: 1 },
            { food: "Mixed vegetables", quantity: "1 cup (150g)", calories: 80, protein: 3, carbs: 15, fat: 2 }
          ],
          dinner: [
            { food: "Fish curry", quantity: "100g fish in gravy", calories: 220, protein: 22, carbs: 8, fat: 12 },
            { food: "Roti", quantity: "2 medium rotis", calories: 160, protein: 6, carbs: 32, fat: 2 },
            { food: "Salad", quantity: "1 bowl (100g)", calories: 25, protein: 2, carbs: 5, fat: 0 }
          ],
          snacks: [
            { food: "Fruits with nuts", quantity: "1 fruit + 8 almonds", calories: 135, protein: 4, carbs: 20, fat: 5 },
            { food: "Boiled egg", quantity: "1 whole egg", calories: 70, protein: 6, carbs: 0, fat: 5 }
          ]
        }
      }
    };

    const workoutPlans = {
      "weight loss": {
        cardio: [
          { exercise: "Treadmill/Running", duration: "30 minutes", intensity: "Moderate to High" },
          { exercise: "Cycling", duration: "25 minutes", intensity: "High Intensity Intervals" },
          { exercise: "Jump Rope", duration: "15 minutes", intensity: "3 rounds of 5 min" }
        ],
        strength: [
          { day: "Day 1 - Push", exercises: [
            { name: "Push-ups", sets: 3, reps: "12-15", rest: "60s" },
            { name: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", rest: "60s" },
            { name: "Tricep Dips", sets: 3, reps: "8-12", rest: "45s" },
            { name: "Pike Push-ups", sets: 2, reps: "8-10", rest: "60s" }
          ]},
          { day: "Day 2 - Pull", exercises: [
            { name: "Pull-ups/Assisted Pull-ups", sets: 3, reps: "6-10", rest: "90s" },
            { name: "Dumbbell Rows", sets: 3, reps: "10-12", rest: "60s" },
            { name: "Face Pulls", sets: 3, reps: "12-15", rest: "45s" },
            { name: "Bicep Curls", sets: 3, reps: "10-12", rest: "45s" }
          ]},
          { day: "Day 3 - Legs", exercises: [
            { name: "Squats", sets: 4, reps: "12-15", rest: "90s" },
            { name: "Lunges", sets: 3, reps: "10 each leg", rest: "60s" },
            { name: "Calf Raises", sets: 3, reps: "15-20", rest: "45s" },
            { name: "Glute Bridges", sets: 3, reps: "12-15", rest: "45s" }
          ]}
        ]
      },
      "weight gain": {
        strength: [
          { day: "Day 1 - Push (Chest, Shoulders, Triceps)", exercises: [
            { name: "Bench Press/Push-ups", sets: 4, reps: "8-10", rest: "2-3 min" },
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
          { day: "Day 3 - Legs (Quads, Hamstrings, Glutes, Calves)", exercises: [
            { name: "Squats", sets: 4, reps: "8-10", rest: "3 min" },
            { name: "Romanian Deadlifts", sets: 4, reps: "8-10", rest: "2-3 min" },
            { name: "Bulgarian Split Squats", sets: 3, reps: "10-12 each", rest: "90s" },
            { name: "Leg Press", sets: 3, reps: "12-15", rest: "90s" },
            { name: "Walking Lunges", sets: 3, reps: "12 each leg", rest: "60s" },
            { name: "Calf Raises", sets: 4, reps: "15-20", rest: "60s" }
          ]}
        ],
        cardio: [
          { exercise: "Light Cardio", duration: "15-20 minutes", intensity: "Low intensity after workouts" }
        ]
      },
      "maintenance": {
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
          { exercise: "Moderate Cardio", duration: "25-30 minutes", intensity: "3-4 times per week" }
        ]
      }
    };

    setRecommendations({
      bmi,
      calories,
      protein,
      carbs,
      fat,
      diet: dietPlans[formData.type as keyof typeof dietPlans][formData.goal as keyof typeof dietPlans.veg],
      workout: workoutPlans[formData.goal as keyof typeof workoutPlans]
    });
    setShowResults(true);
    toast.success("Your personalized plan is ready!");
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
              Personal Diet & Exercise Planner
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your personalized diet chart with detailed nutrition and push-pull-legs workout plan
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
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-4 block">
                      Diet Type *
                    </Label>
                    <RadioGroup
                      value={formData.type}
                      onValueChange={(value) => handleRadioChange("type", value)}
                      className="flex gap-8"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="veg" id="veg" />
                        <Label htmlFor="veg">Vegetarian</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="non veg" id="non-veg" />
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
                        <RadioGroupItem value="weight loss" id="weight-loss" />
                        <Label htmlFor="weight-loss">Weight Loss</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="weight gain" id="weight-gain" />
                        <Label htmlFor="weight-gain">Weight Gain</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="maintenance" id="maintenance" />
                        <Label htmlFor="maintenance">Maintenance</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    onClick={generateRecommendations}
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate My Plan
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-xl">
                    <h3 className="text-sm font-medium">BMI</h3>
                    <p className="text-2xl font-bold">{recommendations.bmi}</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl">
                    <h3 className="text-sm font-medium">Calories</h3>
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
                </div>
              </div>

              <div className="space-y-8">
                {/* Diet Plan */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-green-700">
                      <Utensils className="w-6 h-6" />
                      Your Detailed Diet Plan
                    </CardTitle>
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
                        <div className="space-y-2">
                          {recommendations.workout.cardio.map((cardio: any, index: number) => (
                            <div key={index} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                              <span className="font-medium">{cardio.exercise}</span>
                              <span className="text-sm text-gray-600">{cardio.duration} - {cardio.intensity}</span>
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
