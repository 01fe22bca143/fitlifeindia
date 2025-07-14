import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Snowflake, 
  Wind, 
  MapPin, 
  Thermometer,
  Droplets,
  Eye,
  Clock
} from "lucide-react";

const indoorWorkouts = [
  {
    name: "HIIT Circuit",
    duration: "20-30 mins",
    exercises: ["Burpees", "Mountain Climbers", "Jump Squats", "Push-ups"],
    intensity: "High",
    equipment: "None"
  },
  {
    name: "Yoga Flow",
    duration: "30-45 mins", 
    exercises: ["Sun Salutations", "Warrior Poses", "Downward Dog", "Stretches"],
    intensity: "Low",
    equipment: "Yoga Mat"
  },
  {
    name: "Strength Training",
    duration: "45-60 mins",
    exercises: ["Squats", "Lunges", "Push-ups", "Planks"],
    intensity: "Medium",
    equipment: "Dumbbells (optional)"
  },
  {
    name: "Dance Fitness",
    duration: "30-45 mins",
    exercises: ["Bollywood Dance", "Zumba", "Bhangra", "Free Style"],
    intensity: "Medium",
    equipment: "None"
  }
];

const outdoorWorkouts = [
  {
    name: "Morning Walk/Jog",
    duration: "30-45 mins",
    exercises: ["Brisk Walking", "Light Jogging", "Stretches", "Breathing"],
    intensity: "Low-Medium",
    equipment: "Running Shoes"
  },
  {
    name: "Park Workout",
    duration: "45-60 mins",
    exercises: ["Pull-ups", "Bench Dips", "Running", "Playground Exercises"],
    intensity: "Medium-High",
    equipment: "None"
  },
  {
    name: "Cycling",
    duration: "45-90 mins",
    exercises: ["Road Cycling", "Hill Climbs", "Sprint Intervals", "Cool Down"],
    intensity: "Medium",
    equipment: "Bicycle"
  },
  {
    name: "Outdoor Yoga",
    duration: "45-60 mins",
    exercises: ["Nature Meditation", "Pranayama", "Asanas", "Relaxation"],
    intensity: "Low",
    equipment: "Yoga Mat"
  }
];

const WeatherWorkouts = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Simulated weather data for demo
  const getWeatherData = async (cityName: string) => {
    setLoading(true);
    
    // Simulate API call with realistic Indian weather data
    const mockWeatherData = {
      Delhi: { temp: 32, condition: "Clear", humidity: 65, windSpeed: 12, aqi: 180 },
      Mumbai: { temp: 29, condition: "Cloudy", humidity: 78, windSpeed: 15, aqi: 120 },
      Bangalore: { temp: 24, condition: "Partly Cloudy", humidity: 60, windSpeed: 8, aqi: 80 },
      Chennai: { temp: 35, condition: "Hot", humidity: 82, windSpeed: 10, aqi: 95 },
      Kolkata: { temp: 33, condition: "Humid", humidity: 85, windSpeed: 6, aqi: 160 },
      Hyderabad: { temp: 28, condition: "Clear", humidity: 55, windSpeed: 14, aqi: 75 }
    };

    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
    
    const data = mockWeatherData[cityName as keyof typeof mockWeatherData] || 
                  { temp: 30, condition: "Clear", humidity: 60, windSpeed: 10, aqi: 100 };
    
    setWeatherData({ ...data, city: cityName });
    generateRecommendations(data);
    setLoading(false);
  };

  const generateRecommendations = (weather: any) => {
    let recs: any[] = [];
    
    // Weather-based logic
    if (weather.temp > 35 || weather.condition.includes("Rain") || weather.aqi > 150) {
      recs = indoorWorkouts;
    } else if (weather.temp < 15 || weather.windSpeed > 20) {
      recs = [...indoorWorkouts.slice(0, 2), ...outdoorWorkouts.slice(0, 1)];
    } else {
      recs = [...outdoorWorkouts, ...indoorWorkouts.slice(0, 2)];
    }
    
    setRecommendations(recs);
  };

  const getWeatherIcon = (condition: string) => {
    if (condition.includes("Rain")) return <CloudRain className="w-8 h-8 text-blue-500" />;
    if (condition.includes("Cloud")) return <Cloud className="w-8 h-8 text-gray-500" />;
    if (condition.includes("Clear") || condition.includes("Hot")) return <Sun className="w-8 h-8 text-yellow-500" />;
    return <Wind className="w-8 h-8 text-gray-400" />;
  };

  const getIntensityColor = (intensity: string) => {
    if (intensity.includes("High")) return "bg-red-500";
    if (intensity.includes("Medium")) return "bg-orange-500";
    return "bg-green-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">
            🌤️ Weather-Based Workouts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get personalized workout recommendations based on your local weather conditions. Never miss a workout again!
          </p>
        </motion.div>

        {/* Weather Input */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="mb-8 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                Enter Your City
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  placeholder="Enter city name (e.g., Delhi, Mumbai, Bangalore)"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  onClick={() => getWeatherData(city)}
                  disabled={!city || loading}
                  className="bg-gradient-to-r from-blue-500 to-teal-500"
                >
                  {loading ? "Loading..." : "Get Recommendations"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Weather Display */}
        {weatherData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Card className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {getWeatherIcon(weatherData.condition)}
                  Current Weather in {weatherData.city}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-5 h-5 text-red-500" />
                    <span>{weatherData.temp}°C</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-blue-500" />
                    <span>{weatherData.humidity}% Humidity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="w-5 h-5 text-gray-500" />
                    <span>{weatherData.windSpeed} km/h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-purple-500" />
                    <span>AQI: {weatherData.aqi}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    {weatherData.condition}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Workout Recommendations */}
        {recommendations.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🏋️ Recommended Workouts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendations.map((workout, index) => (
                <motion.div
                  key={workout.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-bold text-gray-800">{workout.name}</CardTitle>
                        <Badge className={`${getIntensityColor(workout.intensity)} text-white`}>
                          {workout.intensity}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{workout.duration}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Exercises:</h4>
                          <div className="flex flex-wrap gap-2">
                            {workout.exercises.map((exercise: string, i: number) => (
                              <Badge key={i} variant="outline" className="text-sm">
                                {exercise}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-1">Equipment:</h4>
                          <p className="text-gray-600">{workout.equipment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border-teal-200">
            <CardHeader>
              <CardTitle className="text-teal-700">🌟 Weather Workout Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Hot Weather (&gt;35°C):</strong> Stay indoors, exercise in AC, drink plenty of water</li>
                <li>• <strong>Rainy Days:</strong> Perfect for home workouts, yoga, or gym sessions</li>
                <li>• <strong>High AQI (&gt;150):</strong> Avoid outdoor activities, opt for indoor exercises</li>
                <li>• <strong>Pleasant Weather (20-30°C):</strong> Best time for outdoor activities and sports</li>
                <li>• <strong>Winter/Cold:</strong> Warm up properly, layer clothing for outdoor workouts</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default WeatherWorkouts;