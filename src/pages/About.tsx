
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Heart, Target, Users, Award, Dumbbell, Apple } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "10,000+", label: "Community Members" },
    { icon: Apple, number: "200+", label: "Healthy Recipes" },
    { icon: Dumbbell, number: "50+", label: "Workout Plans" },
    { icon: Award, number: "5+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Accessibility First",
      description: "Making fitness and healthy living accessible to every young Indian, regardless of their budget or background."
    },
    {
      icon: Target,
      title: "Practical Solutions",
      description: "We focus on real, actionable advice that works in Indian homes, kitchens, and lifestyles."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by the community, for the community. Every recipe and tip comes from real experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About FitLife India
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make fitness and healthy living accessible to every young Indian. 
              No expensive gyms, no complicated diet plans—just practical, affordable solutions that work.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 shadow-lg">
                <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  FitLife India was born out of frustration. As young Indians trying to stay fit on a budget, 
                  we realized that most fitness advice was either too expensive or completely disconnected 
                  from our reality.
                </p>
                <p>
                  Expensive gym memberships, imported superfoods, and complicated meal plans just didn't work 
                  for someone living in a small apartment with a tight budget. We needed solutions that understood 
                  our constraints—both financial and practical.
                </p>
                <p>
                  So we started experimenting. We found ways to work out in small spaces, discovered protein-rich 
                  foods available at every local market, and created meal plans that actually fit our busy schedules 
                  and Indian taste preferences.
                </p>
                <p>
                  What started as personal experimentation became a community of thousands of young Indians 
                  supporting each other's fitness journeys. Today, FitLife India is that community's voice.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-400/20 to-purple-400/20 rounded-3xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop" 
                  alt="Fitness journey"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-2 rounded-xl">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">Made with Love</div>
                      <div className="text-sm text-gray-600">For Young Indians</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything we do is guided by these core principles that keep us connected to our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Contributors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals who make FitLife India possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Priya Sharma", role: "Nutrition Expert", expertise: "Budget Nutrition" },
              { name: "Arjun Patel", role: "Fitness Coach", expertise: "Home Workouts" },
              { name: "Meera Singh", role: "Recipe Developer", expertise: "Healthy Indian Food" },
              { name: "Dr. Rajesh Kumar", role: "Wellness Advisor", expertise: "Mental Health" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-gray-600 mb-2">{member.role}</p>
                    <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0 text-xs">
                      {member.expertise}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
