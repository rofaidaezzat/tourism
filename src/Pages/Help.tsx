import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

export function Help() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6">
              Help Center
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Need assistance? We're here to help you 24/7. Choose how you'd like to reach us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Phone Support</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our support team for immediate assistance.
              </p>
              <a href="tel:+1234567890" className="text-blue-600 font-semibold hover:text-blue-700">
                +1 (234) 567-890
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <p className="text-gray-600 mb-6">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a href="mailto:support@studenttourism.com" className="text-blue-600 font-semibold hover:text-blue-700">
                support@studenttourism.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-6">
                Chat with our support agents in real-time.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Start Chat (Coming Soon)
              </button>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
             <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
             <div className="max-w-3xl mx-auto text-left space-y-4">
                 <div className="bg-gray-50 p-6 rounded-xl">
                     <h4 className="font-semibold mb-2">How do I book a trip?</h4>
                     <p className="text-gray-600">You can book directly through our website by selecting a package and clicking "Book Now". Alternatively, contact our support team.</p>
                 </div>
                 <div className="bg-gray-50 p-6 rounded-xl">
                     <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                     <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers.</p>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
