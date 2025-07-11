
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Send, MessageCircle, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Save to localStorage (simulating database save)
      const contactSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      const newSubmission = {
        ...formData,
        id: Date.now(),
        submittedAt: new Date().toISOString()
      };
      contactSubmissions.push(newSubmission);
      localStorage.setItem('contactSubmissions', JSON.stringify(contactSubmissions));
      
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      toast.error("Please fill in all required fields.");
    }
  };

  const faqs = [
    {
      question: "How quickly do you respond to messages?",
      answer: "We typically respond within 24 hours during business days."
    },
    {
      question: "Can you create custom meal plans?",
      answer: "Yes! We offer personalized meal planning services. Contact us for details."
    },
    {
      question: "Do you offer one-on-one coaching?",
      answer: "We have limited slots for personal coaching. Reach out to check availability."
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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have a question about fitness, nutrition, or just want to share your success story? 
              We'd love to hear from you! Our community is here to support your journey.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-md">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                  Send us a Message
                </CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="rounded-xl border-2 border-gray-200 focus:border-orange-400 bg-white/90"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="rounded-xl border-2 border-gray-200 focus:border-orange-400 bg-white/90"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="rounded-xl border-2 border-gray-200 focus:border-orange-400 bg-white/90"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className="rounded-xl border-2 border-gray-200 focus:border-orange-400 bg-white/90 resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ & Response Time */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Response Time */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6" />
                  <h3 className="text-lg font-bold">Quick Response Guaranteed</h3>
                </div>
                <p className="text-orange-100">
                  We pride ourselves on quick responses. Most messages get a reply within 2-4 hours during business hours!
                </p>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-l-4 border-orange-400 pl-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
