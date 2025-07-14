import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Search, MapPin, TrendingDown, TrendingUp, IndianRupee, Star } from "lucide-react";

const foodData = [
  { name: "Moong Dal", protein: "24g", price: 120, per: "1kg", category: "Dal", availability: "High", priceChange: "down" },
  { name: "Chana Dal", protein: "22g", price: 110, per: "1kg", category: "Dal", availability: "High", priceChange: "stable" },
  { name: "Eggs", protein: "13g", price: 6, per: "piece", category: "Animal", availability: "High", priceChange: "up" },
  { name: "Paneer", protein: "18g", price: 350, per: "1kg", category: "Dairy", availability: "High", priceChange: "up" },
  { name: "Chicken Breast", protein: "31g", price: 280, per: "1kg", category: "Animal", availability: "Medium", priceChange: "stable" },
  { name: "Soybean", protein: "36g", price: 80, per: "1kg", category: "Plant", availability: "Medium", priceChange: "down" },
  { name: "Peanuts", protein: "26g", price: 200, per: "1kg", category: "Nuts", availability: "High", priceChange: "stable" },
  { name: "Milk", protein: "3.4g", price: 60, per: "1L", category: "Dairy", availability: "High", priceChange: "up" },
  { name: "Rajma", protein: "23g", price: 140, per: "1kg", category: "Dal", availability: "High", priceChange: "stable" },
  { name: "Fish", protein: "28g", price: 250, per: "1kg", category: "Animal", availability: "Medium", priceChange: "up" }
];

const cities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad"];

const BudgetFoodOptimizer = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [budget, setBudget] = useState("");
  const [proteinGoal, setProteinGoal] = useState("");
  const [foodPreference, setFoodPreference] = useState("");
  const [filteredFoods, setFilteredFoods] = useState(foodData);

  const handleOptimize = () => {
    let filtered = [...foodData];
    
    // Filter by food preference
    if (foodPreference === "veg") {
      filtered = filtered.filter(food => !["Animal"].includes(food.category));
    } else if (foodPreference === "eggetarian") {
      filtered = filtered.filter(food => !["Animal"].includes(food.category) || food.name === "Eggs");
    }

    // Sort by protein per rupee ratio
    filtered = filtered.sort((a, b) => {
      const aRatio = parseFloat(a.protein) / a.price;
      const bRatio = parseFloat(b.protein) / b.price;
      return bRatio - aRatio;
    });

    setFilteredFoods(filtered);
  };

  const calculateProteinPerRupee = (protein: string, price: number) => {
    return (parseFloat(protein) / price).toFixed(3);
  };

  const getPriceChangeIcon = (change: string) => {
    if (change === "up") return <TrendingUp className="w-4 h-4 text-red-500" />;
    if (change === "down") return <TrendingDown className="w-4 h-4 text-green-500" />;
    return <span className="w-4 h-4 text-gray-400">→</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-4">
            💸 Budget Food Optimizer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find the most affordable protein sources in your city. Get maximum nutrition for minimum cost!
          </p>
        </motion.div>

        {/* Optimizer Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="mb-8 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-orange-500" />
                Optimize Your Food Budget
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map(city => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Input
                  placeholder="Monthly Budget (₹)"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  type="number"
                />

                <Input
                  placeholder="Protein Goal (g/day)"
                  value={proteinGoal}
                  onChange={(e) => setProteinGoal(e.target.value)}
                  type="number"
                />

                <Select value={foodPreference} onValueChange={setFoodPreference}>
                  <SelectTrigger>
                    <SelectValue placeholder="Food Preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="veg">Vegetarian</SelectItem>
                    <SelectItem value="eggetarian">Eggetarian</SelectItem>
                    <SelectItem value="non-veg">Non-Vegetarian</SelectItem>
                  </SelectContent>
                </Select>

                <Button onClick={handleOptimize} className="bg-gradient-to-r from-orange-500 to-pink-500">
                  Optimize
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFoods.map((food, index) => (
            <motion.div
              key={food.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold text-gray-800">{food.name}</CardTitle>
                    {index < 3 && <Badge className="bg-gradient-to-r from-green-500 to-emerald-500">
                      <Star className="w-3 h-3 mr-1" />
                      Best Value
                    </Badge>}
                  </div>
                  <Badge variant="outline" className="w-fit">{food.category}</Badge>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Protein:</span>
                      <span className="font-semibold text-green-600">{food.protein}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Price:</span>
                      <div className="flex items-center gap-1">
                        <IndianRupee className="w-4 h-4" />
                        <span className="font-semibold">{food.price}</span>
                        <span className="text-sm text-gray-500">/{food.per}</span>
                        {getPriceChangeIcon(food.priceChange)}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Protein/₹:</span>
                      <span className="font-bold text-orange-600">
                        {calculateProteinPerRupee(food.protein, food.price)}g
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Availability:</span>
                      <Badge variant={food.availability === "High" ? "default" : "secondary"}>
                        <MapPin className="w-3 h-3 mr-1" />
                        {food.availability}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-700">💡 Money-Saving Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Buy dal and grains in bulk to get better prices</li>
                <li>• Eggs are one of the cheapest and most complete protein sources</li>
                <li>• Combine rice and dal to create a complete protein profile</li>
                <li>• Shop at local wholesale markets for better deals</li>
                <li>• Seasonal vegetables often provide better nutrition per rupee</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default BudgetFoodOptimizer;