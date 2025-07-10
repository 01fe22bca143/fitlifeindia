
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-pink-400/20 to-purple-400/20">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-orange-400/30 rounded-full blur-xl"
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-pink-400/30 rounded-full blur-xl"
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400/30 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-6 border border-white/30">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="text-gray-700 font-medium">Welcome to FitLife India</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
            Affordable
            <br />
            <span className="text-5xl md:text-7xl">Fitness & Diet</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your health journey with budget-friendly fitness tips, 
            delicious Indian recipes, and practical wellness advice designed 
            for young Indians.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm bg-white/50"
          >
            Browse Articles
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
        >
          {[
            { number: "50+", label: "Healthy Recipes" },
            { number: "25+", label: "Workout Plans" },
            { number: "1000+", label: "Success Stories" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
