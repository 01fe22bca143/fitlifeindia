
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing! We'll send you amazing content soon.");
      setEmail("");
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.1),transparent)] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent)] animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-12 border border-white/30 shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Join Our Community</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Get Weekly Fitness Tips
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join 5,000+ young Indians transforming their health. Get exclusive recipes, 
              workout plans, and motivation delivered to your inbox every week.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 py-6 rounded-full border-2 border-gray-200 focus:border-orange-400 bg-white/80 backdrop-blur-sm"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Subscribe Free
              </Button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
