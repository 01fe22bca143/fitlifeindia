import { motion } from "framer-motion";
import { Calculator, BookOpen, Heart, Utensils, Target, Star } from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Smart Diet Planner",
    description: "Calculate your BMR, TDEE, and get personalized meal plans with accurate macros for your fitness goals."
  },
  {
    icon: BookOpen,
    title: "Free Fitness Articles",
    description: "Access expert-curated content on nutrition, workouts, and healthy recipes - all completely free."
  },
  {
    icon: Utensils,
    title: "Indian Meal Plans",
    description: "Get budget-friendly Indian meal suggestions with proper portions and nutritional information."
  },
  {
    icon: Target,
    title: "Goal-Based Planning",
    description: "Whether you want to lose weight, gain muscle, or maintain - we have the right plan for you."
  },
  {
    icon: Heart,
    title: "Health-First Approach",
    description: "All our recommendations are based on scientific evidence and focused on long-term health."
  },
  {
    icon: Star,
    title: "User-Friendly Interface",
    description: "Simple, intuitive design that makes planning your fitness journey effortless and enjoyable."
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-pink-500/5 to-purple-500/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-6">
            FitLife India Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to start your fitness journey - scientifically backed, budget-friendly, and designed for Indians
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;