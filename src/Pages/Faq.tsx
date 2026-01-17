import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is included in the travel packages?",
    answer: "Our packages typically include accommodation, transportation (flights/trains), guided tours, and some meals. Specific inclusions vary by package, so please check the details for each trip."
  },
  {
    question: "Do you offer travel insurance?",
    answer: "Yes, we strongly recommend travel insurance. We offer comprehensive travel insurance packages as an add-on during the booking process to cover medical emergencies, trip cancellations, and lost luggage."
  },
  {
    question: "Can I customize a travel package?",
    answer: "Currently, our student packages are pre-planned to ensure best pricing and coordination. However, for large groups (10+ students), we may be able to offer customized itineraries. Please contact our support team."
  },
  {
    question: "What is the cancellation policy?",
    answer: "Cancellations made 60 days before the trip are fully refundable (minus a small processing fee). Cancellations between 30-59 days receive a 50% refund. Cancellations within 30 days are non-refundable."
  },
  {
    question: "Are there age restrictions for student trips?",
    answer: "Our trips are designed for university and college students, typically aged 18-25. However, we also have packages suitable for high school students with chaperone supervision."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-600 text-lg">
              Find answers to the most common questions about our services and packages.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-blue-600" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-6 bg-gray-50 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
