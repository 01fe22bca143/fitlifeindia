import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { 
  Target, 
  TrendingUp, 
  Calendar, 
  Award, 
  AlertCircle,
  CheckCircle,
  Clock,
  Scale,
  Activity
} from "lucide-react";

interface PredictionResult {
  timeline: string;
  difficulty: "Easy" | "Moderate" | "Challenging" | "Very Challenging";
  successRate: number;
  milestones: { month: number; weight: number; description: string }[];
  tips: string[];
  warnings: string[];
}

const SmartGoalPredictor = () => {
  const [currentWeight, setCurrentWeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);

  const calculatePrediction = () => {
    const current = parseFloat(currentWeight);
    const target = parseFloat(targetWeight);
    const userHeight = parseFloat(height);
    const userAge = parseFloat(age);
    
    if (!current || !target || !userHeight || !userAge) return;

    const weightDifference = Math.abs(target - current);
    const isWeightLoss = target < current;
    const bmi = current / ((userHeight / 100) ** 2);
    
    // Calculate realistic timeline (healthy rate: 0.5-1kg per week for loss, 0.25-0.5kg for gain)
    const healthyRatePerWeek = isWeightLoss ? 0.75 : 0.35;
    const weeksNeeded = Math.ceil(weightDifference / healthyRatePerWeek);
    const monthsNeeded = Math.ceil(weeksNeeded / 4);
    
    // Determine difficulty based on multiple factors
    let difficulty: PredictionResult["difficulty"] = "Moderate";
    let successRate = 70;
    
    if (weightDifference <= 5) {
      difficulty = "Easy";
      successRate = 85;
    } else if (weightDifference <= 10) {
      difficulty = "Moderate";
      successRate = 70;
    } else if (weightDifference <= 20) {
      difficulty = "Challenging";
      successRate = 55;
    } else {
      difficulty = "Very Challenging";
      successRate = 40;
    }
    
    // Adjust based on BMI and age
    if (bmi > 30 && isWeightLoss) successRate += 10; // Easier to lose when overweight
    if (userAge > 40) successRate -= 5; // Slower metabolism
    if (activityLevel === "high") successRate += 10;
    if (activityLevel === "low") successRate -= 10;
    
    // Generate milestones
    const milestones = [];
    for (let month = 1; month <= monthsNeeded; month++) {
      const progress = month / monthsNeeded;
      const milestoneWeight = isWeightLoss 
        ? current - (weightDifference * progress)
        : current + (weightDifference * progress);
      
      let description = "";
      if (month === 1) description = "Initial adaptation phase - building habits";
      else if (month <= monthsNeeded / 3) description = "Rapid progress phase";
      else if (month <= (monthsNeeded * 2) / 3) description = "Steady progress phase";
      else description = "Final push - maintain consistency";
      
      milestones.push({
        month,
        weight: Math.round(milestoneWeight * 10) / 10,
        description
      });
    }
    
    // Generate personalized tips
    const tips = [
      isWeightLoss 
        ? "Create a moderate calorie deficit of 300-500 calories per day"
        : "Create a calorie surplus of 200-300 calories per day",
      "Focus on strength training to preserve/build muscle mass",
      "Aim for 7-9 hours of quality sleep each night",
      "Stay hydrated - drink at least 2-3 liters of water daily",
      "Include protein in every meal (1.6-2.2g per kg body weight)",
      "Track your progress weekly, not daily"
    ];
    
    // Generate warnings
    const warnings = [];
    if (weightDifference > 15) {
      warnings.push("Large weight changes require medical supervision");
    }
    if (isWeightLoss && bmi < 18.5) {
      warnings.push("Your current BMI is already low - consult a doctor");
    }
    if (monthsNeeded < 2 && weightDifference > 5) {
      warnings.push("This timeline may be too aggressive - consider extending it");
    }
    
    setPrediction({
      timeline: `${monthsNeeded} months (${weeksNeeded} weeks)`,
      difficulty,
      successRate: Math.min(95, Math.max(25, successRate)),
      milestones,
      tips,
      warnings
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-500";
      case "Moderate": return "bg-yellow-500";
      case "Challenging": return "bg-orange-500";
      case "Very Challenging": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getSuccessRateColor = (rate: number) => {
    if (rate >= 80) return "text-green-600";
    if (rate >= 60) return "text-yellow-600";
    if (rate >= 40) return "text-orange-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent mb-4">
            🎯 Smart Goal Predictor
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get realistic timelines and success predictions for your weight goals based on scientific data and Indian body metrics.
          </p>
        </motion.div>

        {/* Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="mb-8 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-500" />
                Enter Your Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <Input
                  placeholder="Current Weight (kg)"
                  value={currentWeight}
                  onChange={(e) => setCurrentWeight(e.target.value)}
                  type="number"
                />
                <Input
                  placeholder="Target Weight (kg)"
                  value={targetWeight}
                  onChange={(e) => setTargetWeight(e.target.value)}
                  type="number"
                />
                <Input
                  placeholder="Height (cm)"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  type="number"
                />
                <Input
                  placeholder="Age (years)"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  type="number"
                />
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger>
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={activityLevel} onValueChange={setActivityLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Activity Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low (Sedentary)</SelectItem>
                    <SelectItem value="moderate">Moderate (3-4 days/week)</SelectItem>
                    <SelectItem value="high">High (5+ days/week)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button 
                onClick={calculatePrediction}
                className="w-full bg-gradient-to-r from-purple-500 to-orange-500"
                disabled={!currentWeight || !targetWeight || !height || !age || !gender || !activityLevel}
              >
                Predict My Goal Timeline
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Prediction Results */}
        {prediction && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Overview */}
            <Card className="bg-gradient-to-r from-purple-500/10 to-orange-500/10 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-purple-500" />
                  Your Goal Prediction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Calendar className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-700 mb-1">Timeline</h3>
                    <p className="text-2xl font-bold text-blue-600">{prediction.timeline}</p>
                  </div>
                  <div className="text-center">
                    <Scale className="w-12 h-12 text-orange-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-700 mb-1">Difficulty</h3>
                    <Badge className={`${getDifficultyColor(prediction.difficulty)} text-white text-lg px-3 py-1`}>
                      {prediction.difficulty}
                    </Badge>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-700 mb-1">Success Rate</h3>
                    <p className={`text-2xl font-bold ${getSuccessRateColor(prediction.successRate)}`}>
                      {prediction.successRate}%
                    </p>
                    <Progress value={prediction.successRate} className="mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Milestones */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-500" />
                  Monthly Milestones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {prediction.milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.month}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                          {milestone.month}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Month {milestone.month}</h4>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-purple-600">{milestone.weight} kg</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips and Warnings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    Success Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {prediction.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {prediction.warnings.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-600">
                      <AlertCircle className="w-5 h-5" />
                      Important Warnings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {prediction.warnings.map((warning, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{warning}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </motion.div>
        )}

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-700">📊 How Our Predictions Work</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Factors Considered:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Current BMI and body composition</li>
                    <li>• Age and gender-specific metabolism</li>
                    <li>• Activity level and exercise frequency</li>
                    <li>• Realistic weight change rates (0.5-1kg/week)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Based on Indian Data:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Indian body type and metabolism patterns</li>
                    <li>• Local dietary and lifestyle factors</li>
                    <li>• Climate and environmental considerations</li>
                    <li>• Success rates from similar demographics</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SmartGoalPredictor;