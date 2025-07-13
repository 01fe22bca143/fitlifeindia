
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Calculator, Target, Utensils, Dumbbell, Sparkles } from "lucide-react";
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

    const bmi = (parseFloat(formData.weight) / Math.pow(parseFloat(formData.height) / 100, 2)).toFixed(1);
    
    const dietPlans = {
      veg: {
        "weight loss": {
          breakfast: ["Oats with fruits and nuts", "Green tea", "Vegetable upma"],
          lunch: ["Brown rice with dal", "Mixed vegetable curry", "Salad"],
          dinner: ["Quinoa salad", "Grilled paneer", "Vegetable soup"],
          snacks: ["Fruits", "Nuts", "Green tea"]
        },
        "weight gain": {
          breakfast: ["Banana smoothie with nuts", "Paratha with ghee", "Milk"],
          lunch: ["Rice with dal and ghee", "Paneer curry", "Curd"],
          dinner: ["Roti with vegetables", "Kheer", "Milk"],
          snacks: ["Dry fruits", "Protein smoothie", "Banana"]
        },
        "maintenance": {
          breakfast: ["Poha with vegetables", "Milk", "Fruits"],
          lunch: ["Roti with dal", "Vegetable curry", "Curd"],
          dinner: ["Rice with sambar", "Vegetables", "Buttermilk"],
          snacks: ["Fruits", "Tea", "Nuts"]
        }
      },
      "non veg": {
        "weight loss": {
          breakfast: ["Egg white omelet", "Green tea", "Fruits"],
          lunch: ["Grilled chicken salad", "Brown rice", "Vegetables"],
          dinner: ["Fish curry", "Quinoa", "Salad"],
          snacks: ["Boiled eggs", "Fruits", "Green tea"]
        },
        "weight gain": {
          breakfast: ["Egg paratha", "Milk", "Banana"],
          lunch: ["Chicken curry with rice", "Dal", "Curd"],
          dinner: ["Fish with roti", "Vegetables", "Milk"],
          snacks: ["Protein shake", "Chicken sandwich", "Nuts"]
        },
        "maintenance": {
          breakfast: ["Egg sandwich", "Milk", "Fruits"],
          lunch: ["Chicken with rice", "Dal", "Vegetables"],
          dinner: ["Fish curry", "Roti", "Salad"],
          snacks: ["Fruits", "Boiled eggs", "Tea"]
        }
      }
    };

    const exercises = {
      "weight loss": [
        "30 minutes cardio (running/cycling)",
        "High-intensity interval training (HIIT)",
        "Jumping jacks - 3 sets of 30",
        "Burpees - 3 sets of 15",
        "Mountain climbers - 3 sets of 20"
      ],
      "weight gain": [
        "Weight training - compound exercises",
        "Squats - 4 sets of 12",
        "Deadlifts - 4 sets of 10",
        "Bench press - 4 sets of 12",
        "Pull-ups - 3 sets of 8"
      ],
      "maintenance": [
        "25 minutes moderate cardio",
        "Push-ups - 3 sets of 15",
        "Planks - 3 sets of 45 seconds",
        "Lunges - 3 sets of 12 each leg",
        "Yoga or stretching - 15 minutes"
      ]
    };

    setRecommendations({
      bmi,
      diet: dietPlans[formData.type as keyof typeof dietPlans][formData.goal as keyof typeof dietPlans.veg],
      exercise: exercises[formData.goal as keyof typeof exercises]
    });
    setShowResults(true);
    toast.success("Your personalized plan is ready!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 pt-20">
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
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
              Get your personalized diet chart and exercise plan based on your goals and preferences
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
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-xl inline-block">
                  <h3 className="text-lg font-bold">Your BMI: {recommendations.bmi}</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-green-700">
                      <Utensils className="w-6 h-6" />
                      Your Diet Plan
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {Object.entries(recommendations.diet).map(([meal, foods]: [string, any]) => (
                      <div key={meal} className="bg-white/70 p-4 rounded-xl">
                        <h4 className="font-bold capitalize text-green-800 mb-2">{meal}</h4>
                        <ul className="space-y-1">
                          {foods.map((food: string, index: number) => (
                            <li key={index} className="text-sm text-gray-700 flex items-center gap-2">
                              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                              {food}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-blue-700">
                      <Dumbbell className="w-6 h-6" />
                      Your Exercise Plan
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white/70 p-4 rounded-xl">
                      <h4 className="font-bold text-blue-800 mb-4">Daily Workout Routine</h4>
                      <ul className="space-y-3">
                        {recommendations.exercise.map((exercise: string, index: number) => (
                          <li key={index} className="text-sm text-gray-700 flex items-center gap-3">
                            <span className="w-6 h-6 bg-blue-400 text-white rounded-full flex items-center justify-center text-xs font-bold">
                              {index + 1}
                            </span>
                            {exercise}
                          </li>
                        ))}
                      </ul>
                    </div>
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
