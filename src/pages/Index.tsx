
import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import Newsletter from "@/components/Newsletter";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <FeaturedPosts />
      </motion.div>
      <Newsletter />
    </div>
  );
};

export default Index;
